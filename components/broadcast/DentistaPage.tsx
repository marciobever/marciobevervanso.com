import React, { useEffect } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { Smile, AlertTriangle, CheckCircle2, MapPin, Stethoscope, HelpCircle, ArrowRight } from 'lucide-react';
import { Quiz } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';

interface Props {
  onNavigate: (view: any) => void;
  onSimulate: (id: string) => void;
  quizzes?: Quiz[];
}

export const DentistaPage: React.FC<Props> = ({ onNavigate, onSimulate, quizzes }) => {
  useEffect(() => {
    document.title = "Dentista Gratuito SUS 2025: Implantes, Aparelhos e Próteses | Guia Oficial";
  }, []);

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "Brasil Sorridente",
      "serviceType": "Dental Care",
      "provider": {
        "@type": "GovernmentOrganization",
        "name": "Sistema Único de Saúde (SUS)"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Brasil"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "População de Baixa Renda"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BRL"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "O SUS coloca implante dentário de graça?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, mas é limitado. Implantes dentários são oferecidos em alguns Centros de Especialidades Odontológicas (CEOs) credenciados e em parceria com universidades, não estando disponíveis em todas as unidades."
          }
        },
        {
          "@type": "Question",
          "name": "Como conseguir dentista gratuito pelo SUS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O primeiro passo é ir à Unidade Básica de Saúde (UBS) mais próxima com seu Cartão do SUS e documento de identidade para uma triagem com o clínico geral."
          }
        }
      ]
    }
  ];

  return (
    <BroadcastLayout
      title="Dentista Gratuito pelo SUS: Como conseguir Implantes, Próteses e Aparelho"
      subtitle="O Brasil Sorridente foi ampliado. Entenda como funciona o fluxo de atendimento, da limpeza básica até cirurgias complexas e fornecimento de dentaduras."
      quizId="6"
      quizzes={quizzes}
      onNavigate={onNavigate}
      quizTriggerLabel="Verificar Unidades Próximas"
    >
      <SchemaMarkup data={schemaData} />
      <h2>O que é o Brasil Sorridente?</h2>
      <p>
        É a política nacional de saúde bucal. O SUS não oferece apenas extração de dentes. Hoje, a rede conta com os <strong>CEOs (Centros de Especialidades Odontológicas)</strong>, preparados para realizar tratamentos complexos gratuitamente.
      </p>

      <h3>O Caminho das Pedras: Como ser atendido?</h3>
      <p>Muitas pessoas desistem por não saberem o fluxo correto. Você não pode ir direto ao especialista. Siga este passo a passo:</p>

      <div className="space-y-4 not-prose my-8">
         <div className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
            <div>
               <h4 className="font-bold text-slate-900">Posto de Saúde (UBS)</h4>
               <p className="text-sm text-slate-600">Marque uma consulta com o clínico geral dentista do seu bairro. Ele fará a limpeza, restaurações simples e a avaliação inicial.</p>
            </div>
         </div>
         <div className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
            <div className="bg-green-100 text-green-700 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
            <div>
               <h4 className="font-bold text-slate-900">Encaminhamento</h4>
               <p className="text-sm text-slate-600">Se você precisar de canal, cirurgia, prótese ou tratamento de gengiva, o dentista da UBS lhe dará uma <strong>Guia de Referência</strong>.</p>
            </div>
         </div>
         <div className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
            <div className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
            <div>
               <h4 className="font-bold text-slate-900">Agendamento no CEO</h4>
               <p className="text-sm text-slate-600">Com a guia, a própria unidade marca sua consulta no Centro de Especialidades. Em alguns municípios, você entra numa fila de regulação.</p>
            </div>
         </div>
      </div>

      <h3>Mito ou Verdade: O SUS coloca Implante e Aparelho?</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
         <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
            <h4 className="font-bold text-green-900 flex items-center gap-2 mb-3">
               <Smile size={20}/> Próteses (Dentaduras)
            </h4>
            <p className="text-sm text-green-800 mb-2"><strong>VERDADE.</strong></p>
            <p className="text-sm text-green-800 leading-relaxed">
               O SUS fornece próteses totais (dentaduras) e parciais removíveis (pontes). O laboratório regional fabrica a peça sob medida e você retorna para instalar e ajustar. É um dos serviços mais comuns nos CEOs.
            </p>
         </div>

         <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
            <h4 className="font-bold text-orange-900 flex items-center gap-2 mb-3">
               <Stethoscope size={20}/> Implantes e Aparelhos
            </h4>
            <p className="text-sm text-orange-800 mb-2"><strong>DEPENDE.</strong></p>
            <p className="text-sm text-orange-800 leading-relaxed">
               <strong>Aparelhos (Ortodontia):</strong> Sim, mas apenas em CEOs tipo III (maiores) e para casos severos que afetam a mastigação ou fala, não apenas estética.
               <br/><br/>
               <strong>Implantes:</strong> Ainda é raro. Está disponível apenas em alguns centros universitários parceiros ou CEOs específicos em grandes capitais. A maioria oferece apenas a prótese removível.
            </p>
         </div>
      </div>

      <h3>Lista de Tratamentos Garantidos</h3>
      <ul className="space-y-2 mb-8">
         <li className="flex items-center gap-2"><CheckCircle2 className="text-brand-blue" size={18}/> Limpeza e aplicação de flúor;</li>
         <li className="flex items-center gap-2"><CheckCircle2 className="text-brand-blue" size={18}/> Restaurações (obturações);</li>
         <li className="flex items-center gap-2"><CheckCircle2 className="text-brand-blue" size={18}/> Extrações simples e cirurgias do siso;</li>
         <li className="flex items-center gap-2"><CheckCircle2 className="text-brand-blue" size={18}/> Tratamento de canal (Endodontia);</li>
         <li className="flex items-center gap-2"><CheckCircle2 className="text-brand-blue" size={18}/> Tratamento de gengiva (Periodontia);</li>
         <li className="flex items-center gap-2"><CheckCircle2 className="text-brand-blue" size={18}/> Biópsias para diagnóstico de câncer bucal.</li>
      </ul>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-3 items-start my-6 not-prose">
         <AlertTriangle className="text-yellow-600 shrink-0 mt-0.5" />
         <p className="text-sm text-yellow-800">
            <strong>Dica Importante:</strong> Se você sente dor aguda ou está com inchaço no rosto, não precisa agendar. Vá à UPA (Unidade de Pronto Atendimento) ou UBS e solicite atendimento de <strong>Urgência Odontológica</strong>.
         </p>
      </div>

      <h3>Documentos Necessários</h3>
      <ul className="space-y-1 text-sm text-slate-600">
         <li>Cartão do SUS (físico ou no app Meu SUS Digital);</li>
         <li>Documento de identidade (RG/CNH);</li>
         <li>Comprovante de residência atualizado.</li>
      </ul>

    </BroadcastLayout>
  );
};