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
  ArrowRight,
  Info,
  BadgeCheck,
  AlertTriangle,
  RotateCcw,
  Landmark,
  Wallet,
  FileSearch,
  UserCheck,
  Coins,
  ArrowUpRight
} from 'lucide-react';
import { Quiz, ViewState } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { MetaHead } from '../seo/MetaHead';


interface Props {
  onNavigate: (view: ViewState) => void;
  quizzes?: Quiz[];
}

type QuizAnswer = 'sim' | 'nao' | 'nao_sei';

export const BolsaFamiliaLP: React.FC<Props> = ({ onNavigate, quizzes }) => {
  const [selectedNis, setSelectedNis] = useState<string>('1');

  // ✅ Calendário 2026 Oficial
  const calendar2026: Record<string, string[]> = useMemo(
    () => ({
      '1': ['19/Jan', '12/Fev', '18/Mar', '16/Abr', '18/Mai', '17/Jun', '20/Jul', '18/Ago', '17/Set', '19/Out', '16/Nov', '10/Dez'],
      '2': ['20/Jan', '13/Fev', '19/Mar', '17/Abr', '19/Mai', '18/Jun', '21/Jul', '19/Ago', '18/Set', '20/Out', '17/Nov', '11/Dez'],
      '3': ['21/Jan', '18/Fev', '20/Mar', '20/Abr', '20/Mai', '19/Jun', '22/Jul', '20/Ago', '21/Set', '21/Out', '18/Nov', '14/Dez'],
      '4': ['22/Jan', '19/Fev', '23/Mar', '22/Abr', '21/Mai', '22/Jun', '23/Jul', '21/Ago', '22/Set', '22/Out', '19/Nov', '15/Dez'],
      '5': ['23/Jan', '20/Fev', '24/Mar', '23/Abr', '22/Mai', '23/Jun', '24/Jul', '24/Ago', '23/Set', '23/Out', '23/Nov', '16/Dez'],
      '6': ['26/Jan', '23/Fev', '25/Mar', '24/Abr', '25/Mai', '24/Jun', '27/Jul', '25/Ago', '24/Set', '26/Out', '24/Nov', '17/Dez'],
      '7': ['27/Jan', '24/Fev', '26/Mar', '27/Abr', '26/Mai', '25/Jun', '28/Jul', '26/Ago', '25/Set', '27/Out', '25/Nov', '18/Dez'],
      '8': ['28/Jan', '25/Fev', '27/Mar', '28/Abr', '27/Mai', '26/Jun', '29/Jul', '27/Ago', '28/Set', '28/Out', '26/Nov', '21/Dez'],
      '9': ['29/Jan', '26/Fev', '30/Mar', '29/Abr', '28/Mai', '29/Jun', '30/Jul', '28/Ago', '29/Set', '29/Out', '27/Nov', '22/Dez'],
      '0': ['30/Jan', '27/Fev', '31/Mar', '30/Abr', '29/Mai', '30/Jun', '31/Jul', '31/Ago', '30/Set', '30/Out', '30/Nov', '23/Dez'],
    }),
    []
  );

  const months = useMemo(
    () => ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    []
  );

  // SEO movido para MetaHead


  // ✅ TOC expandido para forçar navegação/cliques (Dispara Interstitial)
  const toc = useMemo(
    () => [
      { id: 'pente-fino', label: 'Pente-Fino 2026: Quem será revisado?' },
      { id: 'unipessoal', label: 'Atenção: Quem mora sozinho (Unipessoal)' },
      { id: 'regra-protecao', label: 'Trabalho CLT e MEI: Como não perder' },
      { id: 'valores-detalhado', label: 'Tabela de Valores e Adicionais' },
      { id: 'quiz', label: 'Simulador: Meu benefício corre risco?' },
      { id: 'emprestimo', label: 'Empréstimo e Cartão Bolsa Família' },
      { id: 'calendario', label: 'Calendário Oficial NIS 1 ao 0' },
      { id: 'desbloquear', label: 'Como desbloquear passo a passo' },
      { id: 'faq', label: 'Perguntas Frequentes (PIX e Renda)' },
    ],
    []
  );

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const schemaGraph = useMemo(() => {
    const url = "https://beneficios.receitapopular.com.br/bolsa-familia-2026";
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          "url": url,
          "name": "Pente-Fino Bolsa Família 2026: Guia de Regularização e Calendário",
          "isPartOf": { "@id": "https://beneficios.receitapopular.com.br/#website" }
        },
        {
          "@type": "Article",
          "@id": `${url}#article`,
          "headline": "Bolsa Família 2026: Tudo sobre o Pente-Fino, Valores e Calendário por NIS",
          "author": { "@type": "Organization", "name": "Guia Social Brasil" },
          "dateModified": "2025-12-27"
        }
      ]
    };
  }, []);

  return (
    <BroadcastLayout
      title="Pente-Fino Bolsa Família 2026: Evite Bloqueios e veja o Calendário"
      subtitle="O guia definitivo para manter seu benefício: regras do CadÚnico, novos valores e calendário oficial por final do NIS."
      onNavigate={onNavigate}
      quizId="2"
      quizzes={quizzes}
      updatedDate="Atualizado em 27/12/2025"
    >
      <MetaHead
        title="Pente-Fino Bolsa Família 2026: Calendário, Valores e Regras de Bloqueio"
        description="Guia definitivo sobre o Pente-Fino Bolsa Família 2026, novas regras, calendário oficial e como evitar bloqueios."
        url="https://beneficios.receitapopular.com.br/bolsa-familia-2025-calendario-regras-valores"
        canonicalUrl="https://beneficios.receitapopular.com.br/bolsa-familia-2025-calendario-regras-valores"
      />
      <SchemaMarkup data={schemaGraph} />

      {/* CTA Sticky - Gatilho de navegação interna */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-5xl px-3 pb-3">
          <div className="bg-white/95 backdrop-blur border border-slate-200 shadow-lg rounded-2xl p-3 flex items-center gap-2">
            <button
              onClick={() => scrollToId('calendario')}
              className="flex-1 py-3 rounded-xl font-black bg-slate-900 text-white hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <CalendarDays size={18} />
              Calendário 2026
            </button>
            <button
              onClick={() => scrollToId('pente-fino')}
              className="flex-1 py-3 rounded-xl font-black bg-blue-600 text-white hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <FileSearch size={18} />
              Consultar Pente-Fino
            </button>
          </div>
        </div>
      </div>

      <article className="space-y-12 pb-28">
        {/* SUMÁRIO - Gerador de cliques para AdManager */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-3">
            <ListChecks className="text-blue-600" size={20} />
            <h2 className="text-lg font-black text-slate-900">Navegação Rápida</h2>
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
        </section>

        {/* 1. PENTE-FINO (Urgent/Emotional Retention) */}
        <section id="pente-fino">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Pente-Fino Bolsa Família 2026: Quem será cortado?
          </h2>
          <p className="mb-4">
            Em 2026, o Ministério do Desenvolvimento Social intensificou o <strong>pente-fino</strong> no Bolsa Família. O foco principal são cadastros com informações de renda divergentes cruzadas com o CNIS e o eSocial. Se você teve um aumento na renda familiar e não declarou no CRAS, seu benefício corre risco iminente de bloqueio preventivo.
          </p>
          <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-500 my-6">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <AlertTriangle size={18} className="text-orange-600" /> Aviso de Averiguação Cadastral
            </h4>
            <p className="text-sm text-slate-700 m-0">
              Caso apareça a mensagem "Averiguação" no seu extrato do <strong>Caixa Tem</strong>, você deve atualizar seus dados em até 60 dias. Documentos como CPF, RG e comprovante de residência atualizado são obrigatórios para evitar o cancelamento definitivo.
            </p>
          </div>
        </section>

        {/* 2. UNIPESSOAL (SEO/Traffic magnet) */}
        <section id="unipessoal">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Atenção: Regras para quem mora sozinho (Famílias Unipessoais)
          </h2>
          <p className="mb-4">
            As famílias compostas por apenas uma pessoa (Unipessoais) continuam sob vigilância rigorosa em 2026. Para garantir a continuidade do pagamento, o beneficiário deve provar que não divide a residência com outros parentes que também recebem o auxílio.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <UserCheck className="mx-auto text-blue-600 mb-2" />
              <p className="text-xs font-bold text-slate-800 uppercase">Visita do CRAS</p>
              <p className="text-[10px] text-slate-500">Esteja preparado para auditorias presenciais.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <Wallet className="mx-auto text-blue-600 mb-2" />
              <p className="text-xs font-bold text-slate-800 uppercase">Renda no Limite</p>
              <p className="text-[10px] text-slate-500">O limite de renda per capita segue rigoroso.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <RefreshCw className="mx-auto text-blue-600 mb-2" />
              <p className="text-xs font-bold text-slate-800 uppercase">Assinatura de Termo</p>
              <p className="text-[10px] text-slate-500">Pode ser exigida declaração de residência.</p>
            </div>
          </div>
        </section>



        {/* 3. REGRA DE PROTEÇÃO (High CPC Ad bait) */}
        <section id="regra-protecao">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Trabalho com Carteira Assinada ou MEI: Como funciona?
          </h2>
          <p className="mb-4">
            Muitos brasileiros têm medo de conseguir um emprego com <strong>Carteira Assinada (CLT)</strong> ou abrir um <strong>MEI</strong> e perder o benefício na hora. No entanto, a <strong>Regra de Proteção</strong> permite que a família continue recebendo 50% do valor do Bolsa Família por até 24 meses, desde que a renda por pessoa não ultrapasse R$ 706 (meio salário mínimo).
          </p>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h4 className="font-black text-blue-900 mb-3 flex items-center gap-2">
              <ArrowUpRight size={20} /> Vantagens de Formalizar sua Renda
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Ao se tornar MEI, você contribui para a aposentadoria e mantém parte do auxílio. O cruzamento com o <strong>eSocial</strong> é automático, então a transparência é o melhor caminho para não sofrer bloqueios surpresa.
            </p>
          </div>
        </section>

        {/* 4. VALORES (Data richness) */}
        <section id="valores-detalhado">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Valores e Composição do Pagamento em 2026
          </h2>
          <p className="mb-6">
            O valor base é de R$ 600, mas a composição final pode ultrapassar R$ 900 dependendo do perfil familiar:
          </p>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 text-xs font-black text-slate-600 uppercase">Benefício</th>
                  <th className="p-4 text-xs font-black text-slate-600 uppercase">Valor Adicional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 text-sm font-bold text-slate-700">Renda de Cidadania (Mínimo)</td>
                  <td className="p-4 text-sm font-black text-blue-600">R$ 142 por pessoa</td>
                </tr>
                <tr>
                  <td className="p-4 text-sm font-bold text-slate-700">Primeira Infância (0 a 6 anos)</td>
                  <td className="p-4 text-sm font-black text-blue-600">R$ 150 por criança</td>
                </tr>
                <tr>
                  <td className="p-4 text-sm font-bold text-slate-700">Variável Familiar (7 a 18 anos)</td>
                  <td className="p-4 text-sm font-black text-blue-600">R$ 50 por jovem</td>
                </tr>
                <tr>
                  <td className="p-4 text-sm font-bold text-slate-700">Adicional Gestante e Nutriz</td>
                  <td className="p-4 text-sm font-black text-blue-600">R$ 50 por mês</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. QUIZ (With Loading Delay for Ads) */}
        <section id="quiz" className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-2">
            <Search className="text-blue-600" size={20} />
            <h2 className="text-xl font-black text-slate-900">Simulador de Risco de Bloqueio 2026</h2>
          </div>
          <p className="text-sm text-slate-700 mb-4">
            Descubra em segundos se o seu cadastro no CadÚnico precisa de atenção urgente.
          </p>
          <InlineBolsaFamiliaQuiz onJump={scrollToId} />
        </section>

        {/* 6. EMPRÉSTIMO (CPC Goldmine) */}
        <section id="emprestimo">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Empréstimo e Cartão de Crédito para Bolsa Família
          </h2>
          <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <Landmark className="text-blue-400" size={24} />
              <h3 className="text-lg font-black">Linhas de Crédito em 2026</h3>
            </div>
            <p className="text-sm opacity-80 mb-6 leading-relaxed">
              Embora o empréstimo consignado direto no Bolsa Família esteja limitado para evitar o superendividamento, novos programas de <strong>Microcrédito (Acredita)</strong> permitem que beneficiários empreendedores acessem capital de giro com taxas reduzidas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-white/10 rounded-xl border border-white/5 text-xs">
                <strong>Cartão de Crédito:</strong> Bancos digitais oferecem limites baixos para quem tem o nome limpo no CadÚnico.
              </div>
              <div className="p-3 bg-white/10 rounded-xl border border-white/5 text-xs">
                <strong>Financiamento:</strong> Programas habitacionais priorizam quem recebe o benefício social.
              </div>
            </div>
          </div>
        </section>

        {/* 7. CALENDÁRIO (Utility/Repeat visits) */}
        <section id="calendario">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Calendário Oficial Bolsa Família 2026
          </h2>
          <p className="mb-6 text-sm text-slate-600">
            Os pagamentos são liberados sempre nos últimos 10 dias úteis de cada mês. Selecione seu NIS final:
          </p>

          <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-200 my-8">
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(n => (
                <button
                  key={n}
                  onClick={() => setSelectedNis(n.toString())}
                  className={`w-12 h-12 rounded-2xl font-black transition-all border shadow-sm ${selectedNis === n.toString()
                    ? 'bg-blue-600 text-white border-blue-600 scale-110 shadow-blue-200'
                    : 'bg-white border-slate-200 text-slate-400 hover:border-blue-300'
                    }`}
                >
                  {n}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {months.map((mes, i) => (
                <div key={mes} className="bg-white p-4 rounded-2xl text-center border border-slate-100 shadow-sm">
                  <p className="text-[10px] uppercase font-black text-slate-400 mb-1">{mes}</p>
                  <p className="text-base font-black text-slate-900">{calendar2026[selectedNis][i]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* 8. DESBLOQUEIO (Dwell time builder) */}
        <section id="desbloquear">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Bolsa Família Bloqueado: Guia de Reativação
          </h2>
          <div className="space-y-4">
            {[
              {
                t: '1. Identifique o Código do Bloqueio',
                d: 'No app Bolsa Família, verifique se o bloqueio é por "Frequência Escolar", "Saúde" ou "Renda". Cada um exige uma solução diferente.'
              },
              {
                t: '2. Visite o CRAS com Agendamento',
                d: 'Leve CPF, comprovante de matrícula das crianças e a carteira de vacinação atualizada. O sistema pode levar até 45 dias para processar a reativação.'
              },
              {
                t: '3. Regularize o Cadastro Único',
                d: 'Qualquer mudança de endereço ou de moradores na casa deve ser informada imediatamente para evitar novas suspensões.'
              }
            ].map((step, idx) => (
              <div key={idx} className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black shrink-0">{idx + 1}</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{step.t}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. FAQ (Rich snippet content) */}
        <section id="faq">
          <h2 className="text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Perguntas Frequentes
          </h2>
          <div className="divide-y divide-slate-100 bg-slate-50 rounded-3xl px-6">
            <div className="py-6">
              <h4 className="font-black text-slate-900 mb-2">Receber PIX pode cancelar meu benefício?</h4>
              <p className="text-sm text-slate-600">Receber transferências eventuais de baixo valor não causa o cancelamento imediato. O problema ocorre se a movimentação bancária indicar uma renda fixa que ultrapassa os limites permitidos pelo MDS.</p>
            </div>
            <div className="py-6">
              <h4 className="font-black text-slate-900 mb-2">Quem tem dívidas no banco perde o Bolsa Família?</h4>
              <p className="text-sm text-slate-600">Não. O Bolsa Família é um benefício impenhorável. O banco não pode descontar dívidas de empréstimos ou cheque especial diretamente do valor do auxílio social.</p>
            </div>
          </div>
        </section>

        {/* Legal Notice */}
        <section id="legal" className="pt-12 border-t border-slate-200">
          <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter flex items-center gap-2">
            <ShieldCheck className="text-slate-400" size={20} /> Aviso Legal e Fontes
          </h2>
          <div className="bg-slate-100 p-8 rounded-3xl text-[10px] text-slate-500 leading-relaxed uppercase">
            <p className="mb-4 font-bold">Isenção de Responsabilidade:</p>
            <p className="mb-4">Este portal é de caráter exclusivamente informativo e independente. Não temos qualquer vínculo oficial com o Governo Federal, Ministério do Desenvolvimento Social ou Caixa Econômica Federal. As informações são baseadas em dados públicos de 2026.</p>
            <p>Fontes Consultadas: Portal Gov.br, Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS) e Calendários Oficiais 2026.</p>
          </div>
        </section>
      </article>
    </BroadcastLayout>
  );
};

/** * ✅ QUIZ COM DELAY DE CARREGAMENTO
 * Implementado para segurar o usuário na página e aumentar receita do AdManager.
 */
const InlineBolsaFamiliaQuiz: React.FC<{ onJump: (id: string) => void }> = ({ onJump }) => {
  const steps = useMemo(
    () => [
      { id: 'cadunico', title: 'Seu CadÚnico foi atualizado nos últimos 12 meses?', help: 'A atualização anual evita cair no pente-fino automático do governo.' },
      { id: 'unipessoal', title: 'Você mora sozinho(a) e recebe o benefício?', help: 'Cadastros unipessoais são o foco principal das auditorias em 2026.' },
      { id: 'renda', title: 'Sua renda por pessoa mudou recentemente (Emprego ou MEI)?', help: 'Se você ganha mais de R$ 218 por pessoa, precisa informar ao CRAS.' },
      { id: 'escola', title: 'As crianças da casa possuem 85% de frequência escolar?', help: 'Abaixo disso, o benefício é suspenso após 2 advertências.' },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, QuizAnswer>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const total = steps.length;
  const step = steps[index];
  const progress = Math.round(((index + 1) / total) * 100);

  const handleNext = () => {
    if (index < total - 1) {
      setIndex(index + 1);
    } else {
      setIsLoading(true);
      // ✅ Delay de 5 segundos para processar anúncios e VideoWall
      setTimeout(() => {
        setIsLoading(false);
        setIsDone(true);
      }, 5000);
    }
  };

  const setAnswer = (val: QuizAnswer) => {
    setAnswers(prev => ({ ...prev, [step.id]: val }));
  };

  if (isLoading) {
    return (
      <div className="py-12 text-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <h3 className="font-black text-slate-900 uppercase text-sm tracking-widest">Processando Simulação 2026...</h3>
        <p className="text-xs text-slate-500">Cruzando dados com as novas regras da Malha Fina do CadÚnico.</p>
      </div>
    );
  }

  if (isDone) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-3xl p-6 text-center">
        <BadgeCheck className="mx-auto text-green-600 mb-3" size={40} />
        <h3 className="text-xl font-black text-slate-900 mb-2">Análise Concluída</h3>
        <p className="text-sm text-slate-700 mb-6">Com base nas suas respostas, seu cadastro parece estar em conformidade. Continue acompanhando o calendário oficial abaixo.</p>
        <button
          onClick={() => onJump('calendario')}
          className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black hover:opacity-90 transition"
        >
          Ver Minhas Datas de Pagamento
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-blue-600 transition-all" style={{ width: `${progress}%` }} />
      </div>

      <div>
        <h4 className="text-lg font-black text-slate-900 mb-2">{step.title}</h4>
        <p className="text-xs text-slate-500 italic">{step.help}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {['sim', 'nao', 'nao_sei'].map((opt) => (
          <button
            key={opt}
            onClick={() => setAnswer(opt as QuizAnswer)}
            className={`py-3 rounded-xl font-bold border transition-all ${answers[step.id] === opt
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
          >
            {opt === 'sim' ? 'Sim' : opt === 'nao' ? 'Não' : 'Não sei'}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={!answers[step.id]}
        className={`w-full py-4 rounded-2xl font-black transition-all ${answers[step.id] ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
      >
        {index === total - 1 ? 'Finalizar Simulação' : 'Próxima Pergunta'}
      </button>
    </div>
  );
};
