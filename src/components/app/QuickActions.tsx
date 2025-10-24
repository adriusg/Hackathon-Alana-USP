"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function QuickActions({ items }: { items?: { label: string; href: string }[] }) {
  const links =
    items || [
      { label: 'Responder questionário', href: '#' },
      { label: 'Ver minhas turmas/clubes', href: '#' },
      { label: 'Biblioteca', href: '#' },
    ]

  return (
    <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4">
      <div className="text-sm font-semibold mb-3">Atalhos rápidos</div>
      <div className="flex flex-wrap gap-2">
        {links.map((l) => (
          <Button key={l.label} asChild variant="outline" className="text-sm">
            <Link href={l.href}>{l.label}</Link>
          </Button>
        ))}
      </div>
    </div>
  )
}
