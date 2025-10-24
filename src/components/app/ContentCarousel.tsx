"use client"

import React from 'react'

export interface CarouselItem {
  id: string
  title: string
  description: string
  href: string
  img?: string
  tag?: string
}

export function ContentCarousel({ items }: { items: CarouselItem[] }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const scrollBy = (dx: number) => ref.current?.scrollBy({ left: dx, behavior: 'smooth' })

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">Conteúdos em destaque</h3>
        <div className="flex gap-2">
          <button aria-label="Anterior" className="px-2 py-1 rounded border text-sm" onClick={()=>scrollBy(-320)}>◀</button>
          <button aria-label="Próximo" className="px-2 py-1 rounded border text-sm" onClick={()=>scrollBy(320)}>▶</button>
        </div>
      </div>
      <div ref={ref} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2" role="region" aria-label="Carrossel de conteúdos">
        {items.map(item => (
          <a key={item.id} href={item.href} className="min-w-[300px] max-w-[300px] snap-start rounded-xl overflow-hidden border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500">
            <div className="h-40 bg-gradient-to-br from-amber-200 to-yellow-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-amber-700">
              {item.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.img} alt="" className="h-full w-full object-cover" />
              ) : (
                <span className="text-6xl" aria-hidden>📚</span>
              )}
            </div>
            <div className="p-4">
              {item.tag && <span className="text-[10px] uppercase tracking-wide text-amber-700 bg-amber-50 px-2 py-0.5 rounded">{item.tag}</span>}
              <h4 className="mt-1 font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
        {items.map(item => (
          <a key={item.id+':thumb'} href={item.href} className="flex items-center gap-2 p-2 rounded border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:shadow-sm">
            <div className="h-8 w-8 rounded bg-amber-100 flex items-center justify-center" aria-hidden>📄</div>
            <div className="truncate">
              <div className="text-sm font-medium truncate">{item.title}</div>
              <div className="text-xs text-gray-500 truncate">{item.tag || 'Conteúdo'}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
