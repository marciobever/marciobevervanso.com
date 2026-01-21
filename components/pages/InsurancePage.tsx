
import React, { useEffect } from 'react';
import { INSURANCE_OPTIONS } from '../../constants';
import { AdSlot } from '../AdSlot';
import { ShieldCheck, HeartHandshake, CheckCircle2, AlertTriangle, Gift, Phone, Stethoscope, Umbrella, ChevronDown } from 'lucide-react';
import { IconHelper } from '../IconHelper';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { MetaHead } from '../seo/MetaHead';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { ViewState } from '../../types';

interface Props {
   onQuote?: (id: string) => void;
}

export const InsurancePage: React.FC<Props> = ({ onQuote }) => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const schemaData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": INSURANCE_OPTIONS.map((ins, index) => ({
         "@type": "FinancialProduct",
         "position": index + 1,
         "name": ins.title,
         "description": `Seguro do tipo ${ins.type} oferecido por ${ins.provider}. Cobertura inclui: ${ins.coverage.join(', ')}.`,
         "provider": {
            "@type": "Organization",
            "name": ins.provider
         },
         "offers": {
            "@type": "Offer",
            "priceCurrency": "BRL",
            "price": ins.monthlyPrice.replace('R$', '').trim().replace(',', '.')
         }
      }))
   };

   return (
      <div className="bg-white min-h-screen py-10">
         <MetaHead
            title="Seguro Popular: Vida, Funeral e Moto a partir de R$ 5,00/mês"
            description="Proteja sua família por centavos ao dia. Seguro de vida com auxílio funeral completo, sorteios mensais de R$ 10 mil e telemedicina grátis. Confira!"
            url="https://beneficios.receitapopular.com.br/seguros"
            canonicalUrl="https://beneficios.receitapopular.com.br/seguros"
         />
         <SchemaMarkup data={schemaData} />
         <div className="container mx-auto px-4 md:px-6">

            <Breadcrumbs
               items={[
                  { label: 'Home', href: 'home' },
                  { label: 'Seguros Populares' }
               ]}
               onNavigate={(view) => window.location.href = view === 'home' ? '/' : '#'}
            />

            {/* Hero Section */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden mb-16 shadow-2xl">
               {/* Background Pattern */}
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
               <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full blur-[100px] opacity-30 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

               <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-3/5">
                     <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-green-500/30 mb-6">
                        <ShieldCheck size={14} /> Proteção Acessível
                     </div>
                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                        Segurança para sua família custa menos que um cafezinho.
                     </h1>
                     <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-xl">
                        Planos populares a partir de <strong>R$ 5,00 mensais</strong>. Garanta Auxílio Funeral, Sorteios em Dinheiro e Telemedicina sem pesar no bolso.
                     </p>
                     <div className="flex flex-wrap gap-4">
                        <button className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-green-900/20 hover:-translate-y-1">
                           Ver Planos Disponíveis
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all backdrop-blur-sm">
                           Como Funciona?
                        </button>
                     </div>
                  </div>
                  <div className="lg:w-2/5 hidden lg:block">
                     <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                        <div className="flex items-center gap-4 mb-4">
                           <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-900 font-bold">
                              <Gift size={24} />
                           </div>
                           <div>
                              <p className="font-bold text-lg">Sorteios Mensais</p>
                              <p className="text-sm text-gray-300">Concorra a R$ 10.000,00</p>
                           </div>
                        </div>
                        <div className="w-full bg-white/10 h-px mb-4"></div>
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-blue-900 font-bold">
                              <Umbrella size={24} />
                           </div>
                           <div>
                              <p className="font-bold text-lg">Funeral Completo</p>
                              <p className="text-sm text-gray-300">Até R$ 5.000,00 de cobertura</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <AdSlot id="Content1" label="Seguradoras Parceiras" />

            <h2 className="text-2xl font-bold text-slate-900 mb-8 mt-12 pl-4 border-l-4 border-brand-blue">
               Microsseguros em Destaque
            </h2>

            {/* Insurance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
               {INSURANCE_OPTIONS.map((ins) => (
                  <div key={ins.id} className="group border border-gray-200 hover:border-blue-500 rounded-2xl p-5 md:p-6 transition-all hover:shadow-xl bg-white flex flex-col relative overflow-hidden">

                     {/* Top Accent */}
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 to-gray-300 group-hover:from-blue-400 group-hover:to-blue-600 transition-all"></div>

                     <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 bg-slate-50 rounded-2xl shadow-sm flex items-center justify-center text-brand-blue group-hover:bg-blue-50 transition-colors">
                           <IconHelper name={ins.iconName} className="w-7 h-7" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded">
                           {ins.type}
                        </span>
                     </div>

                     <h3 className="text-xl font-bold text-slate-900 mb-1">{ins.title}</h3>
                     <p className="text-sm text-slate-500 mb-6 font-medium">{ins.provider}</p>

                     <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-xs text-gray-400 uppercase mb-1 font-bold">Mensalidade</p>
                        <p className="text-3xl font-extrabold text-brand-blue">{ins.monthlyPrice}<span className="text-sm font-normal text-gray-500">/mês</span></p>
                     </div>

                     <ul className="space-y-3 mb-8 flex-grow">
                        {ins.coverage.map((c, i) => (
                           <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                              {c}
                           </li>
                        ))}
                     </ul>

                     <button
                        onClick={() => onQuote && onQuote(ins.id)}
                        className="w-full bg-slate-900 text-white hover:bg-brand-blue font-bold py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-auto"
                     >
                        Cotar Agora <ChevronDown size={16} className="-rotate-90" />
                     </button>
                  </div>
               ))}
            </div>

            {/* Educational Content */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Por que contratar um Seguro Popular?</h2>
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                           <HeartHandshake />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900">Proteção Funeral</h4>
                           <p className="text-sm text-slate-600">Um funeral simples custa hoje cerca de R$ 3.000 a R$ 5.000. O seguro cobre tudo isso para que sua família não precise se endividar num momento de dor.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 shrink-0">
                           <Gift />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900">Sorteios em Dinheiro</h4>
                           <p className="text-sm text-slate-600">A maioria dos planos populares inclui um "Número da Sorte". Você paga R$ 5,00 e concorre a R$ 10.000,00 ou mais todo mês pela Loteria Federal.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                           <Stethoscope />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900">Telemedicina (Bônus)</h4>
                           <p className="text-sm text-slate-600">Alguns planos oferecem consultas online grátis com clínico geral e descontos de até 70% em farmácias credenciadas.</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 text-yellow-200 opacity-50">
                     <AlertTriangle size={150} />
                  </div>
                  <div className="relative z-10">
                     <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center gap-2">
                        <AlertTriangle className="text-yellow-600" /> Atenção: Seguro Prestamista
                     </h3>
                     <p className="text-yellow-800 leading-relaxed mb-4 text-sm">
                        Se você fez um empréstimo consignado ou financiamento recentemente, verifique se já não contratou o <strong>Seguro Prestamista</strong>. Ele serve para quitar sua dívida em caso de morte ou invalidez.
                     </p>
                     <div className="bg-white/50 p-4 rounded-xl text-yellow-900 text-xs font-medium border border-yellow-200">
                        Dica: É proibido a "Venda Casada". O banco deve te oferecer a opção, mas não pode obrigar a contratar o seguro dele. Você pode cotar fora.
                     </div>
                  </div>
               </div>
            </div>

            {/* How to Hire */}
            <div className="mt-16 bg-slate-50 rounded-3xl p-8 border border-slate-200 text-center">
               <h3 className="text-2xl font-bold text-slate-900 mb-8">Como contratar sem sair de casa?</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                     <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center font-bold text-brand-blue text-xl mb-4 border border-gray-100">1</div>
                     <p className="text-sm text-slate-600">Escolha o plano ideal acima e clique em "Cotar Agora".</p>
                  </div>
                  <div className="flex flex-col items-center">
                     <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center font-bold text-brand-blue text-xl mb-4 border border-gray-100">2</div>
                     <p className="text-sm text-slate-600">Preencha seus dados básicos (não precisa de exames médicos).</p>
                  </div>
                  <div className="flex flex-col items-center">
                     <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center font-bold text-brand-blue text-xl mb-4 border border-gray-100">3</div>
                     <p className="text-sm text-slate-600">O pagamento pode ser feito via PIX, Cartão ou na conta de luz/água.</p>
                  </div>
               </div>
            </div>

            <div className="mt-12">
               <AdSlot id="Content2" label="Publicidade Rodapé" />
            </div>

         </div>
      </div>
   );
};
