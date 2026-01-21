
import React, { useState, useEffect } from 'react';
import { Download, Instagram, Monitor, Calendar, CheckCircle2, AlertTriangle, ArrowLeft, Image as ImageIcon, Search, Layout, Globe, MousePointerClick, Link as LinkIcon, Facebook, UserCircle, Smartphone, QrCode } from 'lucide-react';
import { Logo } from '../Logo';
import { ViewState } from '../../types';

interface Props {
   onNavigate: (view: ViewState) => void;
}

// Mapeamento das páginas internas para geração rápida
const SITE_PAGES = [
   { id: 'home', title: 'Portal Guia Social', desc: 'Consulta de benefícios e calendário oficial.', url: 'beneficios.receitapopular.com.br' },
   { id: 'calculator', title: 'Calculadora de Renda', desc: 'Descubra se você tem direito ao Bolsa Família.', url: 'beneficios.receitapopular.com.br/calculadora' },
   { id: 'guide-bolsa', title: 'Guia Bolsa Família', desc: 'Calendário atualizado e regras de pagamento.', url: 'beneficios.receitapopular.com.br/bolsa-familia' },
   { id: 'landing-cnh', title: 'CNH Social Gratuita', desc: 'Inscrições abertas em diversos estados.', url: 'beneficios.receitapopular.com.br/cnh-social' },
   { id: 'landing-mcmv', title: 'Minha Casa Minha Vida', desc: 'Faixa 1 com imóvel gratuito. Veja regras.', url: 'beneficios.receitapopular.com.br/minha-casa' },
   { id: 'landing-pe-de-meia', title: 'Pé-de-Meia', desc: 'Poupança para estudantes do Ensino Médio.', url: 'beneficios.receitapopular.com.br/pe-de-meia' },
   { id: 'loans', title: 'Empréstimos', desc: 'Comparativo de crédito para negativados.', url: 'beneficios.receitapopular.com.br/emprestimos' },
   { id: 'insurance', title: 'Seguro Popular', desc: 'Proteção familiar a partir de R$ 5,00.', url: 'beneficios.receitapopular.com.br/seguros' },
];

export const SocialPostGenerator: React.FC<Props> = ({ onNavigate }) => {
   const [sourceMode, setSourceMode] = useState<'manual' | 'page'>('manual');
   const [selectedPageId, setSelectedPageId] = useState<string>('');

   const [template, setTemplate] = useState<'calendar' | 'breaking' | 'approved' | 'tip' | 'overlay' | 'link-card'>('breaking');
   const [format, setFormat] = useState<'square' | 'story' | 'cover' | 'profile'>('square');
   const [headline, setHeadline] = useState('Bolsa Família: Calendário Liberado');
   const [subtext, setSubtext] = useState('Consulte agora o pagamento pelo final do seu NIS.');

   // Conversion Fields
   const [displayUrl, setDisplayUrl] = useState('www.beneficios.receitapopular.com.br'); // Link curto para leitura
   const [affiliateLink, setAffiliateLink] = useState(''); // Link longo para QR Code
   const [showQrCode, setShowQrCode] = useState(false);

   const [accentColor, setAccentColor] = useState<'blue' | 'green' | 'red' | 'yellow' | 'purple'>('blue');
   const [bgImage, setBgImage] = useState<string>('');
   const [searchTerm, setSearchTerm] = useState('');

   const themes = {
      blue: { bg: 'bg-brand-blue', text: 'text-brand-blue', border: 'border-brand-blue', light: 'bg-blue-50' },
      green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-600', light: 'bg-green-50' },
      red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-600', light: 'bg-red-50' },
      yellow: { bg: 'bg-yellow-500', text: 'text-yellow-600', border: 'border-yellow-500', light: 'bg-yellow-50' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-600', light: 'bg-purple-50' },
   };

   const currentTheme = themes[accentColor];

   // Quando seleciona uma página, preenche os campos
   useEffect(() => {
      if (sourceMode === 'page' && selectedPageId) {
         const page = SITE_PAGES.find(p => p.id === selectedPageId);
         if (page) {
            setHeadline(page.title);
            setSubtext(page.desc);
            setDisplayUrl(page.url);
            // Em um cenário real, você buscaria o link de afiliado do banco de dados aqui
            setAffiliateLink(`https://${page.url}?ref=admin`);
         }
      }
   }, [selectedPageId, sourceMode]);

   const searchImage = () => {
      if (!searchTerm) return;
      setBgImage(`https://image.pollinations.ai/prompt/${encodeURIComponent(searchTerm)}?width=800&height=800&nologo=true`);
   };

   const clearImage = () => {
      setBgImage('');
      setSearchTerm('');
   };

   // Logic to render the content inside the "Image"
   const renderContent = () => {
      const isProfile = format === 'profile';
      const isCover = format === 'cover';

      if (isProfile) {
         return (
            <div className="flex flex-col items-center justify-center text-center h-full w-full">
               <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                  <Logo variant="color" showText={false} className="scale-150" />
               </div>
               <div className={`px-4 py-1 ${currentTheme.bg} text-white text-xs font-bold rounded-full shadow-md uppercase tracking-wider`}>
                  Portal Oficial
               </div>
            </div>
         );
      }

      // QR Code Component Overlay
      const QrCodeOverlay = () => {
         if (!showQrCode || !affiliateLink) return null;
         const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(affiliateLink)}`;

         return (
            <div className="absolute bottom-6 right-6 bg-white p-2 rounded-xl shadow-2xl flex flex-col items-center gap-1 z-50 animate-fade-in-up">
               <img src={qrApiUrl} alt="QR Code" className="w-20 h-20" />
               <span className="text-[8px] font-bold uppercase tracking-wider text-slate-900">Escaneie</span>
            </div>
         );
      };

      switch (template) {
         case 'calendar':
            return (
               <div className={`text-center w-full relative z-10 ${isCover ? 'flex items-center justify-center gap-8 px-12' : ''}`}>
                  <QrCodeOverlay />
                  {!isCover && (
                     <div className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-md rounded-2xl mb-4 border border-white/30 shadow-lg">
                        <Calendar size={format === 'story' ? 64 : 48} className="text-white drop-shadow-md" />
                     </div>
                  )}
                  <div className={isCover ? 'text-left' : ''}>
                     <h2 className={`font-extrabold text-white mb-2 drop-shadow-md leading-tight ${isCover ? 'text-4xl' : 'text-3xl md:text-4xl'}`}>
                        {headline}
                     </h2>
                     {isCover && <p className="text-white/80 font-medium text-lg">{subtext}</p>}
                  </div>
                  <div className={`bg-white rounded-xl p-4 shadow-xl text-slate-900 text-left w-full ${isCover ? 'max-w-xs' : 'max-w-sm mx-auto mt-4'}`}>
                     <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
                        <span className="font-bold text-gray-500">NIS Final 1</span>
                        <span className={`font-extrabold ${currentTheme.text}`}>18/Jan</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
                        <span className="font-bold text-gray-500">NIS Final 2</span>
                        <span className={`font-extrabold ${currentTheme.text}`}>19/Jan</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-500">NIS Final 3</span>
                        <span className={`font-extrabold ${currentTheme.text}`}>22/Jan</span>
                     </div>
                  </div>
               </div>
            );
         case 'approved':
            return (
               <div className="text-center w-full relative z-10">
                  <QrCodeOverlay />
                  <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-white/20 animate-bounce">
                     <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-4xl font-extrabold text-white mb-2 leading-none drop-shadow-lg">
                     {headline || 'APROVADO!'}
                  </h2>
                  <p className="text-white/90 text-lg font-medium bg-black/20 py-2 px-4 rounded-lg mt-2 backdrop-blur-sm inline-block">
                     {subtext}
                  </p>
               </div>
            );
         case 'tip':
            return (
               <div className="text-left w-full relative z-10 px-4">
                  <QrCodeOverlay />
                  <div className={`inline-block px-4 py-1 rounded-full bg-white text-slate-900 font-bold text-xs uppercase tracking-wider mb-4 shadow-md`}>
                     Dica do Dia
                  </div>
                  <h2 className={`font-extrabold text-white leading-tight drop-shadow-md mb-6 ${isCover ? 'text-4xl max-w-2xl' : 'text-3xl md:text-5xl'}`}>
                     {headline}
                  </h2>
                  <div className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border-l-4 border-white">
                     <p className="text-white text-lg font-medium leading-relaxed">
                        {subtext}
                     </p>
                  </div>
               </div>
            );
         case 'link-card':
            return (
               <div className={`text-center w-full relative z-10 px-6 ${isCover ? 'flex justify-center' : ''}`}>
                  <QrCodeOverlay />
                  <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden transform ${isCover ? 'rotate-0 flex w-full max-w-2xl' : 'rotate-2'}`}>
                     {!isCover && (
                        <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                           <div className="w-3 h-3 rounded-full bg-red-400"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                           <div className="w-3 h-3 rounded-full bg-green-400"></div>
                           <div className="ml-4 bg-white px-3 py-1 rounded-md text-[10px] text-gray-400 flex-grow text-left truncate">
                              https://{displayUrl}
                           </div>
                        </div>
                     )}
                     <div className={`p-8 ${isCover ? 'flex items-center gap-6 text-left w-full' : ''}`}>
                        <div className={`w-16 h-16 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center ${isCover ? 'shrink-0' : 'mx-auto mb-4'}`}>
                           <Globe size={32} />
                        </div>
                        <div>
                           <h2 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
                              {headline}
                           </h2>
                           <p className="text-slate-500 text-sm mb-6">
                              {subtext}
                           </p>
                           <div className={`w-full py-3 px-6 rounded-xl font-bold text-white text-sm text-center ${currentTheme.bg}`}>
                              Acessar Agora
                           </div>
                        </div>
                     </div>
                  </div>
                  {!isCover && (
                     <div className="mt-8 bg-black/40 backdrop-blur-sm inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-bold">
                        <LinkIcon size={16} /> Link na Bio
                     </div>
                  )}
               </div>
            );
         case 'overlay':
            return (
               <div className={`text-center w-full h-full flex flex-col justify-end pb-12 relative z-10 ${isCover ? 'justify-center pb-0' : ''}`}>
                  <QrCodeOverlay />
                  <div className="bg-gradient-to-t from-black via-black/80 to-transparent absolute inset-0 -z-10"></div>
                  <h2 className={`font-extrabold text-white leading-tight drop-shadow-xl mb-4 px-4 ${isCover ? 'text-5xl' : 'text-3xl md:text-4xl'}`}>
                     {headline}
                  </h2>
                  <p className="text-white/90 text-lg px-4 font-medium drop-shadow-md max-w-3xl mx-auto">
                     {subtext}
                  </p>

                  <div className="mt-6 flex justify-center">
                     <div className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                        <MousePointerClick size={16} /> {displayUrl.split('/')[1] || 'Saiba Mais'}
                     </div>
                  </div>
               </div>
            );
         case 'breaking':
         default:
            return (
               <div className="text-center w-full relative z-10">
                  <QrCodeOverlay />
                  <div className={`inline-flex items-center gap-2 ${currentTheme.bg} text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm mb-6 shadow-lg border-2 border-white/20`}>
                     <AlertTriangle size={16} /> Urgente
                  </div>
                  <h2 className={`font-extrabold text-white leading-tight drop-shadow-lg ${isCover ? 'text-5xl max-w-4xl mx-auto' : 'text-3xl md:text-5xl'}`}>
                     {headline}
                  </h2>
                  <div className="mt-8 bg-white/90 backdrop-blur text-slate-800 p-6 rounded-2xl font-medium shadow-2xl max-w-sm mx-auto border-b-4 border-slate-300">
                     {subtext}
                  </div>
               </div>
            );
      }
   };

   const getPreviewDimensions = () => {
      switch (format) {
         case 'story': return 'w-[360px] h-[640px]';
         case 'cover': return 'w-[600px] h-[228px]'; // Aprox Facebook Cover Ratio
         case 'profile': return 'w-[400px] h-[400px]';
         case 'square':
         default: return 'w-[500px] h-[500px]';
      }
   };

   return (
      <div className="min-h-screen bg-slate-900 text-white p-4 md:p-8">
         <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
               <button onClick={() => onNavigate('secret-menu')} className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors">
                  <ArrowLeft />
               </button>
               <h1 className="text-2xl font-bold flex items-center gap-2">
                  <ImageIcon className="text-pink-500" /> Kit Social (Face/Insta)
               </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

               {/* Controls */}
               <div className="lg:col-span-4 space-y-6">

                  {/* SOURCE SELECTOR */}
                  <div className="bg-slate-800 p-1 rounded-xl flex border border-slate-700 mb-6">
                     <button
                        onClick={() => setSourceMode('manual')}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${sourceMode === 'manual' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                     >
                        Manual
                     </button>
                     <button
                        onClick={() => setSourceMode('page')}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${sourceMode === 'page' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                     >
                        Automático
                     </button>
                  </div>

                  {/* Page Selector */}
                  {sourceMode === 'page' && (
                     <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 animate-fade-in">
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                           <Globe size={14} /> Selecionar Conteúdo
                        </label>
                        <select
                           value={selectedPageId}
                           onChange={(e) => setSelectedPageId(e.target.value)}
                           className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white outline-none focus:border-blue-500 transition-colors cursor-pointer"
                        >
                           <option value="">Selecione uma página...</option>
                           {SITE_PAGES.map(page => (
                              <option key={page.id} value={page.id}>{page.title}</option>
                           ))}
                        </select>
                     </div>
                  )}

                  {/* Formato */}
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                     <label className="block text-xs font-bold text-slate-400 uppercase mb-3">Formato de Saída</label>
                     <div className="grid grid-cols-2 gap-2 mb-4">
                        <button onClick={() => setFormat('square')} className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 ${format === 'square' ? 'bg-white text-black' : 'bg-slate-700 text-gray-400'}`}>
                           <Instagram size={14} /> Post (1:1)
                        </button>
                        <button onClick={() => setFormat('story')} className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 ${format === 'story' ? 'bg-white text-black' : 'bg-slate-700 text-gray-400'}`}>
                           <Smartphone size={14} /> Story (9:16)
                        </button>
                        <button onClick={() => setFormat('cover')} className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 ${format === 'cover' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-gray-400'}`}>
                           <Facebook size={14} /> Capa FB
                        </button>
                        <button onClick={() => setFormat('profile')} className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 ${format === 'profile' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-gray-400'}`}>
                           <UserCircle size={14} /> Perfil
                        </button>
                     </div>
                  </div>

                  {format !== 'profile' && (
                     <>
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                           <label className="block text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2"><Layout size={14} /> Modelo</label>
                           <div className="grid grid-cols-2 gap-2">
                              <button onClick={() => setTemplate('breaking')} className={`text-left px-3 py-2 rounded-lg text-xs font-bold ${template === 'breaking' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'}`}>🚨 Urgente</button>
                              <button onClick={() => setTemplate('calendar')} className={`text-left px-3 py-2 rounded-lg text-xs font-bold ${template === 'calendar' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'}`}>📅 Calendário</button>
                              <button onClick={() => setTemplate('approved')} className={`text-left px-3 py-2 rounded-lg text-xs font-bold ${template === 'approved' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'}`}>✅ Aprovado</button>
                              <button onClick={() => setTemplate('tip')} className={`text-left px-3 py-2 rounded-lg text-xs font-bold ${template === 'tip' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'}`}>💡 Dica</button>
                              <button onClick={() => setTemplate('link-card')} className={`text-left px-3 py-2 rounded-lg text-xs font-bold ${template === 'link-card' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'}`}>🔗 Link Card</button>
                              <button onClick={() => setTemplate('overlay')} className={`text-left px-3 py-2 rounded-lg text-xs font-bold ${template === 'overlay' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'}`}>🖼️ Fundo</button>
                           </div>
                        </div>

                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                           <label className="block text-xs font-bold text-slate-400 uppercase mb-3">Texto</label>
                           <input
                              type="text"
                              value={headline}
                              onChange={(e) => setHeadline(e.target.value)}
                              className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white mb-3 focus:border-blue-500 outline-none font-bold"
                              placeholder="Título Principal"
                           />
                           <textarea
                              value={subtext}
                              onChange={(e) => setSubtext(e.target.value)}
                              className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-blue-500 outline-none h-20 resize-none text-sm mb-3"
                              placeholder="Subtítulo ou descrição"
                           />
                        </div>

                        {/* CONVERSION SECTION */}
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 border-l-4 border-l-green-500">
                           <label className="block text-xs font-bold text-green-400 uppercase mb-3 flex items-center gap-2">
                              <LinkIcon size={14} /> Links de Conversão
                           </label>

                           <div className="mb-3">
                              <span className="text-[10px] text-slate-400 uppercase font-bold">1. Texto Visível (Curto)</span>
                              <input
                                 type="text"
                                 value={displayUrl}
                                 onChange={(e) => setDisplayUrl(e.target.value)}
                                 className="w-full bg-slate-900 border border-slate-600 rounded-lg p-2 text-white text-xs focus:border-green-500 outline-none font-mono mt-1"
                                 placeholder="ex: beneficios.receitapopular.com.br"
                              />
                           </div>

                           <div>
                              <span className="text-[10px] text-slate-400 uppercase font-bold">2. Link Destino (QR Code)</span>
                              <input
                                 type="text"
                                 value={affiliateLink}
                                 onChange={(e) => setAffiliateLink(e.target.value)}
                                 className="w-full bg-slate-900 border border-slate-600 rounded-lg p-2 text-white text-xs focus:border-green-500 outline-none font-mono mt-1 mb-2"
                                 placeholder="ex: https://hotmart.com/..."
                              />
                              <button
                                 onClick={() => setShowQrCode(!showQrCode)}
                                 className={`w-full py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${showQrCode ? 'bg-green-600 text-white' : 'bg-slate-700 text-gray-400'}`}
                              >
                                 <QrCode size={14} /> {showQrCode ? 'QR Code Ativado' : 'Gerar QR Code na Imagem'}
                              </button>
                           </div>
                        </div>
                     </>
                  )}

                  {/* Image Search */}
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                     <label className="block text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                        <ImageIcon size={14} /> Fundo (AI Generator)
                     </label>
                     <div className="flex gap-2 mb-2">
                        <input
                           type="text"
                           value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)}
                           placeholder="Ex: dinheiro, familia, casa"
                           className="flex-grow bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-blue-500"
                           onKeyDown={(e) => e.key === 'Enter' && searchImage()}
                        />
                        <button onClick={searchImage} className="bg-blue-600 p-2 rounded-lg hover:bg-blue-500 transition-colors"><Search size={18} /></button>
                     </div>
                     {bgImage && (
                        <button onClick={clearImage} className="text-xs text-red-400 hover:text-red-300 underline w-full text-right">
                           Remover Imagem
                        </button>
                     )}
                  </div>

                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                     <label className="block text-xs font-bold text-slate-400 uppercase mb-3">Cor do Tema</label>
                     <div className="flex gap-3 justify-center">
                        {Object.keys(themes).map((color) => (
                           <button
                              key={color}
                              onClick={() => setAccentColor(color as any)}
                              className={`w-8 h-8 rounded-full border-2 ${color === 'blue' ? 'bg-blue-600' :
                                    color === 'green' ? 'bg-green-600' :
                                       color === 'red' ? 'bg-red-600' :
                                          color === 'yellow' ? 'bg-yellow-500' :
                                             'bg-purple-600'
                                 } ${accentColor === color ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-50'}`}
                           />
                        ))}
                     </div>
                  </div>
               </div>

               {/* Preview Area */}
               <div className="lg:col-span-8 flex flex-col items-center justify-center bg-black/50 rounded-3xl p-8 border border-slate-800 relative">

                  <div className="mb-4 text-slate-400 text-sm flex items-center gap-2">
                     <Monitor size={14} /> Preview (Tire um print da área abaixo)
                  </div>

                  {/* THE IMAGE CANVAS */}
                  <div
                     id="social-preview"
                     className={`relative overflow-hidden shadow-2xl transition-all duration-500 flex flex-col ${getPreviewDimensions()}`}
                  >
                     {/* Dynamic Background */}
                     {bgImage ? (
                        <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-500" style={{ backgroundImage: `url(${bgImage})` }}>
                           <div className={`absolute inset-0 bg-black/40 ${template === 'overlay' ? 'bg-gradient-to-t from-black/90 via-transparent to-black/30' : 'backdrop-blur-sm'}`}></div>
                        </div>
                     ) : (
                        <>
                           <div className={`absolute inset-0 ${currentTheme.bg} transition-colors duration-300`}></div>
                           <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60"></div>
                           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        </>
                     )}

                     {/* Profile Mode Overlay (Circular Mask) */}
                     {format === 'profile' && (
                        <div className="absolute inset-0 pointer-events-none z-50 border-[50px] border-slate-900/50 rounded-full"></div>
                     )}

                     {/* Content Container */}
                     <div className="relative z-10 flex flex-col h-full p-8">

                        {/* Header Logo (Hidden on Cover/Profile to allow full customization) */}
                        {format !== 'cover' && format !== 'profile' && (
                           <div className="flex justify-center mb-auto pt-4">
                              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                 <Logo variant="white" showText={true} className="scale-75 origin-center" />
                              </div>
                           </div>
                        )}

                        {/* Main Dynamic Content */}
                        <div className="my-auto flex items-center justify-center w-full">
                           {renderContent()}
                        </div>

                        {/* Footer */}
                        {format !== 'cover' && format !== 'profile' && (
                           <div className="mt-auto text-center pt-8">
                              <div className="inline-block bg-white text-brand-dark font-bold px-4 py-2 rounded-lg text-sm shadow-lg">
                                 {displayUrl || 'www.beneficios.receitapopular.com.br'}
                              </div>
                           </div>
                        )}

                     </div>
                  </div>

                  <div className="mt-8">
                     <p className="text-xs text-gray-500 text-center">
                        Dica: Use a ferramenta de captura de tela do seu PC/Celular para salvar a imagem.
                     </p>
                  </div>

               </div>

            </div>
         </div>
      </div>
   );
};
