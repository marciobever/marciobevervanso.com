
import React from 'react';
import { BookOpen, CheckSquare, CreditCard, Banknote, ArrowRight, MousePointerClick, Calculator, ShieldAlert } from 'lucide-react';
import { ViewState } from '../types';

interface StartHereProps {
  onNavigate: (view: ViewState) => void;
  onOpenConsultation: () => void;
}

const StartHere: React.FC<StartHereProps> = ({ onNavigate, onOpenConsultation }) => {
  const cards = [
    {
      icon: CheckSquare,
      title: 'Consultar CPF',
      subtitle: 'Benefícios Ativos',
      desc: 'Simulação oficial para verificar Bolsa Família e Auxílios.',
      action: 'Realizar Consulta',
      colorClass: 'bg-green-100 text-green-700',
      borderClass: 'hover:border-green-500',
      onClick: onOpenConsultation
    },
    {
      icon: Calculator,
      title: 'Calc. Renda',
      subtitle: 'Bolsa Família',
      desc: 'Faça a conta exata da renda per capita da sua família.',
      action: 'Calcular Agora',
      colorClass: 'bg-blue-100 text-brand-blue',
      borderClass: 'hover:border-brand-blue',
      onClick: () => onNavigate('calculator')
    },
    {
      icon: ShieldAlert,
      title: 'Anti-Golpe',
      subtitle: 'Ferramenta IA',
      desc: 'Recebeu um SMS suspeito? Cole aqui e veja se é golpe.',
      action: 'Verificar Mensagem',
      colorClass: 'bg-red-100 text-red-600',
      borderClass: 'hover:border-red-500',
      onClick: () => onNavigate('tool-scam')
    },
    {
      icon: CreditCard,
      title: 'Cartões',
      subtitle: 'Aprovação Fácil',
      desc: 'Lista de cartões com anuidade grátis e limite alto.',
      action: 'Ver Opções',
      colorClass: 'bg-purple-100 text-purple-700',
      borderClass: 'hover:border-purple-500',
      onClick: () => onNavigate('cards')
    }
  ];

  return (
    <section id="start-here" className="py-12 bg-white relative z-20 -mt-8 rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4 border-b border-gray-100 pb-6">
           <div>
             <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-2 block">Menu Rápido</span>
             <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">
                O que você precisa hoje?
             </h2>
           </div>
           <div className="flex items-center gap-1 text-xs text-gray-400">
              <MousePointerClick size={14} /> Selecione uma opção
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              onClick={card.onClick}
              className={`bg-white rounded-2xl p-6 shadow-card hover:shadow-xl border border-gray-100 transition-all duration-300 group cursor-pointer hover:-translate-y-1 relative overflow-hidden ${card.borderClass}`}
            >
              <div className="flex justify-between items-start mb-4">
                 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${card.colorClass}`}>
                    <card.icon size={28} />
                 </div>
                 <div className="bg-gray-50 px-2 py-1 rounded text-[10px] font-bold uppercase text-gray-500 tracking-wide">
                    {card.subtitle}
                 </div>
              </div>
              
              <h3 className="text-xl font-extrabold text-brand-dark mb-2">{card.title}</h3>
              <p className="text-sm text-brand-medium mb-6 leading-relaxed">{card.desc}</p>
              
              <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                <span className="text-sm font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
                  {card.action}
                </span>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                   <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartHere;
