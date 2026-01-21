
import React, { useEffect } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { Smartphone, Lock, DollarSign } from 'lucide-react';
import { Quiz } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { MetaHead } from '../seo/MetaHead';

interface Props {
   onNavigate: (view: any) => void;
   onSimulate: (id: string) => void;
   quizzes?: Quiz[];
}

export const PeDeMeiaPage: React.FC<Props> = ({ onNavigate, onSimulate, quizzes }) => {
   // SEO movido para MetaHead


   const schemaData = [
      {
         "@context": "https://schema.org",
         "@type": "GovernmentService",
         "name": "Pé-de-Meia",
         "serviceType": "Financial Aid Service",
         "provider": {
            "@type": "GovernmentOrganization",
            "name": "Ministério da Educação (MEC)"
         },
         "audience": {
            "@type": "Audience",
            "audienceType": "Estudantes do Ensino Médio Público"
         },
         "offers": {
            "@type": "Offer",
            "price": "9200",
            "priceCurrency": "BRL",
            "description": "Valor total acumulado ao final do ensino médio."
         }
      }
   ];

   return (
      <BroadcastLayout
         title="Pé-de-Meia: Como acessar o dinheiro no Caixa Tem (Passo a Passo)"
         subtitle="Aprenda a desbloquear sua conta, consultar o saldo e entenda quando você pode sacar cada tipo de incentivo (Matrícula, Frequência e Conclusão)."
         quizId="7"
         quizzes={quizzes}
         onNavigate={onNavigate}
         quizTriggerLabel="Consultar Elegibilidade"
         relatedArticle={{
            title: "Estudante tem direito a viagens grátis? Conheça o ID Jovem",
            onClick: () => onNavigate('guide-idjovem')
         }}
      >
         <MetaHead
            title="Pé-de-Meia 2025: Cadastro, Calendário e Consulta no Caixa Tem"
            description="Descubra como receber o Pé-de-Meia. Calendário de pagamentos, como desbloquear no Caixa Tem e regras para estudantes do ensino médio receberem até R$ 9.200."
            url="https://beneficios.receitapopular.com.br/beneficio-pe-de-meia-2025-guia-completo"
            canonicalUrl="https://beneficios.receitapopular.com.br/beneficio-pe-de-meia-2025-guia-completo"
         />
         <SchemaMarkup data={schemaData} />
         <h2>Dinheiro na mão ou poupança?</h2>
         <p>
            O Pé-de-Meia tem duas partes. Uma parte do dinheiro (Incentivo Matrícula e Frequência) você pode sacar mensalmente para usar como quiser. A outra parte (Incentivo Conclusão) fica guardada numa poupança e só pode ser sacada quando você terminar o 3º ano do Ensino Médio.
         </p>

         <h3>Como acessar o benefício (Tutorial)</h3>
         <p>A conta é aberta automaticamente pela Caixa, mas você precisa desbloquear o acesso pelo aplicativo.</p>

         <div className="space-y-4 not-prose my-8">
            <div className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
               <div className="bg-blue-100 text-brand-blue w-10 h-10 rounded-lg flex items-center justify-center font-bold shrink-0"><Smartphone /></div>
               <div>
                  <h4 className="font-bold text-slate-900">1. Baixe o App Caixa Tem</h4>
                  <p className="text-sm text-slate-600">Se você for menor de 18 anos, seu responsável legal deve autorizar a movimentação da conta pelo aplicativo dele primeiro.</p>
               </div>
            </div>
            <div className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
               <div className="bg-blue-100 text-brand-blue w-10 h-10 rounded-lg flex items-center justify-center font-bold shrink-0"><Lock /></div>
               <div>
                  <h4 className="font-bold text-slate-900">2. Faça o Login</h4>
                  <p className="text-sm text-slate-600">Use seu CPF e senha Gov.br. Se for o primeiro acesso, siga as instruções para validar o dispositivo.</p>
               </div>
            </div>
            <div className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
               <div className="bg-blue-100 text-brand-blue w-10 h-10 rounded-lg flex items-center justify-center font-bold shrink-0"><DollarSign /></div>
               <div>
                  <h4 className="font-bold text-slate-900">3. Procure por "Pé-de-Meia"</h4>
                  <p className="text-sm text-slate-600">No menu do app, clique na opção Pé-de-Meia para ver o extrato e os valores bloqueados/liberados.</p>
               </div>
            </div>
         </div>

         <h3>Valores detalhados</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 relative overflow-hidden">
               <h4 className="text-green-700 font-bold text-lg mb-2">Para gastar agora</h4>
               <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b border-gray-50 pb-2">
                     <span className="text-sm text-gray-600">Matrícula (1x ao ano)</span>
                     <span className="font-bold text-slate-900">R$ 200,00</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-50 pb-2">
                     <span className="text-sm text-gray-600">Frequência (9x ao ano)</span>
                     <span className="font-bold text-slate-900">R$ 200,00</span>
                  </li>
               </ul>
               <p className="text-xs text-gray-400 mt-3">*Exige 80% de frequência escolar no mês.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 relative overflow-hidden">
               <h4 className="text-blue-700 font-bold text-lg mb-2">Poupança (Só no final)</h4>
               <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b border-gray-50 pb-2">
                     <span className="text-sm text-gray-600">Conclusão (Por ano)</span>
                     <span className="font-bold text-slate-900">R$ 1.000,00</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-50 pb-2">
                     <span className="text-sm text-gray-600">Bônus ENEM (Único)</span>
                     <span className="font-bold text-slate-900">R$ 200,00</span>
                  </li>
               </ul>
               <p className="text-xs text-gray-400 mt-3">*Acumula R$ 3.000 + Juros ao final dos 3 anos.</p>
            </div>
         </div>

         <h3>Quem tem direito?</h3>
         <ul>
            <li>Estudantes de 14 a 24 anos.</li>
            <li>Matriculados no Ensino Médio da rede pública.</li>
            <li>Pertencentes a famílias inscritas no <strong>CadÚnico</strong> com renda per capita de até R$ 218 (regra Bolsa Família).</li>
         </ul>

         <p>
            <strong>Atenção:</strong> Se você reprovar de ano, perde o direito ao incentivo daquele ano, mas pode voltar a receber no próximo se passar.
         </p>
      </BroadcastLayout>
   );
};
