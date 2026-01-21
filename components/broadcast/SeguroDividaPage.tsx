import React, { useEffect } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { ShieldCheck, HeartHandshake, AlertTriangle, FileText } from 'lucide-react';
import { Quiz } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { MetaHead } from '../seo/MetaHead';

interface Props {
   onNavigate: (view: any) => void;
   onSimulate: (id: string) => void;
   quizzes?: Quiz[];
}

export const SeguroDividaPage: React.FC<Props> = ({ onNavigate, onSimulate, quizzes }) => {
   // SEO movido para MetaHead

   const schemaData = {
      "@context": "https://schema.org",
      "@type": "FinancialProduct",
      "name": "Seguro Prestamista",
      "description": "Seguro que quita dívidas de empréstimos e financiamentos em caso de morte, invalidez ou desemprego.",
      "category": "Insurance",
      "provider": {
         "@type": "Organization",
         "name": "Seguradoras Parceiras"
      }
   };

   return (
      <BroadcastLayout
         title="Nova Lei protege herdeiros: Seguro quita financiamento e empréstimo em caso de falecimento"
         subtitle="Não deixe dívidas para seus filhos. Entenda como funciona o Seguro Prestamista e como blindar o patrimônio da sua família por centavos ao dia."
         quizId="12" // ID para Quiz de Seguro Dívida
         quizzes={quizzes}
         onNavigate={onNavigate}
         quizTriggerLabel="Simular Proteção Familiar"
      >
         <MetaHead
            title="Lei Protege Herdeiros: Seguro Quita Dívidas em caso de Falecimento"
            description="Não deixe dívidas para seus filhos. Entenda como funciona o Seguro Prestamista e como blindar o patrimônio da sua família por centavos ao dia."
            url="https://beneficios.receitapopular.com.br/lei-protege-herdeiros-seguro-quita-dividas"
            canonicalUrl="https://beneficios.receitapopular.com.br/lei-protege-herdeiros-seguro-quita-dividas"
         />
         <SchemaMarkup data={schemaData} />
         <h2>O pesadelo da herança maldita</h2>
         <p>
            Você sabia que, por lei, as dívidas de uma pessoa falecida devem ser pagas com o patrimônio deixado? Isso significa que, se você falecer deixando um financiamento ou empréstimo, seus filhos podem ter que vender a casa ou o carro para pagar o banco.
         </p>
         <p>
            Para evitar isso, existe o <strong>Seguro Prestamista</strong>, uma proteção barata e muitas vezes ignorada.
         </p>

         <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8 not-prose">
            <h4 className="flex items-center gap-2 text-red-800 font-bold text-lg mb-2">
               <AlertTriangle /> O Risco Real
            </h4>
            <p className="text-red-700 m-0 text-sm">
               Milhares de famílias perdem imóveis todos os anos porque não conseguem arcar com as parcelas do financiamento após a perda do provedor principal da casa.
            </p>
         </div>

         <h3>Como funciona a Proteção?</h3>
         <div className="space-y-4 not-prose mb-8">
            <div className="flex gap-4 items-start">
               <div className="bg-green-100 p-2 rounded-lg text-green-700 mt-1"><ShieldCheck /></div>
               <div>
                  <strong className="block text-slate-900">Quitação Total</strong>
                  <p className="text-sm text-gray-600">Em caso de morte ou invalidez, a seguradora paga o saldo devedor direto para o banco.</p>
               </div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="bg-blue-100 p-2 rounded-lg text-blue-700 mt-1"><FileText /></div>
               <div>
                  <strong className="block text-slate-900">Liberação do Bem</strong>
                  <p className="text-sm text-gray-600">A casa ou carro fica livre de alienação e passa para os herdeiros sem dívidas.</p>
               </div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="bg-yellow-100 p-2 rounded-lg text-yellow-700 mt-1"><HeartHandshake /></div>
               <div>
                  <strong className="block text-slate-900">Cobertura Desemprego</strong>
                  <p className="text-sm text-gray-600">Alguns planos pagam até 3 parcelas do seu financiamento caso você perca o emprego involuntariamente.</p>
               </div>
            </div>
         </div>

         <h3>Quanto custa?</h3>
         <p>
            Muito menos do que você imagina. O valor varia conforme o montante da dívida e a idade, mas geralmente representa uma fração pequena da parcela mensal. É um investimento na tranquilidade de quem você mais ama.
         </p>
      </BroadcastLayout>
   );
};