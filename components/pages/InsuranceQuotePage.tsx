
import React, { useState, useEffect } from 'react';
import { ViewState, InsuranceProduct } from '../../types';
import { INSURANCE_OPTIONS } from '../../constants';
import { ChevronLeft, ShieldCheck, CheckCircle2, Loader2, ArrowRight, User, Phone, Calendar, Gift, Lock, Star } from 'lucide-react';
import { AdSlot } from '../AdSlot';

interface Props {
   insuranceId: string | null;
   onNavigate: (view: ViewState) => void;
}

export const InsuranceQuotePage: React.FC<Props> = ({ insuranceId, onNavigate }) => {
   const [step, setStep] = useState(1);
   const [loading, setLoading] = useState(false);
   const [formData, setFormData] = useState({
      name: '',
      age: '',
      phone: '',
      beneficiary: 'family' // family, parents, self
   });

   const selectedInsurance = INSURANCE_OPTIONS.find(i => i.id === insuranceId) || INSURANCE_OPTIONS[0];

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const handleNext = () => {
      if (step === 2) {
         setLoading(true);
         setTimeout(() => {
            setLoading(false);
            setStep(3);
         }, 2500); // Simulate analysis
      } else {
         setStep(step + 1);
      }
   };

   const handleWhatsappRedirect = () => {
      const message = `Olá! Gostaria de contratar o ${selectedInsurance.title}. Tenho ${formData.age} anos.`;
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
   };

   return (
      <div className="bg-slate-50 min-h-screen py-8">
         <div className="container mx-auto px-4 max-w-2xl">

            {/* Header Navigation */}
            <div className="flex items-center gap-4 mb-8">
               <button
                  onClick={() => onNavigate('insurance')}
                  className="bg-white p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-slate-600 transition-colors"
               >
                  <ChevronLeft size={20} />
               </button>
               <div className="flex-grow">
                  <h1 className="text-lg font-bold text-slate-900 leading-none">Cotação Online</h1>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                     <ShieldCheck size={10} className="text-green-500" /> Ambiente Seguro
                  </p>
               </div>
               <div className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
                  Etapa {step} de 3
               </div>
            </div>

            <AdSlot id="TopAd" label="Patrocinado" className="mb-8" />

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-1.5 rounded-full mb-8 overflow-hidden">
               <div
                  className="bg-brand-blue h-full transition-all duration-500 ease-out"
                  style={{ width: `${(step / 3) * 100}%` }}
               ></div>
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative min-h-[400px]">

               {/* Step 1: Personal Data */}
               {step === 1 && (
                  <div className="p-8 animate-fade-in">
                     <div className="mb-6 text-center">
                        <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                           <User size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Quem será protegido?</h2>
                        <p className="text-slate-500 text-sm mt-2">Precisamos de alguns dados para calcular o valor exato do seu seguro.</p>
                     </div>

                     <div className="space-y-4">
                        <div>
                           <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Nome Completo</label>
                           <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue outline-none transition-all"
                              placeholder="Seu nome"
                           />
                        </div>
                        <div>
                           <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Idade do Titular</label>
                           <input
                              type="number"
                              value={formData.age}
                              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                              className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue outline-none transition-all"
                              placeholder="Ex: 45"
                           />
                        </div>
                     </div>

                     <button
                        onClick={handleNext}
                        disabled={!formData.name || !formData.age}
                        className="w-full mt-8 bg-brand-blue hover:bg-brand-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2 transition-all"
                     >
                        Continuar <ArrowRight size={20} />
                     </button>
                  </div>
               )}

               {/* Step 2: Customization */}
               {step === 2 && !loading && (
                  <div className="p-8 animate-fade-in">
                     <div className="mb-6 text-center">
                        <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                           <Gift size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Benefícios Extras</h2>
                        <p className="text-slate-500 text-sm mt-2">Personalize sua cobertura para incluir o que realmente importa.</p>
                     </div>

                     <div className="space-y-3">
                        <button
                           onClick={() => setFormData({ ...formData, beneficiary: 'family' })}
                           className={`w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-all text-left ${formData.beneficiary === 'family' ? 'border-brand-blue bg-blue-50' : 'border-gray-100 hover:border-gray-200'}`}
                        >
                           <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${formData.beneficiary === 'family' ? 'border-brand-blue bg-brand-blue text-white' : 'border-gray-300'}`}>
                              {formData.beneficiary === 'family' && <CheckCircle2 size={14} />}
                           </div>
                           <div>
                              <span className="block font-bold text-slate-900">Proteção Familiar</span>
                              <span className="text-xs text-slate-500">Inclui cônjuge e filhos no auxílio funeral.</span>
                           </div>
                        </button>

                        <button
                           onClick={() => setFormData({ ...formData, beneficiary: 'parents' })}
                           className={`w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-all text-left ${formData.beneficiary === 'parents' ? 'border-brand-blue bg-blue-50' : 'border-gray-100 hover:border-gray-200'}`}
                        >
                           <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${formData.beneficiary === 'parents' ? 'border-brand-blue bg-brand-blue text-white' : 'border-gray-300'}`}>
                              {formData.beneficiary === 'parents' && <CheckCircle2 size={14} />}
                           </div>
                           <div>
                              <span className="block font-bold text-slate-900">Incluir Pais/Sogros</span>
                              <span className="text-xs text-slate-500">Adicional para idosos até 80 anos.</span>
                           </div>
                        </button>
                     </div>

                     <div className="mt-6">
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">WhatsApp para Contato</label>
                        <div className="relative">
                           <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                           <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue outline-none transition-all"
                              placeholder="(00) 00000-0000"
                           />
                        </div>
                     </div>

                     <button
                        onClick={handleNext}
                        disabled={!formData.phone}
                        className="w-full mt-8 bg-brand-blue hover:bg-brand-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2 transition-all"
                     >
                        Ver Proposta <ArrowRight size={20} />
                     </button>
                  </div>
               )}

               {/* Loading State */}
               {loading && (
                  <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 text-center animate-fade-in z-20">
                     <div className="relative mb-6">
                        <div className="w-20 h-20 border-4 border-gray-100 rounded-full"></div>
                        <div className="w-20 h-20 border-4 border-brand-blue border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                        <ShieldCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-blue" size={32} />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Buscando a melhor oferta...</h3>
                     <p className="text-slate-500 text-sm max-w-xs">Analisando parceiros que aceitam seu perfil sem carência.</p>


                  </div>
               )}

               {/* Step 3: Proposal */}
               {step === 3 && (
                  <div className="bg-gradient-to-b from-brand-blue/5 to-white min-h-[400px] flex flex-col">
                     <div className="p-8 pb-0">
                        <div className="flex items-center gap-2 mb-2">
                           <Star className="text-yellow-500 fill-current" size={20} />
                           <span className="text-sm font-bold text-brand-blue uppercase tracking-wider">Oferta Liberada</span>
                        </div>
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Sua Proposta Oficial</h2>
                     </div>

                     <div className="flex-grow px-4 pb-8">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                           <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                              <div>
                                 <p className="text-xs text-gray-400 uppercase font-bold">Plano Selecionado</p>
                                 <h3 className="text-xl font-bold">{selectedInsurance.title}</h3>
                              </div>
                              <div className="text-right">
                                 <span className="block text-2xl font-extrabold text-green-400">{selectedInsurance.monthlyPrice}</span>
                                 <span className="text-[10px] text-gray-400 uppercase">mensais</span>
                              </div>
                           </div>

                           <div className="p-6">
                              <div className="space-y-4 mb-6">
                                 <div className="flex items-start gap-3">
                                    <div className="bg-green-100 p-1.5 rounded-full text-green-700 mt-0.5"><CheckCircle2 size={16} /></div>
                                    <div>
                                       <strong className="block text-slate-900 text-sm">Auxílio Funeral Completo</strong>
                                       <p className="text-xs text-slate-500">Urna, ornamentação e translado sem custo extra.</p>
                                    </div>
                                 </div>
                                 <div className="flex items-start gap-3">
                                    <div className="bg-green-100 p-1.5 rounded-full text-green-700 mt-0.5"><CheckCircle2 size={16} /></div>
                                    <div>
                                       <strong className="block text-slate-900 text-sm">Sorteios Mensais</strong>
                                       <p className="text-xs text-slate-500">Concorra a prêmios em dinheiro pela Loteria Federal.</p>
                                    </div>
                                 </div>
                                 <div className="flex items-start gap-3">
                                    <div className="bg-green-100 p-1.5 rounded-full text-green-700 mt-0.5"><CheckCircle2 size={16} /></div>
                                    <div>
                                       <strong className="block text-slate-900 text-sm">Sem Carência Acidental</strong>
                                       <p className="text-xs text-slate-500">Proteção imediata após o primeiro pagamento.</p>
                                    </div>
                                 </div>
                              </div>

                              <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 mb-6 flex gap-3">
                                 <Lock size={18} className="text-yellow-700 shrink-0" />
                                 <p className="text-xs text-yellow-800">
                                    <strong>Garantia de Preço:</strong> Este valor é fixo e não aumenta com a mudança de idade por 12 meses.
                                 </p>
                              </div>

                              <button
                                 onClick={handleWhatsappRedirect}
                                 className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                              >
                                 Contratar pelo WhatsApp <ArrowRight size={20} />
                              </button>
                              <p className="text-[10px] text-center text-gray-400 mt-3">
                                 Falar diretamente com um consultor autorizado.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               )}

            </div>



         </div>
      </div>
   );
};
