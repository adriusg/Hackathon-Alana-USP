import { Metadata } from 'next'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Users, Shield, Sparkles, Target, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça a Plataforma Solar - Plataforma de Educação Inclusiva USP-ALANA',
}

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" aria-label="Plataforma Solar" className="hover:opacity-90 transition-opacity">
            <Logo size={48} />
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/sobre" className="text-sm font-medium text-primary">
              Sobre
            </Link>
            <Link href="/acessibilidade" className="text-sm font-medium hover:text-primary">
              Acessibilidade
            </Link>
            <Link href="/login">
              <Button>Entrar</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-950">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Sobre a Plataforma Solar
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Parceria USP–ALANA para impulsionar educação inclusiva baseada em evidências.
                Alinhados à CRPD/LBI e à LDB, aplicamos UDL e WCAG 2.2 para remover barreiras,
                ampliar apoios e monitorar impacto. IA responsável apoia docentes com
                transparência, segurança (LGPD) e explicabilidade.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Nossa Missão</h2>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  Ser um hub de práticas inclusivas que apoia escolas a planejar por Desenho Universal
                  para a Aprendizagem (UDL), garantir acessibilidade digital (WCAG 2.2) e adotar
                  governança de IA responsável (propósito legítimo, explicabilidade, mitigação de
                  vieses, privacidade e consentimento pela LGPD).
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Isso se traduz em metas mensuráveis: elevar conformidade de acessibilidade,
                  ampliar opções de representação/expressão (UDL), fomentar vínculos e colaboração,
                  e publicar estudos de caso com dados de engajamento e aprendizagem.
                </p>

                <div className="mt-6 rounded-lg border-l-4 border-blue-600 bg-blue-50 dark:bg-blue-950/30 p-5">
                  <h3 className="text-xl font-semibold mb-2">Evidências e marcos</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>OMS (2022): ~16% da população mundial vive com deficiência (~1,3 bi).</li>
                    <li>IBGE PNS 2019: 17,3 milhões de pessoas com deficiência no Brasil (8,4%).</li>
                    <li>INEP 2023: ~1,3 milhão de matrículas do PAEE; maioria em classes comuns.</li>
                    <li>Arcabouço: CRPD/Decreto 6.949/2009, LBI/Lei 13.146/2015, LDB/Lei 9.394/1996.</li>
                    <li>Diretrizes: UDL (CAST) e WCAG 2.2 (W3C) como padrão de desenho e acessibilidade.</li>
                    <li>IA responsável: UNESCO (2023) e Princípios de IA da OECD.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Heart className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Princípios de Inclusão</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Universalidade',
                    description: 'Nossa plataforma é projetada para ser acessível a todos, independentemente de suas habilidades, necessidades ou características pessoais.',
                    icon: Users,
                  },
                  {
                    title: 'Equidade',
                    description: 'Reconhecemos que diferentes estudantes têm diferentes necessidades e oferecemos suporte personalizado para garantir oportunidades iguais.',
                    icon: Shield,
                  },
                  {
                    title: 'Participação',
                    description: 'Todos os membros da comunidade escolar são protagonistas ativos no processo educacional.',
                    icon: Heart,
                  },
                  {
                    title: 'Diversidade',
                    description: 'Celebramos e valorizamos a diversidade como uma fonte de enriquecimento para toda a comunidade educacional.',
                    icon: Sparkles,
                  },
                  {
                    title: 'Autonomia',
                    description: 'Promovemos o desenvolvimento da autonomia e autodeterminação de todos os estudantes, respeitando suas escolhas.',
                    icon: Target,
                  },
                  {
                    title: 'Colaboração',
                    description: 'Fomentamos a colaboração entre todos os atores educacionais para criar um ambiente de aprendizagem rico e inclusivo.',
                    icon: BookOpen,
                  },
                ].map((principle, index) => {
                  const Icon = principle.icon
                  return (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Icon className="h-5 w-5 text-primary" />
                          {principle.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300">
                          {principle.description}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Parceria ALANA-USP</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Este projeto é fruto da parceria entre o Instituto ALANA e a Universidade 
                  de São Paulo (USP), unindo a expertise em direitos da criança e inclusão 
                  do ALANA com o conhecimento acadêmico e tecnológico da USP.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  O Instituto ALANA é uma organização da sociedade civil que promove os 
                  direitos da criança e do adolescente, com foco especial na inclusão e 
                  no desenvolvimento integral. A USP contribui com sua tradição em pesquisa 
                  e inovação tecnológica, garantindo que a plataforma seja baseada em 
                  evidências científicas e melhores práticas educacionais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Faça Parte Dessa Transformação
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Junte-se a nós na construção de uma educação mais inclusiva e acessível para todos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/cadastro/escola">
                    Cadastrar Escola
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contato">
                    Entre em Contato
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 Instituto ALANA & USP. Todos os direitos reservados.
            </p>
            <nav className="flex gap-6">
              <Link href="/sobre" className="text-sm text-gray-500 hover:text-primary">
                Sobre
              </Link>
              <Link href="/acessibilidade" className="text-sm text-gray-500 hover:text-primary">
                Acessibilidade
              </Link>
              <Link href="/privacidade" className="text-sm text-gray-500 hover:text-primary">
                Privacidade
              </Link>
              <Link href="/contato" className="text-sm text-gray-500 hover:text-primary">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
