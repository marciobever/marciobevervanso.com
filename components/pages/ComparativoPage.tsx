
import React, { useState, useEffect } from 'react';
import { AdSlot } from '../AdSlot';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import {
   ArrowRightLeft, Check, X, Scale, Banknote, CreditCard,
   HelpCircle, AlertTriangle, ThumbsUp, ShieldCheck, Clock, Percent
} from 'lucide-react';

type ComparisonType = 'social' | 'loans' | 'cards';

export const ComparativoPage: React.FC = () => {
   const [activeTab, setActiveTab] = useState<ComparisonType>('social');

   // SEO Optimization
   useEffect(() => {
      document.title = "Comparador Oficial: Bolsa Família vs BPC vs Empréstimos 2026";

      const metaDesc = document.querySelector('meta[name="description"]');
      const desc = "Ferramenta de comparação gratuita. Descubra qual benefício paga mais, qual empréstimo tem juros menores e qual cartão é melhor para seu perfil.";
      if (metaDesc) {
         metaDesc.setAttribute('content', desc);
      }
   }, []);

   const renderSocialComparison = () => (
      <div className="animate-fade-in">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* VS Badge Mobile/Desktop Position */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border-4 border-slate-50 font-black text-slate-300 italic">
               VS
            </div>

            {/* Card A: Bolsa Família */}
            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-brand-blue"></div>
               <h3 className="text-xl font-extrabold text-brand-dark mb-1 mt-2">Bolsa Família</h3>
               <p className="text-sm text-slate-500 mb-6">Programa de Transferência de Renda</p>

               <div className="space-y-4">
                  <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
                     <span className="text-sm font-bold text-blue-900">Valor Base</span>
                     <span className="text-lg font-extrabold text-brand-blue">R$ 600,00</span>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-700">
                     <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> Renda até R$ 218 por pessoa</li>
                     <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> Adicional de R$ 150 por criança</li>
                     <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> Exige frequência escolar</li>
                     <li className="flex gap-2 text-gray-400"><X className="text-gray-300 shrink-0" /> Não tem 13º Salário</li>
                  </ul>
               </div>
            </div>

            {/* Card B: BPC/LOAS */}
            <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-purple-600"></div>
               <h3 className="text-xl font-extrabold text-brand-dark mb-1 mt-2">BPC / LOAS</h3>
               <p className="text-sm text-slate-500 mb-6">Benefício Assistencial ao Idoso/PcD</p>

               <div className="space-y-4">
                  <div className="flex justify-between items-center bg-purple-50 p-3 rounded-lg">
                     <span className="text-sm font-bold text-purple-900">Valor Fixo</span>
                     <span className="text-lg font-extrabold text-purple-700">R$ 1.509,00</span>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-700">
                     <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> Idoso 65+ ou Deficiência</li>
                     <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> Renda familiar de 1/4 salário</li>
                     <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> Não exige contribuição INSS</li>
                     <li className="flex gap-2 text-gray-400"><X className="text-gray-300 shrink-0" /> Não deixa pensão por morte</li>
                  </ul>
               </div>
            </div>
         </div>

         {/* Detailed Table */}
         <div className="mt-8 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm">
               <thead className="bg-slate-50 text-slate-900 font-bold border-b border-gray-200">
                  <tr>
                     <th className="p-4">Característica</th>
                     <th className="p-4 text-brand-blue">Bolsa Família</th>
                     <th className="p-4 text-purple-700">BPC / LOAS</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-100">
                  <tr>
                     <td className="p-4 font-medium text-slate-600">Pode trabalhar?</td>
                     <td className="p-4 text-green-600">Sim (Regra de Proteção)</td>
                     <td className="p-4 text-red-500">Não (Risco de corte)</td>
                  </tr>
                  <tr>
                     <td className="p-4 font-medium text-slate-600">Acumula benefícios?</td>
                     <td className="p-4">Sim (Vale Gás, Pé-de-Meia)</td>
                     <td className="p-4">Apenas Bolsa Família (casos raros)</td>
                  </tr>
                  <tr>
                     <td className="p-4 font-medium text-slate-600">Empréstimo?</td>
                     <td className="p-4 text-red-500">Suspenso (STF)</td>
                     <td className="p-4 text-green-600">Sim (Consignado liberado)</td>
                  </tr>
               </tbody>
            </table>
         </div>

         {/* Verdict */}
         <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <h4 className="flex items-center gap-2 font-bold text-yellow-800 text-lg mb-3">
               <Scale size={20} /> Veredito do Especialista
            </h4>
            <p className="text-sm text-yellow-900 leading-relaxed">
               Se você tem condições de trabalhar (mesmo que informalmente), o <strong>Bolsa Família</strong> é mais seguro, pois permite acumular renda. O <strong>BPC</strong> é ideal para quem tem incapacidade de longo prazo ou idosos sem aposentadoria, pois o valor é maior, mas exige perícia médica rigorosa.
            </p>
         </div>
      </div>
   );

   const renderLoansComparison = () => (
      <div className="animate-fade-in">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card A: FGTS */}
            <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-all">
               <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-lg text-green-700"><Banknote size={24} /></div>
                  <h3 className="font-bold text-lg text-slate-900">Antecipação FGTS</h3>
               </div>
               <p className="text-xs text-slate-500 mb-4 h-10">Usa seu saldo parado do Fundo de Garantia como pagamento.</p>

               <div className="bg-slate-50 rounded-lg p-3 mb-4">
                  <div className="flex justify-between mb-1">
                     <span className="text-xs font-bold text-slate-600">Taxa Média</span>
                     <span className="text-xs font-bold text-green-600">1,49% a.m.</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                     <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '20%' }}></div>
                  </div>
               </div>

               <ul className="space-y-2 text-xs text-slate-700 mb-6">
                  <li className="flex gap-2"><Check size={14} className="text-green-500" /> Não consulta SPC/Serasa</li>
                  <li className="flex gap-2"><Check size={14} className="text-green-500" /> Não desconta do salário mensal</li>
                  <li className="flex gap-2"><Check size={14} className="text-green-500" /> Dinheiro cai em minutos</li>
               </ul>
            </div>

            {/* Card B: Pessoal */}
            <div className="bg-white rounded-2xl p-6 border border-red-100 shadow-sm hover:shadow-md transition-all">
               <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 p-2 rounded-lg text-red-700"><Percent size={24} /></div>
                  <h3 className="font-bold text-lg text-slate-900">Empréstimo Pessoal</h3>
               </div>
               <p className="text-xs text-slate-500 mb-4 h-10">Crédito sujeito a análise de perfil e score bancário.</p>

               <div className="bg-slate-50 rounded-lg p-3 mb-4">
                  <div className="flex justify-between mb-1">
                     <span className="text-xs font-bold text-slate-600">Taxa Média</span>
                     <span className="text-xs font-bold text-red-600">4% a 18% a.m.</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                     <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
               </div>

               <ul className="space-y-2 text-xs text-slate-700 mb-6">
                  <li className="flex gap-2"><X size={14} className="text-red-500" /> Consulta SPC/Serasa</li>
                  <li className="flex gap-2"><X size={14} className="text-red-500" /> Juros muito mais altos</li>
                  <li className="flex gap-2"><Check size={14} className="text-green-500" /> Não mexe no FGTS</li>
               </ul>
            </div>
         </div>

         <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-slate-900 mb-4">Análise de Risco</h3>
            <div className="grid md:grid-cols-2 gap-6">
               <div>
                  <h4 className="text-sm font-bold text-green-700 mb-2 flex items-center gap-2"><ThumbsUp size={16} /> Recomendado: FGTS</h4>
                  <p className="text-sm text-slate-600">
                     Para quem tem saldo no FGTS, é a modalidade mais barata do mercado depois do consignado. Você adianta um dinheiro que já é seu e paga juros baixíssimos. <strong>Ideal para quitar dívidas caras.</strong>
                  </p>
               </div>
               <div>
                  <h4 className="text-sm font-bold text-red-700 mb-2 flex items-center gap-2"><AlertTriangle size={16} /> Cuidado: Pessoal</h4>
                  <p className="text-sm text-slate-600">
                     Use apenas em emergências extremas. Se você é negativado, as taxas podem chegar a 20% ao mês, criando uma "bola de neve" impagável.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );

   const renderCardsComparison = () => (
      <div className="animate-fade-in">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-0">
               <thead>
                  <tr className="bg-slate-900 text-white">
                     <th className="p-4 rounded-tl-xl rounded-bl-xl w-1/3">Critério</th>
                     <th className="p-4 w-1/3">Cartão de Crédito</th>
                     <th className="p-4 rounded-tr-xl rounded-br-xl w-1/3">Cartão Pré-Pago</th>
                  </tr>
               </thead>
               <tbody className="text-sm">
                  <tr className="bg-white border-b border-gray-100">
                     <td className="p-4 font-bold text-slate-700">Aprovação</td>
                     <td className="p-4 text-red-600">Difícil para Negativados</td>
                     <td className="p-4 text-green-600">Garantida (100%)</td>
                  </tr>
                  <tr className="bg-slate-50 border-b border-gray-100">
                     <td className="p-4 font-bold text-slate-700">Limite</td>
                     <td className="p-4">Definido pelo Banco</td>
                     <td className="p-4">O valor que você recarrega</td>
                  </tr>
                  <tr className="bg-white border-b border-gray-100">
                     <td className="p-4 font-bold text-slate-700">Parcelamento</td>
                     <td className="p-4 text-green-600 font-bold">Sim (até 12x)</td>
                     <td className="p-4 text-red-500">Não (Só à vista)</td>
                  </tr>
                  <tr className="bg-slate-50 border-b border-gray-100">
                     <td className="p-4 font-bold text-slate-700">Risco de Dívida</td>
                     <td className="p-4 text-red-500">Alto (Juros rotativos)</td>
                     <td className="p-4 text-green-600">Zero (Não gasta o que não tem)</td>
                  </tr>
                  <tr className="bg-white">
                     <td className="p-4 font-bold text-slate-700">Serviços Digitais</td>
                     <td className="p-4">Uber, iFood, Netflix</td>
                     <td className="p-4">Uber, iFood, Netflix</td>
                  </tr>
               </tbody>
            </table>
         </div>

         <div className="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-2xl flex gap-4 items-start">
            <ShieldCheck className="text-blue-600 shrink-0 mt-1" size={24} />
            <div>
               <h4 className="font-bold text-blue-900 text-lg mb-1">Qual escolher?</h4>
               <p className="text-sm text-blue-800 leading-relaxed mb-3">
                  <strong>Quer parcelar compras?</strong> Tente um Cartão de Crédito de entrada (como Will ou Neon).<br />
                  <strong>Quer controlar gastos ou está com nome muito sujo?</strong> O Pré-pago é a melhor ferramenta para usar aplicativos e comprar na internet sem se endividar.
               </p>
            </div>
         </div>
      </div>
   );

   return (
      <div className="bg-slate-50 min-h-screen py-10">
         <div className="container mx-auto px-4 md:px-6 max-w-4xl">

            <Breadcrumbs
               items={[{ label: 'Home', href: 'home' }, { label: 'Comparador de Benefícios' }]}
               onNavigate={(view) => window.location.href = view === 'home' ? '/' : '#'}
            />

            <div className="text-center mb-10">
               <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                  Comparativo Oficial
               </h1>
               <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Colocamos lado a lado as principais opções para você não cair em pegadinhas e escolher o melhor para o seu bolso.
               </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-gray-200 w-fit mx-auto">
               <button
                  onClick={() => setActiveTab('social')}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'social' ? 'bg-brand-blue text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
               >
                  <Scale size={16} /> Benefícios
               </button>
               <button
                  onClick={() => setActiveTab('loans')}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'loans' ? 'bg-green-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
               >
                  <Banknote size={16} /> Empréstimos
               </button>
               <button
                  onClick={() => setActiveTab('cards')}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'cards' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
               >
                  <CreditCard size={16} /> Cartões
               </button>
            </div>

            <AdSlot id="Content1" label="Recomendação de Leitura" />

            {/* Content Wrapper */}
            <div className="min-h-[400px]">
               {activeTab === 'social' && renderSocialComparison()}
               {activeTab === 'loans' && renderLoansComparison()}
               {activeTab === 'cards' && renderCardsComparison()}
            </div>

            <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 text-center">
               <HelpCircle className="mx-auto text-gray-400 mb-4" size={32} />
               <h3 className="font-bold text-slate-900 mb-2">Ainda com dúvida?</h3>
               <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto">
                  Nossa inteligência artificial pode analisar seu caso específico e recomendar a melhor opção.
               </p>
               <button
                  className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg"
                  onClick={() => alert("Função disponível no Chat IA")} // Placeholder for navigation
               >
                  Falar com Assistente Virtual
               </button>
            </div>

            <div className="mt-8">
               <AdSlot id="Content2" label="Publicidade Rodapé" />
            </div>

         </div>
      </div>
   );
};
