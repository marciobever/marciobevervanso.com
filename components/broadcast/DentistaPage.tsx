
import React, { useEffect } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { Smile, AlertTriangle, CheckCircle2, Stethoscope, Heart, ShieldPlus, HelpCircle, MapPin, Sparkles, PlusCircle } from 'lucide-react';
import { Quiz } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { MetaHead } from '../seo/MetaHead';

interface Props {
   onNavigate: (view: any) => void;
   onSimulate: (id: string) => void;
   quizzes?: Quiz[];
}

export const DentistaPage: React.FC<Props> = ({ onNavigate, onSimulate, quizzes }) => {
   // SEO movido para MetaHead


   return (
      <BroadcastLayout
         title="Brasil Sorridente 2025: Tratamento Dentário Gratuito no SUS (Guia Completo)"
         subtitle="O programa nacional de saúde bucal foi ampliado. Saiba como ter acesso a próteses, tratamento de canal, aparelhos e implantes sem custo nenhum."
         quizId="6"
         quizzes={quizzes}
         onNavigate={onNavigate}
         quizTriggerLabel="Consultar Vagas no SUS"
      >
         <MetaHead
            title="Brasil Sorridente 2025: Como Conseguir Dentista Grátis no SUS | Guia"
            description="O programa nacional de saúde bucal foi ampliado. Saiba como ter acesso a próteses, tratamento de canal, aparelhos e implantes sem custo nenhum."
            url="https://beneficios.receitapopular.com.br/dentista-gratuito-sus-quiz-prioridade"
            canonicalUrl="https://beneficios.receitapopular.com.br/dentista-gratuito-sus-quiz-prioridade"
         />
         <SchemaMarkup data={{
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "Brasil Sorridente",
            "description": "Serviço público de saúde bucal do Brasil.",
            "medicalSpecialty": "Dentistry"
         }} />

         <h2>Saúde Bucal é um Direito de Todos</h2>
         <p>
            O <strong>Brasil Sorridente</strong> é hoje o maior programa de saúde pública odontológica do mundo. Muita gente ainda acredita que o dentista do posto de saúde (UBS) só serve para arrancar dentes ("extração"), mas a realidade mudou drasticamente nos últimos anos.
         </p>
         <p>
            Com a criação dos <strong>CEOs (Centros de Especialidades Odontológicas)</strong>, o cidadão brasileiro passou a ter acesso a tratamentos complexos que custariam milhares de reais em clínicas particulares, totalmente financiados pelo Governo Federal.
         </p>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
            <div className="bg-green-50 p-6 rounded-3xl border border-green-100">
               <h3 className="font-bold text-green-900 flex items-center gap-2 mb-3">
                  <PlusCircle size={20} className="text-green-600" /> Atendimento Primário (UBS)
               </h3>
               <ul className="text-xs text-green-800 space-y-2">
                  <li className="flex items-start gap-1">✅ Limpeza (Profilaxia) e Aplicação de Flúor</li>
                  <li className="flex items-start gap-1">✅ Restaurações (Obturações) simples</li>
                  <li className="flex items-start gap-1">✅ Extrações de dentes com cárie profunda</li>
                  <li className="flex items-start gap-1">✅ Tratamento preventivo para crianças</li>
               </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
               <h3 className="font-bold text-blue-900 flex items-center gap-2 mb-3">
                  <Sparkles size={20} className="text-blue-600" /> Especialidades (CEO)
               </h3>
               <ul className="text-xs text-blue-800 space-y-2">
                  <li className="flex items-start gap-1">💎 Tratamento de Canal (Endodontia)</li>
                  <li className="flex items-start gap-1">💎 Próteses Totais (Dentaduras) e Parciais</li>
                  <li className="flex items-start gap-1">💎 Cirurgias de Siso e bucomaxilofaciais</li>
                  <li className="flex items-start gap-1">💎 Diagnóstico de Câncer de Boca</li>
               </ul>
            </div>
         </div>

         <h2>Como conseguir o atendimento? (Passo a Passo)</h2>
         <p>Não adianta ir direto ao Centro de Especialidades. O fluxo do SUS exige uma ordem para garantir que os casos mais graves sejam priorizados:</p>

         <div className="space-y-6 my-10 not-prose">
            <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm relative overflow-hidden group hover:border-brand-blue transition-all">
               <div className="bg-slate-100 text-slate-800 w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">1</div>
               <div>
                  <h4 className="font-bold text-slate-900 text-lg">A Porta de Entrada: UBS</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Procure o Posto de Saúde mais próximo da sua residência com seu Cartão do SUS. Marque uma consulta com o dentista da unidade para uma avaliação geral.</p>
               </div>
            </div>
            <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm relative overflow-hidden group hover:border-brand-blue transition-all">
               <div className="bg-slate-100 text-slate-800 w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">2</div>
               <div>
                  <h4 className="font-bold text-slate-900 text-lg">A Triagem e Encaminhamento</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Se o seu caso for complexo (ex: canal ou prótese), o dentista da UBS fará o encaminhamento através do sistema de regulação para o CEO (Centro de Especialidades).</p>
               </div>
            </div>
            <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm relative overflow-hidden group hover:border-brand-blue transition-all">
               <div className="bg-slate-100 text-slate-800 w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">3</div>
               <div>
                  <h4 className="font-bold text-slate-900 text-lg">O Tratamento Especializado</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Você será convocado para o CEO, onde o especialista fará o procedimento necessário. O tempo de espera varia conforme a fila de cada município.</p>
               </div>
            </div>
         </div>

         <h2>Prótese Dentária e Dentadura Grátis</h2>
         <p>
            Este é um dos serviços mais procurados no Brasil Sorridente. O SUS financia a fabricação de próteses totais (dentaduras) e parciais removíveis (pontes).
         </p>
         <p>
            <strong>Quem pode solicitar?</strong> Qualquer pessoa que tenha perda de dentes que comprometa a mastigação ou a fala. Idosos têm prioridade legal no atendimento. Após a moldagem, o laboratório parceiro fabrica a peça e você retorna para os ajustes finais.
         </p>

         <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200 my-10 flex gap-4 items-start not-prose">
            <AlertTriangle size={32} className="text-yellow-600 shrink-0 mt-1" />
            <div>
               <h4 className="font-bold text-yellow-900 text-lg mb-1">E os Implantes e Aparelhos?</h4>
               <p className="text-sm text-yellow-800 leading-relaxed">
                  <strong>Aparelhos:</strong> Estão disponíveis apenas para casos graves de deformidade ou problemas funcionais sérios, geralmente para jovens.
                  <br /><br />
                  <strong>Implantes:</strong> Ainda não são universais. Estão presentes apenas em alguns municípios com CEOs tipo III ou em parceria com Universidades Federais. A prioridade nacional ainda é o fornecimento de próteses removíveis.
               </p>
            </div>
         </div>

         <h2>FAQ - Dúvidas Frequentes Brasil Sorridente</h2>
         <div className="space-y-4 not-prose mb-12">
            <details className="group bg-gray-50 p-5 rounded-2xl border border-gray-200 cursor-pointer">
               <summary className="font-bold text-slate-800 flex justify-between items-center list-none">
                  Como emitir o Cartão do SUS online? <HelpCircle size={18} className="text-brand-blue" />
               </summary>
               <p className="text-sm text-slate-600 mt-4 leading-relaxed pl-4 border-l-2 border-brand-blue">
                  Basta baixar o aplicativo <strong>Meu SUS Digital</strong> (antigo Conecte SUS) e fazer login com sua conta Gov.br. O cartão digital tem a mesma validade do físico.
               </p>
            </details>
            <details className="group bg-gray-50 p-5 rounded-2xl border border-gray-200 cursor-pointer">
               <summary className="font-bold text-slate-800 flex justify-between items-center list-none">
                  Estou com muita dor de dente agora. O que fazer? <HelpCircle size={18} className="text-brand-blue" />
               </summary>
               <p className="text-sm text-slate-600 mt-4 leading-relaxed pl-4 border-l-2 border-brand-blue">
                  Casos de <strong>Urgência Odontológica</strong> (dor aguda, inchaço, trauma) não precisam de agendamento. Procure uma UPA 24h ou o pronto-atendimento da UBS logo no primeiro horário.
               </p>
            </details>
            <details className="group bg-gray-50 p-5 rounded-2xl border border-gray-200 cursor-pointer">
               <summary className="font-bold text-slate-800 flex justify-between items-center list-none">
                  O tratamento no SUS é demorado? <HelpCircle size={18} className="text-brand-blue" />
               </summary>
               <p className="text-sm text-slate-600 mt-4 leading-relaxed pl-4 border-l-2 border-brand-blue">
                  O atendimento na UBS costuma ser rápido. A fila maior ocorre para os especialistas dos CEOs (canal e prótese). Municípios maiores costumam ter mais CEOs, o que agiliza o processo.
               </p>
            </details>
         </div>

      </BroadcastLayout>
   );
};
