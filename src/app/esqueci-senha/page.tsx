'use client'

import React from 'react'
import { apiClient } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import toast from 'react-hot-toast'

export default function EsqueciSenhaPage() {
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await apiClient.forgotPassword(email.trim())
      toast.success('Se o email existir, você receberá instruções para redefinir a senha.')
    } catch (e: any) {
      toast.error(e?.response?.data?.detail || 'Falha ao solicitar redefinição')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[70vh] container max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-2">Esqueci minha senha</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Informe seu email para receber instruções.</p>
      <form onSubmit={submit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <Button type="submit" disabled={loading}>{loading ? 'Enviando...' : 'Enviar instruções'}</Button>
      </form>
    </div>
  )
}
