import React, { useState, useEffect } from 'react';
import { Banknote, Zap, MousePointerClick, ArrowRight } from 'lucide-react';

const LINKS = {
    bompracredito: 'https://apretailer.com.br/click/695e97642bfa817da70537dc/148693/356672/subaccount',
    supersim: 'https://apretailer.com.br/click/692e45f32bfa816d36623917/184363/356672/subaccount',
    credspot: 'https://apretailer.com.br/click/692e45f22bfa81658c05e154/186580/356672/subaccount'
};

// 1. CREDSPOT (Verde - Original do Projeto)
const CredspotBanner: React.FC = () => (
    <div
        onClick={() => window.open(LINKS.credspot, '_blank')}
        className="w-full max-w-4xl mx-auto my-8 p-0.5 rounded-3xl bg-gradient-to-r from-emerald-500 to-green-600 shadow-xl cursor-pointer group transition-transform hover:scale-[1.01]"
    >
        <div className="bg-white rounded-[1.4rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform"></div>
            <div className="flex items-center gap-5 text-left relative z-10">
                <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600 shadow-inner shrink-0 group-hover:rotate-3 transition-transform">
                    <Banknote size={36} />
                </div>
                <div>
                    <span className="bg-emerald-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase mb-2 inline-block tracking-widest">Saque FGTS Imediato</span>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight mb-1">Resgate seu FGTS agora via PIX</h3>
                    <p className="text-slate-500 text-sm font-medium">Antecipe seu Saque-Aniversário. Dinheiro na conta em até 2 horas.</p>
                </div>
            </div>
            <button className="bg-emerald-600 text-white hover:bg-emerald-700 font-black py-4 px-8 rounded-xl text-sm flex items-center gap-2 transition-all shadow-lg whitespace-nowrap group-hover:gap-4 relative z-10">
                SOLICITAR SAQUE <MousePointerClick size={18} />
            </button>
        </div>
    </div>
);

// 2. SUPERSIM (Vermelho/Laranja - Original do Projeto)
const SuperSimBanner: React.FC = () => (
    <div
        onClick={() => window.open(LINKS.supersim, '_blank')}
        className="w-full max-w-4xl mx-auto my-8 p-0.5 rounded-3xl bg-gradient-to-r from-red-600 to-orange-600 shadow-xl cursor-pointer group transition-transform hover:scale-[1.01]"
    >
        <div className="bg-slate-900 rounded-[1.4rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-600/10 rounded-full -mb-20 -mr-20 opacity-50 group-hover:scale-110 transition-transform"></div>
            <div className="flex items-center gap-5 text-left relative z-10">
                <div className="bg-red-600 p-4 rounded-2xl text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                    <Zap size={36} fill="currentColor" />
                </div>
                <div>
                    <span className="bg-white/20 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase mb-2 inline-block tracking-widest border border-white/20">Aprova Negativado</span>
                    <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-1">Dinheiro na conta em 30 minutos?</h3>
                    <p className="text-slate-400 text-sm font-medium">Empréstimo rápido com garantia de celular. Aprovação simplificada.</p>
                </div>
            </div>
            <button className="bg-white text-slate-900 hover:bg-gray-100 font-black py-4 px-8 rounded-xl text-sm flex items-center gap-2 transition-all shadow-lg whitespace-nowrap group-hover:gap-4 relative z-10">
                SIMULAR VALOR <ArrowRight size={18} />
            </button>
        </div>
    </div>
);

// 3. BOM PRA CRÉDITO (Novo - Imagens Uploadadas)
const BomPraCreditoBanner: React.FC = () => {
    // We have 2 images. We can randomize between them or pick the best one.
    // Based on user feedback ("te mandei 2 banners novos"), let's rotate them to keep it fresh
    // or just use the branded one primarily. Let's use the branded one.
    const image = '/images/banners/banner-bom-pra-credito.png';

    return (
        <div className="w-full max-w-4xl mx-auto my-8">
            <div
                onClick={() => window.open(LINKS.bompracredito, '_blank')}
                className="cursor-pointer transition-transform hover:scale-[1.01] hover:shadow-xl rounded-2xl overflow-hidden shadow-md bg-white"
            >
                <img
                    src={image}
                    alt="Bom Pra Crédito"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                />
                <div className="bg-gray-100 text-[10px] text-gray-400 text-center py-1 uppercase tracking-widest font-semibold">
                    Publicidade • ActionPay
                </div>
            </div>
        </div>
    );
};

interface ActionPayProps {
    className?: string;
    variant?: 'credspot' | 'supersim' | 'bompracredito';
}

export const ActionPayBanners: React.FC<ActionPayProps> = ({ className = '', variant = 'bompracredito' }) => {
    if (variant === 'credspot') {
        return <div className={className}><CredspotBanner /></div>;
    }
    if (variant === 'supersim') {
        return <div className={className}><SuperSimBanner /></div>;
    }
    // Default to new one
    return <div className={className}><BomPraCreditoBanner /></div>;
};
