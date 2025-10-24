"use client"

import React from 'react'
import { AppShell } from '@/components/app/AppShell'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import toast from 'react-hot-toast'

export default function MensagensPage() {
  const queryClient = useQueryClient()
  const { data: me } = useQuery({
    queryKey: ['auth','me'],
    queryFn: () => apiClient.getMe(),
    staleTime: 60_000,
  })
  const roles: string[] = (me?.roles || []) as string[]
  const canCreateThread = roles.includes('teacher') || roles.includes('staff') || roles.includes('manager')
  const roleLabel: 'aluno'|'prof'|'func'|'gestao'|'responsavel' =
    roles.includes('manager') ? 'gestao' :
    roles.includes('teacher') ? 'prof' :
    roles.includes('staff') ? 'func' :
    roles.includes('guardian') ? 'responsavel' : 'aluno'

  const { data: threadsData, isLoading: threadsLoading, isError: threadsError } = useQuery({
    queryKey: ['messages','threads'],
    queryFn: () => apiClient.listThreads(),
    staleTime: 15_000,
  })

  const [selectedId, setSelectedId] = React.useState<number | null>(null)
  const { data: threadDetail, refetch: refetchThread, isLoading: threadLoading, isError: threadError } = useQuery({
    queryKey: ['messages','thread', selectedId],
    queryFn: () => apiClient.getThread(Number(selectedId)),
    enabled: !!selectedId,
    staleTime: 5_000,
  })

  const [compose, setCompose] = React.useState({ subject: '', participants: '' })
  const createThread = useMutation({
    mutationFn: async () => {
      const ids = compose.participants
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
        .map(Number)
        .filter(n => !Number.isNaN(n))
      return apiClient.createThread({ subject: compose.subject, participant_ids: ids })
    },
    onSuccess: (t: any) => {
      toast.success('Conversa criada')
      setCompose({ subject: '', participants: '' })
      queryClient.invalidateQueries({ queryKey: ['messages','threads'] })
      setSelectedId(Number(t.id))
    },
    onError: () => toast.error('Falha ao criar conversa'),
  })

  const [messageBody, setMessageBody] = React.useState('')
  const sendMessage = useMutation({
    mutationFn: () => apiClient.postMessage(Number(selectedId), { body: messageBody }),
    onSuccess: () => {
      setMessageBody('')
      refetchThread()
      queryClient.invalidateQueries({ queryKey: ['messages','threads'] })
    },
    onError: () => toast.error('Falha ao enviar mensagem'),
  })

  const threads = threadsData?.items || []

  return (
    <AppShell title="Mensagens" userRole={roleLabel} nav={[{ id: 'msgs', label: 'Mensagens' }]}> 
      <section className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-3">
            <div className="font-semibold mb-2">Conversas</div>
            {threadsLoading && <div className="text-xs text-gray-500">Carregando...</div>}
            {threadsError && <div className="text-xs text-red-600">Erro ao carregar conversas</div>}
            <div className="space-y-2">
              {threads.map((t: any) => (
                <button key={t.id} onClick={()=>setSelectedId(Number(t.id))} className={`w-full text-left p-2 rounded border ${selectedId===t.id? 'border-amber-400 bg-amber-50' : ''}`}>
                  <div className="font-medium truncate">{t.subject}</div>
                  <div className="text-xs text-gray-500 truncate">{t.last_message_preview || 'Sem mensagens'}</div>
                </button>
              ))}
              {threads.length === 0 && <div className="text-sm text-gray-500">Nenhuma conversa.</div>}
            </div>

            {canCreateThread && (
              <div className="mt-4">
                <div className="text-sm font-medium mb-1">Nova conversa</div>
                <input className="w-full rounded border px-2 py-1 mb-2" placeholder="Assunto" value={compose.subject} onChange={(e)=>setCompose(c=>({...c, subject: e.target.value}))} />
                <input className="w-full rounded border px-2 py-1 mb-2" placeholder="IDs de participantes (ex.: 12,45)" value={compose.participants} onChange={(e)=>setCompose(c=>({...c, participants: e.target.value}))} />
                <button className="w-full px-3 py-2 rounded bg-amber-600 text-white" onClick={()=>createThread.mutate()} disabled={!compose.subject || createThread.isPending}>Criar conversa</button>
              </div>
            )}
          </div>

          <div className="md:col-span-2 rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-3">
            {selectedId ? (
              <div className="flex flex-col h-[60vh]">
                <div className="flex-1 overflow-auto space-y-3 mb-3">
                  {threadLoading && <div className="text-xs text-gray-500">Carregando mensagens...</div>}
                  {threadError && <div className="text-xs text-red-600">Erro ao carregar mensagens</div>}
                  {(threadDetail?.messages || []).map((m: any) => (
                    <div key={m.id} className="rounded border p-2">
                      <div className="text-xs text-gray-500">{new Date(m.created_at).toLocaleString('pt-BR')} • Usuário {m.sender_user_id}</div>
                      <div>{m.body}</div>
                    </div>
                  ))}
                  {(threadDetail?.messages || []).length === 0 && <div className="text-sm text-gray-500">Sem mensagens.</div>}
                </div>
                <form onSubmit={(e)=>{e.preventDefault(); if(!messageBody) return; sendMessage.mutate()}} className="flex gap-2">
                  <input className="flex-1 rounded border px-2 py-2" placeholder="Escrever mensagem..." value={messageBody} onChange={(e)=>setMessageBody(e.target.value)} />
                  <button type="submit" className="px-3 py-2 rounded bg-amber-600 text-white" disabled={!messageBody || sendMessage.isPending}>Enviar</button>
                </form>
              </div>
            ) : (
              <div className="text-sm text-gray-600">Selecione uma conversa ao lado</div>
            )}
          </div>
        </div>
      </section>
    </AppShell>
  )
}
