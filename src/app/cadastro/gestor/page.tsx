"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CadastroGestorPage() {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    telefone: '',
    escola: 'Escola Demo - São Paulo',
    comunicacao: 'todos',
    funcao: 'Diretor(a)',
    escopo: '',
    telefoneInterno: '',
    aceiteAdmin: false,
    preferRelatorios: 'Mensal',
    indicadores: 'Engajamento, Inclusão, Aprendizagem',
    acessibilidade: '',
    codigoNomeacao: '',
    docNomeacao: undefined as File | undefined,
    doisFA: true,
    termos: false,
  })
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement
    if (type === 'file') {
      setForm((f) => ({ ...f, docNomeacao: files && files[0] ? files[0] : undefined }))
      return
    }
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.email || !form.nome || !form.termos || !form.aceiteAdmin) return
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 1000))
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">Cadastro de Gestor</h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl">Confirmação de vínculo e aceite de responsabilidades administrativas.</p>
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
                </div>

                {/* Específico gestor */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Função na escola</label>
                    <select name="funcao" value={form.funcao} onChange={onChange} className="w-full rounded-md border px-3 py-2">
                      <option>Diretor(a)</option>
                      <option>Coordenador(a)</option>
                      <option>Orientador(a)</option>
                      <option>DPO</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Escopo de atuação</label>
                    <input name="escopo" value={form.escopo} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Ex.: Anos finais do EF e EM" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Telefone para urgências (interno)</label>
                    <input name="telefoneInterno" value={form.telefoneInterno} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Opcional, recomendado" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium mb-1">Aceite de responsabilidades administrativas</label>
                    <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="aceiteAdmin" checked={form.aceiteAdmin} onChange={onChange}/> Declaro ciência sobre moderação, relatórios e proteção de dados.</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Preferências de relatórios</label>
                    <select name="preferRelatorios" value={form.preferRelatorios} onChange={onChange} className="w-full rounded-md border px-3 py-2">
                      <option>Semanal</option>
                      <option>Quinzenal</option>
                      <option>Mensal</option>
                      <option>Trimestral</option>
                    </select>
                    <input name="indicadores" value={form.indicadores} onChange={onChange} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="Indicadores prioritários" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Necessidades de acessibilidade (opcional)</label>
                    <textarea name="acessibilidade" value={form.acessibilidade} onChange={onChange} rows={4} className="w-full rounded-md border px-3 py-2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Verificação de vínculo</label>
                    <input name="codigoNomeacao" value={form.codigoNomeacao} onChange={onChange} className="w-full rounded-md border px-3 py-2" placeholder="Código/documento de nomeação" />
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={onChange} className="mt-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Preferências de segurança</label>
                    <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="doisFA" checked={form.doisFA} onChange={onChange}/> Ativar 2FA por padrão</label>
                  </div>
                </div>

                <div>
                  <label className="flex items-start gap-3 text-sm">
                    <input type="checkbox" name="termos" checked={form.termos} onChange={onChange} className="mt-1" />
                    <span>Li e aceito os Termos de Uso e a Política de Privacidade. Concordo com auditoria de consentimentos e portabilidade de dados.</span>
                  </label>
                </div>

                <div className="flex gap-3">
                  <Button type="submit" disabled={loading || !form.email || !form.nome || !form.termos || !form.aceiteAdmin} className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                    {loading ? 'Enviando...' : 'Criar conta de gestor'}
                  </Button>
                  <Button variant="outline" asChild><Link href="/faq">FAQ</Link></Button>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-3">
                <h2 className="text-2xl font-bold">Cadastro recebido</h2>
                <p>Enviamos instruções para <span className="font-semibold">{form.email}</span>. Sua conta será ativada após aprovação administrativa.</p>
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
