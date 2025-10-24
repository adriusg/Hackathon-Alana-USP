// Arquivo consolidado - Re-exporta todo o conteúdo das seções
import { detailedSectionsContent } from './sections-content-detailed'
import { remainingSections } from './sections-remaining'
import { sectionsData } from './sections-data'
import { Translatable } from '@/components/translatable'
import { Target, Award } from 'lucide-react'

// Define o tipo de uma seção
export interface SectionData {
  title: string
  subtitle: string
  gradient: string
  content: JSX.Element
}

// Função para converter sectionsData em SectionData
function createSectionFromData(sectionKey: string, data: any): SectionData {
  return {
    title: data.title,
    subtitle: data.subtitle,
    gradient: `from-amber-500 via-yellow-500 to-orange-400`,
    content: (
      <Translatable
        pt={
          <section className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{data.title}</h2>
            {data.content.map((item: any, index: number) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{item.heading}</h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">{item.text}</p>
                {item.reference && (
                  <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-blue-600">
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.reference}</p>
                  </div>
                )}
              </div>
            ))}
          </section>
        }
        en={
          <section className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{data.title}</h2>
            {data.content.map((item: any, index: number) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{item.heading}</h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">{item.text}</p>
                {item.reference && (
                  <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-blue-600">
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.reference}</p>
                  </div>
                )}
              </div>
            ))}
          </section>
        }
      />
    )
  }
}

// Seção hackathon temporária
const hackathonSection: SectionData = {
  title: 'Hackathon USP-ALANA',
  subtitle: 'Inovação Colaborativa',
  gradient: 'from-amber-500 via-yellow-500 to-orange-400',
  content: (
    <Translatable
      pt={
        <section className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Hackathon USP-ALANA</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            O hackathon é um laboratório de co-criação com escolas para gerar soluções inclusivas escaláveis. 
            A dinâmica combina <strong>Design-Based Research (DBR)</strong> e ciclos rápidos: descoberta → prototipagem → testes em sala → avaliação formativa → iteração.
          </p>

          <h3 className="text-2xl font-bold mb-4">Objetivos</h3>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
            <li><strong>Impacto pedagógico</strong> em inclusão e aprendizagem, com evidências.</li>
            <li><strong>Aderência a UDL</strong> (múltiplos meios de engajamento, representação, ação/expressão).</li>
            <li><strong>Acessibilidade digital</strong> conforme WCAG 2.2 (nível AA como alvo mínimo).</li>
            <li><strong>Governança de IA responsável</strong> (propósito legítimo, explicabilidade, mitigação de vieses, LGPD).</li>
            <li><strong>Escala e transferibilidade</strong> para redes públicas e privadas.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">Metodologia (DBR)</h3>
          <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 mb-6">
            <li><strong>Descoberta</strong>: problema educacional, mapeamento de barreiras e objetivos de aprendizagem.</li>
            <li><strong>Prototipagem</strong>: hipóteses e desenho por UDL; requisitos de acessibilidade.</li>
            <li><strong>Teste em sala</strong>: pequena escala com turmas parceiras, registros e consentimentos.</li>
            <li><strong>Avaliação formativa</strong>: dados de engajamento, usabilidade e acessibilidade.</li>
            <li><strong>Iteração</strong>: ajustes, documentação e plano de escala.</li>
          </ol>

          <h3 className="text-2xl font-bold mb-4">Critérios de avaliação</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-purple-50 dark:bg-slate-800 p-6 rounded-lg border-l-4 border-purple-600">
              <h4 className="font-semibold mb-2">Pedagogia e Acessibilidade</h4>
              <ul className="text-sm space-y-1">
                <li>UDL: opções reais de engajamento/representação/expressão</li>
                <li>WCAG 2.2 AA: contraste, teclado, foco, textos alternativos, legendas</li>
                <li>Estudos de caso com dados de engajamento/aprendizagem</li>
              </ul>
            </div>
            <div className="bg-pink-50 dark:bg-slate-800 p-6 rounded-lg border-l-4 border-pink-600">
              <h4 className="font-semibold mb-2">Ética e Escala</h4>
              <ul className="text-sm space-y-1">
                <li>Governança de IA (propósito, dados, riscos/mitigações, explicabilidade)</li>
                <li>LGPD: minimização, segurança e transparência</li>
                <li>Plano de transferência para redes e documentação aberta</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-lg my-8 border-l-4 border-purple-600">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Equipe e participação</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• <strong>USP</strong>: IA, educação e acessibilidade</li>
              <li>• <strong>Instituto ALANA</strong>: direitos da criança e inclusão</li>
              <li>• <strong>Educadores</strong>: escolas públicas e privadas</li>
              <li>• <strong>Estudantes e famílias</strong>: coautoria e validação</li>
            </ul>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Referências: UDL (CAST) – https://udlguidelines.cast.org/ • WCAG 2.2 – https://www.w3.org/TR/WCAG22/ • 
            UNESCO GenAI (2023) – https://unesdoc.unesco.org/ark:/48223/pf0000386693 • OECD AI Principles – https://www.oecd.org/en/topics/ai-principles.html
          </p>
        </section>
      }
      en={
        <section className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">USP-ALANA Hackathon</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            The hackathon is a co-creation lab with schools to develop scalable inclusive solutions. 
            It combines <strong>Design-Based Research (DBR)</strong> and rapid cycles: discovery → prototyping → classroom trials → formative evaluation → iteration.
          </p>

          <h3 className="text-2xl font-bold mb-4">Goals</h3>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
            <li><strong>Pedagogical impact</strong> on inclusion and learning, with evidence.</li>
            <li><strong>UDL alignment</strong> (multiple means of engagement, representation, action/expression).</li>
            <li><strong>Digital accessibility</strong> per WCAG 2.2 (AA as minimum target).</li>
            <li><strong>Responsible AI governance</strong> (legitimate purpose, explainability, bias mitigation, data protection).</li>
            <li><strong>Scale and transferability</strong> to public and private networks.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">Method (DBR)</h3>
          <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 mb-6">
            <li><strong>Discovery</strong>: educational problem, barriers and learning goals.</li>
            <li><strong>Prototyping</strong>: UDL-based design; explicit accessibility requirements.</li>
            <li><strong>Classroom trials</strong>: small-scale pilots; logs and consents.</li>
            <li><strong>Formative evaluation</strong>: engagement, usability and accessibility data.</li>
            <li><strong>Iteration</strong>: refinements, documentation and scaling plan.</li>
          </ol>

          <h3 className="text-2xl font-bold mb-4">Evaluation criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-purple-50 dark:bg-slate-800 p-6 rounded-lg border-l-4 border-purple-600">
              <h4 className="font-semibold mb-2">Pedagogy & Accessibility</h4>
              <ul className="text-sm space-y-1">
                <li>UDL: real options for engagement/representation/expression</li>
                <li>WCAG 2.2 AA: contrast, keyboard, focus, alt text, captions</li>
                <li>Case studies with learning/engagement data</li>
              </ul>
            </div>
            <div className="bg-pink-50 dark:bg-slate-800 p-6 rounded-lg border-l-4 border-pink-600">
              <h4 className="font-semibold mb-2">Ethics & Scale</h4>
              <ul className="text-sm space-y-1">
                <li>AI governance (purpose, data, risks/mitigations, explainability)</li>
                <li>Data protection and transparency</li>
                <li>Transfer plan and open documentation</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-lg my-8 border-l-4 border-purple-600">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Team & participation</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• <strong>USP</strong>: AI, education and accessibility</li>
              <li>• <strong>Instituto ALANA</strong>: child rights and inclusion</li>
              <li>• <strong>Educators</strong>: public and private school teachers</li>
              <li>• <strong>Students & families</strong>: co-authors and validators</li>
            </ul>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            References: UDL (CAST) – https://udlguidelines.cast.org/ • WCAG 2.2 – https://www.w3.org/TR/WCAG22/ • 
            UNESCO GenAI (2023) – https://unesdoc.unesco.org/ark:/48223/pf0000386693 • OECD AI Principles – https://www.oecd.org/en/topics/ai-principles.html
          </p>
        </section>
      }
    />
  )
}

// Consolida todas as seções em um único objeto com tipo explícito
export const allSectionsContent: Record<string, SectionData> = {
  // Seções 1-5 (quem-somos, missao-legal, educacao-inclusiva, ia-transformadora, vinculos)
  ...detailedSectionsContent,
  
  // Seções 6-7 (expressao-livre, deficiencia)
  'expressao-livre': remainingSections['expressao-livre'],
  'deficiencia': remainingSections['deficiencia'],
  
  // Seções 8-9 (objetivos, hackathon) - usando dados existentes
  'objetivos': createSectionFromData('objetivos', sectionsData['objetivos']),
  'hackathon': hackathonSection
}

// Type helper
export type SectionSlug = keyof typeof allSectionsContent
