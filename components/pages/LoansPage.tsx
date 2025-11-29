import React, { useEffect } from 'react';
import { LOAN_OFFERS } from '../../constants';
import { AdSlot } from '../AdSlot';
import { Banknote, CheckCircle2, AlertTriangle, ArrowRight, Percent, Clock } from 'lucide-react';

export const LoansPage: React.FC = () => {

  // SEO Optimization
  useEffect(() => {
    document.title = "Empréstimo para Negativado e Antecipação FGTS | Simulação Online";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Precisa de dinheiro rápido? Simule empréstimo pessoal online, antecipação do Saque-Aniversário FGTS e crédito consignado BPC/LOAS com as menores taxas.";
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    } else {
      const m = document.createElement('meta');
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }

    const metaKeys = document.querySelector('meta[name="keywords"]');
    const keys = "emprestimo para negativado, antecipação saque aniversário, emprestimo fgts, credito pessoal online, consignado bpc, emprestimo na hora via pix";
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
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <header className="mb-12 text-center max-w-3xl mx-auto">
           <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-green-200 mb-4 inline-block">
             Dinheiro Rápido
           </span>
           <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
             Empréstimos e Crédito Pessoal
           </h1>
           <p className="text-lg text-slate-600 leading-relaxed">
             Compare as melhores taxas do mercado. Opções para <strong>negativados</strong>, antecipação do <strong>Saque-Aniversário FGTS</strong> e crédito consignado BPC/LOAS.
           </p>
        </header>

        <AdSlot id="Content1" label="Simulação de Crédito" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
           {LOAN_OFFERS.map((loan) => (
              <div key={loan.id} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-green-400 transition-all flex flex-col relative overflow-hidden group">
                 
                 {/* Top Tag */}
                 <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500"></div>

                 <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-xl ${loan.color}`}>
                       <Banknote size={32} />
                    </div>
                    {loan.tags[0] && (
                       <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 px-2 py-1 rounded text-gray-600">
                          {loan.tags[0]}
                       </span>
                    )}
                 </div>

                 <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{loan.name}</h3>
                 <p className="text-sm text-slate-500 font-medium mb-6">Parceiro: {loan.provider}</p>

                 <div className="space-y-4 mb-8 bg-slate-50 p-4 rounded-xl">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                       <span className="text-sm text-gray-500 flex items-center gap-1"><Percent size={14}/> Taxa Mensal</span>
                       <span className="font-bold text-slate-900">{loan.rate}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                       <span className="text-sm text-gray-500 flex items-center gap-1"><Banknote size={14}/> Limites</span>
                       <span className="font-bold text-slate-900">{loan.minAmount} a {loan.maxAmount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-sm text-gray-500 flex items-center gap-1"><Clock size={14}/> Prazo</span>
                       <span className="font-bold text-slate-900">{loan.term}</span>
                    </div>
                 </div>

                 <button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 mt-auto group-hover:scale-[1.02]">
                    Simular Sem Compromisso <ArrowRight size={18} />
                 </button>
                 
                 <p className="text-center text-xs text-gray-400 mt-4">Sujeito a análise de crédito</p>
              </div>
           ))}
        </div>

        {/* Informative SEO Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
           <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <AlertTriangle className="text-yellow-500" /> Cuidado com Golpes
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600 leading-relaxed">
              <div>
                 <p className="mb-4">
                    <strong>Nunca pague adiantado:</strong> Nenhuma instituição financeira séria cobra taxas antecipadas para liberar empréstimo. Se pedirem depósito prévio, é golpe.
                 </p>
                 <p>
                    <strong>Confira o site oficial:</strong> Sempre verifique se você está no site oficial do banco ou da financeira antes de digitar seus dados.
                 </p>
              </div>
              <div>
                 <p className="mb-4">
                    <strong>Antecipação do FGTS:</strong> É uma modalidade segura onde o banco desconta direto do seu Fundo de Garantia. Não compromete sua renda mensal e aceita negativados.
                 </p>
                 <p>
                    <strong>Consignado BPC/LOAS:</strong> Foi liberado novamente, mas com margem reduzida. Cuidado para não comprometer muito seu benefício.
                 </p>
              </div>
           </div>
        </div>

        <div className="mt-12">
           <AdSlot id="Content2" label="Mais Ofertas" />
        </div>

      </div>
    </div>
  );
};