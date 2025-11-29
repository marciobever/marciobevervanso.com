import React, { useEffect } from 'react';
import { BroadcastLayout } from '../broadcast/BroadcastLayout';
import { Tv, CheckCircle2, Zap } from 'lucide-react';
import { ViewState } from '../../types';

interface Props {
  onNavigate: (view: ViewState) => void;
}

export const AntenaGuide: React.FC<Props> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = "Kit Antena Digital Gratuito: Como Solicitar em 2025 | Siga Antenado";
  }, []);

  return (
    <BroadcastLayout
      title="Kit Antena Digital Gratuito: Como solicitar e quem tem direito"
      subtitle="Troca da parabólica antiga pela nova digital é obrigatória e gratuita para beneficiários de programas sociais. Saiba como agendar a instalação."
      onNavigate={onNavigate}
      quizTriggerLabel="Agendar Instalação (Siga Antenado)"
      onTakeQuiz={() => window.open('https://sigaantenado.com.br/', '_blank')}
    >
      <h2>Por que a troca é necessária?</h2>
      <p>
        Com a chegada da tecnologia 5G no Brasil, o sinal das antenas parabólicas tradicionais (aquelas grandes e teladas) sofrerá interferência e deixará de funcionar corretamente. Para evitar que famílias fiquem sem TV, o governo criou o programa <strong>Siga Antenado</strong>.
      </p>

      <h3>O que vem no Kit Gratuito?</h3>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 not-prose my-8">
         <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="bg-blue-50 p-6 rounded-full text-brand-blue">
               <Tv size={48} />
            </div>
            <ul className="space-y-3 flex-grow">
               <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500"/> 1 Antena Parabólica Digital (pequena)</li>
               <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500"/> 1 Receptor Digital</li>
               <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500"/> 1 Controle Remoto com pilhas</li>
               <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500"/> Instalação Gratuita feita por técnico</li>
            </ul>
         </div>
      </div>

      <h3>Quem tem direito ao Kit Grátis?</h3>
      <p>Para receber o equipamento instalado sem custo nenhum, é preciso atender a dois requisitos:</p>
      <ol>
         <li>Estar inscrito em algum programa social do Governo Federal (CadÚnico ativo);</li>
         <li>Possuir uma <strong>antena parabólica tradicional</strong> instalada e funcionando em casa.</li>
      </ol>

      <div className="bg-slate-900 text-white p-6 rounded-xl my-6 not-prose">
         <h4 className="flex items-center gap-2 font-bold text-lg mb-2 text-yellow-400">
            <Zap /> Quem usa antena "Espinha de Peixe"?
         </h4>
         <p className="text-slate-300 text-sm m-0">
            Quem usa antena digital comum (interna ou externa tipo espinha de peixe) ou TV por assinatura <strong>não precisa</strong> fazer a troca. O programa é exclusivo para quem usa Parabólica Grande.
         </p>
      </div>

    </BroadcastLayout>
  );
};