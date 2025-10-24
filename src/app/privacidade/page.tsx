'use client'

import React from 'react'
import { apiClient } from '@/lib/api'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'

export default function PrivacidadePage() {
  const [downloading, setDownloading] = React.useState(false)
  const [deleting, setDeleting] = React.useState(false)

  const exportData = async () => {
    setDownloading(true)
    try {
      const data = await apiClient.exportMyData()
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `meus-dados-${new Date().toISOString().slice(0,10)}.json`
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      toast.success('Exportação iniciada')
    } catch (e: any) {
      toast.error(e?.response?.data?.detail || 'Falha ao exportar')
    } finally {
      setDownloading(false)
    }
  }

  const deleteAccount = async () => {
    if (!confirm('Tem certeza que deseja solicitar a exclusão da sua conta? Esta ação desativará o acesso imediatamente.')) return
    setDeleting(true)
    try {
      await apiClient.requestAccountDeletion()
      toast.success('Solicitação registrada. Sua conta foi desativada.')
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      window.location.href = '/'
    } catch (e: any) {
      toast.error(e?.response?.data?.detail || 'Falha ao solicitar exclusão')
    } finally {
      setDeleting(false)
    }
  }

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Privacidade & Dados</h1>

      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">Exportar meus dados</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Baixe uma cópia dos seus dados pessoais em formato JSON.</p>
          <Button onClick={exportData} disabled={downloading}>{downloading ? 'Gerando...' : 'Exportar dados'}</Button>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">Excluir minha conta</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Solicite a exclusão da sua conta. Seu acesso será desativado imediatamente.</p>
          <Button variant="destructive" onClick={deleteAccount} disabled={deleting}>{deleting ? 'Enviando...' : 'Solicitar exclusão'}</Button>
        </div>
      </div>
    </div>
  )
}
