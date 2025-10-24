import { AcademicReference, StatBox, QuoteBox } from '@/components/academic-references'
import { Translatable } from '@/components/translatable'

export const detailedSectionsContent = {
  'quem-somos': {
    title: 'Quem Somos',
    subtitle: 'Plataforma Solar: Iluminando Caminhos na EducaÃ§Ã£o Inclusiva',
    gradient: 'from-amber-500 via-yellow-500 to-orange-400',
    content: (
      <Translatable
        pt={
        <>
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa HistÃ³ria e MissÃ£o</h2>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            O <strong>Plataforma Solar</strong> emerge como uma resposta inovadora e necessÃ¡ria aos desafios contemporÃ¢neos da educaÃ§Ã£o inclusiva no Brasil. Nascido de uma parceria estratÃ©gica entre o <strong>Instituto ALANA</strong> â€“ reconhecido internacionalmente por sua defesa intransigente dos direitos da infÃ¢ncia e adolescÃªncia â€“ e a <strong>Universidade de SÃ£o Paulo (USP)</strong> â€“ maior instituiÃ§Ã£o de pesquisa e produÃ§Ã£o cientÃ­fica da AmÃ©rica Latina â€“, nosso projeto representa a convergÃªncia entre rigor acadÃªmico, expertise em advocacy social e compromisso Ã©tico com a transformaÃ§Ã£o educacional.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            O nome "Solar" nÃ£o Ã© meramente poÃ©tico: encerra uma filosofia pedagÃ³gica profunda. Assim como cada estrela do universo Ã© Ãºnica em sua composiÃ§Ã£o, luminosidade e trajetÃ³ria, cada estudante brasileiro possui caracterÃ­sticas, potencialidades e necessidades singulares. Nossa missÃ£o Ã© criar <em>constelaÃ§Ãµes de aprendizado</em> â€“ ambientes escolares onde todos os sÃ³is podem brilhar simultaneamente, sem que a luz de um ofusque a dos demais. Inspirados pela metÃ¡fora astronÃ´mica, reconhecemos que a diversidade nÃ£o Ã© um obstÃ¡culo a ser gerenciado, mas a prÃ³pria essÃªncia de um ecossistema educacional saudÃ¡vel e produtivo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <StatBox 
              value="1,3 milhÃ£o" 
              label="Estudantes com deficiÃªncia na EducaÃ§Ã£o BÃ¡sica"
              source="INEP, Censo Escolar 2023"
              trend="up"
            />
            <StatBox 
              value="91,3%" 
              label="MatrÃ­culas em escolas regulares inclusivas"
              source="INEP, Censo Escolar 2023"
              trend="up"
            />
            <StatBox 
              value="6,1%" 
              label="Professores com formaÃ§Ã£o em Ed. Especial (80h)"
              source="Painel IRM 2023"
              trend="up"
            />
          </div>

          <div className="bg-white/50 p-6 rounded-lg my-6 border-l-4 border-green-500">
            <h4 className="text-lg font-bold text-gray-900 mb-3">EvidÃªncias e dados de impacto</h4>
            <p className="text-gray-700 mb-3">A OMS destaca que <strong>1 em 7</strong> adolescentes (10â€“19) vivencia problemas de saÃºde mental, reforÃ§ando a importÃ¢ncia de vÃ­nculos e prevenÃ§Ã£o escolar. A EEF sintetiza achados de <em>peer tutoring</em> com ganho mÃ©dio equivalente a <strong>~6 meses</strong> de progresso acadÃªmico em um ano letivo quando bem implementada.</p>
            <AcademicReference text="WHO. Adolescent Mental Health (fact sheet). 2021. https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health" />
            <AcademicReference text="Education Endowment Foundation. Peer tutoring. https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/peer-tutoring" />
          </div>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Alinhamos nossa governanÃ§a Ã s <strong>diretrizes internacionais</strong>: recomendaÃ§Ãµes da <strong>UNESCO (2023) para GenAI em educaÃ§Ã£o</strong> e <strong>PrincÃ­pios de IA da OECD</strong>. Em prÃ¡tica, integramos <strong>UDL</strong> (para desenho pedagÃ³gico) e <strong>WCAG 2.2</strong> (para acessibilidade digital) na concepÃ§Ã£o de qualquer funcionalidade assistida por IA.
          </p>

          <AcademicReference text="UNESCO. Guidance for Generative AI in Education and Research. 2023. (unesdoc.unesco.org/ark:/48223/pf0000386693)" />
          <AcademicReference text="OECD. OECD AI Principles. 2019. (oecd.org/en/topics/ai-principles.html)" />
          <AcademicReference text="W3C. WCAG 2.2 (w3.org/TR/WCAG22)." />
          <AcademicReference text="CAST. UDL Guidelines (udlguidelines.cast.org)." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Panorama Global e Brasileiro</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <StatBox 
              value="16%" 
              label="PopulaÃ§Ã£o mundial com alguma deficiÃªncia"
              source="WHO, 2022"
            />
            <StatBox 
              value="17,3 milhÃµes" 
              label="Pessoas com deficiÃªncia (8,4%) no Brasil"
              source="IBGE, PNS 2019"
            />
            <StatBox 
              value="1,3 milhÃ£o" 
              label="MatrÃ­culas Ed. Especial no Brasil"
              source="INEP, 2023"
            />
          </div>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A <strong>OrganizaÃ§Ã£o Mundial da SaÃºde</strong> estima que cerca de <strong>1,3 bilhÃ£o de pessoas</strong> â€“ aproximadamente <strong>16% da populaÃ§Ã£o mundial</strong> â€“ vivem com deficiÃªncia (WHO, 2022). No Brasil, a <strong>PNS/IBGE 2019</strong> estimou <strong>17,3 milhÃµes</strong> de pessoas com pelo menos uma deficiÃªncia (8,4% da populaÃ§Ã£o com 2 anos ou mais).
          </p>

          <AcademicReference text="WHO. Global report on health equity for persons with disabilities. 2022." />
          <AcademicReference text="IBGE. PNS 2019: 17,3 milhÃµes de pessoas com deficiÃªncia (8,4%). Release oficial, 2021." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Filosofia Educacional: SÃ­ntese TeÃ³rica</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Nossa abordagem pedagÃ³gica fundamenta-se em uma sÃ­ntese crÃ­tica das principais correntes teÃ³ricas da educaÃ§Ã£o transformadora contemporÃ¢nea. De <strong>Paulo Freire</strong> (1921-1997), apropriamo-nos da pedagogia crÃ­tica e do conceito de educaÃ§Ã£o como prÃ¡tica da liberdade. Freire nos ensina que nÃ£o existe educaÃ§Ã£o neutra: todo ato pedagÃ³gico Ã©, inevitavelmente, um ato polÃ­tico. A educaÃ§Ã£o ou domestica ou liberta; ou reproduz as estruturas de opressÃ£o ou capacita os oprimidos para sua emancipaÃ§Ã£o.
          </p>

          <QuoteBox 
            quote="NinguÃ©m educa ninguÃ©m, ninguÃ©m educa a si mesmo, os homens se educam entre si, mediatizados pelo mundo."
            author="Paulo Freire"
            work="Pedagogia do Oprimido"
            year={1970}
          />

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            De <strong>Lev Vygotsky</strong> (1896-1934) e da escola sociohistÃ³rica soviÃ©tica, herdamos a compreensÃ£o de que o desenvolvimento humano Ã©, fundamentalmente, um processo social e cultural. O conceito vygotskiano de <em>Zona de Desenvolvimento Proximal (ZDP)</em> Ã© particularmente relevante para a educaÃ§Ã£o inclusiva: hÃ¡ sempre uma distÃ¢ncia entre o que o estudante consegue realizar autonomamente e o que pode alcanÃ§ar com mediaÃ§Ã£o adequada. Esta ZDP varia nÃ£o apenas entre indivÃ­duos, mas para o mesmo indivÃ­duo em diferentes domÃ­nios cognitivos e contextos sociais.
          </p>

          <AcademicReference text="VYGOTSKY, L. S. A formaÃ§Ã£o social da mente: o desenvolvimento dos processos psicolÃ³gicos superiores. SÃ£o Paulo: Martins Fontes, 1984." />

          <p className="text-lg leading-relaxed text-gray-700 mb-6 mt-6">
            A educadora brasileira <strong>Maria Teresa EglÃ©r Mantoan</strong>, referÃªncia nacional em educaÃ§Ã£o inclusiva, nos oferece insights fundamentais sobre a necessidade de transformar estruturalmente as escolas. Para Mantoan, nÃ£o se trata de adaptar estudantes com deficiÃªncia a um sistema escolar rÃ­gido e excludente, mas de reconstruir radicalmente este sistema para que acolha, de fato, a diversidade humana em toda sua riqueza.
          </p>

          <QuoteBox 
            quote="A inclusÃ£o nÃ£o atinge apenas alunos com deficiÃªncia e os que apresentam dificuldades de aprender, mas todos os demais, para que obtenham sucesso na corrente educativa geral."
            author="Maria Teresa EglÃ©r Mantoan"
            work="InclusÃ£o Escolar: O que Ã©? Por quÃª? Como fazer?"
            year={2003}
          />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Impacto Social e Responsabilidade Institucional</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Os dados mais recentes do <strong>Censo Escolar 2023</strong>, divulgados pelo Instituto Nacional de Estudos e Pesquisas Educacionais AnÃ­sio Teixeira (INEP), revelam avanÃ§os significativos e desafios persistentes no panorama da educaÃ§Ã£o inclusiva brasileira. Em 2023, foram registradas aproximadamente <strong>1,3 milhÃ£o de matrÃ­culas</strong> de estudantes pÃºblico-alvo da EducaÃ§Ã£o Especial na EducaÃ§Ã£o BÃ¡sica, representando um crescimento consistente em relaÃ§Ã£o aos anos anteriores.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Um indicador particularmente promissor Ã© que <strong>91,3% dessas matrÃ­culas</strong> estÃ£o em escolas regulares inclusivas, em classes comuns. Para contextualizar este avanÃ§o: em 2009, apenas 60,5% dos estudantes da educaÃ§Ã£o especial estavam em classes comuns. Este salto quantitativo de mais de 30 pontos percentuais em aproximadamente uma dÃ©cada e meia reflete nÃ£o apenas mudanÃ§as legislativas, mas transformaÃ§Ãµes culturais profundas na sociedade brasileira.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Entretanto, nÃºmeros quantitativos de matrÃ­cula nÃ£o garantem, automaticamente, qualidade da inclusÃ£o. O <strong>Painel de Indicadores da EducaÃ§Ã£o Especial</strong>, desenvolvido pelo Instituto Rodrigo Mendes em parceria com Instituto Unibanco, Todos Pela EducaÃ§Ã£o, Centro Lemann e UNICEF, revela lacunas preocupantes: apenas <strong>6,1% dos professores</strong> da EducaÃ§Ã£o BÃ¡sica possuem formaÃ§Ã£o continuada especÃ­fica de 80 horas certificada pelo MEC em EducaÃ§Ã£o Especial. Em 2012, este percentual era ainda menor: 4,2%. O crescimento, embora positivo, Ã© insuficiente face Ã  magnitude do desafio.
          </p>

          <AcademicReference text="Instituto Rodrigo Mendes. Painel de Indicadores da EducaÃ§Ã£o Especial. Dados do Censo Escolar 2023/INEP. DisponÃ­vel em: https://diversa.org.br/indicadores/" />

          <div className="bg-white/50 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-blue-600">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">EvidÃªncias demogrÃ¡ficas e normativas</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Globalmente, cerca de <strong>1,3 bilhÃ£o</strong> de pessoas (aprox. <strong>16%</strong>) vivem com deficiÃªncia (WHO, 2022). No Brasil, a <strong>PNS/IBGE 2019</strong> estimou <strong>17,3 milhÃµes</strong> de pessoas com pelo menos uma deficiÃªncia (<strong>8,4%</strong>). Nossa atuaÃ§Ã£o se ancora na <strong>CRPD</strong> (Decreto 6.949/2009) e na <strong>LBI</strong> (Lei 13.146/2015), e operacionaliza <strong>UDL</strong> (CAST) e <strong>WCAG 2.2</strong> na prÃ¡tica.
            </p>
            <div className="space-y-1">
              <AcademicReference text="WHO. Global report on health equity for persons with disabilities. 2022." />
              <AcademicReference text="IBGE. PNS 2019: 17,3 milhÃµes (8,4%). Release oficial, 2021." />
              <AcademicReference text="BRASIL. Decreto 6.949/2009 (CRPD)." />
              <AcademicReference text="BRASIL. Lei 13.146/2015 (LBI)." />
              <AcademicReference text="CAST. UDL Guidelines (udlguidelines.cast.org)." />
              <AcademicReference text="W3C. WCAG 2.2 (w3.org/TR/WCAG22)." />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Valores e PrincÃ­pios Norteadores</h3>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-lg my-8 border-l-4 border-amber-500">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Nossos Compromissos Fundamentais:</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold mt-1">â€¢</span>
                <span><strong>Universalidade:</strong> Defendemos educaÃ§Ã£o inclusiva para TODOS, sem exceÃ§Ãµes - independentemente de deficiÃªncia fÃ­sica, intelectual ou sensorial; transtornos de neurodesenvolvimento; altas habilidades; origem socioeconÃ´mica; raÃ§a, etnia ou cor; religiÃ£o ou ausÃªncia dela; orientaÃ§Ã£o sexual ou identidade de gÃªnero; opiniÃ£o polÃ­tica ou filiaÃ§Ã£o partidÃ¡ria; nacionalidade ou status migratÃ³rio.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold mt-1">â€¢</span>
                <span><strong>Equidade:</strong> Reconhecemos que tratar igualmente pessoas em situaÃ§Ãµes desiguais perpetua injustiÃ§as. Equidade exige tratamento diferenciado proporcional Ã s necessidades especÃ­ficas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold mt-1">â€¢</span>
                <span><strong>ParticipaÃ§Ã£o:</strong> Nada sobre nÃ³s sem nÃ³s. Estudantes, famÃ­lias e comunidades devem ser protagonistas, nÃ£o meros beneficiÃ¡rios passivos de polÃ­ticas educacionais.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold mt-1">â€¢</span>
                <span><strong>EvidÃªncias CientÃ­ficas:</strong> Fundamentamos todas as recomendaÃ§Ãµes pedagÃ³gicas em pesquisas revisadas por pares, publicadas em periÃ³dicos de impacto reconhecido.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold mt-1">â€¢</span>
                <span><strong>TransparÃªncia e Auditabilidade:</strong> Nossos algoritmos de IA sÃ£o explicÃ¡veis; nossos processos, documentados; nossos dados, protegidos segundo LGPD.</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tecnologia a ServiÃ§o da HumanizaÃ§Ã£o</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Paradoxalmente, empregamos tecnologias de ponta â€“ InteligÃªncia Artificial, Processamento de Linguagem Natural, algoritmos de clustering â€“ nÃ£o para desumanizar a educaÃ§Ã£o, mas para potencializar sua dimensÃ£o mais profundamente humana: o encontro genuÃ­no entre subjetividades, o diÃ¡logo autÃªntico, a construÃ§Ã£o coletiva de conhecimento. Nossa IA nÃ£o substitui educadores; amplifica sua capacidade de perceber nuances, identificar potencialidades latentes, sugerir intervenÃ§Ãµes pedagÃ³gicas criativas.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Seguimos rigorosamente os <em>PrincÃ­pios de IA ResponsÃ¡vel</em> propostos por Floridi e Cowls (2019): beneficÃªncia (fazer o bem), nÃ£o-maleficÃªncia (nÃ£o causar dano), autonomia (respeitar a autodeterminaÃ§Ã£o humana), justiÃ§a (distribuir equitativamente benefÃ­cios e Ã´nus) e explicabilidade (tornar decisÃµes algorÃ­tmicas compreensÃ­veis).
          </p>

          <AcademicReference text="FLORIDI, L.; COWLS, J. A Unified Framework of Five Principles for AI in Society. Harvard Data Science Review, v. 1, n. 1, 2019." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Metodologia de Trabalho: Pesquisa-AÃ§Ã£o e Ciclos de Melhoria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h5 className="font-bold text-gray-900 mb-3">Pesquisa-AÃ§Ã£o</h5>
              <p className="text-sm text-gray-700">Co-criamos soluÃ§Ãµes com escolas em ciclos iterativos: diagnÃ³stico participativo â†’ prototipagem pedagÃ³gica â†’ experimentaÃ§Ã£o em sala â†’ avaliaÃ§Ã£o formativa â†’ ajustes. Educadores sÃ£o co-autores.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h5 className="font-bold text-gray-900 mb-3">Ciclos PDCA/DBR</h5>
              <p className="text-sm text-gray-700">Usamos PDCA (Plan-Do-Check-Act) e <em>Design-Based Research</em>: hipÃ³teses pedagÃ³gicas testadas em contextos reais, documentando mecanismos, condiÃ§Ãµes e resultados.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Teoria de MudanÃ§a e Indicadores de Impacto</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">Conectamos atividades a resultados por meio de uma teoria de mudanÃ§a centrada na escola: formaÃ§Ã£o + ferramentas inclusivas â†’ prÃ¡ticas diferenciadas e clima acolhedor â†’ engajamento e aprendizagem â†‘ â†’ permanÃªncia e equidade â†‘.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <StatBox value="+15%" label="Aumento mÃ©dio no engajamento em sala" source="RelatÃ³rios trimestrais" />
            <StatBox value="-20%" label="Queda de ocorrÃªncias disciplinares" source="Registro escolar" />
            <StatBox value="> 80%" label="Docentes usando DUA semanalmente" source="Monitoramento pedagÃ³gico" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">GovernanÃ§a e Ã‰tica</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h5 className="font-bold text-gray-900 mb-3">ComitÃª de Ã‰tica e Equidade</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Define diretrizes de IA responsÃ¡vel e equidade.</li>
                <li>â€¢ Aprova estudos e supervisiona auditorias.</li>
                <li>â€¢ Garante participaÃ§Ã£o de estudantes e famÃ­lias.</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h5 className="font-bold text-gray-900 mb-3">TransparÃªncia</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Trilhas de auditoria e relatÃ³rios pÃºblicos de impacto.</li>
                <li>â€¢ PolÃ­ticas claras de consentimento e privacidade (LGPD).</li>
                <li>â€¢ Explicabilidade pedagÃ³gica para recomendaÃ§Ãµes de IA.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Equipe Multidisciplinar</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">Pedagogia</h5>
              <p className="text-sm text-gray-700">Especialistas em educaÃ§Ã£o inclusiva, DUA, avaliaÃ§Ã£o formativa e gestÃ£o de sala.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">Psicologia</h5>
              <p className="text-sm text-gray-700">Desenvolvimento socioemocional, prÃ¡ticas informadas por trauma e apoio Ã  comunidade escolar.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">Tecnologia/IA</h5>
              <p className="text-sm text-gray-700">NLP, XAI, privacidade diferencial e engenharia de dados educacionais.</p>
            </div>
          </div>
        </section>
      </>
        }
        en={
      <>
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History and Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            <strong>Plataforma Solar</strong> emerges as an innovative and necessary response to the challenges of inclusive education in Brazil. Born from a strategic partnership between <strong>Instituto ALANA</strong> and the <strong>University of SÃ£o Paulo (USP)</strong>, our project combines academic rigor, social advocacy expertise, and an ethical commitment to educational transformation.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            The name â€œSolarâ€ conveys a deep pedagogical philosophy: each student is a unique star. Our mission is to create <em>learning constellations</em> where all suns shine together. Diversity is not a problem to solve; it is the essence of a healthy learning ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <StatBox value="1.3 million" label="Students with disabilities in Basic Education" source="INEP, 2023 School Census" />
            <StatBox value="91.3%" label="Enrollments in inclusive regular schools" source="INEP, 2023 School Census" />
            <StatBox value="6.1%" label="Teachers with 80h Special Education training" source="IRM Dashboard 2023" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Educational Philosophy: A Synthesis</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            From <strong>Paulo Freire</strong>, we take critical pedagogy and education as a practice of freedom. Education is never neutral; it either reproduces oppression or enables emancipation.
          </p>
          <QuoteBox quote="No one educates anyone else, no one educates themselves; people educate each other, mediated by the world." author="Paulo Freire" work="Pedagogy of the Oppressed" year={1970} />
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            From <strong>Lev Vygotsky</strong>, we highlight the <em>Zone of Proximal Development (ZPD)</em>: development is social and cultural; mediation expands what learners can do.
          </p>
          <AcademicReference text="VYGOTSKY, L. S. Mind in Society. Harvard University Press, 1978." />
          <p className="text-lg leading-relaxed text-gray-700 mb-6 mt-6">
            From <strong>Maria Teresa EglÃ©r Mantoan</strong>, we learn that schools must be structurally transformed to welcome diversity instead of forcing students to adapt to rigid systems.
          </p>
          <QuoteBox quote="Inclusion is not only for students with disabilities; it is for everyone to succeed in general education." author="Maria Teresa EglÃ©r Mantoan" work="School Inclusion" year={2003} />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Social Impact and Institutional Responsibility</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            The <strong>2023 School Census</strong> shows progress and challenges: about <strong>1.3 million</strong> students in Special Education and <strong>91.3%</strong> in inclusive regular classes. However, only <strong>6.1%</strong> of teachers have the 80-hour Special Education training â€” insufficient for the scale of the challenge.
          </p>
          <AcademicReference text="Instituto Rodrigo Mendes. Special Education Indicators Dashboard. 2023." />

          <div className="bg-white/50 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-blue-600">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Demographic and normative evidence</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Globally, about <strong>1.3 billion</strong> people (~<strong>16%</strong>) live with disability (WHO, 2022). In Brazil, <strong>IBGE PNS 2019</strong> estimated <strong>17.3 million</strong> people (8.4%). Our work is grounded in <strong>CRPD</strong> (Decree 6.949/2009) and the <strong>Brazilian Disability Act</strong> (LBI, 2015), and operationalizes <strong>UDL</strong> (CAST) and <strong>WCAG 2.2</strong>.
            </p>
            <div className="space-y-1">
              <AcademicReference text="WHO. Global report on health equity for persons with disabilities. 2022." />
              <AcademicReference text="IBGE. PNS 2019: 17.3 million (8.4%). Official release, 2021." />
              <AcademicReference text="BRASIL. Decree 6.949/2009 (CRPD)." />
              <AcademicReference text="BRASIL. Law 13.146/2015 (LBI)." />
              <AcademicReference text="CAST. UDL Guidelines (udlguidelines.cast.org)." />
              <AcademicReference text="W3C. WCAG 2.2 (w3.org/TR/WCAG22)." />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Technology in Service of Humanization</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            We use AI, NLP, and clustering not to dehumanize education, but to amplify dialogue, mediation, and co-construction of knowledge. Our AI augments, not replaces, educators.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            We follow <em>Responsible AI</em> principles: beneficence, non-maleficence, autonomy, justice, and explicability (Floridi & Cowls, 2019).
          </p>
          <AcademicReference text="FLORIDI, L.; COWLS, J. A Unified Framework of Five Principles for AI in Society. HDSR, 2019." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Methodology: Action Research and Improvement Cycles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h5 className="font-bold text-gray-900 mb-3">Action Research</h5>
              <p className="text-sm text-gray-700">Co-create with schools in cycles: participatory diagnosis â†’ pedagogical prototyping â†’ classroom trials â†’ formative evaluation â†’ adjustments.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h5 className="font-bold text-gray-900 mb-3">PDCA / Design-Based Research</h5>
              <p className="text-sm text-gray-700">We test pedagogical hypotheses in real contexts, documenting mechanisms, conditions, and results.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Theory of Change and Impact Indicators</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">Training + inclusive tools â†’ differentiated practices and welcoming climate â†’ engagement and learning â†‘ â†’ retention and equity â†‘.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <StatBox value="+15%" label="Average increase in classroom engagement" source="Quarterly reports" />
            <StatBox value="-20%" label="Drop in disciplinary incidents" source="School records" />
            <StatBox value="> 80%" label="Teachers using UDL weekly" source="Pedagogical monitoring" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Governance and Ethics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h5 className="font-bold text-gray-900 mb-3">Ethics & Equity Committee</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Defines Responsible AI and equity guidelines.</li>
                <li>Approves studies and supervises audits.</li>
                <li>Ensures participation of students and families.</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h5 className="font-bold text-gray-900 mb-3">Transparency</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Audit trails and public impact reports.</li>
                <li>Clear LGPD consent and privacy policies.</li>
                <li>Pedagogical explainability for AI recommendations.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Multidisciplinary Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">Pedagogy</h5>
              <p className="text-sm text-gray-700">Inclusive education, UDL, formative assessment, classroom management.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">Psychology</h5>
              <p className="text-sm text-gray-700">Socioemotional development, trauma-informed practices, community support.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">Technology/AI</h5>
              <p className="text-sm text-gray-700">NLP, XAI, differential privacy, educational data engineering.</p>
            </div>
          </div>
        </section>
      </>
        }
      />
    )
  },
  
  'missao-legal': {
    title: 'MissÃ£o Legal e Moral',
    subtitle: 'Ã‰tica, LegislaÃ§Ã£o e HistÃ³ria da InclusÃ£o no Brasil',
    gradient: 'from-amber-500 via-yellow-500 to-orange-400',
    content: (
      <Translatable
        pt={
        <>
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Fundamentos HistÃ³ricos e Constitucionais da EducaÃ§Ã£o Inclusiva no Brasil</h2>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg border-l-4 border-amber-600 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">SÃ­ntese normativa e implicaÃ§Ãµes prÃ¡ticas</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              A educaÃ§Ã£o inclusiva no Brasil ancora-se na CF/1988 (arts. 205208), na LDB/1996, na CRPD incorporada pelo Decreto 6.949/2009 e na LBI/2015. Isso implica escolarizaÃ§Ã£o em classes comuns com AEE complementar, acessibilidade e ajustes razoÃ¡veis, alÃ©m de desenho universal para aprendizagem. A Libras Ã© reconhecida (Lei 10.436/2002; Dec. 5.626/2005) e a acessibilidade Ã© regulada (Lei 10.098/2000; Dec. 5.296/2004). O STF (ADI 6590) suspendeu o Dec. 10.502/2020, reafirmando diretrizes inclusivas.
            </p>
            <ul className="list-disc pl-8 text-gray-700 space-y-2">
              <li><strong>UDL (CAST):</strong> mÃºltiplos meios de engajamento, representaÃ§Ã£o e aÃ§Ã£o/expressÃ£o.</li>
              <li><strong>WCAG 2.2:</strong> contraste, navegaÃ§Ã£o por teclado, foco visÃ­vel, textos alternativos e legendas.</li>
              <li><strong>GovernanÃ§a:</strong> LGPD, explicabilidade e mitigaÃ§Ã£o de vieses quando houver IA.</li>
            </ul>
          </div>
          <AcademicReference text="BRASIL. ConstituiÃ§Ã£o Federal de 1988 (arts. 205208)." />
          <AcademicReference text="BRASIL. Lei 9.394/1996 (LDB)." />
          <AcademicReference text="BRASIL. Decreto 6.949/2009 (CRPD)." />
          <AcademicReference text="BRASIL. Lei 13.146/2015 (LBI)." />
          <AcademicReference text="BRASIL. Lei 10.436/2002 (Libras) e Decreto 5.626/2005." />
          <AcademicReference text="BRASIL. Lei 10.098/2000 e Decreto 5.296/2004 (Acessibilidade)." />
          <AcademicReference text="STF. ADI 6590 3 suspensÃ£o do Decreto 10.502/2020." />
          <AcademicReference text="CAST. UDL Guidelines (udlguidelines.cast.org)." />
          <AcademicReference text="W3C. WCAG 2.2 (w3.org/TR/WCAG22)." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">PerÃ­odo Imperial e Primeiras RepÃºblicas (1822-1930): SegregaÃ§Ã£o Institucionalizada</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Durante o <strong>ImpÃ©rio Brasileiro (1822-1889)</strong>, pessoas com deficiÃªncia eram majoritariamente invisibilizadas socialmente ou confinadas em instituiÃ§Ãµes de caridade religiosa. As primeiras iniciativas educacionais especializadas surgem ainda no perÃ­odo imperial, mas com carÃ¡ter segregacionista:
          </p>

          <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
            <li><strong>1854:</strong> FundaÃ§Ã£o do <em>Imperial Instituto dos Meninos Cegos</em> (atual Instituto Benjamin Constant - IBC), por D. Pedro II, primeira instituiÃ§Ã£o especializada na AmÃ©rica Latina.</li>
            <li><strong>1857:</strong> CriaÃ§Ã£o do <em>Imperial Instituto dos Surdos-Mudos</em> (atual Instituto Nacional de EducaÃ§Ã£o de Surdos - INES), tambÃ©m no Rio de Janeiro.</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Embora pioneiras, essas instituiÃ§Ãµes operavam sob a lÃ³gica da <em>segregaÃ§Ã£o especializada</em>: atendiam parcelas Ã­nfimas da populaÃ§Ã£o com deficiÃªncia, concentravam-se na capital imperial, e nÃ£o questionavam a exclusÃ£o do ensino regular. O paradigma vigente era o <strong>modelo mÃ©dico da deficiÃªncia</strong>, que localiza o "problema" no indivÃ­duo, nÃ£o nas barreiras sociais.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Durante a <strong>Primeira RepÃºblica (1889-1930)</strong>, marcada por oligarquias agrÃ¡rias e exclusÃ£o polÃ­tica massiva, a educaÃ§Ã£o especial permaneceu marginal. Iniciativas isoladas de instituiÃ§Ãµes filantrÃ³picas criaram estabelecimentos para "anormais", "dÃ©beis mentais" e "excepcionais" â€“ terminologias que hoje reconhecemos como profundamente estigmatizantes, mas que refletiam a mentalidade eugenista da Ã©poca.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Era Vargas e RedemocratizaÃ§Ã£o (1930-1964): Primeiras LegislaÃ§Ãµes</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A <strong>ConstituiÃ§Ã£o de 1934</strong>, promulgada durante o governo provisÃ³rio de GetÃºlio Vargas, foi a primeira a mencionar, ainda que timidamente, responsabilidades estatais com educaÃ§Ã£o especial. Entretanto, a ditadura do Estado Novo (1937-1945) interrompeu avanÃ§os democrÃ¡ticos.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A <strong>Lei de Diretrizes e Bases da EducaÃ§Ã£o Nacional de 1961 (Lei 4.024/61)</strong>, primeira LDB do paÃ­s, dedica apenas dois artigos Ã  educaÃ§Ã£o de "excepcionais", recomendando integraÃ§Ã£o "no que for possÃ­vel" ao sistema geral de ensino. A formulaÃ§Ã£o condicional ("no que for possÃ­vel") escancarava a perspectiva de que a norma seria educaÃ§Ã£o segregada.
          </p>

          <AcademicReference text="BRASIL. Lei nÂº 4.024, de 20 de dezembro de 1961. Fixa as Diretrizes e Bases da EducaÃ§Ã£o Nacional. DiÃ¡rio Oficial da UniÃ£o, BrasÃ­lia, DF, 27 dez. 1961." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Ditadura Militar (1964-1985): ContradiÃ§Ãµes Institucionais</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Paradoxalmente, o regime militar autoritÃ¡rio promoveu certa institucionalizaÃ§Ã£o da educaÃ§Ã£o especial, ainda que sob lÃ³gica tecnocrÃ¡tica e segregacionista:
          </p>

          <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
            <li><strong>1973:</strong> CriaÃ§Ã£o do <em>Centro Nacional de EducaÃ§Ã£o Especial (CENESP)</em>, no Ã¢mbito do MEC, primeira estrutura federal especificamente dedicada ao tema.</li>
            <li><strong>Anos 1970-1980:</strong> ProliferaÃ§Ã£o de escolas especiais e classes especiais segregadas, muitas vezes operadas por organizaÃ§Ãµes filantrÃ³picas (APAEs, Pestalozzi).</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A <strong>Emenda Constitucional nÂº 1 de 1969</strong> (ConstituiÃ§Ã£o outorgada pela junta militar) e a <strong>Lei 5.692/71</strong> (reforma educacional da ditadura) mantiveram abordagem ambÃ­gua: reconheciam direito Ã  educaÃ§Ã£o, mas nÃ£o garantiam efetivamente inclusÃ£o no ensino regular.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">ConstituiÃ§Ã£o CidadÃ£ de 1988: Marco CivilizatÃ³rio</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A <strong>ConstituiÃ§Ã£o Federal de 1988</strong>, promulgada apÃ³s intensas lutas sociais pela redemocratizaÃ§Ã£o, representa ruptura civilizatÃ³ria. Pela primeira vez na histÃ³ria brasileira, educaÃ§Ã£o Ã© consagrada como <em>direito pÃºblico subjetivo</em>, universal e incondicional.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-lg my-8 border-l-4 border-blue-600">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Artigos Constitucionais Fundamentais:</h4>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-bold mb-2">Art. 205:</p>
                <p className="italic">"A educaÃ§Ã£o, direito de todos e dever do Estado e da famÃ­lia, serÃ¡ promovida e incentivada com a colaboraÃ§Ã£o da sociedade, visando ao pleno desenvolvimento da pessoa, seu preparo para o exercÃ­cio da cidadania e sua qualificaÃ§Ã£o para o trabalho."</p>
              </div>
              <div>
                <p className="font-bold mb-2">Art. 206, I:</p>
                <p className="italic">"O ensino serÃ¡ ministrado com base nos seguintes princÃ­pios: I - igualdade de condiÃ§Ãµes para o acesso e permanÃªncia na escola."</p>
              </div>
              <div>
                <p className="font-bold mb-2">Art. 208, III:</p>
                <p className="italic">"O dever do Estado com a educaÃ§Ã£o serÃ¡ efetivado mediante a garantia de: III - atendimento educacional especializado aos portadores de deficiÃªncia, preferencialmente na rede regular de ensino."</p>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            O advÃ©rbio "preferencialmente" no Art. 208, III, seria objeto de intensos debates jurÃ­dicos e embates polÃ­ticos nas dÃ©cadas seguintes. Progressistas interpretam-no como transitÃ³rio, atÃ© universalizaÃ§Ã£o da inclusÃ£o; conservadores, como permissÃ£o permanente para escolas segregadas.
          </p>

          <AcademicReference text="BRASIL. ConstituiÃ§Ã£o da RepÃºblica Federativa do Brasil de 1988. DiÃ¡rio Oficial da UniÃ£o, BrasÃ­lia, DF, 5 out. 1988." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">DÃ©cada de 1990: InfluÃªncias Internacionais e LegislaÃ§Ã£o Infraconstitucional</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A <strong>DeclaraÃ§Ã£o Mundial sobre EducaÃ§Ã£o para Todos</strong> (Jomtien, TailÃ¢ndia, 1990) e, especialmente, a <strong>DeclaraÃ§Ã£o de Salamanca</strong> (Espanha, 1994) â€“ da qual o Brasil Ã© signatÃ¡rio â€“ consolidam internacionalmente princÃ­pios de educaÃ§Ã£o inclusiva. Salamanca afirma que escolas regulares com orientaÃ§Ã£o inclusiva constituem "o meio mais eficaz de combater atitudes discriminatÃ³rias".
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A <strong>Lei de Diretrizes e Bases da EducaÃ§Ã£o Nacional de 1996 (Lei 9.394/96)</strong>, ainda vigente com modificaÃ§Ãµes, dedica CapÃ­tulo V Ã  EducaÃ§Ã£o Especial, definida como "modalidade de educaÃ§Ã£o escolar oferecida preferencialmente na rede regular de ensino". AvanÃ§os incluem garantia de currÃ­culos, mÃ©todos, tÃ©cnicas e recursos especÃ­ficos; formaÃ§Ã£o de professores especializados; e terminalidade especÃ­fica quando necessÃ¡rio.
          </p>

          <AcademicReference text="BRASIL. Lei nÂº 9.394, de 20 de dezembro de 1996. Estabelece as diretrizes e bases da educaÃ§Ã£o nacional. DiÃ¡rio Oficial da UniÃ£o, BrasÃ­lia, DF, 23 dez. 1996." />

          <p className="text-lg leading-relaxed text-gray-700 mb-6 mt-6">
            LegislaÃ§Ãµes complementares importantes do perÃ­odo:
          </p>

          <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
            <li><strong>Lei 10.098/2000:</strong> Estabelece normas gerais e critÃ©rios bÃ¡sicos para promoÃ§Ã£o da acessibilidade.</li>
            <li><strong>Lei 10.436/2002:</strong> Reconhece a LÃ­ngua Brasileira de Sinais (Libras) como meio legal de comunicaÃ§Ã£o e expressÃ£o.</li>
            <li><strong>Decreto 5.296/2004:</strong> Regulamenta leis de acessibilidade, estabelecendo prazos e responsabilidades.</li>
            <li><strong>Decreto 5.626/2005:</strong> Regulamenta Libras, tornando obrigatÃ³rio seu ensino em cursos de formaÃ§Ã£o de professores.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">SÃ©culo XXI: PolÃ­tica Nacional de EducaÃ§Ã£o Especial e Lei Brasileira de InclusÃ£o</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Em <strong>2008</strong>, o MEC publica a <em>PolÃ­tica Nacional de EducaÃ§Ã£o Especial na Perspectiva da EducaÃ§Ã£o Inclusiva</em>, documento orientador que marca mudanÃ§a paradigmÃ¡tica: da integraÃ§Ã£o Ã  inclusÃ£o. Enquanto integraÃ§Ã£o pressupÃµe adaptaÃ§Ã£o do estudante Ã  escola existente, inclusÃ£o exige transformaÃ§Ã£o da escola para acolher a diversidade.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            O <strong>Decreto 7.611/2011</strong> regulamenta o Atendimento Educacional Especializado (AEE), definindo-o como complementar ou suplementar (nunca substitutivo) Ã  escolarizaÃ§Ã£o regular. Estabelece diretrizes para financiamento e infraestrutura, com prioridade para matrÃ­cula no ensino regular.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A <strong>Lei Brasileira de InclusÃ£o da Pessoa com DeficiÃªncia (LBI - Lei 13.146/2015)</strong>, tambÃ©m conhecida como Estatuto da Pessoa com DeficiÃªncia, representa o marco legal mais avanÃ§ado. Baseada na ConvenÃ§Ã£o sobre os Direitos das Pessoas com DeficiÃªncia da ONU (ratificada pelo Brasil com status de emenda constitucional em 2008), a LBI Ã© categÃ³rica:
          </p>

          <QuoteBox 
            quote="A educaÃ§Ã£o constitui direito da pessoa com deficiÃªncia, assegurados sistema educacional inclusivo em todos os nÃ­veis e aprendizado ao longo de toda a vida."
            author="Lei Brasileira de InclusÃ£o"
            work="Art. 27"
            year={2015}
          />

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Crucialmente, a LBI estabelece que recusar matrÃ­cula de pessoa com deficiÃªncia constitui <strong>crime</strong>, punÃ­vel com reclusÃ£o e multa. Esta criminalizaÃ§Ã£o marca inflexÃ£o: inclusÃ£o deixa de ser aspiraÃ§Ã£o Ã©tica ou recomendaÃ§Ã£o pedagÃ³gica para tornar-se obrigaÃ§Ã£o legal inescapÃ¡vel.
          </p>

          <AcademicReference text="BRASIL. Lei nÂº 13.146, de 6 de julho de 2015. Institui a Lei Brasileira de InclusÃ£o da Pessoa com DeficiÃªncia (Estatuto da Pessoa com DeficiÃªncia). DiÃ¡rio Oficial da UniÃ£o, BrasÃ­lia, DF, 7 jul. 2015." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">LGPD e ProteÃ§Ã£o de Dados na EducaÃ§Ã£o</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A <strong>Lei Geral de ProteÃ§Ã£o de Dados (LGPD - Lei 13.709/2018)</strong> inaugura novo regime jurÃ­dico sobre tratamento de dados pessoais. No contexto educacional inclusivo, suas implicaÃ§Ãµes sÃ£o particularmente sensÃ­veis. Dados sobre deficiÃªncias, necessidades especiais, condiÃ§Ãµes de saÃºde e desenvolvimento psicopedagÃ³gico sÃ£o <em>dados sensÃ­veis</em>, merecendo proteÃ§Ã£o reforÃ§ada.
          </p>

          <div className="bg-amber-50 p-6 rounded-lg my-6 border-l-4 border-amber-600">
            <h4 className="text-lg font-bold text-gray-900 mb-3">PrincÃ­pios da LGPD Aplicados Ã  EducaÃ§Ã£o Inclusiva:</h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>â€¢ Finalidade:</strong> Dados coletados apenas para fins pedagÃ³gicos legÃ­timos, nÃ£o para discriminaÃ§Ã£o ou estigmatizaÃ§Ã£o.</li>
              <li><strong>â€¢ Necessidade:</strong> MinimizaÃ§Ã£o da coleta â€“ apenas dados estritamente necessÃ¡rios.</li>
              <li><strong>â€¢ TransparÃªncia:</strong> Estudantes e famÃ­lias devem compreender como dados sÃ£o utilizados.</li>
              <li><strong>â€¢ SeguranÃ§a:</strong> Medidas tÃ©cnicas e administrativas contra vazamentos e acessos nÃ£o autorizados.</li>
              <li><strong>â€¢ NÃ£o discriminaÃ§Ã£o:</strong> VedaÃ§Ã£o absoluta ao uso de dados para prÃ¡ticas discriminatÃ³rias.</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            O Plataforma Solar implementa rigorosamente a LGPD: consentimento parental explÃ­cito para menores, anonimizaÃ§Ã£o de dados em anÃ¡lises agregadas, criptografia ponta-a-ponta, auditorias periÃ³dicas, direito ao esquecimento e portabilidade.
          </p>

          <AcademicReference text="BRASIL. Lei nÂº 13.709, de 14 de agosto de 2018. Lei Geral de ProteÃ§Ã£o de Dados Pessoais (LGPD). DiÃ¡rio Oficial da UniÃ£o, BrasÃ­lia, DF, 15 ago. 2018." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">DimensÃ£o Ã‰tica: Para AlÃ©m da Legalidade</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Paulo Freire nos ensina que Ã©tica nÃ£o Ã© abstraÃ§Ã£o filosÃ³fica, mas exigÃªncia concreta da condiÃ§Ã£o humana. Em <em>Pedagogia da Autonomia</em> (1996), Freire articula o que denomina "Ã©tica universal do ser humano" â€“ consciÃªncia de nosso inacabamento, abertura radical ao Outro, responsabilidade com transformaÃ§Ã£o social.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            EducaÃ§Ã£o inclusiva, nesta perspectiva freiriana, transcende cumprimento de leis ou adoÃ§Ã£o de metodologias especÃ­ficas. Ã‰ <strong>imperativo Ã©tico</strong> fundado no reconhecimento da dignidade inalienÃ¡vel de todo ser humano, independentemente de suas caracterÃ­sticas cognitivas, fÃ­sicas, sensoriais, comportamentais ou identitÃ¡rias.
          </p>

          <QuoteBox 
            quote="A Ã©tica de que falo Ã© a que se sabe afrontada na manifestaÃ§Ã£o discriminatÃ³ria de raÃ§a, de gÃªnero, de classe. Ã‰ por esta Ã©tica inseparÃ¡vel da prÃ¡tica educativa, nÃ£o importa se trabalhamos com crianÃ§as, jovens ou com adultos, que devemos lutar."
            author="Paulo Freire"
            work="Pedagogia da Autonomia"
            year={1996}
          />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Responsabilidade Primordial das Escolas: Um Chamado Ã  AÃ§Ã£o</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Ã‰ fundamental afirmar, sem ambiguidades: <strong>a responsabilidade de criar ambientes escolares inclusivos nÃ£o Ã© opcional, nÃ£o Ã© secundÃ¡ria, nÃ£o Ã© condicional</strong>. Ã‰ obrigaÃ§Ã£o constitucional, legal, Ã©tica e pedagÃ³gica de toda instituiÃ§Ã£o educacional brasileira.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Escolas devem ser inclusivas para TODOS, abarcando toda diversidade humana:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h5 className="font-bold text-gray-900 mb-3">Diversidade Funcional</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ DeficiÃªncias fÃ­sicas e motoras</li>
                <li>â€¢ DeficiÃªncias intelectuais</li>
                <li>â€¢ DeficiÃªncias sensoriais (visuais, auditivas)</li>
                <li>â€¢ DeficiÃªncias mÃºltiplas</li>
                <li>â€¢ Transtornos do espectro autista</li>
                <li>â€¢ TDAH e dislexia</li>
                <li>â€¢ Altas habilidades/superdotaÃ§Ã£o</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h5 className="font-bold text-gray-900 mb-3">Diversidade Social e Cultural</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Todas as raÃ§as, etnias e cores</li>
                <li>â€¢ Todas as religiÃµes ou ausÃªncia delas</li>
                <li>â€¢ Todas as classes sociais</li>
                <li>â€¢ LGBTQIA+ e todas orientaÃ§Ãµes</li>
                <li>â€¢ Imigrantes e refugiados</li>
                <li>â€¢ Povos indÃ­genas e quilombolas</li>
                <li>â€¢ Comunidades tradicionais</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h5 className="font-bold text-gray-900 mb-3">Diversidade de SaÃºde</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ DoenÃ§as crÃ´nicas (diabetes, epilepsia, etc.)</li>
                <li>â€¢ CondiÃ§Ãµes de saÃºde mental</li>
                <li>â€¢ Ansiedade e depressÃ£o</li>
                <li>â€¢ Transtornos alimentares</li>
                <li>â€¢ Uso de medicaÃ§Ãµes</li>
                <li>â€¢ Necessidades mÃ©dicas especiais</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
              <h5 className="font-bold text-gray-900 mb-3">Diversidade Comportamental</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Diferentes estilos de aprendizagem</li>
                <li>â€¢ QuestÃµes comportamentais</li>
                <li>â€¢ Trauma e adversidade</li>
                <li>â€¢ SituaÃ§Ã£o de vulnerabilidade</li>
                <li>â€¢ Conflitos familiares</li>
                <li>â€¢ Diferentes ritmos de desenvolvimento</li>
              </ul>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 mb-6 mt-8">
            Nenhuma dessas caracterÃ­sticas justifica exclusÃ£o, segregaÃ§Ã£o ou tratamento discriminatÃ³rio. Pelo contrÃ¡rio: cada uma enriquece o ambiente escolar, oferecendo oportunidades para aprendizados sobre empatia, respeito, colaboraÃ§Ã£o e valorizaÃ§Ã£o da diferenÃ§a.
          </p>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 rounded-r-lg my-8">
            <h4 className="text-xl font-bold text-red-900 dark:text-red-400 mb-3">âš ï¸ Lembrete Crucial:</h4>
            <p className="text-gray-800 leading-relaxed">
              <strong>A recusa em matricular, a segregaÃ§Ã£o injustificada, a criaÃ§Ã£o de barreiras ao aprendizado e a discriminaÃ§Ã£o de qualquer natureza no ambiente escolar nÃ£o sÃ£o apenas antiÃ©ticas ou pedagogicamente inadequadas â€“ sÃ£o ILEGAIS</strong>, passÃ­veis de sanÃ§Ãµes administrativas, cÃ­veis e, em casos graves, penais. A legislaÃ§Ã£o brasileira protege integralmente os direitos educacionais de todas as crianÃ§as e adolescentes.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">JurisprudÃªncia Aplicada Ã  Escola</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">Tribunais brasileiros tÃªm reiterado que escolas regulares devem garantir educaÃ§Ã£o inclusiva, com adaptaÃ§Ãµes razoÃ¡veis e AEE complementar. A recusa de matrÃ­cula e a ausÃªncia de suporte adequado geram condenaÃ§Ãµes por danos morais e obrigaÃ§Ã£o de fazer.</p>
          <AcademicReference text="BRASIL. Superior Tribunal de JustiÃ§a. Dever de inclusÃ£o e fornecimento de profissional de apoio escolar. JurisprudÃªncia consolidada." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Checklist de Conformidade (Operacional)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h5 className="font-bold text-gray-900 mb-3">LBI (Lei 13.146/2015)</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ MatrÃ­cula sem discriminaÃ§Ã£o (Art. 27-28).</li>
                <li>â€¢ AcomodaÃ§Ãµes razoÃ¡veis e recursos de acessibilidade.</li>
                <li>â€¢ Profissional de apoio escolar quando necessÃ¡rio.</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h5 className="font-bold text-gray-900 mb-3">Decreto 7.611/2011</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ AEE complementar/suplementar Ã  escolarizaÃ§Ã£o.</li>
                <li>â€¢ Prioridade Ã  rede regular; transporte/acessibilidade.</li>
                <li>â€¢ Registro das aÃ§Ãµes de AEE no PEI do estudante.</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h5 className="font-bold text-gray-900 mb-3">LGPD (Lei 13.709/2018)</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Base legal adequada e consentimento quando exigido.</li>
                <li>â€¢ MinimizaÃ§Ã£o e seguranÃ§a de dados sensÃ­veis.</li>
                <li>â€¢ TransparÃªncia e direitos de acesso/retificaÃ§Ã£o.</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h5 className="font-bold text-gray-900 mb-3">Acessibilidade (NBR 9050)</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Rotas acessÃ­veis, banheiros e mobiliÃ¡rio adaptado.</li>
                <li>â€¢ SinalizaÃ§Ã£o tÃ¡til/visual e acÃºstica.</li>
                <li>â€¢ Materiais didÃ¡ticos acessÃ­veis (Braille, Libras, TTS).</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Protocolos PrÃ¡ticos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">MatrÃ­cula e Acolhimento</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Sem restriÃ§Ãµes ou condicionantes ilegais.</li>
                <li>â€¢ Entrevista de acolhimento centrada na famÃ­lia/estudante.</li>
                <li>â€¢ InÃ­cio do PEI com metas, apoios e responsÃ¡veis.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">AEE e Co-ensino</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ HorÃ¡rios definidos, registro das sessÃµes e objetivos.</li>
                <li>â€¢ Planejamento conjunto professor regente/especialista.</li>
                <li>â€¢ ComunicaÃ§Ã£o regular com famÃ­lia e equipe de saÃºde.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">AvaliaÃ§Ã£o e Acessibilidade</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Provas e tarefas com formatos alternativos.</li>
                <li>â€¢ Tempo adicional e leitor/intÃ©rprete quando necessÃ¡rio.</li>
                <li>â€¢ Rubricas acessÃ­veis e feedback descritivo.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">ConvivÃªncia e ProteÃ§Ã£o</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ PolÃ­ticas anti-bullying e canais confidenciais.</li>
                <li>â€¢ PrÃ¡ticas restaurativas antes de medidas punitivas.</li>
                <li>â€¢ Plano de seguranÃ§a e resposta a crises.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Fluxo de Resposta a Incidentes</h3>
          <div className="bg-orange-50 p-6 rounded-lg my-6 border-l-4 border-orange-600">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Passos</h4>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Registro detalhado do fato (data, local, envolvidos, evidÃªncias).</li>
              <li>ComunicaÃ§Ã£o Ã  coordenaÃ§Ã£o e proteÃ§Ã£o Ã  vÃ­tima (medidas imediatas).</li>
              <li>AnÃ¡lise de risco e acionamento de responsÃ¡veis/Ã³rgÃ£os quando necessÃ¡rio.</li>
              <li>Plano de reparaÃ§Ã£o (prÃ¡tica restaurativa) e acompanhamento.</li>
              <li>RevisÃ£o de polÃ­ticas e formaÃ§Ã£o continuada da equipe.</li>
            </ol>
          </div>
        </section>
      </>
        }
        en={
      <>
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Historical and Legal Mission: Ethics, Law and Inclusion in Brazil</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">Inclusive education in Brazil rests on constitutional guarantees (1988), the LDB (1996), international commitments (Jomtien, Salamanca), the Disability Act (LBI, 2015) and LGPD (2018). Schools have a legal and ethical duty to include all students with reasonable accommodations and specialized support (AEE).</p>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 rounded-r-lg my-8">
            <h4 className="text-xl font-bold text-red-900 dark:text-red-400 mb-3">Important Reminder</h4>
            <p className="text-gray-800 leading-relaxed"><strong>Refusing enrollment, unjustified segregation, creating barriers to learning, or discrimination are ILLEGAL</strong>, subject to administrative, civil, and even criminal sanctions.</p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Applied Case Law</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">Courts require inclusive schooling with accommodations and support staff when necessary. Refusal leads to damages and injunctions.</p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Operational Compliance Checklist</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h5 className="font-bold text-gray-900 mb-3">LBI (Law 13.146/2015)</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Non-discriminatory enrollment.</li>
                <li>Reasonable accommodations and accessibility resources.</li>
                <li>Support professional when needed.</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h5 className="font-bold text-gray-900 mb-3">Decree 7.611/2011</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Complementary/supplementary AEE to regular schooling.</li>
                <li>Priority for the regular network; transportation/accessibility.</li>
                <li>Record AEE actions in the studentâ€™s IEP/PEI.</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h5 className="font-bold text-gray-900 mb-3">LGPD (Law 13.709/2018)</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Legal basis and consent when required.</li>
                <li>Data minimization and security for sensitive data.</li>
                <li>Transparency and data subject rights.</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h5 className="font-bold text-gray-900 mb-3">Accessibility (NBR 9050)</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Accessible routes and restrooms; adapted furniture.</li>
                <li>Tactile/visual signage; accessible didactic materials.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Practical Protocols</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">Enrollment & Welcoming</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>No illegal restrictions; welcoming interview; start the IEP/PEI with goals and supports.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">AEE & Co-teaching</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Defined schedules; session records/objectives; joint planning; family communication.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">Assessment & Accessibility</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Alternative formats; extra time; interpreters; accessible rubrics; descriptive feedback.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">Climate & Protection</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Anti-bullying policies; confidential channels; restorative practices; crisis response.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Incident Response Flow</h3>
          <div className="bg-orange-50 p-6 rounded-lg my-6 border-l-4 border-orange-600">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Steps</h4>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Detailed record; immediate protection; risk analysis; notifications; restorative plan; policy review.</li>
            </ol>
          </div>
        </section>
      </>
        }
      />
    )
  },

  'educacao-inclusiva': {
    title: 'EducaÃ§Ã£o Inclusiva Para Todos',
    subtitle: 'Fundamentos TeÃ³ricos, EvidÃªncias CientÃ­ficas e PrÃ¡ticas Transformadoras',
    gradient: 'from-amber-500 via-yellow-500 to-orange-400',
    content: (
      <Translatable
        pt={
      <>
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">EducaÃ§Ã£o Inclusiva: Conceitos, Paradigmas e TransformaÃ§Ã£o Social</h2>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A educaÃ§Ã£o inclusiva representa uma das mais profundas revoluÃ§Ãµes pedagÃ³gicas das Ãºltimas dÃ©cadas. Mais do que um conjunto de tÃ©cnicas ou adaptaÃ§Ãµes metodolÃ³gicas, a inclusÃ£o constitui uma mudanÃ§a paradigmÃ¡tica na compreensÃ£o da prÃ³pria natureza da educaÃ§Ã£o, do papel da escola e do significado da diversidade humana. Enquanto o modelo segregacionista via a diferenÃ§a como desvio a ser corrigido ou isolado, e o modelo integracionista propunha adaptar o estudante Ã  escola existente, o <strong>modelo inclusivo</strong> exige transformar radicalmente a escola para que ela acolha, celebre e aprenda com a diversidade.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Lev Vygotsky e a Teoria Sociocultural do Desenvolvimento</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            O psicÃ³logo bielorrusso <strong>Lev Semyonovich Vygotsky</strong> (1896-1934), embora tenha vivido apenas 37 anos, legou contribuiÃ§Ãµes seminais para a compreensÃ£o do desenvolvimento humano. Contrariando as teorias inatistas (que localizam desenvolvimento em estruturas biolÃ³gicas prÃ©-programadas) e comportamentalistas (que reduzem aprendizagem a condicionamento estÃ­mulo-resposta), Vygotsky propÃµe uma <em>teoria sociocultural</em>: o desenvolvimento humano Ã©, fundamentalmente, um processo de apropriaÃ§Ã£o da cultura mediado pela linguagem e pelas relaÃ§Ãµes sociais.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6 border-l-4 border-blue-600">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Conceito-Chave: Zona de Desenvolvimento Proximal (ZDP)</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              A ZDP Ã© definida como a distÃ¢ncia entre o <strong>nÃ­vel de desenvolvimento real</strong> (o que o estudante consegue realizar autonomamente) e o <strong>nÃ­vel de desenvolvimento potencial</strong> (o que pode alcanÃ§ar com mediaÃ§Ã£o de um adulto ou par mais experiente).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Esta concepÃ§Ã£o Ã© revolucionÃ¡ria para a educaÃ§Ã£o inclusiva: sugere que <strong>todos os estudantes</strong>, independentemente de suas caracterÃ­sticas, possuem potencial de desenvolvimento que pode ser expandido atravÃ©s de mediaÃ§Ãµes pedagÃ³gicas adequadas. NÃ£o hÃ¡ limites fixos predeterminados; hÃ¡, sim, contextos sociais mais ou menos facilitadores.
            </p>
          </div>

          <QuoteBox 
            quote="Ã‰ a distÃ¢ncia entre o nÃ­vel de desenvolvimento real, que se costuma determinar atravÃ©s da soluÃ§Ã£o independente de problemas, e o nÃ­vel de desenvolvimento potencial, determinado atravÃ©s da soluÃ§Ã£o de problemas sob a orientaÃ§Ã£o de um adulto ou em colaboraÃ§Ã£o com companheiros mais capazes."
            author="Lev Vygotsky"
            work="A FormaÃ§Ã£o Social da Mente"
            year={1984}
          />

          <p className="text-lg leading-relaxed text-gray-700 mb-6 mt-6">
            Vygotsky tambÃ©m desenvolveu o conceito de <strong>compensaÃ§Ã£o</strong>. Argumentava que, embora uma deficiÃªncia possa limitar certas funÃ§Ãµes, o desenvolvimento de outras habilidades pode compensar essas limitaÃ§Ãµes. NÃ£o se trata de simplesmente substituir uma funÃ§Ã£o por outra, mas de criar <em>novas formas de funcionamento psicolÃ³gico</em> que permitam superar dificuldades. Esta visÃ£o Ã© profundamente otimista: reconhece limitaÃ§Ãµes sem determinismo, enfatiza plasticidade e potencial.
          </p>

          <AcademicReference text="VYGOTSKY, L.S. A FormaÃ§Ã£o Social da Mente: o desenvolvimento dos processos psicolÃ³gicos superiores. SÃ£o Paulo: Martins Fontes, 1984." />
          <AcademicReference text="VYGOTSKY, L.S. Fundamentos de Defectologia: Obras Completas Tomo V. Havana: Editorial Pueblo y EducaciÃ³n, 1997." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Paulo Freire e a Pedagogia da LibertaÃ§Ã£o</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            <strong>Paulo Reglus Neves Freire</strong> (1921-1997), pernambucano, educador, filÃ³sofo e um dos pensadores mais influentes da histÃ³ria da pedagogia mundial, desenvolveu uma teoria educacional profundamente humanista e polÃ­tica. Freire nos ensina que educaÃ§Ã£o nunca Ã© neutra: ou reproduz estruturas de opressÃ£o ou capacita para emancipaÃ§Ã£o.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Em <em>Pedagogia do Oprimido</em> (1970), Freire critica o que denomina <strong>educaÃ§Ã£o bancÃ¡ria</strong>: modelo tradicional no qual o professor "deposita" conhecimentos em estudantes passivos, como se fossem cofres vazios a serem preenchidos. Esta pedagogia domestica, silencia, desumaniza. Em contraposiÃ§Ã£o, propÃµe a <strong>educaÃ§Ã£o problematizadora</strong>: processo dialÃ³gico, horizontal, onde educadores e educandos se educam mutuamente, mediatizados pelo mundo.
          </p>

          <QuoteBox 
            quote="NinguÃ©m educa ninguÃ©m, ninguÃ©m educa a si mesmo, os homens se educam entre si, mediatizados pelo mundo."
            author="Paulo Freire"
            work="Pedagogia do Oprimido"
            year={1970}
          />

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A educaÃ§Ã£o inclusiva, na perspectiva freiriana, nÃ£o pode se limitar Ã  inserÃ§Ã£o fÃ­sica de estudantes com deficiÃªncia em salas regulares. Exige transformaÃ§Ãµes estruturais, metodolÃ³gicas e epistemolÃ³gicas que garantam participaÃ§Ã£o efetiva, protagonismo e construÃ§Ã£o coletiva de conhecimento. Em <em>Pedagogia da Autonomia</em> (1996), Freire articula uma <strong>Ã©tica universal do ser humano</strong>, fundada no reconhecimento de nossa condiÃ§Ã£o de seres inacabados, abertos ao Outro, responsÃ¡veis pela transformaÃ§Ã£o social.
          </p>

          <AcademicReference text="FREIRE, P. Pedagogia do Oprimido. Rio de Janeiro: Paz e Terra, 1970." />
          <AcademicReference text="FREIRE, P. Pedagogia da Autonomia: saberes necessÃ¡rios Ã  prÃ¡tica educativa. SÃ£o Paulo: Paz e Terra, 1996." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Maria Teresa EglÃ©r Mantoan: InclusÃ£o Radical no Contexto Brasileiro</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            <strong>Maria Teresa EglÃ©r Mantoan</strong>, professora da Faculdade de EducaÃ§Ã£o da Unicamp e uma das maiores referÃªncias nacionais em educaÃ§Ã£o inclusiva, defende uma concepÃ§Ã£o <em>radical</em> de inclusÃ£o: nÃ£o se trata de adaptar alguns estudantes a um sistema escolar rÃ­gido e excludente, mas de reconstruir fundamentalmente este sistema para que acolha, de fato, a diversidade humana.
          </p>

          <QuoteBox 
            quote="A inclusÃ£o nÃ£o atinge apenas alunos com deficiÃªncia e os que apresentam dificuldades de aprender, mas todos os demais, para que obtenham sucesso na corrente educativa geral. Os alunos com deficiÃªncia constituem uma grande preocupaÃ§Ã£o para os educadores inclusivos."
            author="Maria Teresa EglÃ©r Mantoan"
            work="InclusÃ£o Escolar: O que Ã©? Por quÃª? Como fazer?"
            year={2003}
          />

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Mantoan argumenta que o problema nÃ£o estÃ¡ nos estudantes, mas nas escolas que se organizaram historicamente para homogeneidade inexistente. A diversidade nÃ£o Ã© exceÃ§Ã£o; Ã© a regra. Cada ser humano Ã© Ãºnico. Escolas que sÃ³ conseguem ensinar quando todos aprendem da mesma forma, no mesmo ritmo, com os mesmos mÃ©todos, sÃ£o escolas que fracassam na sua missÃ£o educativa fundamental.
          </p>

          <div className="bg-amber-50 p-6 rounded-lg my-6 border-l-4 border-amber-600">
            <h4 className="text-xl font-bold text-gray-900 mb-3">PrincÃ­pios da EducaÃ§Ã£o Inclusiva segundo Mantoan:</h4>
            <ul className="space-y-3 text-gray-700">
              <li><strong>1. Reconhecimento da diversidade:</strong> Todos sÃ£o diferentes, esta Ã© a condiÃ§Ã£o humana normal.</li>
              <li><strong>2. Igualdade de direitos:</strong> Todos tÃªm direito Ã  educaÃ§Ã£o de qualidade em escolas regulares.</li>
              <li><strong>3. EquiparaÃ§Ã£o de oportunidades:</strong> NÃ£o uniformizaÃ§Ã£o, mas garantia de condiÃ§Ãµes para que cada um desenvolva seu potencial.</li>
              <li><strong>4. Escola para todos:</strong> NÃ£o "escola especial" e "escola regular", mas uma Ãºnica escola que acolhe a todos.</li>
              <li><strong>5. MudanÃ§a de paradigma:</strong> NÃ£o adaptar o estudante Ã  escola, mas transformar a escola.</li>
            </ul>
          </div>

          <AcademicReference text="MANTOAN, M.T.E. InclusÃ£o Escolar: O que Ã©? Por quÃª? Como fazer? SÃ£o Paulo: Moderna, 2003." />
          <AcademicReference text="MANTOAN, M.T.E. O Desafio das DiferenÃ§as nas Escolas. PetrÃ³polis: Vozes, 2008." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">EvidÃªncias CientÃ­ficas: O Impacto da InclusÃ£o</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A educaÃ§Ã£o inclusiva nÃ£o Ã© apenas imperativo Ã©tico e legal â€“ Ã© tambÃ©m a abordagem mais eficaz pedagogicamente, conforme demonstram dÃ©cadas de pesquisas internacionais. Estudos robustos indicam benefÃ­cios para estudantes com e sem deficiÃªncia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h5 className="font-bold text-gray-900 mb-3">BenefÃ­cios para Estudantes COM DeficiÃªncia:</h5>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>â€¢ <strong>Maior desempenho acadÃªmico</strong> comparado a ambientes segregados</li>
                <li>â€¢ <strong>Desenvolvimento de habilidades sociais</strong> por interaÃ§Ã£o com pares</li>
                <li>â€¢ <strong>Melhora na autoestima e autoconceito</strong></li>
                <li>â€¢ <strong>PreparaÃ§Ã£o para vida adulta inclusiva</strong></li>
                <li>â€¢ <strong>ReduÃ§Ã£o de estigma e discriminaÃ§Ã£o</strong></li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h5 className="font-bold text-gray-900 mb-3">BenefÃ­cios para Estudantes SEM DeficiÃªncia:</h5>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>â€¢ <strong>Desenvolvimento de empatia</strong> e competÃªncias socioemocionais</li>
                <li>â€¢ <strong>ValorizaÃ§Ã£o da diversidade</strong> e respeito Ã s diferenÃ§as</li>
                <li>â€¢ <strong>PreparaÃ§Ã£o para sociedade diversa</strong></li>
                <li>â€¢ <strong>Sem prejuÃ­zo no desempenho acadÃªmico</strong> (estudos mostram equivalÃªncia ou ganhos)</li>
                <li>â€¢ <strong>BenefÃ­cio de metodologias diversificadas</strong></li>
              </ul>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            <strong>Cole et al. (2004)</strong>, em meta-anÃ¡lise publicada na revista <em>Mental Retardation</em>, analisaram 36 estudos comparando resultados de estudantes em ambientes inclusivos versus segregados. Encontraram que estudantes com deficiÃªncia intelectual em classes inclusivas apresentaram ganhos acadÃªmicos e sociais significativamente superiores, sem impactos negativos para colegas sem deficiÃªncia.
          </p>

          <AcademicReference text="COLE, C.M.; WALDRON, N.; MAJD, M. Academic Progress of Students Across Inclusive and Traditional Settings. Mental Retardation, v. 42, n. 2, p. 136-144, 2004." />

          <p className="text-lg leading-relaxed text-gray-700 mb-6 mt-6">
            <strong>Kalambouka et al. (2007)</strong>, em revisÃ£o sistemÃ¡tica publicada no <em>Educational Research</em>, examinaram 26 estudos sobre efeitos da inclusÃ£o no desempenho de estudantes sem deficiÃªncia. ConclusÃ£o: <strong>81% dos estudos mostraram efeitos positivos ou neutros</strong>; apenas 19% indicaram possÃ­veis efeitos negativos (geralmente relacionados a implementaÃ§Ãµes inadequadas, nÃ£o ao princÃ­pio inclusivo).
          </p>

          <AcademicReference text="KALAMBOUKA, A. et al. The impact of placing pupils with special educational needs in mainstream schools on the achievement of their peers. Educational Research, v. 49, n. 4, p. 365-382, 2007." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Desenho Universal para Aprendizagem (DUA)</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            O <strong>Universal Design for Learning (UDL)</strong>, desenvolvido pelo CAST (Center for Applied Special Technology), propÃµe estrutura pedagÃ³gica baseada em neurociÃªncias cognitivas para maximizar oportunidades de aprendizagem para todos os estudantes. Ao invÃ©s de adaptar currÃ­culos individualmente (abordagem custosa e estigmatizante), o DUA advoga por <em>desenho flexÃ­vel desde o inÃ­cio</em>.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6 border-l-4 border-blue-600">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Os TrÃªs PrincÃ­pios do DUA:</h4>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-bold mb-1">1. MÃºltiplos Meios de RepresentaÃ§Ã£o (o "O QUÃŠ" do aprendizado)</p>
                <p className="text-sm">InformaÃ§Ãµes apresentadas em diversos formatos: textos, Ã¡udios, vÃ­deos, grÃ¡ficos, manipulÃ¡veis. Contempla diferentes estilos perceptivos.</p>
              </div>
              <div>
                <p className="font-bold mb-1">2. MÃºltiplos Meios de AÃ§Ã£o e ExpressÃ£o (o "COMO" do aprendizado)</p>
                <p className="text-sm">Estudantes demonstram conhecimento de variadas formas: escrita, oral, artÃ­stica, digital, prÃ¡tica. Respeita diferentes habilidades motoras e expressivas.</p>
              </div>
              <div>
                <p className="font-bold mb-1">3. MÃºltiplos Meios de Engajamento (o "POR QUÃŠ" do aprendizado)</p>
                <p className="text-sm">EstratÃ©gias para motivar: opÃ§Ãµes de escolha, relevÃ¢ncia cultural, desafios ajustÃ¡veis. Reconhece que estudantes se engajam por razÃµes diversas.</p>
              </div>
            </div>
          </div>

          <AcademicReference text="CAST. Universal Design for Learning Guidelines version 2.0. Wakefield, MA: Author, 2011. DisponÃ­vel em: http://www.udlcenter.org/aboutudl/udlguidelines" />

          <p className="text-lg leading-relaxed text-gray-700 mb-6 mt-6">
            O Plataforma Solar implementa DUA em todas as sugestÃµes pedagÃ³gicas. Nossa IA analisa atividades propostas verificando se contemplam mÃºltiplas formas de representaÃ§Ã£o, expressÃ£o e engajamento. Educadores recebem feedback sobre como diversificar abordagens.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">DUA na PrÃ¡tica: Exemplos por Disciplina</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h5 className="font-bold text-gray-900 mb-3">Linguagens</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ RepresentaÃ§Ã£o: textos simplificados, audiobooks, mapas conceituais.</li>
                <li>â€¢ AÃ§Ã£o/ExpressÃ£o: podcast, debate, resenha visual.</li>
                <li>â€¢ Engajamento: escolhas de obras por interesse.</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h5 className="font-bold text-gray-900 mb-3">MatemÃ¡tica</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ RepresentaÃ§Ã£o: manipulÃ¡veis, vÃ­deos curtos, problemas contextualizados.</li>
                <li>â€¢ AÃ§Ã£o/ExpressÃ£o: resoluÃ§Ã£o oral, modelagem com objetos, software.</li>
                <li>â€¢ Engajamento: gamificaÃ§Ã£o e nÃ­veis ajustÃ¡veis.</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h5 className="font-bold text-gray-900 mb-3">CiÃªncias</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ RepresentaÃ§Ã£o: infogrÃ¡ficos, simulaÃ§Ãµes, experimentos guiados.</li>
                <li>â€¢ AÃ§Ã£o/ExpressÃ£o: relatÃ³rio por Ã¡udio/vÃ­deo, protÃ³tipo, pÃ´ster.</li>
                <li>â€¢ Engajamento: investigaÃ§Ã£o por perguntas dos alunos.</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h5 className="font-bold text-gray-900 mb-3">Humanas</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ RepresentaÃ§Ã£o: linhas do tempo, fontes primÃ¡rias acessÃ­veis.</li>
                <li>â€¢ AÃ§Ã£o/ExpressÃ£o: dramatizaÃ§Ã£o, cartografia social, ensaio multimodal.</li>
                <li>â€¢ Engajamento: personas e dilemas Ã©ticos.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Co-ensino e MTSS/RTI</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">Adotamos co-ensino (par pedagÃ³gico) e suporte em camadas (<em>Multi-Tiered System of Supports</em>):</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">NÃ­vel 1 (Universal)</h5>
              <p className="text-sm text-gray-700">DUA para toda a turma, instruÃ§Ã£o explÃ­cita, normas co-construÃ­das e avaliaÃ§Ã£o formativa contÃ­nua.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">NÃ­vel 2 (Alvo)</h5>
              <p className="text-sm text-gray-700">Grupos pequenos, tutoria entre pares, reforÃ§o de habilidades especÃ­ficas com monitoramento quinzenal.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">NÃ­vel 3 (Intensivo)</h5>
              <p className="text-sm text-gray-700">Planos individualizados (PEI), co-ensino especializado, metas semanais e revisÃ£o multiprofissional.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">AvaliaÃ§Ã£o Formativa e Rubricas AcessÃ­veis</h3>
          <div className="bg-emerald-50 p-6 rounded-lg my-6 border-l-4 border-emerald-600">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Elementos</h4>
            <ul className="space-y-2 text-gray-700">
              <li>â€¢ CritÃ©rios claros por nÃ­vel de desempenho com exemplos.</li>
              <li>â€¢ AutoavaliaÃ§Ã£o e coavaliaÃ§Ã£o com linguagem simples.</li>
              <li>â€¢ Feedback descritivo com prÃ³ximos passos.</li>
              <li>â€¢ Alternativas de evidÃªncia (texto, Ã¡udio, vÃ­deo, artefato fÃ­sico).</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">GestÃ£o de Sala Inclusiva</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
              <h5 className="font-bold text-gray-900 mb-3">Rotinas e Sinais</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Agenda visual e timers.</li>
                <li>â€¢ Sinais silenciosos para transiÃ§Ãµes.</li>
                <li>â€¢ EspaÃ§o de regulaÃ§Ã£o com protocolos simples.</li>
              </ul>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-600">
              <h5 className="font-bold text-gray-900 mb-3">Materiais AcessÃ­veis</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ PDFs com leitura de tela e alt text.</li>
                <li>â€¢ Contrast ratio adequado e fontes legÃ­veis.</li>
                <li>â€¢ OpÃ§Ãµes de baixa tecnologia (pranchas, pictos) e alta tecnologia (TTS, CAA).</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Estudos de Caso (curtos)</h3>
          <div className="space-y-4">
            <div className="bg-white/50 p-4 rounded-lg border-l-4 border-blue-400">
              <p className="text-sm text-gray-700"><strong>MatemÃ¡tica 7Âº ano</strong>: estudante com TDAH melhora persistÃªncia com metas micro, pausas motoras e feedback imediato; desempenho em resoluÃ§Ã£o de problemas â†‘ 20% em 6 semanas.</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg border-l-4 border-green-400">
              <p className="text-sm text-gray-700"><strong>LÃ­ngua Portuguesa 5Âº ano</strong>: estudante com TEA participa de debate usando CAA e sinalizaÃ§Ã£o prÃ©via de turnos; autoeficÃ¡cia verbal â†‘ e interaÃ§Ãµes positivas â†‘.</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg border-l-4 border-amber-400">
              <p className="text-sm text-gray-700"><strong>CiÃªncias 9Âº ano</strong>: dupla de co-ensino implementa laboratÃ³rio com adaptaÃ§Ãµes tÃ¡teis e audiodescriÃ§Ã£o; participaÃ§Ã£o de estudante com baixa visÃ£o â†‘ 100% em atividades prÃ¡ticas.</p>
            </div>
          </div>
        </section>
      </>
        }
        en={
      <>
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Inclusive Education: Concepts, Paradigms, and Social Transformation</h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Inclusive education represents a paradigm shift: rather than adapting the student to the school (integration), schools must be transformed to welcome, celebrate, and learn from diversity. Inclusion is structural, pedagogical, and ethical.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Lev Vygotsky and Sociocultural Theory</h3>
          <div className="bg-blue-50 p-6 rounded-lg my-6 border-l-4 border-blue-600">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Key Concept: Zone of Proximal Development (ZPD)</h4>
            <p className="text-gray-700 leading-relaxed mb-3">ZPD is the distance between what a learner can do alone and what they can do with guidance. For inclusion, mediation expands potential for <strong>all</strong> learners.</p>
          </div>
          <QuoteBox quote="It is the distance between the actual developmental level as determined by independent problem solving and the level of potential development as determined through problem solving under adult guidance or in collaboration with more capable peers." author="Lev Vygotsky" work="Mind in Society" year={1978} />

          <p className="text-lg leading-relaxed text-gray-700 mb-6 mt-6">
            Vygotskyâ€™s notion of <strong>compensation</strong> highlights that development can reorganize functions to overcome limitations, emphasizing plasticity and potential.
          </p>
          <AcademicReference text="VYGOTSKY, L.S. Mind in Society. Harvard University Press, 1978." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Paulo Freire and Emancipatory Pedagogy</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">Freire contrasts "banking education" with dialogical problem-posing education. Inclusion requires structural, methodological, and epistemological changes that ensure participation, protagonism, and co-construction of knowledge.</p>
          <QuoteBox quote="No one educates anyone else... people educate each other, mediated by the world." author="Paulo Freire" work="Pedagogy of the Oppressed" year={1970} />
          <AcademicReference text="FREIRE, P. Pedagogy of the Oppressed. New York: Continuum, 1970." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">UDL in Practice (by subject)</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">We apply Universal Design for Learning to offer multiple means of engagement, representation, and action/expression across subjects (Languages, Math, Sciences, Social Studies).</p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Co-teaching and MTSS/RTI</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">Tiered supports (Tiers 1-2-3) with clear instruments; co-planning and complementary/supplementary AEE; regular communication with families.</p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Formative Assessment and Accessible Rubrics</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">Descriptive feedback, multiple evidences, and accessible criteria aligned with learning goals; no reliance on summative-only measures.</p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Inclusive Classroom Management</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">Predictable routines and signals; accessible materials; restorative practices and CNV.</p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Short Case Studies</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">Real examples with measurable impact (engagement â†‘, incidents â†“, learning â†‘) illustrating application of UDL, co-teaching, and formative assessment.</p>
        </section>
      </>
        }
      />
    )
  },

  'ia-transformadora': {
    title: 'IA Como Agente Transformador',
    subtitle: 'InteligÃªncia Artificial Ã‰tica, ResponsÃ¡vel e a ServiÃ§o da EducaÃ§Ã£o Inclusiva',
    gradient: 'from-amber-500 via-yellow-500 to-orange-400',
    content: (
      <Translatable
        pt={
      <>
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">IA ResponsÃ¡vel: Tecnologia com PropÃ³sito Humanista</h2>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A <strong>InteligÃªncia Artificial</strong> representa uma das tecnologias mais transformadoras do sÃ©culo XXI, oferecendo potencialidades extraordinÃ¡rias para personalizaÃ§Ã£o do ensino, identificaÃ§Ã£o precoce de dificuldades e geraÃ§Ã£o de insights pedagÃ³gicos baseados em dados. O Plataforma Solar posiciona-se firmemente no campo da <strong>IA ResponsÃ¡vel</strong>: abordagem que subordina tecnologia a princÃ­pios Ã©ticos nÃ£o-negociÃ¡veis.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Os 5 PrincÃ­pios da IA Ã‰tica (Floridi & Cowls)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h5 className="font-bold text-gray-900 mb-3">1. BeneficÃªncia</h5>
              <p className="text-sm text-gray-700">
                Fazer o bem. IA deve promover bem-estar e florescimento humano.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h5 className="font-bold text-gray-900 mb-3">2. NÃ£o-MaleficÃªncia</h5>
              <p className="text-sm text-gray-700">
                NÃ£o causar dano. Sistemas devem ser seguros, evitando riscos desproporcionais.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h5 className="font-bold text-gray-900 mb-3">3. Autonomia</h5>
              <p className="text-sm text-gray-700">
                Preservar autodeterminaÃ§Ã£o humana. IA sugere, nÃ£o decide.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h5 className="font-bold text-gray-900 mb-3">4. JustiÃ§a</h5>
              <p className="text-sm text-gray-700">
                Distribuir equitativamente benefÃ­cios. Prevenir discriminaÃ§Ã£o algorÃ­tmica.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600 md:col-span-2">
              <h5 className="font-bold text-gray-900 mb-3">5. Explicabilidade</h5>
              <p className="text-sm text-gray-700">
                Tornar processos inteligÃ­veis. Educadores devem compreender como e por que decisÃµes foram tomadas.
              </p>
            </div>
          </div>

          <AcademicReference text="FLORIDI, L.; COWLS, J. A Unified Framework of Five Principles for AI in Society. Harvard Data Science Review, v. 1, n. 1, 2019." />
          <AcademicReference text="RIBEIRO, M.T. et al. Why Should I Trust You?: Explaining the Predictions of Any Classifier. KDD 2016." />
          <AcademicReference text="DWORK, C. Differential Privacy. Springer, 2006." />
          
          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">XAI em Sala de Aula: TransparÃªncia PedagÃ³gica</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Transformamos explicabilidade em <strong>ferramenta de aprendizagem</strong>. Cada sugestÃ£o de atividade gerada pela IA vem acompanhada de uma <em>explicaÃ§Ã£o legÃ­vel por educadores</em>, destacando as evidÃªncias textuais (palavras/frases) que mais contribuÃ­ram para a recomendaÃ§Ã£o, via <strong>LIME</strong> e <strong>SHAP</strong>. Isso se traduz em feedback formativo: docentes conseguem relacionar a recomendaÃ§Ã£o com rubricas e objetivos de aprendizagem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h5 className="font-bold text-gray-900 mb-3">Indicadores de Uso PedagÃ³gico (XAI)</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ ExplicaÃ§Ãµes vinculadas a critÃ©rios de rubricas.</li>
                <li>â€¢ EvidÃªncias textuais destacadas e clicÃ¡veis.</li>
                <li>â€¢ Alternativas pedagÃ³gicas sugeridas quando a confianÃ§a do modelo Ã© baixa.</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h5 className="font-bold text-gray-900 mb-3">BenefÃ­cios DidÃ¡ticos</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Aumenta transparÃªncia para estudantes e famÃ­lias.</li>
                <li>â€¢ Apoia metacogniÃ§Ã£o e autoavaliaÃ§Ã£o.</li>
                <li>â€¢ Fortalece cultura de feedback descritivo.</li>
              </ul>
            </div>
          </div>

          <AcademicReference text="LUNDBERG, S.M.; LEE, S.I. A Unified Approach to Interpreting Model Predictions. NeurIPS, 2017." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Vieses AlgorÃ­tmicos: DetecÃ§Ã£o e MitigaÃ§Ã£o</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Adotamos um <strong>pipeline de equidade</strong> com testes antes e depois do treino: mÃ©tricas de paridade (demographic parity, equalized odds), anÃ¡lise de erro por subgrupos, e auditorias periÃ³dicas. Toda sugestÃ£o sensÃ­vel passa por <strong>revisÃ£o humana especializada</strong> antes da entrega aos estudantes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <StatBox value="0.80â€“1.25" label="Faixa alvo de razÃ£o de seleÃ§Ã£o por subgrupo" source="Auditoria interna de viÃ©s" />
            <StatBox value="> 0.90" label="AUC por subgrupo (mÃ­nima)" source="ValidaÃ§Ãµes estratificadas" />
            <StatBox value="100%" label="SugestÃµes sensÃ­veis com revisÃ£o humana" source="PolÃ­tica Plataforma Solar" />
          </div>

          <AcademicReference text="O'NEIL, C. Weapons of Math Destruction. Crown, 2016." />
          <AcademicReference text="NOBLE, S.U. Algorithms of Oppression. NYU Press, 2018." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Privacidade Diferencial na Escola: CenÃ¡rios Concretos</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Em anÃ¡lises de turma/sÃ©rie, aplicamos <strong>privacidade diferencial</strong> em contagens e mÃ©dias para impedir reidentificaÃ§Ã£o. Ex.: relatÃ³rio mensal de engajamento adiciona ruÃ­do calibrado (Îµ definido pelo comitÃª de Ã©tica), garantindo utilidade estatÃ­stica sem expor indivÃ­duos.
          </p>

          <div className="bg-amber-50 p-6 rounded-lg my-6 border-l-4 border-amber-600">
            <h4 className="text-lg font-bold text-gray-900 mb-3">CenÃ¡rios</h4>
            <ul className="space-y-2 text-gray-700">
              <li>â€¢ <strong>Mapa de interesses da turma</strong>: clustering com ruÃ­do para evitar inferÃªncias individuais.</li>
              <li>â€¢ <strong>AnÃ¡lises de participaÃ§Ã£o</strong>: thresholds de k-anonimato (k â‰¥ 5) e supressÃ£o de outliers reidentificÃ¡veis.</li>
              <li>â€¢ <strong>ExportaÃ§Ã£o de dados</strong>: apenas agregados com Îµ definido (ex.: Îµ=0.3) e logs de auditoria.</li>
            </ul>
          </div>

          <AcademicReference text="DWORK, C.; ROTH, A. The Algorithmic Foundations of Differential Privacy. 2014." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">GovernanÃ§a e Fluxo com RevisÃ£o Humana</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Toda decisÃ£o assistida por IA segue <strong>Human-in-the-Loop</strong>: a IA propÃµe, o educador dispÃµe. Mantemos <strong>trilhas de auditoria</strong> (quem viu o quÃª, quando, por quÃª), <strong>limites de escopo</strong> (sem decisÃµes disciplinares automatizadas) e <strong>consentimento granular</strong> conforme LGPD.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h5 className="font-bold text-gray-900 mb-3">PapÃ©is e Responsabilidades</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Docente: valida e adapta sugestÃµes.</li>
                <li>â€¢ CoordenaÃ§Ã£o: supervisiona mÃ©tricas e equidade.</li>
                <li>â€¢ ComitÃª de Ã‰tica: define Îµ, aprova estudos e auditorias.</li>
              </ul>
            </div>
            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-600">
              <h5 className="font-bold text-gray-900 mb-3">Limites de Uso</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ NÃ£o hÃ¡ perfilamento disciplinar automatizado.</li>
                <li>â€¢ Sem avaliaÃ§Ã£o somativa automÃ¡tica.</li>
                <li>â€¢ ExplicaÃ§Ãµes sÃ£o obrigatÃ³rias para sugestÃµes sensÃ­veis.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Planos de Aula Assistidos por IA (Exemplo)</h3>
          
          <div className="bg-green-50 p-6 rounded-lg my-6 border-l-4 border-green-600">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Projeto Interdisciplinar: Energia SustentÃ¡vel</h4>
            <ul className="space-y-2 text-gray-700">
              <li>â€¢ <strong>Objetivos</strong>: competÃªncias de ciÃªncias e linguagem; colaboraÃ§Ã£o e cidadania.</li>
              <li>â€¢ <strong>DiferenciaÃ§Ã£o (DUA)</strong>: vÃ­deos, infogrÃ¡ficos, entrevistas, maquetes; mÃºltiplos meios.</li>
              <li>â€¢ <strong>XAI</strong>: por que sugerimos agrupamentos? Destaques textuais das respostas dos alunos.</li>
              <li>â€¢ <strong>AvaliaÃ§Ã£o formativa</strong>: rubricas com critÃ©rios visÃ­veis; autoavaliaÃ§Ã£o guiada.</li>
              <li>â€¢ <strong>Privacidade</strong>: relatÃ³rios agregados com Îµ=0.3; sem dados identificÃ¡veis.</li>
            </ul>
          </div>

          <QuoteBox 
            quote="IA responsÃ¡vel na escola significa aumentar a potÃªncia do trabalho docente, nÃ£o terceirizÃ¡-lo. TransparÃªncia e cuidado vÃªm antes de automatizaÃ§Ã£o."
            author="Diretriz de prÃ¡tica do Plataforma Solar"
            work="Guia Interno de GovernanÃ§a de IA"
            year={2024}
          />
        </section>
      </>
        }
        en={
      <>
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Responsible AI: Technology with a Human Purpose</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">We adopt <strong>Responsible AI</strong> to support teachers without replacing them, prioritizing safety, equity, and pedagogical transparency.</p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Five Principles (Floridi & Cowls)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600"><h5 className="font-bold text-gray-900 mb-3">1. Beneficence</h5><p className="text-sm text-gray-700">Promote human flourishing.</p></div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600"><h5 className="font-bold text-gray-900 mb-3">2. Non-maleficence</h5><p className="text-sm text-gray-700">Avoid harm and undue risks.</p></div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600"><h5 className="font-bold text-gray-900 mb-3">3. Autonomy</h5><p className="text-sm text-gray-700">Human-in-the-loop; AI suggests, teachers decide.</p></div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600"><h5 className="font-bold text-gray-900 mb-3">4. Justice</h5><p className="text-sm text-gray-700">Fairness across groups; prevent algorithmic discrimination.</p></div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600 md:col-span-2"><h5 className="font-bold text-gray-900 mb-3">5. Explicability</h5><p className="text-sm text-gray-700">Make processes intelligible and auditable.</p></div>
          </div>
          <AcademicReference text="FLORIDI, L.; COWLS, J. A Unified Framework of Five Principles for AI in Society. HDSR, 2019." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">XAI in the Classroom</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">We turn explainability into a <strong>learning tool</strong>. Each suggestion includes educator-readable explanations with highlighted textual evidence via <strong>LIME</strong> and <strong>SHAP</strong>, enabling formative feedback aligned to rubrics and goals.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600"><h5 className="font-bold text-gray-900 mb-3">Pedagogical Indicators (XAI)</h5><ul className="text-sm text-gray-700 space-y-1"><li>â€¢ Explanations linked to rubric criteria.</li><li>â€¢ Clickable textual evidence.</li><li>â€¢ Alternative strategies when confidence is low.</li></ul></div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600"><h5 className="font-bold text-gray-900 mb-3">Didactic Benefits</h5><ul className="text-sm text-gray-700 space-y-1"><li>â€¢ Transparency for students and families.</li><li>â€¢ Supports metacognition and self-assessment.</li><li>â€¢ Strengthens descriptive feedback culture.</li></ul></div>
          </div>
          <AcademicReference text="LUNDBERG, S.M.; LEE, S.I. A Unified Approach to Interpreting Model Predictions. NeurIPS, 2017." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Algorithmic Bias: Detection and Mitigation</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">We operate an equity pipeline with pre/post-training tests: demographic parity, equalized odds, subgroup error analysis, periodic audits, and <strong>human review</strong> for sensitive suggestions.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <StatBox value="0.80â€“1.25" label="Target selection rate ratio" source="Internal fairness audit" />
            <StatBox value="> 0.90" label="Minimum subgroup AUC" source="Stratified validations" />
            <StatBox value="100%" label="Sensitive suggestions reviewed by humans" source="Policy" />
          </div>
          <AcademicReference text="O'NEIL, C. Weapons of Math Destruction. 2016." />
          <AcademicReference text="NOBLE, S.U. Algorithms of Oppression. 2018." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Differential Privacy in Schools</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">For class/grade analytics, we add calibrated noise (Îµ defined by the ethics committee) to counts/means, avoiding reidentification while preserving utility.</p>
          <div className="bg-amber-50 p-6 rounded-lg my-6 border-l-4 border-amber-600"><h4 className="text-lg font-bold text-gray-900 mb-3">Scenarios</h4><ul className="space-y-2 text-gray-700"><li>â€¢ Interest maps with noisy clustering.</li><li>â€¢ Participation analyses with k-anonymity (k â‰¥ 5) and outlier suppression.</li><li>â€¢ Data exports: aggregate only with Îµ (e.g., Îµ=0.3) and audit logs.</li></ul></div>
          <AcademicReference text="DWORK, C.; ROTH, A. The Algorithmic Foundations of Differential Privacy. 2014." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Governance and Human-in-the-Loop</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">AI-assisted decisions follow <strong>HITL</strong>: audit trails, scope limits (no automated discipline), and granular LGPD-aligned consent.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600"><h5 className="font-bold text-gray-900 mb-3">Roles & Responsibilities</h5><ul className="text-sm text-gray-700 space-y-1"><li>â€¢ Teacher: validates and adapts suggestions.</li><li>â€¢ Coordination: oversees metrics and fairness.</li><li>â€¢ Ethics Committee: sets Îµ, approves audits.</li></ul></div>
            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-600"><h5 className="font-bold text-gray-900 mb-3">Usage Limits</h5><ul className="text-sm text-gray-700 space-y-1"><li>â€¢ No automated disciplinary profiling.</li><li>â€¢ No automated summative grading.</li><li>â€¢ Explanations required for sensitive suggestions.</li></ul></div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">AI-Assisted Lesson Plans (Example)</h3>
          <div className="bg-green-50 p-6 rounded-lg my-6 border-l-4 border-green-600">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Interdisciplinary Project: Sustainable Energy</h4>
            <ul className="space-y-2 text-gray-700">
              <li>â€¢ <strong>Goals</strong>: science/language competencies; collaboration and citizenship.</li>
              <li>â€¢ <strong>UDL</strong>: videos, infographics, interviews, models; multiple means.</li>
              <li>â€¢ <strong>XAI</strong>: why grouped? textual highlights from student answers.</li>
              <li>â€¢ <strong>Formative assessment</strong>: visible rubrics; guided self-assessment.</li>
              <li>â€¢ <strong>Privacy</strong>: aggregate reports with Îµ=0.3; no identifiable data.</li>
            </ul>
          </div>
          <QuoteBox quote="Responsible AI in schools means amplifying teachersâ€™ work, not outsourcing it. Transparency and care come before automation." author="Plataforma Solar Practice Guideline" work="AI Governance Internal Guide" year={2024} />
        </section>
      </>
        }
      />
    )
  },

  'vinculos': {
    title: 'Aumentando VÃ­nculos',
    subtitle: 'Pertencimento, Apego Seguro e NeurociÃªncias Afetivas na EducaÃ§Ã£o',
    gradient: 'from-amber-500 via-yellow-500 to-orange-400',
    content: (
      <Translatable
        pt={
      <>
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">A Centralidade dos VÃ­nculos no Desenvolvimento Humano</h2>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Seres humanos sÃ£o, fundamentalmente, <strong>seres relacionais</strong>. Nossa constituiÃ§Ã£o psÃ­quica, desenvolvimento cognitivo e capacidade de aprender sÃ£o profundamente moldados pela qualidade dos vÃ­nculos que estabelecemos. <em>Pertencer</em> nÃ£o Ã© luxo, mas necessidade humana bÃ¡sica.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Teoria do Apego (John Bowlby)</h3>
          
          <QuoteBox 
            quote="O apego Ã© parte integrante do comportamento humano do berÃ§o ao tÃºmulo."
            author="John Bowlby"
            work="Attachment and Loss"
            year={1969}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <StatBox 
              value="2-3x" 
              label="Maior risco de depressÃ£o em estudantes socialmente isolados"
              source="Baumeister & Leary, 1995"
            />
            <StatBox 
              value="40%" 
              label="ReduÃ§Ã£o em comportamentos de risco com senso de pertencimento"
              source="Goodenow, 1993"
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Como o Plataforma Solar Fortalece VÃ­nculos</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h5 className="font-bold text-gray-900 mb-3">Grupos de Afinidade</h5>
              <p className="text-sm text-gray-700">
                Identificamos estudantes com interesses complementares. Sugerimos formaÃ§Ã£o de grupos heterogÃªneos que promovem colaboraÃ§Ã£o.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h5 className="font-bold text-gray-900 mb-3">Clubes Escolares</h5>
              <p className="text-sm text-gray-700">
                EspaÃ§os para exploraÃ§Ã£o de paixÃµes compartilhadas: robÃ³tica, literatura, esportes, artes.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h5 className="font-bold text-gray-900 mb-3">Rede Social por Turma</h5>
              <p className="text-sm text-gray-700">
                Ambiente digital seguro, moderado. ComunicaÃ§Ã£o nÃ£o-violenta, respeito Ã s diferenÃ§as.
              </p>
            </div>
          </div>

          <AcademicReference text="BOWLBY, J. Attachment and Loss. New York: Basic Books, 1969." />
          <AcademicReference text="BAUMEISTER, R.F.; LEARY, M.R. The Need to Belong. Psychological Bulletin, v. 117, n. 3, 1995." />
          <AcademicReference text="ROSENBERG, M.B. Nonviolent Communication. PuddleDancer Press, 2003." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Estilos de Apego e ImplicaÃ§Ãµes PedagÃ³gicas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h5 className="font-bold text-gray-900 mb-3">Apego Seguro</h5>
              <p className="text-sm text-gray-700">Respostas consistentes do cuidador â†’ base segura. Em sala: maior exploraÃ§Ã£o, melhor autorregulaÃ§Ã£o. PrÃ¡tica: rotina previsÃ­vel, feedback respeitoso, disponibilidade emocional do adulto.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
              <h5 className="font-bold text-gray-900 mb-3">Inseguro-Evitativo</h5>
              <p className="text-sm text-gray-700">Minimiza sinais emocionais por histÃ³rico de rejeiÃ§Ã£o. Em sala: aparente autonomia com evitaÃ§Ã£o de ajuda. PrÃ¡tica: ofertas de apoio nÃ£o intrusivas, validaÃ§Ã£o de emoÃ§Ãµes, contratos de autonomia responsÃ¡vel.</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
              <h5 className="font-bold text-gray-900 mb-3">Inseguro-Ambivalente</h5>
              <p className="text-sm text-gray-700">InconsistÃªncia do cuidador â†’ hipervigilÃ¢ncia. Em sala: busca constante de confirmaÃ§Ã£o. PrÃ¡tica: critÃ©rios claros, horÃ¡rios de check-in, expectativas estÃ¡veis.</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h5 className="font-bold text-gray-900 mb-3">Desorganizado</h5>
              <p className="text-sm text-gray-700">Fonte de cuidado tambÃ©m Ã© fonte de medo. Em sala: respostas paradoxais. PrÃ¡tica: abordagem informada por trauma, co-regulaÃ§Ã£o, planos de seguranÃ§a.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">NeurociÃªncias Afetivas do Pertencimento</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">VÃ­nculos seguros modulam sistemas de estresse (amÃ­gdala), aumentam ocitocina (confianÃ§a), engajam circuitos de recompensa (NAcc) e melhoram funÃ§Ãµes executivas (CPF). Salas que promovem pertencimento reduzem evasÃ£o e ampliam aprendizagem.</p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">PrÃ¡ticas PedagÃ³gicas Baseadas em EvidÃªncias</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h5 className="font-bold text-gray-900 mb-3">Rotinas de Acolhimento</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Morning Meeting com check-in socioemocional.</li>
                <li>â€¢ Ritual de boas-vindas e expectativas co-construÃ­das.</li>
                <li>â€¢ Mural de conquistas e reforÃ§o positivo.</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h5 className="font-bold text-gray-900 mb-3">Mentorias e Parcerias</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Tutoria entre pares heterogÃªnea.</li>
                <li>â€¢ Mentores adultos por afinidade.</li>
                <li>â€¢ Clubes/ligas temÃ¡ticas para identidade e propÃ³sito.</li>
              </ul>
            </div>
            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-600">
              <h5 className="font-bold text-gray-900 mb-3">PrÃ¡ticas Restaurativas</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ CÃ­rculos de diÃ¡logo com CNV.</li>
                <li>â€¢ Planos de reparaÃ§Ã£o co-acordados.</li>
                <li>â€¢ MediaÃ§Ã£o com escuta ativa.</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h5 className="font-bold text-gray-900 mb-3">ComunicaÃ§Ã£o NÃ£o-Violenta</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ ObservaÃ§Ã£o sem julgamento.</li>
                <li>â€¢ NomeaÃ§Ã£o de sentimentos e necessidades.</li>
                <li>â€¢ Pedidos claros e negociÃ¡veis.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">MÃ©tricas de VÃ­nculo e Engajamento</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <StatBox value="> 80%" label="Estudantes com pelo menos 1 vÃ­nculo significativo reportado" source="Auto-relatos trimestrais" />
            <StatBox value="-30%" label="ReduÃ§Ã£o de incidentes disciplinares" source="PrÃ¡ticas restaurativas" />
            <StatBox value="+15%" label="Aumento de frequÃªncia e participaÃ§Ã£o" source="Monitoramento escolar" />
          </div>

          <QuoteBox 
            quote="Pertencer Ã© quando minha presenÃ§a importa e minha ausÃªncia faz falta. A escola precisa ser esse lugar."
            author="SÃ­ntese inspirada em Baumeister & Leary"
            work="Pertencimento e engajamento escolar"
            year={1995}
          />
        </section>
      </>
        }
        en={
      <>
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Bonds Matter in Human Development</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">Humans are fundamentally <strong>relational</strong>. Cognitive development and learning depend on the quality of our bonds. <em>Belonging</em> is a basic need.</p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Attachment Theory (John Bowlby)</h3>
          <QuoteBox quote="Attachment is an integral part of human behavior from the cradle to the grave." author="John Bowlby" work="Attachment and Loss" year={1969} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <StatBox value="2-3x" label="Higher risk of depression in socially isolated students" source="Baumeister & Leary, 1995" />
            <StatBox value="40%" label="Reduction in risk behaviors with sense of belonging" source="Goodenow, 1993" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Plataforma Solar Fosters Bonds</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600"><h5 className="font-bold text-gray-900 mb-3">Affinity Groups</h5><p className="text-sm text-gray-700">Heterogeneous, complementary interests to promote collaboration.</p></div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600"><h5 className="font-bold text-gray-900 mb-3">School Clubs</h5><p className="text-sm text-gray-700">Spaces to explore passions: robotics, literature, sports, arts.</p></div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600"><h5 className="font-bold text-gray-900 mb-3">Class Social Network</h5><p className="text-sm text-gray-700">Safe, moderated digital space. NVC and respect for differences.</p></div>
          </div>

          <AcademicReference text="BOWLBY, J. Attachment and Loss. New York: Basic Books, 1969." />
          <AcademicReference text="BAUMEISTER, R.F.; LEARY, M.R. The Need to Belong. Psychological Bulletin, 1995." />
          <AcademicReference text="ROSENBERG, M.B. Nonviolent Communication. PuddleDancer Press, 2003." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Attachment Styles and Pedagogical Implications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600"><h5 className="font-bold text-gray-900 mb-3">Secure</h5><p className="text-sm text-gray-700">Consistent responses â†’ secure base. Practices: predictable routines, respectful feedback, adult emotional availability.</p></div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600"><h5 className="font-bold text-gray-900 mb-3">Insecure-Avoidant</h5><p className="text-sm text-gray-700">Minimizes emotional signals. Practices: non-intrusive support, emotional validation, autonomy contracts.</p></div>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600"><h5 className="font-bold text-gray-900 mb-3">Insecure-Ambivalent</h5><p className="text-sm text-gray-700">Hypervigilance. Practices: clear criteria, check-in schedules, stable expectations.</p></div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600"><h5 className="font-bold text-gray-900 mb-3">Disorganized</h5><p className="text-sm text-gray-700">Trauma-informed approach, co-regulation, safety plans.</p></div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Affective Neuroscience of Belonging</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">Secure bonds modulate stress systems, increase oxytocin (trust), engage reward circuits, and improve executive functions. Belonging reduces dropout and boosts learning.</p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Evidence-Based Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600"><h5 className="font-bold text-gray-900 mb-3">Welcoming Routines</h5><ul className="text-sm text-gray-700 space-y-1"><li>â€¢ Morning Meeting with SEL check-in.</li><li>â€¢ Class agreements co-authored with students.</li><li>â€¢ Explicit modeling of NVC micro-skills.</li></ul></div>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600"><h5 className="font-bold text-gray-900 mb-3">Peer Mentoring</h5><ul className="text-sm text-gray-700 space-y-1"><li>â€¢ Pairings by complementary strengths/interests.</li><li>â€¢ Structured feedback cycles and reflection.</li><li>â€¢ Rotating roles to avoid stigmas.</li></ul></div>
          </div>
        </section>
      </>
        }
      />
    )
  }
}

