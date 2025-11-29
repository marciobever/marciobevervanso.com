import React, { useState } from 'react';
import { Download, Instagram, Facebook, Monitor, Calendar, CheckCircle2, AlertTriangle, TrendingUp, ArrowLeft } from 'lucide-react';
import { Logo } from '../Logo';
import { ViewState } from '../../types';

interface Props {
  onNavigate: (view: ViewState) => void;
}

export const SocialPostGenerator: React.FC<Props> = ({ onNavigate }) => {
  const [template, setTemplate] = useState<'calendar' | 'breaking' | 'approved'>('breaking');
  const [format, setFormat] = useState<'square' | 'story'>('square');
  const [headline, setHeadline] = useState('Bolsa Família: Calendário Liberado');
  const [subtext, setSubtext] = useState('Consulte agora o pagamento pelo final do seu NIS.');
  const [accentColor, setAccentColor] = useState<'blue' | 'green' | 'red' | 'yellow'>('blue');

  const themes = {
    blue: { bg: 'bg-brand-blue', text: 'text-brand-blue', border: 'border-brand-blue', light: 'bg-blue-50' },
    green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-600', light: 'bg-green-50' },
    red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-600', light: 'bg-red-50' },
    yellow: { bg: 'bg-yellow-500', text: 'text-yellow-600', border: 'border-yellow-500', light: 'bg-yellow-50' },
  };

  const currentTheme = themes[accentColor];

  // Logic to render the content inside the "Image"
  const renderContent = () => {
    switch (template) {
      case 'calendar':
        return (
          <div className="text-center w-full">
             <div className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-md rounded-2xl mb-4 border border-white/30 shadow-lg">
                <Calendar size={format === 'story' ? 64 : 48} className="text-white drop-shadow-md" />
             </div>
             <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-md leading-tight">
               Calendário Oficial
             </h2>
             <div className="bg-white rounded-xl p-4 mt-4 shadow-xl text-slate-900 text-left">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
                   <span className="font-bold text-gray-500">NIS Final 1</span>
                   <span className="font-extrabold text-brand-blue">18/Jan</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
                   <span className="font-bold text-gray-500">NIS Final 2</span>
                   <span className="font-extrabold text-brand-blue">19/Jan</span>
                </div>
                <div className="flex justify-between items-center">
                   <span className="font-bold text-gray-500">NIS Final 3</span>
                   <span className="font-extrabold text-brand-blue">22/Jan</span>
                </div>
             </div>
          </div>
        );
      case 'approved':
        return (
          <div className="text-center w-full">
             <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-white/20">
                <CheckCircle2 size={48} />
             </div>
             <h2 className="text-4xl font-extrabold text-white mb-2 leading-none">
               APROVADO!
             </h2>
             <p className="text-white/90 text-lg font-medium bg-black/20 py-2 rounded-lg mt-2 backdrop-blur-sm">
                Consulte seu CPF Agora
             </p>
          </div>
        );
      case 'breaking':
      default:
        return (
          <div className="text-center w-full">
             <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded-full font-bold uppercase tracking-widest text-sm mb-4 shadow-md animate-pulse">
                <AlertTriangle size={16} /> Urgente
             </div>
             <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
               {headline}
             </h2>
             <div className="mt-6 bg-white/90 backdrop-blur text-slate-800 p-4 rounded-xl font-medium shadow-xl">
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
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                 <label className="block text-xs font-bold text-slate-400 uppercase mb-3">Formato</label>
                 <div className="flex gap-2">
                    <button 
                      onClick={() => setFormat('square')} 
                      className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${format === 'square' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'}`}
                    >
                       <Instagram size={16} /> Feed (1:1)
                    </button>
                    <button 
                      onClick={() => setFormat('story')} 
                      className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${format === 'story' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'}`}
                    >
                       <Monitor size={16} /> Story (9:16)
                    </button>
                 </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                 <label className="block text-xs font-bold text-slate-400 uppercase mb-3">Modelo</label>
                 <div className="space-y-2">
                    <button onClick={() => setTemplate('breaking')} className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium ${template === 'breaking' ? 'bg-blue-600/20 text-blue-400 border border-blue-600' : 'bg-slate-700 text-slate-300'}`}>🚨 Notícia Urgente</button>
                    <button onClick={() => setTemplate('calendar')} className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium ${template === 'calendar' ? 'bg-blue-600/20 text-blue-400 border border-blue-600' : 'bg-slate-700 text-slate-300'}`}>📅 Calendário</button>
                    <button onClick={() => setTemplate('approved')} className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium ${template === 'approved' ? 'bg-blue-600/20 text-blue-400 border border-blue-600' : 'bg-slate-700 text-slate-300'}`}>✅ Aprovado</button>
                 </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                 <label className="block text-xs font-bold text-slate-400 uppercase mb-3">Personalizar Texto</label>
                 <input 
                    type="text" 
                    value={headline} 
                    onChange={(e) => setHeadline(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white mb-3 focus:border-blue-500 outline-none"
                    placeholder="Título Principal"
                 />
                 <textarea 
                    value={subtext} 
                    onChange={(e) => setSubtext(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-blue-500 outline-none h-24 resize-none"
                    placeholder="Subtítulo ou descrição"
                 />
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                 <label className="block text-xs font-bold text-slate-400 uppercase mb-3">Cor de Fundo</label>
                 <div className="flex gap-3">
                    {Object.keys(themes).map((color) => (
                       <button 
                          key={color} 
                          onClick={() => setAccentColor(color as any)}
                          className={`w-8 h-8 rounded-full border-2 ${color === 'blue' ? 'bg-blue-600' : color === 'green' ? 'bg-green-600' : color === 'red' ? 'bg-red-600' : 'bg-yellow-500'} ${accentColor === color ? 'border-white scale-110' : 'border-transparent opacity-50'}`}
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
                 {/* Background */}
                 <div className={`absolute inset-0 ${currentTheme.bg} transition-colors duration-300`}></div>
                 <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60"></div>
                 {/* Pattern */}
                 <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                 {/* Content Container */}
                 <div className="relative z-10 flex flex-col h-full p-8">
                    
                    {/* Header Logo */}
                    <div className="flex justify-center mb-auto pt-4">
                       <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                          <Logo variant="white" showText={true} className="scale-75 origin-center" />
                       </div>
                    </div>

                    {/* Main Dynamic Content */}
                    <div className="my-auto flex items-center justify-center">
                       {renderContent()}
                    </div>

                    {/* Footer */}
                    <div className="mt-auto text-center pt-8">
                       <div className="inline-block bg-white text-brand-dark font-bold px-4 py-2 rounded-lg text-sm shadow-lg">
                          www.marciobevervanso.com
                       </div>
                    </div>

                 </div>
              </div>

              <div className="mt-8 flex gap-4">
                 <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors">
                    <Download size={18} /> (Use PrintScreen ou Ferramenta de Captura)
                 </button>
              </div>

           </div>

        </div>
      </div>
    </div>
  );
};