"use client"

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import { InstitutionalShell } from '@/components/app/InstitutionalShell'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line, CartesianGrid, Legend } from 'recharts'

export default function GestaoPage() {
  const { data: me } = useQuery({ queryKey: ['auth','me'], queryFn: ()=>apiClient.getMe(), staleTime: 60_000 })
  const roles: string[] = (me?.roles || []) as string[]
  const isManager = roles.includes('manager')

  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)

  // Dados
  const { data: events } = useQuery({
    queryKey: ['events','gestao','month', startOfMonth.toISOString(), endOfMonth.toISOString()],
    queryFn: () => apiClient.listEvents({ start: startOfMonth.toISOString(), end: endOfMonth.toISOString() }),
    staleTime: 30_000,
    enabled: isManager,
  })
  const { data: clustersData } = useQuery({ queryKey: ['nlp','clusters','gestao'], queryFn: ()=>apiClient.listClusters({ include_members: false }), staleTime: 30_000, enabled: isManager })
  const clusters = Array.isArray(clustersData?.items) ? clustersData.items : []
  const { data: suggData } = useQuery({ queryKey: ['suggestions','gestao','draft'], queryFn: ()=>apiClient.listSuggestions({ status_filter: 'draft' }), staleTime: 30_000, enabled: isManager })
  const suggestions = Array.isArray(suggData?.items) ? suggData.items : []
  const { data: modData } = useQuery({ queryKey: ['moderation','pending','gestao'], queryFn: ()=>apiClient.listPendingModeration(), staleTime: 15_000, enabled: isManager })
  const moderationItems = modData?.items || []

  // Menus superiores (com dropdowns)
  const menus = [
    { id: 'home', label: 'Página Inicial', href: '/app/gestao' },
    { id: 'reports', label: 'Área de Relatórios', items: [
      { label: 'Sugestões da IA', href: '/app/gestao/ia' },
      { label: 'Relatório de participação', href: '/app/gestao/relatorios/participacao' },
      { label: 'Relatos da escola', href: '/app/gestao/relatos' },
      { label: 'Infrações na plataforma', href: '/app/moderacao' },
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
      <InstitutionalShell title="Área Institucional" menus={menus}>
        <div className="rounded-md border border-slate-200 bg-white p-4 text-sm text-slate-700">Acesso negado. Disponível apenas para gestores.</div>
      </InstitutionalShell>
    )
  }

  // Preparar gráficos
  const clusterBarData = clusters.map((c: any, i: number) => ({ name: c.label || `Cluster ${i+1}`, tam: c.meta?.size ?? 0 }))
  const eventByCategory = (events || []).reduce((acc: Record<string, number>, ev: any) => { const k = (ev.category || 'outros'); acc[k] = (acc[k]||0)+1; return acc }, {})
  const eventPieData = Object.keys(eventByCategory).map(k => ({ name: k, value: eventByCategory[k] }))
  const COLORS = ['#60a5fa','#34d399','#f59e0b','#f43f5e','#a78bfa']

  // Participação (aproximação): eventos por semana do mês
  const weekOf = (d: Date) => Math.ceil((d.getDate() - ((d.getDay()+6)%7)) / 7)
  const lines = [1,2,3,4,5].map(w => ({ semana: `Sem ${w}`, eventos: 0 }))
  ;(events||[]).forEach((ev: any) => { const w = weekOf(new Date(ev.start_datetime)); if (w>=1 && w<=5) lines[w-1].eventos++ })

  return (
    <InstitutionalShell title="Área Institucional" menus={menus}>
      <section className="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <StatCard title="Eventos no mês" value={(events||[]).length} subtitle="Agenda da escola" />
            <StatCard title="Clusters ativos" value={clusters.length} subtitle="Grupos por afinidade" />
            <StatCard title="Sugestões (rascunho)" value={suggestions.length} subtitle="Aguardando revisão" />
            <StatCard title="Pend. moderação" value={moderationItems.length} subtitle="Conteúdos a revisar" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-md border border-slate-200 bg-white p-4">
              <div className="font-medium mb-2 text-slate-900">Tamanho dos grupos (clusters)</div>
              {clusterBarData.length === 0 ? (
                <div className="text-sm text-slate-600">Nenhum cluster disponível.</div>
              ) : (
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={clusterBarData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" tick={{ fill: '#334155' }} interval={0} angle={-15} textAnchor="end" height={50} />
                      <YAxis tick={{ fill: '#334155' }} />
                      <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', color: '#0f172a' }} />
                      <Bar dataKey="tam" fill="#f59e0b" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>

            <div className="rounded-md border border-slate-200 bg-white p-4">
              <div className="font-medium mb-2 text-slate-900">Distribuição de eventos por categoria (mês)</div>
              {eventPieData.length === 0 ? (
                <div className="text-sm text-slate-600">Sem eventos no período.</div>
              ) : (
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={eventPieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
                        {eventPieData.map((_, i) => (
                          <Cell key={i} fill={COLORS[i % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', color: '#0f172a' }} />
                      <Legend wrapperStyle={{ color: '#334155' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-4">
            <div className="font-medium mb-2 text-slate-900">Atividade por semana</div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lines}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="semana" tick={{ fill: '#334155' }} />
                  <YAxis tick={{ fill: '#334155' }} />
                  <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', color: '#0f172a' }} />
                  <Line type="monotone" dataKey="eventos" stroke="#34d399" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-4">
            <div className="font-medium mb-2 text-slate-900">Sugestões recentes</div>
            <ul className="space-y-2">
              {suggestions.slice(0,5).map((s:any)=> (
                <li key={s.id} className="rounded border border-slate-200 p-3 bg-white">
                  <div className="text-sm text-slate-900">{s.title} <span className="ml-2 text-xs text-slate-500">{s.status}</span></div>
                  <div className="text-sm text-slate-800 whitespace-pre-wrap">{s.text}</div>
                </li>
              ))}
              {suggestions.length===0 && <li className="text-sm text-slate-600">Sem sugestões ainda.</li>}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-md border border-slate-200 bg-white p-4">
            <div className="font-medium mb-2 text-slate-900">Pendências de moderação</div>
            <div className="space-y-2">
              {(moderationItems||[]).slice(0,6).map((it:any)=> (
                <div key={it.id} className="rounded border border-slate-200 p-2 text-sm bg-white">
                  <div className="flex items-center justify-between">
                    <div className="text-slate-800 truncate">{it.content?.slice(0,80) || 'Conteúdo pendente'}</div>
                    <a className="text-amber-600 hover:underline" href="/app/moderacao">Abrir fila</a>
                  </div>
                </div>
              ))}
              {moderationItems.length===0 && <div className="text-sm text-slate-600">Nenhuma pendência.</div>}
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-4 text-sm text-slate-700">
            Acesso rápido: <a className="text-amber-700 hover:underline" href="/app/calendario">Calendário</a> • <a className="text-amber-700 hover:underline" href="/app/gestao/ia">Sugestões da IA</a> • <a className="text-amber-700 hover:underline" href="/app/notificacoes">Notificações</a>
          </div>
        </div>
      </section>
    </InstitutionalShell>
  )
}

function StatCard({ title, value, subtitle }: { title: string; value: number | string; subtitle?: string }){
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <div className="text-xs text-slate-500">{title}</div>
      <div className="text-2xl font-semibold text-slate-900">{value}</div>
      {subtitle && <div className="text-xs text-slate-500">{subtitle}</div>}
    </div>
  )
}
