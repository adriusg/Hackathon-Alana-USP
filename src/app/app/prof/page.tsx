"use client"

import React from 'react'
import { AppShell } from '@/components/app/AppShell'
import { MiniCalendar } from '@/components/app/MiniCalendar'
import { QuickActions } from '@/components/app/QuickActions'
import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'

export default function ProfessorPage() {
  const nav = [
    { id: 'inicio', label: 'Início' },
    { id: 'turmas', label: 'Minhas Turmas' },
    { id: 'planejar', label: 'Planejar Atividades' },
    { id: 'calendario', label: 'Calendário', href: '/app/calendario' },
    { id: 'notificacoes', label: 'Notificações', href: '/app/notificacoes' },
    { id: 'comunicacao', label: 'Comunicação', href: '/app/mensagens' },
    { id: 'clubes', label: 'Clubes' },
    { id: 'relatos', label: 'Relatos & Escuta' },
    { id: 'relatorios', label: 'Relatórios & Indicadores' },
    { id: 'biblioteca', label: 'Biblioteca & Curadoria' },
    { id: 'moderacao', label: 'Moderação', href: '/app/moderacao' },
    { id: 'config', label: 'Configurações & Acessibilidade' },
  ]

  // Eventos do mês atual via API
  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
  const { data: apiEvents } = useQuery({
    queryKey: ['events','prof','month', startOfMonth.toISOString(), endOfMonth.toISOString()],
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
  const events = (apiEvents || []).map((ev: any) => ({
    id: String(ev.id),
    date: String(ev.start_datetime).slice(0,10),
    title: ev.title,
    category: mapCategory(ev.category),
  }))

  return (
    <AppShell title="Professor" userRole="prof" nav={nav} ties={{ escolas: ['Escola Demo - São Paulo'], turmas: ['7º A', '8º B'] }}>
      {/* Início */}
      <section id="inicio" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4">
            <h2 className="text-xl font-bold mb-2">Hoje</h2>
            <ul className="text-sm list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Próximos 3 eventos</li>
              <li>Recados pendentes</li>
              <li>Autorizações a coletar</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-semibold mb-2">Pendências</h3>
              <ul className="text-sm list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Aprovar solicitações dos alunos</li>
                <li>Revisar fila de moderação</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-semibold mb-2">Ideias rápidas</h3>
              <ul className="text-sm list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Pílula de convivência do dia</li>
                <li>Atividade de 15 min no pátio</li>
              </ul>
            </div>
          </div>
          <QuickActions items={[{ label: 'Criar evento', href: '/app/calendario' }, { label: 'Enviar recado', href: '#' }, { label: 'Postar enquete', href: '#' }]} />
        </div>
        <div className="space-y-4">
          <MiniCalendar events={events} onOpenFull={()=>{ location.href='/app/calendario' }} />
          <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-600 dark:text-gray-400">Mapa de interesses (nuvem de tags) — agregado por turma.</div>
        </div>
      </section>

      {/* Minhas Turmas */}
      <section id="turmas" className="space-y-3">
        <h2 className="text-xl font-bold">Minhas Turmas</h2>
        <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4">
          <div className="flex items-center gap-2 mb-3">
            <label className="text-sm">Turma</label>
            <select className="rounded border px-2 py-1 text-sm"><option>7º A</option><option>8º B</option></select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded border p-3"><div className="font-semibold mb-1">Feed</div><div className="text-sm text-gray-600 dark:text-gray-400">Postar recados, anexos, áudio; enquetes; moderação inline.</div></div>
            <div className="rounded border p-3"><div className="font-semibold mb-1">Projetos & Grupos</div><div className="text-sm text-gray-600 dark:text-gray-400">Equipes com composição justa; kanban simples; rubricas leves.</div></div>
            <div className="rounded border p-3"><div className="font-semibold mb-1">Engajamento & Clima</div><div className="text-sm text-gray-600 dark:text-gray-400">Check-ins agregados; presença; alertas suaves.</div></div>
            <div className="rounded border p-3"><div className="font-semibold mb-1">Arquivos & Links</div><div className="text-sm text-gray-600 dark:text-gray-400">Materiais acessíveis com legenda e alto contraste.</div></div>
          </div>
        </div>
      </section>

      {/* Planejar */}
      <section id="planejar" className="space-y-3">
        <h2 className="text-xl font-bold">Planejar Atividades (Copiloto + Catálogo)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="rounded border p-3">
            <div className="font-semibold mb-1">Copiloto (prompt guiado)</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Série, tempo, objetivo, tema de vínculo e recursos → roteiro com adaptações de acessibilidade.</div>
          </div>
          <div className="rounded border p-3">
            <div className="font-semibold mb-1">Catálogo curado</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Filtros por segmento/tema/tempo/espaço; ações: aplicar, favoritar, duplicar.</div>
          </div>
        </div>
      </section>

      {/* Comunicação, Clubes, Relatos, Relatórios, Biblioteca, Moderação, Configurações */}
      <section id="comunicacao" className="space-y-2"><h2 className="text-xl font-bold">Comunicação</h2><p className="text-sm text-gray-600 dark:text-gray-400">Mensageria com famílias/estudantes (moderada), templates inclusivos e confirmação de leitura.</p></section>
      <section id="clubes" className="space-y-2"><h2 className="text-xl font-bold">Clubes</h2><p className="text-sm text-gray-600 dark:text-gray-400">Criar/gerir clubes, timeline moderada, interclube e certificados.</p></section>
      <section id="relatos" className="space-y-2"><h2 className="text-xl font-bold">Relatos & Escuta</h2><p className="text-sm text-gray-600 dark:text-gray-400">Fila por categoria, acolhimento, encaminhamento e linha do tempo do caso.</p></section>
      <section id="relatorios" className="space-y-2"><h2 className="text-xl font-bold">Relatórios & Indicadores</h2><p className="text-sm text-gray-600 dark:text-gray-400">Engajamento, vínculos, acessibilidade e alertas de exclusão — sempre agregados.</p></section>
      <section id="biblioteca" className="space-y-2"><h2 className="text-xl font-bold">Biblioteca & Curadoria</h2><p className="text-sm text-gray-600 dark:text-gray-400">Coleções por tema/segmento; "Plano em 15 min"; histórias inclusivas semanais.</p></section>
      <section id="moderacao" className="space-y-2"><h2 className="text-xl font-bold">Moderação</h2><p className="text-sm text-gray-600 dark:text-gray-400">Fila única: posts de alunos, propostas, imagens e eventos; aprovar/editar/devolver.</p></section>
      <section id="config" className="space-y-2"><h2 className="text-xl font-bold">Configurações & Acessibilidade</h2><p className="text-sm text-gray-600 dark:text-gray-400">Notificações, idioma, tema, modelos de turma e preferências de acessibilidade.</p></section>
    </AppShell>
  )
}
