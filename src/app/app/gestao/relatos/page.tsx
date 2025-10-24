"use client"

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import { InstitutionalShell } from '@/components/app/InstitutionalShell'

export default function RelatosGestaoPage(){
  const { data: me } = useQuery({ queryKey: ['auth','me'], queryFn: ()=>apiClient.getMe(), staleTime: 60_000 })
  const roles: string[] = (me?.roles || []) as string[]
  const isManager = roles.includes('manager')

  const [filters, setFilters] = React.useState<{ rtype: string; status: string; start: string; end: string }>({ rtype: '', status: '', start: '', end: '' })

  const params = React.useMemo(()=>{
    const p: any = {}
    if (filters.rtype) p.rtype = filters.rtype
    if (filters.status) p.status_filter = filters.status
    if (filters.start) p.start = new Date(filters.start).toISOString()
    if (filters.end) p.end = new Date(filters.end).toISOString()
    return p
  }, [filters])

  const { data, isLoading, isError } = useQuery({
    queryKey: ['reports','school', params.rtype||'', params.status_filter||'', params.start||'', params.end||''],
    queryFn: ()=>apiClient.listReports(params),
    staleTime: 10_000,
    enabled: isManager,
  })

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
    { id: 'data', label: 'Gerenciamento de dados', items: [
      { label: 'Adicionar nova família', href: '#' },
      { label: 'Informações', href: '#' },
    ]},
  ]

  if (!isManager) {
    return (
      <InstitutionalShell title="Relatos da escola" menus={menus}>
        <div className="rounded-md border border-white/10 bg-white/5 p-4 text-sm text-gray-300">Acesso negado. Disponível apenas para gestores.</div>
      </InstitutionalShell>
    )
  }

  const items = Array.isArray(data) ? data : []

  return (
    <InstitutionalShell title="Relatos da escola" menus={menus}>
      <section className="space-y-6">
        <div className="rounded-md border border-white/10 bg-white/5 p-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
            <label className="text-sm text-gray-300">Tipo
              <select className="mt-1 w-full rounded border border-white/10 bg-transparent px-2 py-1" value={filters.rtype} onChange={(e)=>setFilters(f=>({...f, rtype: e.target.value}))}>
                <option value="">Todos</option>
                <option value="bullying">Bullying</option>
                <option value="harassment">Assédio</option>
                <option value="discrimination">Discriminação</option>
                <option value="barrier">Barreiras de acessibilidade</option>
                <option value="safety">Segurança</option>
                <option value="other">Outros</option>
              </select>
            </label>
            <label className="text-sm text-gray-300">Status
              <select className="mt-1 w-full rounded border border-white/10 bg-transparent px-2 py-1" value={filters.status} onChange={(e)=>setFilters(f=>({...f, status: e.target.value}))}>
                <option value="">Todos</option>
                <option value="submitted">Enviado</option>
                <option value="under_review">Em análise</option>
                <option value="investigating">Investigando</option>
                <option value="resolved">Resolvido</option>
                <option value="closed">Fechado</option>
              </select>
            </label>
            <label className="text-sm text-gray-300">Início
              <input type="date" className="mt-1 w-full rounded border border-white/10 bg-transparent px-2 py-1" value={filters.start} onChange={(e)=>setFilters(f=>({...f, start: e.target.value}))} />
            </label>
            <label className="text-sm text-gray-300">Fim
              <input type="date" className="mt-1 w-full rounded border border-white/10 bg-transparent px-2 py-1" value={filters.end} onChange={(e)=>setFilters(f=>({...f, end: e.target.value}))} />
            </label>
            <div className="text-sm text-gray-400">{isLoading? 'Carregando…' : isError? 'Erro ao carregar' : `${items.length} resultados`}</div>
          </div>
        </div>

        <div className="rounded-md border border-white/10 bg-white/5 p-4 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-300">
                <th className="px-3 py-2">Data</th>
                <th className="px-3 py-2">Protocolo</th>
                <th className="px-3 py-2">Tipo</th>
                <th className="px-3 py-2">Título</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Urgência</th>
                <th className="px-3 py-2">Confidencialidade</th>
                <th className="px-3 py-2">Anônimo</th>
              </tr>
            </thead>
            <tbody>
              {items.map((r: any) => (
                <tr key={r.id} className="border-t border-white/10">
                  <td className="px-3 py-2 text-gray-300">{new Date(r.created_at).toLocaleString('pt-BR')}</td>
                  <td className="px-3 py-2 text-gray-100"><a className="text-amber-400 hover:underline" href={`/app/gestao/relatos/${r.id}`}>{r.protocol}</a></td>
                  <td className="px-3 py-2 text-gray-300">{r.type}</td>
                  <td className="px-3 py-2 text-gray-100">{r.title}</td>
                  <td className="px-3 py-2">{r.status}</td>
                  <td className="px-3 py-2">{r.urgency || '-'}</td>
                  <td className="px-3 py-2">{r.confidentiality_level || '-'}</td>
                  <td className="px-3 py-2">{r.is_anonymous? 'Sim' : 'Não'}</td>
                </tr>
              ))}
              {items.length===0 && (
                <tr><td className="px-3 py-4 text-gray-300" colSpan={8}>Nenhum relato encontrado.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="rounded-md border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
          Necessita detalhar um protocolo? Use a busca por protocolo na moderação ou abra a entrada pelo painel de moderação em <a className="text-amber-400 hover:underline" href="/app/moderacao">/app/moderacao</a>.
        </div>
      </section>
    </InstitutionalShell>
  )
}
