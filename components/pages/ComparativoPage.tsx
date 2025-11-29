import React, { useEffect } from 'react';
import { AdSlot } from '../AdSlot';
import { ArrowRightLeft, Check, X } from 'lucide-react';

export const ComparativoPage: React.FC = () => {
  // SEO Optimization
  useEffect(() => {
    document.title = "Bolsa Família vs BPC/LOAS: Qual o melhor benefício? | Comparativo";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Entenda a diferença entre Bolsa Família e BPC. Compare valores, regras de acumulação, 13º salário e descubra qual benefício é ideal para você.";
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    } else {
      const m = document.createElement('meta');
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }

    const metaKeys = document.querySelector('meta[name="keywords"]');
    const keys = "diferença bpc e bolsa familia, acumular beneficios, loas ou bolsa familia, valor bpc vs bolsa familia, regras beneficios sociais";
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
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        <div className="text-center mb-10">
           <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
             Comparativo Oficial
           </h1>
           <p className="text-lg text-slate-600">
             Entenda as diferenças entre os principais benefícios e escolha o melhor para você.
           </p>
        </div>

        <AdSlot id="Content1" label="Patrocinado" />

        {/* COMPARISON 1: BOLSA FAMÍLIA vs BPC */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-12">
           <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-3">
                 <ArrowRightLeft className="text-brand-blue" /> Bolsa Família vs BPC/LOAS
              </h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              
              {/* SIDE A: Bolsa Família */}
              <div className="p-8">
                 <div className="text-center mb-6">
                    <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase">Programa de Renda</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-2">Bolsa Família</h3>
                 </div>
                 <ul className="space-y-4">
                    <li className="flex justify-between border-b border-gray-50 pb-2">
                       <span className="text-gray-500 text-sm">Valor Base</span>
                       <span className="font-bold text-slate-900">R$ 600,00</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-50 pb-2">
                       <span className="text-gray-500 text-sm">13º Salário</span>
                       <span className="font-bold text-red-500 flex items-center gap-1"><X size={14}/> Não tem</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-50 pb-2">
                       <span className="text-gray-500 text-sm">Exige Contribuição?</span>
                       <span className="font-bold text-green-600 flex items-center gap-1"><Check size={14}/> Não</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-50 pb-2">
                       <span className="text-gray-500 text-sm">Acumula com outros?</span>
                       <span className="font-bold text-green-600 flex items-center gap-1"><Check size={14}/> Sim</span>
                    </li>
                    <li className="mt-4 bg-gray-50 p-3 rounded-lg text-sm text-slate-600">
                       <strong>Público:</strong> Famílias com renda de até R$ 218 por pessoa.
                    </li>
                 </ul>
              </div>

              {/* SIDE B: BPC */}
              <div className="p-8 bg-slate-50/50">
                 <div className="text-center mb-6">
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full uppercase">Assistência Social</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-2">BPC / LOAS</h3>
                 </div>
                 <ul className="space-y-4">
                    <li className="flex justify-between border-b border-gray-100 pb-2">
                       <span className="text-gray-500 text-sm">Valor Base</span>
                       <span className="font-bold text-slate-900">R$ 1.412,00</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 pb-2">
                       <span className="text-gray-500 text-sm">13º Salário</span>
                       <span className="font-bold text-red-500 flex items-center gap-1"><X size={14}/> Não tem</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 pb-2">
                       <span className="text-gray-500 text-sm">Exige Contribuição?</span>
                       <span className="font-bold text-green-600 flex items-center gap-1"><Check size={14}/> Não</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 pb-2">
                       <span className="text-gray-500 text-sm">Acumula com outros?</span>
                       <span className="font-bold text-red-500 flex items-center gap-1"><X size={14}/> Não (Regra Geral)</span>
                    </li>
                    <li className="mt-4 bg-white border border-gray-200 p-3 rounded-lg text-sm text-slate-600">
                       <strong>Público:</strong> Idosos (65+) ou PcD com renda familiar de 1/4 do salário mínimo.
                    </li>
                 </ul>
              </div>

           </div>
        </div>

        <AdSlot id="Content2" label="Publicidade Comparativo" />

      </div>
    </div>
  );
};