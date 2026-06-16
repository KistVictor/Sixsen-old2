import React, { useCallback, useEffect, useState } from 'react';
import '../../styles/auditoria-geo-narre.css';

/**
 * Deck de apresentação "Auditoria GEO Agêntica" (Sixsen × Narre).
 *
 * Peça que o Victor (Sixsen) apresenta para a Narre. Aplica a marca da Narre
 * (brand kit v5: obsidiana + acento laranja queimado, Outfit), não a da Sixsen.
 * Rota standalone, fora do shell do site. Navegação por teclado, clique nas
 * setas/dots e barra de progresso.
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
      <span className="tick">●</span> Proposta Sixsen × Narre · Auditoria GEO Agêntica
    </div>
    <div className="agn-slogan">
      A IA já formou uma opinião sobre o seu cliente.
      <b>Agora a Narre audita isso em escala.</b>
    </div>
    <div className="agn-lead">
      Um sistema agêntico que transforma o briefing de um cliente em uma{' '}
      <span className="agn-accent">Auditoria GEO</span> completa, com Share of Model real,
      pronta para a equipe da Narre executar. O entregável é o produto{' '}
      <span className="agn-white">NARRE SCAN</span>.
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
      <h2 className="agn-h2">Hoje a auditoria é artesanal</h2>
      <Rule />
    </div>
    <div className="agn-stacklg agn-stagger">
      <p className="agn-lead">
        A Narre já provou o método: o diagnóstico GEO da Erica Avallone foi feito à mão,
        seção por seção. É <span className="agn-white">excelente</span> e{' '}
        <span className="agn-white">vendável</span>. Mas cada auditoria consome horas de
        trabalho qualificado, e isso é o teto de quantos clientes cabem por mês.
      </p>
      <div className="agn-list">
        <div className="li">
          <span className="mk" />
          <p>
            O diagnóstico depende do tempo de uma pessoa que entende de GEO a fundo.
          </p>
        </div>
        <div className="li">
          <span className="mk" />
          <p>
            O Share of Model hoje é <b>estimado</b>, não medido de fato nas IAs.
          </p>
        </div>
        <div className="li">
          <span className="mk" />
          <p>Escalar significa repetir o mesmo trabalho manual, cliente após cliente.</p>
        </div>
      </div>
    </div>
  </div>
);

const SlideProposta = () => (
  <div className="agn-inner agn-stacklg agn-stagger">
    <div className="agn-eyebrow">02 · A proposta</div>
    <h2 className="agn-h2">
      O método da Narre, executado por <span className="agn-accent">agentes</span>
    </h2>
    <p className="agn-lead">
      Não é uma ferramenta genérica. É a régua da própria Narre (os 10 pontos, os 5
      pilares, E-E-A-T, a lógica por plataforma) codificada e executada de ponta a ponta.
      O operador entra só nos momentos certos.
    </p>
    <div className="agn-flow" style={{ marginTop: '1.4rem' }}>
      <div className="agn-step">
        <span className="sn">→</span>
        <span className="st">Briefing do cliente</span>
        <span className="sd">As 8 seções que a Narre já coleta.</span>
        <span className="stag">Entrada</span>
      </div>
      <div className="agn-step" style={{ flex: '0 0 auto', justifyContent: 'center', minWidth: 64 }}>
        <Chevron on size={30} />
      </div>
      <div className="agn-step human">
        <span className="sn">◆</span>
        <span className="st">Sistema agêntico</span>
        <span className="sd">Pipeline de 8 etapas em Claude.</span>
        <span className="stag">Processo</span>
      </div>
      <div className="agn-step" style={{ flex: '0 0 auto', justifyContent: 'center', minWidth: 64 }}>
        <Chevron on size={30} />
      </div>
      <div className="agn-step">
        <span className="sn">▣</span>
        <span className="st">Auditoria GEO</span>
        <span className="sd">Relatório na marca, pronto para executar.</span>
        <span className="stag">Saída · NARRE SCAN</span>
      </div>
    </div>
  </div>
);

const SlideDashboard = () => (
  <div className="agn-inner agn-split">
    <div className="agn-stacklg agn-stagger">
      <div className="agn-eyebrow">03 · Decisão técnica</div>
      <h2 className="agn-h2">Por que fora do dashboard</h2>
      <Rule />
      <p className="agn-lead">
        A auditoria exige <span className="agn-white">várias interações recursivas</span> com
        o Claude. Isso só roda com qualidade dentro do Claude Desktop ou do Claude Code.
      </p>
    </div>
    <div className="agn-grid cols-1 agn-stagger" style={{ gap: 3 }}>
      <div className="agn-card">
        <span className="cn">01</span>
        <span className="ct">Recursão de raciocínio</span>
        <span className="cd">
          Cada etapa lê a anterior e decide a próxima. Não é um formulário linear, é uma
          investigação.
        </span>
      </div>
      <div className="agn-card">
        <span className="cn">02</span>
        <span className="ct">Custo de token coberto</span>
        <span className="cd">
          Rodando no Claude Desktop, o consumo entra no plano Pro/Max. No dashboard, seria
          custo de API da Anthropic a cada auditoria.
        </span>
      </div>
      <div className="agn-card lead-orange">
        <span className="cn">03</span>
        <span className="ct">Mesma qualidade, sem reescrever</span>
        <span className="cd">
          Replicar isso no dashboard com a mesma profundidade exigiria muito desenvolvimento.
          O agente roda hoje.
        </span>
      </div>
    </div>
  </div>
);

const SlideSaltos = () => (
  <div className="agn-inner agn-stacklg agn-stagger">
    <div className="agn-eyebrow">04 · O que muda de patamar</div>
    <h2 className="agn-h2">
      Três saltos sobre a versão <span className="agn-accent">manual</span>
    </h2>
    <div className="agn-grid cols-3" style={{ marginTop: '1.2rem' }}>
      <div className="agn-card lead-orange">
        <span className="cn">01</span>
        <span className="ct">Share of Model real</span>
        <span className="cd">
          O operador roda as queries do nicho em ChatGPT, Gemini, Perplexity e Claude e salva
          o print. O baseline para de ser estimativa e vira evidência auditável.
        </span>
      </div>
      <div className="agn-card">
        <span className="cn">02</span>
        <span className="ct">Recon técnico verificado</span>
        <span className="cd">
          O semáforo (schema, llms.txt, og:type, robots) sai de uma leitura real do site do
          cliente, fato a fato, não de inferência.
        </span>
      </div>
      <div className="agn-card">
        <span className="cn">03</span>
        <span className="ct">Marca aplicada</span>
        <span className="cd">
          A saída deixa de ser um Google Doc solto e vira um relatório executivo na identidade
          Narre, pronto para entregar.
        </span>
      </div>
    </div>
  </div>
);

const briefingSecoes = [
  ['01', 'Informações iniciais', 'Nome, contato, site, redes, atuação'],
  ['02', 'Identidade principal', 'Quem é, o que faz, categoria desejada'],
  ['03', 'Problema e público', 'O que resolve, para quem, foco'],
  ['04', 'Posicionamento desejado', 'A resposta ideal da IA sobre o cliente'],
  ['05', 'Autoridade e diferenciais', 'Por que confiar, provas, citações'],
  ['06', 'Concorrentes e referências', 'Quem domina, com quem se comparar'],
  ['07', 'Presença atual', 'Onde aparece com relevância hoje'],
  ['08', 'Considerações finais', 'Objetivos e desafios em aberto'],
];

const SlideBriefing = () => (
  <div className="agn-inner agn-split">
    <div className="agn-stacklg agn-stagger">
      <div className="agn-eyebrow">05 · A entrada</div>
      <h2 className="agn-h2">O briefing que a Narre já coleta</h2>
      <Rule />
      <p className="agn-lead">
        Oito seções, schema fechado. Nada de novo a pedir do cliente. Já temos briefings
        reais de prova: <span className="agn-white">Erica Avallone</span> (advocacia de
        trânsito) e <span className="agn-white">Paola Falcochio</span> (cardiologia).
      </p>
    </div>
    <div className="agn-grid cols-2 agn-stagger">
      {briefingSecoes.map(([n, t, d]) => (
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
  { n: '01', t: 'Intake', d: 'Normaliza o briefing, confirma nicho e queries.', tag: 'Operador', human: true },
  { n: '02', t: 'Recon técnico', d: 'Lê o site: schema, llms.txt, robots, og:type.', tag: 'Auto' },
  { n: '03', t: 'Protocolo SoM', d: 'Roda queries nas 4 IAs e salva o print.', tag: 'Operador', human: true },
  { n: '04', t: 'Competitivo', d: 'Quem aparece no lugar do cliente, por sinal.', tag: 'Auto' },
  { n: '05', t: 'E-E-A-T', d: 'O que existe vs o que falta para a IA ver.', tag: 'Auto' },
  { n: '06', t: 'Top gaps', d: 'Os gaps críticos por ordem de impacto.', tag: 'Auto' },
  { n: '07', t: 'Plano 90 dias', d: 'Fundação, conteúdo, PR, com metas de SoM.', tag: 'Auto' },
  { n: '08', t: 'Compilação', d: 'Relatório final na marca, para revisão.', tag: 'Operador', human: true },
];

const SlidePipeline = () => (
  <div className="agn-inner agn-stacklg agn-stagger">
    <div className="agn-eyebrow">06 · O motor</div>
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
      Três <span className="agn-accent">checkpoints humanos</span> (em laranja): confirmar o
      nicho, rodar as queries de SoM e revisar o relatório. O resto roda sozinho.
    </p>
  </div>
);

const SlideSom = () => (
  <div className="agn-inner agn-split">
    <div className="agn-stacklg agn-stagger">
      <div className="agn-eyebrow">07 · O coração defensável</div>
      <h2 className="agn-h2">Share of Model, medido de verdade</h2>
      <Rule />
      <p className="agn-lead">
        O próprio método publicado da Narre já manda abrir cada IA e registrar o resultado com
        print. O sistema gera o protocolo; o operador executa; o Claude pontua.
      </p>
    </div>
    <div className="agn-stacklg agn-stagger">
      <div className="agn-grid cols-2">
        {[
          ['ChatGPT', 'Base + Search'],
          ['Gemini', 'Híbrido Google'],
          ['Perplexity', 'RAG, citação rápida'],
          ['Claude', 'Precisão e cautela'],
        ].map(([p, d]) => (
          <div className="agn-card" key={p} style={{ padding: '1.1rem 1.2rem', gap: '0.3rem' }}>
            <span className="ct" style={{ fontSize: 14 }}>
              {p}
            </span>
            <span className="cd" style={{ fontSize: 11.5 }}>
              {d}
            </span>
          </div>
        ))}
      </div>
      <div className="agn-list">
        <div className="li">
          <span className="mk" />
          <p>
            <b>Auditável:</b> cada nota de SoM tem um print por trás.
          </p>
        </div>
        <div className="li">
          <span className="mk" />
          <p>
            <b>Zero infra:</b> roda no Claude Desktop, sem automação que quebra.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const relatorioSecoes = [
  ['01', 'Resumo executivo'],
  ['02', 'Perfil do cliente'],
  ['03', 'Visibilidade nas IAs (SoM)'],
  ['04', 'Diagnóstico técnico (semáforo)'],
  ['05', 'E-E-A-T e autoridade'],
  ['06', 'Gap vs concorrentes'],
  ['07', 'Top 5 gaps críticos'],
  ['08', 'Plano de ação 90 dias'],
  ['09', 'Metas de Share of Model'],
  ['10', 'Próximo passo'],
];

const SlideSaida = () => (
  <div className="agn-inner agn-stacklg agn-stagger">
    <div className="agn-eyebrow">08 · O entregável</div>
    <h2 className="agn-h2">
      O relatório <span className="agn-accent">NARRE SCAN</span>
    </h2>
    <p className="agn-lead">
      Dez seções, na identidade da Narre, com dados reais. O mesmo formato que já provou valor
      com a Erica, agora robusto e repetível.
    </p>
    <div className="agn-toc" style={{ marginTop: '0.8rem' }}>
      {relatorioSecoes.map(([n, t]) => (
        <div className="row" key={n}>
          <span className="rn">{n}</span>
          <span className="rt">{t}</span>
        </div>
      ))}
    </div>
  </div>
);

const SlideComercial = () => (
  <div className="agn-inner agn-stacklg agn-stagger">
    <div className="agn-eyebrow">09 · Lógica comercial</div>
    <h2 className="agn-h2">
      O SCAN abre a <span className="agn-accent">esteira</span>
    </h2>
    <p className="agn-lead">
      O relatório não é um fim. A seção final dele funila para o próximo produto da Narre.
    </p>
    <div className="agn-funnel" style={{ marginTop: '1rem', alignItems: 'stretch' }}>
      <div className="agn-prod active">
        <span className="pl">Nível 01 · Entrada</span>
        <span className="pn">Narre Scan</span>
        <span className="ph">Este relatório. O diagnóstico que abre a conversa.</span>
        <span className="pp">R$ 3K</span>
      </div>
      <div className="agn-prod dim">
        <span className="pl">Nível 02 · High-ticket</span>
        <span className="pn">Narre Build</span>
        <span className="ph">Implementação: schema, Wikidata, hub, PR em portais.</span>
        <span className="pp">R$ 30K</span>
      </div>
      <div className="agn-prod dim">
        <span className="pl">Nível 03 · Recorrência</span>
        <span className="pn">Narre Shield</span>
        <span className="ph">Governança contínua e relatório de Share of Model.</span>
        <span className="pp">R$ 6K<span style={{ fontSize: 13, fontWeight: 300 }}>/mês</span></span>
      </div>
    </div>
    <p className="agn-lead" style={{ fontSize: 12.5, color: 'var(--muted)' }}>
      Preços do brand kit da Narre ao cliente final. O agente alimenta os três níveis com o
      mesmo diagnóstico.
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
            <b>Entrega inicial:</b> 1 a 2 semanas para a primeira versão rodando.
          </p>
        </div>
        <div className="li">
          <span className="mk" />
          <p>
            <b>Lapidação:</b> cerca de 1 mês até o ponto fino.
          </p>
        </div>
        <div className="li">
          <span className="mk" />
          <p>
            <b>Decisão da Narre:</b> prioridade entre este produto e a esteira de conteúdo.
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
  { id: 'dashboard', node: <SlideDashboard /> },
  { id: 'saltos', node: <SlideSaltos /> },
  { id: 'briefing', node: <SlideBriefing /> },
  { id: 'pipeline', node: <SlidePipeline /> },
  { id: 'som', node: <SlideSom /> },
  { id: 'saida', node: <SlideSaida /> },
  { id: 'comercial', node: <SlideComercial /> },
  { id: 'fechamento', node: <SlideFechamento /> },
];

const AuditoriaGeoNarre: React.FC = () => {
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
        <div className="by">Auditoria GEO · proposta Sixsen</div>
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

export default AuditoriaGeoNarre;
