import React, { useCallback, useEffect, useState } from 'react';
import '../../../styles/auditoria-geo-narre.css';

/**
 * Deck de apresentação "Content GEO" (Sixsen × Narre).
 *
 * Segundo projeto da esteira: um grupo de agentes que produz UM post de blog
 * completo, no molde atual da narre.com.br/blog, do tema à versão publicável.
 * Aplica a marca da Narre (brand kit v5), reusa a folha de estilo do deck da
 * Auditoria GEO. Rota standalone, navegação por teclado/clique e barra de
 * progresso.
 */

const Chevron = ({ on = false, size = 22 }: { on?: boolean; size?: number }) => (
  <span className={`agn-chev${on ? ' on' : ''}`} aria-hidden="true">
    <svg width={size} height={size * 0.82} viewBox="0 0 22 18" fill="none">
      <path
        d="M2 2 H10 L18 9 L10 16 H2 L9 9 Z"
        stroke="currentColor"
        strokeWidth={on ? 1.5 : 1}
        fill="none"
      />
    </svg>
  </span>
);

const Rule = () => (
  <div className="agn-rule" aria-hidden="true">
    <i />
    <i />
    <i />
  </div>
);

/* ---- conteúdo dos slides ---- */

const SlideCover = () => (
  <div className="agn-inner agn-stagger">
    <div className="agn-cover-top">
      <div>
        <div className="agn-wordmark">
          NA<span>R</span>RE
        </div>
        <div className="agn-wordmark-sub">Engenharia de Dados &amp; Governança Algorítmica</div>
      </div>
      <Rule />
    </div>
    <div className="agn-kicker">
      <span className="tick">●</span> Proposta Sixsen × Narre · Content GEO
    </div>
    <div className="agn-slogan">
      O blog da Narre é a prova viva do método.
      <b>Agora um motor o escreve, aplicando o próprio método.</b>
    </div>
    <div className="agn-lead">
      Um grupo de agentes que transforma um tema em um{' '}
      <span className="agn-accent">post completo</span>, no molde exato do blog atual:
      pesquisado de verdade, auditado contra o cluster, otimizado para{' '}
      <span className="agn-white">busca e para IA</span>, pronto para publicar.
    </div>
    <div className="agn-cover-foot">
      <span>
        Construção: <b>Sixsen</b>
      </span>
      <span>
        Operação: <b>Narre</b>
      </span>
      <span>
        Junho 2026 · <b>v1</b>
      </span>
    </div>
  </div>
);

const SlideContexto = () => (
  <div className="agn-inner agn-split">
    <div className="agn-stacklg agn-stagger">
      <div className="agn-eyebrow">01 · O ponto de partida</div>
      <h2 className="agn-h2">Conteúdo GEO de verdade dá trabalho</h2>
      <Rule />
    </div>
    <div className="agn-stacklg agn-stagger">
      <p className="agn-lead">
        O blog da Narre já tem posts de alto nível. Cada um deles exige pesquisa, estrutura
        certa e densidade citável. Escrever assim, post após post, é o gargalo de qualquer
        operação de conteúdo séria.
      </p>
      <div className="agn-list">
        <div className="li">
          <span className="mk" />
          <p>Um post raso de 300 palavras não treina modelo nenhum. O bom custa horas.</p>
        </div>
        <div className="li">
          <span className="mk" />
          <p>
            Sem auditar o que já existe, o blog repete tema e perde a força de{' '}
            <b>cluster</b>.
          </p>
        </div>
        <div className="li">
          <span className="mk" />
          <p>Ferramenta genérica de IA produz texto plausível, não conteúdo citável por IA.</p>
        </div>
      </div>
    </div>
  </div>
);

const SlideProposta = () => (
  <div className="agn-inner agn-stacklg agn-stagger">
    <div className="agn-eyebrow">02 · A proposta</div>
    <h2 className="agn-h2">
      Uma redação inteira, executada por <span className="agn-accent">agentes</span>
    </h2>
    <p className="agn-lead">
      Não é um botão de gerar texto. É a divisão de trabalho de uma redação real (pesquisador,
      estrategista, redator, SEO, editor, QA) codificada na metodologia da própria Narre. O
      operador entra só nos dois momentos certos.
    </p>
    <div className="agn-flow" style={{ marginTop: '1.4rem' }}>
      <div className="agn-step">
        <span className="sn">→</span>
        <span className="st">Tema do post</span>
        <span className="sd">O operador dá. O agente sugere se pedirem.</span>
        <span className="stag">Entrada</span>
      </div>
      <div className="agn-step" style={{ flex: '0 0 auto', justifyContent: 'center', minWidth: 64 }}>
        <Chevron on size={30} />
      </div>
      <div className="agn-step human">
        <span className="sn">◆</span>
        <span className="st">Grupo de agentes</span>
        <span className="sd">Pipeline de 8 etapas em Claude.</span>
        <span className="stag">Processo</span>
      </div>
      <div className="agn-step" style={{ flex: '0 0 auto', justifyContent: 'center', minWidth: 64 }}>
        <Chevron on size={30} />
      </div>
      <div className="agn-step">
        <span className="sn">▣</span>
        <span className="st">Post publicável</span>
        <span className="sd">No molde do blog, pronto para subir.</span>
        <span className="stag">Saída</span>
      </div>
    </div>
  </div>
);

const SlideOnde = () => (
  <div className="agn-inner agn-split">
    <div className="agn-stacklg agn-stagger">
      <div className="agn-eyebrow">03 · Decisão técnica</div>
      <h2 className="agn-h2">Por que dentro do Claude</h2>
      <Rule />
      <p className="agn-lead">
        O post exige <span className="agn-white">pesquisa web real</span> e várias passagens de
        revisão. Isso roda com qualidade dentro do Claude Desktop ou do Claude Code.
      </p>
    </div>
    <div className="agn-grid cols-1 agn-stagger" style={{ gap: 3 }}>
      <div className="agn-card">
        <span className="cn">01</span>
        <span className="ct">Pesquisa real, não chute</span>
        <span className="cd">
          O agente busca dados e fontes atuais na web durante a própria conversa. O post fica
          factual e defensável.
        </span>
      </div>
      <div className="agn-card">
        <span className="cn">02</span>
        <span className="ct">Custo de token coberto</span>
        <span className="cd">
          Rodando no Claude Desktop, o consumo entra no plano Pro/Max. Sem custo de API por
          post.
        </span>
      </div>
      <div className="agn-card lead-orange">
        <span className="cn">03</span>
        <span className="ct">Mesma operação do Scan</span>
        <span className="cd">
          O mesmo ambiente do primeiro projeto. Quem opera a Auditoria GEO opera isto, sem
          ferramenta nova.
        </span>
      </div>
    </div>
  </div>
);

const moldeItens = [
  ['01', 'Frontmatter completo', 'title, description, tags, relatedPosts, FAQ'],
  ['02', 'Abertura com cena', 'Põe o leitor numa situação concreta'],
  ['03', 'Seções citáveis', 'Cada H2 abre com a resposta direta'],
  ['04', 'Listas e tabelas', 'Critérios, faixas, comparações'],
  ['05', 'Dado com fonte', 'Afirmação factual sempre ancorada'],
  ['06', 'Ponte para o cluster', 'Fecha mandando ao próximo post'],
];

const SlideMolde = () => (
  <div className="agn-inner agn-split">
    <div className="agn-stacklg agn-stagger">
      <div className="agn-eyebrow">04 · A régua de saída</div>
      <h2 className="agn-h2">O molde do blog, capturado</h2>
      <Rule />
      <p className="agn-lead">
        A saída tem que ser indistinguível dos posts atuais. O molde foi extraído dos posts
        reais: <span className="agn-white">E-E-A-T e GEO</span>,{' '}
        <span className="agn-white">Auditoria GEO de 10 pontos</span>, e os demais do cluster.
      </p>
    </div>
    <div className="agn-grid cols-2 agn-stagger">
      {moldeItens.map(([n, t, d]) => (
        <div className="agn-card" key={n} style={{ gap: '0.35rem', padding: '1.1rem 1.2rem' }}>
          <span className="cn" style={{ fontSize: 22 }}>
            {n}
          </span>
          <span className="ct" style={{ fontSize: 13 }}>
            {t}
          </span>
          <span className="cd" style={{ fontSize: 11.5 }}>
            {d}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const pipeline: Array<{ n: string; t: string; d: string; tag: string; human?: boolean }> = [
  { n: '00', t: 'Intake', d: 'Trava tema, query-alvo, leitor e ângulo.', tag: 'Operador', human: true },
  { n: '01', t: 'Pesquisa', d: 'Busca web real: dados, fontes, gaps.', tag: 'Auto' },
  { n: '02', t: 'Auditoria do blog', d: 'Onde encaixa, o que linkar, dedup.', tag: 'Auto' },
  { n: '03', t: 'Brief + Outline', d: 'Keyword, H1, esqueleto, FAQ, ângulo.', tag: 'Operador', human: true },
  { n: '04', t: 'Redação', d: 'Escreve no molde, com frontmatter.', tag: 'Auto' },
  { n: '05', t: 'SEO/GEO check', d: 'Meta, schema, links, densidade citável.', tag: 'Auto' },
  { n: '06', t: 'Edição + voz', d: 'Precisão, voz da marca, legibilidade.', tag: 'Auto' },
  { n: '07', t: 'Quality Gate', d: 'Portão GEO por seção. GO ou revisar.', tag: 'Operador', human: true },
];

const SlidePipeline = () => (
  <div className="agn-inner agn-stacklg agn-stagger">
    <div className="agn-eyebrow">05 · O motor</div>
    <h2 className="agn-h2">
      Pipeline de <span className="agn-accent">8 etapas</span>
    </h2>
    <div className="agn-flow" style={{ marginTop: '1.1rem' }}>
      {pipeline.map((s) => (
        <div className={`agn-step${s.human ? ' human' : ''}`} key={s.n}>
          <span className="sn">{s.n}</span>
          <span className="st">{s.t}</span>
          <span className="sd">{s.d}</span>
          <span className="stag">{s.tag}</span>
        </div>
      ))}
    </div>
    <p className="agn-lead" style={{ fontSize: 13, marginTop: '0.4rem' }}>
      Dois <span className="agn-accent">checkpoints humanos</span> (em laranja): validar o brief
      antes de escrever e aprovar o post antes de publicar. O resto roda em sequência, cada
      agente entregando um artefato para o próximo.
    </p>
  </div>
);

const SlideGate = () => (
  <div className="agn-inner agn-split">
    <div className="agn-stacklg agn-stagger">
      <div className="agn-eyebrow">06 · O coração defensável</div>
      <h2 className="agn-h2">Citável por IA, seção por seção</h2>
      <Rule />
      <p className="agn-lead">
        O que separa "texto plausível" de "fonte citada pelas IAs" é a densidade citável. O
        Quality Gate testa cada H2 antes de liberar o post.
      </p>
    </div>
    <div className="agn-stacklg agn-stagger">
      <div className="agn-list">
        <div className="li">
          <span className="mk" />
          <p>
            <b>Resposta direta:</b> a seção abre respondendo a pergunta.
          </p>
        </div>
        <div className="li">
          <span className="mk" />
          <p>
            <b>Um conceito só:</b> nada de seção que trata de três coisas.
          </p>
        </div>
        <div className="li">
          <span className="mk" />
          <p>
            <b>Pronome resolvido:</b> faz sentido extraído fora de contexto.
          </p>
        </div>
        <div className="li">
          <span className="mk" />
          <p>
            <b>Dado com fonte:</b> toda afirmação factual ancorada.
          </p>
        </div>
        <div className="li">
          <span className="mk" />
          <p>
            <b>Abertura autossuficiente:</b> a primeira frase se sustenta sozinha.
          </p>
        </div>
      </div>
      <p className="agn-lead" style={{ fontSize: 12.5, color: 'var(--muted)' }}>
        Qualquer falha devolve para a redação com instrução específica. Nada passa por inércia.
      </p>
    </div>
  </div>
);

const SlideCluster = () => (
  <div className="agn-inner agn-stacklg agn-stagger">
    <div className="agn-eyebrow">07 · A auditoria do blog</div>
    <h2 className="agn-h2">
      Todo post entra no <span className="agn-accent">cluster</span>
    </h2>
    <p className="agn-lead">
      Antes de escrever, o agente lê o que já existe. Hoje o blog tem nove posts vivos. O novo
      post sabe onde encaixa, em quem linkar e o que não repetir.
    </p>
    <div className="agn-toc" style={{ marginTop: '0.8rem' }}>
      {[
        ['01', 'O que é GEO (hub)'],
        ['02', 'Como o ChatGPT recomenda empresas'],
        ['03', 'GEO vs SEO: diferenças'],
        ['04', 'Estrutura de conteúdo para GEO'],
        ['05', 'Schema.org e dados estruturados'],
        ['06', 'Perplexity, ChatGPT e Gemini'],
        ['07', 'E-E-A-T e GEO'],
        ['08', 'Auditoria GEO de 10 pontos'],
        ['09', 'GEO para pequenas empresas'],
      ].map(([n, t]) => (
        <div className="row" key={n}>
          <span className="rn">{n}</span>
          <span className="rt">{t}</span>
        </div>
      ))}
    </div>
    <p className="agn-lead" style={{ fontSize: 12.5, color: 'var(--muted)' }}>
      Linkagem interna descritiva e dedup: o que faz seis artigos interligados parecerem mais
      especializados que cinquenta soltos.
    </p>
  </div>
);

const SlideSaida = () => (
  <div className="agn-inner agn-split">
    <div className="agn-stacklg agn-stagger">
      <div className="agn-eyebrow">08 · O entregável</div>
      <h2 className="agn-h2">Pronto para subir</h2>
      <Rule />
      <p className="agn-lead">
        A saída não é um rascunho para alguém formatar. É o pacote completo, no schema que o
        blog já usa.
      </p>
    </div>
    <div className="agn-grid cols-1 agn-stagger" style={{ gap: 3 }}>
      <div className="agn-card lead-orange">
        <span className="cn">01</span>
        <span className="ct">Arquivo .md no molde</span>
        <span className="cd">Frontmatter completo, corpo estruturado, FAQ, links internos.</span>
      </div>
      <div className="agn-card">
        <span className="cn">02</span>
        <span className="ct">Bloco JSON-LD</span>
        <span className="cd">Schema BlogPosting e FAQPage prontos para colar.</span>
      </div>
      <div className="agn-card">
        <span className="cn">03</span>
        <span className="ct">Checklist de publicação</span>
        <span className="cd">Imagem hero, pubDate, slug, categoria, relatedPosts.</span>
      </div>
    </div>
  </div>
);

const SlideComercial = () => (
  <div className="agn-inner agn-stacklg agn-stagger">
    <div className="agn-eyebrow">09 · Lógica comercial</div>
    <h2 className="agn-h2">
      O motor por trás do <span className="agn-accent">blog estratégico</span>
    </h2>
    <p className="agn-lead">
      A fase 2 da metodologia da Narre inclui blog estratégico em todos os planos. Este motor é
      o que torna esse conteúdo entregável em escala, com a mesma régua.
    </p>
    <div className="agn-funnel" style={{ marginTop: '1rem', alignItems: 'stretch' }}>
      <div className="agn-prod active">
        <span className="pl">Aplicação 01</span>
        <span className="pn">Blog da Narre</span>
        <span className="ph">A prova viva do método, alimentada com cadência.</span>
        <span className="pp">Interno</span>
      </div>
      <div className="agn-prod dim">
        <span className="pl">Aplicação 02</span>
        <span className="pn">Conteúdo dos planos</span>
        <span className="ph">O blog estratégico entregue a cada cliente, na régua.</span>
        <span className="pp">Escala</span>
      </div>
      <div className="agn-prod dim">
        <span className="pl">Aplicação 03</span>
        <span className="pn">Esteira de conteúdo</span>
        <span className="ph">Base para hub e satélites de cada cliente.</span>
        <span className="pp">Próximo</span>
      </div>
    </div>
    <p className="agn-lead" style={{ fontSize: 12.5, color: 'var(--muted)' }}>
      O mesmo pipeline, trocando o briefing de entrada e a marca de saída, serve cliente após
      cliente.
    </p>
  </div>
);

const SlideFechamento = () => (
  <div className="agn-inner agn-split">
    <div className="agn-stacklg agn-stagger">
      <div className="agn-eyebrow">10 · Prazo e próximos passos</div>
      <h2 className="agn-h2">O que vem agora</h2>
      <Rule />
      <div className="agn-list" style={{ marginTop: '0.4rem' }}>
        <div className="li">
          <span className="mk" />
          <p>
            <b>Entrega inicial:</b> 1 a 2 semanas para o motor produzindo o primeiro post.
          </p>
        </div>
        <div className="li">
          <span className="mk" />
          <p>
            <b>Lapidação:</b> ajuste fino do molde e da voz contra os posts reais.
          </p>
        </div>
        <div className="li">
          <span className="mk" />
          <p>
            <b>Decisão da Narre:</b> prioridade entre este motor e a Auditoria GEO.
          </p>
        </div>
      </div>
    </div>
    <div className="agn-stacklg agn-stagger">
      <div className="agn-card lead-orange" style={{ gap: '0.6rem' }}>
        <span className="agn-eyebrow" style={{ marginBottom: 0 }}>
          Investimento
        </span>
        <span className="agn-bignum on" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)' }}>
          a definir
        </span>
        <span className="cd">
          Fechado após o entendimento do escopo com a Narre. Modelo: setup de construção +
          eventual licença de operação.
        </span>
      </div>
      <div className="agn-cover-foot" style={{ marginTop: '0.4rem' }}>
        <span>
          Próxima reunião: <b>quarta-feira</b>
        </span>
        <span>
          <b>Sixsen × Narre</b>
        </span>
      </div>
    </div>
  </div>
);

const slides: Array<{ id: string; node: React.ReactNode; cover?: boolean }> = [
  { id: 'cover', node: <SlideCover />, cover: true },
  { id: 'contexto', node: <SlideContexto /> },
  { id: 'proposta', node: <SlideProposta /> },
  { id: 'onde', node: <SlideOnde /> },
  { id: 'molde', node: <SlideMolde /> },
  { id: 'pipeline', node: <SlidePipeline /> },
  { id: 'gate', node: <SlideGate /> },
  { id: 'cluster', node: <SlideCluster /> },
  { id: 'saida', node: <SlideSaida /> },
  { id: 'comercial', node: <SlideComercial /> },
  { id: 'fechamento', node: <SlideFechamento /> },
];

const ContentGeoNarre: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const go = useCallback(
    (dir: number) => {
      setCurrent((c) => Math.min(Math.max(c + dir, 0), total - 1));
    },
    [total]
  );

  useEffect(() => {
    document.body.classList.add('agn-active');
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        go(1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        go(-1);
      } else if (e.key === 'Home') {
        setCurrent(0);
      } else if (e.key === 'End') {
        setCurrent(total - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('agn-active');
      window.removeEventListener('keydown', onKey);
    };
  }, [go, total]);

  return (
    <div className="agn-deck">
      <div
        className="agn-progress"
        style={{ width: `${((current + 1) / total) * 100}%` }}
      />

      <div className="agn-topbar">
        <div className="mk">
          NA<span>R</span>RE
        </div>
        <div className="by">Content GEO · proposta Sixsen</div>
      </div>

      <div className="agn-stage">
        {slides.map((s, i) => (
          <section
            key={s.id}
            className={`agn-slide${s.cover ? ' agn-cover' : ''}${i === current ? ' is-active' : ''}`}
            aria-hidden={i !== current}
          >
            {s.node}
          </section>
        ))}
      </div>

      <div className="agn-hint">← → para navegar</div>

      <div className="agn-nav">
        <div className="agn-dots">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`agn-dot${i === current ? ' on' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Ir para o slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="agn-arrows" style={{ alignItems: 'center', gap: '1rem' }}>
          <span className="agn-counter">
            <b>{String(current + 1).padStart(2, '0')}</b> / {String(total).padStart(2, '0')}
          </span>
          <button className="agn-btn" onClick={() => go(-1)} disabled={current === 0}>
            Voltar
          </button>
          <button className="agn-btn" onClick={() => go(1)} disabled={current === total - 1}>
            Avançar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentGeoNarre;
