
import React, { useEffect, useState } from 'react';
import { BENEFITS_DATA } from '../../constants';
import { IconHelper } from '../IconHelper';
import { AdSlot } from '../AdSlot';
import { Search, ArrowRight, CheckCircle2, LayoutGrid, Banknote, Heart, GraduationCap, Home } from 'lucide-react';
import { ViewState } from '../../types';

interface Props {
   onNavigate: (view: ViewState) => void;
}

export const AllBenefitsPage: React.FC<Props> = ({ onNavigate }) => {
   const [filter, setFilter] = useState<string>('Todos');
   const [searchTerm, setSearchTerm] = useState('');

   // Otimização de SEO
   useEffect(() => {
      document.title = "Lista Completa de Benefícios Sociais 2026 | Guia Oficial";
      window.scrollTo(0, 0);
   }, []);

   const categories = [
      { id: 'Todos', label: 'Todos', icon: LayoutGrid },
      { id: 'Renda', label: 'Renda', icon: Banknote },
      { id: 'Saúde', label: 'Saúde', icon: Heart },
      { id: 'Educação', label: 'Educação', icon: GraduationCap },
      { id: 'Habitação', label: 'Habitação', icon: Home },
   ];

   const filteredBenefits = BENEFITS_DATA.filter(b => {
      const matchesCategory = filter === 'Todos' || b.category === filter;
      const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         b.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
   });

   const handleLearnMore = (benefitId: string) => {
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
            onNavigate('landing-tarifa');
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
            onNavigate('quizzes');
            break;
      }
   };

   return (
      <div className="bg-slate-50 min-h-screen pb-20">

         {/* Hero Header */}
         <div className="bg-white border-b border-gray-200 pt-8 pb-10 px-4">
            <div className="container mx-auto max-w-4xl text-center">
               <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  Todos os Benefícios Sociais
               </h1>
               <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Explore o catálogo completo de programas governamentais. Utilize o índice abaixo para navegar rapidamente por área de interesse.
               </p>
            </div>
         </div>

         {/* Sticky Index Navigation */}
         <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all">
            <div className="container mx-auto px-4 md:px-6">
               <div className="flex flex-col md:flex-row items-center justify-between py-3 gap-4">

                  {/* Category Tabs */}
                  <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-1 md:pb-0 mask-gradient-right">
                     {categories.map(cat => (
                        <button
                           key={cat.id}
                           onClick={() => setFilter(cat.id)}
                           className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${filter === cat.id
                                 ? 'bg-brand-blue border-brand-blue text-white shadow-md transform scale-105'
                                 : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                              }`}
                        >
                           <cat.icon size={16} />
                           {cat.label}
                        </button>
                     ))}
                  </div>

                  {/* Search Bar */}
                  <div className="relative w-full md:w-72 shrink-0">
                     <input
                        type="text"
                        placeholder="Buscar benefício..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none text-sm bg-slate-50 focus:bg-white transition-all text-slate-800"
                     />
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  </div>

               </div>
            </div>
         </div>

         <div className="container mx-auto px-4 md:px-6 py-10">

            <AdSlot id="Content1" label="Destaque da Semana" className="mb-12" />

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {filteredBenefits.map((benefit) => (
                  <div key={benefit.id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 flex flex-col group relative overflow-hidden">

                     {/* Hover Highlight */}
                     <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>

                     <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center shadow-inner">
                           <IconHelper name={benefit.iconName} className="w-6 h-6" />
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-md border ${benefit.highlight ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 'bg-gray-50 text-gray-500 border-gray-100'
                           }`}>
                           {benefit.category}
                        </span>
                     </div>

                     <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">{benefit.title}</h3>
                     <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">{benefit.fullDescription}</p>

                     <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                        <p className="text-xs font-bold text-gray-400 uppercase mb-2">Requisitos Básicos</p>
                        <ul className="space-y-2">
                           {benefit.requirements.slice(0, 3).map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                                 <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                                 {req}
                              </li>
                           ))}
                        </ul>
                     </div>

                     <button
                        onClick={() => handleLearnMore(benefit.id)}
                        className="w-full bg-white border-2 border-gray-100 text-brand-dark hover:border-brand-blue hover:bg-brand-blue hover:text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 group/btn"
                     >
                        Ver Guia Completo <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                     </button>
                  </div>
               ))}
            </div>

            {filteredBenefits.length === 0 && (
               <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                     <Search size={32} />
                  </div>
                  <p className="text-gray-500 text-lg font-medium">Nenhum benefício encontrado.</p>
                  <p className="text-gray-400 text-sm mb-6">Tente mudar a categoria ou o termo de busca.</p>
                  <button onClick={() => { setFilter('Todos'); setSearchTerm('') }} className="text-brand-blue font-bold hover:underline">
                     Limpar filtros
                  </button>
               </div>
            )}

            <div className="mt-16">
               <AdSlot id="Content2" label="Publicidade Rodapé" />
            </div>

         </div>
      </div>
   );
};
