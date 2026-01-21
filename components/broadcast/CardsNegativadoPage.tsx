import React, { useEffect } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { CreditCard, CheckCircle2, ShieldCheck, XCircle } from 'lucide-react';
import { Quiz } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { MetaHead } from '../seo/MetaHead';

interface Props {
  onNavigate: (view: any) => void;
  onSimulate: (id: string) => void;
  quizzes?: Quiz[];
}

export const CardsNegativadoPage: React.FC<Props> = ({ onNavigate, onSimulate, quizzes }) => {
  // SEO Optimization
  // SEO movido para MetaHead

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Cartão de Crédito para Negativados",
    "description": "Cartão de crédito com aprovação facilitada para pessoas com restrição no CPF.",
    "category": "Credit Card",
    "audience": {
      "@type": "Audience",
      "audienceType": "Pessoas com Score Baixo ou Negativadas"
    },
    "feesAndCommissionsSpecification": {
      "@type": "FeesAndCommissionsSpecification",
      "name": "Anuidade",
      "price": "0",
      "priceCurrency": "BRL"
    }
  };

  return (
    <BroadcastLayout
      title="Banco Central: Novas regras facilitam cartão de crédito para quem tem Score Baixo"
      subtitle="Fintechs e Bancos Digitais ampliam oferta de crédito para negativados em 2025. Veja quais instituições estão aprovando agora."
      quizId="10" // ID para Quiz de Negativados
      quizzes={quizzes}
      onNavigate={onNavigate}
      quizTriggerLabel="Verificar Disponibilidade no CPF"
    >
      <MetaHead
        title="Cartão de Crédito para Negativado: Aprovando com Score Baixo | Lista 2025"
        description="Confira a lista de cartões de crédito que aprovam negativados em 2025. Sem consulta ao SPC/Serasa, limite inicial garantido e anuidade grátis."
        url="https://beneficios.receitapopular.com.br/cartao-credito-para-negativado-2025-lista-facil"
        canonicalUrl="https://beneficios.receitapopular.com.br/cartao-credito-para-negativado-2025-lista-facil"
      />
      <SchemaMarkup data={schemaData} />
      <h2>Fim da restrição total? Entenda a mudança.</h2>
      <p>
        Ter o nome sujo não é mais uma sentença definitiva de falta de crédito. Com o avanço do Open Finance e novas diretrizes de inclusão financeira, diversas instituições criaram linhas de crédito específicas para quem está com o "nome sujo" ou Score baixo.
      </p>

      <h3>Como funcionam os cartões "Sem Consulta"?</h3>
      <p>
        Diferente dos cartões tradicionais, essas modalidades analisam seu <strong>comportamento atual</strong> e não apenas dívidas passadas de 5 anos atrás.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
          <h4 className="font-bold text-green-800 flex items-center gap-2 mb-2">
            <CheckCircle2 size={20} /> Vantagens
          </h4>
          <ul className="space-y-2 text-sm text-green-700">
            <li>Aprovação rápida (muitas vezes em minutos).</li>
            <li>Ajudam a aumentar seu Score conforme você paga.</li>
            <li>Muitos não cobram anuidade.</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-2">
            <ShieldCheck size={20} className="text-brand-blue" /> Dica de Segurança
          </h4>
          <p className="text-sm text-slate-600">
            Nunca pague taxas antecipadas para liberar cartão. Se pedirem depósito prévio, é golpe. Os cartões listados aqui são 100% seguros e regulamentados.
          </p>
        </div>
      </div>

      <h3>Top 3 Cartões que mais aprovam hoje</h3>
      <div className="space-y-4 not-prose mb-8">
        <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white"><CreditCard /></div>
          <div>
            <strong className="block text-slate-900">Roxinho (Função Construir Limite)</strong>
            <span className="text-sm text-gray-500">Ideal para quem tem Score abaixo de 400.</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black"><CreditCard /></div>
          <div>
            <strong className="block text-slate-900">Will Bank</strong>
            <span className="text-sm text-gray-500">Aprova fácil e tem anuidade grátis para sempre.</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white"><CreditCard /></div>
          <div>
            <strong className="block text-slate-900">Neon</strong>
            <span className="text-sm text-gray-500">Conta digital completa e cartão virtual na hora.</span>
          </div>
        </div>
      </div>

      <p>
        Faça a simulação abaixo para ver qual dessas opções tem maior chance de aprovação para o seu perfil atual.
      </p>
    </BroadcastLayout>
  );
};