'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { apiClient } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import toast from 'react-hot-toast'

export default function ResetarSenhaPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tokenFromUrl = searchParams.get('token') || ''

  const [token, setToken] = React.useState(tokenFromUrl)
  const [newPassword, setNewPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if (tokenFromUrl) setToken(tokenFromUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenFromUrl])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!token) {
      toast.error('Token é obrigatório')
      return
    }
    if (!newPassword || !confirmPassword) return
    setLoading(true)
    try {
      await apiClient.resetPassword(token, newPassword, confirmPassword)
      toast.success('Senha redefinida com sucesso')
      router.push('/acesso')
    } catch (e: any) {
      toast.error(e?.response?.data?.detail || 'Falha ao redefinir senha')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[70vh] container max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-2">Redefinir senha</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Informe o token recebido e defina uma nova senha.</p>
      <form onSubmit={submit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="token">Token</Label>
          <Input id="token" type="text" value={token} onChange={(e)=>setToken(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="newPassword">Nova senha</Label>
          <Input id="newPassword" type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirmar nova senha</Label>
          <Input id="confirmPassword" type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required />
        </div>
        <Button type="submit" disabled={loading}>{loading ? 'Enviando...' : 'Redefinir senha'}</Button>
      </form>
    </div>
  )
}
