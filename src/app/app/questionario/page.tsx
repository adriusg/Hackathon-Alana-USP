"use client"

import React from 'react'
import { AppShell } from '@/components/app/AppShell'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import toast from 'react-hot-toast'

function speak(text: string) {
  try {
    if (typeof window === 'undefined') return
    const synth = window.speechSynthesis
    if (!synth) return
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = 'pt-BR'
    synth.speak(utter)
  } catch {}
}

export default function QuestionarioPage() {
  const qc = useQueryClient()
  const { data: me } = useQuery({ queryKey: ['auth','me'], queryFn: () => apiClient.getMe(), staleTime: 60_000 })
  const roles: string[] = (me?.roles || []) as string[]
  const roleLabel: 'aluno'|'prof'|'func'|'gestao'|'responsavel' =
    roles.includes('manager') ? 'gestao' :
    roles.includes('teacher') ? 'prof' :
    roles.includes('staff') ? 'func' :
    roles.includes('guardian') ? 'responsavel' : 'aluno'

  // Modo de aluno (kids|teens) persistido na UI do aluno
  const [modo] = React.useState<'kids'|'teens'>(() => (typeof window !== 'undefined' && (localStorage.getItem('aluno-modo') as 'kids'|'teens')) || 'teens')

  const { data: questionnaires, isLoading: qsLoading, isError: qsError } = useQuery({
    queryKey: ['questionnaires','list', modo],
    queryFn: () => apiClient.listQuestionnaires({ active_only: true, type: modo }),
    staleTime: 30_000,
  })
  const list = Array.isArray(questionnaires) ? questionnaires : []
  const firstId = list[0]?.id ? Number(list[0].id) : null

  const [qid, setQid] = React.useState<number | null>(firstId)
  React.useEffect(() => { if (firstId && !qid) setQid(firstId) }, [firstId])

  const { data: qDetail, isLoading: qLoading, isError: qError } = useQuery({
    queryKey: ['questionnaires','detail', qid],
    queryFn: () => apiClient.getQuestionnaire(Number(qid)),
    enabled: !!qid,
    staleTime: 15_000,
  })

  const { data: myResponses } = useQuery({
    queryKey: ['questionnaires','my-responses', qid],
    queryFn: () => apiClient.listMyResponses(Number(qid)),
    enabled: !!qid,
    staleTime: 10_000,
  })

  const latestByQuestion = React.useMemo(() => {
    const map = new Map<number, any>()
    ;(Array.isArray(myResponses) ? myResponses : []).forEach((r: any) => {
      const prev = map.get(r.question_id)
      if (!prev || new Date(r.created_at) > new Date(prev.created_at)) {
        map.set(r.question_id, r)
      }
    })
    return map
  }, [myResponses])

  const [answers, setAnswers] = React.useState<Record<number, any>>({})
  React.useEffect(() => {
    const init: Record<number, any> = {}
    const questions: any[] = qDetail?.questions || []
    questions.forEach((q: any) => {
      const last = latestByQuestion.get(q.id)
      if (q.type === 'text' || q.type === 'long_text') {
        init[q.id] = last?.answer_text || ''
      } else if (q.type === 'multiple_choice') {
        init[q.id] = last?.answer_json || []
      } else if (q.type === 'single_choice') {
        init[q.id] = last?.answer_value || ''
      } else if (q.type === 'scale') {
        init[q.id] = last?.answer_number || 0
      } else {
        init[q.id] = last?.answer_json ?? null
      }
    })
    setAnswers(init)
  }, [qDetail, latestByQuestion])

  const saveMutation = useMutation({
    mutationFn: async ({ question, draft }: { question: any; draft: boolean }) => {
      const payload: any = {
        questionnaire_id: Number(qid),
        question_id: Number(question.id),
        is_draft: draft,
      }
      const v = answers[question.id]
      switch (question.type) {
        case 'text':
        case 'long_text':
          payload.answer_text = String(v || '')
          break
        case 'multiple_choice':
          payload.answer_json = Array.isArray(v) ? v : []
          break
        case 'single_choice':
          payload.answer_value = String(v || '')
          break
        case 'scale':
          payload.answer_number = Number(v || 0)
          break
        default:
          payload.answer_json = v
      }
      return apiClient.createResponse(payload)
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['questionnaires','my-responses'] })
      toast.success('Resposta salva')
    },
    onError: () => toast.error('Falha ao salvar resposta'),
  })

  const handleChange = (qid: number, value: any) => {
    setAnswers(a => ({ ...a, [qid]: value }))
  }

  const questions = qDetail?.questions || []
  const threadsNotice = (!roles.includes('student'))

  return (
    <AppShell title="Questionário" userRole={roleLabel} nav={[{ id: 'questionario', label: 'Questionário' }]}> 
      <section className="space-y-4">
        {threadsNotice && (
          <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-3 text-sm text-gray-700 dark:text-gray-300">
            A versão atual do questionário está disponível para estudantes. Em breve, publicaremos o questionário da Família e da Gestão.
          </div>
        )}

        <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-3">
          <div className="flex items-center gap-3">
            <div className="font-semibold">Questionários</div>
            {qsLoading && <div className="text-xs text-gray-500">Carregando...</div>}
            {qsError && <div className="text-xs text-red-600">Erro ao carregar</div>}
            <div className="ml-auto text-sm">
              <label className="mr-2">Selecionar:</label>
              <select value={qid || ''} onChange={(e)=>setQid(e.target.value? Number(e.target.value): null)} className="rounded border px-2 py-1">
                {list.map((q: any) => <option key={q.id} value={q.id}>{q.title_pt}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-3">
          {qLoading && <div className="text-sm text-gray-600 dark:text-gray-400">Carregando questionário...</div>}
          {qError && <div className="text-sm text-red-600">Erro ao carregar questionário</div>}
          {!qLoading && !qError && qDetail && (
            <div className="space-y-4">
              <div>
                <div className="text-xl font-bold mb-1">{qDetail.title_pt}</div>
                {qDetail.description_pt && (
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    <button className="mr-2 text-amber-700 hover:underline text-xs" onClick={()=>speak(qDetail.description_pt)}>Ouvir</button>
                    {qDetail.description_pt}
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {questions.map((q: any) => (
                  <div key={q.id} className="rounded border p-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-medium">{q.order}. {q.text_pt} {q.is_required && <span className="text-red-600">*</span>}</div>
                        {q.help_text_pt && <div className="text-xs text-gray-500">{q.help_text_pt}</div>}
                      </div>
                      <button className="text-xs text-amber-700 hover:underline" onClick={()=>speak(q.text_pt)}>Ouvir</button>
                    </div>

                    <div className="mt-2">
                      {['text','long_text'].includes(q.type) && (
                        <textarea className="w-full rounded border px-2 py-1 min-h-[88px]" value={answers[q.id] || ''} onChange={(e)=>handleChange(q.id, e.target.value)} placeholder="Escreva sua resposta" />
                      )}
                      {q.type === 'single_choice' && (
                        <div className="space-y-1">
                          {(q.options || []).map((opt: any) => (
                            <label key={opt.value} className="flex items-center gap-2 text-sm">
                              <input type="radio" name={`q-${q.id}`} checked={(answers[q.id]||'')===opt.value} onChange={()=>handleChange(q.id, opt.value)} />
                              {opt.label_pt || opt.value}
                            </label>
                          ))}
                        </div>
                      )}
                      {q.type === 'multiple_choice' && (
                        <div className="space-y-1">
                          {(q.options || []).map((opt: any) => {
                            const set = new Set(answers[q.id] || [])
                            const checked = set.has(opt.value)
                            return (
                              <label key={opt.value} className="flex items-center gap-2 text-sm">
                                <input type="checkbox" checked={checked} onChange={(e)=>{
                                  if (e.currentTarget.checked) set.add(opt.value); else set.delete(opt.value)
                                  handleChange(q.id, Array.from(set))
                                }} />
                                {opt.label_pt || opt.value}
                              </label>
                            )
                          })}
                        </div>
                      )}
                      {q.type === 'scale' && (
                        <div className="flex items-center gap-3">
                          <input type="range" min={q.scale_min||0} max={q.scale_max||10} value={answers[q.id] || 0} onChange={(e)=>handleChange(q.id, Number(e.target.value))} />
                          <span className="text-sm">{answers[q.id] || 0}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <button className="px-3 py-1 rounded border" onClick={()=>saveMutation.mutate({ question: q, draft: true })} disabled={saveMutation.isPending}>Salvar rascunho</button>
                      <button className="px-3 py-1 rounded bg-amber-600 text-white" onClick={()=>saveMutation.mutate({ question: q, draft: false })} disabled={saveMutation.isPending}>Enviar</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </AppShell>
  )
}
