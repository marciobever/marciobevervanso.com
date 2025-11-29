
import React, { useEffect } from 'react';
import { BroadcastLayout } from '../broadcast/BroadcastLayout';
import { Wallet, Calendar, AlertTriangle, Briefcase, Table2, HelpCircle, Calculator, ExternalLink } from 'lucide-react';
import { ViewState } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';

interface Props {
  onNavigate: (view: ViewState) => void;
}

export const PisPasepGuide: React.FC<Props> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = "Tabela PIS 2025: Valor por Meses Trabalhados e Consulta CPF";
  }, []);

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "Abono Salarial PIS/PASEP",
      "serviceType": "Financial Benefit",
      "provider": {
        "@type": "GovernmentOrganization",
        "name": "Ministério do Trabalho e Emprego"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Trabalhadores Formais"
      },
      "offers": {
        "@type": "Offer",
        "price": "1509",
        "priceCurrency": "BRL",
        "description": "Valor proporcional aos meses trabalhados, variando de R$ 126,00 a R$ 1.509,00."
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quem tem direito ao PIS 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trabalhadores que exerceram atividade remunerada para pessoa jurídica por pelo menos 30 dias no ano-base 2023 e receberam até dois salários mínimos médios."
          }
        },
        {
          "@type": "Question",
          "name": "Empregada doméstica tem direito ao PIS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. O Abono Salarial é destinado apenas a trabalhadores de empresas privadas (Pessoa Jurídica) ou servidores públicos. Empregados de pessoa física não têm direito."
          }
        }
      ]
    }
  ];

  return (
    <BroadcastLayout
      title="Abono Salarial PIS/PASEP 2025: Tabela de Valores e Guia de Saque"
      subtitle="Confira quanto você vai receber de acordo com os meses trabalhados no ano-base 2023. Veja como consultar o benefício na Carteira de Trabalho Digital."
      onNavigate={onNavigate}
      quizTriggerLabel="Consultar Carteira Digital"
      onTakeQuiz={() => window.open('https://www.gov.br/pt-br/servicos/sacar-o-abono-salarial', '_blank')}
    >
      <SchemaMarkup data={schemaData} />
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

      <h3>Como é calculado o valor?</h3>
      <div className="flex items-start gap-4 mb-6 not-prose bg-gray-50 p-4 rounded-xl border border-gray-200">
         <div className="bg-white p-2 rounded-lg text-brand-blue shadow-sm shrink-0">
            <Calculator />
         </div>
         <div>
            <p className="text-sm text-slate-700 leading-relaxed">
               O cálculo é simples: o valor total do salário mínimo vigente na data de pagamento (estimado em R$ 1.509,00) é dividido por 12 meses.
            </p>
            <p className="text-sm text-slate-700 mt-2 font-bold">
               Cada mês trabalhado equivale a 1/12 do salário (aprox. R$ 126,00). 
            </p>
            <p className="text-xs text-slate-500 mt-2">
               *Períodos iguais ou superiores a 15 dias contam como mês integral.
            </p>
         </div>
      </div>

      <h3>Tabela de Valores 2025 (Estimada)</h3>
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

      <h3>Canais Oficiais de Consulta</h3>
      <p>
         A maneira mais confiável é através do aplicativo <strong>Carteira de Trabalho Digital</strong> (Gov.br). Mas você também pode consultar diretamente no banco pagador:
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
         <div className="bg-white p-6 border border-blue-200 rounded-xl shadow-sm hover:border-blue-400 hover:shadow-md transition-all">
            <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
               <Wallet size={20}/> PIS (Setor Privado)
            </h4>
            <p className="text-sm text-slate-600 mb-4">Pago pela <strong>Caixa Econômica</strong>. Saque via Cartão Cidadão ou App Caixa Tem.</p>
            <a 
               href="https://www.caixa.gov.br/beneficios-trabalhador/abono-salarial/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-1 text-xs font-bold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
               Site da Caixa <ExternalLink size={12} />
            </a>
         </div>
         <div className="bg-white p-6 border border-yellow-200 rounded-xl shadow-sm hover:border-yellow-400 hover:shadow-md transition-all">
            <h4 className="font-bold text-yellow-700 mb-2 flex items-center gap-2">
               <Briefcase size={20}/> PASEP (Setor Público)
            </h4>
            <p className="text-sm text-slate-600 mb-4">Pago pelo <strong>Banco do Brasil</strong>. Crédito em conta ou guichê de caixa.</p>
            <a 
               href="https://www.bb.com.br/site/setor-publico/beneficios-sociais/pasep/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-1 text-xs font-bold text-white bg-yellow-600 px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
            >
               Site do BB <ExternalLink size={12} />
            </a>
         </div>
      </div>

    </BroadcastLayout>
  );
};
