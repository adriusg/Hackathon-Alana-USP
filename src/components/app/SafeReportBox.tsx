"use client"

import React from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'

export function SafeReportBox({ audience = 'aluno', fullPage = false, forceAnonymous = false, defaultMode = 'identificado' }: { audience?: 'aluno'|'responsavel'|'prof'|'func'|'gestao', fullPage?: boolean, forceAnonymous?: boolean, defaultMode?: 'anonimo'|'confidencial'|'identificado' }) {
  const [form, setForm] = React.useState({
    modo: forceAnonymous ? 'anonimo' : defaultMode, // anonimo | confidencial | identificado
    categoria: 'bullying',
    local: '',
    descricao: '',
    enviarParaProf: audience === 'aluno',
    enviarParaGestao: true,
    anexos: [] as File[],
    protocolo: '',
  })
  const [done, setDone] = React.useState(false)

  // Needed to set school header on anonymous submission
  const { data: me } = useQuery({ queryKey: ['auth','me'], queryFn: () => apiClient.getMe(), staleTime: 60_000 })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement
    if (type === 'file') {
      const arr = files ? Array.from(files) : []
      setForm(f => ({ ...f, anexos: arr }))
      return
    }
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const mutation = useMutation({
    mutationFn: async () => {
      const payload = {
        type: form.categoria === 'acessibilidade' ? 'barrier' : (form.categoria === 'discriminacao' ? 'discrimination' : (form.categoria === 'seguranca' ? 'safety' : (form.categoria === 'bullying' ? 'bullying' : 'other'))),
        title: form.categoria,
        description: form.descricao,
        incident_location: form.local || undefined,
        attachments: form.anexos?.map((f) => ({ name: f.name, type: f.type, size: f.size })) || undefined,
        is_anonymous: forceAnonymous || form.modo === 'anonimo',
        confidentiality_level: (forceAnonymous || form.modo === 'anonimo') ? 'confidential' : (form.modo === 'confidencial' ? 'confidential' : 'restricted'),
        urgency: 'normal',
      }
      const anonymous = forceAnonymous || form.modo === 'anonimo'
      if (anonymous) {
        const schoolId = (me as any)?.school_id as number | undefined
        const res = await apiClient.createAnonymousReport(payload, schoolId ? { schoolId } : undefined)
        return res
      } else {
        const res = await apiClient.createReport(payload)
        return res
      }
    },
    onSuccess: (res: any) => {
      setForm(f => ({ ...f, protocolo: res.protocol }))
      setDone(true)
    },
  })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.descricao) return
    mutation.mutate()
  }

  return (
    <div className={`${fullPage ? 'max-w-3xl mx-auto' : ''} rounded-2xl border bg-white/90 dark:bg-gray-900/80 backdrop-blur border-gray-200 dark:border-gray-800 p-5 shadow-sm`}>
      <h3 className="text-xl font-bold tracking-tight mb-1">Pedir ajuda / Relatar</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Canal seguro. Encaminharemos para a equipe responsável. Você receberá um protocolo.</p>

      {!done ? (
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {!forceAnonymous && (
              <div>
                <label className="block text-sm font-medium mb-1">Modo</label>
                <select name="modo" value={form.modo} onChange={onChange} className="w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition">
                  <option value="anonimo">Anônimo</option>
                  <option value="confidencial">Confidencial</option>
                  <option value="identificado">Identificado</option>
                </select>
                {audience === 'aluno' && (
                  <p className="mt-1 text-xs text-gray-500">Por padrão, relatos de alunos não são anônimos. A escola pode habilitar "confidencial".</p>
                )}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium mb-1">Categoria</label>
              <select name="categoria" value={form.categoria} onChange={onChange} className="w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition">
                <option value="bullying">Bullying/assédio</option>
                <option value="acessibilidade">Acessibilidade/barreiras</option>
                <option value="discriminacao">Discriminação</option>
                <option value="seguranca">Segurança</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Onde aconteceu?</label>
              <input name="local" value={form.local} onChange={onChange} className="w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition" placeholder="Ex.: Corredor do Bloco B" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Descreva o que aconteceu</label>
            <textarea name="descricao" value={form.descricao} onChange={onChange} rows={4} className="w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition" placeholder="O que aconteceu? Quem precisa de ajuda?" />
            <div className="mt-1 text-xs text-gray-500">Evite nomes e dados pessoais. Nós tentaremos remover PII automaticamente.</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {!forceAnonymous && (
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="enviarParaProf" checked={form.enviarParaProf} onChange={onChange} className="accent-amber-600" /> Avisar professor responsável</label>
            )}
            {!forceAnonymous && (
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="enviarParaGestao" checked={form.enviarParaGestao} onChange={onChange} className="accent-amber-600" /> Encaminhar à gestão</label>
            )}
            <div>
              <label className="block text-sm font-medium mb-1">Anexos (opcional)</label>
              <input type="file" multiple onChange={onChange} className="block text-sm file:mr-3 file:rounded-md file:border-0 file:bg-amber-50 file:px-3 file:py-2 file:text-amber-700 hover:file:bg-amber-100" />
            </div>
          </div>

          <div className="flex gap-2">
            <button type="submit" disabled={mutation.isPending || !form.descricao} className="px-4 py-2 rounded-md bg-amber-600 hover:bg-amber-700 text-white disabled:opacity-60 disabled:cursor-not-allowed transition">{mutation.isPending ? 'Enviando...' : 'Enviar relato'}</button>
            <button type="reset" className="px-4 py-2 rounded-md border hover:bg-gray-50 dark:hover:bg-gray-800 transition">Limpar</button>
          </div>
        </form>
      ) : (
        <div className="rounded-md border border-emerald-300 bg-emerald-50 text-emerald-800 p-3">
          Obrigado pelo relato. Protocolo: <span className="font-semibold">{form.protocolo}</span>. A equipe vai responder em breve.
        </div>
      )}
    </div>
  )
}
