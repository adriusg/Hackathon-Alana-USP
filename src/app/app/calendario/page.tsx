"use client"

import React from 'react'
import { AppShell } from '@/components/app/AppShell'
import { MiniCalendar, CalendarEvent } from '@/components/app/MiniCalendar'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import { EventQuickForm } from '@/components/app/EventQuickForm'
import { EventList } from '@/components/app/EventList'
import toast from 'react-hot-toast'
import { EventDetailsDrawer } from '@/components/app/EventDetailsDrawer'

export default function CalendarioPage() {
  const [view, setView] = React.useState<'mensal'|'semanal'>('mensal')
  const [filtros, setFiltros] = React.useState({ turma: true, clubes: true, escola: true, prazos: true })
  const [detailsOpen, setDetailsOpen] = React.useState(false)
  const [selectedEventId, setSelectedEventId] = React.useState<number | null>(null)

  // Intervalo do mês atual (poderíamos permitir navegação entre meses)
  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)

  // Sessão/roles
  const { data: me, isLoading: meLoading } = useQuery({
    queryKey: ['auth','me'],
    queryFn: () => apiClient.getMe(),
    staleTime: 60_000,
  })
  const roles: string[] = (me?.roles || []) as string[]
  const canManage = roles.includes('teacher') || roles.includes('staff') || roles.includes('manager')

  const { data: apiEvents } = useQuery({
    queryKey: ['events','month', startOfMonth.toISOString(), endOfMonth.toISOString()],
    queryFn: () => apiClient.listEvents({ start: startOfMonth.toISOString(), end: endOfMonth.toISOString() }),
    staleTime: 30_000,
  })

  const mapCategory = (c?: string): CalendarEvent['category'] => {
    const s = (c || '').toLowerCase()
    if (s.includes('club')) return 'clube'
    if (s.includes('deadline') || s.includes('prazo')) return 'prazo'
    if (s.includes('cultural') || s.includes('trip') || s.includes('passeio')) return 'passeio'
    return 'escola'
  }

  const events: CalendarEvent[] = (apiEvents || []).map((ev: any) => ({
    id: String(ev.id),
    date: String(ev.start_datetime).slice(0, 10),
    title: ev.title,
    category: mapCategory(ev.category),
  }))

  const onMonthlyEventClick = (ev: CalendarEvent) => {
    setSelectedEventId(Number(ev.id))
    setDetailsOpen(true)
  }

  // Label de papel para AppShell
  const roleLabel: 'aluno'|'prof'|'func'|'gestao'|'responsavel' =
    roles.includes('manager') ? 'gestao' :
    roles.includes('teacher') ? 'prof' :
    roles.includes('staff') ? 'func' :
    roles.includes('guardian') ? 'responsavel' : 'aluno'

  // Semana atual (segunda a domingo)
  const dayOfWeek = (now.getDay() + 6) % 7
  const startOfWeek = new Date(now)
  startOfWeek.setDate(now.getDate() - dayOfWeek)
  startOfWeek.setHours(0,0,0,0)
  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(startOfWeek.getDate() + 7)
  endOfWeek.setHours(23,59,59,999)

  const { data: weekEvents } = useQuery({
    queryKey: ['events','week', startOfWeek.toISOString(), endOfWeek.toISOString()],
    queryFn: () => apiClient.listEvents({ start: startOfWeek.toISOString(), end: endOfWeek.toISOString() }),
    staleTime: 15_000,
  })

  const eventsById = React.useMemo(() => {
    const map: Record<string, any> = {}
    ;(weekEvents || []).forEach((ev: any) => { map[String(ev.id)] = ev })
    return map
  }, [weekEvents])

  const hours = Array.from({ length: 11 }, (_, i) => 8 + i) // 08..18
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek)
    d.setDate(startOfWeek.getDate() + i)
    return d
  })

  const queryClient = useQueryClient()

  const onDropToSlot = async (ev: React.DragEvent<HTMLDivElement>, dayIdx: number, hour: number, half: 0|30) => {
    ev.preventDefault()
    if (!canManage) return
    const id = ev.dataTransfer.getData('text/plain')
    const original = eventsById[id]
    if (!original) return
    const durationMs = new Date(original.end_datetime).getTime() - new Date(original.start_datetime).getTime()
    const day = new Date(startOfWeek)
    day.setDate(startOfWeek.getDate() + dayIdx)
    day.setHours(hour, half, 0, 0)
    const newStart = day
    const newEnd = new Date(newStart.getTime() + Math.max(30*60*1000, durationMs))
    await apiClient.updateEvent(Number(id), { start_datetime: newStart.toISOString(), end_datetime: newEnd.toISOString() })
    queryClient.invalidateQueries({ queryKey: ['events','week'] })
    queryClient.invalidateQueries({ queryKey: ['events','month'] })
    toast.success('Evento reagendado')
  }

  const allowDrop = (ev: React.DragEvent) => { if (canManage) ev.preventDefault() }

  return (
    <AppShell title="Calendário" userRole={roleLabel} nav={[{ id: 'cal', label: 'Calendário' }]}> 
      <section className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <button onClick={()=>setView('mensal')} className={`px-3 py-1 rounded border ${view==='mensal'?'bg-amber-100 border-amber-400':'border-gray-300 dark:border-gray-700'}`}>Mensal</button>
            <button onClick={()=>setView('semanal')} className={`px-3 py-1 rounded border ${view==='semanal'?'bg-amber-100 border-amber-400':'border-gray-300 dark:border-gray-700'}`}>Semanal</button>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <label className="flex items-center gap-1"><input type="checkbox" checked={filtros.turma} onChange={(e)=>setFiltros({...filtros, turma:e.currentTarget.checked})}/> Turma</label>
            <label className="flex items-center gap-1"><input type="checkbox" checked={filtros.clubes} onChange={(e)=>setFiltros({...filtros, clubes:e.currentTarget.checked})}/> Clubes</label>
            <label className="flex items-center gap-1"><input type="checkbox" checked={filtros.escola} onChange={(e)=>setFiltros({...filtros, escola:e.currentTarget.checked})}/> Escola</label>
            <label className="flex items-center gap-1"><input type="checkbox" checked={filtros.prazos} onChange={(e)=>setFiltros({...filtros, prazos:e.currentTarget.checked})}/> Prazos</label>
            {canManage && (
              <a href="/app/calendario/novo" className="ml-2 px-3 py-2 rounded bg-amber-600 text-white">Criar evento</a>
            )}
          </div>
        </div>

        {canManage && <EventQuickForm />}

        {view === 'mensal' ? (
          <MiniCalendar events={events} onEventClick={onMonthlyEventClick} />
        ) : (
          <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-2 overflow-x-auto">
            <div className="text-sm text-gray-600 dark:text-gray-400 px-2 pb-2">Arraste um evento para um horário/dia para reagendar.</div>
            <div className="min-w-[900px] grid" style={{ gridTemplateColumns: '80px repeat(7, 1fr)' }}>
              <div></div>
              {days.map((d, i) => (
                <div key={i} className="text-xs font-medium px-2 py-1 border-b border-gray-200 dark:border-gray-800">
                  {d.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: '2-digit' })}
                </div>
              ))}
              {hours.map((h) => (
                <React.Fragment key={h}>
                  <div className="text-xs text-gray-500 px-2 py-4 border-b border-gray-100 dark:border-gray-800">{String(h).padStart(2,'0')}:00</div>
                  {days.map((_, dayIdx) => (
                    <div key={dayIdx+':'+h} className="relative border-b border-gray-100 dark:border-gray-800">
                      {[0,30].map((half) => (
                        <div
                          key={half}
                          onDragOver={allowDrop}
                          onDrop={(ev)=>onDropToSlot(ev, dayIdx, h, half as 0|30)}
                          className="h-6"
                        />
                      ))}
                      {(weekEvents || []).filter((ev:any) => {
                        const sd = new Date(ev.start_datetime)
                        const dayIso = new Date(days[dayIdx]).toISOString().slice(0,10)
                        const evIso = sd.toISOString().slice(0,10)
                        return evIso === dayIso && sd.getHours() === h
                      }).map((ev:any) => (
                        <div
                          key={ev.id}
                          draggable={canManage}
                          onDragStart={(e)=>e.dataTransfer.setData('text/plain', String(ev.id))}
                          className="absolute left-1 right-1 top-1 rounded bg-amber-100 border border-amber-300 px-2 py-1 text-xs cursor-move"
                          title={ev.title}
                          onClick={() => { setSelectedEventId(Number(ev.id)); setDetailsOpen(true) }}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="truncate">{ev.title}</span>
                            {canManage && (
                            <button
                              type="button"
                              className="text-amber-700 hover:underline"
                              onClick={async (e)=>{ e.stopPropagation(); await apiClient.deleteEvent(Number(ev.id)); queryClient.invalidateQueries({ queryKey: ['events','week'] }); queryClient.invalidateQueries({ queryKey: ['events','month'] }); toast.success('Evento excluído') }}
                              aria-label="Excluir evento"
                              title="Excluir evento"
                            >×</button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        <EventList startISO={startOfMonth.toISOString()} endISO={endOfMonth.toISOString()} canManage={canManage} />

        <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4">
          <div className="font-semibold mb-2">Permissões (demo):</div>
          <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>Professores e Gestores: criar/alterar eventos.</li>
            <li>Funcionários: criar eventos do seu setor.</li>
            <li>Familiares: ver/confirmar presença; sugerir eventos (moderação).</li>
            <li>Estudantes: ver; propor eventos de clube se permitido.</li>
          </ul>
        </div>
      </section>
      <EventDetailsDrawer eventId={selectedEventId} open={detailsOpen} onClose={()=>setDetailsOpen(false)} />
    </AppShell>
  )
}
