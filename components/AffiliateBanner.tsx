
import React from 'react';
import { Zap, Banknote, ArrowRight, ShieldCheck, Clock, MousePointerClick } from 'lucide-react';

interface AffiliateBannerProps {
  type: 'supersim' | 'credspot' | 'cards'; // Expansível para futuros parceiros
  className?: string;
}

const PARTNERS = {
  supersim: {
    title: "Dinheiro na conta em 30 minutos?",
    subtitle: "Aprovação facilitada até para negativados. Sem burocracia.",
    cta: "Simular Empréstimo Agora",
    link: "https://apretailer.com.br/click/692e45f32bfa816d36623918/177702/356672/subaccount",
    theme: "bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]", // Laranja SuperSim
    textColor: "text-white",
    icon: Zap,
    badge: "Pix Rápido",
    badgeColor: "bg-white text-[#FF6B00]"
  },
  credspot: {
    title: "Antecipe seu FGTS agora",
    subtitle: "Dinheiro esquecido? Saque a partir de R$ 50,00 direto no Pix.",
    cta: "Baixar App / Simular",
    link: "https://apretailer.com.br/click/692e45f22bfa81658c05e154/186580/356672/subaccount",
    theme: "bg-slate-900", // Dark mode elegante
    textColor: "text-white",
    icon: Banknote,
    badge: "Sem Consulta SPC",
    badgeColor: "bg-[#00FF00] text-black"
  },
  // Placeholder para futuro parceiro de cartão
  cards: {
    title: "Cartão de Crédito Aprovado",
    subtitle: "Limite inicial alto e anuidade grátis. Peça o seu online.",
    cta: "Ver Cartões Disponíveis",
    link: "/cartoes", // Link interno por enquanto
    theme: "bg-gradient-to-r from-purple-800 to-indigo-900",
    textColor: "text-white",
    icon: ShieldCheck,
    badge: "Score Baixo",
    badgeColor: "bg-yellow-400 text-black"
  }
};

export const AffiliateBanner: React.FC<AffiliateBannerProps> = ({ type, className = "" }) => {
  const content = PARTNERS[type];

  const handleClick = () => {
    window.open(content.link, '_blank');
  };

  return (
    <div 
      onClick={handleClick}
      className={`w-full max-w-4xl mx-auto my-8 rounded-2xl shadow-xl cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden relative group ${content.theme} ${className}`}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      <div className="absolute -right-12 -top-12 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

      <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Icon & Text */}
        <div className="flex items-center gap-5 text-left flex-1">
          <div className="hidden sm:flex bg-white/20 p-4 rounded-2xl backdrop-blur-sm shadow-inner shrink-0 border border-white/10">
            <content.icon size={32} className="text-white" />
          </div>
          
          <div>
            <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 shadow-sm ${content.badgeColor}`}>
               {type === 'supersim' ? <Clock size={10} /> : <ShieldCheck size={10} />}
               {content.badge}
            </div>
            
            <h3 className={`text-2xl md:text-3xl font-extrabold ${content.textColor} leading-tight mb-1`}>
              {content.title}
            </h3>
            <p className={`${content.textColor} opacity-90 text-sm font-medium`}>
              {content.subtitle}
            </p>
          </div>
        </div>

        {/* Right Side: CTA Button */}
        <div className="shrink-0 w-full md:w-auto">
          <button className={`w-full md:w-auto bg-white text-slate-900 font-black py-3.5 px-8 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform group-hover:scale-105`}>
            {content.cta} <MousePointerClick size={18} className="text-brand-blue" />
          </button>
        </div>

      </div>
    </div>
  );
};
