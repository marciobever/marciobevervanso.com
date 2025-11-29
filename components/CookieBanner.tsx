import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gsb_cookie_consent');
    if (!consent) {
      // Delay to not annoy immediately
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gsb_cookie_consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[60] p-4 animate-slide-up">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/95 backdrop-blur-md border border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] rounded-2xl p-6 md:flex items-center justify-between gap-6">
          
          <div className="flex items-start gap-4 mb-4 md:mb-0">
            <div className="bg-green-100 p-3 rounded-full text-green-700 hidden sm:block shrink-0">
               <ShieldCheck size={24} />
            </div>
            <div>
               <h4 className="font-bold text-slate-900 mb-1">Respeitamos sua privacidade</h4>
               <p className="text-sm text-slate-600 leading-snug">
                  Utilizamos cookies para melhorar sua experiência, personalizar publicidade e analisar nosso tráfego. Ao continuar navegando, você concorda com nossa <a href="#" className="text-brand-blue hover:underline font-bold">Política de Privacidade</a>.
               </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
             <button 
               onClick={() => setShow(false)}
               className="text-slate-500 font-bold text-sm hover:text-slate-800 px-4 py-2"
             >
                Recusar
             </button>
             <button 
               onClick={handleAccept}
               className="bg-brand-blue hover:bg-brand-hover text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-brand-blue/20 transition-all"
             >
                Aceitar e Fechar
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};