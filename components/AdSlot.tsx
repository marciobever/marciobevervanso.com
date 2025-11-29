
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CreditCard, Banknote, ShieldCheck, Sparkles } from 'lucide-react';

interface AdSlotProps {
  id: string; // Ex: "Content1"
  className?: string;
  label?: string;
  refreshKey?: string | number;
}

// Native Ads Fallback
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
  const adRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<any>(null);
  const [showNative, setShowNative] = useState(true); // Exibe nativo por padrão até carregar o banner

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

    // Função para carregar o anúncio
    const loadAd = () => {
      if (window.googletag && window.googletag.cmd) {
        window.googletag.cmd.push(() => {
          // 1. Limpar slot anterior se existir (Importante para SPA)
          if (slotRef.current) {
            window.googletag.destroySlots([slotRef.current]);
          }

          // 2. Definir o Slot
          const slotPath = `/23287346478/marciobevervanso.com/marciobevervanso.com_${id}`;
          
          // Tamanhos fixos conforme original (sem 'fluid' no defineSlot para evitar erros de renderização)
          const slotSizes = [[250, 250], [300, 250], [336, 280]];

          // Mapeamento responsivo
          const mapping = window.googletag.sizeMapping()
            .addSize([0, 0], ['fluid', [250, 250], [300, 250], [336, 280]]) // Mobile
            .addSize([768, 0], ['fluid', [336, 280], [728, 90]]) // Desktop
            .build();

          // Define o slot
          const slot = window.googletag.defineSlot(slotPath, slotSizes, id);
          
          if (slot) {
            slot.defineSizeMapping(mapping);
            slot.addService(window.googletag.pubads());
            slotRef.current = slot;

            // Listener para gerenciar Native vs Banner
            window.googletag.pubads().addEventListener('slotRenderEnded', (event: any) => {
              if (event.slot === slot) {
                if (!event.isEmpty) {
                  // Se carregou banner, esconde nativo
                  setShowNative(false);
                } else {
                  // Se não carregou, mantém nativo
                  setShowNative(true);
                }
              }
            });

            // 3. Exibir e Atualizar
            window.googletag.display(id);
            window.googletag.pubads().refresh([slot]);
          }
        });
      }
    };

    // Observer para Lazy Load
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadAd();
        observer.disconnect();
      }
    }, { rootMargin: '200px' });

    observer.observe(element);

    // Cleanup: Destruir slot ao desmontar componente
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
    <div className={`w-full max-w-4xl mx-auto my-8 ${className}`}>
      <div className="flex flex-col items-center">
        
        <div className="w-full max-w-[350px] md:max-w-[728px] relative min-h-[280px]">
          
          <div className="w-full flex justify-center mb-1">
             <span className="text-[9px] text-gray-400 font-semibold tracking-[0.2em] uppercase">
               {label}
             </span>
          </div>

          {/* GAM Container - Só aparece se showNative for false (carregou banner) */}
          <div 
            id={id} 
            ref={adRef}
            className={`ad-container flex justify-center items-center bg-transparent transition-all duration-300 ${showNative ? 'h-0 opacity-0 overflow-hidden absolute' : 'min-h-[250px] opacity-100 relative'}`}
          ></div>

          {/* Native Fallback - Aparece se showNative for true (padrão ou vazio) */}
          {showNative && (
            <div 
                onClick={handleNativeClick}
                className={`w-full rounded-2xl p-6 md:p-8 shadow-lg cursor-pointer transition-all hover:scale-[1.01] hover:shadow-xl bg-gradient-to-r ${adContent.gradient} text-white relative overflow-hidden group min-h-[280px] flex flex-col justify-center animate-fade-in`}
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-white/20 transition-colors"></div>
                <div className="relative z-10 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-inner border border-white/10 shrink-0">
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
                    <div className="bg-white/20 p-2 rounded-full md:hidden"><ArrowRight size={20} /></div>
                    <div className="hidden md:flex bg-white text-brand-dark px-6 py-3 rounded-xl font-bold text-sm shadow-lg items-center gap-2 group-hover:bg-gray-50 transition-colors">
                        {adContent.cta} <ArrowRight size={16} />
                    </div>
                </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
