import React from 'react';
import { CreditCardProduct } from '../types';
import { Wifi } from 'lucide-react';

interface Props {
  card: CreditCardProduct;
}

export const CreditCardVisual: React.FC<Props> = ({ card }) => {
  return (
    <div className={`relative w-full aspect-[1.586/1] rounded-2xl p-6 shadow-2xl overflow-hidden flex flex-col justify-between bg-gradient-to-br ${card.colorGradient} transition-transform duration-300 hover:scale-105 hover:rotate-1`}>
      
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>

      <div className="relative z-10 flex justify-between items-start">
        <div className="w-12 h-8 bg-yellow-200/80 rounded-md flex items-center justify-center overflow-hidden shadow-inner">
           <div className="w-full h-[1px] bg-black/20 my-[2px]"></div>
           <div className="w-full h-[1px] bg-black/20 my-[2px]"></div>
           <div className="absolute w-[80%] h-[70%] border border-black/30 rounded-sm"></div>
        </div>
        <Wifi className="text-white/80 rotate-90" size={24} />
      </div>

      <div className="relative z-10">
        <p className="text-white/90 font-mono text-lg md:text-xl tracking-widest shadow-black/50 drop-shadow-md">
          •••• •••• •••• 4291
        </p>
        <div className="flex justify-between items-end mt-4">
          <div>
             <p className="text-[10px] text-white/70 uppercase">Titular</p>
             <p className="text-white font-bold tracking-wide uppercase text-sm md:text-base">Nome do Cliente</p>
          </div>
          <div className="font-bold italic text-white text-xl">
             {card.flag}
          </div>
        </div>
      </div>
    </div>
  );
};