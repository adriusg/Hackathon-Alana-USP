"use client"

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import { InstitutionalShell } from '@/components/app/InstitutionalShell'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, LineChart, Line } from 'recharts'

export default function ParticipacaoPage(){
  const { data: me } = useQuery({ queryKey: ['auth','me'], queryFn: ()=>apiClient.getMe(), staleTime: 60_000 })
  const roles: string[] = (me?.roles || []) as string[]
  const isManager = roles.includes('manager')

  const [start, setStart] = React.useState<string>('')
  const [end, setEnd] = React.useState<string>('')

  const params = React.useMemo(()=>{
    const p: any = {}
    if (start) p.start = new Date(start).toISOString()
    if (end) p.end = new Date(end).toISOString()
    return p
  }, [start, end])

  const { data } = useQuery({
    queryKey: ['events','stats','attendance', params.start||'', params.end||''],
    queryFn: ()=>apiClient.getAttendanceStats(params),
    staleTime: 15_000,
    enabled: isManager,
  })

  const menus = [
    { id: 'home', label: 'Página Inicial', href: '/app/gestao' },
    { id: 'reports', label: 'Área de Relatórios', items: [
      { label: 'Sugestões da IA', href: '/app/gestao/ia' },
      { label: 'Relatório de participação', href: '/app/gestao/relatorios/participacao' },
      { label: 'Relatos de Alunos', href: '/app/gestao/relatos' },
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
      <InstitutionalShell title="Relatório de participação" menus={menus}>
        <div className="rounded-md border border-slate-200 bg-white p-4 text-sm text-slate-700">Acesso negado. Disponível apenas para gestores.</div>
      </InstitutionalShell>
    )
  }

  const perEvent = data?.per_event || []
  const totalCards = [
    { k: 'going', label: 'Confirmados' },
    { k: 'maybe', label: 'Talvez' },
    { k: 'not_going', label: 'Não vão' },
    { k: 'checked_in', label: 'Check-ins' },
  ]

  return (
    <InstitutionalShell title="Relatório de participação" menus={menus}>
      <section className="space-y-6">
        <div className="rounded-md border border-slate-200 bg-white p-4">
          <div className="flex flex-wrap items-end gap-4">
            <label className="text-sm text-slate-700">Início
              <input type="date" className="ml-2 rounded border border-slate-300 bg-white px-2 py-1 text-sm" value={start} onChange={(e)=>setStart(e.target.value)} />
            </label>
            <label className="text-sm text-slate-700">Fim
              <input type="date" className="ml-2 rounded border border-slate-300 bg-white px-2 py-1 text-sm" value={end} onChange={(e)=>setEnd(e.target.value)} />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {totalCards.map((c)=> (
            <div key={c.k} className="rounded-md border border-slate-200 bg-white p-4">
              <div className="text-xs text-slate-500">{c.label}</div>
              <div className="text-2xl font-semibold text-slate-900">{data?.totals?.[c.k] ?? 0}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-md border border-slate-200 bg-white p-4">
            <div className="font-medium mb-2 text-slate-900">Participação por evento</div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={perEvent}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="title" tick={{ fill: '#334155' }} hide/>
                  <YAxis tick={{ fill: '#334155' }} />
                  <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', color: '#0f172a' }} />
                  <Legend wrapperStyle={{ color: '#334155' }} />
                  <Bar dataKey="going" stackId="a" fill="#34d399" name="Confirmados" />
                  <Bar dataKey="maybe" stackId="a" fill="#f59e0b" name="Talvez" />
                  <Bar dataKey="not_going" stackId="a" fill="#f43f5e" name="Não vão" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-4">
            <div className="font-medium mb-2 text-slate-900">Taxa de presença (por evento)</div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={perEvent}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey={(d)=> new Date(d.start_datetime).toLocaleDateString('pt-BR')} tick={{ fill: '#334155' }} />
                  <YAxis tick={{ fill: '#334155' }} domain={[0,1]} />
                  <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', color: '#0f172a' }} />
                  <Line type="monotone" dataKey="attendance_rate" stroke="#60a5fa" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-4 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-600">
                <th className="px-3 py-2">Data</th>
                <th className="px-3 py-2">Título</th>
                <th className="px-3 py-2">Categoria</th>
                <th className="px-3 py-2">Confirmados</th>
                <th className="px-3 py-2">Talvez</th>
                <th className="px-3 py-2">Não vão</th>
                <th className="px-3 py-2">Check-ins</th>
                <th className="px-3 py-2">Taxa</th>
              </tr>
            </thead>
            <tbody>
              {perEvent.map((r: any) => (
                <tr key={r.event_id} className="border-t border-slate-200">
                  <td className="px-3 py-2 text-slate-700">{new Date(r.start_datetime).toLocaleString('pt-BR')}</td>
                  <td className="px-3 py-2 text-slate-900">{r.title}</td>
                  <td className="px-3 py-2 text-slate-700">{r.category || '-'}</td>
                  <td className="px-3 py-2">{r.going}</td>
                  <td className="px-3 py-2">{r.maybe}</td>
                  <td className="px-3 py-2">{r.not_going}</td>
                  <td className="px-3 py-2">{r.checked_in}</td>
                  <td className="px-3 py-2">{Math.round((r.attendance_rate||0)*100)}%</td>
                </tr>
              ))}
              {perEvent.length===0 && <tr><td className="px-3 py-4 text-slate-600" colSpan={8}>Sem dados para o período.</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </InstitutionalShell>
  )
}
