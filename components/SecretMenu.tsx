
import React, { useState } from 'react';
import { ViewState } from '../types';
import { ShieldAlert, ExternalLink, BarChart3, LayoutDashboard, FileText, ArrowLeft, CreditCard, Shield, Instagram, Globe, Lock, Key, Image as ImageIcon } from 'lucide-react';

interface SecretMenuProps {
  onNavigate: (view: ViewState) => void;
}

const SecretMenu: React.FC<SecretMenuProps> = ({ onNavigate }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'marciobever' && password === '102030') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Credenciais inválidas.');
    }
  };

  const broadcasts = [
    { label: 'Bolsa Família 2026 (LP)', view: 'landing-bolsa-comparativo', url: '/bolsa-familia-2026-calendario-regras-valores' },
    { label: 'Minha Casa Minha Vida (LP)', view: 'landing-mcmv', url: '/minha-casa-minha-vida-2026-comparativo-faixas-beneficios' },
    { label: 'Dentista / Brasil Sorridente (LP)', view: 'landing-dentista', url: '/dentista-gratuito-sus-quiz-prioridade' },
    { label: 'CNH Social (LP)', view: 'landing-cnh', url: '/cnh-social-2026' },
    { label: 'Pé-de-Meia (LP)', view: 'landing-pe-de-meia', url: '/beneficio-pe-de-meia-2026-guia-completo' },
  ];

  const highConversion = [
    { label: 'Cartão Negativado (LP)', view: 'landing-cards-negativado', url: '/cartao-credito-para-negativado-2026-lista-facil', icon: CreditCard, color: 'text-purple-400' },
    { label: 'Cartão Limite Alto (LP)', view: 'landing-cards-limite', url: '/ranking-cartoes-limite-alto-aprovacao-imediata', icon: CreditCard, color: 'text-yellow-400' },
    { label: 'Seguro Dívida/Prestamista (LP)', view: 'landing-seguro-divida', url: '/lei-protege-herdeiros-seguro-quita-dividas', icon: Shield, color: 'text-blue-400' },
    { label: 'Seguro Vida Popular (LP)', view: 'landing-seguro-vida', url: '/seguro-vida-popular-auxilio-funeral-5-reais', icon: Shield, color: 'text-green-400' },
  ];

  const adminTools = [
    { label: 'Kit Social (Face/Insta)', view: 'admin-social', icon: ImageIcon, color: 'text-pink-500' },
    { label: 'SEO Tools (Sitemap)', view: 'admin-seo', icon: Globe, color: 'text-blue-400' },
    { label: 'Analytics Dashboard', view: 'analytics', icon: BarChart3, color: 'text-orange-400' },
    { label: 'Criador de Quiz (IA)', view: 'dashboard', icon: LayoutDashboard, color: 'text-green-400' },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex p-4 bg-slate-700 rounded-full mb-4 text-blue-400">
              <Lock size={32} />
            </div>
            <h1 className="text-2xl font-bold text-white">Acesso Restrito</h1>
            <p className="text-slate-400 text-sm mt-2">Área administrativa do portal.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Usuário</label>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-600 rounded-xl py-3 pl-10 pr-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                  placeholder="Seu usuário"
                />
                <ShieldAlert className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Senha</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-600 rounded-xl py-3 pl-10 pr-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                  placeholder="••••••"
                />
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              </div>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-2 rounded-lg text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-900/20"
            >
              Entrar no Painel
            </button>

            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="w-full text-slate-500 hover:text-white text-sm py-2 transition-colors"
            >
              Voltar ao Site
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">

        <div className="flex items-center justify-between mb-12 border-b border-slate-700 pb-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-500/10 p-3 rounded-xl border border-green-500/20">
              <ShieldAlert className="text-green-500" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Menu Secreto (Admin)</h1>
              <p className="text-slate-400 text-sm">Bem-vindo, {username}.</p>
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
          </div>

        </div>

      </div>
    </div>
  );
};

export default SecretMenu;
