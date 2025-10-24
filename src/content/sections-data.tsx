import { AcademicReference, StatBox, QuoteBox } from '@/components/academic-references'

// Este arquivo contém o conteúdo acadêmico detalhado para todas as 9 seções
// Baseado em pesquisas, dados reais do Censo Escolar e teorias pedagógicas consolidadas

export const sectionsDetailedContent = {
  'quem-somos': {
    title: 'Quem Somos',
    subtitle: 'Grupo Solar: Iluminando Caminhos na Educação Inclusiva',
    gradient: 'from-slate-900 via-blue-900 to-indigo-950',
    content: () => (
      <section className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Nossa História e Missão</h2>
        
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          O <strong>Grupo Solar</strong> emerge como uma resposta inovadora e necessária aos desafios contemporâneos da educação inclusiva no Brasil. Nascido de uma parceria estratégica entre o <strong>Instituto ALANA</strong> – reconhecido internacionalmente por sua defesa intransigente dos direitos da infância e adolescência – e a <strong>Universidade de São Paulo (USP)</strong> – maior instituição de pesquisa e produção científica da América Latina –, nosso projeto representa a convergência entre rigor acadêmico, expertise em advocacy social e compromisso ético com a transformação educacional.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          O nome "Solar" não é meramente poético: encerra uma filosofia pedagógica profunda. Assim como cada estrela do universo é única em sua composição, luminosidade e trajetória, cada estudante brasileiro possui características, potencialidades e necessidades singulares. Nossa missão é criar <em>constelações de aprendizado</em> – ambientes escolares onde todos os sóis podem brilhar simultaneamente, sem que a luz de um ofusque a dos demais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <StatBox 
            value="1,3 milhão" 
            label="Estudantes com deficiência na Educação Básica"
            source="INEP, Censo Escolar 2023"
            trend="up"
          />
          <StatBox 
            value="91,3%" 
            label="Matrículas em escolas regulares inclusivas"
            source="INEP, Censo Escolar 2023"
            trend="up"
          />
          <StatBox 
            value="6,1%" 
            label="Professores com formação em Ed. Especial"
            source="Painel IRM 2023"
            trend="up"
          />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Filosofia Educacional</h3>
        
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          Nossa abordagem fundamenta-se na síntese crítica de três pilares teóricos principais:
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Paulo Freire e a Pedagogia Crítica</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A educação como prática da liberdade. Freire nos ensina que não existe educação neutra: todo ato pedagógico é inevitavelmente um ato político. A educação ou domestica ou liberta.
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-slate-800 p-6 rounded-lg border-l-4 border-purple-600">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. Lev Vygotsky e a Teoria Sociocultural</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              O desenvolvimento humano como processo fundamentalmente social. A Zona de Desenvolvimento Proximal (ZDP) demonstra que, com mediação adequada, todos podem avançar cognitiva e socialmente.
            </p>
          </div>

          <div className="bg-amber-50 dark:bg-slate-800 p-6 rounded-lg border-l-4 border-amber-600">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. Maria Teresa Mantoan e a Inclusão Radical</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A escola deve ser transformada para acolher a diversidade, não o contrário. A inclusão beneficia todos os estudantes, não apenas aqueles com deficiência.
            </p>
          </div>
        </div>

        <QuoteBox 
          quote="Ninguém educa ninguém, ninguém educa a si mesmo, os homens se educam entre si, mediatizados pelo mundo."
          author="Paulo Freire"
          work="Pedagogia do Oprimido"
          year={1970}
        />

        <AcademicReference text="FREIRE, P. Pedagogia do Oprimido. Rio de Janeiro: Paz e Terra, 1970." />
        <AcademicReference text="VYGOTSKY, L.S. A formação social da mente. São Paulo: Martins Fontes, 1984." />
        <AcademicReference text="MANTOAN, M.T.E. Inclusão escolar: O que é? Por quê? Como fazer? São Paulo: Moderna, 2003." />
      </section>
    )
  }
}
