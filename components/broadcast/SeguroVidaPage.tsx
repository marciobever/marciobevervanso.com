import React, { useEffect } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { Heart, Umbrella, Gift, DollarSign } from 'lucide-react';
import { Quiz } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { MetaHead } from '../seo/MetaHead';

interface Props {
   onNavigate: (view: any) => void;
   onSimulate: (id: string) => void;
   quizzes?: Quiz[];
}

export const SeguroVidaPage: React.FC<Props> = ({ onNavigate, onSimulate, quizzes }) => {
   // SEO movido para MetaHead

   const schemaData = {
      "@context": "https://schema.org",
      "@type": "FinancialProduct",
      "name": "Seguro de Vida Popular",
      "description": "Seguro de vida com auxílio funeral e sorteios mensais em dinheiro.",
      "category": "Insurance",
      "offers": {
         "@type": "Offer",
         "price": "5.00",
         "priceCurrency": "BRL",
         "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "5.00",
            "priceCurrency": "BRL",
            "unitText": "mês"
         }
      }
   };

   return (
      <BroadcastLayout
         title="Auxílio Funeral e Seguro de Vida por R$ 5,00? Veja como contratar pelo celular"
         subtitle="Novos planos populares garantem proteção completa para famílias de baixa renda. Sem carência para acidentes e com sorteios mensais em dinheiro."
         quizId="13" // ID para Quiz de Seguro Popular
         quizzes={quizzes}
         onNavigate={onNavigate}
         quizTriggerLabel="Ver Planos Disponíveis"
      >
         <MetaHead
            title="Seguro de Vida Popular: Planos a partir de R$ 5,00 | Auxílio Funeral"
            description="Novos planos populares garantem proteção completa para famílias de baixa renda. Sem carência para acidentes e com sorteios mensais em dinheiro."
            url="https://beneficios.receitapopular.com.br/seguro-vida-popular-auxilio-funeral-5-reais"
            canonicalUrl="https://beneficios.receitapopular.com.br/seguro-vida-popular-auxilio-funeral-5-reais"
         />
         <SchemaMarkup data={schemaData} />
         <h2>Proteção não é coisa de rico</h2>
         <p>
            Antigamente, ter um seguro de vida era caro e burocrático. Hoje, graças às fintechs e parcerias com bancos digitais, qualquer brasileiro pode garantir a segurança da família pagando menos que um refrigerante por mês.
         </p>

         <h3>O que o Plano Popular cobre?</h3>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-300 transition-colors">
               <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-3">
                  <Umbrella size={24} />
               </div>
               <h4 className="font-bold text-slate-900 text-lg">Auxílio Funeral Completo</h4>
               <p className="text-sm text-slate-600 mt-2">
                  Evite gastos inesperados de até R$ 5.000,00. A seguradora cuida de tudo: urna, translado e documentação.
               </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-green-300 transition-colors">
               <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-3">
                  <Gift size={24} />
               </div>
               <h4 className="font-bold text-slate-900 text-lg">Sorteios Mensais</h4>
               <p className="text-sm text-slate-600 mt-2">
                  Além da proteção, você concorre a prêmios em dinheiro (R$ 10.000 a R$ 20.000) pela Loteria Federal todo mês.
               </p>
            </div>
         </div>

         <h3>Destaque: Seguro Amparo Caixa</h3>
         <p>
            Um dos planos mais procurados é o <strong>Amparo</strong>, da Caixa Seguridade. Ele não exige exames médicos para contratação e aceita pessoas de até 80 anos. É a opção ideal para quem busca simplicidade e confiança.
         </p>

         <div className="bg-slate-900 text-white p-6 rounded-2xl my-6 not-prose flex items-center justify-between">
            <div>
               <h4 className="font-bold text-lg text-yellow-400 flex items-center gap-2">
                  <DollarSign size={20} /> Preço Médio
               </h4>
               <p className="text-slate-300 text-sm">Planos básicos a partir de:</p>
            </div>
            <div className="text-right">
               <span className="block text-3xl font-extrabold">R$ 5,00</span>
               <span className="text-xs text-slate-400">/mês</span>
            </div>
         </div>

         <p>
            Não deixe sua família desamparada nos momentos mais difíceis. Faça uma cotação rápida e veja como é barato ter tranquilidade.
         </p>
      </BroadcastLayout>
   );
};