import React from 'react';
import {
  ArrowRight,
  MessageSquare,
  Settings,
  ShieldCheck,
  Lightbulb,
  Zap,
  Cpu,
  LineChart,
  Users,
  Search,
  PenTool,
  Rocket,
  RefreshCw
} from 'lucide-react';
import { ValueProp, ServiceItem } from '../types';

const Home: React.FC = () => {
  const schedulingLink = "https://api.whatsapp.com/send/?phone=5551999516231&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+da+Sixsen.";
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5551999516231&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+da+Sixsen.";

  const valueProps: ValueProp[] = [
    {
      title: "Consultoria, não apenas Código",
      description: "Entendemos que uma IA sem propósito é apenas um custo. Atuamos como estrategistas que traduzem a tecnologia para a realidade da sua empresa.",
      icon: <Lightbulb className="w-6 h-6 text-sixsen-orange" />
    },
    {
      title: "Personalização Real",
      description: "Seu negócio é único. Nossos agentes e automações são desenvolvidos sob medida para o seu fluxo, respeitando sua cultura.",
      icon: <Settings className="w-6 h-6 text-sixsen-orange" />
    },
    {
      title: "Segurança e Ética (LGPD)",
      description: "Implementamos soluções robustas que respeitam a privacidade dos dados, trazendo segurança de grandes corporações para PMEs.",
      icon: <ShieldCheck className="w-6 h-6 text-sixsen-orange" />
    },
    {
      title: "Clareza que Conecta",
      description: "Sem 'caixas pretas'. Entregamos soluções que você entende, controla e vê valor imediato.",
      icon: <Users className="w-6 h-6 text-sixsen-orange" />
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Diagnóstico de Clareza",
      description: "Antes de escrever qualquer linha de código, nós ouvimos. Entendemos suas dores operacionais, gargalos de atendimento e objetivos de negócio.",
      happening: "Reunião de imersão para mapear onde a ineficiência está custando dinheiro.",
      result: "Um plano de ação focado na dor real, não na tecnologia da moda.",
      icon: <Search className="w-5 h-5" />
    },
    {
      number: "02",
      title: "Arquitetura Personalizada",
      description: "Fugimos das soluções genéricas de prateleira. Desenhamos a estratégia de IA e automação específica para o seu fluxo de trabalho, garantindo conformidade com a LGPD.",
      happening: "Definição das ferramentas, fluxos de dados e regras de negócio.",
      result: "Um projeto sob medida que respeita a cultura da sua empresa.",
      icon: <PenTool className="w-5 h-5" />
    },
    {
      number: "03",
      title: "Implementação Ágil",
      description: "É hora de construir a ponte. Desenvolvemos, integramos seus sistemas atuais (CRM, ERP, WhatsApp) e testamos rigorosamente.",
      happening: "Configuração dos agentes de IA e automação de processos.",
      result: "A tecnologia começa a rodar, transformando tarefas manuais em processos automáticos.",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      number: "04",
      title: "Acompanhamento e Evolução",
      description: "A IA precisa de direção. Não entregamos e \"sumimos\". Monitoramos o desempenho e ajustamos a rota para garantir que a solução continue gerando valor.",
      happening: "Análise de métricas e otimização contínua.",
      result: "Sua empresa ganha maturidade digital e escala com segurança.",
      icon: <RefreshCw className="w-5 h-5" />
    }
  ];

  const services: ServiceItem[] = [
    {
      title: "Agentes de IA para WhatsApp",
      description: "Atendimento imediato, triagem inteligente e agendamento automático 24/7 com tom de voz humano.",
      icon: <MessageSquare className="w-8 h-8 text-sixsen-orange" />
    },
    {
      title: "Automação de Processos (RPA & IA)",
      description: "Elimine o 'copia e cola'. Integramos seu CRM, Financeiro e Operacional para rodar no piloto automático.",
      icon: <Zap className="w-8 h-8 text-sixsen-orange" />
    },
    {
      title: "Inteligência Financeira",
      description: "Agentes que analisam dados, categorizam despesas e geram insights para tomada de decisão estratégica.",
      icon: <LineChart className="w-8 h-8 text-sixsen-orange" />
    },
    {
      title: "Consultoria de Implementação",
      description: "Roadmap, governança e treinamento para empresas que querem adotar IA de forma profissional.",
      icon: <Cpu className="w-8 h-8 text-sixsen-orange" />
    }
  ];

  const companies = [
    "Facta Financeira",
    "The Wolves Company",
    "Zenblue",
    "Awise",
    "Performance Comercial"
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-sixsen-orange/10 to-transparent blur-3xl -z-10 opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            A Inteligência Artificial que <br className="hidden md:block" />
            <span className="text-sixsen-orange">entende seu negócio</span> antes de automatizá-lo.
          </h1>
          <p className="text-sixsen-gray text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Saia do experimental e entre na era da maturidade digital. Criamos agentes de IA e automações personalizadas que transformam complexidade em clareza.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={schedulingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-sixsen-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-sixsen-orange/20 flex items-center justify-center gap-2"
            >
              Agendar Diagnóstico Gratuito <ArrowRight size={20} />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sixsen-offwhite font-medium hover:text-sixsen-orange transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-sixsen-offwhite/5 bg-sixsen-dark/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-sixsen-gray mb-8">Empresas que evoluem seus processos com a <span className="font-bruno">Sixsen</span>:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
            {companies.map((company, idx) => (
              <span key={idx} className="text-xl md:text-2xl font-bold tracking-tighter whitespace-nowrap">{company}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-sixsen-dark">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Por que escolher a <span className="font-bruno">Sixsen</span>?</h2>
            <div className="w-20 h-1 bg-sixsen-orange"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, i) => (
              <div key={i} className="p-8 rounded-2xl bg-sixsen-offwhite/5 card-border flex flex-col items-start gap-6">
                <div className="p-3 rounded-lg bg-sixsen-orange/10">
                  {prop.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{prop.title}</h3>
                  <p className="text-sixsen-gray leading-relaxed text-sm">{prop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-sixsen-dark border-t border-sixsen-offwhite/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sixsen-orange font-bold uppercase tracking-widest text-sm mb-4 block">Metodologia</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Do caos à clareza em 4 passos</h2>
            <p className="text-sixsen-gray max-w-2xl mx-auto">Nosso processo é estruturado para garantir que a tecnologia sirva ao seu negócio, e não o contrário.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="group relative bg-sixsen-offwhite/5 p-10 rounded-3xl card-border flex flex-col gap-6 overflow-hidden">
                <div className="absolute -top-10 -right-10 text-9xl font-black text-sixsen-orange/5 select-none transition-all group-hover:text-sixsen-orange/10 group-hover:scale-110">
                  {step.number}
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-sixsen-orange/20 rounded-lg text-sixsen-orange">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{step.number}. {step.title}</h3>
                </div>

                <p className="text-sixsen-gray leading-relaxed">{step.description}</p>

                <div className="mt-4 space-y-4 pt-6 border-t border-sixsen-offwhite/10">
                  <div>
                    <span className="text-sixsen-orange text-[10px] font-bold uppercase tracking-widest block mb-2">O que acontece:</span>
                    <p className="text-sm text-sixsen-offwhite/80">{step.happening}</p>
                  </div>
                  <div>
                    <span className="text-sixsen-orange text-[10px] font-bold uppercase tracking-widest block mb-2">O resultado:</span>
                    <p className="text-sm font-medium text-sixsen-offwhite">{step.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="py-24 px-6 bg-sixsen-offwhite/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-sixsen-gray max-w-2xl mx-auto">Soluções modulares desenhadas para a sua realidade operacional.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="p-10 rounded-3xl bg-sixsen-dark card-border flex gap-8 items-start hover:translate-y-[-4px] transition-all">
                <div className="shrink-0">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-sixsen-gray leading-relaxed mb-6">{service.description}</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sixsen-orange font-bold flex items-center gap-2 text-sm uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    Saber Mais <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;