"use client"

import React from 'react'

export interface Pill {
  id: string
  text: string
  href?: string
}

export function PillRotator({ pills }: { pills: Pill[] }) {
  const [idx, setIdx] = React.useState(0)
  React.useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % pills.length), 5000)
    return () => clearInterval(t)
  }, [pills.length])

  const current = pills[idx]

  return (
    <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4">
      <div className="text-xs text-gray-500 mb-1">Pílula de letramento</div>
      <div className="flex items-center gap-2">
        <span className="inline-block text-[10px] uppercase tracking-wide text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Inclusão</span>
        <p className="text-sm flex-1">{current.text}</p>
        {current.href && <a className="text-sm text-amber-700 hover:underline" href={current.href}>Ler mais</a>}
      </div>
    </div>
  )
}
