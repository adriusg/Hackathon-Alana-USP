"use client"

import React from 'react'
import { AppShell } from '@/components/app/AppShell'
import { ContentCarousel } from '@/components/app/ContentCarousel'
import { PillRotator } from '@/components/app/PillRotator'
import { MiniCalendar } from '@/components/app/MiniCalendar'
import { SafeReportBox } from '@/components/app/SafeReportBox'
import { QuickActions } from '@/components/app/QuickActions'
import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'

export default function ResponsavelPage() {
  const nav = [
    { id: 'inicio', label: 'Início' },
    { id: 'calendario', label: 'Calendário', href: '/app/calendario' },
    { id: 'notificacoes', label: 'Notificações', href: '/app/notificacoes' },
    { id: 'relatos', label: 'Pedir Ajuda/Relatar' },
    { id: 'biblioteca', label: 'Biblioteca & Pílulas' },
    { id: 'perfil', label: 'Meu Perfil & Acessibilidade' },
  ]

  const items = [
    { id: 'c1', title: 'Comunicado: Passeio', description: 'Autorização e orientações acessíveis.', href: '#', tag: 'Escola' },
    { id: 'c2', title: 'Guia rápido: CNV em casa', description: 'Comunicação Não-Violenta com crianças e adolescentes.', href: '#', tag: 'Famílias' },
    { id: 'c3', title: 'Vídeo: Acessibilidade digital', description: 'Como ativar legendas e alto contraste.', href: '#', tag: 'Acessibilidade' },
    { id: 'c4', title: 'FAQ da escola', description: 'Respostas às dúvidas mais frequentes.', href: '/faq', tag: 'FAQ' },
  ]

  const pills = [
    { id: 'p1', text: 'Confirmar presença ajuda a escola a organizar transporte e inclusão.' },
    { id: 'p2', text: 'Dúvida recorrente? Sugira uma entrada de FAQ para reduzir filas.' },
    { id: 'p3', text: 'Pílulas socioemocionais: “Como acolher depois de um conflito”.' },
  ]

  // Eventos do mês atual via API
  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
  const { data: apiEvents } = useQuery({
    queryKey: ['events','responsavel','month', startOfMonth.toISOString(), endOfMonth.toISOString()],
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
    <AppShell title="Responsável" userRole="responsavel" nav={nav} ties={{ escolas: ['Escola Demo - São Paulo'], turmas: ['7º A', '8º B'] }}>
      <section id="inicio" className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Bem-vindo(a)</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <ContentCarousel items={items} />
            <PillRotator pills={pills} />
            <QuickActions items={[{ label: 'Responder autorizações', href: '#' }, { label: 'Ver calendário', href: '/app/calendario' }, { label: 'Ir ao FAQ', href: '/faq' }]} />
          </div>
          <div className="space-y-4">
            <MiniCalendar events={events} onOpenFull={()=>{ location.href='/app/calendario' }} />
            <SafeReportBox audience="responsavel" />
          </div>
        </div>
      </section>

      <section id="biblioteca" className="space-y-2"><h2 className="text-xl font-bold">Biblioteca & Pílulas</h2><p className="text-gray-600 dark:text-gray-400">Conteúdos curtos revisados pela escola (vídeos, podcasts, guias).</p></section>
      <section id="perfil" className="space-y-2"><h2 className="text-xl font-bold">Meu Perfil & Acessibilidade</h2><p className="text-gray-600 dark:text-gray-400">Preferências de comunicação por canal/horário e acessibilidade.</p></section>
    </AppShell>
  )
}
