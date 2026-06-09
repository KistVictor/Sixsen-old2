import React, { useEffect, useRef } from 'react';
import {
  ShieldCheck,
  Database,
  Brain,
  GitBranch,
  Zap,
  Bot,
  Workflow,
  CirclePlay,
  Languages,
  Sparkles,
  Building2,
  FlaskConical,
  Cpu,
  CodeXml,
  Info,
} from 'lucide-react';
import '../styles/lp-aios.css';

const WHATSAPP_LINK =
  'https://api.whatsapp.com/send/?phone=5551999516231&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+AIOS.&type=phone_number&app_absent=0';

/** Sixsen six-dot mark. */
function Mark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="699.14 823.48 1604.72 1069.81"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="1768.96" cy="1001.78" r="178.3" />
      <circle cx="2125.56" cy="1358.38" r="178.3" />
      <circle cx="1768.96" cy="1714.99" r="178.3" />
      <circle cx="1234.05" cy="1714.99" r="178.3" />
      <circle cx="877.44" cy="1358.38" r="178.3" />
      <circle cx="1234.05" cy="1001.78" r="178.3" />
    </svg>
  );
}

const LpAios: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  /**
   * Ports the original landing interactions (sticky header, scroll reveal,
   * animated FAQ accordion, sticky mobile CTA, ambient hero canvas) into one
   * effect, scoped to the page root so nothing leaks into the rest of the SPA.
   */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    document.body.classList.add('lp-aios-active');

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const cleanups: Array<() => void> = [];

    // ---- sticky header state ----
    const header = root.querySelector<HTMLElement>('#siteHeader');
    if (header) {
      const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 12);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener('scroll', onScroll));
    }

    // ---- scroll reveal ----
    const revealNodes = Array.from(
      root.querySelectorAll<HTMLElement>('[data-reveal]')
    );
    const revealInstant = () =>
      revealNodes.forEach((n) => {
        n.style.transition = 'none';
        n.classList.add('is-in');
      });
    if (reduceMotion) {
      revealInstant();
    } else {
      let pending = revealNodes.slice();
      const check = () => {
        const vh = window.innerHeight || 800;
        pending = pending.filter((n) => {
          if (n.getBoundingClientRect().top < vh * 0.9) {
            n.classList.add('is-in');
            return false;
          }
          return true;
        });
        if (!pending.length) {
          window.removeEventListener('scroll', onRevealScroll);
          window.removeEventListener('resize', onRevealScroll);
        }
      };
      let ticking = false;
      const onRevealScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          check();
        });
      };
      check();
      window.addEventListener('scroll', onRevealScroll, { passive: true });
      window.addEventListener('resize', onRevealScroll);
      cleanups.push(() => {
        window.removeEventListener('scroll', onRevealScroll);
        window.removeEventListener('resize', onRevealScroll);
      });
      // safety: never leave content hidden if the rAF clock is frozen
      let rafFired = false;
      requestAnimationFrame(() => {
        rafFired = true;
      });
      const t1 = window.setTimeout(() => {
        if (!rafFired) revealInstant();
      }, 240);
      const t2 = window.setTimeout(revealInstant, 6000);
      cleanups.push(() => {
        clearTimeout(t1);
        clearTimeout(t2);
      });
    }

    // ---- FAQ accordion (animated) ----
    const faqItems = Array.from(
      root.querySelectorAll<HTMLDetailsElement>('.faq-item')
    );
    faqItems.forEach((d) => {
      const a = d.querySelector<HTMLElement>('.faq-a');
      const summary = d.querySelector<HTMLElement>('summary');
      if (!a || !summary) return;
      a.style.maxHeight = d.open ? 'none' : '0px';

      const onClick = (e: Event) => {
        e.preventDefault();
        const willOpen = !d.open;
        if (willOpen) {
          d.open = true;
          a.style.maxHeight = a.scrollHeight + 'px';
          const te = () => {
            if (d.open) a.style.maxHeight = 'none';
            a.removeEventListener('transitionend', te);
          };
          a.addEventListener('transitionend', te);
        } else {
          a.style.maxHeight = a.scrollHeight + 'px';
          requestAnimationFrame(() => {
            a.style.maxHeight = '0px';
          });
          a.addEventListener(
            'transitionend',
            () => {
              d.open = false;
            },
            { once: true }
          );
        }
      };
      summary.addEventListener('click', onClick);
      cleanups.push(() => summary.removeEventListener('click', onClick));
    });
    const onFaqResize = () => {
      faqItems.forEach((d) => {
        const a = d.querySelector<HTMLElement>('.faq-a');
        if (d.open && a && a.style.maxHeight !== 'none') a.style.maxHeight = 'none';
      });
    };
    window.addEventListener('resize', onFaqResize);
    cleanups.push(() => window.removeEventListener('resize', onFaqResize));

    // ---- sticky mobile CTA ----
    const bar = root.querySelector<HTMLElement>('#mobileCta');
    const hero = root.querySelector<HTMLElement>('.hero');
    const fin = root.querySelector<HTMLElement>('#agendar');
    if (bar && hero && 'IntersectionObserver' in window) {
      let pastHero = false;
      let overFinal = false;
      const update = () => bar.classList.toggle('is-show', pastHero && !overFinal);
      const heroObs = new IntersectionObserver(
        (es) => {
          pastHero = !es[0].isIntersecting;
          update();
        },
        { threshold: 0 }
      );
      heroObs.observe(hero);
      cleanups.push(() => heroObs.disconnect());
      if (fin) {
        const finObs = new IntersectionObserver(
          (es) => {
            overFinal = es[0].isIntersecting;
            update();
          },
          { threshold: 0.05 }
        );
        finObs.observe(fin);
        cleanups.push(() => finObs.disconnect());
      }
    }

    // ---- hero ambient network (canvas) ----
    const canvas = root.querySelector<HTMLCanvasElement>('#heroNet');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        let w = 0;
        let h = 0;
        let pts: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = [];
        let raf = 0;

        const accent = () => {
          const c = getComputedStyle(root)
            .getPropertyValue('--accent')
            .trim();
          return c || '#E9522B';
        };
        const count = () =>
          Math.round(22 * Math.min(1, (w * h) / 200000 + 0.55));
        const seed = () => {
          const n = count();
          pts = [];
          for (let i = 0; i < n; i++) {
            pts.push({
              x: Math.random() * w,
              y: Math.random() * h,
              vx: (Math.random() - 0.5) * 0.18,
              vy: (Math.random() - 0.5) * 0.18,
              r: Math.random() * 1.6 + 0.8,
            });
          }
        };
        const resize = () => {
          const r = canvas.getBoundingClientRect();
          w = r.width;
          h = r.height;
          canvas.width = w * dpr;
          canvas.height = h * dpr;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          seed();
        };
        const hex2rgb = (hxIn: string) => {
          let hx = hxIn.replace('#', '');
          if (hx.length === 3)
            hx = hx
              .split('')
              .map((c) => c + c)
              .join('');
          const n = parseInt(hx, 16);
          return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
        };
        const draw = () => {
          const col = hex2rgb(accent());
          const rgb = col[0] + ',' + col[1] + ',' + col[2];
          const maxD = 96;
          ctx.clearRect(0, 0, w, h);
          for (let i = 0; i < pts.length; i++) {
            const p = pts[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
            for (let j = i + 1; j < pts.length; j++) {
              const q = pts[j];
              const dx = p.x - q.x;
              const dy = p.y - q.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < maxD) {
                const o = (1 - dist / maxD) * 0.34;
                ctx.strokeStyle = 'rgba(' + rgb + ',' + o + ')';
                ctx.lineWidth = 0.7;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(q.x, q.y);
                ctx.stroke();
              }
            }
          }
          for (let k = 0; k < pts.length; k++) {
            const pt = pts[k];
            ctx.fillStyle = 'rgba(' + rgb + ',0.5)';
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, pt.r, 0, 6.2832);
            ctx.fill();
          }
          raf = requestAnimationFrame(draw);
        };
        const drawStatic = () => {
          const col = hex2rgb(accent());
          const rgb = col[0] + ',' + col[1] + ',' + col[2];
          ctx.clearRect(0, 0, w, h);
          for (let i = 0; i < pts.length; i++) {
            for (let j = i + 1; j < pts.length; j++) {
              const dx = pts[i].x - pts[j].x;
              const dy = pts[i].y - pts[j].y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 90) {
                ctx.strokeStyle =
                  'rgba(' + rgb + ',' + (1 - dist / 90) * 0.28 + ')';
                ctx.lineWidth = 0.7;
                ctx.beginPath();
                ctx.moveTo(pts[i].x, pts[i].y);
                ctx.lineTo(pts[j].x, pts[j].y);
                ctx.stroke();
              }
            }
            ctx.fillStyle = 'rgba(' + rgb + ',0.5)';
            ctx.beginPath();
            ctx.arc(pts[i].x, pts[i].y, pts[i].r, 0, 6.2832);
            ctx.fill();
          }
        };

        let resizeTimer = 0;
        const onCanvasResize = () => {
          clearTimeout(resizeTimer);
          resizeTimer = window.setTimeout(() => {
            resize();
            if (reduceMotion) drawStatic();
          }, 180);
        };

        resize();
        window.addEventListener('resize', onCanvasResize);
        if (reduceMotion) drawStatic();
        else draw();

        cleanups.push(() => {
          cancelAnimationFrame(raf);
          clearTimeout(resizeTimer);
          window.removeEventListener('resize', onCanvasResize);
        });
      }
    }

    return () => {
      document.body.classList.remove('lp-aios-active');
      cleanups.forEach((fn) => fn());
    };
  }, []);

  const year = new Date().getFullYear();

  return (
    <div className="lp-aios" ref={rootRef}>
      {/* ============================ HEADER ============================ */}
      <header className="site-header" id="siteHeader">
        <div className="wrap header-inner">
          <a className="brand" href="#topo" aria-label="Victor Kist, início">
            <Mark className="mark" />
            <span className="name">
              <b>victor kist</b>
              <span>fundador da Sixsen</span>
            </span>
          </a>
          <a
            className="btn header-cta"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar minha sessão
          </a>
        </div>
      </header>

      <main id="topo">
        {/* ============================ HERO ============================ */}
        <section className="hero section" aria-labelledby="hero-title">
          <Mark className="watermark" />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="kicker" data-reveal>
                consultoria individual de IA
              </span>
              <h1
                className="display"
                id="hero-title"
                data-reveal
                data-delay="1"
                style={{ textTransform: 'none' }}
              >
                Monte o sistema de IA da sua empresa em uma{' '}
                <span className="accent-word">sessão</span>.
              </h1>
              <p className="lead" data-reveal data-delay="2">
                Uma consultoria individual e ao vivo para você sair com o seu
                próprio AI operating system funcionando, e o seu negócio deixar
                de depender só de você.
              </p>
              <div className="hero-actions" data-reveal data-delay="3">
                <a
                  className="btn btn--lg"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Agendar minha sessão</span>
                  <span className="ar" aria-hidden="true">
                    →
                  </span>
                </a>
                <span className="hero-assure">
                  <ShieldCheck /> Vagas limitadas nesta primeira leva
                </span>
              </div>
            </div>

            {/* Live system panel */}
            <div className="os-panel" data-reveal data-delay="2" aria-hidden="true">
              <div className="os-panel__bar">
                <span className="dot" /> ai operating system · ativo
              </div>
              <canvas id="heroNet" />
              <svg
                className="os-links"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1,
                  overflow: 'visible',
                }}
              >
                <g
                  stroke="var(--accent-line)"
                  strokeWidth="0.4"
                  fill="none"
                  strokeDasharray="1.6 1.6"
                >
                  <line x1="50" y1="54" x2="26" y2="28" />
                  <line x1="50" y1="54" x2="77" y2="33" />
                  <line x1="50" y1="54" x2="30" y2="78" />
                  <line x1="50" y1="54" x2="78" y2="74" />
                </g>
              </svg>
              <span className="os-node os-node--core" style={{ left: '50%', top: '54%' }}>
                seu sistema
              </span>
              <span className="os-node float" style={{ left: '26%', top: '28%' }}>
                <i /> Contexto
              </span>
              <span
                className="os-node float"
                style={{ left: '77%', top: '33%', ['--d' as string]: '.6s' }}
              >
                <i /> Processos
              </span>
              <span
                className="os-node float"
                style={{ left: '30%', top: '78%', ['--d' as string]: '1.1s' }}
              >
                <i /> Decisões
              </span>
              <span
                className="os-node float"
                style={{ left: '78%', top: '74%', ['--d' as string]: '1.6s' }}
              >
                <i /> Agentes de IA
              </span>
            </div>
          </div>
        </section>

        {/* ============================ PROBLEMA ============================ */}
        <section className="problem section" aria-labelledby="prob-title">
          <Mark className="watermark" />
          <div className="wrap problem-grid">
            <div>
              <span className="kicker" data-reveal>
                o problema
              </span>
              <h2 className="problem-body" id="prob-title" data-reveal data-delay="1">
                O seu negócio inteiro mora na sua cabeça.
              </h2>
            </div>
            <div className="problem-paras">
              <p data-reveal>
                A IA virou assunto obrigatório. Seu concorrente fala de
                automação, fornecedor te manda proposta todo mês, e você
                continua sem saber por onde começar dentro da sua operação.
              </p>
              <p data-reveal data-delay="1">
                A raiz quase nunca é falta de ferramenta. É que{' '}
                <strong>os dados, os processos e as decisões dependem de você</strong>,
                então no dia em que você sai da mesa, tudo desacelera.
              </p>
              <p data-reveal data-delay="2">
                Comprar mais uma assinatura de IA não resolve, porque ferramenta
                solta não conhece a sua empresa.
              </p>
            </div>
          </div>
        </section>

        {/* ============================ SOLUÇÃO ============================ */}
        <section className="section" aria-labelledby="sol-title">
          <div className="wrap solution-grid">
            <div className="solution-prose">
              <span className="kicker" data-reveal>
                a solução
              </span>
              <h2
                className="h2"
                id="sol-title"
                data-reveal
                data-delay="1"
                style={{ marginTop: 16, marginBottom: 24 }}
              >
                Um lugar central que pensa como você.
              </h2>
              <p data-reveal data-delay="1">
                Em uma sessão individual, a gente monta junto o seu{' '}
                <strong>AI operating system</strong>: um lugar central que guarda
                o contexto do seu negócio, a sua forma de pensar e os seus
                processos, e de onde você passa a rodar automações e agentes de
                IA.
              </p>
              <p data-reveal data-delay="2">
                Você sai com o sistema começando a rodar, com{' '}
                <strong>autonomia para tocar ele sozinho</strong> e com os
                próximos passos claros.
              </p>
              <p data-reveal data-delay="2">
                Você traz o conhecimento do seu negócio, que ninguém tem além de
                você, e eu trago a fluência na ferramenta. No fim,{' '}
                <span className="accent-q ink-strong">
                  o seu conhecimento vira alavanca.
                </span>
              </p>
            </div>

            {/* AIOS diagram */}
            <div className="diagram" data-reveal data-delay="2" aria-hidden="true">
              <svg className="links" viewBox="0 0 100 100" preserveAspectRatio="none">
                <g stroke="var(--accent-line)" strokeWidth="0.5" fill="none">
                  <line x1="50" y1="50" x2="20" y2="20" />
                  <line x1="50" y1="50" x2="82" y2="22" />
                  <line x1="50" y1="50" x2="14" y2="62" />
                  <line x1="50" y1="50" x2="86" y2="64" />
                  <line x1="50" y1="50" x2="50" y2="88" />
                </g>
              </svg>
              <div className="core">
                <b>
                  seu
                  <br />
                  AIOS
                </b>
                <span>sempre ligado</span>
              </div>
              <span className="sat" style={{ left: '20%', top: '20%' }}>
                <Database /> Contexto do negócio
              </span>
              <span className="sat" style={{ left: '82%', top: '22%' }}>
                <Brain /> Sua forma de pensar
              </span>
              <span className="sat" style={{ left: '14%', top: '62%' }}>
                <GitBranch /> Processos
              </span>
              <span className="sat" style={{ left: '86%', top: '64%' }}>
                <Zap /> Automações
              </span>
              <span className="sat" style={{ left: '50%', top: '88%' }}>
                <Bot /> Agentes de IA
              </span>
            </div>
          </div>
        </section>

        {/* ============================ PROPOSTAS DE VALOR ============================ */}
        <section className="section section--tight" aria-labelledby="val-title">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker" data-reveal>
                o que muda pra você
              </span>
              <h2 className="h2" id="val-title" data-reveal data-delay="1">
                O que você ganha ao montar o seu sistema.
              </h2>
            </div>
            <div className="bento">
              <article className="vcard vcard--feature" data-reveal>
                <div className="vcard__icon">
                  <Workflow />
                </div>
                <span className="vcard__num">01</span>
                <h3>Pare de ser o gargalo.</h3>
                <p>
                  Com o contexto do negócio num sistema, e não só na sua cabeça,
                  você ganha espaço para delegar, crescer e tirar o pé sem tudo
                  travar.
                </p>
                <Mark className="grain" />
              </article>
              <article className="vcard vcard--wide" data-reveal data-delay="1">
                <div className="vcard__icon">
                  <CirclePlay />
                </div>
                <span className="vcard__num">02</span>
                <h3>Saia com algo rodando, não com teoria.</h3>
                <p>
                  A sessão é mão na massa. No fim dela o seu sistema já está de
                  pé e você sabe usar.
                </p>
              </article>
              <article className="vcard vcard--third" data-reveal>
                <div className="vcard__icon">
                  <Languages />
                </div>
                <span className="vcard__num">03</span>
                <h3>Você não precisa virar técnico.</h3>
                <p>
                  Eu cuido da parte complexa e traduzo cada passo. Você comanda,
                  sem precisar programar.
                </p>
              </article>
              <article className="vcard vcard--third" data-reveal data-delay="1">
                <div className="vcard__icon">
                  <Sparkles />
                </div>
                <span className="vcard__num">04</span>
                <h3>Seu conhecimento, multiplicado.</h3>
                <p>
                  A IA passa a trabalhar a partir da sua forma de decidir, então
                  ela rende mais onde você já é bom.
                </p>
              </article>
              <article
                className="vcard vcard--third"
                data-reveal
                data-delay="2"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  background: 'var(--accent-wash)',
                  borderColor: 'var(--accent-line)',
                }}
              >
                <p style={{ margin: 0, fontSize: 16, color: 'var(--sx-neutro-500)' }}>
                  Pronto para tirar o seu negócio da sua cabeça?
                </p>
                <a
                  className="textlink"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: 12, alignSelf: 'flex-start' }}
                >
                  Agendar minha sessão →
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* ============================ COMO FUNCIONA ============================ */}
        <section className="section section--tight" aria-labelledby="how-title">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker" data-reveal>
                como funciona
              </span>
              <h2 className="h2" id="how-title" data-reveal data-delay="1">
                Simples, do agendamento ao primeiro resultado.
              </h2>
            </div>
            <div className="steps">
              <div className="step" data-reveal>
                <div className="step__connector" />
                <div className="step__n">1</div>
                <h3>Você agenda</h3>
                <p>Escolhe um horário e reserva a sua sessão individual.</p>
              </div>
              <div className="step" data-reveal data-delay="1">
                <div className="step__connector" />
                <div className="step__n">2</div>
                <h3>Pré-roteiro</h3>
                <p>Antes, eu mando um pré-roteiro curto para não desperdiçar tempo.</p>
              </div>
              <div className="step" data-reveal data-delay="2">
                <div className="step__connector" />
                <div className="step__n">3</div>
                <h3>Montamos juntos</h3>
                <p>Na sessão, montamos o sistema juntos, no seu ritmo.</p>
              </div>
              <div className="step" data-reveal data-delay="3">
                <div className="step__connector" />
                <div className="step__n">4</div>
                <h3>Próximos passos</h3>
                <p>
                  Depois, você recebe um resumo com dois ou três próximos passos
                  para aplicar já na semana.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ POR QUE COMIGO ============================ */}
        <section className="why section" aria-labelledby="why-title">
          <div className="wrap why-grid">
            <div className="why-photo" data-reveal>
              <img
                src="/victor.jpg"
                alt="Victor Kist, desenvolvedor e fundador da Sixsen"
                width={880}
                height={1100}
              />
              <div className="badge">
                <Mark className="mark" />
                <p>
                  <b>Victor Kist</b>fundador da Sixsen
                </p>
              </div>
            </div>
            <div>
              <span className="kicker" data-reveal>
                por que comigo
              </span>
              <p className="why-statement" data-reveal data-delay="1">
                Eu não falo de IA de fora, <b>eu construo todo dia.</b>
              </p>
              <ul className="cred-list">
                <li data-reveal>
                  <span className="ic">
                    <Building2 />
                  </span>
                  <span>
                    <b>Fundador da Sixsen</b>, empresa de tecnologia que
                    desenvolve IA aplicada.
                  </span>
                </li>
                <li data-reveal data-delay="1">
                  <span className="ic">
                    <FlaskConical />
                  </span>
                  <span>
                    Criei o <b>atypic.ia</b>, um produto de IA em produção, com
                    base científica real.
                  </span>
                </li>
                <li data-reveal data-delay="2">
                  <span className="ic">
                    <Cpu />
                  </span>
                  <span>
                    Rodo o meu próprio <b>AI operating system</b>, o mesmo
                    modelo que monto com você.
                  </span>
                </li>
                <li data-reveal data-delay="3">
                  <span className="ic">
                    <CodeXml />
                  </span>
                  <span>
                    Anos como <b>desenvolvedor e líder de projetos</b>, então
                    traduzo tecnologia para decisão de negócio, sem tecniquês.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================ FAQ ============================ */}
        <section className="section section--tight" aria-labelledby="faq-title">
          <div className="wrap">
            <div className="sec-head sec-head--center">
              <span
                className="kicker"
                data-reveal
                style={{ justifyContent: 'center', display: 'flex' }}
              >
                dúvidas comuns
              </span>
              <h2 className="h2" id="faq-title" data-reveal data-delay="1">
                Antes de agendar.
              </h2>
            </div>
            <div className="faq" data-reveal data-delay="1">
              <details className="faq-item">
                <summary className="faq-q">
                  Preciso saber programar? <span className="pm" aria-hidden="true" />
                </summary>
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Não. Eu conduzo a parte técnica e você acompanha na sua
                    linguagem. O sistema fica seu.
                  </div>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Isso é um curso de ChatGPT? <span className="pm" aria-hidden="true" />
                </summary>
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Não. A gente monta o seu sistema, com os seus dados e
                    processos, não uma aula genérica.
                  </div>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Quanto tempo leva? <span className="pm" aria-hidden="true" />
                </summary>
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Cerca de uma hora por sessão. Montar o sistema completo
                    costuma pedir mais de um encontro, e isso dilui o esforço e o
                    custo.
                  </div>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  E se eu travar depois? <span className="pm" aria-hidden="true" />
                </summary>
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Você sai com próximos passos por escrito e pode marcar as
                    próximas sessões.
                  </div>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  De quem são os dados? <span className="pm" aria-hidden="true" />
                </summary>
                <div className="faq-a">
                  <div className="faq-a-inner">
                    O sistema é montado no seu ambiente e pertence a você. Eu
                    ajudo a configurar, a chave fica na sua mão.
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* ============================ CTA FINAL ============================ */}
        <section className="final section" id="agendar" aria-labelledby="cta-title">
          <div className="final__bg">
            <img src="/lp-aios/gradient.png" alt="" aria-hidden="true" />
          </div>
          <div className="final__scrim" />
          <div className="wrap final-inner">
            <span className="kicker" data-reveal>
              vamos começar
            </span>
            <h2 className="final-title" id="cta-title" data-reveal data-delay="1">
              Vamos montar o seu sistema.
            </h2>
            <p data-reveal data-delay="2">
              Nesta primeira leva as vagas são poucas e o valor é de introdução,
              porque eu estou priorizando resultado e relação antes de escalar.
            </p>
            <div className="final-actions" data-reveal data-delay="3">
              <a
                className="btn btn--lg"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Quero montar o meu sistema</span>
                <span className="ar" aria-hidden="true">
                  →
                </span>
              </a>
              <span
                style={{
                  color: 'color-mix(in oklab, var(--sx-branco) 80%, transparent)',
                  fontSize: '15.5px',
                }}
              >
                Tem uma dúvida antes?{' '}
                <a
                  className="textlink"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Me chama no WhatsApp.
                </a>
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* ============================ FOOTER ============================ */}
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <Mark className="mark" />
            <div>
              <b>victor kist</b>
              <span>fundador da Sixsen · inteligência aplicada</span>
            </div>
          </div>
          <nav className="footer-links" aria-label="rodapé">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Agendar
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </nav>
          <p className="footer-legal">
            © {year} Victor Kist. O seu AI operating system é montado no seu
            ambiente e pertence a você.
          </p>
        </div>
      </footer>

      {/* ============================ STICKY MOBILE CTA ============================ */}
      <div className="mobile-cta" id="mobileCta">
        <a
          className="btn btn--block"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Agendar minha sessão</span>{' '}
          <span className="ar" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default LpAios;
