import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CreditCard, Banknote, ShieldCheck, Sparkles } from 'lucide-react';

interface AdSlotProps {
  id: string; // Must match "Content1", "Content2", etc.
  className?: string;
  label?: string;
  refreshKey?: string | number;
}

declare global {
  interface Window {
    googletag: any;
  }
}

// Internal "Native Ads" to show when AdSense is loading or blocked
// This makes the site look professional immediately
const NATIVE_ADS = {
  loans: {
    gradient: 'from-green-600 to-emerald-800',
    icon: Banknote,
    title: 'Antecipe seu FGTS',
    subtitle: 'Dinheiro na conta em até 2 horas. Sem consulta ao SPC.',
    cta: 'Simular Agora',
    link: '/emprestimos'
  },
  cards: {
    gradient: 'from-purple-600 to-indigo-900',
    icon: CreditCard,
    title: 'Cartão com Limite Alto',
    subtitle: 'Aprovação facilitada mesmo com score baixo.',
    cta: 'Ver Cartões',
    link: '/cartoes'
  },
  general: {
    gradient: 'from-blue-600 to-blue-900',
    icon: ShieldCheck,
    title: 'Revisão de Benefícios',
    subtitle: 'Veja se você tem direito a valores retroativos.',
    cta: 'Consultar CPF',
    link: '/quiz'
  }
};

export const AdSlot: React.FC<AdSlotProps> = ({ id, className = "", label = "Publicidade", refreshKey }) => {
  const isDisplayed = useRef(false);
  const adRef = useRef<HTMLDivElement>(null);
  const [showNative, setShowNative] = useState(true); // Default to native ad until GAM loads

  // Determine which native ad to show based on the label context
  const getAdContent = () => {
    const l = label.toLowerCase();
    if (l.includes('crédito') || l.includes('empréstimo') || l.includes('dinheiro')) return NATIVE_ADS.loans;
    if (l.includes('cartão') || l.includes('card')) return NATIVE_ADS.cards;
    return NATIVE_ADS.general;
  };

  const adContent = getAdContent();

  useEffect(() => {
    isDisplayed.current = false;
    const element = adRef.current;
    if (!element) return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      
      if (entry.isIntersecting && !isDisplayed.current) {
        // Try to load Google Ads
        if (window.googletag && window.googletag.cmd) {
          window.googletag.cmd.push(() => {
            // Check if slot is defined before displaying
            const slots = window.googletag.pubads().getSlots();
            const isDefined = slots.some((s: any) => s.getSlotElementId() === id);

            if (isDefined) {
                window.googletag.display(id);
                // Listen for ad render event to hide native ad
                window.googletag.pubads().addEventListener('slotRenderEnded', (event: any) => {
                    if (event.slot.getSlotElementId() === id && !event.isEmpty) {
                        setShowNative(false); // Ad loaded successfully, hide native fallback
                    }
                });
            }
            isDisplayed.current = true;
          });
        }
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '200px',
      threshold: 0
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [id]);

  useEffect(() => {
    if (refreshKey === undefined || !isDisplayed.current) return;
    if (window.googletag && window.googletag.cmd) {
      window.googletag.cmd.push(() => {
        const pubads = window.googletag.pubads();
        const slot = pubads.getSlots().find((s: any) => s.getSlotElementId() === id);
        if (slot) pubads.refresh([slot]);
      });
    }
  }, [refreshKey, id]);

  const handleNativeClick = () => {
     // Simple internal navigation mock
     window.location.href = adContent.link;
  };

  return (
    <div className={`w-full max-w-4xl mx-auto my-8 ${className}`}>
      <div className="flex flex-col items-center">
        
        {/* Ad Container */}
        <div className="w-full max-w-[350px] md:max-w-[728px] relative">
          
          <div className="w-full flex justify-center mb-1">
             <span className="text-[9px] text-gray-400 font-semibold tracking-[0.2em] uppercase">
               {label}
             </span>
          </div>

          {/* 
            GAM SLOT: 
            Hidden if showNative is true (to prevent white flash), 
            but kept in DOM for GAM to inject iframe.
          */}
          <div 
            ref={adRef}
            id={id} 
            className={`ad-container min-h-[90px] md:min-h-[250px] flex justify-center items-center bg-gray-50 rounded-lg overflow-hidden ${showNative ? 'hidden' : 'block'}`}
          >
          </div>

          {/* 
            NATIVE FALLBACK / INTERNAL AFFILIATE:
            Shown while ad loads OR if ad fails/is empty.
          */}
          {showNative && (
            <div 
                onClick={handleNativeClick}
                className={`w-full rounded-2xl p-6 md:p-8 shadow-lg cursor-pointer transition-all hover:scale-[1.01] hover:shadow-xl bg-gradient-to-r ${adContent.gradient} text-white relative overflow-hidden group`}
            >
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-white/20 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

                <div className="relative z-10 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-inner border border-white/10">
                            <adContent.icon className="text-white" size={28} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide flex items-center gap-1">
                                    <Sparkles size={10} /> Recomendado
                                </span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold leading-tight mb-1">{adContent.title}</h3>
                            <p className="text-blue-100 text-xs md:text-sm font-medium max-w-[200px] md:max-w-md leading-snug">
                                {adContent.subtitle}
                            </p>
                        </div>
                    </div>

                    <div className="hidden md:flex bg-white text-brand-dark px-6 py-3 rounded-xl font-bold text-sm shadow-lg items-center gap-2 group-hover:bg-gray-50 transition-colors">
                        {adContent.cta} <ArrowRight size={16} />
                    </div>
                    
                    {/* Mobile Chevron */}
                    <div className="md:hidden bg-white/20 p-2 rounded-full">
                        <ArrowRight size={20} />
                    </div>
                </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};