
import React, { useEffect } from 'react';
import { LOAN_OFFERS } from '../../constants';
import { AdSlot } from '../AdSlot';
import { AffiliateBanner } from '../AffiliateBanner'; // Novo Componente
import { Banknote, CheckCircle2, AlertTriangle, ArrowRight, Percent, Clock, ShieldCheck, HelpCircle, Smartphone, Lock, Calendar } from 'lucide-react';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { Breadcrumbs } from '../ui/Breadcrumbs';

export const LoansPage: React.FC = () => {

  useEffect(() => {
    document.title = "Empréstimo para Negativado e Antecipação FGTS | Simulação Online";
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Precisa de dinheiro rápido? Simule empréstimo pessoal online, antecipação do Saque-Aniversário FGTS e crédito consignado BPC/LOAS com as menores taxas.";
    if (metaDesc) { metaDesc.setAttribute('content', desc); }
    window.scrollTo(0, 0);
  }, []);

  const financialSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Empréstimo FGTS e Pessoal",
    "description": "Antecipação do Saque Aniversário FGTS e Empréstimo Pessoal para Negativados.",
    "interestRate": "1.49",
    "annualPercentageRate": "20.5",
    "feesAndCommissionsSpecification": "Não há cobrança de tarifas antecipadas.",
    "provider": {
        "@type": "Organization",
        "name": "Parceiros Certificados Banco Central"
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <SchemaMarkup data={financialSchema} />

      <div className="container mx-auto px-4 md:px-6">
        
        <Breadcrumbs 
          items={[
            { label: 'Serviços Financeiros', href: 'home' },
            { label: 'Empréstimos Online' }
          ]}
          onNavigate={(view) => window.location.href = view === 'home' ? '/' : '#'}
        />

        <header className="mb-12 text-center max-w-4xl mx-auto">
           <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-green-200 mb-4 inline-block">
             Dinheiro Rápido & Seguro
           </span>
           <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
             Empréstimos e Crédito Pessoal
           </h1>
           <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
             Esqueça a burocracia dos grandes bancos. Compare as melhores taxas do mercado para <strong>negativados</strong>, antecipação do <strong>FGTS</strong> e consignado.
           </p>
        </header>

        {/* AD DO TOPO (MANTIDO ADSLOT/GOOGLE) */}
        <AdSlot id="Content1" label="Ofertas de Crédito" />

        {/* Hero Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
           {LOAN_OFFERS.map((loan) => (
              <div key={loan.id} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-green-400 transition-all flex flex-col relative overflow-hidden group">
                 <div className={`absolute top-0 left-0 w-full h-2 ${loan.type === 'FGTS' ? 'bg-green-500' : loan.type === 'Consignado' ? 'bg-orange-500' : 'bg-blue-500'}`}></div>
                 <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-xl ${loan.color}`}>
                       <Banknote size={32} />
                    </div>
                    {loan.tags[0] && (
                       <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 px-2 py-1 rounded text-gray-600 border border-gray-200">
                          {loan.tags[0]}
                       </span>
                    )}
                 </div>
                 <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{loan.name}</h3>
                 <p className="text-sm text-slate-500 font-medium mb-6">Parceiro Oficial: {loan.provider}</p>
                 <div className="space-y-4 mb-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                       <span className="text-sm text-gray-500 flex items-center gap-1"><Percent size={14}/> Taxa Mensal</span>
                       <span className="font-bold text-slate-900">{loan.rate}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                       <span className="text-sm text-gray-500 flex items-center gap-1"><Banknote size={14}/> Liberação</span>
                       <span className="font-bold text-slate-900">{loan.minAmount} até {loan.maxAmount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-sm text-gray-500 flex items-center gap-1"><Clock size={14}/> Prazo</span>
                       <span className="font-bold text-slate-900">{loan.term}</span>
                    </div>
                 </div>
                 <button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 mt-auto group-hover:scale-[1.02]">
                    Simular no WhatsApp <ArrowRight size={18} />
                 </button>
              </div>
           ))}
        </div>

        {/* BANNER AFILIADO ESTRATÉGICO NO MEIO */}
        <div className="my-16">
           <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-slate-800">Parceiros em Destaque</h3>
           </div>
           
           {/* SuperSim (Empréstimo Pessoal) */}
           <AffiliateBanner type="supersim" className="mb-6" />
           
           {/* Credspot (FGTS) */}
           <AffiliateBanner type="credspot" />
        </div>

        {/* Educational Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
           <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Qual modalidade é ideal para você?
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                 <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-700"><Smartphone size={24} /></div>
                 <h3 className="font-bold text-xl text-slate-900">Antecipação FGTS</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">Ideal para quem tem saldo no FGTS e está negativado. Não consulta SPC.</p>
              </div>
              <div className="space-y-4">
                 <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-brand-blue"><Lock size={24} /></div>
                 <h3 className="font-bold text-xl text-slate-900">Empréstimo Pessoal</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">Ideal para quem movimenta conta bancária e precisa de dinheiro rápido sem usar o FGTS.</p>
              </div>
              <div className="space-y-4">
                 <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-orange-600"><Calendar size={24} /></div>
                 <h3 className="font-bold text-xl text-slate-900">Consignado INSS</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">Menores taxas do mercado para aposentados e pensionistas.</p>
              </div>
           </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 md:p-8 rounded-r-2xl mb-12 flex flex-col md:flex-row gap-6 items-center">
           <div className="bg-white p-4 rounded-full shadow-sm text-red-500 shrink-0"><AlertTriangle size={32} /></div>
           <div>
              <h3 className="text-xl font-bold text-red-800 mb-2">Alerta de Segurança</h3>
              <p className="text-red-700 mb-0 text-sm">
                 NUNCA pague nenhum valor antecipado para liberar empréstimo. Nossos parceiros (SuperSim, Credspot) são verificados e não cobram taxas adiantadas.
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};
