"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { apiClient } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type Props = {
  title: string
  expectedRoles: string[]
  redirectByRole: Record<string, string>
}

export default function LoginForm({ title, expectedRoles, redirectByRole }: Props) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) return
    setLoading(true)
    setError('')
    try {
      const res = await apiClient.login(email, password)
      const roles: string[] = res?.user?.roles || []
      const matched = roles.find(r => expectedRoles.includes(r))
      if (!matched) {
        setError('Este acesso não corresponde ao seu perfil.')
        return
      }
      const path = redirectByRole[matched] || '/app'
      router.push(path)
    } catch (err: any) {
      setError(err?.response?.data?.detail || 'Não foi possível entrar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[70vh] container max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Entre com suas credenciais</p>
      <form onSubmit={handleSubmit} className="space-y-4" aria-describedby="status">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required aria-required="true" autoComplete="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required aria-required="true" autoComplete="current-password" />
        </div>
        <div className="flex gap-2">
          <Button type="submit" disabled={loading} className="w-full">{loading? 'Entrando...' : 'Entrar'}</Button>
        </div>
        <div id="status" className="text-sm text-red-600 dark:text-red-400" aria-live="polite">{error}</div>
      </form>
    </div>
  )
}
