"use client"

import React from 'react'
import { AppShell } from '@/components/app/AppShell'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import toast from 'react-hot-toast'

export default function ModeracaoPage() {
  const queryClient = useQueryClient()
  const { data: me } = useQuery({
    queryKey: ['auth','me'],
    queryFn: () => apiClient.getMe(),
    staleTime: 60_000,
  })
  const roles: string[] = (me?.roles || []) as string[]
  const canModerate = roles.includes('teacher') || roles.includes('staff') || roles.includes('manager')

  const { data, isLoading, isError } = useQuery({
    queryKey: ['moderation','pending'],
    queryFn: () => apiClient.listPendingModeration(),
    staleTime: 15_000,
    enabled: !!canModerate,
  })

  const approve = useMutation({
    mutationFn: (id: number) => apiClient.approvePost(id),
    onSuccess: () => {
      toast.success('Post aprovado')
      queryClient.invalidateQueries({ queryKey: ['moderation','pending'] })
    },
    onError: () => toast.error('Falha ao aprovar post'),
  })

  const reject = useMutation({
    mutationFn: ({ id, reason }: { id: number, reason?: string }) => apiClient.rejectPost(id, reason),
    onSuccess: () => {
      toast.success('Post rejeitado')
      queryClient.invalidateQueries({ queryKey: ['moderation','pending'] })
    },
    onError: () => toast.error('Falha ao rejeitar post'),
  })

  const [reasons, setReasons] = React.useState<Record<number, string>>({})
  const onReasonChange = (id: number, v: string) => setReasons(r => ({ ...r, [id]: v }))

  const items = data?.items || []

  return (
    <AppShell title="Moderação" userRole="prof" nav={[{ id: 'fila', label: 'Fila' }]}> 
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">Fila de Moderação</h1>
        {!canModerate && (
          <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-600">
            Acesso negado. Você não possui permissão para moderar conteúdos.
          </div>
        )}
        {canModerate && isLoading && <div className="text-sm text-gray-600 dark:text-gray-400">Carregando...</div>}
        {canModerate && isError && <div className="text-sm text-red-600">Erro ao carregar fila</div>}
        {canModerate && !isLoading && !isError && (
          <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800 text-left">
                <tr>
                  <th className="px-3 py-2">Clube</th>
                  <th className="px-3 py-2">Conteúdo</th>
                  <th className="px-3 py-2">Autor</th>
                  <th className="px-3 py-2">Criado</th>
                  <th className="px-3 py-2 w-[280px]">Ações</th>
                </tr>
              </thead>
              <tbody>
                {items.map((it: any) => (
                  <tr key={it.id} className="border-t border-gray-100 dark:border-gray-800 align-top">
                    <td className="px-3 py-2">{it.club_name}</td>
                    <td className="px-3 py-2 whitespace-pre-wrap max-w-[520px]">{it.content}</td>
                    <td className="px-3 py-2">{it.author_id}</td>
                    <td className="px-3 py-2">{it.created_at ? new Date(it.created_at).toLocaleString('pt-BR') : '-'}</td>
                    <td className="px-3 py-2">
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <button className="px-2 py-1 rounded bg-emerald-600 text-white" onClick={()=>approve.mutate(Number(it.id))} disabled={approve.isPending}>Aprovar</button>
                          <button className="px-2 py-1 rounded border border-red-600 text-red-700" onClick={()=>reject.mutate({ id: Number(it.id), reason: reasons[it.id] })} disabled={reject.isPending}>Rejeitar</button>
                        </div>
                        <input
                          className="w-full rounded border px-2 py-1 text-xs"
                          placeholder="Opcional: motivo da rejeição"
                          value={reasons[it.id] || ''}
                          onChange={(e)=>onReasonChange(it.id, e.target.value)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
                {items.length === 0 && (
                  <tr><td className="px-3 py-4 text-gray-500" colSpan={5}>Nenhum conteúdo pendente.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </AppShell>
  )
}
