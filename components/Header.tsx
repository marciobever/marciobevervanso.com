import React, { useState, useRef } from 'react';
import { Menu, X, CreditCard, Shield, Scale, Wallet, Home, CalendarClock, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { ViewState } from '../types';
import { ConsultationModal } from './ConsultationModal';

interface HeaderProps {
  onNavigate: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  
  // Easter Egg State
  const [logoClicks, setLogoClicks] = useState(0);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, view: ViewState) => {
    e.preventDefault(); // Prevent default anchor behavior
    onNavigate(view);
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    const newCount = logoClicks + 1;
    setLogoClicks(newCount);

    if (newCount >= 5) {
      onNavigate('secret-menu');
      setLogoClicks(0);
      return;
    }

    clickTimeoutRef.current = setTimeout(() => {
      setLogoClicks(0);
    }, 2000);

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
            
            {/* Semantic H1 for Logo with Link */}
            <h1>
              <a 
                href="/" 
                className="cursor-pointer hover:opacity-95 transition-opacity select-none active:scale-95 transform duration-100 block" 
                onClick={handleLogoClick}
                title="Voltar para Página Inicial"
                aria-label="Guia Social Brasil - Página Inicial"
              >
                <Logo />
              </a>
            </h1>

            {/* Desktop Navigation - Semantic Links */}
            <nav role="navigation" aria-label="Menu Principal" className="hidden md:flex items-center gap-1 lg:gap-1.5 xl:gap-2">
              <a 
                href="/beneficios" 
                onClick={(e) => handleNav(e, 'all-benefits')} 
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-brand-medium hover:text-brand-blue hover:bg-blue-50 font-semibold text-sm transition-all"
                aria-label="Ir para lista completa de benefícios"
              >
                  <Home size={16} aria-hidden="true" /> Benefícios
              </a>
              <a 
                href="/estados" 
                onClick={(e) => handleNav(e, 'benefits-by-state')} 
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-brand-medium hover:text-brand-blue hover:bg-blue-50 font-semibold text-sm transition-all"
                aria-label="Ver benefícios por estado"
              >
                  <MapPin size={16} aria-hidden="true" /> Por Estado
              </a>
              <a 
                href="#calendarios" 
                onClick={(e) => handleNav(e, 'calendarios')} 
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-brand-medium hover:text-brand-blue hover:bg-blue-50 font-semibold text-sm transition-all"
                aria-label="Ver calendários de pagamento"
              >
                  <CalendarClock size={16} aria-hidden="true" /> Calendários
              </a>
              <a 
                href="#cartoes" 
                onClick={(e) => handleNav(e, 'cards')} 
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-brand-medium hover:text-brand-blue hover:bg-blue-50 font-semibold text-sm transition-all"
                aria-label="Ver opções de cartões de crédito"
              >
                  <CreditCard size={16} aria-hidden="true" /> Cartões
              </a>
              <a 
                href="#comparar" 
                onClick={(e) => handleNav(e, 'comparativo')} 
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-brand-medium hover:text-brand-blue hover:bg-blue-50 font-semibold text-sm transition-all"
                aria-label="Comparar benefícios sociais"
              >
                  <Scale size={16} aria-hidden="true" /> Comparar
              </a>
              
              <div className="h-6 w-px bg-gray-200 mx-1" role="separator"></div>

              <button 
                onClick={() => setIsConsultationOpen(true)}
                className="bg-brand-blue hover:bg-brand-hover text-white px-4 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-brand-blue/20 transform hover:-translate-y-0.5 flex items-center gap-2"
                aria-label="Abrir modal de consulta de CPF"
              >
                <Wallet size={16} aria-hidden="true" /> Consultar
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-brand-medium focus:outline-none p-2 rounded-lg hover:bg-gray-50"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fechar Menu de Navegação" : "Abrir Menu de Navegação"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl animate-fade-in-down h-screen pb-20 overflow-y-auto">
            <nav role="navigation" aria-label="Menu Mobile" className="flex flex-col p-6 space-y-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Categorias</h3>
              
              <a href="/beneficios" onClick={(e) => handleNav(e, 'all-benefits')} className="flex items-center gap-3 text-brand-dark font-medium py-3 border-b border-gray-50">
                  <Home className="text-brand-blue" aria-hidden="true" /> Todos os Benefícios
              </a>
              <a href="/estados" onClick={(e) => handleNav(e, 'benefits-by-state')} className="flex items-center gap-3 text-brand-dark font-medium py-3 border-b border-gray-50">
                  <MapPin className="text-brand-blue" aria-hidden="true" /> Benefícios por Estado
              </a>
              <a href="#calendarios" onClick={(e) => handleNav(e, 'calendarios')} className="flex items-center gap-3 text-brand-dark font-medium py-3 border-b border-gray-50">
                  <CalendarClock className="text-brand-blue" aria-hidden="true" /> Calendários de Pagamento
              </a>
              <a href="#cartoes" onClick={(e) => handleNav(e, 'cards')} className="flex items-center gap-3 text-brand-dark font-medium py-3 border-b border-gray-50">
                  <CreditCard className="text-purple-600" aria-hidden="true" /> Cartões de Crédito
              </a>
              <a href="#seguros" onClick={(e) => handleNav(e, 'insurance')} className="flex items-center gap-3 text-brand-dark font-medium py-3 border-b border-gray-50">
                  <Shield className="text-green-600" aria-hidden="true" /> Seguros Baratos
              </a>
              <a href="#comparar" onClick={(e) => handleNav(e, 'comparativo')} className="flex items-center gap-3 text-brand-dark font-medium py-3 border-b border-gray-50">
                  <Scale className="text-orange-600" aria-hidden="true" /> Comparativo
              </a>

              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-6 mb-2">Ferramentas</h3>
              
              <button 
                onClick={() => { setIsMenuOpen(false); setIsConsultationOpen(true); }} 
                className="bg-brand-blue text-white w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                aria-label="Consultar CPF Grátis agora"
              >
                <Wallet size={20} aria-hidden="true" /> Consultar CPF Grátis
              </button>
            </nav>
          </div>
        )}
      </header>
      
      {/* Global Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
        onNavigate={(view: ViewState) => { setIsConsultationOpen(false); onNavigate(view); }}
      />
    </>
  );
};

export default Header;