
import React, { useState, useEffect } from 'react';
import { Quiz, ViewState } from '../types';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, ChevronLeft, Loader2, Sparkles, Lock, FileText, Banknote, BookOpen, CalendarClock, ExternalLink, ShieldCheck, Users, Target, Wallet, Car, GraduationCap, Home, Calculator, CreditCard } from 'lucide-react';
import { AdSlot } from './AdSlot';
import { Analytics } from '../lib/analytics';

interface QuizPageProps {
  quizzes: Quiz[];
  activeQuizId: string | null;
  onCloseQuiz: () => void;
  onSelectQuiz: (id: string) => void;
  onNavigate: (view: ViewState) => void;
  isEmbedded?: boolean;
}

const QuizPage: React.FC<QuizPageProps> = ({ quizzes, activeQuizId, onCloseQuiz, onSelectQuiz, onNavigate, isEmbedded = false }) => {
  const [quizState, setQuizState] = useState<'intro' | 'active' | 'result'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<boolean | null>(null);

  const activeQuiz = quizzes.find(q => q.id === activeQuizId);

  useEffect(() => {
    if (!isEmbedded) {
      const baseTitle = activeQuiz 
        ? `${activeQuiz.title} - Simulação de Direito 2025` 
        : "Simulador de Benefícios Sociais: Teste de Elegibilidade";
      document.title = baseTitle;
    }
  }, [isEmbedded, activeQuiz]);

  useEffect(() => {
    if (activeQuizId) {
      setQuizState('intro'); 
      setCurrentQuestionIndex(0);
      setAnswers({});
      setIsEvaluating(false);
      setSelectedOption(null);
    }
  }, [activeQuizId]);

  const handleStartQuiz = () => {
    if (activeQuiz) {
      Analytics.trackQuizStart(activeQuiz.id, activeQuiz.title);
    }
    setQuizState('active');
    if (isEmbedded) {
       const el = document.getElementById('embedded-quiz-anchor');
       el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAnswer = (answer: boolean) => {
    if (!activeQuiz || isEvaluating) return;

    setSelectedOption(answer);
    setIsEvaluating(true);

    setTimeout(() => {
      const currentQId = activeQuiz.questions[currentQuestionIndex].id;
      const newAnswers = { ...answers, [currentQId]: answer };
      setAnswers(newAnswers);
      setIsEvaluating(false);
      setSelectedOption(null);

      if (currentQuestionIndex < activeQuiz.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        const finalYesCount = Object.values(newAnswers).filter(v => v === true).length;
        const passed = finalYesCount / activeQuiz.questions.length >= 0.7;
        Analytics.trackQuizCompletion(activeQuiz.id, activeQuiz.title, passed ? 'eligible' : 'not_eligible');
        setQuizState('result');
      }
    }, 800);
  };

  const renderRecommendations = () => {
     if (!activeQuiz) return null;
     const p = activeQuiz.program.toLowerCase();

     return (
        <div className="w-full mt-6 animate-fade-in-up">
           <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 text-center">Próximos Passos Recomendados</p>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button 
                onClick={() => onNavigate('calculator')}
                className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl hover:border-brand-blue hover:shadow-md transition-all text-left group"
              >
                 <div className="bg-blue-50 text-brand-blue p-2 rounded-xl group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Calculator size={20} />
                 </div>
                 <div>
                    <span className="block font-bold text-slate-800 text-sm">Calculadora de Renda</span>
                    <span className="text-[10px] text-slate-500">Confirme sua elegibilidade</span>
                 </div>
              </button>

              <button 
                onClick={() => onNavigate('calendarios')}
                className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl hover:border-green-500 hover:shadow-md transition-all text-left group"
              >
                 <div className="bg-green-50 text-green-600 p-2 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <CalendarClock size={20} />
                 </div>
                 <div>
                    <span className="block font-bold text-slate-800 text-sm">Calendário 2025</span>
                    <span className="text-[10px] text-slate-500">Veja quando você recebe</span>
                 </div>
              </button>

              <button 
                onClick={() => onNavigate('cards')}
                className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl hover:border-purple-500 hover:shadow-md transition-all text-left group"
              >
                 <div className="bg-purple-50 text-purple-600 p-2 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <CreditCard size={20} />
                 </div>
                 <div>
                    <span className="block font-bold text-slate-800 text-sm">Cartões de Crédito</span>
                    <span className="text-[10px] text-slate-500">Aprovação para negativados</span>
                 </div>
              </button>

              <button 
                onClick={() => onNavigate('all-benefits')}
                className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl hover:border-orange-500 hover:shadow-md transition-all text-left group"
              >
                 <div className="bg-orange-50 text-orange-600 p-2 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <BookOpen size={20} />
                 </div>
                 <div>
                    <span className="block font-bold text-slate-800 text-sm">Outros Benefícios</span>
                    <span className="text-[10px] text-slate-500">Veja a lista completa</span>
                 </div>
              </button>
           </div>
        </div>
     );
  };

  if (activeQuizId && activeQuiz) {
    const containerClasses = isEmbedded 
      ? "w-full bg-white rounded-[2rem] border-2 border-brand-blue/10 overflow-hidden relative flex flex-col my-4 shadow-xl"
      : "bg-white rounded-3xl shadow-xl border border-blue-50 overflow-hidden relative min-h-[400px] flex flex-col";

    return (
      <div className={isEmbedded ? "font-sans text-brand-dark" : "min-h-screen bg-brand-light py-6"}>
        <div className={isEmbedded ? "" : "container mx-auto px-4 max-w-4xl"}>
          
          {!isEmbedded && (
            <button onClick={onCloseQuiz} className="mb-4 flex items-center gap-2 text-sm text-brand-medium hover:text-brand-blue font-medium bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 w-fit">
              <ChevronLeft size={16} /> Voltar
            </button>
          )}

          <div id="embedded-quiz-anchor" className={containerClasses}>
             {quizState === 'intro' && (
               <div className={`flex flex-col animate-fade-in p-8 ${isEmbedded ? 'items-center text-center' : 'items-center text-center bg-gradient-to-b from-white to-blue-50/30'}`}>
                  <div className="w-16 h-16 bg-blue-100 text-brand-blue rounded-2xl flex items-center justify-center mb-4 shadow-inner">
                     <Sparkles size={32} />
                  </div>
                  <h2 className="font-black text-slate-900 mb-3 text-2xl">
                    {activeQuiz.title}
                  </h2>
                  <p className="text-slate-600 mb-8 leading-relaxed max-w-md">
                    Descubra sua elegibilidade e estime o valor das suas parcelas em menos de 1 minuto.
                  </p>
                  <button 
                    onClick={handleStartQuiz}
                    className="bg-brand-blue hover:bg-brand-hover text-white font-bold rounded-2xl shadow-lg shadow-brand-blue/30 hover:-translate-y-1 transition-all flex items-center gap-3 justify-center w-full md:w-auto px-12 py-4 text-lg"
                  >
                    Começar Simulação <ArrowRight size={22} />
                  </button>
               </div>
             )}

             {quizState === 'active' && (
               <div className="flex flex-col h-full animate-fade-in">
                  <div className="bg-brand-blue text-white p-5 flex justify-between items-center">
                     <span className="font-bold text-sm uppercase tracking-widest">{activeQuiz.program}</span>
                     <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-bold">Questão {currentQuestionIndex + 1}/{activeQuiz.questions.length}</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2">
                     <div className="bg-green-500 h-full transition-all duration-500" style={{ width: `${((currentQuestionIndex + 1) / activeQuiz.questions.length) * 100}%` }}></div>
                  </div>
                  
                  <div className="p-8 md:p-12 flex-grow flex flex-col justify-center items-center bg-white">
                     <h3 className="font-black text-slate-900 mb-10 text-center leading-tight text-xl md:text-2xl max-w-lg">
                       {activeQuiz.questions[currentQuestionIndex].text}
                     </h3>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                        <button 
                          onClick={() => handleAnswer(true)}
                          disabled={isEvaluating}
                          className={`p-5 rounded-2xl border-2 flex items-center justify-center gap-3 font-black text-lg transition-all ${
                            isEvaluating && selectedOption === true ? 'bg-green-500 border-green-500 text-white shadow-lg scale-95' : 'border-slate-100 hover:border-green-500 hover:bg-green-50 text-slate-700 bg-white shadow-sm'
                          }`}
                        >
                          {isEvaluating && selectedOption === true ? <Loader2 className="animate-spin"/> : <CheckCircle2/>} Sim
                        </button>
                        
                        <button 
                          onClick={() => handleAnswer(false)}
                          disabled={isEvaluating}
                          className={`p-5 rounded-2xl border-2 flex items-center justify-center gap-3 font-black text-lg transition-all ${
                            isEvaluating && selectedOption === false ? 'bg-red-500 border-red-500 text-white shadow-lg scale-95' : 'border-slate-100 hover:border-red-500 hover:bg-red-50 text-slate-700 bg-white shadow-sm'
                          }`}
                        >
                          {isEvaluating && selectedOption === false ? <Loader2 className="animate-spin"/> : <XCircle/>} Não
                        </button>
                     </div>
                  </div>
               </div>
             )}

             {quizState === 'result' && (
               <div className="p-8 md:p-10 flex flex-col items-center justify-center text-center animate-fade-in-up bg-white">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Simulação Concluída!</h3>
                  <p className="text-slate-500 text-sm mb-8 max-w-sm">Análise finalizada com base nas regras do CadÚnico 2025.</p>

                  <div className="w-full bg-blue-50 p-6 rounded-3xl border border-blue-100 mb-8">
                     <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-1">Valor Estimado</p>
                     <p className="text-4xl font-black text-slate-900">R$ 600 a R$ 950*</p>
                     <p className="text-[10px] text-slate-400 mt-2">*Valor final depende da entrevista presencial no CRAS.</p>
                  </div>

                  <div className="w-full border-t border-slate-100 pt-8">
                     {renderRecommendations()}
                  </div>
                  
                  <div className="mt-8">
                    <button onClick={() => setQuizState('intro')} className="text-slate-400 hover:text-brand-blue text-xs font-bold flex items-center gap-2 transition-colors mx-auto">
                       <RotateCcw size={14}/> Refazer Simulação
                    </button>
                  </div>
               </div>
             )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default QuizPage;
