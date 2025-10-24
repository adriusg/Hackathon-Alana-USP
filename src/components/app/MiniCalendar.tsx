"use client"

import React from 'react'

type CatKey = 'clube' | 'passeio' | 'escola' | 'prazo'

const COLORS: Record<CatKey, string> = {
  clube: 'bg-blue-500',
  passeio: 'bg-emerald-500',
  escola: 'bg-amber-500',
  prazo: 'bg-rose-500',
}

export interface CalendarEvent {
  id: string
  date: string // ISO yyyy-mm-dd
  title: string
  category: CatKey
  accessible?: string[] // requisitos de acessibilidade
}

export function MiniCalendar({
  monthOffset = 0,
  events = [],
  onOpenFull,
  onEventClick,
}: {
  monthOffset?: number
  events?: CalendarEvent[]
  onOpenFull?: () => void
  onEventClick?: (ev: CalendarEvent) => void
}) {
  const today = new Date()
  const first = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1)
  const firstWeekday = (first.getDay() + 6) % 7 // 0=Mon
  const daysInMonth = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate()
  const todayIso = new Date().toISOString().slice(0, 10)

  const grid: Array<{ d: number | null; iso?: string; items?: CalendarEvent[] }> = []
  for (let i = 0; i < firstWeekday; i++) grid.push({ d: null })
  for (let d = 1; d <= daysInMonth; d++) {
    const iso = new Date(first.getFullYear(), first.getMonth(), d).toISOString().slice(0, 10)
    const items = events.filter(e => e.date === iso)
    grid.push({ d, iso, items })
  }

  return (
    <div className="rounded-2xl border bg-white/90 dark:bg-gray-900/80 backdrop-blur border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
        <div className="font-semibold tracking-tight capitalize">{first.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}</div>
        <button className="text-sm font-medium text-amber-700 dark:text-amber-400 hover:underline" onClick={onOpenFull}>Abrir calendário completo</button>
      </div>
      <div className="grid grid-cols-7 text-xs text-gray-500 px-4 pt-2">
        <div>Seg</div><div>Ter</div><div>Qua</div><div>Qui</div><div>Sex</div><div>Sáb</div><div>Dom</div>
      </div>
      <div className="grid grid-cols-7 gap-1 p-4">
        {grid.map((cell, idx) => {
          const isToday = cell.iso === todayIso
          return (
            <div key={idx} className={`min-h-[72px] rounded-lg p-1 transition-colors ${cell.d ? 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/80' : ''} ${isToday ? 'ring-2 ring-amber-400/80 dark:ring-amber-500/70' : ''}`}>
              {cell.d && (
                <>
                  <div className={`text-xs font-semibold ${isToday ? 'text-amber-700 dark:text-amber-300' : ''}`}>{cell.d}</div>
                  <div className="space-y-1 mt-1">
                    {(cell.items || []).slice(0,2).map(ev => (
                      <button type="button" key={ev.id} onClick={()=>onEventClick?.(ev)} className={`w-full text-left text-[10px] text-white px-1 py-0.5 rounded ${COLORS[ev.category]} hover:opacity-90`} title={ev.title} aria-label={`${ev.title} em ${cell.iso}`}>
                        {ev.title}
                      </button>
                    ))}
                    {cell.items && cell.items.length > 2 && (
                      <div className="text-[10px] text-gray-600 dark:text-gray-300">+{cell.items.length - 2} mais</div>
                    )}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
      <div className="px-4 pb-4">
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded bg-blue-500"></span> Clubes</span>
          <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded bg-emerald-500"></span> Passeios</span>
          <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded bg-amber-500"></span> Eventos da escola</span>
          <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded bg-rose-500"></span> Prazos</span>
        </div>
      </div>
    </div>
  )
}
