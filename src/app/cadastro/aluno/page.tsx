"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function calcAge(dob: string) {
  if (!dob) return 0
  const d = new Date(dob)
  const diff = Date.now() - d.getTime()
  const ageDt = new Date(diff)
  return Math.abs(ageDt.getUTCFullYear() - 1970)
}

export default function CadastroAlunoPage() {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    telefone: '',
    escola: 'Escola Demo - São Paulo',
    perfil: 'Aluno',
    comunicacao: 'todos',
    dataNascimento: '',
    serie: '',
    turma: '',
    turno: 'Manhã',
    ra: '',
    responsaveis: [] as string[],
    contatoAluno: '',
    usaContatoResponsaveis: false,
    acessibilidade: '',
    alergias: '',
    idioma: 'Português',
    codigoConvite: '',
    termos: false,
  })
  const [novoResp, setNovoResp] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const addResponsavel = () => {
    if (!novoResp.trim()) return
    setForm(f => ({ ...f, responsaveis: [...f.responsaveis, novoResp.trim()] }))
    setNovoResp('')
  }

  const removeResponsavel = (idx: number) => {
    setForm(f => ({ ...f, responsaveis: f.responsaveis.filter((_, i) => i !== idx) }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.email || !form.nome || !form.termos) return
    const age = calcAge(form.dataNascimento)
    if (age < 10 && form.responsaveis.length === 0) return
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 900))
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const age = calcAge(form.dataNascimento)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-950">
      <section className="relative py-20 sm:py-24 bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-400 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl">
            <Button variant="ghost" asChild className="mb-8 text-white/90 hover:text-white hover:bg-white/10"><Link href="/login">Voltar ao login</Link></Button>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">Cadastro de Aluno</h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl">Estudantes com mais de 10 anos podem se cadastrar. Menores de 10 devem cadastrar-se com responsável.</p>
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
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Telefone</label>
                    <input name="telefone" value={form.telefone} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="(xx) xxxxx-xxxx" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Escola</label>
                    <select name="escola" value={form.escola} onChange={onChange} className="w-full rounded-md border px-3 py-2">
                      <option>Escola Demo - São Paulo</option>
                      <option>Escola Horizonte - Campinas</option>
                      <option>Escola Aurora - Rio de Janeiro</option>
                    </select>
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
                  </div>
                </div>

                {/* Específico aluno */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Data de nascimento</label>
                    <input type="date" name="dataNascimento" value={form.dataNascimento} onChange={onChange} className="w-full rounded-md border px-3 py-2" />
                    {form.dataNascimento && (
                      <p className="mt-1 text-xs text-gray-500">Idade: {age} anos</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Série/ano</label>
                    <input name="serie" value={form.serie} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Ex.: 7º ano" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Turma e turno</label>
                    <div className="flex gap-2">
                      <input name="turma" value={form.turma} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Turma" />
                      <select name="turno" value={form.turno} onChange={onChange} className="rounded-md border px-2">
                        <option>Manhã</option>
                        <option>Tarde</option>
                        <option>Noite</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">RA/Matrícula</label>
                    <input name="ra" value={form.ra} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Opcional" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Responsáveis (e-mail)</label>
                    <div className="flex gap-2">
                      <input value={novoResp} onChange={(e)=>setNovoResp(e.target.value)} className="w-full rounded-md border px-3 py-2" placeholder="email@responsavel.com" />
                      <Button type="button" onClick={addResponsavel}>Adicionar</Button>
                    </div>
                    {form.responsaveis.length>0 && (
                      <ul className="mt-2 space-y-1 text-sm">
                        {form.responsaveis.map((r, i)=> (
                          <li key={i} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded px-2 py-1">
                            <span>{r}</span>
                            <button type="button" onClick={()=>removeResponsavel(i)} className="text-red-600 text-xs">remover</button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Contato do estudante</label>
                    <input name="contatoAluno" value={form.contatoAluno} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="e-mail ou celular" />
                    <label className="mt-2 flex items-center gap-2 text-sm"><input type="checkbox" name="usaContatoResponsaveis" checked={form.usaContatoResponsaveis} onChange={onChange} /> Usar apenas contato dos responsáveis</label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Idioma</label>
                    <select name="idioma" value={form.idioma} onChange={onChange} className="w-full rounded-md border px-3 py-2">
                      <option>Português</option>
                      <option>Inglês</option>
                      <option>Espanhol</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Necessidades de acessibilidade educacional (opcional)</label>
                    <textarea name="acessibilidade" value={form.acessibilidade} onChange={onChange} rows={4} className="w-full rounded-md border px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Alergias/condições para emergências (opcional)</label>
                    <textarea name="alergias" value={form.alergias} onChange={onChange} rows={4} className="w-full rounded-md border px-3 py-2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Código de convite da escola</label>
                    <input name="codigoConvite" value={form.codigoConvite} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Se recebido" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium mb-1">Preferências de segurança</label>
                    <label className="flex items-center gap-2 text-sm"><input type="checkbox" /> Ativar 2FA (TOTP/SMS)</label>
                    <label className="flex items-center gap-2 text-sm"><input type="checkbox" /> Receber códigos por e-mail</label>
                  </div>
                </div>

                <label className="flex items-start gap-3 text-sm">
                  <input type="checkbox" name="termos" checked={form.termos} onChange={onChange} className="mt-1" />
                  <span>Li e aceito os Termos de Uso e a Política de Privacidade. Concordo com o registro de consentimentos.</span>
                </label>

                {age < 10 && (
                  <div className="text-amber-700 text-sm bg-amber-50 rounded p-3">Menores de 10 anos devem cadastrar-se com responsáveis associados.</div>
                )}

                <div className="flex gap-3">
                  <Button type="submit" disabled={loading || !form.email || !form.nome || !form.termos || (age < 10 && form.responsaveis.length === 0)} className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                    {loading ? 'Enviando...' : 'Criar conta de aluno'}
                  </Button>
                  <Button variant="outline" asChild><Link href="/faq">FAQ</Link></Button>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-3">
                <h2 className="text-2xl font-bold">Cadastro recebido</h2>
                <p>Enviamos um e-mail para <span className="font-semibold">{form.email}</span> para verificação. Você poderá ativar 2FA nas configurações.</p>
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
