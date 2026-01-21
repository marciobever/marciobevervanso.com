
import React from 'react';
import { MessageCircle, ArrowRight, Bell } from 'lucide-react';

export const WhatsAppInvite: React.FC = () => {
  return (
    <div className="bg-[#25D366] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group cursor-pointer hover:shadow-xl hover:bg-[#20ba5a] transition-all">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
           <div className="bg-white text-[#25D366] p-2 rounded-lg">
              <MessageCircle size={24} />
           </div>
           <span className="bg-white/20 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
              Vagas Limitadas
           </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 leading-tight">Receba o Calendário no WhatsApp</h3>
        <p className="text-white/90 text-sm mb-4 leading-snug">
           Entre no nosso <strong>Grupo VIP Gratuito</strong> e seja avisado assim que o dinheiro cair na conta. Sem spam.
        </p>

        <button className="w-full bg-white text-[#25D366] font-bold py-3 rounded-xl flex items-center justify-center gap-2 group-hover:bg-slate-100 transition-colors">
           Entrar no Grupo <ArrowRight size={18} />
        </button>
      </div>

      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-colors"></div>
    </div>
  );
};
