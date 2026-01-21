
import React, { useEffect } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { Home, CheckSquare, Key } from 'lucide-react';
import { Quiz } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { MetaHead } from '../seo/MetaHead';

interface Props {
  onNavigate: (view: any) => void;
  onSimulate: (id: string) => void;
  quizzes?: Quiz[];
}

export const MCMVPage: React.FC<Props> = ({ onNavigate, onSimulate, quizzes }) => {
  // SEO movido para MetaHead


  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "Minha Casa Minha Vida",
      "serviceType": "Public Housing",
      "provider": {
        "@type": "GovernmentOrganization",
        "name": "Ministério das Cidades"
      },
      "offers": {
        "@type": "Offer",
        "description": "Subsídio de até 95% ou isenção total para Faixa 1."
      }
    }
  ];

  return (
    <BroadcastLayout
      title="Minha Casa Minha Vida 2025: Guia de Isenção e Documentos"
      subtitle="Beneficiários do Bolsa Família e BPC agora ganham o imóvel na Faixa 1. Entenda as regras, veja a lista de documentos e saiba onde se inscrever."
      quizId="5"
      quizzes={quizzes}
      onNavigate={onNavigate}
      quizTriggerLabel="Simular Financiamento"
      relatedArticle={{
        title: "Segredo: Como conseguir financiamento 100% sem entrada",
        onClick: () => onNavigate('loans')
      }}
    >
      <MetaHead
        title="Minha Casa Minha Vida 2025: Inscrição, Faixa 1 e Casa Grátis"
        description="Saiba como funciona o Minha Casa Minha Vida 2025. Regras para casa grátis (Faixa 1), subsídios de até 95% e como se inscrever no programa habitacional."
        url="https://beneficios.receitapopular.com.br/minha-casa-minha-vida-2025-comparativo-faixas-beneficios"
        canonicalUrl="https://beneficios.receitapopular.com.br/minha-casa-minha-vida-2025-comparativo-faixas-beneficios"
      />
      <SchemaMarkup data={schemaData} />
      <h2>A Casa é Gratuita? Entenda a Regra.</h2>
      <p>
        Sim, para um grupo específico. A Portaria MCid nº 1.248 estabeleceu que beneficiários do <strong>Bolsa Família</strong> e do <strong>BPC/LOAS</strong> que contratarem imóveis pelo programa na Faixa 1 (renda até R$ 2.640) estão isentos do pagamento das prestações.
      </p>
      <p>
        Na prática, o governo quita o imóvel. Porém, existem regras: você não pode vender ou alugar a casa por 5 anos, deve morar nela.
      </p>

      <h3>Checklist de Documentos Obrigatórios</h3>
      <p>Prepare esta pasta antes de ir à Prefeitura ou correspondente Caixa:</p>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <CheckSquare className="text-brand-blue shrink-0 mt-1" size={20} />
            <div>
              <strong className="block text-slate-900">Identificação</strong>
              <span className="text-sm text-gray-600">RG e CPF (do casal, se houver).</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckSquare className="text-brand-blue shrink-0 mt-1" size={20} />
            <div>
              <strong className="block text-slate-900">Estado Civil</strong>
              <span className="text-sm text-gray-600">Certidão de Nascimento ou Casamento.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckSquare className="text-brand-blue shrink-0 mt-1" size={20} />
            <div>
              <strong className="block text-slate-900">Renda</strong>
              <span className="text-sm text-gray-600">Holerites (3 últimos), Extrato Bancário ou Declaração de IR. Autônomos podem usar extrato de movimentação.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckSquare className="text-brand-blue shrink-0 mt-1" size={20} />
            <div>
              <strong className="block text-slate-900">Residência</strong>
              <span className="text-sm text-gray-600">Comprovante atualizado (luz, água) com menos de 2 meses.</span>
            </div>
          </div>
          <div className="flex items-start gap-3 md:col-span-2">
            <CheckSquare className="text-brand-blue shrink-0 mt-1" size={20} />
            <div>
              <strong className="block text-slate-900">NIS / CadÚnico</strong>
              <span className="text-sm text-gray-600">Folha resumo do Cadastro Único (essencial para provar isenção na Faixa 1).</span>
            </div>
          </div>
        </div>
      </div>

      <h3>Tabela de Faixas de Renda 2025</h3>
      <div className="overflow-x-auto not-prose my-6">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-brand-dark text-white">
            <tr>
              <th className="py-4 px-6 text-left font-bold">Faixa</th>
              <th className="py-4 px-6 text-left font-bold">Renda Bruta</th>
              <th className="py-4 px-6 text-left font-bold">Benefício</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm md:text-base">
            <tr className="bg-blue-50/50">
              <td className="py-4 px-6 font-bold text-brand-blue">Faixa 1</td>
              <td className="py-4 px-6">Até R$ 2.640,00</td>
              <td className="py-4 px-6 font-bold text-green-600">Subsídio de até 95% ou Gratuito*</td>
            </tr>
            <tr>
              <td className="py-4 px-6 font-bold text-brand-blue">Faixa 2</td>
              <td className="py-4 px-6">R$ 2.640 a R$ 4.400</td>
              <td className="py-4 px-6 text-gray-600">Juros reduzidos + Subsídio na entrada</td>
            </tr>
            <tr className="bg-blue-50/50">
              <td className="py-4 px-6 font-bold text-brand-blue">Faixa 3</td>
              <td className="py-4 px-6">R$ 4.400 a R$ 8.000</td>
              <td className="py-4 px-6 text-gray-600">Juros menores que mercado</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-2">*Gratuito apenas para Bolsa Família e BPC na Faixa 1.</p>
      </div>

      <h3>Onde fazer o cadastro?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Key size={20} /> Para Faixa 1 (Subsidiado)</h4>
          <p className="text-sm text-slate-600">
            Você deve procurar a <strong>Prefeitura</strong> da sua cidade (Secretaria de Habitação) ou a Entidade Organizadora local. O sorteio é feito pelo município.
          </p>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Home size={20} /> Para Faixas 2 e 3 (Financiado)</h4>
          <p className="text-sm text-slate-600">
            Você pode tratar direto com <strong>Construtoras</strong> parceiras ou Correspondentes da Caixa Econômica Federal. É como comprar um imóvel normal, mas com juros baratos.
          </p>
        </div>
      </div>

    </BroadcastLayout>
  );
};
