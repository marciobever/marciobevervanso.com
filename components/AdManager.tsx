
import React, { useEffect, useRef } from 'react';
import { ViewState } from '../types';

declare global {
  interface Window {
    googletag: any;
  }
}

interface AdManagerProps {
  currentView: ViewState;
}

export const AdManager: React.FC<AdManagerProps> = ({ currentView }) => {
  const anchorSlotRef = useRef<any>(null);
  const interstitialSlotRef = useRef<any>(null);
  const isInitialized = useRef(false);

  // 1. Inicialização Única (Apenas GAM, VideoWall está no index.html)
  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    // --- GOOGLE AD MANAGER INIT ---
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      const pubads = window.googletag.pubads();

      // Targeting Global
      pubads.setTargeting('site', 'marciobevervanso.com');

      // --- DEFINIÇÃO SLOTS ESPECIAIS ---
      
      // Interstitial (OutOfPage)
      // É crucial que este defineOutOfPageSlot seja chamado cedo
      const interstitial = window.googletag.defineOutOfPageSlot(
        '/23287346478/marciobevervanso.com/marciobevervanso.com_Interstitial',
        window.googletag.enums.OutOfPageFormat.INTERSTITIAL
      );
      
      if (interstitial) {
        interstitial.addService(pubads);
        interstitialSlotRef.current = interstitial;
      }

      // Anchor (Topo)
      const anchor = window.googletag.defineOutOfPageSlot(
        '/23287346478/marciobevervanso.com/marciobevervanso.com_Anchor',
        window.googletag.enums.OutOfPageFormat.TOP_ANCHOR
      );
      
      if (anchor) {
        anchor.addService(pubads);
        anchorSlotRef.current = anchor;
      }

      // Configurações Globais
      pubads.enableLazyLoad({
        fetchMarginPercent: 200, 
        renderMarginPercent: 100,
        mobileScaling: 2.0
      });
      
      pubads.collapseEmptyDivs();
      
      // Habilita serviços
      window.googletag.enableServices();

      // Exibir Slots Especiais Iniciais
      // Nota: display(null) ou display(slot) para out-of-page dependendo da implementação,
      // mas para OutOfPageFormat modernos, o define geralmente basta se o targeting bater.
      // Forçamos o display para garantir.
      if (interstitial) window.googletag.display(interstitial);
      if (anchor) window.googletag.display(anchor);
    });
  }, []);

  // 2. Refresh nas Mudanças de Rota
  useEffect(() => {
    if (!window.googletag || !window.googletag.cmd) return;

    window.googletag.cmd.push(() => {
      const pubads = window.googletag.pubads();
      
      // Atualiza targeting da página (Simula navegação real)
      pubads.setTargeting('page_view', currentView);

      // Slots para atualizar
      const slotsToRefresh: any[] = []; 
      
      if (anchorSlotRef.current) slotsToRefresh.push(anchorSlotRef.current);
      
      // O Interstitial nem sempre deve ser atualizado a cada clique para evitar violação de política,
      // mas tecnicamente aqui atualizamos para garantir que ele tenha chance de aparecer na nova "página".
      if (interstitialSlotRef.current) slotsToRefresh.push(interstitialSlotRef.current);

      if (slotsToRefresh.length > 0) {
        // Pequeno delay para garantir que o render da nova página ocorreu
        setTimeout(() => {
           pubads.refresh(slotsToRefresh);
        }, 1500); // Aumentei o delay para 1.5s para dar tempo do usuário "entrar" na página antes do interstitial disparar
      }
    });
  }, [currentView]);

  return null;
};
