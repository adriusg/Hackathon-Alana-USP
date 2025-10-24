"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CadastroFuncionarioPage() {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    celular: '',
    escola: 'Escola Demo - São Paulo',
    comunicacao: 'todos',
    funcao: 'Secretaria',
    setor: '',
    jornada: 'Integral',
    turno: 'Manhã',
    areas: '' as string,
    acessibilidadeTrabalho: '',
    interessesVinculos: '',
    termos: false,
    doisFA: false,
  })
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">Cadastro de Funcionário</h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl">Informe sua função/setor e jornada. Campos sensíveis são opcionais e com consentimento.</p>
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
                    <label className="block text-sm font-medium mb-1">E-mail</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="voce@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Celular</label>
                    <input name="celular" value={form.celular} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="(xx) xxxxx-xxxx" />
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

                {/* Específico funcionário */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Função</label>
                    <select name="funcao" value={form.funcao} onChange={onChange} className="w-full rounded-md border px-3 py-2">
                      <option>Secretaria</option>
                      <option>Inspetoria</option>
                      <option>Apoio</option>
                      <option>TI</option>
                      <option>Limpeza</option>
                      <option>Biblioteca</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Setor</label>
                    <input name="setor" value={form.setor} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Ex.: Administrativo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Jornada/turno</label>
                    <div className="flex gap-2">
                      <select name="jornada" value={form.jornada} onChange={onChange} className="rounded-md border px-2">
                        <option>Integral</option>
                        <option>Parcial</option>
                      </select>
                      <select name="turno" value={form.turno} onChange={onChange} className="rounded-md border px-2">
                        <option>Manhã</option>
                        <option>Tarde</option>
                        <option>Noite</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Áreas do campus onde atua (se aplicável)</label>
                  <input name="areas" value={form.areas} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Ex.: Bloco A, Quadra, Laboratórios" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Necessidades de acessibilidade no trabalho (opcional)</label>
                    <textarea name="acessibilidadeTrabalho" value={form.acessibilidadeTrabalho} onChange={onChange} rows={4} className="w-full rounded-md border px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Interesses para ações de vínculos (opcional)</label>
                    <textarea name="interessesVinculos" value={form.interessesVinculos} onChange={onChange} rows={4} className="w-full rounded-md border px-3 py-2" />
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
                    <label className="mt-2 flex items-center gap-2 text-sm"><input type="checkbox" name="doisFA" checked={form.doisFA} onChange={onChange}/> Ativar 2FA (TOTP/SMS)</label>
                  </div>
                </div>

                <label className="flex items-start gap-3 text-sm">
                  <input type="checkbox" name="termos" checked={form.termos} onChange={onChange} className="mt-1" />
                  <span>Li e aceito os Termos de Uso e a Política de Privacidade. Concordo com auditoria de consentimentos e portabilidade de dados.</span>
                </label>

                <div className="flex gap-3">
                  <Button type="submit" disabled={loading || !form.email || !form.nome || !form.termos} className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                    {loading ? 'Enviando...' : 'Criar conta de funcionário'}
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
