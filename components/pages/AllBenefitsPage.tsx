import React, { useEffect, useState } from 'react';
import { BENEFITS_DATA } from '../../constants';
import { IconHelper } from '../IconHelper';
import { AdSlot } from '../AdSlot';
import { Search, Filter, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Benefit, ViewState } from '../../types';

interface Props {
  onNavigate: (view: ViewState) => void;
}

export const AllBenefitsPage: React.FC<Props> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Otimização de SEO
  useEffect(() => {
    document.title = "Lista Completa de Benefícios Sociais 2025 | Guia Oficial";
    window.scrollTo(0,0);
  }, []);

  const categories = ['Todos', 'Renda', 'Saúde', 'Educação', 'Habitação'];

  const filteredBenefits = BENEFITS_DATA.filter(b => {
    const matchesCategory = filter === 'Todos' || b.category === filter;
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          b.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLearnMore = (benefitId: string) => {
      // Mapeamento explícito para garantir que o usuário vá para o guia correto
      switch (benefitId) {
        case 'bolsa-familia':
        case 'gas':
          onNavigate('guide-bolsa');
          break;
        case 'bpc-loas':
          onNavigate('guide-bpc');
          break;
        case 'cnh-social':
          onNavigate('landing-cnh');
          break;
        case 'pe-de-meia': 
          onNavigate('landing-pe-de-meia');
          break;
        case 'id-jovem':
          onNavigate('guide-idjovem');
          break;
        case 'tarifa-social':
          onNavigate('calculator'); 
          break;
        case 'kit-antena':
          onNavigate('guide-antena');
          break;
        case 'pis-pasep':
          onNavigate('guide-pis');
          break;
        case 'farmacia-popular':
          onNavigate('guide-farmacia');
          break;
        default:
          // Se não houver guia específico, leva para a verificação de elegibilidade
          onNavigate('quizzes');
          break;
      }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <header className="mb-10 text-center max-w-3xl mx-auto">
           <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
             Todos os Benefícios Sociais
           </h1>
           <p className="text-lg text-slate-600">
             Explore o catálogo completo de programas governamentais. Utilize os filtros para encontrar o auxílio ideal para o seu perfil.
           </p>
        </header>

        <AdSlot id="Content1" label="Destaque" />

        {/* Filtros e Busca */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm p-4 rounded-2xl border border-gray-200 shadow-sm">
           
           <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              <Filter size={20} className="text-gray-400 shrink-0" />
              {categories.map(cat => (
                 <button 
                   key={cat}
                   onClick={() => setFilter(cat)}
                   className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                      filter === cat 
                      ? 'bg-brand-blue text-white shadow-md' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                   }`}
                 >
                    {cat}
                 </button>
              ))}
           </div>

           <div className="relative w-full md:w-72">
              <input 
                type="text" 
                placeholder="Buscar benefício..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
           </div>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {filteredBenefits.map((benefit) => (
              <div key={benefit.id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 flex flex-col group">
                 <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center">
                       <IconHelper name={benefit.iconName} className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wide bg-gray-50 text-gray-500 px-2 py-1 rounded-md border border-gray-100">
                       {benefit.category}
                    </span>
                 </div>

                 <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">{benefit.title}</h3>
                 <p className="text-sm text-gray-600 mb-6 flex-grow">{benefit.fullDescription}</p>

                 <div className="bg-slate-50 rounded-xl p-4 mb-6">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-2">Requisitos Básicos</p>
                    <ul className="space-y-2">
                       {benefit.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                             <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                             {req}
                          </li>
                       ))}
                    </ul>
                 </div>

                 <button 
                   onClick={() => handleLearnMore(benefit.id)}
                   className="w-full border-2 border-gray-100 text-brand-dark hover:border-brand-blue hover:bg-brand-blue hover:text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                 >
                    Ver Detalhes <ArrowRight size={18} />
                 </button>
              </div>
           ))}
        </div>

        {filteredBenefits.length === 0 && (
           <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Nenhum benefício encontrado para sua busca.</p>
              <button onClick={() => {setFilter('Todos'); setSearchTerm('')}} className="mt-4 text-brand-blue font-bold hover:underline">
                 Limpar filtros
              </button>
           </div>
        )}

        <div className="mt-12">
           <AdSlot id="Content2" label="Publicidade Rodapé" />
        </div>

      </div>
    </div>
  );
};