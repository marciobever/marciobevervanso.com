import React, { useState, useEffect } from 'react';

interface Banner {
    id: string;
    type: 'image' | 'custom';
    src?: string; // For images
    link: string;
    // For custom banner
    title?: string;
    subtitle?: string;
    cta?: string;
    theme?: string;
}

const BANNERS: Banner[] = [
    {
        id: 'restored_1',
        type: 'image',
        src: '/images/banners/banner-simulacao-1000.png',
        link: '/emprestimos', // Fallback internal link for restored banners
    },
    {
        id: 'restored_2',
        type: 'image',
        src: '/images/banners/banner-bom-pra-credito.png',
        link: '/cartoes', // Fallback internal link
    },
    {
        id: 'new_offer',
        type: 'custom',
        link: 'https://apretailer.com.br/click/695e97642bfa817da70537dc/148693/356672/subaccount',
        title: 'Crédito Rápido e Fácil',
        subtitle: 'Precisando de dinheiro extra? Simule agora e receba em minutos via PIX.',
        cta: 'Simular Empréstimo',
        theme: 'bg-gradient-to-r from-blue-600 to-indigo-700'
    }
];

export const ActionPayBanners: React.FC<{ className?: string }> = ({ className = '' }) => {
    const [activeBanner, setActiveBanner] = useState<Banner | null>(null);

    useEffect(() => {
        // Select a random banner on mount
        const random = BANNERS[Math.floor(Math.random() * BANNERS.length)];
        setActiveBanner(random);
    }, []);

    if (!activeBanner) return null;

    const handleClick = () => {
        if (activeBanner.link.startsWith('http')) {
            window.open(activeBanner.link, '_blank');
        } else {
            window.location.href = activeBanner.link;
        }
    };

    return (
        <div className={`w-full max-w-4xl mx-auto my-8 ${className}`}>
            <div
                onClick={handleClick}
                className="cursor-pointer transition-transform hover:scale-[1.01] hover:shadow-xl rounded-2xl overflow-hidden shadow-md"
            >
                {activeBanner.type === 'image' && activeBanner.src ? (
                    <img
                        src={activeBanner.src}
                        alt="Oferta Especial"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className={`p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white ${activeBanner.theme}`}>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-extrabold mb-2">{activeBanner.title}</h3>
                            <p className="text-lg opacity-90">{activeBanner.subtitle}</p>
                        </div>
                        <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                            {activeBanner.cta}
                        </button>
                    </div>
                )}
                <div className="bg-gray-100 text-[10px] text-gray-400 text-center py-1 uppercase tracking-widest font-semibold">
                    Publicidade • ActionPay
                </div>
            </div>
        </div>
    );
};
