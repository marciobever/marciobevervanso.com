
import React, { useEffect } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { Zap, CheckCircle2, AlertTriangle, Calculator, FileText } from 'lucide-react';
import { Quiz } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { MetaHead } from '../seo/MetaHead';

interface Props {
  onNavigate: (view: any) => void;
  onSimulate: (id: string) => void;
  quizzes?: Quiz[];
}

export const TarifaSocialPage: React.FC<Props> = ({ onNavigate, onSimulate, quizzes }) => {
  // SEO movido para MetaHead


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "name": "Tarifa Social de Energia Elétrica (TSEE)",
    "serviceType": "Public Utility Subsidy",
    "provider": {
      "@type": "GovernmentOrganization",
      "name": "ANEEL / Governo Federal"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Baixa Renda"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "description": "Desconto escalonado de 10% a 65% na fatura de energia."
    }
  };

  return (
    <BroadcastLayout
      title="Tarifa Social 2025: Desconto de até 65% na conta de luz (Guia Oficial)"
      subtitle="O benefício agora é concedido automaticamente para quem está no CadÚnico. Entenda as faixas de consumo e como garantir que o desconto venha na sua fatura."
      onNavigate={onNavigate}
      quizTriggerLabel="Calcular Minha Renda"
      onTakeQuiz={() => onNavigate('calculator')} // Redireciona para a calculadora, que faz sentido aqui
    >
      <MetaHead
        title="Tarifa Social de Energia 2025: Tabela de Descontos e Cadastro Automático"
        description="Saiba como conseguir até 65% de desconto na conta de luz com a Tarifa Social. Veja a tabela de consumo e quem tem direito automático."
        url="https://beneficios.receitapopular.com.br/tarifa-social-energia"
        canonicalUrl="https://beneficios.receitapopular.com.br/tarifa-social-energia"
      />
      <SchemaMarkup data={schemaData} />
      <h2>O desconto é automático?</h2>
      <p>
        Sim. Desde 2022, as famílias inscritas no Cadastro Único (CadÚnico) que atendem aos critérios de renda têm o desconto incluído automaticamente na conta de luz pela distribuidora de energia.
      </p>
      <p>
        Porém, para isso acontecer, o <strong>titular da conta de luz deve ser o mesmo (ou estar na mesma família) do cadastro no governo</strong>. Se a conta de luz estiver no nome do antigo morador ou de um parente falecido, o desconto não entra.
      </p>

      <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 my-6 not-prose flex gap-4 items-start">
        <AlertTriangle className="text-yellow-600 shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-yellow-800 text-lg mb-1">Atenção ao CPF na conta</h4>
          <p className="text-sm text-yellow-800 leading-relaxed">
            Verifique agora sua fatura. Se ela não estiver no nome de alguém que faz parte do seu CadÚnico, entre em contato com a companhia elétrica para trocar a titularidade. É só assim que o sistema cruza os dados.
          </p>
        </div>
      </div>

      <h3>Tabela de Descontos por Consumo</h3>
      <p>O desconto é cumulativo e aplicado por faixas de consumo. Quanto menos você gasta, maior o desconto.</p>

      <div className="overflow-x-auto not-prose my-6">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <thead className="bg-brand-blue text-white">
            <tr>
              <th className="py-4 px-6 text-left font-bold">Consumo Mensal (kWh)</th>
              <th className="py-4 px-6 text-center font-bold">Desconto</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm md:text-base text-slate-700">
            <tr className="bg-green-50">
              <td className="py-4 px-6 font-bold">0 a 30 kWh</td>
              <td className="py-4 px-6 text-center font-bold text-green-700">65%</td>
            </tr>
            <tr>
              <td className="py-4 px-6">31 a 100 kWh</td>
              <td className="py-4 px-6 text-center font-bold">40%</td>
            </tr>
            <tr>
              <td className="py-4 px-6">101 a 220 kWh</td>
              <td className="py-4 px-6 text-center font-bold">10%</td>
            </tr>
            <tr className="bg-gray-50 text-gray-500">
              <td className="py-4 px-6">Acima de 220 kWh</td>
              <td className="py-4 px-6 text-center">0% (Sem desconto)</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-2 ml-1">*Para famílias Indígenas e Quilombolas, o desconto é de 100% até 50 kWh.</p>
      </div>

      <h3>Quem tem direito?</h3>
      <ul className="space-y-3 mb-8">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" />
          <span>Famílias inscritas no CadÚnico com <strong>renda mensal menor ou igual a meio salário mínimo</strong> por pessoa.</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" />
          <span>Famílias com portador de doença que precise de aparelho elétrico para tratamento (até 3 salários mínimos de renda total).</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" />
          <span>Idosos (65+) ou PcD que recebem o <strong>BPC (Benefício de Prestação Continuada)</strong>.</span>
        </li>
      </ul>

      <h3>Dúvidas Frequentes</h3>
      <div className="space-y-4 not-prose">
        <details className="group bg-white p-4 rounded-xl border border-gray-200 cursor-pointer">
          <summary className="font-bold text-slate-800 flex justify-between items-center">
            Moro de aluguel, tenho direito? <Zap size={16} className="text-yellow-500" />
          </summary>
          <p className="text-sm text-slate-600 mt-3 pl-2 border-l-2 border-brand-blue">
            Sim. Você não precisa ser dono da casa. Basta que a conta de luz esteja no seu nome (inquilino inscrito no CadÚnico).
          </p>
        </details>
        <details className="group bg-white p-4 rounded-xl border border-gray-200 cursor-pointer">
          <summary className="font-bold text-slate-800 flex justify-between items-center">
            Perco o desconto se atrasar a conta? <Zap size={16} className="text-yellow-500" />
          </summary>
          <p className="text-sm text-slate-600 mt-3 pl-2 border-l-2 border-brand-blue">
            Não perde o desconto, mas corre o risco de corte de energia e juros, como qualquer consumidor. O benefício continua ativo enquanto o cadastro no governo estiver válido.
          </p>
        </details>
      </div>

    </BroadcastLayout>
  );
};
