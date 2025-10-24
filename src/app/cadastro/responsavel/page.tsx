"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CadastroResponsavelPage() {
  const [form, setForm] = React.useState({
    nome: '',
    parentesco: 'Mãe',
    email: '',
    celular: '',
    escola: 'Escola Demo - São Paulo',
    comunicacao: 'todos',
    estudantes: [] as string[],
    novoEstudante: '',
    bairro: '',
    cidade: '',
    consentimentoMenor: false,
    profissao: '',
    aptidoes: '',
    irmaos: '',
    vulnerabilidades: '',
    codigoConvite: '',
    termos: false,
    doisFA: false,
    notificacoes: { email: true, sms: false, push: true },
  })
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const addEstudante = () => {
    if (!form.novoEstudante.trim()) return
    setForm(f => ({ ...f, estudantes: [...f.estudantes, f.novoEstudante.trim()], novoEstudante: '' }))
  }
  const removeEstudante = (idx: number) => {
    setForm(f => ({ ...f, estudantes: f.estudantes.filter((_, i) => i !== idx) }))
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">Cadastro de Responsável</h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl">Associe-se aos estudantes sob sua responsabilidade e escolha como deseja ser contatado(a).</p>
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
                    <label className="block text-sm font-medium mb-1">Parentesco</label>
                    <select name="parentesco" value={form.parentesco} onChange={onChange} className="w-full rounded-md border px-3 py-2">
                      <option>Mãe</option>
                      <option>Pai</option>
                      <option>Tutor(a)</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">E-mail</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="voce@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Celular</label>
                    <input name="celular" value={form.celular} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="(xx) xxxxx-xxxx" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Estudantes associados (e-mail ou nome completo)</label>
                    <div className="flex gap-2">
                      <input name="novoEstudante" value={form.novoEstudante} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="email@aluno.com ou nome" />
                      <Button type="button" onClick={addEstudante}>Adicionar</Button>
                    </div>
                    {form.estudantes.length>0 && (
                      <ul className="mt-2 space-y-1 text-sm">
                        {form.estudantes.map((s,i)=> (
                          <li key={i} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded px-2 py-1">
                            <span>{s}</span>
                            <button type="button" onClick={()=>removeEstudante(i)} className="text-red-600 text-xs">remover</button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Código de convite</label>
                    <input name="codigoConvite" value={form.codigoConvite} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Se recebido da escola" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Bairro</label>
                    <input name="bairro" value={form.bairro} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Ex.: Centro" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Cidade</label>
                    <input name="cidade" value={form.cidade} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Ex.: São Paulo" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Profissão/aptidões (opcional)</label>
                    <input name="profissao" value={form.profissao} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Áreas, habilidades, ofícios" />
                    <textarea name="aptidoes" value={form.aptidoes} onChange={onChange} rows={3} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="Descrição breve para ações de comunidade" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Vulnerabilidades e barreiras (opcional)</label>
                    <textarea name="vulnerabilidades" value={form.vulnerabilidades} onChange={onChange} rows={6} className="w-full rounded-md border px-3 py-2" placeholder="Autoidentificação de barreiras enfrentadas" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Preferência de comunicação</label>
                    <select name="comunicacao" value={form.comunicacao} onChange={onChange} className="w-full rounded-md border px-3 py-2">
                      <option value="email">E-mail</option>
                      <option value="sms">SMS</option>
                      <option value="app">Aplicativo</option>
                      <option value="push">Notificações no navegador</option>
                      <option value="todos">Todos</option>
                    </select>
                    <div className="mt-2 text-xs text-gray-500">Preferências de notificação: e-mail <input type="checkbox" checked={form.notificacoes.email} onChange={(e)=>setForm(f=>({...f, notificacoes:{...f.notificacoes, email:e.currentTarget.checked}}))}/> SMS <input type="checkbox" checked={form.notificacoes.sms} onChange={(e)=>setForm(f=>({...f, notificacoes:{...f.notificacoes, sms:e.currentTarget.checked}}))}/> push <input type="checkbox" checked={form.notificacoes.push} onChange={(e)=>setForm(f=>({...f, notificacoes:{...f.notificacoes, push:e.currentTarget.checked}}))}/> </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium mb-1">Segurança</label>
                    <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="consentimentoMenor" checked={form.consentimentoMenor} onChange={onChange}/> Autorizo como responsável legal (quando aplicável)</label>
                    <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.doisFA} onChange={(e)=>setForm(f=>({...f, doisFA:e.currentTarget.checked}))}/> Ativar 2FA (TOTP/SMS)</label>
                  </div>
                </div>

                <label className="flex items-start gap-3 text-sm">
                  <input type="checkbox" name="termos" checked={form.termos} onChange={onChange} className="mt-1" />
                  <span>Li e aceito os Termos de Uso e a Política de Privacidade. Concordo com o registro de consentimentos e portabilidade dos meus dados.</span>
                </label>

                <div className="flex gap-3">
                  <Button type="submit" disabled={loading || !form.email || !form.nome || !form.termos} className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                    {loading ? 'Enviando...' : 'Criar conta de responsável'}
                  </Button>
                  <Button variant="outline" asChild><Link href="/faq">FAQ</Link></Button>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-3">
                <h2 className="text-2xl font-bold">Cadastro recebido</h2>
                <p>Enviamos instruções para <span className="font-semibold">{form.email}</span>. Você poderá associar estudantes após verificação.</p>
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
