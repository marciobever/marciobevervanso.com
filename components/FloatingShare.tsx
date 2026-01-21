import React, { useState, useEffect } from 'react';
import { Share2, X } from 'lucide-react';

export const FloatingShare: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 3 seconds of scrolling
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleShare = () => {
    // VIRAL COPYWRITING: Usar gatilhos de urgência e benefício
    const text = "🚨 *CONSULTA LIBERADA 2025* 🚨\n\nAcabou de sair o novo calendário do Bolsa Família e a lista de estados com CNH Social Gratuita!\n\nVeja também se seu nome está na lista de *Cartões Pré-Aprovados* (mesmo negativado).\n\nConfira tudo aqui antes que saia do ar: 👇";
    const url = window.location.href; // Captura a URL atual
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + "\n" + url)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 right-6 z-40 animate-bounce-in">
      <div className="relative group">
        <button
          onClick={handleShare}
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 rounded-full shadow-lg hover:shadow-green-500/30 transition-all transform hover:scale-110 flex items-center gap-2"
          aria-label="Compartilhar no WhatsApp"
        >
          <Share2 size={20} />
        </button>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-gray-200 text-gray-500 rounded-full p-1 shadow-sm hover:bg-gray-300 w-5 h-5 flex items-center justify-center text-[10px]"
        >
          <X size={10} />
        </button>
      </div>
    </div>
  );
};