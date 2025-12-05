
import React from 'react';
import { Banknote, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface PartnerWidgetProps {
  type: 'fgts' | 'loan';
  className?: string;
}

export const PartnerWidget: React.FC<PartnerWidgetProps> = ({ type, className = '' }) => {
  const isFgts = type === 'fgts';

  const content = isFgts ? {
    title: 'Dinheiro parado no FGTS?',
    subtitle: 'Antecipe até 10 parcelas do Saque-Aniversário agora. Sem consulta ao SPC/Serasa.',
    cta: 'Simular Antecipação',
    link: '/emprestimos', // Rota interna para manter retenção
    badge: 'Aprovação Imediata',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    btnColor: 'bg-green-600 hover:bg-green-700'
  } : {
    title: 'Empréstimo Pessoal Online',
    subtitle: 'Simulação rápida e segura. Dinheiro na conta em até 30 minutos via PIX.',
    cta: 'Ver Ofertas Disponíveis',
    link: '/emprestimos',
    badge: 'Taxas Reduzidas',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-brand-blue',
    btnColor: 'bg-brand-blue hover:bg-brand-hover'
  };

  const handleClick = () => {
    window.location.href = content.link;
  };

  return (
    <div 
      onClick={handleClick}
      className={`relative w-full rounded-2xl border-2 p-5 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${content.color} ${className}`}
    >
      {/* Badge Flutuante */}
      <div className={`absolute -top-3 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ${content.btnColor}`}>
        {content.badge}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        
        {/* Ícone */}
        <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0 ${content.iconColor}`}>
          {isFgts ? <Banknote size={24} /> : <Zap size={24} />}
        </div>

        {/* Texto */}
        <div className="flex-grow text-center sm:text-left">
          <h3 className="font-extrabold text-slate-900 text-lg leading-tight">
            {content.title}
          </h3>
          <p className="text-sm text-slate-600 mt-1 leading-snug">
            {content.subtitle}
          </p>
        </div>

        {/* Botão Simulado */}
        <button className={`shrink-0 px-5 py-2.5 rounded-xl font-bold text-white text-sm flex items-center gap-2 shadow-md transition-colors ${content.btnColor}`}>
          {content.cta} <ArrowRight size={16} />
        </button>
      </div>

      {/* Trust Badges */}
      <div className="mt-4 pt-3 border-t border-slate-200/50 flex justify-center sm:justify-start gap-4 text-[10px] text-slate-500 font-medium">
         <span className="flex items-center gap-1"><CheckCircle2 size={10} /> Site Seguro</span>
         <span className="flex items-center gap-1"><CheckCircle2 size={10} /> Regulado pelo BC</span>
      </div>
    </div>
  );
};
