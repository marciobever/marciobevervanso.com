
import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, ShieldCheck } from 'lucide-react';

export const InstallPrompt: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show after 10 seconds of interaction if not dismissed recently
    const isDismissed = localStorage.getItem('gsb_install_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => setShow(true), 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setShow(false);
    // Hide for 24 hours
    localStorage.setItem('gsb_install_dismissed', 'true');
    setTimeout(() => localStorage.removeItem('gsb_install_dismissed'), 86400000);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[70] p-4 animate-slide-up md:max-w-sm md:left-auto md:right-4 md:bottom-4">
      <div className="bg-brand-dark text-white rounded-2xl shadow-2xl p-5 border border-white/10 relative overflow-hidden">

        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>

        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-white/50 hover:text-white p-1"
        >
          <X size={16} />
        </button>

        <div className="flex gap-4 items-center mb-4">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9426/9426233.png"
              alt="App Icon"
              className="w-8 h-8"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg leading-none">Guia Social</h3>
            <p className="text-xs text-blue-200 mt-1">App Oficial • Gratuito</p>
          </div>
        </div>

        <p className="text-sm text-gray-300 mb-4 leading-snug">
          Instale nosso aplicativo para receber o <strong>Calendário Bolsa Família 2026</strong> em primeira mão no seu celular.
        </p>

        <button
          className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
          onClick={() => {
            alert("Para instalar: \n1. Toque no menu do navegador (três pontinhos ou ícone de compartilhar)\n2. Selecione 'Adicionar à Tela Inicial'");
            handleDismiss();
          }}
        >
          <Download size={18} /> Baixar Agora
        </button>

        <div className="mt-3 flex items-center justify-center gap-1 text-[10px] text-gray-400">
          <ShieldCheck size={10} /> Verificado e Seguro
        </div>

      </div>
    </div>
  );
};
