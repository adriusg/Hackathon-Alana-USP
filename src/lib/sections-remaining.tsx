// ContinuaÃ§Ã£o do conteÃºdo das seÃ§Ãµes - parte 2
// Este arquivo complementa sections-content-detailed.tsx

import { AcademicReference, StatBox, QuoteBox } from '@/components/academic-references'
import { Translatable } from '@/components/translatable'

export const remainingSections = {
  // FinalizaÃ§Ã£o da seÃ§Ã£o VÃ­nculos
  vinculosContinuacao: (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h5 className="font-bold text-gray-900 mb-3">Grupos de Afinidade</h5>
          <p className="text-sm text-gray-700">
            Identificamos estudantes com interesses, valores e estilos complementares. Sugerimos formaÃ§Ã£o de grupos heterogÃªneos que promovem colaboraÃ§Ã£o, nÃ£o competiÃ§Ã£o.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
          <h5 className="font-bold text-gray-900 mb-3">Clubes Escolares</h5>
          <p className="text-sm text-gray-700">
            EspaÃ§os para exploraÃ§Ã£o de paixÃµes compartilhadas: robÃ³tica, literatura, esportes, artes. ConexÃµes autÃªnticas emergem de atividades significativas.
          </p>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
          <h5 className="font-bold text-gray-900 mb-3">Rede Social por Turma</h5>
          <p className="text-sm text-gray-700">
            Ambiente digital seguro, moderado. ComunicaÃ§Ã£o nÃ£o-violenta, respeito Ã s diferenÃ§as, valorizaÃ§Ã£o de contribuiÃ§Ãµes de todos.
          </p>
        </div>
      </div>

      <AcademicReference text="ROSENBERG, M.B. Nonviolent Communication: A Language of Life. PuddleDancer Press, 2003." />
    </>
  ),

  'expressao-livre': {
    title: 'Livre ExpressÃ£o',
    subtitle: 'ComunicaÃ§Ã£o NÃ£o-Violenta, Dialogicidade e Acessibilidade Comunicacional',
    gradient: 'from-amber-500 via-yellow-500 to-orange-400',
    content: (
      <Translatable
        pt={
      <>
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">O Direito Ã  Voz: ExpressÃ£o Como PrÃ¡tica de Cidadania</h2>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A capacidade de expressar pensamentos, sentimentos, necessidades e opiniÃµes Ã© dimensÃ£o fundamental da dignidade humana. Ambientes escolares que silenciam estudantes, que valorizam apenas "respostas certas", que punem discordÃ¢ncia, que discriminam formas de expressÃ£o nÃ£o-hegemÃ´nicas, violam nÃ£o apenas princÃ­pios pedagÃ³gicos, mas direitos humanos bÃ¡sicos. A <strong>livre expressÃ£o</strong> na educaÃ§Ã£o inclusiva exige trÃªs pilares: <em>comunicaÃ§Ã£o nÃ£o-violenta</em>, <em>pedagogia dialÃ³gica</em> e <em>acessibilidade comunicacional</em>.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Marshall Rosenberg: ComunicaÃ§Ã£o NÃ£o-Violenta (CNV)</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            <strong>Marshall Rosenberg</strong> (1934-2015), psicÃ³logo norte-americano, desenvolveu a <em>ComunicaÃ§Ã£o NÃ£o-Violenta</em>, metodologia que revolucionou resoluÃ§Ã£o de conflitos em contextos educacionais, familiares, organizacionais e atÃ© diplomÃ¡ticos. CNV baseia-se em quatro componentes: <strong>observaÃ§Ã£o</strong> (sem julgamento), <strong>sentimento</strong> (reconhecer emoÃ§Ãµes), <strong>necessidade</strong> (identificar o que estÃ¡ por trÃ¡s do sentimento) e <strong>pedido</strong> (solicitaÃ§Ã£o clara, nÃ£o exigÃªncia).
          </p>

          <QuoteBox 
            quote="Se quisermos seres humanos capazes de viver em paz consigo mesmos e com os outros, precisamos aprender a linguagem da vida."
            author="Marshall Rosenberg"
            work="ComunicaÃ§Ã£o NÃ£o-Violenta"
            year={2003}
          />

          <div className="bg-green-50 p-6 rounded-lg my-6 border-l-4 border-green-600">
            <h4 className="text-xl font-bold text-gray-900 mb-3">AplicaÃ§Ã£o no Plataforma Solar:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>â€¢ <strong>FÃ³runs moderados com CNV:</strong> Regras claras de comunicaÃ§Ã£o respeitosa.</li>
              <li>â€¢ <strong>Treinamento para educadores:</strong> Workshops sobre escuta empÃ¡tica e mediaÃ§Ã£o.</li>
              <li>â€¢ <strong>Feedback formativo:</strong> ComentÃ¡rios que focam em observaÃ§Ãµes, nÃ£o julgamentos.</li>
              <li>â€¢ <strong>EspaÃ§os seguros:</strong> Estudantes expressam vulnerabilidades sem medo de ridicularizaÃ§Ã£o.</li>
            </ul>
          </div>

          <AcademicReference text="ROSENBERG, M.B. Nonviolent Communication: A Language of Life. 3rd ed. Encinitas, CA: PuddleDancer Press, 2015." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Acessibilidade Comunicacional: MÃºltiplas Linguagens</h3>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Livre expressÃ£o exige garantir que TODOS possam se comunicar, independentemente de suas caracterÃ­sticas sensoriais, motoras ou cognitivas. Isto significa:
          </p>

          <div className="bg-white/50 p-6 rounded-lg my-6 border-l-4 border-blue-500">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Base legal e acessibilidade</h4>
            <p className="text-gray-700 mb-3">A liberdade de expressÃ£o na escola inclusiva deve estar aliada Ã  proteÃ§Ã£o integral (ECA), ao direito Ã  participaÃ§Ã£o (CRPD/LBI) e Ã  acessibilidade digital (WCAG 2.2).</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>ECA</strong> (Lei 8.069/1990): proteÃ§Ã£o integral e prioridade absoluta.</li>
              <li><strong>CRPD</strong> (Decreto 6.949/2009): comunicaÃ§Ã£o acessÃ­vel e participaÃ§Ã£o em igualdade.</li>
              <li><strong>LBI</strong> (Lei 13.146/2015): acessibilidade, desenho universal e nÃ£o discriminaÃ§Ã£o.</li>
              <li><strong>WCAG 2.2</strong>: contraste, teclado, foco visÃ­vel, alt text, legendas/transcriÃ§Ãµes.</li>
            </ul>
            <div className="mt-3 space-y-1">
              <AcademicReference text="BRASIL. Lei 8.069/1990 (ECA)." />
              <AcademicReference text="BRASIL. Decreto 6.949/2009 (CRPD)." />
              <AcademicReference text="BRASIL. Lei 13.146/2015 (LBI)." />
              <AcademicReference text="W3C. WCAG 2.2 (w3.org/TR/WCAG22)." />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h5 className="font-bold text-gray-900 mb-3">Libras e EducaÃ§Ã£o BilÃ­ngue</h5>
              <p className="text-sm text-gray-700">
                LÃ­ngua Brasileira de Sinais reconhecida legalmente. IntÃ©rpretes, vÃ­deos legendados e com janela de Libras, professores bilÃ­ngues.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h5 className="font-bold text-gray-900 mb-3">CAA - ComunicaÃ§Ã£o Aumentativa e Alternativa</h5>
              <p className="text-sm text-gray-700">
                Sistemas de sÃ­mbolos, pictogramas, pranchas de comunicaÃ§Ã£o, dispositivos digitais para quem nÃ£o oraliza.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h5 className="font-bold text-gray-900 mb-3">AudiodescriÃ§Ã£o e TTS</h5>
              <p className="text-sm text-gray-700">
                DescriÃ§Ã£o de elementos visuais para pessoas cegas. Text-to-Speech de qualidade para leitura de telas.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h5 className="font-bold text-gray-900 mb-3">Formatos FlexÃ­veis</h5>
              <p className="text-sm text-gray-700">
                Texto, Ã¡udio, vÃ­deo, desenho, performance, construÃ§Ã£o. MÃºltiplas formas de demonstrar conhecimento.
              </p>
            </div>
          </div>

          <AcademicReference text="BRASIL. Decreto nÂº 5.626, de 22 de dezembro de 2005. Regulamenta a Lei nÂº 10.436, de 24 de abril de 2002, que dispÃµe sobre a LÃ­ngua Brasileira de Sinais - Libras." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">CNV na PrÃ¡tica: Passos e Scripts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-600">
              <h5 className="font-bold text-gray-900 mb-3">4 Passos</h5>
              <ol className="text-sm text-gray-700 space-y-1 list-decimal pl-5">
                <li>ObservaÃ§Ã£o sem julgamento</li>
                <li>Sentimento</li>
                <li>Necessidade</li>
                <li>Pedido claro e negociÃ¡vel</li>
              </ol>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h5 className="font-bold text-gray-900 mb-3">Script Modelo</h5>
              <p className="text-sm text-gray-700">"Quando <em>vejo/ouÃ§o</em> [fato], eu me sinto [sentimento] porque preciso de [necessidade]. VocÃª topa [pedido]?"</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Rubricas AcessÃ­veis de ExpressÃ£o</h3>
          <div className="bg-emerald-50 p-6 rounded-lg my-6 border-l-4 border-emerald-600">
            <h4 className="text-lg font-bold text-gray-900 mb-3">CritÃ©rios (nÃ­veis simplificados)</h4>
            <ul className="space-y-2 text-gray-700">
              <li>â€¢ <strong>Clareza</strong>: ideia compreensÃ­vel em linguagem simples (texto/Ã¡udio/Libras).</li>
              <li>â€¢ <strong>Respeito</strong>: nÃ£o julga pessoas; foca em ideias e fatos.</li>
              <li>â€¢ <strong>Escuta</strong>: retoma fala do outro antes de responder.</li>
              <li>â€¢ <strong>Variedade</strong>: usa pelo menos 2 meios (ex.: fala + visual).</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Protocolos e SeguranÃ§a</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
              <h5 className="font-bold text-gray-900 mb-3">Anti-bullying e Discurso de Ã“dio</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Regras explÃ­citas de respeito e consequÃªncias restaurativas.</li>
                <li>â€¢ MediaÃ§Ã£o imediata com CNV e reparaÃ§Ã£o de danos.</li>
                <li>â€¢ Canais confidenciais de pedido de ajuda.</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h5 className="font-bold text-gray-900 mb-3">ComentÃ¡rios Respeitosos</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Use "eu" em vez de generalizaÃ§Ãµes.</li>
                <li>â€¢ FaÃ§a perguntas genuÃ­nas antes de discordar.</li>
                <li>â€¢ Traga evidÃªncias e exemplos, nÃ£o rÃ³tulos.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">MÃ©tricas de ExpressÃ£o e ParticipaÃ§Ã£o</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <StatBox value="> 85%" label="Estudantes com pelo menos 1 contribuiÃ§Ã£o por aula" source="Registro da plataforma" />
            <StatBox value="+25%" label="Crescimento de contribuiÃ§Ãµes multimodais" source="ComparaÃ§Ã£o trimestral" />
            <StatBox value="-40%" label="ReduÃ§Ã£o de ocorrÃªncias de linguagem violenta" source="RelatÃ³rios moderados" />
          </div>

          <AcademicReference text="ROSENBERG, M.B. Nonviolent Communication. 3rd ed. PuddleDancer Press, 2015." />
        </section>
      </>
        }
        en={
      <>
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Right to a Voice: Expression as Civic Practice</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">Free expression in inclusive education rests on three pillars: <em>Nonviolent Communication</em> (NVC), <em>dialogical pedagogy</em>, and <em>communication accessibility</em>.</p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Marshall Rosenberg: Nonviolent Communication (NVC)</h3>
          <QuoteBox quote="If we want human beings who can live in peace with themselves and others, we need to learn the language of life." author="Marshall Rosenberg" work="Nonviolent Communication" year={2003} />
          <div className="bg-green-50 p-6 rounded-lg my-6 border-l-4 border-green-600">
            <h4 className="text-xl font-bold text-gray-900 mb-3">In Plataforma Solar:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>â€¢ Moderated forums with NVC rules.</li>
              <li>â€¢ Educator training on empathic listening and mediation.</li>
              <li>â€¢ Formative feedback: observations over judgments.</li>
              <li>â€¢ Safe spaces for vulnerable sharing.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Communication Accessibility</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600"><h5 className="font-bold text-gray-900 mb-3">Sign Language and Bilingual Ed.</h5><p className="text-sm text-gray-700">Interpreters, captioned videos with sign window, bilingual teachers.</p></div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600"><h5 className="font-bold text-gray-900 mb-3">AAC</h5><p className="text-sm text-gray-700">Symbols, pictograms, communication boards, digital devices.</p></div>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600"><h5 className="font-bold text-gray-900 mb-3">Audio Description & TTS</h5><p className="text-sm text-gray-700">Describe visuals for blind students; high-quality TTS.</p></div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600"><h5 className="font-bold text-gray-900 mb-3">Flexible Formats</h5><p className="text-sm text-gray-700">Text, audio, video, drawing, performance, building.</p></div>
          </div>
          <AcademicReference text="BRASIL. Decreto 5.626/2005 (Libras)." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">NVC in Practice: Steps and Script</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-600"><h5 className="font-bold text-gray-900 mb-3">4 Steps</h5><ol className="text-sm text-gray-700 space-y-1 list-decimal pl-5"><li>Observation</li><li>Feeling</li><li>Need</li><li>Clear, negotiable request</li></ol></div>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600"><h5 className="font-bold text-gray-900 mb-3">Model Script</h5><p className="text-sm text-gray-700">â€œWhen I <em>see/hear</em> [fact], I feel [feeling] because I need [need]. Would you consider [request]?â€</p></div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Protocols and Safety</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600"><h5 className="font-bold text-gray-900 mb-3">Anti-bullying and Hate Speech</h5><ul className="text-sm text-gray-700 space-y-1"><li>â€¢ Explicit rules and restorative consequences.</li><li>â€¢ Immediate mediation with NVC; repair of harm.</li><li>â€¢ Confidential help channels.</li></ul></div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600"><h5 className="font-bold text-gray-900 mb-3">Respectful Comments</h5><ul className="text-sm text-gray-700 space-y-1"><li>â€¢ Use â€œIâ€ statements.</li><li>â€¢ Ask genuine questions before disagreeing.</li><li>â€¢ Bring evidence and examples, not labels.</li></ul></div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Expression and Participation Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <StatBox value="> 85%" label="Students with at least 1 contribution per class" source="Platform logs" />
            <StatBox value="+25%" label="Growth in multimodal contributions" source="Quarterly comparison" />
            <StatBox value="-40%" label="Reduction in violent language" source="Moderation reports" />
          </div>
          <AcademicReference text="ROSENBERG, M.B. Nonviolent Communication. 3rd ed. PuddleDancer Press, 2015." />
        </section>
      </>
        }
      />
    )
  },

  'deficiencia': {
    title: 'Entendendo DeficiÃªncias',
    subtitle: 'Modelo Social, Neurodiversidade e Respeito Ã  DiferenÃ§a',
    gradient: 'from-amber-500 via-yellow-500 to-orange-400',
    content: (
      <Translatable
        pt={
      <>
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Do Modelo MÃ©dico ao Modelo Social da DeficiÃªncia</h2>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A forma como uma sociedade compreende e nomeia a deficiÃªncia revela muito sobre seus valores, estruturas de poder e compromisso com justiÃ§a. Durante sÃ©culos, predominou o <strong>modelo mÃ©dico</strong>: deficiÃªncia como patologia individual, "problema" a ser curado, normalizado ou segregado. Este paradigma localiza a "anormalidade" no corpo/mente da pessoa, ignorando barreiras sociais, arquitetÃ´nicas, atitudinais que produzem exclusÃ£o.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A partir dos anos 1970, movimentos de pessoas com deficiÃªncia no Reino Unido articularam o <strong>modelo social</strong>: deficiÃªncia nÃ£o Ã© condiÃ§Ã£o mÃ©dica, mas resultado da interaÃ§Ã£o entre caracterÃ­sticas individuais e barreiras ambientais. Uma pessoa usuÃ¡ria de cadeira de rodas nÃ£o Ã© "deficiente" por nÃ£o caminhar; Ã© <em>deficientizada</em> por escadas sem rampas, transportes inacessÃ­veis, preconceitos capacitistas.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            No Brasil, a <strong>CRPD</strong> (ConvenÃ§Ã£o sobre os Direitos das Pessoas com DeficiÃªncia) incorporada pelo Decreto 6.949/2009 e a <strong>LBI</strong> (Lei 13.146/2015) adotam esse paradigma social: a deficiÃªncia decorre da interaÃ§Ã£o entre impedimentos de longo prazo e barreiras que restringem participaÃ§Ã£o. ImplicaÃ§Ãµes para a escola: educaÃ§Ã£o em classes comuns, AEE complementar, acessibilidade e ajustes razoÃ¡veis, com desenho universal para aprendizagem.
          </p>
          <AcademicReference text="BRASIL. Decreto 6.949/2009 (CRPD)." />
          <AcademicReference text="BRASIL. Lei 13.146/2015 (LBI)." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h5 className="font-bold text-gray-900 mb-3">âŒ Modelo MÃ©dico</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Foco na "cura" ou normalizaÃ§Ã£o</li>
                <li>â€¢ Problema estÃ¡ no indivÃ­duo</li>
                <li>â€¢ SegregaÃ§Ã£o justificada</li>
                <li>â€¢ Paternalismo e piedade</li>
                <li>â€¢ DecisÃµes sobre, nÃ£o com</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h5 className="font-bold text-gray-900 mb-3">âœ… Modelo Social</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>â€¢ Foco em remover barreiras</li>
                <li>â€¢ Problema estÃ¡ no ambiente</li>
                <li>â€¢ InclusÃ£o como direito</li>
                <li>â€¢ Autonomia e protagonismo</li>
                <li>â€¢ "Nada sobre nÃ³s sem nÃ³s"</li>
              </ul>
            </div>
          </div>

          <QuoteBox 
            quote="DeficiÃªncia Ã© algo imposto sobre nossas limitaÃ§Ãµes pela forma como somos desnecessariamente isolados e excluÃ­dos da participaÃ§Ã£o plena na sociedade."
            author="Michael Oliver"
            work="The Politics of Disablement"
            year={1990}
          />

          <AcademicReference text="OLIVER, M. The Politics of Disablement. London: Macmillan Education, 1990." />

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
            Segundo a <strong>OMS</strong>, cerca de <strong>1,3 bilhÃ£o de pessoas</strong> (aprox. <strong>16% da populaÃ§Ã£o mundial</strong>) vivem com deficiÃªncia (WHO, 2022). No Brasil, a <strong>PNS/IBGE 2019</strong> estimou <strong>17,3 milhÃµes</strong> de pessoas com pelo menos uma deficiÃªncia (8,4% da populaÃ§Ã£o com 2+ anos).
          </p>

          <AcademicReference text="WHO. Global report on health equity for persons with disabilities. 2022." />
          <AcademicReference text="IBGE. PNS 2019: 17,3 milhÃµes (8,4%). Release oficial, 2021." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tipos de DeficiÃªncia: Diversidade e Especificidades</h3>
          
          <div className="space-y-8">
            {/* Neurodesenvolvimento e SaÃºde Mental */}
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h5 className="font-bold text-gray-900 mb-3">TEA â€” Transtorno do Espectro Autista</h5>
              <p className="text-sm text-gray-700 mb-2">DiferenÃ§as na comunicaÃ§Ã£o social e padrÃµes sensÃ³rio-comportamentais restritos/repetitivos. Heterogeneidade elevada.</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> sobrecarga sensorial (ruÃ­do/luz), comunicaÃ§Ã£o predominantemente oral, mudanÃ§as imprevisÃ­veis, avaliaÃ§Ãµes pouco flexÃ­veis.</li>
                <li><strong>EstratÃ©gias:</strong> rotinas visuais, antecipaÃ§Ã£o de mudanÃ§as, CAA quando necessÃ¡rio, instruÃ§Ãµes claras e segmentadas, flexibilizaÃ§Ã£o de participaÃ§Ã£o social.</li>
              </ul>
              <AcademicReference text="APA. DSM-5-TR: Diagnostic and Statistical Manual of Mental Disorders. 2022." />
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h5 className="font-bold text-gray-900 mb-3">TDAH â€” Transtorno de DÃ©ficit de AtenÃ§Ã£o/Hiperatividade</h5>
              <p className="text-sm text-gray-700 mb-2">PadrÃµes persistentes de desatenÃ§Ã£o e/ou hiperatividade-impulsividade, com impacto funcional em mÃºltiplos contextos.</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> tarefas longas e monÃ³tonas, instruÃ§Ãµes extensas sem marcos, puniÃ§Ã£o por inquietaÃ§Ã£o, avaliaÃ§Ãµes baseadas apenas em tempo contÃ­nuo de foco.</li>
                <li><strong>EstratÃ©gias:</strong> instruÃ§Ãµes passo a passo, metas curtas com feedback imediato, pausas motoras programadas, variaÃ§Ã£o modal (visual/ativa), tempo extra e rubricas claras.</li>
              </ul>
              <AcademicReference text="DUKE & ANHOLT. Evidence-based interventions for ADHD in schools. School Psychology Review, 2020." />
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h5 className="font-bold text-gray-900 mb-3">SÃ­ndrome de Down (Trissomia 21)</h5>
              <p className="text-sm text-gray-700 mb-2">CondiÃ§Ã£o genÃ©tica associada a perfil cognitivo especÃ­fico (forÃ§as visuais-sociais, desafios em memÃ³ria de trabalho e linguagem expressiva).</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> linguagem acelerada, abstraÃ§Ãµes sem apoio visual, subexpectativas e paternalismo, exclusÃ£o de atividades desafiadoras.</li>
                <li><strong>EstratÃ©gias:</strong> suportes visuais, ensino explÃ­cito e cumulativo, tempo estendido, oportunidades reais de autonomia e lideranÃ§a.</li>
              </ul>
              <AcademicReference text="BUCKLEY, S. Education for individuals with Down syndrome. Down Syndrome Research and Practice, 2002." />
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h5 className="font-bold text-gray-900 mb-3">DepressÃ£o, TAG, PÃ¢nico e Fobias</h5>
              <p className="text-sm text-gray-700 mb-2">CondiÃ§Ãµes de saÃºde mental com impactos em energia, concentraÃ§Ã£o, motivaÃ§Ã£o e resposta ao estresse.</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> estigma, avaliaÃ§Ãµes orais sob pressÃ£o, ambientes ruidosos, prazos rÃ­gidos sem acomodaÃ§Ã£o.</li>
                <li><strong>EstratÃ©gias:</strong> ajustes razoÃ¡veis de prazos, alternativas de avaliaÃ§Ã£o (escrita/assÃ­ncrona), espaÃ§os calmos, plano de crise e parceria com famÃ­lia/saÃºde.</li>
              </ul>
              <AcademicReference text="WHO. Mental health and education: policy and practice. 2021." />
            </div>

            <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-600">
              <h5 className="font-bold text-gray-900 mb-3">Transtorno Bipolar e Esquizofrenia</h5>
              <p className="text-sm text-gray-700 mb-2">Transtornos com alteraÃ§Ãµes de humor (bipolar) e de percepÃ§Ã£o/pensamento (esquizofrenia), com grande variaÃ§Ã£o de curso e manejo clÃ­nico.</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> rotulaÃ§Ã£o, falta de planos individualizados para fases agudas, exigÃªncia de presenÃ§a constante sem flexibilizaÃ§Ã£o.</li>
                <li><strong>EstratÃ©gias:</strong> PEI com acomodaÃ§Ãµes por fase, materiais assÃ­ncronos, priorizaÃ§Ã£o de seguranÃ§a e acolhimento, coordenaÃ§Ã£o escola-saÃºde.</li>
              </ul>
              <AcademicReference text="NICE Guidelines. Psychosis and schizophrenia in children and young people. 2016." />
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
              <h5 className="font-bold text-gray-900 mb-3">TOC e Transtornos Relacionados</h5>
              <p className="text-sm text-gray-700 mb-2">ObsessÃµes (pensamentos intrusivos) e compulsÃµes (rituais) que consomem tempo e causam sofrimento.</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> tempo insuficiente, gatilhos sensoriais, interpretaÃ§Ãµes morais equivocadas do comportamento.</li>
                <li><strong>EstratÃ©gias:</strong> tempo adicional, previsibilidade, escolhas de ambiente, linguagem nÃ£o estigmatizante; coordenaÃ§Ã£o terapÃªutica quando houver.</li>
              </ul>
              <AcademicReference text="APA. Clinical Practice Guideline for the Treatment of OCD. 2020." />
            </div>

            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
              <h5 className="font-bold text-gray-900 mb-3">Trauma e Estressores</h5>
              <p className="text-sm text-gray-700 mb-2">HistÃ³rias de violÃªncia, negligÃªncia ou eventos crÃ­ticos podem gerar hipervigilÃ¢ncia e respostas de luta/fuga/congelamento.</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> puniÃ§Ãµes por reatividade, gatilhos nÃ£o reconhecidos, falta de previsibilidade.</li>
                <li><strong>EstratÃ©gias:</strong> prÃ¡ticas <em>trauma-informed</em>: rotinas claras, opÃ§Ãµes, co-regulaÃ§Ã£o, linguagem de seguranÃ§a, planos personalizados de regulaÃ§Ã£o.</li>
              </ul>
              <AcademicReference text="BRUHN, A. Trauma-informed educational practices. Review of Education, 2021." />
            </div>

            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-600">
              <h5 className="font-bold text-gray-900 mb-3">Transtornos Alimentares</h5>
              <p className="text-sm text-gray-700 mb-2">Anorexia e bulimia envolvem distorÃ§Ãµes da imagem corporal e prÃ¡ticas compensatÃ³rias, com risco clÃ­nico relevante.</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> comentÃ¡rios sobre corpo, atividades baseadas em medidas/peso, horÃ¡rio escolar conflitando com acompanhamento clÃ­nico.</li>
                <li><strong>EstratÃ©gias:</strong> linguagem neutra sobre corpo, foco em saÃºde e funcionalidade, flexibilidade de prazos e frequÃªncia, parceria com equipe de saÃºde.</li>
              </ul>
              <AcademicReference text="APA. Practice Guideline for Eating Disorders. 2023." />
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600">
              <h5 className="font-bold text-gray-900 mb-3">DependÃªncias e VÃ­cios (substÃ¢ncias e comportamentais)</h5>
              <p className="text-sm text-gray-700 mb-2">PadrÃµes de uso/engajamento com prejuÃ­zo significativo e perda de controle.</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> puniÃ§Ãµes exclusivamente punitivas, estigma, falta de acompanhamento contÃ­nuo.</li>
                <li><strong>EstratÃ©gias:</strong> abordagem de reduÃ§Ã£o de danos, encaminhamento e apoio psicossocial, planos de estudo flexÃ­veis e supervisÃ£o prÃ³xima.</li>
              </ul>
              <AcademicReference text="WHO. International standards for the treatment of drug use disorders. 2020." />
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
              <h5 className="font-bold text-gray-900 mb-3">TPAS (Transtorno de Personalidade Antissocial)</h5>
              <p className="text-sm text-gray-700 mb-2">PadrÃµes persistentes de desrespeito a normas/limites e empatia reduzida; requer manejo pedagÃ³gico e de seguranÃ§a.</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> respostas reativas, regras inconsistentes, ausÃªncia de limites claros.</li>
                <li><strong>EstratÃ©gias:</strong> contratos comportamentais, reforÃ§o positivo, limites previsÃ­veis, mediaÃ§Ã£o, envolvimento multiprofissional.</li>
              </ul>
              <AcademicReference text="SCOTT, S. Conduct problems and antisocial behaviour. The Lancet, 2010." />
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
              <h5 className="font-bold text-gray-900 mb-3">IncongruÃªncia de GÃªnero (ICD-11)</h5>
              <p className="text-sm text-gray-700 mb-2">CondiÃ§Ã£o de saÃºde sexual (nÃ£o classificada como transtorno mental na CID-11) que pode demandar suporte psicossocial e social.</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> bullying, uso compulsÃ³rio de nome/pronomes incorretos, banheiros/vestiÃ¡rios inacessÃ­veis.</li>
                <li><strong>EstratÃ©gias:</strong> respeito a nome social e pronomes, polÃ­ticas anti-bullying claras, espaÃ§os seguros e confidenciais.</li>
              </ul>
              <AcademicReference text="WHO. ICD-11: Gender incongruence classifications. 2019." />
            </div>

            {/* DeficiÃªncias FÃ­sicas e Sensoriais */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h5 className="font-bold text-gray-900 mb-3">Obesidade MÃ³rbida</h5>
              <p className="text-sm text-gray-700 mb-2">CondiÃ§Ã£o crÃ´nica com impactos funcionais (mobilidade, fadiga, estigma).</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> mobiliÃ¡rio inadequado, comentÃ¡rios estigmatizantes, atividades fÃ­sicas nÃ£o adaptadas.</li>
                <li><strong>EstratÃ©gias:</strong> cadeiras reforÃ§adas e confortÃ¡veis, linguagem respeitosa, alternativas de atividade fÃ­sica e pausas planejadas.</li>
              </ul>
              <AcademicReference text="NHLBI. Clinical Guidelines on the Identification, Evaluation, and Treatment of Overweight and Obesity. 2013." />
            </div>

            <div className="bg-lime-50 p-6 rounded-lg border-l-4 border-lime-600">
              <h5 className="font-bold text-gray-900 mb-3">Nanismo</h5>
              <p className="text-sm text-gray-700 mb-2">CondiÃ§Ãµes genÃ©ticas/ endÃ³crinas com baixa estatura e questÃµes ortopÃ©dicas associadas.</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> alcance fÃ­sico, mobiliÃ¡rio alto, bullying.</li>
                <li><strong>EstratÃ©gias:</strong> mobiliÃ¡rio ajustÃ¡vel, degraus seguros, protocolos anti-bullying e cultura de respeito.</li>
              </ul>
              <AcademicReference text="PALEY, D. Dwarfism: medical and surgical management. Current Orthopaedic Practice, 2015." />
            </div>

            <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-600">
              <h5 className="font-bold text-gray-900 mb-3">AmputaÃ§Ã£o e LesÃ£o Medular (Mono/Para/Tetraplegia)</h5>
              <p className="text-sm text-gray-700 mb-2">Perda de segmento corporal ou interrupÃ§Ã£o de vias motoras/sensitivas com repercussÃµes em mobilidade e autonomia.</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> ausÃªncia de rampas/elevadores, portas estreitas, banheiros inacessÃ­veis, transporte escolar inadequado.</li>
                <li><strong>EstratÃ©gias:</strong> acessibilidade arquitetÃ´nica (ABNT NBR 9050), rota acessÃ­vel, tempo adicional de locomoÃ§Ã£o, pares de apoio.</li>
              </ul>
              <AcademicReference text="BRASIL. ABNT NBR 9050: Acessibilidade a edificaÃ§Ãµes, mobiliÃ¡rio, espaÃ§os e equipamentos urbanos. 2020." />
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h5 className="font-bold text-gray-900 mb-3">Paralisia Cerebral</h5>
              <p className="text-sm text-gray-700 mb-2">Grupo de condiÃ§Ãµes com distÃºrbios permanentes do movimento/ postura por lesÃ£o encefÃ¡lica nÃ£o-progressiva.</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> escrita manual prolongada, comunicaÃ§Ã£o oral rÃ¡pida, materiais nÃ£o acessÃ­veis.</li>
                <li><strong>EstratÃ©gias:</strong> tecnologia assistiva (switches, teclados adaptados), tempo extra, alternativa Ã  escrita manual, CAA.</li>
              </ul>
              <AcademicReference text="ROSENBAUM, P. The definition and classification of cerebral palsy. Developmental Medicine & Child Neurology, 2007." />
            </div>

            <div className="bg-fuchsia-50 p-6 rounded-lg border-l-4 border-fuchsia-600">
              <h5 className="font-bold text-gray-900 mb-3">DeficiÃªncia Auditiva</h5>
              <p className="text-sm text-gray-700 mb-2">Perda parcial ou total da audiÃ§Ã£o; diversidade cultural da comunidade surda.</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> aulas exclusivamente orais, ausÃªncia de intÃ©rprete, vÃ­deos sem legenda.</li>
                <li><strong>EstratÃ©gias:</strong> Libras, legendas, professores bilÃ­ngues, assentos frontais e materiais visuais.</li>
              </ul>
              <AcademicReference text="BRASIL. Decreto 5.626/2005 (Libras)." />
            </div>

            <div className="bg-violet-50 p-6 rounded-lg border-l-4 border-violet-600">
              <h5 className="font-bold text-gray-900 mb-3">DeficiÃªncia Visual</h5>
              <p className="text-sm text-gray-700 mb-2">Cegueira ou baixa visÃ£o, com necessidade de materiais acessÃ­veis e orientaÃ§Ã£o/mobilidade.</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> PDFs nÃ£o acessÃ­veis, quadros sem descriÃ§Ã£o, avaliaÃ§Ãµes visuais sem alternativa.</li>
                <li><strong>EstratÃ©gias:</strong> leitores de tela, descriÃ§Ã£o de imagens (alt text), Braille, tÃ¡teis, audiodescriÃ§Ã£o.</li>
              </ul>
              <AcademicReference text="WHO. World report on vision. 2019." />
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-600">
              <h5 className="font-bold text-gray-900 mb-3">DeficiÃªncias MÃºltiplas</h5>
              <p className="text-sm text-gray-700 mb-2">CombinaÃ§Ã£o de deficiÃªncias (ex.: intelectual + sensorial) exigindo planos altamente individualizados.</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-2">
                <li><strong>Barreiras:</strong> respostas padronizadas, currÃ­culos inflexÃ­veis, ausÃªncia de equipe interdisciplinar.</li>
                <li><strong>EstratÃ©gias:</strong> PEI colaborativo, co-ensino, avaliaÃ§Ã£o por portfÃ³lio e objetos de aprendizagem multimodais.</li>
              </ul>
              <AcademicReference text="CAST. Universal Design for Learning Guidelines 2.0. 2011." />
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 mb-6 mt-8">
            <strong>PrincÃ­pios pedagÃ³gicos transversais</strong>: DUA/UDL, avaliaÃ§Ã£o formativa, co-ensino, feedback descritivo, altas expectativas com suporte, e participaÃ§Ã£o ativa dos estudantes e famÃ­lias. Sempre <em>nada sobre nÃ³s sem nÃ³s</em>.
          </p>

          <QuoteBox 
            quote="A inclusÃ£o nÃ£o Ã© fazer todos aprenderem do mesmo modo, mas garantir caminhos para que cada um aprenda com dignidade."
            author="SÃ­ntese pedagÃ³gica inspirada em Mantoan e CAST"
            work="EducaÃ§Ã£o Inclusiva e DUA"
            year={2011}
          />
        </section>
      </>
        }
        en={
      <>
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">From the Medical to the Social Model of Disability</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">The <strong>medical model</strong> locates the â€œproblemâ€ in the individual; the <strong>social model</strong> reframes disability as the result of barriers and environments. Inclusion focuses on removing barriers, autonomy, and rights.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600"><h5 className="font-bold text-gray-900 mb-3">âŒ Medical Model</h5><ul className="text-sm text-gray-700 space-y-1"><li>â€¢ Cure/normalize</li><li>â€¢ Problem in the individual</li><li>â€¢ Segregation justified</li><li>â€¢ Paternalism</li><li>â€¢ Decisions about, not with</li></ul></div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600"><h5 className="font-bold text-gray-900 mb-3">âœ… Social Model</h5><ul className="text-sm text-gray-700 space-y-1"><li>â€¢ Remove barriers</li><li>â€¢ Problem in the environment</li><li>â€¢ Inclusion as a right</li><li>â€¢ Autonomy and protagonism</li><li>â€¢ â€œNothing about us without usâ€</li></ul></div>
          </div>
          <QuoteBox quote="Disability is something imposed on our limitations by the ways we are unnecessarily isolated and excluded from full participation in society." author="Michael Oliver" work="The Politics of Disablement" year={1990} />
          <AcademicReference text="OLIVER, M. The Politics of Disablement. 1990." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Global and Brazilian Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <StatBox value="15%" label="World population with disabilities" source="WHO, 2011" />
            <StatBox value="45.6 million" label="Brazilians with disabilities (23.9%)" source="IBGE, 2010" />
            <StatBox value="1.3 million" label="Special Education enrollments in Brazil" source="INEP, 2023" />
          </div>
          <AcademicReference text="WHO. World Report on Disability. 2011." />

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Types of Disability: Diversity and Specificities</h3>
          <div className="space-y-8">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600"><h5 className="font-bold text-gray-900 mb-3">ASD â€” Autism Spectrum Disorder</h5><p className="text-sm text-gray-700 mb-2">Social communication differences and restricted/repetitive patterns; high heterogeneity.</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> sensory overload, oral-only communication, unpredictable changes, inflexible assessments.</li><li><strong>Strategies:</strong> visual routines, change forewarning, AAC when needed, clear segmented instructions, flexible social participation.</li></ul><AcademicReference text="APA. DSM-5-TR. 2022." /></div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600"><h5 className="font-bold text-gray-900 mb-3">ADHD</h5><p className="text-sm text-gray-700 mb-2">Persistent inattention and/or hyperactivity-impulsivity across contexts.</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> long monotonic tasks, lengthy instructions, punishment for restlessness, time-only assessments.</li><li><strong>Strategies:</strong> stepwise instructions, short goals with immediate feedback, motor breaks, multimodal tasks, extra time, clear rubrics.</li></ul><AcademicReference text="School Psychology Review, 2020." /></div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600"><h5 className="font-bold text-gray-900 mb-3">Down Syndrome</h5><p className="text-sm text-gray-700 mb-2">Specific cognitive profile (visual-social strengths; challenges in working memory and expressive language).</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> fast speech, abstractions without visuals, low expectations, exclusion from challenging tasks.</li><li><strong>Strategies:</strong> visual supports, explicit cumulative instruction, extended time, autonomy opportunities.</li></ul><AcademicReference text="Down Syndrome Research and Practice, 2002." /></div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600"><h5 className="font-bold text-gray-900 mb-3">Depression, Anxiety, Panic, Phobias</h5><p className="text-sm text-gray-700 mb-2">Impacts on energy, focus, motivation, and stress response.</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> stigma, oral assessments under pressure, noisy environments, rigid deadlines.</li><li><strong>Strategies:</strong> reasonable deadline adjustments, alternative assessments, calm spaces, crisis plan, family/health partnership.</li></ul><AcademicReference text="WHO. 2021." /></div>

            <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-600"><h5 className="font-bold text-gray-900 mb-3">Bipolar Disorder and Schizophrenia</h5><p className="text-sm text-gray-700 mb-2">Mood and perception/thought disorders; varied courses and clinical management.</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> labeling, no individualized plans for acute phases, strict attendance without flexibility.</li><li><strong>Strategies:</strong> IEP accommodations by phase, asynchronous materials, safety and belonging first, school-health coordination.</li></ul><AcademicReference text="NICE, 2016." /></div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600"><h5 className="font-bold text-gray-900 mb-3">OCD and Related Disorders</h5><p className="text-sm text-gray-700 mb-2">Obsessions/compulsions consuming time and causing distress.</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> insufficient time, sensory triggers, moral misinterpretations.</li><li><strong>Strategies:</strong> extra time, predictability, environment choices, non-stigmatizing language; therapeutic coordination.</li></ul><AcademicReference text="APA, 2020." /></div>

            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600"><h5 className="font-bold text-gray-900 mb-3">Trauma and Stressors</h5><p className="text-sm text-gray-700 mb-2">History of violence/neglect or critical events leading to hypervigilance and fight/flight/freeze.</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> reactive punishment, unrecognized triggers, lack of predictability.</li><li><strong>Strategies:</strong> trauma-informed practices: clear routines, choices, co-regulation, safety language, personalized regulation plans.</li></ul><AcademicReference text="Review of Education, 2021." /></div>

            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-600"><h5 className="font-bold text-gray-900 mb-3">Eating Disorders</h5><p className="text-sm text-gray-700 mb-2">Distorted body image and compensatory practices; clinical risk.</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> body comments, measure-based activities, schedules conflicting with clinical care.</li><li><strong>Strategies:</strong> neutral language about body, health/function focus, flexible deadlines/attendance, health team partnership.</li></ul><AcademicReference text="APA, 2023." /></div>

            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-600"><h5 className="font-bold text-gray-900 mb-3">Addictions (substance/behavioral)</h5><p className="text-sm text-gray-700 mb-2">Patterns with significant impairment and loss of control.</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> purely punitive responses, stigma, lack of continuous support.</li><li><strong>Strategies:</strong> harm reduction, referral and psychosocial support, flexible study plans, close supervision.</li></ul><AcademicReference text="WHO, 2020." /></div>

            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600"><h5 className="font-bold text-gray-900 mb-3">Conduct/Antisocial Patterns</h5><p className="text-sm text-gray-700 mb-2">Persistent rule-breaking/low empathy; requires pedagogical and safety management.</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> reactive responses, inconsistent rules, unclear limits.</li><li><strong>Strategies:</strong> behavior contracts, positive reinforcement, predictable limits, mediation, multidisciplinary involvement.</li></ul><AcademicReference text="The Lancet, 2010." /></div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600"><h5 className="font-bold text-gray-900 mb-3">Gender Incongruence (ICD-11)</h5><p className="text-sm text-gray-700 mb-2">Health condition (not a mental disorder in ICD-11) that may require psychosocial support.</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> bullying, forced wrong names/pronouns, inaccessible restrooms/locker rooms.</li><li><strong>Strategies:</strong> respect social name/pronouns, clear anti-bullying policies, safe/confidential spaces.</li></ul><AcademicReference text="WHO. ICD-11, 2019." /></div>

            {/* Physical & Sensory */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600"><h5 className="font-bold text-gray-900 mb-3">Morbid Obesity</h5><p className="text-sm text-gray-700 mb-2">Functional impacts (mobility, fatigue, stigma).</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> inadequate furniture, stigmatizing comments, non-adapted physical activities.</li><li><strong>Strategies:</strong> reinforced seating, respectful language, adapted activities, planned breaks.</li></ul><AcademicReference text="NHLBI, 2013." /></div>
            <div className="bg-lime-50 p-6 rounded-lg border-l-4 border-lime-600"><h5 className="font-bold text-gray-900 mb-3">Dwarfism</h5><p className="text-sm text-gray-700 mb-2">Short stature with orthopedic issues.</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> reach, high furniture, bullying.</li><li><strong>Strategies:</strong> adjustable furniture, safe steps, anti-bullying protocols.</li></ul><AcademicReference text="Current Orthopaedic Practice, 2015." /></div>
            <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-600"><h5 className="font-bold text-gray-900 mb-3">Amputation/Spinal Cord Injury</h5><p className="text-sm text-gray-700 mb-2">Mobility/autonomy impacts.</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> lack of ramps/elevators, narrow doors, inaccessible restrooms, poor transport.</li><li><strong>Strategies:</strong> ABNT NBR 9050 accessibility, accessible routes, extra mobility time, peer support.</li></ul><AcademicReference text="ABNT NBR 9050, 2020." /></div>
            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600"><h5 className="font-bold text-gray-900 mb-3">Cerebral Palsy</h5><p className="text-sm text-gray-700 mb-2">Movement/posture disorders from non-progressive brain injury.</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> prolonged handwriting, fast oral communication, inaccessible materials.</li><li><strong>Strategies:</strong> assistive tech (switches, adapted keyboards), extra time, alternatives to handwriting, AAC.</li></ul><AcademicReference text="Dev. Medicine & Child Neurology, 2007." /></div>
            <div className="bg-fuchsia-50 p-6 rounded-lg border-l-4 border-fuchsia-600"><h5 className="font-bold text-gray-900 mb-3">Hearing Impairment</h5><p className="text-sm text-gray-700 mb-2">Partial/total hearing loss; Deaf culture diversity.</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> oral-only classes, no interpreter, no captions.</li><li><strong>Strategies:</strong> sign language, captions, bilingual teachers, front seating, visuals.</li></ul><AcademicReference text="Decreto 5.626/2005." /></div>
            <div className="bg-violet-50 p-6 rounded-lg border-l-4 border-violet-600"><h5 className="font-bold text-gray-900 mb-3">Visual Impairment</h5><p className="text-sm text-gray-700 mb-2">Blindness/low vision; accessible materials and O&M.</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> inaccessible PDFs, no descriptions, visual-only assessments.</li><li><strong>Strategies:</strong> screen readers, image descriptions, Braille/tactiles, audio description.</li></ul><AcademicReference text="WHO. World report on vision, 2019." /></div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-600"><h5 className="font-bold text-gray-900 mb-3">Multiple Disabilities</h5><p className="text-sm text-gray-700 mb-2">Combination (e.g., intellectual + sensory) requiring highly individualized plans.</p><ul className="text-sm text-gray-700 space-y-1 mb-2"><li><strong>Barriers:</strong> standardized responses, inflexible curricula, lack of interdisciplinary team.</li><li><strong>Strategies:</strong> collaborative IEP, co-teaching, portfolio assessment, multimodal learning objects.</li></ul><AcademicReference text="CAST. UDL Guidelines 2.0, 2011." /></div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 mb-6 mt-8"><strong>Cross-cutting pedagogical principles</strong>: UDL, formative assessment, co-teaching, descriptive feedback, high expectations with support, active participation of students and families.</p>
          <QuoteBox quote="Inclusion is not making everyone learn the same way, but ensuring paths so each one learns with dignity." author="Synthesis inspired by Mantoan and CAST" work="Inclusive Education and UDL" year={2011} />
        </section>
      </>
        }
      />
    )
  }
}

