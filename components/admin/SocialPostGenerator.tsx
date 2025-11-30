
import React, { useState, useEffect } from 'react';
import { Download, Instagram, Monitor, Calendar, CheckCircle2, AlertTriangle, ArrowLeft, Image as ImageIcon, Search, Layout, Globe, MousePointerClick, Link as LinkIcon, Smartphone } from 'lucide-react';
import { Logo } from '../Logo';
import { ViewState } from '../../types';

interface Props {
  onNavigate: (view: ViewState) => void;
}

// Mapeamento das páginas internas para geração rápida
const SITE_PAGES = [
  { id: 'home', title: 'Portal Guia Social', desc: 'Consulta de benefícios e calendário oficial.', url: 'marciobevervanso.com' },
  { id: 'calculator', title: 'Calculadora de Renda', desc: 'Descubra se você tem direito ao Bolsa Família.', url: 'marciobevervanso.com/calculadora' },
  { id: 'guide-bolsa', title: 'Guia Bolsa Família', desc: 'Calendário atualizado e regras de pagamento.', url: 'marciobevervanso.com/bolsa-familia' },
  { id: 'landing-cnh', title: 'CNH Social Gratuita', desc: 'Inscrições abertas em diversos estados.', url: 'marciobevervanso.com/cnh-social' },
  { id: 'landing-mcmv', title: 'Minha Casa Minha Vida', desc: 'Faixa 1 com imóvel gratuito. Veja regras.', url: 'marciobevervanso.com/minha-casa' },
  { id: 'landing-pe-de-meia', title: 'Pé-de-Meia', desc: 'Poupança para estudantes do Ensino Médio.', url: 'marciobevervanso.com/pe-de-meia' },
  { id: 'loans', title: 'Empréstimos', desc: 'Comparativo de crédito para negativados.', url: 'marciobevervanso.com/emprestimos' },
  { id: 'insurance', title: 'Seguro Popular', desc: 'Proteção familiar a partir de R$ 5,00.', url: 'marciobevervanso.com/seguros' },
];

export const SocialPostGenerator: React.FC<Props> = ({ onNavigate }) => {
  const [sourceMode, setSourceMode] = useState<'manual' | 'page'>('manual');
  const [selectedPageId, setSelectedPageId] = useState<string>('');
  
  const [template, setTemplate] = useState<'calendar' | 'breaking' | 'approved' | 'tip' | 'overlay' | 'link-card'>('breaking');
  const [format, setFormat] = useState<'square' | 'story'>('square');
  const [headline, setHeadline] = useState('Bolsa Família: Calendário Liberado');
  const [subtext, setSubtext] = useState('Consulte agora o pagamento pelo final do seu NIS.');
  const [displayUrl, setDisplayUrl] = useState('www.marciobevervanso.com');
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
    switch (template) {
      case 'calendar':
        return (
          <div className="text-center w-full relative z-10">
             <div className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-md rounded-2xl mb-4 border border-white/30 shadow-lg">
                <Calendar size={format === 'story' ? 64 : 48} className="text-white drop-shadow-md" />
             </div>
             <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-md leading-tight">
               {headline}
             </h2>
             <div className="bg-white rounded-xl p-4 mt-4 shadow-xl text-slate-900 text-left w-full max-w-sm mx-auto">
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
             <div className={`inline-block px-4 py-1 rounded-full bg-white text-slate-900 font-bold text-xs uppercase tracking-wider mb-4 shadow-md`}>
                Dica do Dia
             </div>
             <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md mb-6">
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
          <div className="text-center w-full relative z-10 px-6">
             <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-2">
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   <div className="ml-4 bg-white px-3 py-1 rounded-md text-[10px] text-gray-400 flex-grow text-left truncate">
                      https://{displayUrl}
                   </div>
                </div>
                <div className="p-8">
                   <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Globe size={32} />
                   </div>
                   <h2 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
                     {headline}
                   </h2>
                   <p className="text-slate-500 text-sm mb-6">
                      {subtext}
                   </p>
                   <div className={`w-full py-3 rounded-xl font-bold text-white text-sm ${currentTheme.bg}`}>
                      Acessar Agora
                   </div>
                </div>
             </div>
             <div className="mt-8 bg-black/40 backdrop-blur-sm inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-bold">
                <LinkIcon size={16} /> Link na Bio
             </div>
          </div>
        );
      case 'overlay':
        return (
          <div className="text-center w-full h-full flex flex-col justify-end pb-12 relative z-10">
             <div className="bg-gradient-to-t from-black via-black/80 to-transparent absolute inset-0 -z-10"></div>
             <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-xl mb-4 px-4">
               {headline}
             </h2>
             <p className="text-white/90 text-lg px-4 font-medium drop-shadow-md">
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
             <div className={`inline-flex items-center gap-2 ${currentTheme.bg} text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm mb-6 shadow-lg border-2 border-white/20`}>
                <AlertTriangle size={16} /> Urgente
             </div>
             <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
               {headline}
             </h2>
             <div className="mt-8 bg-white/90 backdrop-blur text-slate-800 p-6 rounded-2xl font-medium shadow-2xl max-w-sm mx-auto border-b-4 border-slate-300">
               {subtext}
             </div>
          </div>
        );
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
              <Instagram className="text-pink-500" /> Criador de Posts
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
                    Edição Manual
                 </button>
                 <button 
                   onClick={() => setSourceMode('page')}
                   className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${sourceMode === 'page' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                 >
                    Página do Site
                 </button>
              </div>

              {/* Page Selector (Only visible in page mode) */}
              {sourceMode === 'page' && (
                 <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 animate-fade-in">
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                       <Globe size={14}/> Selecionar Conteúdo
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
                    <p className="text-[10px] text-slate-500 mt-2">
                       O título e descrição serão preenchidos automaticamente.
                    </p>
                 </div>
              )}

              {/* Image Search */}
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                 <label className="block text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                    <ImageIcon size={14}/> Imagem de Fundo (AI/Busca)
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
                    <button onClick={searchImage} className="bg-blue-600 p-2 rounded-lg hover:bg-blue-500 transition-colors"><Search size={18}/></button>
                 </div>
                 {bgImage && (
                    <button onClick={clearImage} className="text-xs text-red-400 hover:text-red-300 underline w-full text-right">
                       Remover Imagem
                    </button>
                 )}
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                 <label className="block text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2"><Layout size={14}/> Modelo</label>
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
                 <input 
                    type="text" 
                    value={displayUrl} 
                    onChange={(e) => setDisplayUrl(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white text-xs focus:border-blue-500 outline-none font-mono"
                    placeholder="URL Visual (ex: marciobevervanso.com)"
                 />
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                 <label className="block text-xs font-bold text-slate-400 uppercase mb-3">Estilo</label>
                 <div className="flex gap-3 mb-4">
                    <button onClick={() => setFormat('square')} className={`flex-1 py-1.5 rounded text-xs font-bold ${format === 'square' ? 'bg-white text-black' : 'bg-slate-700 text-gray-400'}`}>Quadrado</button>
                    <button onClick={() => setFormat('story')} className={`flex-1 py-1.5 rounded text-xs font-bold ${format === 'story' ? 'bg-white text-black' : 'bg-slate-700 text-gray-400'}`}>Story</button>
                 </div>
                 <div className="flex gap-3 justify-center">
                    {Object.keys(themes).map((color) => (
                       <button 
                          key={color} 
                          onClick={() => setAccentColor(color as any)}
                          className={`w-8 h-8 rounded-full border-2 ${
                             color === 'blue' ? 'bg-blue-600' : 
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
           <div className="lg:col-span-8 flex flex-col items-center justify-center bg-black/50 rounded-3xl p-8 border border-slate-800">
              
              <div className="mb-4 text-slate-400 text-sm flex items-center gap-2">
                 <Monitor size={14} /> Preview (Tire um print da área abaixo)
              </div>

              {/* THE IMAGE CANVAS */}
              <div 
                id="social-preview"
                className={`relative overflow-hidden shadow-2xl transition-all duration-500 flex flex-col ${format === 'square' ? 'w-[500px] h-[500px]' : 'w-[360px] h-[640px]'}`}
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

                 {/* Content Container */}
                 <div className="relative z-10 flex flex-col h-full p-8">
                    
                    {/* Header Logo */}
                    <div className="flex justify-center mb-auto pt-4">
                       <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                          <Logo variant="white" showText={true} className="scale-75 origin-center" />
                       </div>
                    </div>

                    {/* Main Dynamic Content */}
                    <div className="my-auto flex items-center justify-center w-full">
                       {renderContent()}
                    </div>

                    {/* Footer */}
                    <div className="mt-auto text-center pt-8">
                       <div className="inline-block bg-white text-brand-dark font-bold px-4 py-2 rounded-lg text-sm shadow-lg">
                          {displayUrl || 'www.marciobevervanso.com'}
                       </div>
                    </div>

                 </div>
              </div>

              <div className="mt-8">
                 <p className="text-xs text-gray-500 text-center">
                    Use a ferramenta de captura de tela do seu dispositivo para salvar a imagem.
                 </p>
              </div>

           </div>

        </div>
      </div>
    </div>
  );
};
