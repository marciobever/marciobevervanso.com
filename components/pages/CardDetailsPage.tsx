
import React, { useEffect } from 'react';
import { CreditCardProduct, ViewState } from '../../types';
import { CreditCardVisual } from '../CreditCardVisual';
import { AdSlot } from '../AdSlot';
import { ActionPayBanners } from '../ActionPayBanners';
import { Check, X, Star, AlertTriangle, ArrowRight, ShieldCheck, ChevronLeft, CreditCard, Banknote, Calendar } from 'lucide-react';
import { SchemaMarkup } from '../seo/SchemaMarkup';

interface Props {
   card: CreditCardProduct;
   onNavigate: (view: ViewState) => void;
   onBack: () => void;
}

const CardDetailsPage: React.FC<Props> = ({ card, onNavigate, onBack }) => {

   useEffect(() => {
      document.title = `Análise: Cartão ${card.name} - Vale a pena?`;
      window.scrollTo(0, 0);
   }, [card]);

   const schemaData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": card.name,
      "description": card.detailedInfo?.description || card.benefits.join(', '),
      "brand": {
         "@type": "Brand",
         "name": card.issuer
      },
      "review": {
         "@type": "Review",
         "reviewRating": {
            "@type": "Rating",
            "ratingValue": card.detailedInfo?.reviewScore || "4.5",
            "bestRating": "5"
         },
         "author": {
            "@type": "Person",
            "name": "Equipe Guia Social"
         }
      },
      "offers": {
         "@type": "Offer",
         "price": card.annualFee === "Grátis" ? "0" : "0",
         "priceCurrency": "BRL"
      }
   };

   return (
      <div className="bg-slate-50 min-h-screen pb-24">
         <SchemaMarkup data={schemaData} />

         {/* Header with Visual */}
         <div className="bg-slate-900 text-white pb-12 pt-6 rounded-b-[40px] shadow-2xl relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
               <button onClick={onBack} className="flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors">
                  <ChevronLeft size={20} /> Voltar para lista
               </button>

               <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="w-full max-w-[320px] md:max-w-[380px] shrink-0 transform hover:scale-105 transition-transform duration-500">
                     <CreditCardVisual card={card} />
                  </div>

                  <div className="text-center md:text-left">
                     <div className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                        <Star size={12} fill="currentColor" /> Recomendado
                     </div>
                     <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{card.name}</h1>
                     <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                        {card.detailedInfo?.description}
                     </p>
                     <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                        <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold border border-white/10">
                           Score Min: {card.minScore}
                        </span>
                        <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg text-sm font-semibold border border-green-500/30">
                           Anuidade: {card.annualFee}
                        </span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Background Effect */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-brand-blue/20 to-transparent pointer-events-none opacity-50"></div>
         </div>

         <div className="container mx-auto px-4 -mt-8 relative z-20">
            <ActionPayBanners />

            <div className="max-w-4xl mx-auto">

               {/* Pros & Cons */}
               <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Pontos Fortes e Fracos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div>
                        <h3 className="font-bold text-green-700 flex items-center gap-2 mb-4 bg-green-50 p-3 rounded-xl">
                           <Check size={20} /> Vantagens
                        </h3>
                        <ul className="space-y-3">
                           {card.detailedInfo?.pros.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                                 <Check className="text-green-500 shrink-0 mt-0.5" size={16} /> {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div>
                        <h3 className="font-bold text-red-700 flex items-center gap-2 mb-4 bg-red-50 p-3 rounded-xl">
                           <X size={20} /> Desvantagens
                        </h3>
                        <ul className="space-y-3">
                           {card.detailedInfo?.cons.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                                 <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={16} /> {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>



               {/* Detailed Fees Table */}
               <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8 mt-8">
                  <div className="bg-slate-50 px-6 py-4 border-b border-gray-100">
                     <h3 className="font-bold text-slate-900 flex items-center gap-2">
                        <Banknote size={20} className="text-brand-blue" /> Taxas e Tarifas
                     </h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                     <div className="flex justify-between p-4 hover:bg-slate-50">
                        <span className="text-slate-600 text-sm">Anuidade do Titular</span>
                        <span className="font-bold text-slate-900">{card.annualFee}</span>
                     </div>
                     <div className="flex justify-between p-4 hover:bg-slate-50">
                        <span className="text-slate-600 text-sm">Renda Mínima</span>
                        <span className="font-bold text-slate-900">{card.detailedInfo?.incomeRequirement}</span>
                     </div>
                     <div className="flex justify-between p-4 hover:bg-slate-50">
                        <span className="text-slate-600 text-sm">Juros do Rotativo</span>
                        <span className="font-bold text-slate-900">{card.detailedInfo?.interestRateRotativo}</span>
                     </div>
                     <div className="flex justify-between p-4 hover:bg-slate-50">
                        <span className="text-slate-600 text-sm">Bandeira</span>
                        <span className="font-bold text-slate-900">{card.flag}</span>
                     </div>
                  </div>
               </div>

               {/* Application Steps */}
               <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
                  <h3 className="font-bold text-xl text-slate-900 mb-6">Como solicitar este cartão?</h3>
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold shrink-0">1</div>
                        <div>
                           <h4 className="font-bold text-slate-900">Clique no botão abaixo</h4>
                           <p className="text-sm text-slate-600">Você será redirecionado para o site oficial seguro do banco emissor.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold shrink-0">2</div>
                        <div>
                           <h4 className="font-bold text-slate-900">Preencha o formulário</h4>
                           <p className="text-sm text-slate-600">Tenha em mãos seu RG, CPF e comprovante de endereço. Preencha os dados com atenção.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold shrink-0">3</div>
                        <div>
                           <h4 className="font-bold text-slate-900">Aguarde a análise</h4>
                           <p className="text-sm text-slate-600">A resposta costuma chegar por e-mail em poucos minutos ou até 3 dias úteis.</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="text-center text-xs text-slate-400 mb-8 px-4">
                  <p className="flex items-center justify-center gap-1 mb-2">
                     <ShieldCheck size={14} /> Site Seguro e Verificado
                  </p>
                  <p>
                     O Guia Social Brasil é um portal informativo. Não emitimos cartões e não realizamos análise de crédito.
                     Ao clicar em "Ir para Site Oficial", você será direcionado para a instituição financeira responsável.
                  </p>
               </div>

            </div>
         </div>

         {/* Sticky Footer CTA */}
         <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-40 md:hidden">
            <div className="flex gap-3 items-center">
               <div className="flex-grow">
                  <p className="text-xs text-gray-500 uppercase font-bold">Solicitação Online</p>
                  <p className="font-bold text-slate-900">{card.name}</p>
               </div>
               <a
                  href={card.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2 hover:bg-green-500 transition-colors animate-pulse"
               >
                  Ir para Site Oficial <ArrowRight size={18} />
               </a>
            </div>
         </div>

         {/* Desktop Floating CTA */}
         <div className="hidden md:block fixed bottom-8 right-8 z-40">
            <a
               href={card.officialLink}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl flex items-center gap-2 hover:bg-green-500 transition-all hover:scale-105 border-4 border-white/20"
            >
               Solicitar Cartão Agora <ArrowRight size={20} />
            </a>
         </div>

      </div>
   );
};

export default CardDetailsPage;
