'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { Logo } from '@/components/logo'
import { useI18n } from '@/components/providers/i18n-provider'

const sections = [
  { id: 'quem-somos' },
  { id: 'objetivos' },
  { id: 'hackathon' },
  { id: 'missao-legal' },
  { id: 'educacao-inclusiva' },
  { id: 'ia-transformadora' },
  { id: 'vinculos' },
  { id: 'expressao-livre' },
  { id: 'deficiencia' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [sectionsOpen, setSectionsOpen] = useState(false)
  const { locale, toggleLocale, t } = useI18n()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      <nav className="container flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity" aria-label="Plataforma Solar">
          <Logo size={80} showText={false} className="shrink-0" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Seções Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSectionsOpen(!sectionsOpen)}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
              aria-expanded={sectionsOpen}
              aria-haspopup="true"
            >
              {t('nav.sections')}
              <ChevronDown className={`w-4 h-4 transition-transform ${sectionsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {sectionsOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setSectionsOpen(false)}
                  aria-hidden="true"
                />
                <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-20">
                  {sections.map((section) => (
                    <Link
                      key={section.id}
                      href={`/secoes/${section.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      onClick={() => setSectionsOpen(false)}
                    >
                      {t(`sections.${section.id}.nav`)}
                    </Link>
                  ))}
                </div>

          {/* Acessibilidade */}
          <Link
            href="/acessibilidade"
            className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
          >
            Acessibilidade
          </Link>

          {/* Privacidade */}
          <Link
            href="/privacidade"
            className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
          >
            Privacidade
          </Link>
              </>
            )}
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Alternar idioma"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium uppercase">{locale}</span>
          </button>

          {/* Login Button */}
          <Button asChild className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md">
            <Link href="/login">{t('nav.login')}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="container px-4 py-4 space-y-3">
            {/* Seções Mobile */}
            <div>
              <button
                onClick={() => setSectionsOpen(!sectionsOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              >
                <span className="font-medium">{t('nav.sections')}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${sectionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {sectionsOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  {sections.map((section) => (
                    <Link
                      key={section.id}
                      href={`/secoes/${section.id}`}
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                      onClick={() => {
                        setSectionsOpen(false)
                        setMobileMenuOpen(false)
                      }}
                    >
                      {t(`sections.${section.id}.nav`)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Acessibilidade Mobile */}
            <Link
              href="/acessibilidade"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Acessibilidade
            </Link>

            {/* Privacidade Mobile */}
            <Link
              href="/privacidade"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacidade
            </Link>

            {/* Language Mobile */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium uppercase">{locale}</span>
            </button>

            {/* Login Mobile */}
            <Button asChild className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                {t('nav.login')}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
