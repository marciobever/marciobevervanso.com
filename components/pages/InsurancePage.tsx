import React, { useEffect } from 'react';
import { INSURANCE_OPTIONS } from '../../constants';
import { AdSlot } from '../AdSlot';
import { ShieldCheck, HeartHandshake, Bike, CheckCircle2, AlertTriangle } from 'lucide-react';
import { IconHelper } from '../IconHelper';

export const InsurancePage: React.FC = () => {
  // SEO Optimization
  useEffect(() => {
    document.title = "Seguros Baratos: Vida, Moto e Prestamista a partir de R$ 5,00";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Proteja sua família e seus bens. Seguro de vida, auxílio funeral e proteção para moto sem burocracia. Cotação online rápida e segura.";
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    } else {
      const m = document.createElement('meta');
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }

    const metaKeys = document.querySelector('meta[name="keywords"]');
    const keys = "seguro de vida barato, seguro moto suhai, seguro prestamista, auxilio funeral, proteção financeira, seguro para celular";
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
    <div className="bg-white min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
           <div className="relative z-10 lg:w-1/2">
              <span className="bg-white/10 text-blue-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-white/20 mb-4 inline-block">
                 Proteção Familiar
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                 Seguros que cabem no seu bolso
              </h1>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                 Proteja quem você ama com planos a partir de <strong>R$ 5,00 mensais</strong>. Seguro de vida, funeral e proteção para moto sem burocracia.
              </p>
              <button className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-green-900/20">
                 Simular Agora
              </button>
           </div>
           
           {/* Abstract graphics */}
           <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none"></div>
           <div className="hidden lg:flex items-center justify-center gap-6 opacity-80">
              <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                 <HeartHandshake size={40} />
              </div>
              <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 mt-12">
                 <ShieldCheck size={40} />
              </div>
           </div>
        </div>

        <AdSlot id="Content1" label="Seguradoras Parceiras" />

        <h2 className="text-2xl font-bold text-slate-900 mb-8 mt-12 pl-4 border-l-4 border-brand-blue">
           Microsseguros em Destaque
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {INSURANCE_OPTIONS.map((ins) => (
              <div key={ins.id} className="group border border-gray-200 hover:border-blue-500 rounded-2xl p-6 transition-all hover:shadow-lg bg-slate-50">
                 <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-blue">
                       <IconHelper name={ins.iconName} />
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                       {ins.type}
                    </span>
                 </div>
                 
                 <h3 className="text-xl font-bold text-slate-900 mb-1">{ins.title}</h3>
                 <p className="text-sm text-slate-500 mb-6">{ins.provider}</p>

                 <div className="mb-6">
                    <p className="text-xs text-gray-400 uppercase mb-1">A partir de</p>
                    <p className="text-2xl font-extrabold text-slate-900">{ins.monthlyPrice}<span className="text-sm font-normal text-gray-500">/mês</span></p>
                 </div>

                 <ul className="space-y-3 mb-6">
                    {ins.coverage.map((c, i) => (
                       <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                          {c}
                       </li>
                    ))}
                 </ul>

                 <button className="w-full border-2 border-slate-200 hover:border-brand-blue hover:text-brand-blue text-slate-600 font-bold py-3 rounded-xl transition-colors">
                    Ver Detalhes
                 </button>
              </div>
           ))}
        </div>

        <div className="mt-16 bg-yellow-50 border border-yellow-100 rounded-2xl p-8">
           <div className="flex items-start gap-4">
              <AlertTriangle className="text-yellow-600 shrink-0 mt-1" size={24} />
              <div>
                 <h3 className="text-lg font-bold text-yellow-800 mb-2">Por que contratar um Seguro Prestamista?</h3>
                 <p className="text-yellow-700 leading-relaxed">
                    Se você possui empréstimos consignados ou financiamentos, este seguro é essencial. Ele quita o saldo devedor em caso de morte ou invalidez, evitando que a dívida recaia sobre seus familiares (herdeiros). Muitos bancos já oferecem junto com o empréstimo.
                 </p>
              </div>
           </div>
        </div>

        <div className="mt-12">
           <AdSlot id="Content2" label="Publicidade Rodapé" />
        </div>

      </div>
    </div>
  );
};