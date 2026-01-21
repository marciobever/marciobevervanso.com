import React from 'react';
import { CreditCardProduct } from '../types';
import { Wifi } from 'lucide-react';

interface Props {
  card: CreditCardProduct;
}

export const CreditCardVisual: React.FC<Props> = ({ card }) => {
  return (
    <div className={`relative w-64 h-40 rounded-xl shadow-2xl overflow-hidden bg-gradient-to-br ${card.colorGradient} transform transition-transform duration-500 hover:scale-105`}>

      {/* Chip */}
      <div className="absolute top-6 left-6 w-10 h-8 bg-yellow-200 rounded-md opacity-80 overflow-hidden border border-yellow-400/30">
        <div className="w-full h-[1px] bg-yellow-600/20 absolute top-2"></div>
        <div className="w-full h-[1px] bg-yellow-600/20 absolute top-4"></div>
        <div className="w-full h-[1px] bg-yellow-600/20 absolute top-6"></div>
        <div className="h-full w-[1px] bg-yellow-600/20 absolute left-3 top-0"></div>
        <div className="h-full w-[1px] bg-yellow-600/20 absolute left-6 top-0"></div>
      </div>

      {/* Contactless Icon */}
      <div className="absolute top-6 right-6 text-white/60">
        <Wifi size={20} className="rotate-90" />
      </div>

      {/* Card Number (Masked) */}
      <div className="absolute top-[4.5rem] left-6 right-6 flex justify-between text-white/90 font-mono text-base tracking-widest bg-black/10 p-1 px-2 rounded backdrop-blur-[2px]">
        <span>••••</span>
        <span>••••</span>
        <span>••••</span>
        <span>4291</span>
      </div>

      {/* Holder Name */}
      <div className="absolute bottom-5 left-6 text-white/90">
        <p className="text-[8px] uppercase tracking-wider opacity-70 mb-0.5">Titular</p>
        <p className="font-bold tracking-wide text-xs truncate max-w-[140px]">NOME DO CLIENTE</p>
      </div>

      {/* Flag Logo (Simulated) */}
      <div className="absolute bottom-5 right-6 text-white font-bold italic text-lg tracking-tighter opacity-90 drop-shadow-sm">
        {card.flag}
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent skew-x-12 opacity-50"></div>
    </div>
  );
};