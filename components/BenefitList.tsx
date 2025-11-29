import React from 'react';
import { IconHelper } from './IconHelper';
import { ArrowUpRight } from 'lucide-react';
import { ViewState } from '../types';

interface BenefitItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
  route: ViewState;
}

interface Props {
  onNavigate?: (view: ViewState) => void;
}

const BENEFIT_GRID: BenefitItem[] = [
  { id: 'bolsa', title: 'Bolsa Família', desc: 'Renda mensal para famílias.', icon: 'Wallet', route: 'guide-bolsa' },
  { id: 'bpc', title: 'BPC / LOAS', desc: 'Salário mínimo para idosos e PcD.', icon: 'Accessibility', route: 'guide-bpc' },
  { id: 'gas', title: 'Auxílio Gás', desc: 'Ajuda bimestral para cozinha.', icon: 'Flame', route: 'guide-bolsa' },
  { id: 'energia', title: 'Tarifa Social', desc: 'Desconto na conta de luz.', icon: 'Zap', route: 'calculator' },
  { id: 'pe', title: 'Pé-de-Meia', desc: 'Incentivo para estudantes.', icon: 'GraduationCap', route: 'landing-pe-de-meia' },
  { id: 'cnh', title: 'CNH Social', desc: 'Habilitação Gratuita.', icon: 'Car', route: 'landing-cnh' },
];

const BenefitList: React.FC<Props> = ({ onNavigate }) => {
  
  const handleViewAll = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('all-benefits');
    }
  };

  const handleCardClick = (e: React.MouseEvent, route: ViewState) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(route);
    }
  };

  return (
    <section id="beneficios" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-2 block">Governo Federal</span>
            <h2 className="text-3xl font-extrabold text-brand-dark">Principais Benefícios do Brasil</h2>
          </div>
          <button 
            onClick={handleViewAll} 
            className="text-brand-medium hover:text-brand-blue text-sm font-medium border-b border-gray-300 hover:border-brand-blue pb-0.5 transition-colors"
          >
            Ver lista completa
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFIT_GRID.map((item) => (
            <div 
              key={item.id} 
              onClick={(e) => handleCardClick(e, item.route)}
              role="button"
              tabIndex={0}
              className="group bg-brand-light rounded-2xl p-6 border border-gray-100 hover:border-brand-blue/30 hover:shadow-soft transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-4 right-4 text-gray-300 group-hover:text-brand-blue transition-colors">
                <ArrowUpRight size={20} />
              </div>
              
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-blue mb-4">
                <IconHelper name={item.icon} className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">{item.title}</h3>
              <p className="text-brand-medium text-sm mb-4">{item.desc}</p>
              
              <div className="inline-block bg-white text-brand-dark text-xs font-bold px-3 py-1.5 rounded-lg border border-gray-200 group-hover:border-brand-blue group-hover:text-brand-blue transition-colors">
                Acessar Guia
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitList;