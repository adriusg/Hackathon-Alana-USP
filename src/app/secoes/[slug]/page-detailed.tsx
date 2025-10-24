import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { detailedSectionsContent } from '@/lib/sections-content-detailed'

interface PageProps {
  params: {
    slug: string
  }
}

export default function SectionDetailedPage({ params }: PageProps) {
  const section = detailedSectionsContent[params.slug as keyof typeof detailedSectionsContent]

  if (!section) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-br ${section.gradient} text-white`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className="mb-6 text-white/90 hover:text-white hover:bg-white/10"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar à página inicial
              </Link>
            </Button>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              {section.title}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-light">
              {section.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {section.content}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-amber-50 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-t">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Faça Parte da Transformação</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Junte-se a nós na construção de uma educação verdadeiramente inclusiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                <Link href="/login">Fazer Login</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">Explorar Mais Seções</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
