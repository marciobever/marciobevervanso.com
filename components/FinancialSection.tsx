
import React from 'react';
import { ShieldCheck, Banknote, CreditCard, ArrowRight, Umbrella, Zap } from 'lucide-react';
import { ViewState } from '../types';

interface Props {
  onNavigate: (view: ViewState) => void;
}

const FinancialSection: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-12">
           <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-2 block">Economia Doméstica</span>
           <h2 className="text-3xl font-extrabold text-brand-dark mb-4">Soluções Financeiras Populares</h2>
           <p className="text-lg text-brand-medium max-w-2xl mx-auto">
              Serviços verificados com taxas reduzidas e contratação simplificada para quem recebe benefícios sociais.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
           {/* Insurance Card */}
           <div 
             onClick={() => onNavigate('insurance')}
             className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 bg-blue-100 w-24 h-24 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
              
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-brand-blue mb-6 relative z-10 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                 <Umbrella size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-brand-dark mb-2">Seguro Popular</h3>
              <p className="text-sm text-brand-medium mb-6 leading-relaxed">
                 Planos de vida e auxílio funeral completo a partir de <strong>R$ 5,00 mensais</strong>. Proteja sua família pagando pouco.
              </p>
              
              <div className="flex items-center text-brand-blue font-bold text-sm gap-2 group-hover:gap-3 transition-all">
                 Ver Coberturas <ArrowRight size={16} />
              </div>
           </div>

           {/* Loans Card */}
           <div 
             onClick={() => onNavigate('loans')}
             className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-green-500/30 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 bg-green-100 w-24 h-24 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
              
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-green-600 mb-6 relative z-10 group-hover:bg-green-600 group-hover:text-white transition-colors">
                 <Banknote size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-brand-dark mb-2">Empréstimo FGTS</h3>
              <p className="text-sm text-brand-medium mb-6 leading-relaxed">
                 Dinheiro na conta em até 2 horas. Antecipe seu Saque-Aniversário <strong>sem consulta ao SPC/Serasa</strong>.
              </p>
              
              <div className="flex items-center text-green-600 font-bold text-sm gap-2 group-hover:gap-3 transition-all">
                 Simular Valor <ArrowRight size={16} />
              </div>
           </div>

           {/* Cards Card */}
           <div 
             onClick={() => onNavigate('cards')}
             className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-purple-500/30 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 bg-purple-100 w-24 h-24 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
              
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-purple-600 mb-6 relative z-10 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                 <CreditCard size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-brand-dark mb-2">Cartões Sem Anuidade</h3>
              <p className="text-sm text-brand-medium mb-6 leading-relaxed">
                 Lista atualizada de cartões com <strong>aprovação facilitada</strong> e limite alto, mesmo para quem tem score baixo.
              </p>
              
              <div className="flex items-center text-purple-600 font-bold text-sm gap-2 group-hover:gap-3 transition-all">
                 Escolher Cartão <ArrowRight size={16} />
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default FinancialSection;
