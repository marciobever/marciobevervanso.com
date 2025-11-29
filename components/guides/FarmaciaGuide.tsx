import React, { useEffect } from 'react';
import { BroadcastLayout } from '../broadcast/BroadcastLayout';
import { Pill, CheckCircle2, AlertTriangle, FileText, Smartphone, HelpCircle, Baby } from 'lucide-react';
import { ViewState } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';

interface Props {
  onNavigate: (view: ViewState) => void;
}

export const FarmaciaGuide: React.FC<Props> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = "Farmácia Popular 2025: Lista Completa, Fraldas e Absorventes Grátis";
  }, []);

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "Farmácia Popular do Brasil",
      "serviceType": "Pharmacy Benefit",
      "provider": {
        "@type": "GovernmentOrganization",
        "name": "Ministério da Saúde"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Brasil"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BRL",
        "description": "Medicamentos gratuitos para hipertensão, diabetes, asma, osteoporose e anticoncepcionais."
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quem tem direito à Farmácia Popular?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Todos os cidadãos brasileiros. Medicamentos para asma, hipertensão e diabetes são gratuitos para todos. Beneficiários do Bolsa Família têm gratuidade em todos os medicamentos do programa."
          }
        },
        {
          "@type": "Question",
          "name": "Como pegar fralda geriátrica gratuita?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "É necessário ter idade igual ou superior a 60 anos ou ser pessoa com deficiência, e apresentar laudo médico comprovando a necessidade do uso de fraldas."
          }
        }
      ]
    }
  ];

  return (
    <BroadcastLayout
      title="Farmácia Popular 2025: Guia Definitivo de Medicamentos e Fraldas Gratuitas"
      subtitle="Não pague por remédios essenciais. Aprenda a retirar medicamentos para pressão, diabetes, asma e insumos como fraldas geriátricas e absorventes gratuitamente."
      onNavigate={onNavigate}
      quizTriggerLabel="Verificar Farmácias Credenciadas"
      onTakeQuiz={() => window.open('https://www.gov.br/saude/pt-br/composicao/sectics/daf/farmacia-popular', '_blank')}
    >
      <SchemaMarkup data={schemaData} />
      <h2>O que mudou no Farmácia Popular em 2025?</h2>
      <p>
        O Programa Farmácia Popular do Brasil foi relançado com novas regras. Agora, <strong>beneficiários do Bolsa Família têm acesso a todos os medicamentos do programa gratuitamente</strong> (antes, alguns tinham apenas 50% de desconto). Além disso, o programa Dignidade Menstrual foi integrado, fornecendo absorventes para mulheres em vulnerabilidade.
      </p>

      <h3>Quais remédios são 100% gratuitos para todos?</h3>
      <p>Independente de renda, qualquer cidadão com CPF e receita médica pode retirar gratuitamente medicamentos para:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose">
        <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex flex-col items-center text-center">
           <div className="bg-white p-3 rounded-full shadow-sm text-red-600 mb-3"><Pill /></div>
           <strong className="text-red-900">Hipertensão</strong>
           <span className="text-xs text-red-700 mt-1">Captopril, Atenolol, Losartana, Hidroclorotiazida.</span>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex flex-col items-center text-center">
           <div className="bg-white p-3 rounded-full shadow-sm text-blue-600 mb-3"><Pill /></div>
           <strong className="text-blue-900">Diabetes</strong>
           <span className="text-xs text-blue-700 mt-1">Insulina NPH, Insulina Regular, Metformina, Glibenclamida.</span>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex flex-col items-center text-center">
           <div className="bg-white p-3 rounded-full shadow-sm text-green-600 mb-3"><Pill /></div>
           <strong className="text-green-900">Asma</strong>
           <span className="text-xs text-green-700 mt-1">Sulfato de Salbutamol, Brometo de Ipratrópio, Dipropionato.</span>
        </div>
      </div>

      <h3>Copagamento (Desconto de até 90%)</h3>
      <p>
        Para outras condições, o governo paga uma grande parte e o cidadão paga uma pequena diferença. <strong>Atenção: Se você recebe Bolsa Família, estes itens também saem de graça.</strong>
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 not-prose mb-8">
         <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-blue"/> Anticoncepcionais</li>
         <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-blue"/> Dislipidemia (Colesterol alto)</li>
         <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-blue"/> Doença de Parkinson</li>
         <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-blue"/> Glaucoma</li>
         <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-blue"/> Rinite</li>
         <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-blue"/> Osteoporose</li>
      </ul>

      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl my-8 not-prose">
         <h4 className="flex items-center gap-2 text-purple-900 font-bold text-lg mb-2">
            <Baby /> Fraldas Geriátricas
         </h4>
         <p className="text-purple-800 m-0 text-sm">
            O programa fornece fraldas para idosos acima de 60 anos ou pessoas com deficiência. O limite é de <strong>40 fraldas a cada 10 dias</strong>. É necessário laudo médico comprovando a incontinência urinária.
         </p>
      </div>

      <h3>Passo a Passo: Como retirar</h3>
      <div className="space-y-6 my-8 not-prose">
         <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
               <h4 className="font-bold text-brand-dark">Vá a uma farmácia credenciada</h4>
               <p className="text-sm text-gray-600">Procure o selo "Aqui Tem Farmácia Popular". Grandes redes como Raia, Drogasil e Pague Menos geralmente participam.</p>
            </div>
         </div>
         <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
               <h4 className="font-bold text-brand-dark">Leve os documentos</h4>
               <p className="text-sm text-gray-600">Documento oficial com foto e número do CPF. O próprio paciente deve estar presente (exceto para acamados, mediante procuração).</p>
            </div>
         </div>
         <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
               <h4 className="font-bold text-brand-dark">Receita Médica Válida</h4>
               <p className="text-sm text-gray-600">A receita pode ser do SUS ou particular. Deve ter validade de até 180 dias (para medicamentos) ou 1 ano (para anticoncepcionais).</p>
            </div>
         </div>
      </div>

      <h3>Dignidade Menstrual (Absorventes)</h3>
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm not-prose mb-8">
         <div className="flex items-center gap-3 mb-4">
            <div className="bg-pink-100 p-2 rounded-lg text-pink-600"><Smartphone size={24} /></div>
            <h4 className="text-lg font-bold text-slate-900">Como emitir a autorização no App</h4>
         </div>
         <p className="text-sm text-slate-600 mb-4">
            Para retirar absorventes, não basta a receita. Você precisa gerar um código no aplicativo <strong>Meu SUS Digital</strong>.
         </p>
         <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700">
            <li>Baixe o app "Meu SUS Digital" (antigo Conecte SUS).</li>
            <li>Faça login com sua conta Gov.br.</li>
            <li>Clique no ícone "Dignidade Menstrual".</li>
            <li>Clique em "Emitir Autorização".</li>
            <li>Leve o código gerado à farmácia (vale por 180 dias).</li>
         </ol>
      </div>

      <h3>Perguntas Frequentes</h3>
      <div className="space-y-3 not-prose">
         <details className="group bg-gray-50 p-4 rounded-xl border border-gray-200">
            <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               Preciso fazer cadastro prévio? <HelpCircle size={16} />
            </summary>
            <p className="text-sm text-slate-600 mt-2">
               Não. O cadastro é feito na hora, na própria farmácia, pelo sistema do Ministério da Saúde. Basta apresentar o CPF.
            </p>
         </details>
         <details className="group bg-gray-50 p-4 rounded-xl border border-gray-200">
            <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               Posso pegar remédio para meu pai/mãe? <HelpCircle size={16} />
            </summary>
            <p className="text-sm text-slate-600 mt-2">
               Em regra, não. O programa exige a presença do paciente. A exceção é para pacientes acamados ou menores de idade, onde o representante legal ou procurador pode retirar apresentando documentos específicos.
            </p>
         </details>
      </div>

    </BroadcastLayout>
  );
};