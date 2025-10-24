"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Heart, Users, Sparkles, Target, Award, BrainCircuit, Shield, MessageCircle, Accessibility } from 'lucide-react'
import { useI18n } from '@/components/providers/i18n-provider'

const sections = [
  // Espaço profundo - vácuo espacial com estrelas
  { id: 'quem-somos', gradient: 'from-[#050814] via-[#0b1220] to-[#0a0f1f]', layer: 'space', icon: Heart },
  
  // Exosfera - transição espaço-atmosfera com estrelas
  { id: 'objetivos', gradient: 'from-[#050814] via-[#0b1220] to-[#0a0f1f]', layer: 'space', icon: Target },
  
  // Termosfera - aurora boreal, ainda com estrelas
  { id: 'hackathon', gradient: 'from-[#050814] via-[#0b1220] to-[#0a0f1f]', layer: 'space', icon: Award },
  
  // Mesosfera - entrada na atmosfera, primeiras nuvens (começa a clarear)
  { id: 'missao-legal', gradient: 'from-purple-900 via-indigo-800 to-blue-800', layer: 'atmosphere', icon: Shield },
  
  // Estratosfera - atmosfera média com nuvens (clareando mais)
  { id: 'educacao-inclusiva', gradient: 'from-blue-800 via-blue-700 to-sky-700', layer: 'atmosphere', icon: Users },
  
  // Troposfera - atmosfera baixa onde vivemos (azul médio)
  { id: 'ia-transformadora', gradient: 'from-sky-700 via-blue-600 to-sky-600', layer: 'atmosphere', icon: BrainCircuit },
  
  // Baixa troposfera - céu próximo ao solo (azul mais claro)
  { id: 'vinculos', gradient: 'from-sky-600 via-blue-500 to-sky-500', layer: 'low-atmosphere', icon: Sparkles },
  
  // Nível do solo - céu terrestre visto de baixo (azul claro)
  { id: 'expressao-livre', gradient: 'from-sky-500 via-blue-400 to-sky-400', layer: 'surface', icon: MessageCircle },
  
  // Solo terrestre - céu azul brilhante acima, solo abaixo
  { id: 'deficiencia', gradient: 'from-sky-400 via-blue-400 to-sky-500', layer: 'ground', icon: Accessibility },
]

export default function HomePage() {
  const { t } = useI18n()
  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <section className="hero-starfield relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="sf-layer sf-1 pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
        <div className="sf-layer sf-2 pointer-events-none absolute inset-0 z-[2]" aria-hidden="true" />
        <div className="sf-layer sf-3 pointer-events-none absolute inset-0 z-[3]" aria-hidden="true" />
        <div className="shooting-stars pointer-events-none absolute inset-0 z-[4]" aria-hidden="true">
          <span className="comet" />
          <span className="comet" />
          <span className="comet" />
          <span className="comet" />
          <span className="comet" />
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-6 max-w-4xl">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-lg">
                {t('hero.welcome')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 animate-pulse">
                  Plataforma Solar
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-xl md:text-2xl lg:text-3xl text-white/90 font-light">
                {t('hero.tagline')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" asChild className="text-lg px-8 py-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 shadow-lg shadow-amber-500/50">
                <Link href="/login">
                  {t('hero.cta.login')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                <Link href="#quem-somos">
                  {t('hero.cta.mission')}
                </Link>
              </Button>
            </div>

            <div className="mt-16 animate-bounce">
              <p className="text-white/80 text-sm mb-2">Role para descobrir</p>
              <svg className="w-6 h-6 mx-auto text-white/80" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 z-0 bg-gradient-to-br ${section.gradient} opacity-95`}></div>
          
          {/* Atmospheric Layer Effects - INLINE STYLES FOR VISIBILITY */}
          {section.layer === 'space' && (
            <div 
              className="absolute inset-0 z-[5] pointer-events-none"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 8% 20%, rgba(255,255,255,0.8), transparent 2px),
                  radial-gradient(circle at 25% 45%, rgba(255,255,255,0.6), transparent 2px),
                  radial-gradient(circle at 45% 15%, rgba(255,255,255,1), transparent 3px),
                  radial-gradient(circle at 65% 75%, rgba(255,255,255,0.7), transparent 2px),
                  radial-gradient(circle at 85% 35%, rgba(255,255,255,0.8), transparent 2px),
                  radial-gradient(circle at 15% 80%, rgba(255,255,255,0.6), transparent 2px),
                  radial-gradient(circle at 35% 60%, rgba(255,255,255,1), transparent 2px),
                  radial-gradient(circle at 75% 25%, rgba(255,255,255,0.7), transparent 2px),
                  radial-gradient(circle at 95% 85%, rgba(255,255,255,0.9), transparent 2px),
                  radial-gradient(circle at 55% 90%, rgba(255,255,255,0.6), transparent 2px),
                  radial-gradient(circle at 12% 12%, rgba(255,255,255,1), transparent 3px),
                  radial-gradient(circle at 32% 22%, rgba(255,255,255,0.7), transparent 2px),
                  radial-gradient(circle at 52% 32%, rgba(255,255,255,0.9), transparent 2px),
                  radial-gradient(circle at 72% 42%, rgba(255,255,255,0.7), transparent 2px),
                  radial-gradient(circle at 22% 62%, rgba(255,255,255,0.8), transparent 2px),
                  radial-gradient(circle at 42% 72%, rgba(255,255,255,0.7), transparent 2px),
                  radial-gradient(circle at 62% 18%, rgba(255,255,255,0.8), transparent 2px),
                  radial-gradient(circle at 82% 28%, rgba(255,255,255,1), transparent 2px),
                  radial-gradient(circle at 92% 48%, rgba(255,255,255,0.7), transparent 2px)
                `,
                backgroundSize: '100% 100%'
              }}
            />
          )}
          
          {section.layer === 'atmosphere' && (
            <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
              {/* Elegant SVG Clouds with smooth curves and blur */}
              <svg className="absolute" style={{ top: '15%', left: '10%', width: '220px', height: '100px', opacity: 0.25 }}>
                <defs>
                  <filter id="cloud-blur-1">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                  </filter>
                  <linearGradient id="cloud-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0.7 }} />
                  </linearGradient>
                </defs>
                <path d="M 30,50 Q 40,25 65,30 Q 85,20 110,25 Q 135,18 160,30 Q 180,35 190,50 Q 185,70 160,75 Q 130,80 100,75 Q 70,80 40,75 Q 20,70 30,50 Z" 
                      fill="url(#cloud-gradient-1)" filter="url(#cloud-blur-1)" />
              </svg>
              
              <svg className="absolute" style={{ top: '45%', left: '65%', width: '240px', height: '110px', opacity: 0.22 }}>
                <defs>
                  <filter id="cloud-blur-2">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" />
                  </filter>
                  <linearGradient id="cloud-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0.65 }} />
                  </linearGradient>
                </defs>
                <path d="M 35,55 Q 45,28 75,32 Q 100,22 130,28 Q 160,20 185,32 Q 210,38 218,55 Q 212,78 185,82 Q 150,88 115,82 Q 80,88 50,82 Q 25,75 35,55 Z" 
                      fill="url(#cloud-gradient-2)" filter="url(#cloud-blur-2)" />
              </svg>
              
              <svg className="absolute" style={{ top: '68%', left: '25%', width: '200px', height: '95px', opacity: 0.24 }}>
                <defs>
                  <filter id="cloud-blur-3">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                  </filter>
                  <linearGradient id="cloud-gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0.95 }} />
                    <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0.68 }} />
                  </linearGradient>
                </defs>
                <path d="M 28,48 Q 38,24 62,28 Q 82,18 105,23 Q 130,16 155,28 Q 175,33 182,48 Q 178,68 155,72 Q 125,78 95,72 Q 65,78 38,72 Q 18,66 28,48 Z" 
                      fill="url(#cloud-gradient-3)" filter="url(#cloud-blur-3)" />
              </svg>
              
              <svg className="absolute" style={{ top: '28%', right: '12%', width: '210px', height: '100px', opacity: 0.23 }}>
                <defs>
                  <filter id="cloud-blur-4">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.2" />
                  </filter>
                  <linearGradient id="cloud-gradient-4" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0.66 }} />
                  </linearGradient>
                </defs>
                <path d="M 32,50 Q 42,26 68,30 Q 90,20 115,26 Q 142,19 168,30 Q 190,36 198,50 Q 193,72 168,76 Q 135,82 105,76 Q 72,82 42,76 Q 22,69 32,50 Z" 
                      fill="url(#cloud-gradient-4)" filter="url(#cloud-blur-4)" />
              </svg>
            </div>
          )}
          
          {section.layer === 'low-atmosphere' && (
            <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
              {/* Larger elegant clouds with more blur */}
              <svg className="absolute" style={{ top: '18%', left: '6%', width: '280px', height: '130px', opacity: 0.32 }}>
                <defs>
                  <filter id="cloud-blur-5">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" />
                  </filter>
                  <linearGradient id="cloud-gradient-5" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0.6 }} />
                  </linearGradient>
                </defs>
                <path d="M 40,65 Q 52,32 88,38 Q 120,25 158,32 Q 195,22 228,38 Q 260,46 272,65 Q 265,95 228,102 Q 180,112 135,102 Q 88,112 58,102 Q 28,92 40,65 Z" 
                      fill="url(#cloud-gradient-5)" filter="url(#cloud-blur-5)" />
              </svg>
              
              <svg className="absolute" style={{ top: '52%', right: '8%', width: '260px', height: '120px', opacity: 0.3 }}>
                <defs>
                  <filter id="cloud-blur-6">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4.2" />
                  </filter>
                  <linearGradient id="cloud-gradient-6" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0.62 }} />
                  </linearGradient>
                </defs>
                <path d="M 38,60 Q 48,30 80,35 Q 110,24 145,30 Q 180,21 210,35 Q 240,42 250,60 Q 244,88 210,94 Q 165,103 125,94 Q 82,103 52,94 Q 26,86 38,60 Z" 
                      fill="url(#cloud-gradient-6)" filter="url(#cloud-blur-6)" />
              </svg>
              
              <svg className="absolute" style={{ bottom: '12%', left: '32%', width: '300px', height: '140px', opacity: 0.34 }}>
                <defs>
                  <filter id="cloud-blur-7">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                  </filter>
                  <linearGradient id="cloud-gradient-7" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0.58 }} />
                  </linearGradient>
                </defs>
                <path d="M 45,70 Q 58,35 95,42 Q 130,28 170,35 Q 210,25 245,42 Q 280,52 292,70 Q 284,102 245,110 Q 190,122 145,110 Q 95,122 62,110 Q 30,98 45,70 Z" 
                      fill="url(#cloud-gradient-7)" filter="url(#cloud-blur-7)" />
              </svg>
            </div>
          )}
          
          {section.layer === 'surface' && (
            <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
              {/* Very large elegant clouds near ground */}
              <svg className="absolute" style={{ bottom: '8%', left: '12%', width: '350px', height: '165px', opacity: 0.28 }}>
                <defs>
                  <filter id="cloud-blur-8">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5.5" />
                  </filter>
                  <linearGradient id="cloud-gradient-8" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0.55 }} />
                  </linearGradient>
                </defs>
                <path d="M 50,82 Q 65,40 108,48 Q 148,32 195,40 Q 245,28 285,48 Q 325,60 340,82 Q 330,118 285,128 Q 220,142 165,128 Q 105,142 68,128 Q 33,112 50,82 Z" 
                      fill="url(#cloud-gradient-8)" filter="url(#cloud-blur-8)" />
              </svg>
              
              <svg className="absolute" style={{ top: '12%', right: '8%', width: '370px', height: '175px', opacity: 0.26 }}>
                <defs>
                  <filter id="cloud-blur-9">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                  </filter>
                  <linearGradient id="cloud-gradient-9" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0.52 }} />
                  </linearGradient>
                </defs>
                <path d="M 52,88 Q 68,42 115,52 Q 158,34 210,42 Q 265,30 310,52 Q 352,65 366,88 Q 355,128 310,138 Q 238,154 175,138 Q 110,154 72,138 Q 35,118 52,88 Z" 
                      fill="url(#cloud-gradient-9)" filter="url(#cloud-blur-9)" />
              </svg>
            </div>
          )}
          
          {section.layer === 'ground' && (
            <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
              {/* Sky gradient - azul claro realista do nível do solo */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to bottom, rgba(56,189,248,0.85) 0%, rgba(96,165,250,0.88) 75%, rgba(125,211,252,0.85) 80%, transparent 80%)'
              }} />
              
              {/* Grass horizon line */}
              <div className="absolute left-0 right-0" style={{
                top: '80%',
                height: '0.8%',
                background: 'linear-gradient(to bottom, rgba(34,197,94,1), rgba(22,163,74,1))'
              }} />
              
              {/* Soil */}
              <div className="absolute left-0 right-0 bottom-0" style={{
                top: '80.8%',
                background: 'linear-gradient(to bottom, rgba(120,72,35,0.92), rgba(92,57,28,0.95))'
              }} />
              
              {/* Beautiful SVG Trees */}
              <svg className="absolute" style={{ bottom: '19.2%', left: '12%', width: '60px', height: '140px', opacity: 0.9 }}>
                {/* Tree trunk */}
                <rect x="24" y="90" width="12" height="50" fill="#654321" />
                {/* Tree foliage - layered circles for depth */}
                <circle cx="30" cy="75" r="28" fill="#2d5016" />
                <circle cx="22" cy="68" r="22" fill="#3a6b1f" />
                <circle cx="38" cy="70" r="24" fill="#3a6b1f" />
                <circle cx="30" cy="58" r="20" fill="#4a7c2f" />
              </svg>
              
              <svg className="absolute" style={{ bottom: '19.2%', left: '28%', width: '50px', height: '120px', opacity: 0.85 }}>
                <rect x="20" y="80" width="10" height="40" fill="#654321" />
                <circle cx="25" cy="65" r="24" fill="#2d5016" />
                <circle cx="18" cy="60" r="18" fill="#3a6b1f" />
                <circle cx="32" cy="62" r="20" fill="#3a6b1f" />
                <circle cx="25" cy="50" r="17" fill="#4a7c2f" />
              </svg>
              
              <svg className="absolute" style={{ bottom: '19.2%', left: '42%', width: '70px', height: '160px', opacity: 0.92 }}>
                <rect x="28" y="100" width="14" height="60" fill="#654321" />
                <circle cx="35" cy="85" r="32" fill="#2d5016" />
                <circle cx="26" cy="76" r="26" fill="#3a6b1f" />
                <circle cx="44" cy="78" r="28" fill="#3a6b1f" />
                <circle cx="35" cy="63" r="24" fill="#4a7c2f" />
              </svg>
              
              <svg className="absolute" style={{ bottom: '19.2%', right: '32%', width: '55px', height: '130px', opacity: 0.88 }}>
                <rect x="22" y="85" width="11" height="45" fill="#654321" />
                <circle cx="27" cy="70" r="26" fill="#2d5016" />
                <circle cx="20" cy="64" r="20" fill="#3a6b1f" />
                <circle cx="34" cy="66" r="22" fill="#3a6b1f" />
                <circle cx="27" cy="54" r="18" fill="#4a7c2f" />
              </svg>
              
              <svg className="absolute" style={{ bottom: '19.2%', right: '18%', width: '65px', height: '150px', opacity: 0.9 }}>
                <rect x="26" y="95" width="13" height="55" fill="#654321" />
                <circle cx="32" cy="80" r="30" fill="#2d5016" />
                <circle cx="24" cy="72" r="24" fill="#3a6b1f" />
                <circle cx="40" cy="74" r="26" fill="#3a6b1f" />
                <circle cx="32" cy="60" r="22" fill="#4a7c2f" />
              </svg>
              
              <svg className="absolute" style={{ bottom: '19.2%', right: '8%', width: '48px', height: '115px', opacity: 0.84 }}>
                <rect x="19" y="77" width="10" height="38" fill="#654321" />
                <circle cx="24" cy="64" r="22" fill="#2d5016" />
                <circle cx="17" cy="58" r="17" fill="#3a6b1f" />
                <circle cx="31" cy="60" r="19" fill="#3a6b1f" />
                <circle cx="24" cy="48" r="16" fill="#4a7c2f" />
              </svg>
            </div>
          )}

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-8">
                {/* Icon */}
                <div className={`p-6 rounded-full backdrop-blur-sm ${
                  section.id === 'deficiencia' 
                    ? 'bg-black/20' 
                    : 'bg-white/20'
                }`}>
                  <section.icon className={`w-16 h-16 ${
                    section.id === 'deficiencia'
                      ? 'text-gray-900'
                      : 'text-white'
                  }`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <p className={`text-lg font-medium tracking-wide uppercase ${
                    section.id === 'deficiencia'
                      ? 'text-gray-900/80'
                      : 'text-white/80'
                  }`}>
                    {t(`sections.${section.id}.subtitle`)}
                  </p>
                  <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${
                    section.id === 'deficiencia'
                      ? 'text-gray-900'
                      : 'text-white'
                  }`}>
                    {t(`sections.${section.id}.title`)}
                  </h2>
                  <p className={`text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto ${
                    section.id === 'deficiencia'
                      ? 'text-gray-900/90'
                      : 'text-white/90'
                  }`}>
                    {t(`sections.${section.id}.description`)}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href={`/secoes/${section.id}`}
                  className={`group inline-flex items-center gap-2 px-8 py-4 backdrop-blur-sm rounded-full font-semibold transition-all duration-300 border-2 hover:scale-105 ${
                    section.id === 'deficiencia'
                      ? 'bg-black/20 hover:bg-black/30 text-gray-900 border-gray-900/30 hover:border-gray-900/50'
                      : 'bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50'
                  }`}
                >
                  {t('cta.read_more')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Section Counter */}
                <p className={`text-sm font-medium ${
                  section.id === 'deficiencia'
                    ? 'text-gray-900/60'
                    : 'text-white/60'
                }`}>
                  {index + 1} de {sections.length}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA: Entre em contato */}
      <section className="relative py-24 sm:py-28 bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-400 text-white overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Entre em contato com a equipe</h2>
            <p className="text-lg md:text-xl text-white/90">Envie sua mensagem, sugestão, elogio ou dúvida. Responderemos pelo e-mail informado.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="px-8 py-6 bg-white text-amber-700 hover:bg-amber-50 font-semibold">
                <Link href="/contato">Falar com a equipe</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/60 text-white hover:bg-white/10">
                <Link href="/faq">FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Cadastre a sua escola */}
      <section className="relative py-24 sm:py-28 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Cadastre a sua escola</h2>
            <p className="text-lg md:text-xl text-white/90">Conte-nos sobre sua escola. Entraremos em contato com a gestão para incluí-la na Plataforma Solar.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="px-8 py-6 bg-white text-orange-700 hover:bg-orange-50 font-semibold">
                <Link href="/cadastre-sua-escola">Solicitar cadastro</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/60 text-white hover:bg-white/10">
                <Link href="/contato">Tirar dúvidas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
