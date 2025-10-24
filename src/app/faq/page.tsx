"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'

const faqs = [
  { q: 'O que é a Plataforma Solar?', a: 'Uma iniciativa USP–ALANA para apoiar educação inclusiva com tecnologia responsável, acessibilidade e evidências pedagógicas.' },
  { q: 'Como faço contato com a equipe?', a: 'Use a página Contato para enviar sua mensagem e e-mail. Responderemos por lá.' },
  { q: 'Como cadastrar minha escola?', a: 'Acesse a página Cadastre a sua escola e preencha os dados. Entraremos em contato com a gestão.' },
  { q: 'O login funciona sem backend?', a: 'Há um modo demo para testes de navegação. Quando o backend estiver ativo, o login é real e baseado em perfis.' },
]

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-950">
      <section className="relative py-20 sm:py-24 bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-400 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl">
            <Button variant="ghost" asChild className="mb-8 text-white/90 hover:text-white hover:bg-white/10">
              <Link href="/">Voltar à página inicial</Link>
            </Button>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">Dúvidas Frequentes</h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl">Perguntas comuns sobre a Plataforma Solar.</p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="divide-y divide-gray-200 dark:divide-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              {faqs.map((item, i) => (
                <details key={i} className="group">
                  <summary className="flex items-center justify-between cursor-pointer select-none px-6 py-5 text-lg font-semibold text-gray-900 dark:text-white group-open:bg-gray-50/60 dark:group-open:bg-gray-800/60">
                    {item.q}
                    <span className="ml-4 text-amber-600">{/** icon */}+/-</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">{item.a}</div>
                </details>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <Button asChild><Link href="/contato">Não encontrou? Fale conosco</Link></Button>
              <Button variant="outline" asChild><Link href="/cadastre-sua-escola">Cadastrar escola</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
