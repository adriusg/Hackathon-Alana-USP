"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { NotificationsBell } from '@/components/app/NotificationsBell'
import { apiClient } from '@/lib/api'

interface MenuItem { label: string; href?: string; onClick?: () => void }
interface TopMenu { id: string; label: string; items?: MenuItem[]; href?: string }

export function InstitutionalShell({
  title = 'Área Institucional',
  menus = [],
  children,
}: {
  title?: string
  menus?: TopMenu[]
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = React.useState<string|null>(null)

  React.useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (!t.closest('[data-topmenu]')) setOpen(null)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  const isActive = (href?: string) => href && pathname.startsWith(href)

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur" data-topmenu>
        <div className="mx-auto max-w-7xl px-4 md:px-6 h-14 flex items-center gap-4">
          <Link href="/app/gestao" className="font-semibold tracking-tight text-sm text-slate-700 hover:text-slate-900">Área Institucional</Link>
          <nav className="flex items-center gap-1">
            {menus.map(m => (
              <div key={m.id} className="relative">
                <button
                  className={`px-3 py-1.5 rounded-md text-sm hover:bg-slate-100 ${isActive(m.href) ? 'bg-slate-100 text-slate-900' : 'text-slate-700'}`}
                  onClick={()=> setOpen(o => o===m.id? null : m.items? m.id : (m.href? (router.push(m.href), null) : m.id))}
                  aria-haspopup={m.items? 'menu': undefined}
                  aria-expanded={open===m.id}
                >{m.label}</button>
                {m.items && open === m.id && (
                  <div role="menu" className="absolute mt-1 w-56 rounded-md border border-slate-200 bg-white shadow-xl p-1">
                    {m.items.map((it, idx) => (
                      <button
                        key={idx}
                        role="menuitem"
                        onClick={()=> { setOpen(null); if (it.onClick) it.onClick(); if (it.href) router.push(it.href) }}
                        className="w-full text-left px-3 py-2 text-sm rounded hover:bg-slate-100 text-slate-700"
                      >{it.label}</button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <NotificationsBell />
            <button
              className="px-3 py-1.5 rounded-md border border-slate-200 text-sm text-slate-700 hover:bg-slate-100"
              onClick={()=> { try { apiClient.logout() } catch {} finally { window.location.href = '/' } }}
            >Sair</button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 md:px-6 py-6">
        <h1 className="text-xl font-semibold tracking-tight mb-4 text-slate-900">{title}</h1>
        {children}
      </main>
    </div>
  )
}
