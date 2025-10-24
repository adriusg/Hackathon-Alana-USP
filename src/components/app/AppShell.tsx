"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NotificationsBell } from '@/components/app/NotificationsBell'
import { SchoolClassSelector } from '@/components/app/SchoolClassSelector'
import { apiClient } from '@/lib/api'
import { useRouter, usePathname } from 'next/navigation'
import { Home, Users, ClipboardList, CalendarDays, Bell as BellIcon, BookOpen, Shield, UserCog } from 'lucide-react'

export interface NavItem { id: string; label: string; href?: string }

export function AppShell({
  title,
  nav,
  children,
  userRole,
  ties,
}: {
  title: string
  userRole: 'aluno'|'prof'|'func'|'gestao'|'responsavel'
  nav: NavItem[]
  ties?: { escolas: string[]; turmas?: string[] }
  children: React.ReactNode
}) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const fallbackHome = userRole === 'gestao' ? '/app/gestao' : userRole === 'prof' ? '/app/prof' : userRole === 'func' ? '/app/func' : userRole === 'responsavel' ? '/app/responsavel' : '/app/aluno'

  const [activeHash, setActiveHash] = React.useState('')
  React.useEffect(() => {
    const onHash = () => setActiveHash(typeof window !== 'undefined' ? window.location.hash : '')
    onHash()
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const isActive = (item: NavItem) => {
    if (item.href) return pathname.startsWith(item.href)
    if (item.id && activeHash === `#${item.id}`) return true
    return false
  }

  const handleBack = () => {
    try {
      if (typeof window !== 'undefined' && window.history && window.history.length > 1) {
        router.back()
      } else {
        router.push(fallbackHome)
      }
    } catch {
      router.push(fallbackHome)
    }
  }

  const renderIcon = (id: string) => {
    const cls = 'w-4 h-4'
    switch (id) {
      case 'inicio': return <Home className={cls} />
      case 'clubes': return <Users className={cls} />
      case 'turma': return <Users className={cls} />
      case 'questionario': return <ClipboardList className={cls} />
      case 'calendario': return <CalendarDays className={cls} />
      case 'notificacoes': return <BellIcon className={cls} />
      case 'relatos': return <Shield className={cls} />
      case 'biblioteca': return <BookOpen className={cls} />
      case 'perfil': return <UserCog className={cls} />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-amber-500 text-white px-3 py-2 rounded">Pular para conteúdo</a>
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center gap-3">
          <button onClick={()=>setMenuOpen(v=>!v)} aria-label="Menu" className="md:hidden p-2 rounded border border-gray-300 dark:border-gray-700">☰</button>
          <Button variant="outline" onClick={handleBack} className="px-3 py-1">
            Voltar
          </Button>
          <Link href="/app" className="font-extrabold tracking-tight text-xl">Plataforma Solar</Link>
          <span className="text-sm text-gray-500">/ {title}</span>
          <div className="ml-auto flex items-center gap-3">
            <SchoolClassSelector ties={ties} />
            <NotificationsBell />
            <Button variant="outline" onClick={() => { try { apiClient.logout() } catch {} finally { window.location.href = '/' } }}>Sair</Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
        <aside className={`lg:sticky lg:top-[72px] h-max ${menuOpen ? '' : 'hidden'} lg:block`}>
          <nav className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm">
            <ul className="space-y-1">
              {nav.map(item => {
                const active = isActive(item)
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href || `#${item.id}`}
                      aria-current={active ? 'page' : undefined}
                      className={`block px-3 py-2 rounded-lg transition-colors border border-transparent ${active ? 'bg-amber-50 text-amber-800 border-amber-200' : 'hover:bg-amber-50/60'}`}
                    >
                      <span className="inline-flex items-center gap-2">
                        {renderIcon(item.id)}
                        <span>{item.label}</span>
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>

        <main id="conteudo" className="space-y-6">
          {children}
        </main>
      </div>
    </div>
  )
}
