
import React, { useEffect } from 'react';
import { CREDIT_CARDS } from '../../constants';
import { CreditCardVisual } from '../CreditCardVisual';
import { AdSlot } from '../AdSlot';
import { Check, Star, Info } from 'lucide-react';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { MetaHead } from '../seo/MetaHead';
import { ViewState } from '../../types';

interface Props {
  onViewDetails?: (cardId: string) => void;
}

const CardsPage: React.FC<Props> = ({ onViewDetails }) => {

  // SEO Optimization for Cards Page
  // No manual useEffect for SEO anymore

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": CREDIT_CARDS.map((card, index) => ({
      "@type": "FinancialProduct",
      "position": index + 1,
      "name": card.name,
      "description": `Cartão de crédito ${card.issuer} com benefícios como ${card.benefits.join(', ')}.`,
      "brand": {
        "@type": "Brand",
        "name": card.issuer
      },
      "feesAndCommissionsSpecification": {
        "@type": "feesAndCommissionsSpecification",
        "name": "Anuidade",
        "price": card.annualFee === "Grátis" ? "0" : card.annualFee
      }
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <MetaHead
        title="Cartões de Crédito Sem Anuidade e Para Negativado | Lista 2026"
        description="Compare os melhores cartões de crédito de 2026. Aprovação facilitada para score baixo, sem consulta ao SPC/Serasa, opções sem anuidade e com limite alto."
        url="https://beneficios.receitapopular.com.br/cartoes"
        canonicalUrl="https://beneficios.receitapopular.com.br/cartoes"
      />
      <SchemaMarkup data={schemaData} />
      <div className="container mx-auto px-4 md:px-6">

        <header className="mb-12 text-center max-w-3xl mx-auto">
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-purple-200 mb-4 inline-block">
            Vitrine de Crédito 2026
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Os Melhores Cartões de Crédito
          </h1>
          <p className="text-lg text-slate-600">
            Seleção especial de cartões com <strong>aprovação facilitada</strong>, <strong>anuidade grátis</strong> e benefícios exclusivos para quem tem <strong>score baixo</strong> ou está <strong>negativado</strong>.
          </p>
        </header>

        <AdSlot id="Content1" label="Ofertas de Crédito" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 mt-20">
          {CREDIT_CARDS.map((card) => (
            <div key={card.id} className="bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-gray-100 flex flex-col hover:border-purple-300 transition-colors duration-300 group relative">

              {/* Card Visual */}
              <div className="mb-6 -mt-12 mx-2 transform transition-transform duration-300 group-hover:scale-105">
                <CreditCardVisual card={card} />
              </div>

              {/* Tags */}
              {card.tag && (
                <div className="mb-4 text-center">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-green-200 shadow-sm">
                    {card.tag}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900">{card.name}</h2>
                <p className="text-slate-500 text-sm font-medium">Emitido por {card.issuer}</p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-center border-t border-b border-gray-50 py-4 bg-gray-50/50 rounded-xl mx-2">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Anuidade</p>
                  <p className="font-bold text-slate-900 text-sm">{card.annualFee}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Score Min.</p>
                  <p className="font-bold text-slate-900 text-sm">{card.minScore}+</p>
                </div>
              </div>

              {/* Benefits List */}
              <ul className="space-y-3 mb-8 flex-grow px-2">
                {card.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <Check className="text-green-500 shrink-0 mt-0.5" size={16} />
                    {benefit}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onViewDetails && onViewDetails(card.id)}
                className="w-full bg-brand-blue hover:bg-brand-hover text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2 group/btn transform active:scale-95"
              >
                Ver Detalhes e Solicitar <Info size={18} />
              </button>

              <p className="text-center text-[10px] text-gray-400 mt-3">
                Sujeito a análise de crédito
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <AdSlot id="Content2" label="Mais Opções" />
        </div>

        {/* SEO Text Content at Bottom */}
        <div className="mt-20 max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-2xl font-bold text-slate-900">Como conseguir cartão de crédito estando negativado?</h2>
          <p className="text-slate-600">
            Conseguir crédito com o nome sujo pode parecer difícil, mas em 2026 diversas fintechs e bancos digitais especializaram-se neste público.
            Opções como o <strong>Roxinho (Nubank)</strong>, <strong>Will Bank</strong> e o <strong>Caixa Sim</strong> possuem análise de crédito diferenciada,
            muitas vezes focando no histórico de pagamentos recente ou oferecendo limites iniciais menores que aumentam conforme o uso.
          </p>
          <p className="text-slate-600">
            Nesta página, listamos apenas instituições confiáveis e regulamentadas pelo Banco Central. Recomendamos sempre verificar a taxa de juros do rotativo antes de contratar.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CardsPage;
