import React, { useEffect, useMemo, useState } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import {
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  Scale,
  RefreshCw,
  ListChecks,
  CalendarDays,
  HelpCircle,
  Search,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { Quiz, ViewState } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { CredspotBanner, SuperSimBanner } from '../ActionPayBanners';

interface Props {
  onNavigate: (view: ViewState) => void;
  quizzes?: Quiz[];
}

export const BolsaFamiliaLP: React.FC<Props> = ({ onNavigate, quizzes }) => {
  const [selectedNis, setSelectedNis] = useState<string>('1');

  // ✅ Calendário oficial 2026 (MDS / Agência Brasil)
  const calendar2026: Record<string, string[]> = useMemo(
    () => ({
      '1': ['19/Jan','12/Fev','18/Mar','16/Abr','18/Mai','17/Jun','20/Jul','18/Ago','17/Set','19/Out','16/Nov','10/Dez'],
      '2': ['20/Jan','13/Fev','19/Mar','17/Abr','19/Mai','18/Jun','21/Jul','19/Ago','18/Set','20/Out','17/Nov','11/Dez'],
      '3': ['21/Jan','18/Fev','20/Mar','20/Abr','20/Mai','19/Jun','22/Jul','20/Ago','21/Set','21/Out','18/Nov','14/Dez'],
      '4': ['22/Jan','19/Fev','23/Mar','22/Abr','21/Mai','22/Jun','23/Jul','21/Ago','22/Set','22/Out','19/Nov','15/Dez'],
      '5': ['23/Jan','20/Fev','24/Mar','23/Abr','22/Mai','23/Jun','24/Jul','24/Ago','23/Set','23/Out','23/Nov','16/Dez'],
      '6': ['26/Jan','23/Fev','25/Mar','24/Abr','25/Mai','24/Jun','27/Jul','25/Ago','24/Set','26/Out','24/Nov','17/Dez'],
      '7': ['27/Jan','24/Fev','26/Mar','27/Abr','26/Mai','25/Jun','28/Jul','26/Ago','25/Set','27/Out','25/Nov','18/Dez'],
      '8': ['28/Jan','25/Fev','27/Mar','28/Abr','27/Mai','26/Jun','29/Jul','27/Ago','28/Set','28/Out','26/Nov','21/Dez'],
      '9': ['29/Jan','26/Fev','30/Mar','29/Abr','28/Mai','29/Jun','30/Jul','28/Ago','29/Set','29/Out','27/Nov','22/Dez'],
      '0': ['30/Jan','27/Fev','31/Mar','30/Abr','29/Mai','30/Jun','31/Jul','31/Ago','30/Set','30/Out','30/Nov','23/Dez'],
    }),
    []
  );

  const months = useMemo(
    () => ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    []
  );

  useEffect(() => {
    document.title = "Bolsa Família 2026: quem tem direito, valores, calendário e como evitar bloqueio";
    window.scrollTo(0, 0);
  }, []);

  // ✅ TOC com âncoras (melhora scan + tempo na página)
  const toc = useMemo(
    () => [
      { id: 'intro', label: 'O que mudou em 2026' },
      { id: 'como-entrar', label: 'Como entrar (CadÚnico + seleção)' },
      { id: 'quiz', label: 'Simulação rápida: posso ter direito?' },
      { id: 'averiguacao', label: 'Averiguação/ revisão: por que acontece' },
      { id: 'bloqueio', label: 'Motivos de bloqueio/suspensão' },
      { id: 'desbloquear', label: 'Bolsa Família bloqueado: o que fazer' },
      { id: 'valores', label: 'Valores e composição do benefício' },
      { id: 'calendario', label: 'Calendário 2026 por final do NIS' },
      { id: 'canais', label: 'Canais oficiais (apps e telefones)' },
      { id: 'faq', label: 'Perguntas frequentes' },
      { id: 'legal', label: 'Aviso legal e fontes' },
    ],
    []
  );

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // ✅ Schema forte (WebPage + Article + FAQPage)
  const schemaGraph = useMemo(() => {
    const url = "https://marciobevervanso.com/bolsa-familia-2026";
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://marciobevervanso.com/#website",
          "name": "Guia Social Brasil",
          "url": "https://marciobevervanso.com/",
          "description": "Portal informativo sobre benefícios sociais, cidadania e programas do governo."
        },
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          "url": url,
          "name": "Bolsa Família 2026: quem tem direito, valores, calendário e como evitar bloqueio",
          "isPartOf": { "@id": "https://marciobevervanso.com/#website" }
        },
        {
          "@type": "Article",
          "@id": `${url}#article`,
          "headline": "Bolsa Família 2026: quem tem direito, valores, calendário e como evitar bloqueio",
          "description": "Guia prático: regras, calendário por NIS, condicionalidades, averiguação e como regularizar no CadÚnico/CRAS.",
          "author": { "@type": "Organization", "name": "Guia Social Brasil" },
          "publisher": { "@type": "Organization", "name": "Guia Social Brasil" },
          "mainEntityOfPage": { "@id": `${url}#webpage` },
          "dateModified": "2025-12-27"
        },
        {
          "@type": "FAQPage",
          "@id": `${url}#faq`,
          "mainEntity": [
            {
              "@type": "Question",
              "name": "PIX pode interferir no Bolsa Família?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Movimentações recorrentes podem levar o cadastro para revisão se indicarem renda acima do limite. Transferências eventuais e baixas normalmente não geram impacto imediato; o mais importante é manter o CadÚnico atualizado e coerente com a realidade."
              }
            },
            {
              "@type": "Question",
              "name": "Trabalho temporário cancela automaticamente o benefício?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Não necessariamente. Em muitos casos pode ser aplicada a Regra de Proteção, com manutenção parcial do benefício por um período, dependendo da renda per capita e das regras vigentes."
              }
            },
            {
              "@type": "Question",
              "name": "Quais são os canais oficiais para consultar e tirar dúvidas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use os aplicativos oficiais (Bolsa Família e Caixa Tem). Para dúvidas, ligue 121 (Disque Social) e 111 (Caixa)."
              }
            }
          ]
        }
      ]
    };
  }, []);

  return (
    <BroadcastLayout
      title="Bolsa Família 2026: quem tem direito, valores, calendário e como evitar bloqueio"
      subtitle="Guia prático e atualizado: regras do CadÚnico, averiguação/revisão, motivos de bloqueio e datas oficiais por final do NIS."
      onNavigate={onNavigate}
      quizId="2"
      quizzes={quizzes}
      updatedDate="Atualizado em 27/12/2025"
    >
      <SchemaMarkup data={schemaGraph} />

      {/* CTA Sticky (ganha clique + sessão) */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-5xl px-3 pb-3">
          <div className="bg-white/95 backdrop-blur border border-slate-200 shadow-lg rounded-2xl p-3 flex items-center gap-2">
            <button
              onClick={() => scrollToId('calendario')}
              className="flex-1 py-3 rounded-xl font-black bg-slate-900 text-white hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <CalendarDays size={18} />
              Ver calendário pelo NIS
            </button>
            <button
              onClick={() => scrollToId('quiz')}
              className="flex-1 py-3 rounded-xl font-black bg-blue-600 text-white hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <Search size={18} />
              Fazer simulação rápida
            </button>
          </div>
        </div>
      </div>

      <article className="space-y-12 pb-28">
        {/* SUMÁRIO */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-3">
            <ListChecks className="text-blue-600" size={20} />
            <h2 className="text-lg font-black text-slate-900">Atalhos do guia (clique e vá direto)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {toc.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="text-left px-4 py-3 rounded-2xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition flex items-center justify-between"
              >
                <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                <ArrowRight size={16} className="text-slate-400" />
              </button>
            ))}
          </div>

          <p className="text-xs text-slate-500 mt-4 flex items-center gap-2">
            <ShieldCheck size={14} className="text-slate-400" />
            Este conteúdo é informativo. Não realizamos cadastro oficial e não solicitamos CPF.
          </p>
        </section>

        {/* 1 */}
        <section id="intro">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            O que mudou em 2026 (e por que seu cadastro precisa estar em dia)
          </h2>
          <p className="mb-4">
            O Bolsa Família segue como a principal política de transferência de renda do país, mas em 2026 o ponto mais importante para manter o benefício é simples:
            <strong> cadastro atualizado e informações coerentes no CadÚnico</strong>. Quando existem divergências, o benefício pode entrar em averiguação,
            revisão ou até bloqueio preventivo.
          </p>
          <p className="mb-4">
            A boa notícia: na maioria dos casos, dá para resolver seguindo um passo a passo objetivo (documentos certos + atualização no CRAS). Aqui você vai ver
            tudo em linguagem direta: regras, calendário oficial, o que causa bloqueio e o que fazer para regularizar.
          </p>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle size={18} className="text-blue-600" />
              <h3 className="font-black text-slate-900">Quer ir direto ao que importa?</h3>
            </div>
            <p className="text-sm text-slate-700 mb-4">
              Use a simulação rápida e depois confira o calendário pelo final do seu NIS.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => scrollToId('quiz')}
                className="flex-1 py-3 rounded-2xl font-black bg-blue-600 text-white hover:opacity-90 transition"
              >
                Fazer simulação agora
              </button>
              <button
                onClick={() => scrollToId('calendario')}
                className="flex-1 py-3 rounded-2xl font-black bg-slate-900 text-white hover:opacity-90 transition"
              >
                Ver calendário pelo NIS
              </button>
            </div>
          </div>
        </section>

        {/* 2 */}
        <section id="como-entrar">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Como entrar no Bolsa Família (CadÚnico + seleção)
          </h2>

          <p className="mb-4">
            O caminho sempre começa no município: inscrição ou atualização no <strong>Cadastro Único (CadÚnico)</strong>, geralmente no CRAS.
            Ali são coletadas informações sobre renda, composição familiar, endereço e rotina escolar/saúde.
          </p>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 my-6">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-blue-600" size={20} /> Regra de renda (como é calculada)
            </h4>
            <p className="text-sm text-slate-600 mb-0">
              A renda familiar per capita é a soma dos rendimentos do domicílio dividida pelo número de moradores.
              Se a renda se mantém dentro dos critérios do programa, a família pode ser selecionada (dependendo das regras vigentes e processamento do sistema).
            </p>
          </div>

          <p className="mb-4">
            Depois da seleção, a Caixa operacionaliza o pagamento e o acesso costuma ocorrer via <strong>Caixa Tem</strong> e app oficial do programa.
            Se houver divergência cadastral, podem aparecer mensagens de averiguação/revisão no extrato.
          </p>
        </section>

        {/* Banner */}
        <SuperSimBanner />

        {/* QUIZ TEASER (ponto ideal do funil) */}
        <section id="quiz" className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-2">
            <Search className="text-blue-600" size={20} />
            <h2 className="text-xl font-black text-slate-900">Simulação rápida: posso ter direito?</h2>
          </div>
          <p className="text-sm text-slate-700 mb-4">
            Responda 6 perguntas rápidas e veja quais critérios você precisa conferir no CadÚnico.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            {[
              'Renda por pessoa (estimativa)',
              'Crianças/gestantes/nutrizes',
              'Situação do CadÚnico',
            ].map((t) => (
              <div key={t} className="bg-slate-50 rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-bold text-slate-900">{t}</p>
                <p className="text-xs text-slate-600 mt-1">
                  Sem pedir CPF. É uma orientação informativa para você entender o caminho.
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => onNavigate('quiz' as unknown as ViewState)}
            className="w-full py-3 rounded-2xl font-black bg-blue-600 text-white hover:opacity-90 transition"
          >
            Começar simulação agora
          </button>

          <p className="text-[11px] text-slate-500 mt-3 flex items-center gap-2">
            <ShieldCheck size={14} className="text-slate-400" />
            Não é cadastro oficial. Para dados oficiais, use os canais do governo.
          </p>
        </section>

        {/* 3 */}
        <section id="averiguacao">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Averiguação e revisão em 2026: por que acontece e como se prevenir
          </h2>

          <p className="mb-4">
            Em 2026, o programa segue com rotinas de verificação que cruzam informações de diferentes bases para identificar divergências.
            Na prática, quando o sistema encontra algo fora do padrão, pode aparecer um alerta pedindo atualização cadastral.
          </p>

          <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 my-6">
            <h4 className="font-bold text-slate-900 mb-2">Dica que evita dor de cabeça</h4>
            <p className="text-sm text-slate-700 m-0">
              Mudou renda, endereço, entrou/saiu morador, separou, teve filho(a)? Atualize no CadÚnico o quanto antes.
              Quanto mais tempo a divergência fica “rodando”, maior a chance de bloqueio preventivo.
            </p>
          </div>
        </section>

        {/* 4 */}
        <section id="bloqueio">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Motivos comuns de bloqueio ou suspensão do Bolsa Família
          </h2>

          <p className="mb-6">
            Alguns motivos aparecem com muita frequência. Entender isso evita susto e ajuda você a agir rápido.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-black text-slate-800 mb-3 flex items-center gap-2">
                <RefreshCw size={20} className="text-orange-500" /> CadÚnico desatualizado
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                O cadastro precisa ser revisado periodicamente (e sempre que houver mudança importante). Se não atualizar, o sistema pode bloquear por segurança.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-black text-slate-800 mb-3 flex items-center gap-2">
                <Scale size={20} className="text-orange-500" /> Alteração de renda
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Se a renda por pessoa subir além do limite, o benefício pode entrar em revisão. Em alguns cenários, pode existir regra de transição/proteção.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-black text-slate-800 mb-3 flex items-center gap-2">
                <GraduationCap size={20} className="text-orange-500" /> Frequência escolar
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                A escola informa presença. Baixa frequência pode gerar advertências e, depois, suspensão. Verifique com a escola e regularize rápido.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-black text-slate-800 mb-3 flex items-center gap-2">
                <HeartPulse size={20} className="text-orange-500" /> Saúde e acompanhamento
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Vacinas e acompanhamento (crianças/gestantes) são condicionalidades. Se estiver pendente, procure a unidade de saúde e atualize registros.
              </p>
            </div>
          </div>
        </section>

        {/* 5 */}
        <section id="desbloquear">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Bolsa Família bloqueado: o que fazer (passo a passo)
          </h2>

          <p className="mb-4">
            Primeiro, confira no app/extrato se existe mensagem de averiguação/revisão e qual o motivo. Depois, faça a regularização no CRAS/posto do CadÚnico.
          </p>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="font-black text-slate-900 mb-3">Checklist rápido de documentos</h3>
            <ul className="text-sm text-slate-700 space-y-2">
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-600 mt-0.5" /> RG e CPF de todos os moradores</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-600 mt-0.5" /> Comprovante de residência atualizado</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-600 mt-0.5" /> Comprovantes escolares (matrícula/frequência, se aplicável)</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-600 mt-0.5" /> Carteira de vacinação / acompanhamento de saúde (quando necessário)</li>
            </ul>
            <p className="text-xs text-slate-500 mt-4">
              Após atualização, o processamento pode levar algumas semanas. Se regularizado, em alguns casos pode haver pagamento retroativo conforme regras administrativas.
            </p>
          </div>
        </section>

        {/* Banner */}
        <CredspotBanner />

        {/* 6 */}
        <section id="valores">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Valores do Bolsa Família em 2026 (como a composição funciona)
          </h2>
          <p className="mb-4">
            O valor final pode variar conforme a composição familiar. Além do valor base, existem adicionais que costumam depender de faixa etária e perfil (ex.: crianças, gestantes, nutrizes).
          </p>
          <p className="mb-4">
            Como valores e regras podem sofrer ajustes por decisões orçamentárias e normativas, o ideal é usar os canais oficiais para ver o cálculo exato do seu mês.
          </p>
        </section>

        {/* 7 */}
        <section id="calendario">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Calendário oficial Bolsa Família 2026 (por final do NIS)
          </h2>

          <p className="mb-4">
            Os pagamentos são escalonados pelo último dígito do NIS e acontecem nos últimos dias úteis do mês (com antecipação em dezembro).
          </p>

          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] my-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 opacity-10 blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-black mb-6 text-center flex items-center justify-center gap-2">
                <CalendarDays size={20} />
                Selecione o final do NIS
              </h3>

              <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {[1,2,3,4,5,6,7,8,9,0].map(n => (
                  <button
                    key={n}
                    onClick={() => setSelectedNis(n.toString())}
                    className={`w-10 h-10 rounded-xl font-black transition-all border ${
                      selectedNis === n.toString()
                        ? 'bg-white text-slate-900 border-white scale-110'
                        : 'bg-transparent border-slate-600 text-slate-400'
                    }`}
                    aria-label={`NIS final ${n}`}
                  >
                    {n}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {months.map((mes, i) => (
                  <div key={mes} className="bg-white/10 p-4 rounded-2xl text-center border border-white/5">
                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">{mes}</p>
                    <p className="text-lg font-black text-white">{calendar2026[selectedNis][i]}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-400 mt-6 text-center">
                Fonte: calendário de pagamentos divulgado pelo MDS para 2026.
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-700">
            Dica: o valor fica disponível para movimentação digital no app (Caixa Tem) e também pode ser consultado no aplicativo oficial do Bolsa Família.
          </p>
        </section>

        {/* 8 */}
        <section id="canais">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Canais oficiais para consulta (apps e telefones)
          </h2>

          <p className="mb-6">
            Para segurança, use sempre canais oficiais. Se alguém oferecer “consulta premium” ou pedir dados sensíveis, desconfie.
          </p>

          <ul className="space-y-4">
            <li className="flex gap-4 items-start bg-white p-4 rounded-xl border border-slate-100">
              <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
              <div className="text-sm text-slate-700">
                <strong>Aplicativo Bolsa Família:</strong> consulta de saldo, extrato e datas.
              </div>
            </li>
            <li className="flex gap-4 items-start bg-white p-4 rounded-xl border border-slate-100">
              <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
              <div className="text-sm text-slate-700">
                <strong>Aplicativo Caixa Tem:</strong> movimentação (PIX, pagamentos, transferências).
              </div>
            </li>
            <li className="flex gap-4 items-start bg-white p-4 rounded-xl border border-slate-100">
              <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
              <div className="text-sm text-slate-700">
                <strong>Disque Social 121:</strong> dúvidas e orientações do programa.
              </div>
            </li>
            <li className="flex gap-4 items-start bg-white p-4 rounded-xl border border-slate-100">
              <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
              <div className="text-sm text-slate-700">
                <strong>Caixa 111:</strong> suporte do agente pagador.
              </div>
            </li>
          </ul>
        </section>

        {/* 9 */}
        <section id="faq">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Perguntas frequentes (FAQ)
          </h2>

          <div className="space-y-8">
            <div>
              <h4 className="font-black text-slate-900 text-lg mb-2">
                PIX pode interferir no benefício?
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Movimentações recorrentes podem levar o cadastro para revisão se indicarem renda acima do limite. Transferências eventuais e de baixo valor geralmente
                não geram impacto imediato; o principal é manter o CadÚnico consistente com a realidade.
              </p>
            </div>

            <div>
              <h4 className="font-black text-slate-900 text-lg mb-2">
                Trabalho temporário cancela automaticamente?
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Não necessariamente. Pode existir regra de transição/proteção dependendo da renda per capita e das regras vigentes, evitando cancelamento imediato.
              </p>
            </div>

            <div>
              <h4 className="font-black text-slate-900 text-lg mb-2">
                Posso receber Bolsa Família e Auxílio Gás?
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Em geral, benefícios podem coexistir conforme critérios e regras de cada programa. O essencial é que a renda e os dados do CadÚnico estejam corretos.
              </p>
            </div>
          </div>
        </section>

        {/* 10 */}
        <section id="legal" className="pt-12 border-t border-slate-200">
          <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
            Aviso legal e fontes
          </h2>

          <div className="bg-slate-50 p-8 rounded-3xl text-xs text-slate-600 leading-relaxed border border-slate-200">
            <p className="mb-4">
              <strong>Isenção de Responsabilidade:</strong> este conteúdo é informativo e educativo. O portal marciobevervanso.com opera de forma independente e não possui vínculo
              oficial com o Governo Federal, com o MDS ou com a Caixa Econômica Federal.
            </p>
            <p className="mb-4">
              Para orientações oficiais e dados pessoais, utilize exclusivamente canais governamentais. Este artigo não substitui atendimento no CRAS/CadÚnico.
            </p>
            <p>
              <strong>Fontes:</strong> publicações e comunicados oficiais do Governo Federal (gov.br) e calendário divulgado pelo MDS para 2026.
            </p>
          </div>
        </section>
      </article>
    </BroadcastLayout>
  );
};
