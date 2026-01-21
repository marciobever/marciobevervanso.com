
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
      pubads.enableSingleRequest();

      // 2. Targeting Global
      pubads.setTargeting('site', 'beneficios.receitapopular.com.br');
      pubads.setTargeting('page_view', currentView);
      pubads.setTargeting('session_ts', Date.now().toString());

      // 3. Configurações de Performance
      pubads.enableLazyLoad({
        fetchMarginPercent: 200,
        renderMarginPercent: 100,
        mobileScaling: 2.0
      });

      pubads.collapseEmptyDivs();

      // 4. Habilita os serviços
      window.googletag.enableServices();
    });
  }, []); // Dependência vazia, roda apenas uma vez no load da página

  return null;
};
