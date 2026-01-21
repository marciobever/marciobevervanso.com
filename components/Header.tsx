
import React, { useState, useRef } from 'react';
import { Menu, X, CreditCard, Shield, ChevronDown, Home, CalendarClock, MapPin, Calculator, BookOpen, FileText, Wallet, Zap, PlayCircle } from 'lucide-react';
import { Logo } from './Logo';
import { ViewState } from '../types';
import { ConsultationModal } from './ConsultationModal';
import { VIRAL_STORIES } from './web-stories/story-data';

interface HeaderProps {
  onNavigate: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Mobile Accordion State
  const [isBenefitsAccordionOpen, setIsBenefitsAccordionOpen] = useState(true);

  // Easter Egg State
  const [logoClicks, setLogoClicks] = useState(0);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, view: ViewState) => {
    e.preventDefault();
    onNavigate(view);
    setIsMenuOpen(false);
  };

  const handleScrollToStories = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('web-stories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Se não estiver na home, navega para home primeiro
      onNavigate('home');
      // Pequeno timeout para dar tempo de renderizar a home
      setTimeout(() => {
        document.getElementById('web-stories')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    const newCount = logoClicks + 1;
    setLogoClicks(newCount);
    if (newCount >= 5) {
      onNavigate('secret-menu');
      setLogoClicks(0);
      return;
    }
    clickTimeoutRef.current = setTimeout(() => setLogoClicks(0), 2000);
    if (newCount === 1) {
      onNavigate('home');
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header role="banner" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <h1>
              <a
                href="/"
                className="cursor-pointer hover:opacity-95 transition-opacity select-none active:scale-95 transform duration-100 block"
                onClick={handleLogoClick}
                title="Voltar para Página Inicial"
              >
                <Logo />
              </a>
            </h1>

            {/* Desktop Navigation - MEGA MENUS */}
            <nav role="navigation" className="hidden md:flex items-center gap-1 lg:gap-2">

              {/* Mega Menu: Web Stories (NEW) */}
              <div className="group relative">
                <button
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-brand-dark hover:text-pink-600 font-bold text-sm transition-all group-hover:bg-pink-50"
                  onClick={handleScrollToStories}
                >
                  <Zap size={16} className="text-pink-500 fill-current" /> Web Stories <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                </button>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-4 z-50">
                  <div className="flex items-center justify-between mb-3 px-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1"><PlayCircle size={12} /> Destaques Visuais</span>
                    <span className="text-[10px] text-pink-500 font-bold bg-pink-50 px-2 py-0.5 rounded-full">Novo</span>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {VIRAL_STORIES.slice(0, 4).map((story) => (
                      <div
                        key={story.id}
                        onClick={handleScrollToStories}
                        className="group/story cursor-pointer"
                      >
                        <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden mb-2 shadow-sm border border-gray-100 group-hover/story:shadow-md transition-all">
                          <img src={story.thumbnail} alt={story.title} className="w-full h-full object-cover transform group-hover/story:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-black/20 group-hover/story:bg-transparent transition-colors"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-1.5 rounded-full text-white opacity-0 group-hover/story:opacity-100 transition-opacity transform scale-0 group-hover/story:scale-100">
                            <PlayCircle size={20} fill="currentColor" />
                          </div>
                        </div>
                        <p className="text-[10px] font-bold text-center text-slate-700 leading-tight group-hover/story:text-pink-600 transition-colors line-clamp-2">
                          {story.title}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-2 border-t border-gray-50 text-center">
                    <button onClick={handleScrollToStories} className="text-xs font-bold text-brand-blue hover:underline">Ver todas as histórias →</button>
                  </div>
                </div>
              </div>

              {/* Mega Menu: Benefícios */}
              <div className="group relative">
                <button
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-brand-dark hover:text-brand-blue font-bold text-sm transition-all group-hover:bg-blue-50"
                >
                  <Home size={16} /> Benefícios <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                </button>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-6 z-50">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Coluna 1: Programas */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <BookOpen size={14} /> Programas Sociais
                      </h4>
                      <ul className="space-y-2">
                        <li><a href="/guia-bolsa-familia" onClick={(e) => handleNav(e, 'guide-bolsa')} className="block p-2 rounded-lg hover:bg-blue-50 text-sm font-medium text-slate-700 hover:text-brand-blue transition-colors">Bolsa Família</a></li>
                        <li><a href="/guia-bpc" onClick={(e) => handleNav(e, 'guide-bpc')} className="block p-2 rounded-lg hover:bg-blue-50 text-sm font-medium text-slate-700 hover:text-brand-blue transition-colors">BPC / LOAS</a></li>
                        <li><a href="/cnh-social-2026" onClick={(e) => handleNav(e, 'landing-cnh')} className="block p-2 rounded-lg hover:bg-blue-50 text-sm font-medium text-slate-700 hover:text-brand-blue transition-colors">CNH Social Gratuita</a></li>
                        <li><a href="/landing-pe-de-meia" onClick={(e) => handleNav(e, 'landing-pe-de-meia')} className="block p-2 rounded-lg hover:bg-blue-50 text-sm font-medium text-slate-700 hover:text-brand-blue transition-colors">Pé-de-Meia (Estudante)</a></li>
                        <li><a href="/minha-casa-minha-vida" onClick={(e) => handleNav(e, 'landing-mcmv')} className="block p-2 rounded-lg hover:bg-blue-50 text-sm font-medium text-slate-700 hover:text-brand-blue transition-colors">Minha Casa Minha Vida</a></li>
                      </ul>
                    </div>

                    {/* Coluna 2: Ferramentas e Regionais */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Calculator size={14} /> Ferramentas Úteis
                      </h4>
                      <ul className="space-y-2 mb-6">
                        <li>
                          <a href="/calendarios" onClick={(e) => handleNav(e, 'calendarios')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 group/item transition-colors">
                            <div className="bg-green-100 text-green-700 p-1.5 rounded-md group-hover/item:bg-green-200"><CalendarClock size={16} /></div>
                            <span className="text-sm font-bold text-slate-700 group-hover/item:text-green-800">Calendários 2026</span>
                          </a>
                        </li>
                        <li>
                          <a href="/calculadora" onClick={(e) => handleNav(e, 'calculator')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 group/item transition-colors">
                            <div className="bg-blue-100 text-brand-blue p-1.5 rounded-md group-hover/item:bg-blue-200"><Calculator size={16} /></div>
                            <span className="text-sm font-bold text-slate-700 group-hover/item:text-brand-blue">Calculadora de Renda</span>
                          </a>
                        </li>
                        <li>
                          <a href="/estados" onClick={(e) => handleNav(e, 'benefits-by-state')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 group/item transition-colors">
                            <div className="bg-orange-100 text-orange-700 p-1.5 rounded-md group-hover/item:bg-orange-200"><MapPin size={16} /></div>
                            <span className="text-sm font-bold text-slate-700 group-hover/item:text-orange-800">Benefícios por Estado</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-2xl border-t border-gray-100 flex justify-between items-center mt-2">
                    <p className="text-xs text-slate-500 ml-2">Dados atualizados com o Diário Oficial da União.</p>
                    <a href="/beneficios" onClick={(e) => handleNav(e, 'all-benefits')} className="text-xs font-bold text-brand-blue hover:underline mr-2">Ver tudo →</a>
                  </div>
                </div>
              </div>

              <a
                href="#cartoes"
                onClick={(e) => handleNav(e, 'cards')}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-brand-medium hover:text-purple-600 hover:bg-purple-50 font-semibold text-sm transition-all"
              >
                <CreditCard size={16} /> Cartões
              </a>
              <a
                href="#seguros"
                onClick={(e) => handleNav(e, 'insurance')}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-brand-medium hover:text-green-600 hover:bg-green-50 font-semibold text-sm transition-all"
              >
                <Shield size={16} /> Seguros
              </a>
              <a
                href="/noticias"
                onClick={(e) => handleNav(e, 'news')}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-brand-medium hover:text-brand-blue hover:bg-blue-50 font-semibold text-sm transition-all"
              >
                <FileText size={16} /> Notícias
              </a>

              <div className="h-6 w-px bg-gray-200 mx-2"></div>

              <button
                onClick={() => setIsConsultationOpen(true)}
                className="bg-brand-blue hover:bg-brand-hover text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-brand-blue/20 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Wallet size={16} /> Consultar CPF
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-brand-dark p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl animate-fade-in-down h-[calc(100vh-80px)] overflow-y-auto pb-20">
            <nav className="flex flex-col p-4 space-y-2">

              {/* Web Stories Carousel on Mobile Menu */}
              <div className="mb-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2 px-1">
                  <Zap size={14} className="text-pink-500 fill-current" /> Web Stories
                </h4>
                <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                  {VIRAL_STORIES.map(story => (
                    <div
                      key={story.id}
                      onClick={handleScrollToStories}
                      className="flex-shrink-0 w-20 flex flex-col items-center gap-1 cursor-pointer"
                    >
                      <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 to-purple-500">
                        <img src={story.thumbnail} alt="" className="w-full h-full object-cover rounded-full border-2 border-white" />
                      </div>
                      <span className="text-[10px] text-center font-medium leading-tight line-clamp-2 w-full">{story.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accordion Benefícios */}
              <div className="border border-gray-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setIsBenefitsAccordionOpen(!isBenefitsAccordionOpen)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 text-brand-dark font-bold"
                >
                  <span className="flex items-center gap-2"><Home size={18} className="text-brand-blue" /> Benefícios Sociais</span>
                  <ChevronDown size={18} className={`transition-transform ${isBenefitsAccordionOpen ? 'rotate-180' : ''}`} />
                </button>

                {isBenefitsAccordionOpen && (
                  <div className="bg-white p-2 space-y-1">
                    <a href="/guia-bolsa-familia" onClick={(e) => handleNav(e, 'guide-bolsa')} className="block p-3 rounded-xl hover:bg-blue-50 text-sm text-slate-600 font-medium">👉 Bolsa Família</a>
                    <a href="/guia-bpc" onClick={(e) => handleNav(e, 'guide-bpc')} className="block p-3 rounded-xl hover:bg-blue-50 text-sm text-slate-600 font-medium">👉 BPC / LOAS</a>
                    <a href="/calendarios" onClick={(e) => handleNav(e, 'calendarios')} className="block p-3 rounded-xl hover:bg-green-50 text-sm text-green-700 font-bold bg-green-50/30">📅 Calendários 2026</a>
                    <a href="/estados" onClick={(e) => handleNav(e, 'benefits-by-state')} className="block p-3 rounded-xl hover:bg-orange-50 text-sm text-orange-700 font-bold bg-orange-50/30">📍 Por Estado</a>
                    <a href="/calculadora" onClick={(e) => handleNav(e, 'calculator')} className="block p-3 rounded-xl hover:bg-blue-50 text-sm text-blue-700 font-bold bg-blue-50/30">🧮 Calculadora de Renda</a>
                  </div>
                )}
              </div>

              <a href="#cartoes" onClick={(e) => handleNav(e, 'cards')} className="flex items-center gap-3 text-brand-dark font-bold p-4 border border-gray-100 rounded-2xl hover:bg-purple-50 hover:border-purple-100 hover:text-purple-700 transition-colors">
                <CreditCard size={20} /> Cartões de Crédito
              </a>
              <a href="#seguros" onClick={(e) => handleNav(e, 'insurance')} className="flex items-center gap-3 text-brand-dark font-bold p-4 border border-gray-100 rounded-2xl hover:bg-green-50 hover:border-green-100 hover:text-green-700 transition-colors">
                <Shield size={20} /> Seguros Populares
              </a>
              <a href="/noticias" onClick={(e) => handleNav(e, 'news')} className="flex items-center gap-3 text-brand-dark font-bold p-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
                <FileText size={20} /> Notícias Oficiais
              </a>

              <div className="pt-6">
                <button
                  onClick={() => { setIsMenuOpen(false); setIsConsultationOpen(true); }}
                  className="bg-brand-blue text-white w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  <Wallet size={20} /> Consultar CPF Grátis
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onNavigate={(view: ViewState) => { setIsConsultationOpen(false); onNavigate(view); }}
      />
    </>
  );
};

export default Header;
