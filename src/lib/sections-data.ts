import { Heart, Target, Award, Shield, Users, BrainCircuit, Sparkles, MessageCircle, Accessibility } from 'lucide-react'

export const sectionsData = {
  'quem-somos': {
    title: 'Quem Somos',
    subtitle: 'Grupo Solar: Iluminando Caminhos na Educação Inclusiva',
    icon: Heart,
    gradient: 'from-blue-600 to-purple-600',
    content: [
      {
        heading: 'Nossa História',
        text: 'O Grupo Solar nasceu da parceria inovadora entre o Instituto ALANA e a Universidade de São Paulo (USP), duas instituições comprometidas com a transformação social através da educação. Inspirado no conceito de que cada estudante é único como um sol, irradiando suas próprias qualidades e potencialidades, nossa plataforma busca criar constelações de aprendizado onde todos brilham.',
      },
      {
        heading: 'Filosofia Educacional',
        text: 'Fundamentados na pedagogia crítica de Paulo Freire (1996), que defende a educação como prática de liberdade, e nas teorias socioculturais de Vygotsky (1978), que enfatizam a mediação social no desenvolvimento cognitivo, acreditamos que a verdadeira inclusão acontece quando removemos barreiras e criamos pontes.',
        reference: 'FREIRE, P. Pedagogia da Autonomia: saberes necessários à prática educativa. São Paulo: Paz e Terra, 1996.',
      },
      {
        heading: 'Impacto Social',
        text: 'Segundo dados do Censo Escolar 2022 (INEP), o Brasil possui mais de 1,3 milhão de estudantes com deficiência matriculados na educação básica. No entanto, a inclusão efetiva ainda enfrenta desafios significativos. Nossa plataforma visa democratizar o acesso a ferramentas pedagógicas que respeitam a neurodiversidade e promovem equidade.',
        reference: 'INEP - Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira. Censo Escolar 2022.',
      },
    ],
  },
  'objetivos': {
    title: 'Objetivos do Website',
    subtitle: 'Conectando Pessoas, Transformando Educação',
    icon: Target,
    gradient: 'from-purple-600 to-pink-600',
    content: [
      {
        heading: 'Objetivo Geral',
        text: 'Ser um hub de práticas inclusivas e acessíveis, orientado por evidências, que apoia escolas na remoção de barreiras e na oferta de apoios com base em desenho universal para aprendizagem (UDL) e acessibilidade digital (WCAG), assegurando direitos previstos em CRPD, LBI e LDB.'
      },
      {
        heading: 'Inclusão com base legal e direitos',
        text: 'Alinhamento explícito à CRPD/ONU, LBI (Lei 13.146/2015) e LDB (Lei 9.394/1996): educação em classes comuns com AEE, recursos de acessibilidade e desenho universal. Priorização do paradigma social da deficiência e do princípio “nada sobre nós sem nós”.',
        reference: 'CRPD – Decreto 6.949/2009: https://planalto.gov.br/CCIVIL_03/_Ato2007-2010/2009/Decreto/D6949.htm | LBI – Lei 13.146/2015: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm | LDB – Lei 9.394/1996: https://www.planalto.gov.br/ccivil_03/leis/l9394.htm'
      },
      {
        heading: 'Desenho Universal para a Aprendizagem (UDL)',
        text: 'Organizar conteúdos, trilhas e avaliações com múltiplos meios de engajamento, representação e ação/expressão; oferecer opções de materiais e formas de demonstrar aprendizagem; prever andaimagem, feedbacks frequentes e critérios transparentes.',
        reference: 'CAST – UDL Guidelines: https://udlguidelines.cast.org/'
      },
      {
        heading: 'Acessibilidade Digital (WCAG 2.2)',
        text: 'Alvo mínimo AA: contraste adequado, navegação por teclado, foco visível, textos alternativos, legendas/transcrições e prevenção de conteúdo que induza crises; auditorias periódicas e correções rastreáveis.',
        reference: 'W3C – WCAG 2.2: https://www.w3.org/TR/WCAG22/'
      },
      {
        heading: 'Evidências pedagógicas aplicadas',
        text: 'Curadoria de práticas com base em evidências (por exemplo, tutoria entre pares e aprendizagem colaborativa), com estudos de caso que apresentem dados de engajamento e resultados de aprendizagem.',
        reference: 'Education Endowment Foundation – Peer tutoring: https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/peer-tutoring'
      },
      {
        heading: 'Governança de IA responsável',
        text: 'IA como apoio pedagógico, não substituição; finalidades legítimas, minimização de dados, segurança/LGPD, explicabilidade e mitigação de vieses; documentação pública, avaliação de riscos e trilhas de auditoria.',
        reference: 'UNESCO – Guidance for Generative AI (2023): https://unesdoc.unesco.org/ark:/48223/pf0000386693 | OECD – AI Principles: https://www.oecd.org/en/topics/ai-principles.html'
      },
      {
        heading: 'Comunidade e vínculos',
        text: 'Espaços de colaboração entre professores, estudantes e famílias; protocolos de convivência, pertencimento e canais de escuta; integração de redes de apoio e serviços.'
      },
      {
        heading: 'Transparência e monitoramento',
        text: 'Publicação de metas e indicadores (acessibilidade, UDL, formação, evidências, IA), com relatórios periódicos de melhoria contínua e painel público.'
      },
      {
        heading: 'Metas iniciais e indicadores',
        text: 'Sugeridos: acessibilidade ≥90% dos componentes críticos em AA; UDL ≥70% dos materiais com opções de representação e expressão; formação docente: ≥60% completam 10h/ano; evidências: ≥12 estudos de caso/ano; IA: 100% das funcionalidades com ficha de propósito, dados e explicabilidade.'
      },
    ],
  },
}

export type SectionSlug = keyof typeof sectionsData
