"use client"

import React from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import { InstitutionalShell } from '@/components/app/InstitutionalShell'

export default function GestaoIAPage() {
  const queryClient = useQueryClient()
  const { data: me } = useQuery({ queryKey: ['auth','me'], queryFn: ()=>apiClient.getMe(), staleTime: 60_000 })
  const roles: string[] = (me?.roles || []) as string[]
  const isManager = roles.includes('manager')

  const menus = [
    { id: 'home', label: 'Página Inicial', href: '/app/gestao' },
    { id: 'reports', label: 'Área de Relatórios', items: [
      { label: 'Sugestões da IA', href: '/app/gestao/ia' },
      { label: 'Relatório de participação', href: '/app/gestao/relatorios/participacao' },
      { label: 'Relatos da escola', href: '/app/gestao/relatos' },
      { label: 'Infrações na plataforma', href: '/app/moderacao' },
    ]},
    { id: 'notify', label: 'Área de Notificações', items: [
      { label: 'Calendário', href: '/app/calendario' },
      { label: 'Histórico', href: '/app/notificacoes' },
      { label: 'Enviar notificação', href: '/app/notificacoes' },
    ]},
    { id: 'data', label: 'Gerenciamento de dados', items: [
      { label: 'Adicionar nova família', href: '#' },
      { label: 'Informações', href: '#' },
    ]},
  ]

  const [audience, setAudience] = React.useState<'teachers'|'staff'|'students'|'mixed'>('mixed')
  const [questionnaireId, setQuestionnaireId] = React.useState<number | ''>('')
  const [question, setQuestion] = React.useState('')

  const { data: questionnaires } = useQuery({ queryKey: ['questionnaires','list'], queryFn: ()=>apiClient.listQuestionnaires({ active_only: true }), staleTime: 60_000, enabled: isManager })
  const qList = Array.isArray(questionnaires) ? questionnaires : []

  const { data: suggestionsData, refetch: refetchSuggestions } = useQuery({ queryKey: ['suggestions','all'], queryFn: ()=>apiClient.listSuggestions({}), staleTime: 10_000, enabled: isManager })
  const suggestions = Array.isArray(suggestionsData?.items) ? suggestionsData.items : []

  const gen = useMutation({
    mutationFn: async () => apiClient.generateSuggestions({ audience, questionnaire_id: questionnaireId? Number(questionnaireId): undefined, count: 3, question }),
    onSuccess: async () => { setQuestion(''); await refetchSuggestions() },
  })

  const del = useMutation({
    mutationFn: async (id: number) => apiClient.deleteSuggestion(id),
    onSuccess: async () => { await refetchSuggestions() },
  })

  if (!isManager) {
    return (
      <InstitutionalShell title="Sugestões da IA" menus={menus}>
        <div className="rounded-md border border-white/10 bg-white/5 p-4 text-sm text-gray-300">Acesso negado. Disponível apenas para gestores.</div>
      </InstitutionalShell>
    )
  }

  return (
    <InstitutionalShell title="Sugestões da IA" menus={menus}>
      <section className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
        <aside className="rounded-md border border-slate-200 bg-white p-4">
          <div className="font-medium mb-2 text-slate-900">Sugestões passadas</div>
          <div className="space-y-2 max-h-[70vh] overflow-auto pr-1">
            {suggestions.map((s:any)=> (
              <div key={s.id} className="rounded border border-slate-200 p-2 bg-white">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="text-xs text-slate-500">{new Date(s.created_at||Date.now()).toLocaleString('pt-BR')}</div>
                    <div className="text-sm text-slate-800 font-medium">{s.title}</div>
                    <div className="text-xs text-slate-500">{s.status}</div>
                  </div>
                  <button
                    className="text-xs px-2 py-1 rounded border border-slate-300 text-slate-700 hover:bg-slate-100"
                    onClick={()=> del.mutate(s.id)}
                    aria-label="Excluir sugestão"
                    title="Excluir"
                  >Excluir</button>
                </div>
              </div>
            ))}
            {suggestions.length===0 && <div className="text-sm text-slate-600">Sem registros.</div>}
          </div>
        </aside>

        <div className="rounded-md border border-slate-200 bg-white p-4">
          <div className="flex flex-wrap items-end gap-3 mb-4">
            <label className="text-sm text-slate-700">Público
              <select className="ml-2 rounded border border-slate-300 bg-white px-2 py-1 text-sm" value={audience} onChange={(e)=>setAudience(e.target.value as any)}>
                <option value="mixed">Misto</option>
                <option value="teachers">Docentes</option>
                <option value="staff">Funcionários</option>
                <option value="students">Estudantes</option>
              </select>
            </label>
            <label className="text-sm text-slate-700">Questionário
              <select className="ml-2 rounded border border-slate-300 bg-white px-2 py-1 text-sm" value={questionnaireId} onChange={(e)=>setQuestionnaireId(e.target.value? Number(e.target.value): '')}>
                <option value="">Todos</option>
                {qList.map((q:any)=> <option key={q.id} value={q.id}>{q.title_pt || q.title || `Q${q.id}`}</option>)}
              </select>
            </label>
          </div>

          <div className="rounded-md border border-slate-300 bg-slate-50 p-6 flex items-center gap-2">
            <input
              className="flex-1 bg-white outline-none text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded px-3 py-2"
              placeholder="Faça uma pergunta…"
              value={question}
              onChange={(e)=>setQuestion(e.target.value)}
              onKeyDown={(e)=>{ if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); if(question.trim()) gen.mutate() } }}
            />
            <button className="px-3 py-2 rounded-md bg-amber-600 text-white disabled:opacity-60" onClick={()=>gen.mutate()} disabled={!question.trim() || gen.isPending}>
              Enviar
            </button>
          </div>

          <div className="mt-4 space-y-2">
            {gen.isPending && <div className="text-sm text-slate-600">Gerando sugestões…</div>}
            {suggestions.slice(0,5).map((s:any)=> (
              <div key={s.id} className="rounded border border-slate-200 p-3 bg-white">
                <div className="text-sm text-slate-900 font-medium">{s.title} <span className="ml-2 text-xs text-slate-500">{s.status}</span></div>
                <div className="text-sm text-slate-800 whitespace-pre-wrap">{s.text}</div>
                {s.explanations && <div className="text-xs text-slate-500 mt-1">{s.explanations}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </InstitutionalShell>
  )
}
