'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { apiClient } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function CadastroRapidoPage() {
  const router = useRouter()
  const params = useSearchParams()
  const initialIdentifier = (params.get('identifier') || '').trim()

  const [fullName, setFullName] = React.useState('')
  const [email, setEmail] = React.useState(initialIdentifier.includes('@') ? initialIdentifier : '')
  const [phone, setPhone] = React.useState(!initialIdentifier.includes('@') ? initialIdentifier : '')
  const [role, setRole] = React.useState<'student'|'guardian'|'manager'>('student')
  const [schoolQuery, setSchoolQuery] = React.useState('')
  const [schoolId, setSchoolId] = React.useState<number | null>(null)
  const [schoolSlug, setSchoolSlug] = React.useState<string>('')
  const [options, setOptions] = React.useState<Array<{ id: number; slug: string; name: string }>>([])
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [roleInSchool, setRoleInSchool] = React.useState('')

  React.useEffect(() => {
    let active = true
    const run = async () => {
      if (!schoolQuery || schoolQuery.length < 2) { setOptions([]); return }
      try {
        const res = await apiClient.tenantsSearch(schoolQuery)
        if (!active) return
        setOptions(res.items || [])
      } catch {}
    }
    const t = setTimeout(run, 250)
    return () => { active = false; clearTimeout(t) }
  }, [schoolQuery])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const payload: any = { full_name: fullName, role }
      if (email) payload.email = email
      if (phone) payload.phone = phone
      if (schoolId) payload.school_id = schoolId
      if (!schoolId && schoolSlug) payload.school_slug = schoolSlug
      if (role === 'manager' && roleInSchool) payload.role_in_school = roleInSchool
      const res = await apiClient.registerQuick(payload)
      const onboarding = (res?.onboarding as string) || '/app'
      router.push(onboarding)
    } catch (err: any) {
      setMessage(err?.response?.data?.detail || 'Falha no cadastro')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[70vh] container max-w-xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-2">Cadastro Rápido</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Informe seus dados básicos para iniciar. Você poderá completar o perfil depois.</p>

      <form onSubmit={submit} className="space-y-4" aria-describedby="status">
        <div className="space-y-2">
          <Label htmlFor="name">Nome completo</Label>
          <Input id="name" value={fullName} onChange={(e)=>setFullName(e.target.value)} required aria-required="true" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="seu@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Celular</Label>
            <Input id="phone" type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="+55 11 99999-9999" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="school">Escola</Label>
          <Input id="school" value={schoolQuery} onChange={(e)=>{ setSchoolQuery(e.target.value); setSchoolId(null); setSchoolSlug('') }} placeholder="Digite para buscar por nome, slug ou domínio" aria-autocomplete="list" aria-controls="school-list" />
          {options.length > 0 && (
            <ul id="school-list" role="listbox" className="border rounded divide-y mt-1">
              {options.map(opt => (
                <li key={opt.id} role="option" className="px-2 py-1 cursor-pointer hover:bg-amber-50" onClick={()=>{ setSchoolId(opt.id); setSchoolSlug(opt.slug); setSchoolQuery(opt.name); setOptions([]) }}>{opt.name}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="space-y-1">
          <Label>Perfil</Label>
          <div className="flex flex-wrap gap-4 text-sm">
            {(['student','guardian','manager'] as const).map(r => (
              <label key={r} className="flex items-center gap-2">
                <input type="radio" name="role" checked={role===r} onChange={()=>setRole(r)} />
                {r==='student'?'Aluno':r==='guardian'?'Familiar/Responsável':'Gestor'}
              </label>
            ))}
          </div>
        </div>

        {role === 'manager' && (
          <div className="space-y-2">
            <Label htmlFor="role_in_school">Função do gestor na escola</Label>
            <Input id="role_in_school" value={roleInSchool} onChange={(e)=>setRoleInSchool(e.target.value)} placeholder="Diretor(a), Coordenador(a), Orientador(a)..." />
          </div>
        )}

        <div className="flex gap-2">
          <Button type="submit" disabled={loading}>{loading? 'Enviando...' : 'Confirmar cadastro'}</Button>
          <Button type="button" variant="outline" onClick={()=>router.push('/acesso')}>Voltar ao acesso</Button>
        </div>

        <div id="status" className="text-sm text-gray-600" aria-live="polite">{message}</div>
      </form>
    </div>
  )
}
