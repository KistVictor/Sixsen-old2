import React, { useEffect } from 'react';
import '../../../styles/relatorio-geo-narre.css';

/**
 * Relatório de exemplo (entregável NARRE SCAN) para a Dra. Paola Falcochio,
 * gerado a partir do briefing real + recon técnico real do site da clínica
 * (vittacorcardiologia.com.br).
 *
 * O semáforo técnico reflete leitura real do site (jun/2026). As notas de
 * Share of Model são um baseline ilustrativo para esta amostra; no produto
 * cada nota vem de um print real das IAs (ver aviso no topo).
 */

const SectionHead = ({ n, title }: { n: string; title: string }) => (
  <div className="agnr-sec-head">
    <span className="n">{n}</span>
    <h2>{title}</h2>
    <span className="line">
      <i />
    </span>
  </div>
);

const RelatorioGeoPaola: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('agnr-active');
    return () => document.body.classList.remove('agnr-active');
  }, []);

  return (
    <div className="agn-report">
      <div className="agnr-bar">
        <div className="mk">
          NA<span>R</span>RE
        </div>
        <div className="doc">Auditoria GEO · NARRE SCAN · amostra</div>
      </div>

      <div className="agnr-note">
        <div className="box">
          <b>Relatório de exemplo.</b> O diagnóstico técnico (seção 04) vem de leitura real do
          site em junho de 2026. As notas de Share of Model (seção 03) são um baseline
          ilustrativo para esta amostra; no produto, cada nota é registrada com print das
          respostas reais de ChatGPT, Gemini, Perplexity e Claude.
        </div>
      </div>

      <div className="agnr-wrap">
        {/* ---------- capa ---------- */}
        <header className="agnr-cover">
          <div className="eyebrow">Auditoria GEO de Entrada</div>
          <h1>
            A IA ainda não sabe
            <br />
            quem é a Dra. Paola.
          </h1>
          <p className="who">
            <b>Dra. Paola Falcochio</b> · Cardiologista especialista em arritmias cardíacas ·
            São Paulo/SP
          </p>
          <div className="meta">
            <span>Junho de 2026</span>
            <span>Nicho: arritmias cardíacas</span>
            <span>Vínculo: InCor</span>
          </div>

          <div className="agnr-hero">
            <div className="agnr-stat lead">
              <div className="v">~8%</div>
              <div className="k">SoM estimado atual</div>
              <div className="sub">baseline da amostra</div>
            </div>
            <div className="agnr-stat">
              <div className="v">4</div>
              <div className="k">Gaps críticos</div>
              <div className="sub">bloqueando visibilidade</div>
            </div>
            <div className="agnr-stat">
              <div className="v">90 dias</div>
              <div className="k">Para resultado</div>
              <div className="sub">com a estratégia certa</div>
            </div>
          </div>
        </header>

        {/* ---------- 01 resumo executivo ---------- */}
        <section className="agnr-sec">
          <SectionHead n="01" title="Resumo executivo" />
          <p className="agnr-p">
            A Dra. Paola Falcochio tem credenciais de <b>altíssimo nível</b> para arritmias
            cardíacas: título de especialista, 11 anos de prática e vínculo com o InCor, o maior
            centro de cardiologia da América Latina. O problema não é competência. É que{' '}
            <span className="accent">essa autoridade não existe de forma estruturada na web</span>,
            então as IAs não têm uma entidade "Dra. Paola Falcochio" para citar.
          </p>
          <p className="agnr-p">
            Ela não tem site pessoal. Sua presença vive no site da clínica (Vittacor, em Wix),
            que <b>menciona o nome dela apenas duas vezes</b> na home e não traz o vínculo com o
            InCor em nenhum lugar. Para um modelo de linguagem, ela é praticamente invisível como
            especialista, enquanto os grandes nomes de arritmia de São Paulo dominam as respostas.
            A boa notícia: a base existe, falta a engenharia de dados que liga essa base aos
            modelos.
          </p>
        </section>

        {/* ---------- 02 perfil ---------- */}
        <section className="agnr-sec">
          <SectionHead n="02" title="Perfil da cliente" />
          <table className="agnr-table">
            <tbody>
              <tr>
                <td style={{ width: '34%' }}>
                  <b>Nome</b>
                </td>
                <td>Dra. Paola Falcochio (Paola Pretti N. Ferreira Falcochio)</td>
              </tr>
              <tr>
                <td>
                  <b>Especialidade</b>
                </td>
                <td>Cardiologia · subespecialista em arritmias cardíacas (fibrilação e flutter atrial, taquicardias supraventriculares e ventriculares, extrassístoles)</td>
              </tr>
              <tr>
                <td>
                  <b>Categoria-alvo nas IAs</b>
                </td>
                <td>Cardiologista especialista em arritmias cardíacas em São Paulo</td>
              </tr>
              <tr>
                <td>
                  <b>Não quer ser enquadrada</b>
                </td>
                <td>Cardiologista de doenças valvares</td>
              </tr>
              <tr>
                <td>
                  <b>Autoridade real</b>
                </td>
                <td>11 anos em arritmias · título de especialista em cardiologia e em arritmias · vínculo com o InCor</td>
              </tr>
              <tr>
                <td>
                  <b>Canais ativos</b>
                </td>
                <td>Site da clínica (vittacorcardiologia.com.br) · Instagram e TikTok @drapaola.cardio · LinkedIn</td>
              </tr>
              <tr>
                <td>
                  <b>Público</b>
                </td>
                <td>Adultos e idosos, alto nível socioeconômico, 30 a 70 anos, São Paulo</td>
              </tr>
              <tr>
                <td>
                  <b>Meta declarada</b>
                </td>
                <td>12 consultas pagantes por mês; ser reconhecida como ultra especialista em arritmias</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ---------- 03 SoM baseline ---------- */}
        <section className="agnr-sec">
          <SectionHead n="03" title="Visibilidade nas IAs — SoM baseline" />
          <p className="agnr-p">
            O Share of Model mede em quantas das queries prioritárias do nicho a entidade aparece
            nas respostas das IAs. Abaixo, o baseline estimado para esta amostra. No produto, cada
            linha é confirmada rodando a query na plataforma e salvando o print.
          </p>
          <table className="agnr-table">
            <thead>
              <tr>
                <th>Plataforma</th>
                <th className="num">SoM estimado</th>
                <th>Leitura</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>ChatGPT (base)</b>
                </td>
                <td className="num">
                  <span className="pill bad">~3%</span>
                </td>
                <td>Sem entidade própria, sem Wikipedia/Wikidata, sem menções acadêmicas indexadas. Não aparece em consultas de especialista.</td>
              </tr>
              <tr>
                <td>
                  <b>Perplexity</b>
                </td>
                <td className="num">
                  <span className="pill warn">~12%</span>
                </td>
                <td>Maior potencial via RAG, mas o site é da clínica e fala pouco de arritmias com profundidade. Pode citar a clínica, não a especialista.</td>
              </tr>
              <tr>
                <td>
                  <b>Google AI Overviews</b>
                </td>
                <td className="num">
                  <span className="pill warn">~10%</span>
                </td>
                <td>Depende do orgânico local. Sem schema Physician e sem perfil completo em diretórios médicos, o AIO não extrai a entidade.</td>
              </tr>
              <tr>
                <td>
                  <b>Gemini</b>
                </td>
                <td className="num">
                  <span className="pill bad">~5%</span>
                </td>
                <td>Vantagem natural para quem tem Google Business e Knowledge Panel. Hoje não há sinal de entidade pessoal.</td>
              </tr>
              <tr>
                <td>
                  <b>Claude</b>
                </td>
                <td className="num">
                  <span className="pill bad">~4%</span>
                </td>
                <td>Prioriza fontes verificáveis e consistentes. Sem corpus consistente sobre a Dra. Paola, não a recomenda.</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ---------- 04 semaforo tecnico (REAL) ---------- */}
        <section className="agnr-sec">
          <SectionHead n="04" title="Diagnóstico técnico — semáforo GEO" />
          <p className="agnr-p">
            Leitura real do site da clínica (vittacorcardiologia.com.br), junho de 2026.
            Plataforma: <b>Wix</b>.
          </p>
          <table className="agnr-table">
            <thead>
              <tr>
                <th style={{ width: '34%' }}>Item</th>
                <th>Status</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HTTPS / SSL</td>
                <td>
                  <span className="pill ok">OK</span>
                </td>
                <td>Certificado válido, redireciona para www.</td>
              </tr>
              <tr>
                <td>robots.txt — bots de IA</td>
                <td>
                  <span className="pill ok">OK</span>
                </td>
                <td>Libera GPTBot, ClaudeBot, PerplexityBot. Bloqueia só PetalBot.</td>
              </tr>
              <tr>
                <td>Sitemap XML</td>
                <td>
                  <span className="pill ok">OK</span>
                </td>
                <td>Presente, com páginas, blog e agendamento.</td>
              </tr>
              <tr>
                <td>og:type</td>
                <td>
                  <span className="pill ok">OK</span>
                </td>
                <td>Configurado como "website" corretamente.</td>
              </tr>
              <tr>
                <td>Schema WebSite</td>
                <td>
                  <span className="pill warn">PARCIAL</span>
                </td>
                <td>Existe só o schema WebSite genérico do Wix.</td>
              </tr>
              <tr>
                <td>Schema Physician / Person</td>
                <td>
                  <span className="pill bad">AUSENTE</span>
                </td>
                <td>A Dra. Paola não está estruturada como entidade médica. Credenciais invisíveis para os LLMs.</td>
              </tr>
              <tr>
                <td>Schema MedicalBusiness / FAQPage</td>
                <td>
                  <span className="pill bad">AUSENTE</span>
                </td>
                <td>Sem schema da clínica como negócio médico, sem FAQ estruturado.</td>
              </tr>
              <tr>
                <td>Identidade de entidade (Paola)</td>
                <td>
                  <span className="pill bad">CRÍTICO</span>
                </td>
                <td>Nome aparece só 2 vezes na home. Sem site pessoal. Título e og são da clínica, não da especialista.</td>
              </tr>
              <tr>
                <td>llms.txt</td>
                <td>
                  <span className="pill warn">GENÉRICO</span>
                </td>
                <td>Existe, mas é o padrão automático do Wix (sobre a clínica e MCP). Não posiciona a Paola nem arritmias.</td>
              </tr>
              <tr>
                <td>Autoridade InCor no site</td>
                <td>
                  <span className="pill bad">AUSENTE</span>
                </td>
                <td>Zero menções ao InCor. O maior ativo de autoridade dela não está em lugar nenhum.</td>
              </tr>
              <tr>
                <td>Profundidade de conteúdo</td>
                <td>
                  <span className="pill warn">PARCIAL</span>
                </td>
                <td>Há blog do Wix, mas sem cluster aprofundado de arritmias assinado por ela.</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ---------- 05 EEAT ---------- */}
        <section className="agnr-sec">
          <SectionHead n="05" title="E-E-A-T e autoridade de entidade" />
          <p className="agnr-p">
            É aqui que está o maior contraste do caso. A Dra. Paola tem E-E-A-T de nível
            hospitalar, mas nada disso está legível para as IAs.
          </p>
          <table className="agnr-table">
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>Evidência real</th>
                <th>O que falta para a IA ver</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Experiência</b>
                </td>
                <td>11 anos tratando arritmias.</td>
                <td>Cases e conteúdo em primeira pessoa, com schema, assinados por ela.</td>
              </tr>
              <tr>
                <td>
                  <b>Expertise</b>
                </td>
                <td>Título de especialista em cardiologia e em arritmias.</td>
                <td>Página de autora com schema Person + credenciais e qualificação verificável.</td>
              </tr>
              <tr>
                <td>
                  <b>Autoridade</b>
                </td>
                <td>Vínculo com o InCor.</td>
                <td>O vínculo precisa estar publicado e citável. Hoje há 0 menções ao InCor no site.</td>
              </tr>
              <tr>
                <td>
                  <b>Confiabilidade</b>
                </td>
                <td>Clínica com agendamento, presença em redes.</td>
                <td>Perfis em diretórios médicos (Doctoralia) completos, avaliações estruturadas, NAP consistente.</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ---------- 06 gap vs concorrentes ---------- */}
        <section className="agnr-sec">
          <SectionHead n="06" title="Gap analysis — Paola vs referências do nicho" />
          <p className="agnr-p">
            Os nomes que dominam "arritmia cardíaca em São Paulo" nas IAs são pesquisadores e
            professores com presença institucional e acadêmica forte (muitos do próprio InCor).
            A Paola está no mesmo ecossistema, mas sem a camada de dados que os torna citáveis.
          </p>
          <table className="agnr-table">
            <thead>
              <tr>
                <th>Entidade</th>
                <th>Presença nas IAs</th>
                <th>Schema</th>
                <th>Sinal dominante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Dra. Paola Falcochio</b>
                </td>
                <td>
                  <span className="pill bad">Baixa</span>
                </td>
                <td>Nenhum (pessoa)</td>
                <td>Credencial forte, dado ausente</td>
              </tr>
              <tr>
                <td>Maurício Scanavacca</td>
                <td>
                  <span className="pill ok">Alta</span>
                </td>
                <td>Parcial</td>
                <td>Produção acadêmica, InCor, mídia</td>
              </tr>
              <tr>
                <td>Luciana Sacilotto</td>
                <td>
                  <span className="pill ok">Alta</span>
                </td>
                <td>Parcial</td>
                <td>Publicações, palestras, entrevistas</td>
              </tr>
              <tr>
                <td>Francisco Darrieux</td>
                <td>
                  <span className="pill ok">Alta</span>
                </td>
                <td>Parcial</td>
                <td>Autoridade acadêmica indexada</td>
              </tr>
              <tr>
                <td>Cristiano Pisani</td>
                <td>
                  <span className="pill warn">Média</span>
                </td>
                <td>Parcial</td>
                <td>Conteúdo técnico e institucional</td>
              </tr>
            </tbody>
          </table>
          <p className="agnr-p" style={{ marginTop: '1rem', fontSize: 13, color: 'var(--muted)' }}>
            Conclusão: o gap não é de mérito clínico, é 100% de engenharia de dados. As
            referências são citadas porque deixaram rastro estruturado e verificável. A Paola
            ainda não.
          </p>
        </section>

        {/* ---------- 07 top gaps ---------- */}
        <section className="agnr-sec">
          <SectionHead n="07" title="Top gaps críticos — por impacto" />
          <div className="agnr-gaps">
            <div className="agnr-gap crit">
              <span className="gn">01</span>
              <div>
                <div className="gt">
                  Sem identidade de entidade própria <span className="pill orn">crítico</span>
                </div>
                <div className="gd">
                  Não há site pessoal e o nome aparece 2 vezes na home da clínica. A IA não tem
                  uma entidade "Dra. Paola Falcochio" para representar. É a fundação de tudo.
                </div>
              </div>
            </div>
            <div className="agnr-gap crit">
              <span className="gn">02</span>
              <div>
                <div className="gt">
                  Schema Physician/Person ausente <span className="pill orn">crítico</span>
                </div>
                <div className="gd">
                  Só existe o schema WebSite do Wix. As credenciais (especialista, InCor, 11 anos)
                  não estão estruturadas, então os LLMs não as enxergam.
                </div>
              </div>
            </div>
            <div className="agnr-gap crit">
              <span className="gn">03</span>
              <div>
                <div className="gt">
                  Autoridade InCor invisível <span className="pill orn">alto</span>
                </div>
                <div className="gd">
                  O maior ativo de autoridade dela não tem nenhuma menção no site. Precisa ser
                  publicado, contextualizado e citável.
                </div>
              </div>
            </div>
            <div className="agnr-gap crit">
              <span className="gn">04</span>
              <div>
                <div className="gt">
                  llms.txt genérico e conteúdo raso <span className="pill orn">alto</span>
                </div>
                <div className="gd">
                  O llms.txt é o padrão automático do Wix, centrado na clínica. Falta um cluster de
                  arritmias com profundidade, assinado pela Dra. Paola, no formato que as IAs citam.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 08 plano 90 dias ---------- */}
        <section className="agnr-sec">
          <SectionHead n="08" title="Plano de ação — 90 dias" />
          <div className="agnr-plan">
            <div className="agnr-month">
              <div className="mh">Mês 1</div>
              <div className="mt">Fundação de entidade</div>
              <ul>
                <li>
                  <span className="mk" />
                  Criar o hub de entidade da Dra. Paola (página de autora dedicada)
                </li>
                <li>
                  <span className="mk" />
                  Implementar schema Person/Physician + MedicalBusiness
                </li>
                <li>
                  <span className="mk" />
                  Publicar o vínculo com o InCor e as credenciais, com schema
                </li>
                <li>
                  <span className="mk" />
                  Reescrever o llms.txt posicionando arritmias e a especialista
                </li>
              </ul>
              <div className="goal">
                Meta SoM: <b>~22%</b>
              </div>
            </div>
            <div className="agnr-month">
              <div className="mh">Mês 2</div>
              <div className="mt">Conteúdo GEO</div>
              <ul>
                <li>
                  <span className="mk" />
                  Hub "arritmias cardíacas" + satélites (fibrilação atrial, palpitações, quando procurar)
                </li>
                <li>
                  <span className="mk" />
                  Resposta direta e TL;DR nos primeiros parágrafos
                </li>
                <li>
                  <span className="mk" />
                  Schema Article e FAQPage em cada peça
                </li>
                <li>
                  <span className="mk" />
                  Perfil completo em Doctoralia e diretórios médicos
                </li>
              </ul>
              <div className="goal">
                Meta SoM: <b>~38%</b>
              </div>
            </div>
            <div className="agnr-month">
              <div className="mh">Mês 3</div>
              <div className="mt">Autoridade e PR</div>
              <ul>
                <li>
                  <span className="mk" />
                  Presença acadêmica indexável (Lattes, perfis de pesquisa)
                </li>
                <li>
                  <span className="mk" />
                  Entrevistas e participações citáveis sobre arritmias
                </li>
                <li>
                  <span className="mk" />
                  Avaliar candidatura a Wikidata como médica especialista
                </li>
                <li>
                  <span className="mk" />
                  Consistência de NAP e identidade em todos os canais
                </li>
              </ul>
              <div className="goal">
                Meta SoM: <b>~55%</b>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 09 metas SoM ---------- */}
        <section className="agnr-sec">
          <SectionHead n="09" title="Metas de Share of Model" />
          <table className="agnr-table">
            <thead>
              <tr>
                <th>Período</th>
                <th className="num">Meta SoM</th>
                <th>Plataforma principal</th>
                <th>O que sustenta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Baseline (jun/26)</td>
                <td className="num">~8%</td>
                <td>Perplexity</td>
                <td>Estado atual</td>
              </tr>
              <tr>
                <td>30 dias</td>
                <td className="num">
                  <span className="pill orn">~22%</span>
                </td>
                <td>Perplexity + Google AIO</td>
                <td>Entidade + schema + llms.txt</td>
              </tr>
              <tr>
                <td>60 dias</td>
                <td className="num">
                  <span className="pill orn">~38%</span>
                </td>
                <td>Perplexity + Google AIO</td>
                <td>Cluster de arritmias + diretórios</td>
              </tr>
              <tr>
                <td>90 dias</td>
                <td className="num">
                  <span className="pill orn">~55%</span>
                </td>
                <td>Todas as plataformas</td>
                <td>Autoridade indexada + consistência</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ---------- 10 proximo passo ---------- */}
        <section className="agnr-sec" style={{ borderBottom: 'none' }}>
          <SectionHead n="10" title="Próximo passo recomendado" />
          <div className="agnr-next">
            <h3>NARRE BUILD</h3>
            <p className="agnr-p" style={{ margin: 0 }}>
              A auditoria mostra o caminho. A implementação é o produto NARRE BUILD: construção da
              entidade da Dra. Paola, schema Physician + MedicalBusiness, reescrita do llms.txt,
              hub de conteúdo de arritmias e publicação da autoridade InCor. Em 30 a 45 dias, a IA
              para de citar só os concorrentes e passa a reconhecer a Dra. Paola como especialista
              em arritmias.
            </p>
            <div className="price">a partir de R$ 30K</div>
          </div>
        </section>

        <footer className="agnr-foot">
          <span>
            Auditoria GEO · Dra. Paola Falcochio · <b>junho 2026</b>
          </span>
          <span>
            <b>NARRE</b> · Engenharia de Dados &amp; Governança Algorítmica
          </span>
        </footer>
      </div>
    </div>
  );
};

export default RelatorioGeoPaola;
