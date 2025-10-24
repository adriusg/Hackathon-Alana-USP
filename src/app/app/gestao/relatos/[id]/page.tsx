"use client"

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import { InstitutionalShell } from '@/components/app/InstitutionalShell'

export default function RelatoDetalhePage(){
  const params = useParams() as { id?: string }
  const router = useRouter()
  const id = Number(params?.id)
  const qc = useQueryClient()

  const { data: me } = useQuery({ queryKey: ['auth','me'], queryFn: ()=>apiClient.getMe(), staleTime: 60_000 })
  const roles: string[] = (me?.roles || []) as string[]
  const isManager = roles.includes('manager') || roles.includes('staff')

  const menus = [
    { id: 'home', label: 'Página Inicial', href: '/app/gestao' },
    { id: 'reports', label: 'Área de Relatórios', items: [
      { label: 'Sugestões da IA', href: '/app/gestao/ia' },
      { label: 'Relatório de participação', href: '/app/gestao/relatorios/participacao' },
      { label: 'Relatos da escola', href: '/app/gestao/relatos' },
    ]},
    { id: 'notify', label: 'Área de Notificações', items: [
      { label: 'Calendário', href: '/app/calendario' },
      { label: 'Histórico', href: '/app/notificacoes' },
      { label: 'Enviar notificação', href: '/app/notificacoes' },
    ]},
  ]

  const { data: report, isLoading, isError, refetch } = useQuery({
    queryKey: ['report', id],
    queryFn: ()=>apiClient.getReportById(id),
    enabled: !!id && isManager,
    staleTime: 10_000,
  })

  const { data: events } = useQuery({
    queryKey: ['report', id, 'events'],
    queryFn: ()=>apiClient.listReportEvents(id),
    enabled: !!id && isManager,
    staleTime: 5_000,
  })

  const [statusForm, setStatusForm] = React.useState<{ status: string; resolution: string; actions: string; follow: boolean; followDate: string }>({ status: 'under_review', resolution: '', actions: '', follow: false, followDate: '' })

  const updateStatus = useMutation({
    mutationFn: async () => apiClient.updateReportStatus(id, {
      status: statusForm.status as any,
      resolution: statusForm.resolution || undefined,
      actions_taken: statusForm.actions || undefined,
      follow_up_required: statusForm.follow || undefined,
      follow_up_date: statusForm.followDate ? new Date(statusForm.followDate).toISOString() : undefined,
    }),
    onSuccess: async () => { await refetch(); await qc.invalidateQueries({ queryKey: ['reports','school'] }) },
  })

  const [note, setNote] = React.useState('')
  const addNote = useMutation({
    mutationFn: async () => apiClient.createReportEvent(id, { event_type: 'note', description: note, is_visible_to_reporter: true }),
    onSuccess: async () => { setNote(''); await qc.invalidateQueries({ queryKey: ['report', id, 'events'] }) },
  })

  if (!isManager) {
    return (
      <InstitutionalShell title="Relato" menus={menus}>
        <div className="rounded-md border border-white/10 bg-white/5 p-4 text-sm text-gray-300">Acesso negado. Disponível apenas para gestores/funcionários.</div>
      </InstitutionalShell>
    )
  }

  return (
    <InstitutionalShell title="Relato" menus={menus}>
      <section className="space-y-6">
        {isLoading && <div className="rounded-md border border-white/10 bg-white/5 p-4 text-sm text-gray-300">Carregando…</div>}
        {isError && <div className="rounded-md border border-white/10 bg-white/5 p-4 text-sm text-red-300">Erro ao carregar relato.</div>}
        {report && (
          <>
            <div className="rounded-md border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-gray-300">Protocolo</div>
              <div className="text-lg font-semibold text-white">{report.protocol}</div>
              <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div><div className="text-gray-400">Tipo</div><div className="text-gray-100">{report.type}</div></div>
                <div><div className="text-gray-400">Status</div><div className="text-gray-100">{report.status}</div></div>
                <div><div className="text-gray-400">Urgência</div><div className="text-gray-100">{report.urgency || '-'}</div></div>
                <div><div className="text-gray-400">Confidencialidade</div><div className="text-gray-100">{report.confidentiality_level || '-'}</div></div>
              </div>
              <div className="mt-3 text-gray-100 whitespace-pre-wrap">{report.title} — {report.description}</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="rounded-md border border-white/10 bg-white/5 p-4">
                <div className="font-medium mb-2">Atualizar status</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <label className="text-sm text-gray-300">Status
                    <select className="mt-1 w-full rounded border border-white/10 bg-transparent px-2 py-1" value={statusForm.status} onChange={(e)=>setStatusForm(s=>({ ...s, status: e.target.value }))}>
                      {['submitted','under_review','investigating','resolved','closed'].map(s=> <option key={s} value={s}>{s}</option>)}
                    </select>
                  </label>
                  <label className="text-sm text-gray-300">Follow up em
                    <input type="date" className="mt-1 w-full rounded border border-white/10 bg-transparent px-2 py-1" value={statusForm.followDate} onChange={(e)=>setStatusForm(s=>({ ...s, followDate: e.target.value }))} />
                  </label>
                  <label className="text-sm md:col-span-2 text-gray-300">Ações adotadas
                    <textarea className="mt-1 w-full rounded border border-white/10 bg-transparent px-2 py-1" rows={3} value={statusForm.actions} onChange={(e)=>setStatusForm(s=>({ ...s, actions: e.target.value }))} />
                  </label>
                  <label className="text-sm md:col-span-2 text-gray-300">Resolução
                    <textarea className="mt-1 w-full rounded border border-white/10 bg-transparent px-2 py-1" rows={3} value={statusForm.resolution} onChange={(e)=>setStatusForm(s=>({ ...s, resolution: e.target.value }))} />
                  </label>
                  <label className="text-sm flex items-center gap-2 text-gray-300">
                    <input type="checkbox" checked={statusForm.follow} onChange={(e)=>setStatusForm(s=>({ ...s, follow: e.currentTarget.checked }))} /> Requer acompanhamento
                  </label>
                  <div>
                    <button className="px-3 py-2 rounded-md bg-amber-600 text-white disabled:opacity-60" onClick={()=>updateStatus.mutate()} disabled={updateStatus.isPending}>Salvar</button>
                  </div>
                </div>
              </div>

              <div className="rounded-md border border-white/10 bg-white/5 p-4">
                <div className="font-medium mb-2">Adicionar anotação</div>
                <div className="flex items-start gap-2">
                  <textarea className="flex-1 rounded border border-white/10 bg-transparent px-2 py-2 min-h-[96px]" placeholder="Registrar anotação visível ao relator" value={note} onChange={(e)=>setNote(e.target.value)} />
                  <button className="px-3 py-2 rounded-md bg-amber-600 text-white disabled:opacity-60" onClick={()=>addNote.mutate()} disabled={!note.trim() || addNote.isPending}>Adicionar</button>
                </div>
              </div>
            </div>

            <div className="rounded-md border border-white/10 bg-white/5 p-4">
              <div className="font-medium mb-2">Linha do tempo</div>
              <div className="space-y-2">
                {(events||[]).slice().reverse().map((e:any)=> (
                  <div key={e.id} className="rounded border border-white/10 p-2 text-sm">
                    <div className="flex items-center justify-between">
                      <div className="text-gray-300">{new Date(e.created_at).toLocaleString('pt-BR')} • {e.event_type}</div>
                      <div className="text-xs text-gray-400">{e.is_visible_to_reporter? 'visível' : 'interno'}</div>
                    </div>
                    <div className="text-gray-100 whitespace-pre-wrap">{e.description}</div>
                    {(e.old_status || e.new_status) && (
                      <div className="text-xs text-gray-400">{e.old_status} → {e.new_status}</div>
                    )}
                  </div>
                ))}
                {(events||[]).length===0 && <div className="text-sm text-gray-300">Sem eventos.</div>}
              </div>
            </div>

            <div className="text-sm"><a className="text-amber-400 hover:underline" href="/app/gestao/relatos">Voltar para lista</a></div>
          </>
        )}
      </section>
    </InstitutionalShell>
  )
}
