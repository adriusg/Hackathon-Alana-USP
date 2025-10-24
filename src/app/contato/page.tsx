"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ContatoPage() {
  const [form, setForm] = React.useState({ nome: '', email: '', telefone: '', tipo: 'sugestao', mensagem: '', consent: false })
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.email || !form.mensagem) return
    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 800))
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-950">
      <section className="relative py-20 sm:py-24 bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-400 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl">
            <Button variant="ghost" asChild className="mb-8 text-white/90 hover:text-white hover:bg-white/10">
              <Link href="/">Voltar à página inicial</Link>
            </Button>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">Entre em contato com a equipe</h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl">Envie sua mensagem. Responderemos pelo e-mail informado.</p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-6 md:p-8">
            {!submitted ? (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome</label>
                    <input name="nome" value={form.nome} onChange={onChange} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">E-mail</label>
                    <input required type="email" name="email" value={form.email} onChange={onChange} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Telefone</label>
                    <input name="telefone" value={form.telefone} onChange={onChange} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none" placeholder="(xx) xxxxx-xxxx" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tipo</label>
                    <select name="tipo" value={form.tipo} onChange={onChange} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none">
                      <option value="sugestao">Sugestão</option>
                      <option value="elogio">Elogio</option>
                      <option value="reclamacao">Reclamação</option>
                      <option value="duvida">Dúvida</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensagem</label>
                  <textarea required name="mensagem" value={form.mensagem} onChange={onChange} rows={6} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none" placeholder="Escreva sua mensagem" />
                </div>
                <label className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} className="rounded border-gray-300 dark:border-gray-700 text-amber-600 focus:ring-amber-500" />
                  Autorizo o contato pelo e-mail informado e estou ciente dos Termos e da Política de Privacidade.
                </label>
                <div className="flex gap-3">
                  <Button type="submit" disabled={loading || !form.email || !form.mensagem} className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                    {loading ? 'Enviando...' : 'Enviar mensagem'}
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/faq">FAQ</Link>
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-3">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mensagem enviada</h2>
                <p className="text-gray-600 dark:text-gray-400">Obrigado pelo contato! Responderemos para <span className="font-semibold">{form.email}</span>.</p>
                <div className="flex gap-3 justify-center">
                  <Button asChild>
                    <Link href="/">Voltar para a Home</Link>
                  </Button>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>Enviar outra</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
