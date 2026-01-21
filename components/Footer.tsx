
import React from 'react';
import { Logo } from './Logo';
import { ViewState } from '../types';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, view: ViewState) => {
    e.preventDefault();
    onNavigate(view);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-brand-light border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="mb-2">
              <Logo />
            </div>
            <p className="text-sm text-brand-medium leading-relaxed max-w-xs">
              Portal independente focado em democratizar a informação sobre benefícios sociais e cidadania no Brasil. Conteúdo revisado e confiável.
            </p>
          </div>

          {/* Column 2: Guides */}
          <div>
            <h4 className="text-brand-dark font-bold mb-6">Guias Rápidos</h4>
            <ul className="space-y-3 text-sm text-brand-medium">
              <li>
                <button onClick={(e) => handleLinkClick(e, 'all-benefits')} className="hover:text-brand-blue hover:underline transition-colors text-left">
                  Benefícios Sociais
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(e, 'guide-bolsa')} className="hover:text-brand-blue hover:underline transition-colors text-left">
                  Guia Bolsa Família
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(e, 'calendarios')} className="hover:text-brand-blue hover:underline transition-colors text-left">
                  Calendários de Pagamento
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(e, 'landing-cnh')} className="hover:text-brand-blue hover:underline transition-colors text-left">
                  CNH Social Gratuita
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(e, 'quizzes')} className="hover:text-brand-blue hover:underline transition-colors text-left">
                  Quiz de Elegibilidade
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-brand-dark font-bold mb-6">Legal & Contato</h4>
            <ul className="space-y-3 text-sm text-brand-medium">
              <li>
                <button onClick={(e) => handleLinkClick(e, 'legal')} className="hover:text-brand-blue hover:underline transition-colors text-left">
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(e, 'legal')} className="hover:text-brand-blue hover:underline transition-colors text-left">
                  Termos de Uso
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(e, 'legal')} className="hover:text-brand-blue hover:underline transition-colors text-left">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(e, 'chat')} className="hover:text-brand-blue hover:underline transition-colors text-left">
                  Fale Conosco (IA)
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-medium">
          <p>&copy; {new Date().getFullYear()} Guia Social. Todos os direitos reservados.</p>
          <p>Não possuímos vínculo com o Governo Federal.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
