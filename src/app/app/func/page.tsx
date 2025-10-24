"use client"

import React from 'react'
import { AppShell } from '@/components/app/AppShell'
import { MiniCalendar } from '@/components/app/MiniCalendar'
import { QuickActions } from '@/components/app/QuickActions'
import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'

export default function FuncionarioPage() {
  const nav = [
    { id: 'inicio', label: 'Início (Hoje)' },
    { id: 'tarefas', label: 'Tarefas & Chamados' },
    { id: 'calendario', label: 'Calendário do Setor', href: '/app/calendario' },
    { id: 'notificacoes', label: 'Notificações', href: '/app/notificacoes' },
    { id: 'comunicacao', label: 'Comunicação', href: '/app/mensagens' },
    { id: 'formularios', label: 'Formulários & Checklists' },
    { id: 'conhecimento', label: 'Conhecimento & Protocolos' },
    { id: 'relatorios', label: 'Relatórios' },
    { id: 'config', label: 'Configurações & Acessibilidade' },
  ]

  // Eventos do mês atual (do backend)
  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
  const { data: apiEvents } = useQuery({
    queryKey: ['events','func','month', startOfMonth.toISOString(), endOfMonth.toISOString()],
    queryFn: () => apiClient.listEvents({ start: startOfMonth.toISOString(), end: endOfMonth.toISOString() }),
    staleTime: 30_000,
  })
  const mapCategory = (c?: string): 'clube'|'passeio'|'escola'|'prazo' => {
    const s = (c || '').toLowerCase()
    if (s.includes('club')) return 'clube'
    if (s.includes('deadline') || s.includes('prazo')) return 'prazo'
    if (s.includes('cultural') || s.includes('trip') || s.includes('passeio')) return 'passeio'
    return 'escola'
  }
  const events = (apiEvents || []).map((ev: any) => ({ id: String(ev.id), date: String(ev.start_datetime).slice(0,10), title: ev.title, category: mapCategory(ev.category) }))

  return (
    <AppShell title="Funcionário" userRole="func" nav={nav} ties={{ escolas: ['Escola Demo - São Paulo'] }}>
      <section id="inicio" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4">
              <h2 className="text-xl font-bold mb-2">Minhas próximas tarefas</h2>
              <ul className="text-sm list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Verificar iluminação do corredor B</li>
                <li>Preparar sala para reunião acessível</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4">
              <h2 className="text-xl font-bold mb-2">Alertas</h2>
              <ul className="text-sm list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Checklist de acessibilidade pendente para o evento de sexta</li>
              </ul>
            </div>
          </div>
          <QuickActions items={[{ label: 'Abrir chamado', href: '#' }, { label: 'Criar checklist', href: '#' }, { label: 'Publicar aviso', href: '#' }]} />
        </div>
        <div className="space-y-4">
          <MiniCalendar events={events} onOpenFull={()=>{ location.href='/app/calendario' }} />
          <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-600 dark:text-gray-400">Nudges da IA (demo): prever demanda de rampa móvel e conflitos de agenda.</div>
        </div>
      </section>

      <section id="tarefas" className="space-y-2"><h2 className="text-xl font-bold">Tarefas & Chamados</h2><p className="text-sm text-gray-600 dark:text-gray-400">Kanban simples (A Fazer / Em Andamento / Concluído), SLA e prioridade.</p></section>
      <section id="comunicacao" className="space-y-2"><h2 className="text-xl font-bold">Comunicação</h2><p className="text-sm text-gray-600 dark:text-gray-400">Mensagens internas com docentes/gestão; anúncios setoriais.</p></section>
      <section id="formularios" className="space-y-2"><h2 className="text-xl font-bold">Formulários & Checklists</h2><p className="text-sm text-gray-600 dark:text-gray-400">Modelos: Acessibilidade de Evento, Segurança de Corredor, Laboratório/TI, Transporte.</p></section>
      <section id="conhecimento" className="space-y-2"><h2 className="text-xl font-bold">Conhecimento & Protocolos</h2><p className="text-sm text-gray-600 dark:text-gray-400">Base de SOPs com busca e vídeos curtos.</p></section>
      <section id="relatorios" className="space-y-2"><h2 className="text-xl font-bold">Relatórios</h2><p className="text-sm text-gray-600 dark:text-gray-400">MTTR, chamados por categoria, preventivas, incidentes.</p></section>
      <section id="config" className="space-y-2"><h2 className="text-xl font-bold">Configurações & Acessibilidade</h2><p className="text-sm text-gray-600 dark:text-gray-400">Notificações, idioma, tema, preferências de acessibilidade.</p></section>
    </AppShell>
  )
}
