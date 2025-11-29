
import React, { useEffect, useRef, useState } from 'react';
import { CreditCard, Banknote, ShieldCheck, ChevronRight } from 'lucide-react';

interface AdSlotProps {
  id: string; // Ex: "Content1"
  className?: string;
  label?: string;
  refreshKey?: string | number;
}

// Native Ads Fallback - Content Integration Style
const NATIVE_ADS = {
  loans: {
    gradient: 'from-green-50 to-emerald-100',
    border: 'border-green-200',
    icon: Banknote,
    iconColor: 'text-green-700',
    iconBg: 'bg-green-200',
    title: 'Antecipe seu FGTS',
    subtitle: 'Dinheiro na conta em até 2 horas. Sem consulta ao SPC/Serasa.',
    cta: 'Simular Agora',
    ctaColor: 'text-green-800',
    link: '/emprestimos'
  },
  cards: {
    gradient: 'from-purple-50 to-indigo-100',
    border: 'border-purple-200',
    icon: CreditCard,
    iconColor: 'text-purple-700',
    iconBg: 'bg-purple-200',
    title: 'Cartão com Limite Alto',
    subtitle: 'Aprovação facilitada mesmo com score baixo. Anuidade Grátis.',
    cta: 'Ver Cartões',
    ctaColor: 'text-purple-800',
    link: '/cartoes'
  },
  general: {
    gradient: 'from-blue-50 to-blue-100',
    border: 'border-blue-200',
    icon: ShieldCheck,
    iconColor: 'text-blue-700',
    iconBg: 'bg-blue-200',
    title: 'Revisão de Benefícios',
    subtitle: 'Veja se você tem direito a valores retroativos e novos auxílios.',
    cta: 'Consultar CPF',
    ctaColor: 'text-blue-800',
    link: '/quiz'
  }
};

export const AdSlot: React.FC<AdSlotProps> = ({ id, className = "", label = "Publicidade", refreshKey }) => {
  const adRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<any>(null);
  const [showNative, setShowNative] = useState(true); // Começa true, se o ad carregar vira false

  const getAdContent = () => {
    const l = label.toLowerCase();
    if (l.includes('crédito') || l.includes('empréstimo') || l.includes('dinheiro')) return NATIVE_ADS.loans;
    if (l.includes('cartão') || l.includes('card')) return NATIVE_ADS.cards;
    return NATIVE_ADS.general;
  };
  const adContent = getAdContent();

  useEffect(() => {
    const element = adRef.current;
    if (!element) return;

    // Função de carregamento do slot
    const loadAd = () => {
      if (window.googletag && window.googletag.cmd) {
        window.googletag.cmd.push(() => {
          // Limpeza preventiva
          if (slotRef.current) {
            window.googletag.destroySlots([slotRef.current]);
          }

          const slotPath = `/23287346478/marciobevervanso.com/marciobevervanso.com_${id}`;
          
          // Tamanhos responsivos refinados
          const slotSizes = [[250, 250], [300, 250], [336, 280], [300, 600]];
          
          const mapping = window.googletag.sizeMapping()
            .addSize([0, 0], ['fluid', [250, 250], [300, 250], [336, 280]]) 
            .addSize([768, 0], ['fluid', [336, 280], [728, 90], [300, 600]]) 
            .build();

          const slot = window.googletag.defineSlot(slotPath, slotSizes, id);
          
          if (slot) {
            slot.defineSizeMapping(mapping);
            slot.addService(window.googletag.pubads());
            slotRef.current = slot;

            // Listener para saber se o anúncio carregou ou veio vazio
            window.googletag.pubads().addEventListener('slotRenderEnded', (event: any) => {
              if (event.slot === slot) {
                if (!event.isEmpty) {
                  setShowNative(false); // Veio anúncio, esconde o nativo
                } else {
                  setShowNative(true); // Veio vazio, mostra o nativo
                }
              }
            });

            // Exibe e força o refresh (importante mesmo com SRA para lazy loaded ads)
            window.googletag.display(id);
            window.googletag.pubads().refresh([slot]);
          }
        });
      }
    };

    // Observer para carregar apenas quando visível (Lazy Load nativo do React + GAM)
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadAd();
        observer.disconnect();
      }
    }, { rootMargin: '200px' });

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (window.googletag && window.googletag.cmd && slotRef.current) {
        window.googletag.cmd.push(() => {
          window.googletag.destroySlots([slotRef.current]);
          slotRef.current = null;
        });
      }
    };
  }, [id, refreshKey]);

  const handleNativeClick = () => {
     window.location.href = adContent.link;
  };

  return (
    <div className={`w-full mx-auto my-8 ${className}`}>
      <div className="flex flex-col items-center justify-center">
        
        <div className="w-full relative min-h-[280px] flex justify-center">
          
          {/* Label Container */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 bg-white px-2">
             <span className="text-[10px] text-gray-300 font-semibold tracking-[0.2em] uppercase">
               {label}
             </span>
          </div>

          {/* Container do Google Ad Manager */}
          <div 
            id={id} 
            ref={adRef}
            className={`ad-container flex justify-center items-center bg-transparent transition-all duration-300 w-full ${showNative ? 'h-0 opacity-0 overflow-hidden absolute' : 'min-h-[250px] opacity-100 relative'}`}
          ></div>

          {/* Anúncio Nativo (Fallback) */}
          {showNative && (
            <div 
                onClick={handleNativeClick}
                className={`w-full max-w-2xl rounded-2xl p-6 border ${adContent.border} cursor-pointer transition-all hover:scale-[1.01] hover:shadow-md bg-gradient-to-br ${adContent.gradient} group flex items-center gap-4 relative overflow-hidden`}
            >
                <div className={`w-14 h-14 ${adContent.iconBg} ${adContent.iconColor} rounded-xl flex items-center justify-center shrink-0 shadow-sm`}>
                    <adContent.icon size={28} />
                </div>
                
                <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="bg-white/80 backdrop-blur text-gray-600 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide border border-gray-100">
                            Recomendado
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">{adContent.title}</h3>
                    <p className="text-slate-600 text-xs font-medium leading-snug">
                        {adContent.subtitle}
                    </p>
                </div>

                <div className={`hidden sm:flex items-center gap-1 font-bold text-sm ${adContent.ctaColor} bg-white/50 px-3 py-1.5 rounded-lg`}>
                    {adContent.cta} <ChevronRight size={16} />
                </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
