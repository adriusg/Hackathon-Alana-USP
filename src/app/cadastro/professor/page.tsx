"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CadastroProfessorPage() {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    telefoneInterno: '',
    escola: 'Escola Demo - São Paulo',
    comunicacao: 'todos',
    disciplinas: [] as string[],
    segmentos: [] as string[],
    turmas: [] as string[],
    novoItem: '',
    tipoLista: 'disciplina',
    codigoConvite: '',
    dominioConfirmado: false,
    arquivoNomeacao: undefined as File | undefined,
    termos: false,
    doisFA: false,
  })
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement
    if (type === 'file') {
      setForm((f) => ({ ...f, arquivoNomeacao: files && files[0] ? files[0] : undefined }))
      return
    }
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const addItem = () => {
    const v = form.novoItem.trim()
    if (!v) return
    if (form.tipoLista === 'disciplina') setForm(f => ({ ...f, disciplinas: [...f.disciplinas, v], novoItem: '' }))
    if (form.tipoLista === 'segmento') setForm(f => ({ ...f, segmentos: [...f.segmentos, v], novoItem: '' }))
    if (form.tipoLista === 'turma') setForm(f => ({ ...f, turmas: [...f.turmas, v], novoItem: '' }))
  }
  const removeFrom = (list: 'disciplinas'|'segmentos'|'turmas', idx: number) => {
    setForm(f => ({ ...f, [list]: (f as any)[list].filter((_: string, i: number) => i !== idx) }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.email || !form.nome || !form.termos) return
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 900))
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-950">
      <section className="relative py-20 sm:py-24 bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-400 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl">
            <Button variant="ghost" asChild className="mb-8 text-white/90 hover:text-white hover:bg-white/10"><Link href="/login">Voltar ao login</Link></Button>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">Cadastro de Professor</h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl">Confirme seu vínculo institucional e informe suas disciplinas/segmentos.</p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-6 md:p-8">
            {!submitted ? (
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Comuns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nome completo</label>
                    <input name="nome" value={form.nome} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Nome e sobrenome" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">E-mail institucional</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="nome@escola.edu.br" />
                    <label className="mt-2 flex items-center gap-2 text-xs text-gray-500"><input type="checkbox" name="dominioConfirmado" checked={form.dominioConfirmado} onChange={onChange}/> Confirmo que o e-mail pertence ao domínio da escola</label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Telefone (interno)</label>
                    <input name="telefoneInterno" value={form.telefoneInterno} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Opcional" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Escola</label>
                    <select name="escola" value={form.escola} onChange={onChange} className="w-full rounded-md border px-3 py-2">
                      <option>Escola Demo - São Paulo</option>
                      <option>Escola Horizonte - Campinas</option>
                      <option>Escola Aurora - Rio de Janeiro</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Disciplinas</label>
                    <div className="flex gap-2">
                      <input name="novoItem" value={form.novoItem} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Ex.: Matemática" />
                      <select name="tipoLista" value={form.tipoLista} onChange={onChange} className="rounded-md border px-2"><option value="disciplina">+</option><option value="segmento">Seg</option><option value="turma">Turma</option></select>
                      <Button type="button" onClick={addItem}>Adicionar</Button>
                    </div>
                    {form.disciplinas.length>0 && (
                      <ul className="mt-2 space-y-1 text-sm">
                        {form.disciplinas.map((r, i)=> (
                          <li key={i} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded px-2 py-1">
                            <span>{r}</span>
                            <button type="button" onClick={()=>removeFrom('disciplinas', i)} className="text-red-600 text-xs">remover</button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Segmentos</label>
                    {form.segmentos.length>0 && (
                      <ul className="mt-2 space-y-1 text-sm">
                        {form.segmentos.map((r, i)=> (
                          <li key={i} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded px-2 py-1">
                            <span>{r}</span>
                            <button type="button" onClick={()=>removeFrom('segmentos', i)} className="text-red-600 text-xs">remover</button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Turmas/anos atribuídos</label>
                    {form.turmas.length>0 && (
                      <ul className="mt-2 space-y-1 text-sm">
                        {form.turmas.map((r, i)=> (
                          <li key={i} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded px-2 py-1">
                            <span>{r}</span>
                            <button type="button" onClick={()=>removeFrom('turmas', i)} className="text-red-600 text-xs">remover</button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Código de convite/validação</label>
                    <input name="codigoConvite" value={form.codigoConvite} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Se recebido (RH/gestão)" />
                    <div className="mt-2 text-xs text-gray-500">Ou envie um documento de nomeação/lotação (PDF/JPG).</div>
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={onChange} className="mt-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Preferência de comunicação</label>
                    <select name="comunicacao" value={form.comunicacao} onChange={onChange} className="w-full rounded-md border px-3 py-2">
                      <option value="email">E-mail</option>
                      <option value="sms">SMS</option>
                      <option value="app">Aplicativo</option>
                      <option value="push">Notificações no navegador</option>
                      <option value="todos">Todos</option>
                    </select>
                    <label className="mt-2 flex items-center gap-2 text-sm"><input type="checkbox" name="doisFA" checked={form.doisFA} onChange={onChange}/> Ativar 2FA (TOTP/SMS)</label>
                  </div>
                </div>

                <label className="flex items-start gap-3 text-sm">
                  <input type="checkbox" name="termos" checked={form.termos} onChange={onChange} className="mt-1" />
                  <span>Li e aceito os Termos de Uso e a Política de Privacidade. Concordo com auditoria de consentimentos e portabilidade de dados.</span>
                </label>

                <div className="flex gap-3">
                  <Button type="submit" disabled={loading || !form.email || !form.nome || !form.termos} className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                    {loading ? 'Enviando...' : 'Criar conta de professor'}
                  </Button>
                  <Button variant="outline" asChild><Link href="/faq">FAQ</Link></Button>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-3">
                <h2 className="text-2xl font-bold">Cadastro recebido</h2>
                <p>Enviamos instruções para <span className="font-semibold">{form.email}</span>. Aguarde validação institucional.</p>
                <div className="flex gap-3 justify-center">
                  <Button asChild><Link href="/login">Ir para Login</Link></Button>
                  <Button variant="outline" asChild><Link href="/">Voltar à Home</Link></Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
