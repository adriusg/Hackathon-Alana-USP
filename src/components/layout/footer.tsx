import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { Logo } from '@/components/logo'

const sections = [
  { id: 'quem-somos', label: 'Quem Somos' },
  { id: 'objetivos', label: 'Objetivos' },
  { id: 'hackathon', label: 'Hackathon USP-ALANA' },
  { id: 'missao-legal', label: 'Missão Legal' },
  { id: 'educacao-inclusiva', label: 'Educação Inclusiva' },
  { id: 'ia-transformadora', label: 'IA Transformadora' },
  { id: 'vinculos', label: 'Vínculos' },
  { id: 'expressao-livre', label: 'Livre Expressão' },
  { id: 'deficiencia', label: 'Deficiências' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre a Plataforma Solar */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity" aria-label="Plataforma Solar">
              <Logo size={60} />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Plataforma de educação inclusiva desenvolvida pela parceria Instituto ALANA e USP. 
              Iluminando caminhos para uma educação verdadeiramente acessível a todos.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-amber-600 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-amber-600 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-amber-600 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-amber-600 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-amber-600 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Seções */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Seções</h3>
            <ul className="space-y-2">
              {sections.slice(0, 5).map((section) => (
                <li key={section.id}>
                  <Link 
                    href={`/secoes/${section.id}`}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {section.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mais Seções + Páginas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Mais Seções</h3>
            <ul className="space-y-2">
              {sections.slice(5).map((section) => (
                <li key={section.id}>
                  <Link 
                    href={`/secoes/${section.id}`}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {section.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato e Informações */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:contato@gruposolar.edu.br" className="hover:text-amber-400 transition-colors">
                  contato@gruposolar.edu.br
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+551133334444" className="hover:text-amber-400 transition-colors">
                  (11) 3333-4444
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link 
                href="/contato"
                className="inline-block px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md text-sm font-medium transition-colors"
              >
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>

        {/* Links Institucionais */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Institucional</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/sobre" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/equipe" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    Nossa Equipe
                  </Link>
                </li>
                <li>
                  <Link href="/parceiros" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    Parceiros
                  </Link>
                </li>
                <li>
                  <Link href="/imprensa" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    Imprensa
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/materiais" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    Materiais Pedagógicos
                  </Link>
                </li>
                <li>
                  <Link href="/webinars" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    Documentação API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Suporte</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    Dúvidas Frequentes (FAQ)
                  </Link>
                </li>
                <li>
                  <Link href="/ajuda" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="/tutoriais" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    Tutoriais
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    Fale Conosco
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/termos-de-uso" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/privacidade" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/lgpd" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    LGPD
                  </Link>
                </li>
                <li>
                  <Link href="/acessibilidade" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    Acessibilidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} Plataforma Solar - Instituto ALANA & USP. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs">Desenvolvido com ♥ para educação inclusiva</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
