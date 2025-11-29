
import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Search, Lock, CheckCircle2, AlertCircle, ArrowRight, CreditCard, Banknote, Star, Gauge } from 'lucide-react';
import { ViewState } from '../types';
import { AdSlot } from './AdSlot';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ViewState) => void;
}

export const ConsultationModal: React.FC<Props> = ({ isOpen, onClose, onNavigate }) => {
  const [cpf, setCpf] = useState('');
  const [step, setStep] = useState<'input' | 'loading' | 'result'>('input');
  const [loadingText, setLoadingText] = useState('Iniciando conexão segura...');
  const [progress, setProgress] = useState(0);
  
  // Score animation state
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setStep('input');
      setCpf('');
      setProgress(0);
      setScore(0);
    }
  }, [isOpen]);

  // Animate score when entering result step
  useEffect(() => {
    if (step === 'result') {
      const targetScore = 845; // High score to motivate action
      let current = 0;
      const interval = setInterval(() => {
        current += 15;
        if (current >= targetScore) {
          current = targetScore;
          clearInterval(interval);
        }
        setScore(current);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [step]);

  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(formatCPF(e.target.value));
  };

  const startConsultation = () => {
    if (cpf.length < 14) return;
    
    setStep('loading');
    
    // Simulate complex loading steps for realism
    const steps = [
      { msg: 'Conectando ao servidor Gov.br...', time: 800 },
      { msg: 'Validando integridade do CPF...', time: 1800 },
      { msg: 'Analisando Score de Crédito...', time: 3000 }, // Changed text to prime for credit offer
      { msg: 'Verificando benefícios disponíveis...', time: 4200 },
      { msg: 'Finalizando relatório...', time: 5000 }
    ];

    let currentStep = 0;

    const interval = setInterval(() => {
      setProgress((old) => {
         const newProg = old + Math.random() * 10;
         return newProg > 100 ? 100 : newProg;
      });
    }, 200);

    const stepInterval = setInterval(() => {
      if (currentStep < steps.length) {
        setLoadingText(steps[currentStep].msg);
        currentStep++;
      } else {
        clearInterval(stepInterval);
        clearInterval(interval);
        setStep('result');
      }
    }, 1000);
  };

  const handleOfferClick = (view: ViewState) => {
    onClose();
    onNavigate(view);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="bg-brand-blue p-6 text-white flex justify-between items-start sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
               <ShieldCheck size={20} className="text-green-400" />
               <span className="text-xs font-bold uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded">Ambiente Seguro</span>
            </div>
            <h2 className="text-xl font-bold">Consulta Unificada</h2>
            <p className="text-blue-100 text-sm">Base de dados Federal (Simulação)</p>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          
          {step === 'input' && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                   <Search size={32} />
                </div>
                <p className="text-brand-medium text-sm">
                  Informe seu CPF para verificar a situação cadastral, <strong>Score Social</strong> e disponibilidade de cartões e benefícios.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">CPF do Titular</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={cpf}
                    onChange={handleInput}
                    placeholder="000.000.000-00"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 bg-white focus:border-brand-blue focus:ring-0 outline-none text-xl font-mono text-brand-dark tracking-wider transition-colors placeholder-gray-300"
                    maxLength={14}
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock size={20} />
                  </div>
                </div>
              </div>

              <button 
                onClick={startConsultation}
                disabled={cpf.length < 14}
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-600/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                Consultar Agora
              </button>

              <p className="text-[10px] text-center text-gray-400 flex items-center justify-center gap-1">
                <Lock size={10} /> Seus dados são criptografados e não são armazenados.
              </p>
            </div>
          )}

          {step === 'loading' && (
            <div className="py-2 text-center flex flex-col items-center">
               <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center font-bold text-brand-blue text-sm">
                    {Math.round(progress)}%
                  </div>
               </div>
               
               <div className="mb-4">
                 <h3 className="text-lg font-bold text-brand-dark mb-1">Processando...</h3>
                 <p className="text-brand-medium text-sm animate-pulse">{loadingText}</p>
               </div>

               {/* MONETIZATION SPOT: Ad displayed while user waits */}
               <div className="w-full transform scale-95 origin-center my-2">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Enquanto carregamos seus dados:</p>
                  <AdSlot id="Content2" label="Oferta Parceira" />
               </div>

               <div className="bg-blue-50 p-3 rounded-lg text-xs text-blue-700 flex items-center justify-center gap-2 mt-4 w-full">
                 <ShieldCheck size={14} /> Conexão SSL de 256-bits ativa
               </div>
            </div>
          )}

          {step === 'result' && (
            <div className="text-center animate-fade-in-up">
              
              {/* SCORE SECTION - HIGH CONVERSION HOOK */}
              <div className="mb-6 relative">
                 <div className="flex justify-center mb-2">
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                       <CheckCircle2 size={12} /> CPF Regular
                    </span>
                 </div>
                 
                 <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                       <circle cx="64" cy="64" r="60" stroke="#f1f5f9" strokeWidth="8" fill="none" />
                       <circle cx="64" cy="64" r="60" stroke="#22c55e" strokeWidth="8" fill="none" strokeDasharray="377" strokeDashoffset={377 - (377 * score) / 1000} className="transition-all duration-1000 ease-out" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-3xl font-extrabold text-slate-900">{score}</span>
                       <span className="text-[10px] text-gray-400 uppercase font-bold">Score Social</span>
                    </div>
                 </div>
                 <p className="text-sm text-green-600 font-bold mt-2">Excelente! Potencial Alto.</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 text-left">
                <div className="flex items-start gap-3">
                  <Star className="text-yellow-500 shrink-0 mt-0.5" size={20} fill="currentColor" />
                  <div>
                    <p className="text-sm text-blue-900 font-bold mb-1">Oportunidade Liberada</p>
                    <p className="text-xs text-blue-800 leading-snug">
                       Devido ao seu Score alto, nossos parceiros liberaram <strong>3 ofertas exclusivas</strong> para o seu CPF. Aproveite antes que expirem.
                    </p>
                  </div>
                </div>
              </div>

              {/* OFFERS LIST - NATIVE ADS STYLE */}
              <div className="space-y-3 mb-6">
                 
                 <div onClick={() => handleOfferClick('cards')} className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:border-purple-500 hover:shadow-md transition-all cursor-pointer flex items-center gap-4 group text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-green-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg">PRÉ-APROVADO</div>
                    <div className="bg-purple-100 p-3 rounded-lg text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                       <CreditCard size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 text-sm">Cartão de Crédito</h4>
                       <p className="text-xs text-slate-500">Limite inicial de até R$ 2.500</p>
                    </div>
                    <ArrowRight className="ml-auto text-gray-300 group-hover:text-purple-600" size={18} />
                 </div>

                 <div onClick={() => handleOfferClick('loans')} className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:border-green-500 hover:shadow-md transition-all cursor-pointer flex items-center gap-4 group text-left">
                    <div className="bg-green-100 p-3 rounded-lg text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                       <Banknote size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 text-sm">Antecipação FGTS</h4>
                       <p className="text-xs text-slate-500">Saque seu saldo em minutos</p>
                    </div>
                    <ArrowRight className="ml-auto text-gray-300 group-hover:text-green-600" size={18} />
                 </div>

                 <div onClick={() => handleOfferClick('quizzes')} className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:border-blue-500 hover:shadow-md transition-all cursor-pointer flex items-center gap-4 group text-left">
                    <div className="bg-blue-100 p-3 rounded-lg text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                       <Gauge size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 text-sm">Revisão de Benefícios</h4>
                       <p className="text-xs text-slate-500">Veja se tem direito a valores extras</p>
                    </div>
                    <ArrowRight className="ml-auto text-gray-300 group-hover:text-brand-blue" size={18} />
                 </div>

              </div>
              
              <button onClick={onClose} className="text-xs text-gray-400 hover:text-gray-600 underline">
                Pular ofertas e voltar ao site
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
