
import React, { useEffect, useRef, useState } from 'react';
import { CreditCard, Banknote, ShieldCheck, ChevronRight, Zap, Star, MousePointerClick } from 'lucide-react';

interface AdSlotProps {
  id: string; // Ex: "Content1"
  className?: string;
  label?: string;
  refreshKey?: string | number;
  forceAffiliate?: boolean; // Se true, ignora AdSense e mostra banner de afiliado direto
  eagerLoad?: boolean; // Se true, carrega imediatamente sem esperar scroll
  disableFallback?: boolean; // Se true, nunca mostra o banner de afiliado (mesmo se o AdSense falhar)
}

// BANNERS DE AFILIADOS (CSS PURO - Carregam rápido e parecem imagens profissionais)
const AFFILIATE_BANNERS = {
  loans: {
    theme: 'green',
    gradient: 'from-emerald-600 to-green-500',
    accent: 'bg-green-400',
    icon: Banknote,
    title: 'Dinheiro na mão em 30 minutos?',
    subtitle: 'Simule seu empréstimo pessoal ou antecipação do FGTS agora. Sem consulta ao SPC.',
    cta: 'Simular Valor',
    link: '/emprestimos', // Link interno que leva para a oferta
    badge: 'Aprovação Rápida'
  },
  cards: {
    theme: 'purple',
    gradient: 'from-purple-800 to-indigo-600',
    accent: 'bg-yellow-400',
    icon: CreditCard,
    title: 'Cartão de Crédito com Limite Alto',
    subtitle: 'Acabaram de liberar novos lotes de cartões Black e Platinum sem anuidade.',
    cta: 'Ver Cartões',
    link: '/cartoes',
    badge: 'Score Baixo'
  },
  insurance: {
    theme: 'blue',
    gradient: 'from-blue-700 to-cyan-600',
    accent: 'bg-white',
    icon: ShieldCheck,
    title: 'Proteção Familiar por R$ 5,00',
    subtitle: 'Seguro de vida com auxílio funeral completo e sorteios mensais em dinheiro.',
    cta: 'Cotar Agora',
    link: '/seguros',
    badge: 'Sorteio de 10k'
  },
  general: {
    theme: 'dark',
    gradient: 'from-slate-800 to-slate-900',
    accent: 'bg-brand-blue',
    icon: Zap,
    title: 'Revisão de Benefícios 2025',
    subtitle: 'Descubra se você tem direito a valores retroativos e novos auxílios do governo.',
    cta: 'Consultar CPF',
    link: '/quiz',
    badge: 'Governo Federal'
  }
};

export const AdSlot: React.FC<AdSlotProps> = ({
  id,
  className = "",
  label = "Publicidade",
  refreshKey,
  forceAffiliate = false,
  eagerLoad = false,
  disableFallback = false
}) => {
  // Always use the props to avoid linter errors, even if unused in new logic
  // id, refreshKey, eagerLoad might be unused now for SendWebPush if it handles reload automatically
  // but we keep the interface compatible.

  const [showAffiliate, setShowAffiliate] = useState(forceAffiliate);

  // Decide qual banner mostrar baseado no contexto (label)
  const getBannerContent = () => {
    const l = label.toLowerCase();
    if (l.includes('crédito') || l.includes('empréstimo') || l.includes('dinheiro') || l.includes('fgts')) return AFFILIATE_BANNERS.loans;
    if (l.includes('cartão') || l.includes('card') || l.includes('score')) return AFFILIATE_BANNERS.cards;
    if (l.includes('seguro') || l.includes('proteção') || l.includes('família')) return AFFILIATE_BANNERS.insurance;
    return AFFILIATE_BANNERS.general;
  };

  const content = getBannerContent();

  useEffect(() => {
    // Se fallback estiver desativado e não for forçado, garante que affiliate está off
    if (disableFallback && !forceAffiliate) {
      setShowAffiliate(false);
    }
  }, [disableFallback, forceAffiliate]);

  const handleBannerClick = () => {
    window.location.href = content.link;
  };

  return (
    <div className={`w-full mx-auto my-8 ${className}`}>
      <div className="flex flex-col items-center justify-center">

        {/* Ad Wrapper */}
        <div className="w-full relative flex justify-center items-center">

          {/* Label de Publicidade */}
          {!forceAffiliate && !showAffiliate && (
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 bg-white/80 backdrop-blur-sm px-2 rounded-full border border-gray-100">
              <span className="text-[9px] text-gray-400 font-semibold tracking-[0.2em] uppercase">
                {label}
              </span>
            </div>
          )}

          {/* Container Send Web Push (Substituindo AdSense/GAM) */}
          {!forceAffiliate && !showAffiliate && (
            <div className="flex justify-center items-center w-full min-h-[250px] md:min-h-[400px] my-4">
              <div className='send-web-push-ads' ></div>
            </div>
          )}

          {/* BANNER DO AFILIADO (Force ou Fallback - lógica manual) */}
          {/* Nota: Send Web Push não tem evento de callback fácil aqui, então o fallback automático não vai funcionar como no GPT */}
          {(forceAffiliate) && (
            <div
              onClick={handleBannerClick}
              className={`w-full max-w-4xl relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group bg-gradient-to-r ${content.gradient} transition-transform hover:scale-[1.01] hover:shadow-2xl`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-white/20 transition-colors"></div>

              <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Left Content */}
                <div className="flex items-start gap-5 text-left flex-1">
                  <div className="hidden sm:flex bg-white/20 p-4 rounded-2xl backdrop-blur-sm shadow-inner shrink-0">
                    <content.icon size={36} className="text-white" />
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 shadow-sm ${content.theme === 'dark' ? 'bg-white text-slate-900' : 'bg-white text-brand-dark'}`}>
                      {content.badge}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 drop-shadow-md">
                      {content.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed max-w-lg">
                      {content.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right CTA */}
                <div className="shrink-0 w-full md:w-auto">
                  <button className="w-full md:w-auto bg-white text-brand-dark hover:bg-gray-50 font-bold py-3.5 px-8 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all transform group-hover:translate-x-1">
                    {content.cta} <MousePointerClick size={18} className="text-brand-blue" />
                  </button>
                  <p className="text-white/60 text-[10px] text-center mt-2 font-medium">
                    Clique para ver detalhes
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
