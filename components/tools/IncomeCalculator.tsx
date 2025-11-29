import React, { useState, useEffect } from 'react';
import { Calculator, Users, DollarSign, CheckCircle2, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { AdSlot } from '../AdSlot';
import { ViewState } from '../../types';

interface Props {
  onNavigate: (view: ViewState) => void;
}

export const IncomeCalculator: React.FC<Props> = ({ onNavigate }) => {
  const [totalIncome, setTotalIncome] = useState<string>('');
  const [members, setMembers] = useState<string>('');
  const [perCapita, setPerCapita] = useState<number | null>(null);

  // Constants 2025
  const SALARIO_MINIMO = 1412; // Base 2024/25 ref
  const LIMIT_BOLSA_FAMILIA = 218;
  const LIMIT_BPC = Math.floor(SALARIO_MINIMO / 4); // ~353
  const LIMIT_LOW_INCOME = Math.floor(SALARIO_MINIMO / 2); // ~706
  const LIMIT_MCMV_FAIXA1 = 2640; // Renda Bruta Familiar (não per capita)

  const calculate = () => {
    const income = parseFloat(totalIncome.replace(/\./g, '').replace(',', '.')) || 0;
    const numMembers = parseInt(members) || 1;
    
    setPerCapita(income / numMembers);
  };

  useEffect(() => {
    calculate();
  }, [totalIncome, members]);

  // SEO
  useEffect(() => {
    document.title = "Calculadora de Renda Per Capita: Tenho direito ao Bolsa Família?";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Faça o cálculo exato da renda per capita da sua família. Descubra se você tem direito ao Bolsa Família, BPC/LOAS e Tarifa Social de Energia.";
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    } else {
      const m = document.createElement('meta');
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }

    const metaKeys = document.querySelector('meta[name="keywords"]');
    const keys = "calcular renda per capita, renda familiar, calculo bolsa familia, quem tem direito bolsa familia, simulador renda";
    if (metaKeys) {
      metaKeys.setAttribute('content', keys);
    } else {
      const m = document.createElement('meta');
      m.name = "keywords";
      m.content = keys;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="bg-brand-light min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        <div className="text-center mb-10">
           <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4 flex items-center justify-center gap-3">
             <Calculator className="text-brand-blue" size={40} />
             Calculadora de Renda
           </h1>
           <p className="text-lg text-brand-medium max-w-2xl mx-auto">
             Descubra exatamente qual é a sua renda per capita e em quais programas sociais sua família se encaixa.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* INPUT CARD */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 h-fit">
            <h3 className="font-bold text-xl text-slate-800 mb-6">Seus Dados</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-500 uppercase mb-2">Renda Total da Família (R$)</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <DollarSign size={20} />
                  </div>
                  <input 
                    type="number" 
                    value={totalIncome}
                    onChange={(e) => setTotalIncome(e.target.value)}
                    placeholder="Ex: 1412,00"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-0 outline-none text-xl font-mono text-brand-dark transition-colors"
                  />
                  <p className="text-xs text-gray-400 mt-2">Some salários, pensões e bicos de todos.</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-500 uppercase mb-2">Pessoas na Casa</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Users size={20} />
                  </div>
                  <input 
                    type="number" 
                    value={members}
                    onChange={(e) => setMembers(e.target.value)}
                    placeholder="Ex: 4"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-0 outline-none text-xl font-mono text-brand-dark transition-colors"
                  />
                  <p className="text-xs text-gray-400 mt-2">Conte adultos e crianças.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RESULT CARD */}
          <div className="space-y-6">
             {/* Main Result */}
             <div className="bg-brand-dark text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                
                <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-2">Sua Renda Per Capita</p>
                <div className="text-5xl font-extrabold mb-2 font-mono">
                   {perCapita !== null && !isNaN(perCapita) 
                     ? perCapita.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) 
                     : 'R$ 0,00'}
                </div>
                <p className="text-gray-400 text-xs">Resultado da divisão da renda pelo nº de pessoas.</p>
             </div>

             {/* Eligibility List */}
             <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-4">Análise de Benefícios</h4>
                
                <div className="space-y-3">
                   {/* Bolsa Família */}
                   <div className={`flex items-center justify-between p-3 rounded-xl border ${perCapita !== null && perCapita <= LIMIT_BOLSA_FAMILIA ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-100 opacity-60'}`}>
                      <div className="flex items-center gap-3">
                         {perCapita !== null && perCapita <= LIMIT_BOLSA_FAMILIA ? <CheckCircle2 className="text-green-600"/> : <XCircle className="text-gray-400"/>}
                         <div>
                            <p className="font-bold text-sm text-slate-900">Bolsa Família</p>
                            <p className="text-xs text-slate-500">Limite: R$ 218,00</p>
                         </div>
                      </div>
                      {perCapita !== null && perCapita <= LIMIT_BOLSA_FAMILIA && <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded">Elegível</span>}
                   </div>

                   {/* BPC */}
                   <div className={`flex items-center justify-between p-3 rounded-xl border ${perCapita !== null && perCapita <= LIMIT_BPC ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-100 opacity-60'}`}>
                      <div className="flex items-center gap-3">
                         {perCapita !== null && perCapita <= LIMIT_BPC ? <CheckCircle2 className="text-green-600"/> : <XCircle className="text-gray-400"/>}
                         <div>
                            <p className="font-bold text-sm text-slate-900">BPC / LOAS</p>
                            <p className="text-xs text-slate-500">Limite: R$ {LIMIT_BPC},00</p>
                         </div>
                      </div>
                      {perCapita !== null && perCapita <= LIMIT_BPC && <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded">Elegível</span>}
                   </div>

                   {/* Tarifa Social */}
                   <div className={`flex items-center justify-between p-3 rounded-xl border ${perCapita !== null && perCapita <= LIMIT_LOW_INCOME ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-100 opacity-60'}`}>
                      <div className="flex items-center gap-3">
                         {perCapita !== null && perCapita <= LIMIT_LOW_INCOME ? <CheckCircle2 className="text-green-600"/> : <XCircle className="text-gray-400"/>}
                         <div>
                            <p className="font-bold text-sm text-slate-900">Tarifa Social (Luz)</p>
                            <p className="text-xs text-slate-500">Limite: R$ {LIMIT_LOW_INCOME},00</p>
                         </div>
                      </div>
                      {perCapita !== null && perCapita <= LIMIT_LOW_INCOME && <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded">Elegível</span>}
                   </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                   <button 
                     onClick={() => onNavigate('quizzes')}
                     className="w-full bg-brand-blue hover:bg-brand-hover text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                   >
                     Fazer Simulação Completa <ArrowRight size={18} />
                   </button>
                </div>
             </div>
          </div>

        </div>

        <div className="mt-12 bg-yellow-50 border border-yellow-100 rounded-2xl p-6 flex gap-4 items-start">
           <AlertTriangle className="text-yellow-600 shrink-0 mt-1" />
           <div>
              <h4 className="font-bold text-yellow-800 mb-1">Nota Importante</h4>
              <p className="text-sm text-yellow-700 leading-relaxed">
                 Esta calculadora é uma ferramenta de estimativa. O cálculo oficial do governo pode excluir certas despesas ou considerar outras rendas. A aprovação final depende sempre da análise do CRAS e do Ministério da Cidadania.
              </p>
           </div>
        </div>

        <div className="mt-10">
           <AdSlot id="Content2" label="Publicidade" />
        </div>

      </div>
    </div>
  );
};