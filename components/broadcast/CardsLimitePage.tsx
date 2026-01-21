import React, { useEffect } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { CreditCard, TrendingUp, Zap, Star } from 'lucide-react';
import { Quiz } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { MetaHead } from '../seo/MetaHead';

interface Props {
  onNavigate: (view: any) => void;
  onSimulate: (id: string) => void;
  quizzes?: Quiz[];
}

export const CardsLimitePage: React.FC<Props> = ({ onNavigate, onSimulate, quizzes }) => {
  // SEO movido para MetaHead

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Cartão de Crédito Limite Alto",
    "description": "Cartões de crédito Black e Platinum com benefícios VIP e limites acima de R$ 5.000.",
    "category": "Credit Card",
    "audience": {
      "@type": "Audience",
      "audienceType": "Renda Média/Alta"
    }
  };

  return (
    <BroadcastLayout
      title="Ranking Oficial: 5 Cartões com Limite Inicial acima de R$ 2.000 liberados hoje"
      subtitle="Chega de passar vergonha com limite baixo. Veja a lista de cartões Black e Platinum que estão aprovando fácil em 2025."
      quizId="11" // ID para Quiz de Limite Alto
      quizzes={quizzes}
      onNavigate={onNavigate}
      quizTriggerLabel="Consultar Cartão Ideal"
    >
      <MetaHead
        title="Cartões com Limite Alto 2025: Ranking de Aprovação | Black e Platinum"
        description="Veja a lista de cartões Black e Platinum que estão aprovando fácil em 2025. Consulte o cartão ideal para seu perfil."
        url="https://beneficios.receitapopular.com.br/ranking-cartoes-limite-alto-aprovacao-imediata"
        canonicalUrl="https://beneficios.receitapopular.com.br/ranking-cartoes-limite-alto-aprovacao-imediata"
      />
      <SchemaMarkup data={schemaData} />
      <h2>Por que os bancos estão liberando tanto limite?</h2>
      <p>
        A concorrência entre os bancos digitais explodiu em 2025. Para atrair clientes, instituições como Inter, C6 e Nubank estão oferecendo <strong>limites iniciais agressivos</strong>, cashback turbinado e isenção de anuidade vitalícia.
      </p>

      <h3>O que você ganha com um cartão superior?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mb-3">
            <Star size={20} fill="currentColor" />
          </div>
          <h4 className="font-bold text-slate-900 mb-1">Status & Benefícios</h4>
          <p className="text-sm text-slate-600">Acesso a salas VIP em aeroportos, seguros de viagem gratuitos e garantia estendida em compras.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-3">
            <TrendingUp size={20} />
          </div>
          <h4 className="font-bold text-slate-900 mb-1">Dinheiro de Volta</h4>
          <p className="text-sm text-slate-600">Programas de Cashback que devolvem até 1.5% de tudo que você gasta direto na fatura.</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 rounded-2xl my-6 not-prose">
        <div className="flex items-center gap-3 mb-2">
          <Zap className="text-yellow-400" />
          <h4 className="font-bold text-lg">Dica do Especialista</h4>
        </div>
        <p className="text-slate-300 text-sm">
          Para conseguir um limite alto de primeira, a dica é concentrar seus gastos. Ao fazer a simulação abaixo, vamos indicar o cartão que melhor se adapta à sua renda atual para garantir aprovação.
        </p>
      </div>

      <h3>Quem pode solicitar?</h3>
      <p>
        Muitos acreditam que é preciso ser rico, mas hoje existem cartões Platinum acessíveis para quem ganha a partir de <strong>R$ 2.500,00</strong> mensais. O segredo é escolher o emissor certo.
      </p>
    </BroadcastLayout>
  );
};