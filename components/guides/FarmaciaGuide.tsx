import React, { useEffect } from 'react';
import { BroadcastLayout } from '../broadcast/BroadcastLayout';
import { Pill, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';
import { ViewState } from '../../types';

interface Props {
  onNavigate: (view: ViewState) => void;
}

export const FarmaciaGuide: React.FC<Props> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = "Farmácia Popular 2025: Lista de Remédios Gratuitos e Cadastro";
  }, []);

  return (
    <BroadcastLayout
      title="Farmácia Popular: Remédios Grátis para Hipertensão, Diabetes e Asma"
      subtitle="Confira a lista atualizada de medicamentos gratuitos e com até 90% de desconto. Saiba como retirar usando apenas o CPF e a receita médica."
      onNavigate={onNavigate}
      quizTriggerLabel="Verificar Unidades Próximas"
      onTakeQuiz={() => window.open('https://www.gov.br/saude/pt-br/composicao/sectics/daf/farmacia-popular', '_blank')}
    >
      <h2>Como funciona o programa?</h2>
      <p>
        O Programa Farmácia Popular do Brasil oferece medicamentos essenciais gratuitamente ou com grandes descontos (até 90%) em farmácias privadas credenciadas. Não é necessário fazer cadastro prévio no programa, basta ir à farmácia.
      </p>

      <h3>Lista de Medicamentos 100% Gratuitos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3">
           <div className="bg-red-50 p-2 rounded-lg text-red-600"><Pill /></div>
           <div>
              <strong className="block text-slate-900">Hipertensão</strong>
              <span className="text-sm text-gray-500">Captopril, Atenolol, Losartana, etc.</span>
           </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3">
           <div className="bg-blue-50 p-2 rounded-lg text-blue-600"><Pill /></div>
           <div>
              <strong className="block text-slate-900">Diabetes</strong>
              <span className="text-sm text-gray-500">Insulinas e Metformina.</span>
           </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3">
           <div className="bg-green-50 p-2 rounded-lg text-green-600"><Pill /></div>
           <div>
              <strong className="block text-slate-900">Asma</strong>
              <span className="text-sm text-gray-500">Sulfato de Salbutamol, Brometo de Ipratrópio.</span>
           </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3">
           <div className="bg-pink-50 p-2 rounded-lg text-pink-600"><Pill /></div>
           <div>
              <strong className="block text-slate-900">Osteoporose</strong>
              <span className="text-sm text-gray-500">Medicamentos e Contraceptivos também inclusos.</span>
           </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-6 not-prose">
         <h4 className="flex items-center gap-2 text-blue-800 font-bold text-lg mb-2">
            <CheckCircle2 /> Novidade: Absorventes Gratuitos
         </h4>
         <p className="text-blue-800 m-0">
            Mulheres em situação de vulnerabilidade e estudantes da rede pública agora podem retirar absorventes higiênicos gratuitamente através do Farmácia Popular.
         </p>
      </div>

      <h3>Documentos Necessários</h3>
      <ul className="space-y-2">
         <li>Documento oficial com foto e CPF;</li>
         <li>Receita médica válida (pode ser do SUS ou particular).</li>
      </ul>
      <p className="text-sm italic">
         *Para absorventes, é necessário apresentar a Autorização do Programa Dignidade Menstrual (emitida via app Meu SUS Digital).
      </p>

    </BroadcastLayout>
  );
};