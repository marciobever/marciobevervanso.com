import React, { useEffect } from 'react';
import { BroadcastLayout } from '../broadcast/BroadcastLayout';
import { Bus, Ticket, Music, CheckCircle2, QrCode, AlertOctagon, FileText } from 'lucide-react';
import { ViewState } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';

interface Props {
  onNavigate: (view: ViewState) => void;
}

export const IdJovemGuide: React.FC<Props> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = "ID Jovem 2.0: Emitir Carteira Digital, Viagens Gratuitas e Cinema";
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "name": "Identidade Jovem (ID Jovem)",
    "serviceType": "Youth Benefit",
    "provider": {
      "@type": "GovernmentOrganization",
      "name": "Secretaria Nacional da Juventude"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Jovens de Baixa Renda (15 a 29 anos)"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "description": "Documento gratuito que garante meia-entrada e transporte interestadual gratuito."
    }
  };

  return (
    <BroadcastLayout
      title="ID Jovem 2025: Viaje de graça para outros estados e pague meia no cinema"
      subtitle="Documento garante transporte interestadual gratuito e meia-entrada em eventos culturais para jovens de baixa renda. Veja como emitir o seu sem sair de casa."
      onNavigate={onNavigate}
      quizTriggerLabel="Gerar ID Jovem Agora"
      onTakeQuiz={() => window.open('https://idjovem.juventude.gov.br/', '_blank')}
    >
      <SchemaMarkup data={schemaData} />
      <h2>O que é a Identidade Jovem?</h2>
      <p>
        A ID Jovem é um documento virtual, totalmente gratuito, que possibilita aos jovens de baixa renda o acesso aos benefícios de meia-entrada em eventos artísticos-culturais e esportivos, além de vagas gratuitas ou com desconto no sistema de transporte coletivo interestadual.
      </p>

      <h3>Principais Benefícios Explicados</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-3">
               <Bus size={24} />
            </div>
            <h4 className="font-bold text-slate-900 text-lg">Transporte Interestadual</h4>
            <p className="text-sm text-slate-600 mt-2">
               Por lei, cada ônibus de viagem interestadual (entre estados) deve reservar:
            </p>
            <ul className="text-xs text-slate-500 mt-2 list-disc pl-4">
               <li>2 vagas 100% gratuitas;</li>
               <li>2 vagas com 50% de desconto (caso as gratuitas acabem).</li>
            </ul>
         </div>
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-300 transition-colors">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-3">
               <Ticket size={24} />
            </div>
            <h4 className="font-bold text-slate-900 text-lg">Cultura e Lazer</h4>
            <p className="text-sm text-slate-600 mt-2">
               Meia-entrada (50% de desconto) garantida em cinemas, teatros, shows, jogos de futebol e eventos educativos, sem necessidade de ser estudante.
            </p>
         </div>
      </div>

      <h3>Quem pode emitir? (Requisitos)</h3>
      <ul className="space-y-3 mb-6">
         <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500"/> Ter entre 15 e 29 anos (inclusive);</li>
         <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500"/> Pertencer a família com renda mensal de até 2 salários mínimos;</li>
         <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500"/> Estar inscrito no Cadastro Único (CadÚnico) com dados atualizados há pelo menos 24 meses;</li>
         <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500"/> Saber o seu NIS (Número de Identificação Social).</li>
      </ul>

      <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 text-sm text-yellow-800 my-6">
         <strong>Mito Comum:</strong> Não é necessário ser estudante para ter a ID Jovem. Basta cumprir os requisitos de idade e renda.
      </div>

      <h3>Como emitir a ID Jovem (Passo a Passo)</h3>
      <p>A emissão é digital e imediata. Você não recebe cartão físico em casa, usa na tela do celular.</p>
      
      <div className="not-prose bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
         <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded shadow-sm"><QrCode className="text-slate-900"/></div>
            <div>
               <h4 className="font-bold text-slate-900">1. Baixe o App ou acesse o site</h4>
               <p className="text-xs text-slate-600">Procure por "ID Jovem" na loja de aplicativos ou site oficial.</p>
            </div>
         </div>
         <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded shadow-sm"><FileText className="text-slate-900"/></div>
            <div>
               <h4 className="font-bold text-slate-900">2. Preencha os Dados</h4>
               <p className="text-xs text-slate-600">Insira seu NIS, Nome Completo, Data de Nascimento e Nome da Mãe.</p>
            </div>
         </div>
         <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded shadow-sm"><CheckCircle2 className="text-green-600"/></div>
            <div>
               <h4 className="font-bold text-slate-900">3. Gere o Cartão</h4>
               <p className="text-xs text-slate-600">Se os dados estiverem corretos no CadÚnico, o cartão virtual com QR Code aparecerá na hora. Tire um print!</p>
            </div>
         </div>
      </div>

      <h3>A empresa de ônibus recusou. O que fazer?</h3>
      <p>
         Infelizmente, algumas empresas tentam dificultar o acesso. Se houver vagas disponíveis e a empresa recusar a gratuidade:
      </p>
      <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex gap-3 items-start not-prose">
         <AlertOctagon className="text-red-600 shrink-0" />
         <div className="text-sm text-red-800">
            <ol className="list-decimal pl-4 space-y-1">
               <li>Solicite uma justificativa por escrito da recusa (é seu direito);</li>
               <li>Anote a placa do ônibus, horário e nome da empresa;</li>
               <li>Denuncie na <strong>ANTT pelo telefone 166</strong> ou nos guichês da fiscalização na rodoviária.</li>
            </ol>
         </div>
      </div>

    </BroadcastLayout>
  );
};