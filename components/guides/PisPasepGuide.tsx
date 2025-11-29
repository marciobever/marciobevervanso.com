import React, { useEffect } from 'react';
import { BroadcastLayout } from '../broadcast/BroadcastLayout';
import { Wallet, Calendar, AlertTriangle, Briefcase } from 'lucide-react';
import { ViewState } from '../../types';

interface Props {
  onNavigate: (view: ViewState) => void;
}

export const PisPasepGuide: React.FC<Props> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = "Abono Salarial 2025: Quem tem direito e Calendário PIS/PASEP";
  }, []);

  return (
    <BroadcastLayout
      title="Abono Salarial PIS/PASEP 2025: Guia Completo e Calendário"
      subtitle="Verifique se você tem direito a receber até um salário mínimo extra este ano. Regras para trabalhadores CLT e Servidores Públicos."
      onNavigate={onNavigate}
      quizTriggerLabel="Consultar Pagamento (Carteira Digital)"
      onTakeQuiz={() => window.open('https://www.gov.br/pt-br/servicos/sacar-o-abono-salarial', '_blank')}
    >
      <h2>Quem tem direito ao Abono Salarial?</h2>
      <p>
        O abono salarial funciona como um 14º salário para trabalhadores de baixa renda. Para ter direito em 2025 (referente ao ano-base 2023), é preciso cumprir <strong>todos</strong> os requisitos abaixo:
      </p>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 not-prose my-8">
         <ul className="space-y-4">
            <li className="flex gap-3">
               <div className="bg-green-100 p-1 rounded text-green-700 h-fit"><Briefcase size={20}/></div>
               <div>
                  <strong className="block text-slate-900">Cadastro há 5 anos</strong>
                  <span className="text-sm text-gray-600">Estar cadastrado no PIS/PASEP há pelo menos cinco anos.</span>
               </div>
            </li>
            <li className="flex gap-3">
               <div className="bg-green-100 p-1 rounded text-green-700 h-fit"><Wallet size={20}/></div>
               <div>
                  <strong className="block text-slate-900">Média Salarial</strong>
                  <span className="text-sm text-gray-600">Ter recebido remuneração média de até dois salários mínimos mensais no ano-base.</span>
               </div>
            </li>
            <li className="flex gap-3">
               <div className="bg-green-100 p-1 rounded text-green-700 h-fit"><Calendar size={20}/></div>
               <div>
                  <strong className="block text-slate-900">Tempo de Trabalho</strong>
                  <span className="text-sm text-gray-600">Ter trabalhado com carteira assinada por pelo menos 30 dias no ano-base.</span>
               </div>
            </li>
         </ul>
      </div>

      <h3>Qual o valor do benefício?</h3>
      <p>
         O valor é proporcional aos meses trabalhados. Quem trabalhou 12 meses recebe o teto (1 salário mínimo vigente). Quem trabalhou 1 mês recebe 1/12 do salário.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl my-6 not-prose">
         <h4 className="flex items-center gap-2 text-yellow-800 font-bold text-lg mb-2">
            <AlertTriangle /> Atenção
         </h4>
         <p className="text-yellow-800 m-0">
            Empregadas domésticas (pessoas físicas) <strong>não</strong> têm direito ao abono salarial, pois o empregador precisa ser Pessoa Jurídica (CNPJ).
         </p>
      </div>

      <h3>Diferença entre PIS e PASEP</h3>
      <ul>
         <li><strong>PIS:</strong> Pago pela Caixa Econômica para trabalhadores de empresas privadas.</li>
         <li><strong>PASEP:</strong> Pago pelo Banco do Brasil para servidores públicos.</li>
      </ul>

    </BroadcastLayout>
  );
};