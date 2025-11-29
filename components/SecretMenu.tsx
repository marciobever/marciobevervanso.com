import React from 'react';
import { ViewState } from '../types';
import { ShieldAlert, ExternalLink, BarChart3, LayoutDashboard, FileText, ArrowLeft, CreditCard, Shield, Instagram, Globe } from 'lucide-react';

interface SecretMenuProps {
  onNavigate: (view: ViewState) => void;
}

const SecretMenu: React.FC<SecretMenuProps> = ({ onNavigate }) => {
  const broadcasts = [
    { label: 'Minha Casa Minha Vida (LP)', view: 'landing-mcmv', url: '/minha-casa-minha-vida-2025-comparativo-faixas-beneficios' },
    { label: 'Dentista / Brasil Sorridente (LP)', view: 'landing-dentista', url: '/dentista-gratuito-sus-quiz-prioridade' },
    { label: 'CNH Social (LP)', view: 'landing-cnh', url: '/cnh-social-2025' },
    { label: 'Pé-de-Meia (LP)', view: 'landing-pe-de-meia', url: '/beneficio-pe-de-meia-2025-guia-completo' },
  ];

  const highConversion = [
    { label: 'Cartão Negativado (LP)', view: 'landing-cards-negativado', url: '/cartao-credito-para-negativado-2025-lista-facil', icon: CreditCard, color: 'text-purple-400' },
    { label: 'Cartão Limite Alto (LP)', view: 'landing-cards-limite', url: '/ranking-cartoes-limite-alto-aprovacao-imediata', icon: CreditCard, color: 'text-yellow-400' },
    { label: 'Seguro Dívida/Prestamista (LP)', view: 'landing-seguro-divida', url: '/lei-protege-herdeiros-seguro-quita-dividas', icon: Shield, color: 'text-blue-400' },
    { label: 'Seguro Vida Popular (LP)', view: 'landing-seguro-vida', url: '/seguro-vida-popular-auxilio-funeral-5-reais', icon: Shield, color: 'text-green-400' },
  ];

  const adminTools = [
    { label: 'Social Post Maker', view: 'admin-social', icon: Instagram, color: 'text-pink-500' },
    { label: 'SEO Tools (Sitemap)', view: 'admin-seo', icon: Globe, color: 'text-blue-400' },
    { label: 'Analytics Dashboard', view: 'analytics', icon: BarChart3, color: 'text-orange-400' },
    { label: 'Criador de Quiz (IA)', view: 'dashboard', icon: LayoutDashboard, color: 'text-green-400' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex items-center justify-between mb-12 border-b border-slate-700 pb-6">
          <div className="flex items-center gap-4">
            <div className="bg-red-500/10 p-3 rounded-xl border border-red-500/20">
              <ShieldAlert className="text-red-500" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Menu Secreto (Admin)</h1>
              <p className="text-slate-400 text-sm">Acesso restrito a páginas ocultas e ferramentas.</p>
            </div>
          </div>
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors border border-slate-700 hover:border-slate-500 px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={18} /> Sair
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Column 1: LPs */}
          <div className="space-y-8">
            
            {/* Gov Broadcasts */}
            <div>
              <h2 className="text-lg font-bold text-blue-400 mb-6 flex items-center gap-2 uppercase tracking-wider text-xs">
                <FileText size={16} /> Broadcasts Governamentais
              </h2>
              <div className="space-y-3">
                {broadcasts.map((item, idx) => (
                  <div key={idx} className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-blue-500 transition-all group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-200">{item.label}</span>
                      <button 
                        onClick={() => onNavigate(item.view as ViewState)}
                        className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-1.5 rounded-md font-bold transition-colors"
                      >
                        Visualizar
                      </button>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono bg-slate-900/50 p-2 rounded truncate">
                      <span className="truncate flex-grow">{item.url}</span>
                      <ExternalLink size={12} className="shrink-0 opacity-50" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* High Conversion (Ads) */}
            <div>
              <h2 className="text-lg font-bold text-yellow-400 mb-6 flex items-center gap-2 uppercase tracking-wider text-xs">
                <CreditCard size={16} /> LPs Alta Conversão (Ads)
              </h2>
              <div className="space-y-3">
                {highConversion.map((item, idx) => (
                  <div key={idx} className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-yellow-500 transition-all group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-200 flex items-center gap-2">
                        <item.icon size={16} className={item.color} /> {item.label}
                      </span>
                      <button 
                        onClick={() => onNavigate(item.view as ViewState)}
                        className="bg-yellow-600 hover:bg-yellow-500 text-white text-xs px-3 py-1.5 rounded-md font-bold transition-colors"
                      >
                        Visualizar
                      </button>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono bg-slate-900/50 p-2 rounded truncate">
                      <span className="truncate flex-grow">{item.url}</span>
                      <ExternalLink size={12} className="shrink-0 opacity-50" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Admin Tools */}
          <div>
            <h2 className="text-lg font-bold text-green-400 mb-6 flex items-center gap-2 uppercase tracking-wider text-xs">
               Ferramentas de Gestão
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {adminTools.map((tool, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate(tool.view as ViewState)}
                  className="bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-green-500/50 p-6 rounded-xl flex items-center gap-4 transition-all text-left group"
                >
                  <div className="bg-slate-900 p-4 rounded-full group-hover:scale-110 transition-transform">
                    <tool.icon size={24} className={tool.color} />
                  </div>
                  <div>
                    <span className="block font-bold text-lg text-white">{tool.label}</span>
                    <span className="text-slate-400 text-sm">Acessar painel</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 bg-slate-800/50 border border-slate-700 rounded-xl p-6">
               <h3 className="text-slate-300 font-bold mb-2 text-sm">Dica de Uso</h3>
               <p className="text-slate-500 text-sm leading-relaxed">
                 Para acessar este menu novamente a qualquer momento, clique <strong>5 vezes</strong> consecutivas na logo "Marcio Bevervanso" no topo do site.
               </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SecretMenu;