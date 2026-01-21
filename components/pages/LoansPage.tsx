
import React, { useEffect } from 'react';
import { LOAN_OFFERS } from '../../constants';
import { AdSlot } from '../AdSlot';
import { Banknote, CheckCircle2, AlertTriangle, ArrowRight, Percent, Clock, ShieldCheck, HelpCircle, Smartphone, Lock, Calendar } from 'lucide-react';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { MetaHead } from '../seo/MetaHead';
import { Breadcrumbs } from '../ui/Breadcrumbs';

export const LoansPage: React.FC = () => {

   // SEO Optimization
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   // Generate Financial Product Schema
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
         <MetaHead
            title="Empréstimo para Negativado e Antecipação FGTS | Simulação Online"
            description="Precisa de dinheiro rápido? Simule empréstimo pessoal online, antecipação do Saque-Aniversário FGTS e crédito consignado BPC/LOAS com as menores taxas."
            url="https://beneficios.receitapopular.com.br/emprestimos"
            canonicalUrl="https://beneficios.receitapopular.com.br/emprestimos"
         />
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

            {/* Hero Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
               {LOAN_OFFERS.map((loan) => (
                  <div key={loan.id} className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 hover:border-green-400 transition-all flex flex-col relative overflow-hidden group">

                     {/* Top Tag */}
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
                           <span className="text-sm text-gray-500 flex items-center gap-1"><Percent size={14} /> Taxa Mensal</span>
                           <span className="font-bold text-slate-900">{loan.rate}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                           <span className="text-sm text-gray-500 flex items-center gap-1"><Banknote size={14} /> Liberação</span>
                           <span className="font-bold text-slate-900">{loan.minAmount} até {loan.maxAmount}</span>
                        </div>
                        <div className="flex justify-between items-center">
                           <span className="text-sm text-gray-500 flex items-center gap-1"><Clock size={14} /> Prazo</span>
                           <span className="font-bold text-slate-900">{loan.term}</span>
                        </div>
                     </div>

                     <button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 mt-auto group-hover:scale-[1.02]">
                        Simular no WhatsApp <ArrowRight size={18} />
                     </button>

                     <p className="text-center text-[10px] text-gray-400 mt-4 flex items-center justify-center gap-1">
                        <ShieldCheck size={12} /> Ambiente Criptografado
                     </p>
                  </div>
               ))}
            </div>

            {/* FORCED AFFILIATE BANNER FOR HIGHER CONVERSION ON LOAN PAGE */}
            <AdSlot id="Content1" label="Simulação de Crédito" className="my-12" forceAffiliate={true} />

            {/* Educational Section - How it works */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
               <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
                  Qual modalidade é ideal para você?
               </h2>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* FGTS */}
                  <div className="space-y-4">
                     <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-700">
                        <Smartphone size={24} />
                     </div>
                     <h3 className="font-bold text-xl text-slate-900">Antecipação FGTS</h3>
                     <p className="text-slate-600 text-sm leading-relaxed">
                        <strong>Ideal para:</strong> Quem tem saldo no FGTS (contas ativas ou inativas) e está negativado.
                     </p>
                     <ul className="text-sm text-slate-600 space-y-2">
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Não consulta SPC/Serasa</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Não compromete renda mensal</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Dinheiro cai em até 2h</li>
                     </ul>
                  </div>

                  {/* Personal */}
                  <div className="space-y-4">
                     <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-brand-blue">
                        <Lock size={24} />
                     </div>
                     <h3 className="font-bold text-xl text-slate-900">Empréstimo Pessoal</h3>
                     <p className="text-slate-600 text-sm leading-relaxed">
                        <strong>Ideal para:</strong> Quem não tem margem consignável ou saldo FGTS, mas movimenta conta bancária.
                     </p>
                     <ul className="text-sm text-slate-600 space-y-2">
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Débito em conta de luz (opcional)</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Análise de perfil de crédito</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Juros um pouco maiores</li>
                     </ul>
                  </div>

                  {/* Consigned */}
                  <div className="space-y-4">
                     <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-orange-600">
                        <Calendar size={24} />
                     </div>
                     <h3 className="font-bold text-xl text-slate-900">Consignado INSS/BPC</h3>
                     <p className="text-slate-600 text-sm leading-relaxed">
                        <strong>Ideal para:</strong> Aposentados, Pensionistas e BPC/LOAS que buscam as menores taxas do Brasil.
                     </p>
                     <ul className="text-sm text-slate-600 space-y-2">
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-500" /> Taxa teto de 1,66% a.m.</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-500" /> Desconto direto na folha</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-500" /> Prazo de até 84 meses</li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* Security Warning */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 md:p-8 rounded-r-2xl mb-12 flex flex-col md:flex-row gap-6 items-center">
               <div className="bg-white p-4 rounded-full shadow-sm text-red-500 shrink-0">
                  <AlertTriangle size={32} />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">Alerta de Segurança Importante</h3>
                  <p className="text-red-700 mb-4 leading-relaxed">
                     <strong>NUNCA pague nenhum valor antecipado</strong> para liberar um empréstimo. Se pedirem depósito para "taxa de cartório", "fiador", "seguro" ou "liberação de score", é GOLPE.
                  </p>
                  <p className="text-red-700 text-sm">
                     Instituições financeiras sérias descontam as taxas diretamente do valor do empréstimo ou nas parcelas futuras.
                  </p>
               </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto mb-16">
               <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Dúvidas Frequentes</h2>
               <div className="space-y-4">
                  <details className="group bg-white p-5 rounded-xl border border-gray-200 cursor-pointer">
                     <summary className="font-bold text-slate-800 flex justify-between items-center list-none">
                        Quem tem nome sujo pode fazer o saque-aniversário?
                        <HelpCircle size={20} className="text-brand-blue" />
                     </summary>
                     <p className="text-slate-600 mt-4 text-sm leading-relaxed pl-4 border-l-2 border-brand-blue">
                        Sim! A antecipação do Saque-Aniversário não consulta SPC ou Serasa, pois a garantia de pagamento é o próprio saldo do seu FGTS. O banco não corre risco de calote, por isso aprova para negativados.
                     </p>
                  </details>
                  <details className="group bg-white p-5 rounded-xl border border-gray-200 cursor-pointer">
                     <summary className="font-bold text-slate-800 flex justify-between items-center list-none">
                        Quanto tempo demora para o dinheiro cair?
                        <HelpCircle size={20} className="text-brand-blue" />
                     </summary>
                     <p className="text-slate-600 mt-4 text-sm leading-relaxed pl-4 border-l-2 border-brand-blue">
                        Depende da modalidade. A antecipação do FGTS costuma cair em até 2 horas via PIX. O empréstimo pessoal pode levar até 24 horas úteis para análise. O consignado do INSS pode levar de 2 a 5 dias devido à averbação da Dataprev.
                     </p>
                  </details>
                  <details className="group bg-white p-5 rounded-xl border border-gray-200 cursor-pointer">
                     <summary className="font-bold text-slate-800 flex justify-between items-center list-none">
                        BPC/LOAS pode fazer empréstimo consignado?
                        <HelpCircle size={20} className="text-brand-blue" />
                     </summary>
                     <p className="text-slate-600 mt-4 text-sm leading-relaxed pl-4 border-l-2 border-brand-blue">
                        Atualmente, sim. O STF validou a constitucionalidade da lei que permite o consignado para BPC. Porém, fique atento às regras de comprometimento de renda (máximo 30% ou 35% do benefício).
                     </p>
                  </details>
               </div>
            </div>

            <div className="mt-12">
               <AdSlot id="Content2" label="Mais Ofertas" />
            </div>

         </div>
      </div>
   );
};
