
import React, { useEffect } from 'react';
import { BroadcastLayout } from '../broadcast/BroadcastLayout';
import { FileText, MapPin, Smartphone, RefreshCw, CheckCircle2, AlertTriangle, Users } from 'lucide-react';
import { ViewState } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';

interface Props {
  onNavigate: (view: ViewState) => void;
}

export const CadUnicoGuide: React.FC<Props> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = "Cadastro Único 2025: Passo a Passo, Documentos e Atualização";
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "name": "Cadastro Único (CadÚnico)",
    "serviceType": "Social Registry",
    "provider": {
      "@type": "GovernmentOrganization",
      "name": "Governo Federal"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Famílias de Baixa Renda"
    },
    "serviceOutput": "Número de Identificação Social (NIS)"
  };

  return (
    <BroadcastLayout
      title="CadÚnico 2025: O Guia Completo para se Inscrever e Atualizar"
      subtitle="O Cadastro Único é a porta de entrada para mais de 20 programas sociais. Aprenda como se cadastrar, quais documentos levar e como evitar bloqueios."
      onNavigate={onNavigate}
      quizTriggerLabel="Consultar Situação Cadastral"
      onTakeQuiz={() => onNavigate('home')} // Retorna para home para usar a modal de consulta
    >
      <SchemaMarkup data={schemaData} />
      <h2>O que é o CadÚnico?</h2>
      <p>
        É o banco de dados que o governo usa para identificar quem são e como vivem as famílias de baixa renda no Brasil. Sem ele, você não consegue acessar benefícios como Bolsa Família, Tarifa Social de Energia, ID Jovem ou BPC.
      </p>

      <h3>Passo a Passo da Inscrição</h3>
      <p>
         A inscrição no CadÚnico é <strong>presencial</strong>. Não existe cadastro 100% online, apenas pré-cadastro.
      </p>

      <div className="space-y-4 not-prose my-8">
         <div className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="bg-brand-blue text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold shrink-0">1</div>
            <div>
               <h4 className="font-bold text-slate-900">Responsável Familiar</h4>
               <p className="text-sm text-slate-600">Escolha uma pessoa da família (preferencialmente mulher, maior de 16 anos com CPF) para ir ao posto e responder as perguntas.</p>
            </div>
         </div>
         <div className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="bg-brand-blue text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold shrink-0">2</div>
            <div>
               <h4 className="font-bold text-slate-900">Local de Atendimento</h4>
               <p className="text-sm text-slate-600">Vá ao CRAS (Centro de Referência de Assistência Social) ou posto do CadÚnico da sua prefeitura. Alguns lugares exigem agendamento.</p>
            </div>
         </div>
         <div className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="bg-brand-blue text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold shrink-0">3</div>
            <div>
               <h4 className="font-bold text-slate-900">Entrevista</h4>
               <p className="text-sm text-slate-600">Leve os documentos de TODOS os moradores da casa. Você responderá sobre renda, despesas e características da moradia.</p>
            </div>
         </div>
      </div>

      <h3>Documentos Obrigatórios</h3>
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 not-prose mb-8">
         <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <FileText className="text-brand-blue" /> Lista de Documentos
         </h4>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm text-slate-700">
            <div className="flex items-start gap-2">
               <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
               <span><strong>Responsável:</strong> CPF ou Título de Eleitor.</span>
            </div>
            <div className="flex items-start gap-2">
               <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
               <span><strong>Outros Adultos:</strong> RG, CPF, Carteira de Trabalho ou Título de Eleitor.</span>
            </div>
            <div className="flex items-start gap-2">
               <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
               <span><strong>Crianças:</strong> Certidão de Nascimento e CPF.</span>
            </div>
            <div className="flex items-start gap-2">
               <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
               <span>Comprovante de Residência (Conta de luz ou água).</span>
            </div>
            <div className="flex items-start gap-2 md:col-span-2">
               <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
               <span>Declaração Escolar (para crianças e jovens de 4 a 21 anos).</span>
            </div>
         </div>
      </div>

      <h3>Atualização Cadastral (Obrigatória!)</h3>
      <p>
         Seus dados devem ser atualizados <strong>a cada 2 anos</strong>, obrigatoriamente. Mas atenção: se mudar de endereço, trocar as crianças de escola, alguém nascer, morrer ou a renda mudar, você deve atualizar <strong>imediatamente</strong>.
      </p>

      <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
         <div className="bg-green-50 p-5 rounded-2xl border border-green-100">
            <div className="flex items-center gap-2 mb-3">
               <div className="p-2 bg-green-100 rounded-lg text-green-700"><Smartphone size={20} /></div>
               <h4 className="font-bold text-green-900">App Cadastro Único</h4>
            </div>
            <p className="text-sm text-green-800 mb-3">
               Serve para <strong>consultar</strong> seus dados, ver o NIS e emitir comprovante de cadastro.
            </p>
            <p className="text-xs text-green-700 font-bold">
               NÃO serve para fazer o cadastro inicial.
            </p>
         </div>

         <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100">
            <div className="flex items-center gap-2 mb-3">
               <div className="p-2 bg-orange-100 rounded-lg text-orange-700"><MapPin size={20} /></div>
               <h4 className="font-bold text-orange-900">CRAS (Presencial)</h4>
            </div>
            <p className="text-sm text-orange-800 mb-3">
               Único local onde você pode <strong>alterar dados</strong> (como renda ou endereço) e fazer novos cadastros.
            </p>
         </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl flex gap-3 items-start my-6 not-prose">
         <AlertTriangle className="text-yellow-600 shrink-0 mt-0.5" size={20} />
         <p className="text-sm text-yellow-800">
           <strong>Pente-fino em Famílias Unipessoais:</strong> Se você se cadastrou morando sozinho, pode receber uma visita domiciliar do governo para comprovar que não mora com outras pessoas. Mantenha o endereço correto.
         </p>
      </div>

    </BroadcastLayout>
  );
};
