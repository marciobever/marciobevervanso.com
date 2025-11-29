
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

  // 1. Inicialização Única (Script VideoWall + Configuração GAM)
  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    // --- VIDEOWALL SCRIPT ---
    const videoWallId = "videoowall-script";
    if (!document.getElementById(videoWallId)) {
      const script = document.createElement("script");
      script.id = videoWallId;
      script.src = "https://static.videoo.tv/a4ee5d6b80c91488ada774c8d658cf4e74f25043d10e44697965e620f24742ba.js";
      script.async = true;
      script.defer = true;
      script.setAttribute("data-id", "a4ee5d6b80c91488ada774c8d658cf4e74f25043d10e44697965e620f24742ba");
      script.setAttribute("data-cfasync", "false");
      document.head.appendChild(script);
    }

    // --- GAM INIT ---
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      const pubads = window.googletag.pubads();

      // Targeting Global
      pubads.setTargeting('site', 'marciobevervanso.com');

      // Interstitial (OutOfPage)
      const interstitial = window.googletag.defineOutOfPageSlot(
        '/23287346478/marciobevervanso.com/marciobevervanso.com_Interstitial',
        window.googletag.enums.OutOfPageFormat.INTERSTITIAL
      );
      if (interstitial) {
        interstitial.addService(pubads);
        interstitialSlotRef.current = interstitial;
      }

      // Anchor (OutOfPage)
      const anchor = window.googletag.defineOutOfPageSlot(
        '/23287346478/marciobevervanso.com/marciobevervanso.com_Anchor',
        window.googletag.enums.OutOfPageFormat.TOP_ANCHOR
      );
      if (anchor) {
        anchor.addService(pubads);
        anchorSlotRef.current = anchor;
      }

      // Configurações
      pubads.enableLazyLoad({
        fetchMarginPercent: 50,  // Aumentei para carregar um pouco antes
        renderMarginPercent: 20,
        mobileScaling: 2.0
      });
      
      pubads.collapseEmptyDivs();
      window.googletag.enableServices();

      // Exibir Slots Especiais Iniciais
      if (interstitial) window.googletag.display(interstitial);
      if (anchor) window.googletag.display(anchor);
    });
  }, []);

  // 2. Refresh nas Mudanças de Rota (Navigation)
  useEffect(() => {
    if (!window.googletag || !window.googletag.cmd) return;

    window.googletag.cmd.push(() => {
      const pubads = window.googletag.pubads();
      
      // Atualiza targeting da página
      pubads.setTargeting('page_view', currentView);

      // Refresh nos formatos flutuantes para garantir novo leilão na troca de página
      const slotsToRefresh = [];
      if (anchorSlotRef.current) slotsToRefresh.push(anchorSlotRef.current);
      if (interstitialSlotRef.current) slotsToRefresh.push(interstitialSlotRef.current);

      if (slotsToRefresh.length > 0) {
        // Pequeno delay para garantir que a transição de página ocorreu
        setTimeout(() => {
           pubads.refresh(slotsToRefresh);
        }, 500);
      }
    });
  }, [currentView]);

  return null;
};
