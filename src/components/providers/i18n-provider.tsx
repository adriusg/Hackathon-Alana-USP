"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Locale = "pt" | "en"

type Dict = Record<string, string>

const pt: Dict = {
  "nav.sections": "Seções",
  "nav.login": "Login",
  "lang.pt": "PT",
  "lang.en": "EN",
  "hero.welcome": "Bem-vindo à",
  "hero.tagline": "Iluminando caminhos para uma educação verdadeiramente inclusiva através da tecnologia, empatia e inovação responsável.",
  "hero.cta.login": "Fazer Login",
  "hero.cta.mission": "Conheça Nossa Missão",
  "cta.join": "Faça Parte da Transformação",
  "cta.explore": "Explorar Mais Seções",
  "cta.read_more": "Saiba mais",
  "cta.back_home": "Voltar à página inicial",

  // Seções - Navegação/Títulos/Subtítulos/Descrições (Home)
  "sections.quem-somos.nav": "Quem Somos",
  "sections.quem-somos.title": "Quem Somos",
  "sections.quem-somos.subtitle": "Grupo Solar",
  "sections.quem-somos.description": "Iniciativa USP–ALANA de educação inclusiva baseada em evidências, alinhada à CRPD e à LBI. Aplicamos UDL e WCAG 2.2 para remover barreiras, ampliar apoios e monitorar impacto em aprendizagem e participação.",

  "sections.objetivos.nav": "Objetivos do Website",
  "sections.objetivos.title": "Objetivos do Website",
  "sections.objetivos.subtitle": "UDL, Acessibilidade e IA Responsável",
  "sections.objetivos.description": "Hub de práticas inclusivas com metas e indicadores: desenho universal para aprendizagem (UDL), acessibilidade digital (WCAG 2.2), evidências pedagógicas e governança de IA responsável com transparência e segurança (LGPD).",

  "sections.hackathon.nav": "Hackathon USP-ALANA",
  "sections.hackathon.title": "Hackathon USP-ALANA",
  "sections.hackathon.subtitle": "Inovação Colaborativa",
  "sections.hackathon.description": "Nascido de uma colaboração entre a Universidade de São Paulo e o Instituto ALANA, este projeto representa o compromisso com a inovação educacional. O hackathon reuniu mentes brilhantes para desenvolver soluções práticas que transformam a educação inclusiva no Brasil.",

  "sections.missao-legal.nav": "Missão Legal e Moral",
  "sections.missao-legal.title": "Missão Legal e Moral",
  "sections.missao-legal.subtitle": "Diversidade Humana",
  "sections.missao-legal.description": "Arcabouço CF/1988, LDB, CRPD (Decreto 6.949/2009) e LBI/2015: inclusão em classes comuns com AEE, acessibilidade e ajustes razoáveis. Ênfase ética freiriana e proteção de dados (LGPD).",

  "sections.educacao-inclusiva.nav": "Educação Inclusiva",
  "sections.educacao-inclusiva.title": "Educação Inclusiva Para Todos",
  "sections.educacao-inclusiva.subtitle": "Transformando Realidades",
  "sections.educacao-inclusiva.description": "UDL (múltiplos meios), co-ensino e MTSS/RTI; avaliação formativa e rubricas acessíveis; gestão de sala com rotinas previsíveis e materiais compatíveis (WCAG 2.2). Evidências e estudos de caso.",

  "sections.ia-transformadora.nav": "IA Transformadora",
  "sections.ia-transformadora.title": "IA Como Agente Transformador",
  "sections.ia-transformadora.subtitle": "Tecnologia Com Propósito",
  "sections.ia-transformadora.description": "IA responsável com explicabilidade (LIME/SHAP), mitigação de vieses, privacidade diferencial e consentimento (LGPD). Diretrizes UNESCO (2023) e OECD AI. IA apoia docentes, não os substitui.",

  "sections.vinculos.nav": "Aumentando Vínculos",
  "sections.vinculos.title": "Aumentando Vínculos",
  "sections.vinculos.subtitle": "Conexões Significativas",
  "sections.vinculos.description": "Pertencimento e vínculos reduzem risco e elevam engajamento. Práticas com CNV, pares/mentorias e clubes; evidências OMS (1 em 7) e EEF (peer tutoring ~6 meses).",

  "sections.expressao-livre.nav": "Livre Expressão",
  "sections.expressao-livre.title": "Livre Expressão",
  "sections.expressao-livre.subtitle": "Voz Para Todos",
  "sections.expressao-livre.description": "Expressão com CNV, moderação e segurança. Acessibilidade comunicacional (Libras, CAA, legendas, TTS) e diretrizes WCAG 2.2. Base legal: ECA, CRPD e LBI.",

  "sections.deficiencia.nav": "Entendendo Deficiências",
  "sections.deficiencia.title": "Entendendo Deficiências",
  "sections.deficiencia.subtitle": "Modelo Social",
  "sections.deficiencia.description": "Paradigma social (CRPD/LBI). Dados WHO 2022 (16%) e IBGE PNS 2019 (8,4%). Foco em barreiras e apoios por tipo (sensorial, física, intelectual, psicossocial, neurodesenvolvimento).",
}

const en: Dict = {
  "nav.sections": "Sections",
  "nav.login": "Login",
  "lang.pt": "PT",
  "lang.en": "EN",
  "hero.welcome": "Welcome to",
  "hero.tagline": "Lighting the way to truly inclusive education through technology, empathy, and responsible innovation.",
  "hero.cta.login": "Log In",
  "hero.cta.mission": "Discover Our Mission",
  "cta.join": "Join the Transformation",
  "cta.explore": "Explore More Sections",
  "cta.read_more": "Learn more",
  "cta.back_home": "Back to home",

  // Sections - Nav/Title/Subtitle/Description (Home)
  "sections.quem-somos.nav": "About Us",
  "sections.quem-somos.title": "About Us",
  "sections.quem-somos.subtitle": "Grupo Solar",
  "sections.quem-somos.description": "USP–ALANA initiative for evidence-informed inclusive education, grounded in CRPD/LBI. We apply UDL and WCAG 2.2 to remove barriers, expand supports, and monitor impact on learning and participation.",

  "sections.objetivos.nav": "Website Objectives",
  "sections.objetivos.title": "Website Objectives",
  "sections.objetivos.subtitle": "UDL, Accessibility and Responsible AI",
  "sections.objetivos.description": "A hub for inclusive practice with goals and indicators: Universal Design for Learning (UDL), digital accessibility (WCAG 2.2), evidence-informed pedagogy, and responsible AI governance with transparency and data protection.",

  "sections.hackathon.nav": "USP-ALANA Hackathon",
  "sections.hackathon.title": "USP-ALANA Hackathon",
  "sections.hackathon.subtitle": "Collaborative Innovation",
  "sections.hackathon.description": "Born from a collaboration between the University of São Paulo and Instituto ALANA, this project reflects a commitment to educational innovation. The hackathon brought brilliant minds together to develop practical solutions that transform inclusive education in Brazil.",

  "sections.missao-legal.nav": "Legal and Moral Mission",
  "sections.missao-legal.title": "Legal and Moral Mission",
  "sections.missao-legal.subtitle": "Human Diversity",
  "sections.missao-legal.description": "Legal framework: Constitution/1988, LDB, CRPD (Decree 6.949/2009) and LBI/2015. Inclusive regular classes with AEE, accessibility and reasonable accommodations; Freirean ethics and LGPD.",

  "sections.educacao-inclusiva.nav": "Inclusive Education",
  "sections.educacao-inclusiva.title": "Inclusive Education for All",
  "sections.educacao-inclusiva.subtitle": "Transforming Realities",
  "sections.educacao-inclusiva.description": "UDL (multiple means), co-teaching and MTSS/RTI; formative assessment and accessible rubrics; classroom management with predictable routines and WCAG 2.2 compliant materials. Case studies.",

  "sections.ia-transformadora.nav": "Transformative AI",
  "sections.ia-transformadora.title": "AI as a Transformative Agent",
  "sections.ia-transformadora.subtitle": "Technology with Purpose",
  "sections.ia-transformadora.description": "Responsible AI with explainability (LIME/SHAP), bias mitigation, differential privacy and consent (LGPD). UNESCO (2023) and OECD AI Principles. AI supports teachers, it doesn’t replace them.",

  "sections.vinculos.nav": "Fostering Bonds",
  "sections.vinculos.title": "Fostering Bonds",
  "sections.vinculos.subtitle": "Meaningful Connections",
  "sections.vinculos.description": "Belonging and bonds lower risk and raise engagement. Practices with NVC, peer mentoring/clubs; evidence: WHO (1 in 7 adolescents) and EEF (peer tutoring ~6 months).",

  "sections.expressao-livre.nav": "Free Expression",
  "sections.expressao-livre.title": "Free Expression",
  "sections.expressao-livre.subtitle": "Voice for All",
  "sections.expressao-livre.description": "Expression with NVC, moderation and safety. Communication accessibility (sign language, AAC, captions, TTS) and WCAG 2.2 guidance. Legal basis: ECA, CRPD, LBI.",

  "sections.deficiencia.nav": "Understanding Disabilities",
  "sections.deficiencia.title": "Understanding Disabilities",
  "sections.deficiencia.subtitle": "Social Model",
  "sections.deficiencia.description": "Social model (CRPD/LBI). Data: WHO 2022 (16%) and IBGE PNS 2019 (8.4%). Focus on barriers and supports by type (sensory, physical, intellectual, psychosocial, neurodevelopment).",
}

const DICTS: Record<Locale, Dict> = { pt, en }

interface I18nContextType {
  locale: Locale
  setLocale: (l: Locale) => void
  toggleLocale: () => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("locale") as Locale | null
      if (saved === "pt" || saved === "en") return saved
    }
    return "pt"
  })

  useEffect(() => {
    try {
      window.localStorage.setItem("locale", locale)
    } catch {}
    // Atualiza o atributo lang do HTML para acessibilidade/SEO
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", locale === "pt" ? "pt-BR" : "en")
    }
  }, [locale])

  const toggleLocale = () => setLocale(prev => (prev === "pt" ? "en" : "pt"))

  const t = useMemo(() => {
    const dict = DICTS[locale]
    return (key: string) => dict[key] ?? key
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale, toggleLocale, t }), [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
