"use client"

import React from 'react'
import { AppShell } from '@/components/app/AppShell'
import { SafeReportBox } from '@/components/app/SafeReportBox'

export default function RelatosPage() {
  return (
    <AppShell title="Pedir Ajuda / Relatar" userRole="aluno" nav={[{ id: 'relatos', label: 'Pedir Ajuda/Relatar', href: '/app/relatos' }]}> 
      <section className="space-y-6">
        <div className="max-w-3xl">
          <p className="text-gray-600 dark:text-gray-400">Este espaço é exclusivo para enviar relatos com sigilo. Você receberá um protocolo ao finalizar.</p>
        </div>
        <SafeReportBox audience="aluno" fullPage forceAnonymous defaultMode="anonimo" />
      </section>
    </AppShell>
  )
}
