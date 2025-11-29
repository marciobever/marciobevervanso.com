
import React, { useEffect } from 'react';

// Declaração para TypeScript entender o googletag
declare global {
  interface Window {
    googletag: any;
  }
}

export const AdManager: React.FC = () => {
  useEffect(() => {
    // 1. VideoWall Script Injection
    // Adiciona o script do Videoo.tv dinamicamente
    const videoWallScriptId = "videoowall";
    if (!document.getElementById(videoWallScriptId)) {
      const script = document.createElement("script");
      script.id = videoWallScriptId;
      script.src = "https://static.videoo.tv/a4ee5d6b80c91488ada774c8d658cf4e74f25043d10e44697965e620f24742ba.js";
      script.async = true;
      script.defer = true;
      script.dataset.id = "a4ee5d6b80c91488ada774c8d658cf4e74f25043d10e44697965e620f24742ba";
      script.dataset.cfasync = "false";
      document.body.appendChild(script);
    }

    // 2. Google Ad Manager (GAM) Initialization
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      const pubads = window.googletag.pubads();

      // Targeting (UTM Parameters)
      if (window.location.search) {
        const urlParams = new URLSearchParams(window.location.search);
        const utm_source = urlParams.get('utm_source');
        const utm_medium = urlParams.get('utm_medium');
        const utm_campaign = urlParams.get('utm_campaign');

        if (utm_source) pubads.setTargeting('utm_source', [utm_source]);
        if (utm_medium) pubads.setTargeting('utm_medium', [utm_medium]);
        if (utm_campaign) pubads.setTargeting('utm_campaign', [utm_campaign]);
      }

      // Definição dos Slots Especiais (OutOfPage)
      
      // Interstitial
      const interstitialSlot = window.googletag.defineOutOfPageSlot(
        '/23287346478/marciobevervanso.com/marciobevervanso.com_Interstitial',
        window.googletag.enums.OutOfPageFormat.INTERSTITIAL
      );
      if (interstitialSlot) interstitialSlot.addService(pubads);

      // Anchor (Topo)
      const anchorSlot = window.googletag.defineOutOfPageSlot(
        '/23287346478/marciobevervanso.com/marciobevervanso.com_Anchor',
        window.googletag.enums.OutOfPageFormat.TOP_ANCHOR
      );
      if (anchorSlot) anchorSlot.addService(pubads);

      // Definição dos Slots de Conteúdo (Content1 a Content9)
      // Necessário definir aqui para que o display() nos componentes funcione
      const mapping = window.googletag.sizeMapping()
        .addSize([0, 0], ['fluid', [250, 250], [300, 250], [336, 280]])
        .build();

      for (let i = 1; i <= 9; i++) {
        const slotName = `Content${i}`;
        const slotPath = `/23287346478/marciobevervanso.com/marciobevervanso.com_${slotName}`;
        
        window.googletag.defineSlot(slotPath, [[250, 250], [300, 250], [336, 280]], slotName)
          .defineSizeMapping(mapping)
          .setCollapseEmptyDiv(true)
          .addService(pubads);
      }

      // Configurações Globais
      pubads.enableLazyLoad({
        fetchMarginPercent: 20,
        renderMarginPercent: 10,
        mobileScaling: 2.0
      });

      // Ativar Serviços
      window.googletag.enableServices();

      // Exibir Slots Especiais (Anchor e Interstitial)
      // O Content1-9 será exibido via AdSlot.tsx quando o componente montar
      if (interstitialSlot) window.googletag.display(interstitialSlot);
      if (anchorSlot) window.googletag.display(anchorSlot);
    });

  }, []);

  return null; // Este componente não renderiza nada visualmente
};
