import React, { useEffect } from 'react';
import { BroadcastLayout } from '../broadcast/BroadcastLayout';
import { Wallet, Calendar, AlertTriangle, Briefcase, Table2, HelpCircle } from 'lucide-react';
import { ViewState } from '../../types';

interface Props {
  onNavigate: (view: ViewState) => void;
}

export const PisPasepGuide: React.FC<Props> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = "Tabela PIS 2025: Valor por Meses Trabalhados e Consulta CPF";
  }, []);

  return (
    <BroadcastLayout
      title="Abono Salarial PIS/PASEP 2025: Tabela de Valores e Guia de Saque"
      subtitle="Confira quanto você vai receber de acordo com os meses trabalhados no ano-base 2023. Veja como consultar o benefício na Carteira de Trabalho Digital."
      onNavigate={onNavigate}
      quizTriggerLabel="Consultar Carteira Digital"
      onTakeQuiz={() => window.open('https://www.gov.br/pt-br/servicos/sacar-o-abono-salarial', '_blank')}
    >
      <h2>O "Atraso" do Ano-Base: Entenda</h2>
      <p>
        Muitos trabalhadores ficam confusos sobre qual ano está sendo pago. Devido à pandemia, o calendário do PIS/PASEP sofreu um atraso de dois anos.
      </p>
      <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-brand-blue my-6 not-prose">
         <p className="font-bold text-blue-900 m-0">
            Em 2025, será pago o benefício referente ao trabalho realizado em <strong>2023</strong> (Ano-Base).
         </p>
      </div>

      <h3>Quem tem direito ao Abono Salarial?</h3>
      <p>
        Para ter direito ao saque, é necessário cumprir cumulativamente os seguintes requisitos:
      </p>
      <ul className="space-y-2 mb-8">
         <li><strong>Cadastro:</strong> Estar cadastrado no PIS/PASEP há pelo menos cinco anos.</li>
         <li><strong>Remuneração:</strong> Ter recebido remuneração mensal média de até dois salários mínimos durante o ano-base (2023).</li>
         <li><strong>Atividade:</strong> Ter exercido atividade remunerada para Pessoa Jurídica, durante pelo menos 30 dias, consecutivos ou não, no ano-base.</li>
         <li><strong>Dados:</strong> Ter seus dados informados pelo empregador (RAIS/eSocial) corretamente.</li>
      </ul>

      <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 flex gap-3 items-start my-6 not-prose">
         <AlertTriangle className="text-yellow-600 shrink-0 mt-1" />
         <div className="text-sm text-yellow-800">
            <strong>Empregadas Domésticas:</strong> Infelizmente, quem trabalha para Pessoa Física (como domésticas) não tem direito ao abono salarial, apenas quem trabalha para empresas (CNPJ).
         </div>
      </div>

      <h3>Tabela de Valores 2025 (Estimada)</h3>
      <p>
         O valor do abono é proporcional ao número de meses trabalhados. O teto é o salário mínimo vigente na data do pagamento (Estimado em R$ 1.509,00 para 2025).
      </p>

      <div className="overflow-x-auto not-prose mb-8">
         <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
            <thead className="bg-slate-100 text-slate-700">
               <tr>
                  <th className="p-3 font-bold text-center border-r border-gray-200">Meses Trabalhados</th>
                  <th className="p-3 font-bold text-center">Valor do Benefício (R$)</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-slate-600">
               {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((mes) => (
                  <tr key={mes} className="hover:bg-slate-50">
                     <td className="p-3 text-center border-r border-gray-200">{mes} mês{mes > 1 ? 'es' : ''}</td>
                     <td className="p-3 text-center font-bold text-green-600">
                        R$ {Math.round((1509 / 12) * mes)},00
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         <p className="text-xs text-gray-400 mt-2 text-center">*Valores baseados na estimativa do Salário Mínimo de R$ 1.509,00.</p>
      </div>

      <h3>Como consultar se vou receber?</h3>
      <p>
         A maneira mais confiável não é ir ao banco, mas sim consultar o aplicativo oficial do governo.
      </p>
      <ol className="list-decimal pl-5 space-y-3">
         <li>Baixe o aplicativo <strong>Carteira de Trabalho Digital</strong> (Gov.br).</li>
         <li>Faça login com seu CPF e senha.</li>
         <li>No menu inferior, clique em "Benefícios".</li>
         <li>Selecione "Abono Salarial".</li>
         <li>Filtre pelo Ano-Base 2023. O app mostrará se está "Habilitado" e o valor.</li>
      </ol>

      <h3>Diferença entre PIS e PASEP</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
         <div className="bg-white p-4 border border-blue-200 rounded-xl shadow-sm">
            <h4 className="font-bold text-blue-700 mb-2">PIS (Caixa)</h4>
            <p className="text-sm text-slate-600">Destinado a funcionários de <strong>empresas privadas</strong>. O saque é feito via Cartão Cidadão, App Caixa Tem ou agências da Caixa.</p>
         </div>
         <div className="bg-white p-4 border border-yellow-200 rounded-xl shadow-sm">
            <h4 className="font-bold text-yellow-700 mb-2">PASEP (Banco do Brasil)</h4>
            <p className="text-sm text-slate-600">Destinado a <strong>servidores públicos</strong>. O crédito cai direto na conta do BB ou pode ser sacado via TED para não correntistas.</p>
         </div>
      </div>

    </BroadcastLayout>
  );
};