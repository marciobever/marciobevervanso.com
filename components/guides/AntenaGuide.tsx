import React, { useEffect } from 'react';
import { BroadcastLayout } from '../broadcast/BroadcastLayout';
import { Tv, CheckCircle2, Zap, Wifi, Phone, CalendarCheck } from 'lucide-react';
import { ViewState } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';

interface Props {
  onNavigate: (view: ViewState) => void;
}

export const AntenaGuide: React.FC<Props> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = "Kit Antena Digital Gratuito: Agendamento Siga Antenado e Instalação";
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "name": "Siga Antenado - Kit Antena Digital",
    "serviceType": "Public Utility Service",
    "provider": {
      "@type": "Organization",
      "name": "EAF - Entidade Administradora da Faixa"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Beneficiários de Programas Sociais com Antena Parabólica Tradicional"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "description": "Kit gratuito com antena digital, receptor e instalação."
    }
  };

  return (
    <BroadcastLayout
      title="Kit Antena Digital 2025: Quem tem direito e como agendar a instalação grátis"
      subtitle="O sinal da parabólica antiga vai desligar. Veja se você pode receber o Kit da Nova Parabólica Digital totalmente de graça instalado na sua casa."
      onNavigate={onNavigate}
      quizTriggerLabel="Agendar no Siga Antenado"
      onTakeQuiz={() => window.open('https://sigaantenado.com.br/', '_blank')}
    >
      <SchemaMarkup data={schemaData} />
      <h2>Por que a parabólica antiga vai parar de funcionar?</h2>
      <p>
        Com a chegada do <strong>5G</strong> (internet móvel de alta velocidade) no Brasil, foi necessário utilizar a mesma frequência de sinal que as antenas parabólicas tradicionais (Banda C) usavam.
      </p>
      <div className="bg-slate-100 p-4 rounded-xl my-4 not-prose flex items-center gap-4">
         <Wifi size={32} className="text-blue-600 shrink-0" />
         <p className="text-sm text-slate-700 m-0">
            Se você não trocar a antena, o sinal 5G vai causar chuviscos, interferências e até derrubar o sinal da sua TV. Por isso, a troca pela <strong>Nova Parabólica Digital</strong> (Banda Ku) é obrigatória.
         </p>
      </div>

      <h3>O que vem no Kit Gratuito?</h3>
      <p>Para famílias de baixa renda, o governo (através da entidade Siga Antenado) fornece tudo zero custo:</p>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 not-prose my-6">
         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="text-green-500"/> 1 Antena Digital (menor e mais moderna)</li>
            <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="text-green-500"/> 1 Receptor Digital (Conversor)</li>
            <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="text-green-500"/> 1 Controle Remoto com pilhas</li>
            <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="text-green-500"/> Cabos e conectores</li>
            <li className="flex items-center gap-2 col-span-1 sm:col-span-2 bg-green-50 p-2 rounded-lg text-green-800"><CheckCircle2 className="text-green-600"/> <strong>Instalação feita por técnico especializado</strong></li>
         </ul>
      </div>

      <h3>Quem tem direito ao Kit Grátis?</h3>
      <p>Para receber o equipamento instalado sem custo nenhum, é preciso atender simultaneamente a dois requisitos:</p>
      <ol className="list-decimal pl-5 space-y-3">
         <li><strong>Cadastro Único:</strong> Estar inscrito em algum programa social do Governo Federal (CadÚnico ativo) e ter renda familiar de até 3 salários mínimos.</li>
         <li><strong>Antena Antiga:</strong> Possuir uma <strong>antena parabólica tradicional</strong> (aquela grande, de tela de arame, geralmente preta) instalada e funcionando em casa.</li>
      </ol>

      <div className="bg-yellow-50 p-6 rounded-xl my-6 not-prose border border-yellow-200">
         <h4 className="flex items-center gap-2 font-bold text-lg mb-2 text-yellow-800">
            <Zap /> Quem NÃO precisa trocar?
         </h4>
         <p className="text-yellow-900 text-sm mb-2">
            O kit <strong>não</strong> é para quem usa:
         </p>
         <ul className="list-disc pl-5 text-sm text-yellow-800 space-y-1">
            <li>Antena digital comum ("espinha de peixe" ou interna);</li>
            <li>TV por assinatura (Sky, Claro, etc);</li>
            <li>Quem mora em locais onde o sinal da parabólica antiga já não é utilizado.</li>
         </ul>
      </div>

      <h3>Como fazer o agendamento?</h3>
      <p>Você não precisa sair de casa. O processo é todo feito por telefone ou internet.</p>
      
      <div className="space-y-4 my-6 not-prose">
         <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl">
            <div className="bg-brand-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
            <div>
               <h4 className="font-bold text-brand-dark">Tenha o NIS em mãos</h4>
               <p className="text-sm text-gray-600">Você vai precisar do número do seu NIS (Número de Identificação Social) ou CPF.</p>
            </div>
         </div>
         <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl">
            <div className="bg-brand-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
            <div>
               <h4 className="font-bold text-brand-dark">Acesse o Siga Antenado</h4>
               <p className="text-sm text-gray-600">Entre no site <strong>sigaantenado.com.br</strong> ou ligue para <strong>0800 729 2404</strong>.</p>
            </div>
         </div>
         <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl">
            <div className="bg-brand-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
            <div>
               <h4 className="font-bold text-brand-dark">Agende a visita</h4>
               <p className="text-sm text-gray-600">Se aprovado, você escolherá o dia e horário para o técnico ir à sua casa instalar o equipamento.</p>
            </div>
         </div>
      </div>

      <p>
         <strong>Importante:</strong> O técnico não pode cobrar nada. O equipamento e a instalação são 100% subsidiados.
      </p>

    </BroadcastLayout>
  );
};