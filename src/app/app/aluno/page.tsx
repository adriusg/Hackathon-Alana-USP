"use client"

import React from 'react'
import { AppShell } from '@/components/app/AppShell'
import { ContentCarousel } from '@/components/app/ContentCarousel'
import { PillRotator } from '@/components/app/PillRotator'
import { MiniCalendar } from '@/components/app/MiniCalendar'
import { QuickActions } from '@/components/app/QuickActions'
import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'

export default function AlunoPage() {
  const [modo, setModo] = React.useState<'kids'|'teens'>(() => (typeof window !== 'undefined' && localStorage.getItem('aluno-modo') as any) || 'teens')
  React.useEffect(() => { try { localStorage.setItem('aluno-modo', modo) } catch {} }, [modo])

  const nav = [
    { id: 'inicio', label: 'Início' },
    { id: 'clubes', label: 'Clubes' },
    { id: 'turma', label: 'Minha Turma' },
    { id: 'questionario', label: 'Questionário', href: '/app/questionario' },
    { id: 'calendario', label: 'Calendário', href: '/app/calendario' },
    { id: 'notificacoes', label: 'Notificações', href: '/app/notificacoes' },
    { id: 'relatos', label: 'Pedir Ajuda/Relatar', href: '/app/relatos' },
    { id: 'biblioteca', label: 'Biblioteca & Pílulas' },
    { id: 'perfil', label: 'Meu Perfil & Acessibilidade' },
  ]

  const items = [
    { id: 'c1', title: 'Histórias em áudio', description: 'Coleção de contos com TTS e legendas.', href: '#', tag: 'Biblioteca' },
    { id: 'c2', title: 'Vídeo: Convivência', description: 'Respeito nas redes e na escola.', href: '#', tag: 'Socioemocional' },
    { id: 'c3', title: 'Podcast: Ciência', description: 'Curiosidades astronômicas da semana.', href: '#', tag: 'Clubes' },
    { id: 'c4', title: 'Produções dos estudantes', description: 'Galeria moderada da turma.', href: '#', tag: 'Turma' },
  ]

  const pills = [
    { id: 'p1', text: 'Jogos cooperativos ajudam a reduzir conflitos na sala.' },
    { id: 'p2', text: 'Peça ajuda quando precisar: professores e colegas estão por perto.' },
    { id: 'p3', text: 'Diversidade é força: cada pessoa contribui de um jeito.' },
  ]

  // Eventos do mês atual
  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
  const { data: apiEvents } = useQuery({
    queryKey: ['events','aluno','month', startOfMonth.toISOString(), endOfMonth.toISOString()],
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
    date: String(ev.start_datetime).slice(0, 10),
    title: ev.title,
    category: mapCategory(ev.category),
  }))

  return (
    <AppShell title="Aluno" userRole="aluno" nav={nav} ties={{ escolas: ['Escola Demo - São Paulo'], turmas: ['7º A', '8º B'] }}>
      {/* Topo: saudação + modo */}
      <section id="inicio" className="space-y-6">
        <div className="rounded-3xl bg-gradient-to-r from-amber-50 to-white dark:from-amber-900/10 dark:to-gray-900 border border-amber-100/70 dark:border-gray-800 px-6 py-5">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Bem-vindo(a) 👋</h1>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600 dark:text-gray-400">Modo:</span>
              <div className="inline-flex rounded-lg border border-amber-200 dark:border-gray-700 overflow-hidden">
                <button onClick={()=>setModo('kids')} className={`px-3 py-1.5 text-sm ${modo==='kids' ? 'bg-amber-500 text-white' : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-amber-50/50'}`}>Kids</button>
                <button onClick={()=>setModo('teens')} className={`px-3 py-1.5 text-sm ${modo==='teens' ? 'bg-amber-500 text-white' : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-amber-50/50'}`}>Teens</button>
              </div>
            </div>
          </div>

          <div className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl">
            Descubra conteúdos e atividades para você, acompanhe eventos e peça ajuda quando precisar. Este espaço é seu.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/80 p-4 shadow-sm">
              <h2 className="text-lg font-bold mb-2">Conteúdos em destaque</h2>
              <ContentCarousel items={items} />
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/80 p-4 shadow-sm">
              <PillRotator pills={pills} />
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/80 p-4 shadow-sm">
              <QuickActions />
            </div>
          </div>
          <div className="space-y-4">
            <MiniCalendar events={events} onOpenFull={()=>{ location.href='/app/calendario' }} />
          </div>
        </div>
      </section>

      {/* Placeholders rápidos para abas */}
      <section id="clubes" className="space-y-2">
        <h2 className="text-xl font-bold">Clubes</h2>
        <p className="text-gray-600 dark:text-gray-400">Catálogo de clubes com filtros por tema e dia da semana. Em breve: timeline moderada, enquetes, RSVP.</p>
      </section>

      <section id="turma" className="space-y-2">
        <h2 className="text-xl font-bold">Minha Turma</h2>
        <p className="text-gray-600 dark:text-gray-400">Recados, tarefas, galeria moderada e check-in de clima.</p>
      </section>

      <section id="questionario" className="space-y-2">
        <h2 className="text-xl font-bold">Questionário</h2>
        <p className="text-gray-600 dark:text-gray-400">Etapas com TTS, salvamento de rascunho e privacidade por seção.</p>
      </section>

      <section id="biblioteca" className="space-y-2">
        <h2 className="text-xl font-bold">Biblioteca & Pílulas</h2>
        <p className="text-gray-600 dark:text-gray-400">Coleções curadas por tema/segmento com modo leitura e TTS.</p>
      </section>

      <section id="perfil" className="space-y-2">
        <h2 className="text-xl font-bold">Meu Perfil & Acessibilidade</h2>
        <p className="text-gray-600 dark:text-gray-400">Avatar, preferências de notificações, acessibilidade e privacidade.</p>
      </section>
    </AppShell>
  )
}
