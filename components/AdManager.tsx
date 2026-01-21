
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
  const isInitialized = useRef(false);

  useEffect(() => {
    // Como o site agora força o reload da página na navegação, 
    // rodamos a inicialização completa a cada montagem do componente.
    if (isInitialized.current) return;
    isInitialized.current = true;

    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      const pubads = window.googletag.pubads();

      // 1. Configurações Globais e SRA (Single Request Architecture)
      // SRA é crucial para o bom funcionamento conjunto de Anchor + Interstitial
      pubads.enableSingleRequest();

      // 2. Targeting Global
      pubads.setTargeting('site', 'beneficios.receitapopular.com.br');
      pubads.setTargeting('page_view', currentView);
      // Cache Buster: Tenta forçar uma nova "sessão" para o AdServer entregar mais Interstitials
      pubads.setTargeting('session_ts', Date.now().toString());

      // 3. Definição de Slots Especiais (Fora da página)

      // Interstitial
      const interstitialSlot = window.googletag.defineOutOfPageSlot(
        '/23287346478/marciobevervanso.com/marciobevervanso.com_Interstitial',
        window.googletag.enums.OutOfPageFormat.INTERSTITIAL
      );

      // Anchor (Topo)
      const anchorSlot = window.googletag.defineOutOfPageSlot(
        '/23287346478/marciobevervanso.com/marciobevervanso.com_Anchor',
        window.googletag.enums.OutOfPageFormat.TOP_ANCHOR
      );

      // Adiciona o serviço aos slots especiais se foram criados com sucesso
      if (interstitialSlot) interstitialSlot.addService(pubads);
      if (anchorSlot) anchorSlot.addService(pubads);

      // 4. Configurações de Performance
      pubads.enableLazyLoad({
        fetchMarginPercent: 200,
        renderMarginPercent: 100,
        mobileScaling: 2.0
      });

      pubads.collapseEmptyDivs();

      // 5. Habilita os serviços
      window.googletag.enableServices();

      // 6. Exibe os slots especiais
      // Nota: Em SRA, define-se antes e exibe-se depois ou junto.
      if (interstitialSlot) window.googletag.display(interstitialSlot);
      if (anchorSlot) window.googletag.display(anchorSlot);
    });
  }, []); // Dependência vazia, roda apenas uma vez no load da página

  return null;
};
