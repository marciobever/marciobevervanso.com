
import React, { useState, useEffect, useRef } from 'react';
import { Quiz, ViewState } from '../types';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, ChevronLeft, Loader2, Sparkles, Lock, FileText, Banknote, BookOpen, CalendarClock, ExternalLink, ShieldCheck, Users, Target, Wallet, Car, GraduationCap, Home, Calculator, CreditCard, SearchCheck } from 'lucide-react';
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
  const [quizState, setQuizState] = useState<'intro' | 'active' | 'analyzing_interstitial' | 'result'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<boolean | null>(null);

  // Analysis State
  const [analysisStep, setAnalysisStep] = useState(0);
  const analysisMessages = ["Conectando ao banco de dados...", "Verificando elegibilidade...", "Cruzando informações com CadÚnico...", "Calculando benefícios..."];

  const activeQuiz = quizzes.find(q => q.id === activeQuizId);

  useEffect(() => {
    if (!isEmbedded && activeQuiz) {
      document.title = `${activeQuiz.title} - Análise Oficial 2026`;
    }
  }, [isEmbedded, activeQuiz]);

  useEffect(() => {
    if (activeQuizId) {
      setQuizState('intro');
      setCurrentQuestionIndex(0);
      setAnswers({});
      setIsEvaluated(false);
      setSelectedOption(null);
    }
  }, [activeQuizId]);

  const handleStartQuiz = () => {
    if (activeQuiz) {
      Analytics.trackQuizStart(activeQuiz.id, activeQuiz.title);
    }
    setQuizState('active');
    if (isEmbedded) {
      document.getElementById('embedded-quiz-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const startAnalysis = () => {
    setQuizState('analyzing_interstitial');
    setAnalysisStep(0);

    // Sequence of analysis messages
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= analysisMessages.length) {
        clearInterval(interval);
        setTimeout(() => {
          setQuizState('result');
        }, 800);
      } else {
        setAnalysisStep(step);
      }
    }, 1200); // 1.2s per step = ~5s total delay
  };

  const handleAnswer = (answer: boolean) => {
    if (!activeQuiz || isEvaluated) return;

    setSelectedOption(answer);
    setIsEvaluated(true);

    setTimeout(() => {
      const currentQId = activeQuiz.questions[currentQuestionIndex].id;
      const newAnswers = { ...answers, [currentQId]: answer };
      setAnswers(newAnswers);
      setIsEvaluated(false);
      setSelectedOption(null);

      if (currentQuestionIndex < activeQuiz.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        // Optional: Scroll to top of card on mobile
        if (isEmbedded && window.innerWidth < 768) {
          document.getElementById('embedded-quiz-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        // Evaluate Final Result
        const finalYesCount = Object.values(newAnswers).filter(v => v === true).length;
        const passed = finalYesCount / activeQuiz.questions.length >= 0.6; // 60% threshold
        Analytics.trackQuizCompletion(activeQuiz.id, activeQuiz.title, passed ? 'eligible' : 'not_eligible');

        // Trigger Analysis "Fake Loading"
        startAnalysis();
      }
    }, 500);
  };

  const renderRecommendations = () => {
    return (
      <div className="w-full mt-6 animate-fade-in-up">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 text-center">Recomendado para Você</p>
        <div className="grid grid-cols-1 gap-3">
          <button
            onClick={() => onNavigate('cards')}
            className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:border-purple-500 hover:shadow-lg transition-all text-left group relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">NOVO</div>
            <div className="bg-purple-100 text-purple-600 p-3 rounded-xl">
              <CreditCard size={24} />
            </div>
            <div>
              <span className="block font-bold text-slate-900 leading-tight">Cartões com Limite Alto</span>
              <span className="text-sm text-slate-500 leading-tight">Lista de cartões aprovando hoje</span>
            </div>
            <div className="ml-auto text-purple-600">
              <ArrowRight size={20} />
            </div>
          </button>

          <button
            onClick={() => onNavigate('calendarios')}
            className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:border-green-500 hover:shadow-lg transition-all text-left group"
          >
            <div className="bg-green-100 text-green-600 p-3 rounded-xl">
              <CalendarClock size={24} />
            </div>
            <div>
              <span className="block font-bold text-slate-900 leading-tight">Calendário de Pagamentos</span>
              <span className="text-sm text-slate-500 leading-tight">Consulte as datas oficiais</span>
            </div>
            <div className="ml-auto text-green-600">
              <ArrowRight size={20} />
            </div>
          </button>
        </div>
      </div>
    );
  };

  if (activeQuizId && activeQuiz) {
    const containerClasses = isEmbedded
      ? "w-full bg-white rounded-[2rem] border-2 border-slate-100 overflow-hidden relative flex flex-col my-6 shadow-2xl"
      : "bg-white rounded-3xl shadow-xl border border-blue-50 overflow-hidden relative min-h-[500px] flex flex-col";

    return (
      <div className={isEmbedded ? "font-sans text-brand-dark" : "min-h-screen bg-brand-light py-6"}>
        <div className={isEmbedded ? "" : "container mx-auto px-4 max-w-4xl"}>

          {!isEmbedded && (
            <button onClick={onCloseQuiz} className="mb-4 flex items-center gap-2 text-sm text-brand-medium hover:text-brand-blue font-medium bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 w-fit">
              <ChevronLeft size={16} /> Voltar
            </button>
          )}

          <div id="embedded-quiz-anchor" className={containerClasses}>
            {/* HEADER COM BARRA DE PROGRESSO */}
            {quizState !== 'intro' && quizState !== 'result' && (
              <div className="bg-slate-50 border-b border-slate-100 p-4 flex flex-col gap-2">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Análise de Perfil</span>
                  <span className="text-xs font-bold text-brand-blue bg-blue-50 px-2 py-0.5 rounded-md">
                    {quizState === 'analyzing_interstitial' ? '100%' : `${Math.round(((currentQuestionIndex) / activeQuiz.questions.length) * 100)}%`}
                  </span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-brand-blue h-full transition-all duration-700 ease-out rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                    style={{ width: quizState === 'analyzing_interstitial' ? '100%' : `${((currentQuestionIndex + 1) / activeQuiz.questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}

            {quizState === 'intro' && (
              <div className={`flex flex-col animate-fade-in p-8 md:p-12 items-center text-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed`}>
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-blue-600 text-white rounded-3xl rotate-3 flex items-center justify-center mb-6 shadow-xl shadow-blue-200">
                  <FileText size={40} />
                </div>
                <h2 className="font-black text-slate-900 mb-4 text-2xl md:text-3xl leading-tight">
                  {activeQuiz.title}
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed max-w-md text-lg">
                  {activeQuiz.description}
                </p>

                <div className="w-full max-w-xs space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 size={18} className="text-green-500" />
                    <span>Análise Gratuita</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <ShieldCheck size={18} className="text-blue-500" />
                    <span>Dados Seguros</span>
                  </div>
                </div>

                <button
                  onClick={handleStartQuiz}
                  className="mt-8 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl shadow-xl shadow-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3 justify-center w-full md:w-auto px-12 py-5 text-lg"
                >
                  Iniciar Verificação <ArrowRight size={22} />
                </button>
              </div>
            )}

            {quizState === 'active' && (
              <div className="flex flex-col h-full animate-fade-in bg-white">
                <div className="p-6 md:p-12 flex-grow flex flex-col justify-center items-center">
                  <h3 className="font-black text-slate-900 mb-10 text-center leading-snug text-xl md:text-2xl max-w-lg">
                    {activeQuiz.questions[currentQuestionIndex].text}
                  </h3>

                  <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
                    <button
                      onClick={() => handleAnswer(true)}
                      disabled={isEvaluated}
                      className={`group relative p-5 rounded-2xl border-2 flex items-center justify-between font-bold text-lg transition-all ${isEvaluated && selectedOption === true
                        ? 'bg-green-50 border-green-500 text-green-700'
                        : 'border-slate-100 hover:border-brand-blue hover:bg-blue-50 text-slate-700 bg-white'
                        }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isEvaluated && selectedOption === true ? 'border-green-500 bg-green-500 text-white' : 'border-slate-300 group-hover:border-brand-blue'}`}>
                          {isEvaluated && selectedOption === true && <CheckCircle2 size={14} />}
                        </span>
                        Sim
                      </span>
                      {isEvaluated && selectedOption === true && <Loader2 size={20} className="animate-spin text-green-600" />}
                    </button>

                    <button
                      onClick={() => handleAnswer(false)}
                      disabled={isEvaluated}
                      className={`group relative p-5 rounded-2xl border-2 flex items-center justify-between font-bold text-lg transition-all ${isEvaluated && selectedOption === false
                        ? 'bg-slate-100 border-slate-400 text-slate-500'
                        : 'border-slate-100 hover:border-red-400 hover:bg-red-50 text-slate-700 bg-white'
                        }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isEvaluated && selectedOption === false ? 'border-slate-500 bg-slate-500 text-white' : 'border-slate-300 group-hover:border-red-400'}`}>
                          {isEvaluated && selectedOption === false && <XCircle size={14} />}
                        </span>
                        Não / Não sei
                      </span>
                      {isEvaluated && selectedOption === false && <Loader2 size={20} className="animate-spin text-slate-600" />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* LOADING INTERSTITIAL (RETENTION HACK) */}
            {quizState === 'analyzing_interstitial' && (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] p-8 text-center animate-fade-in bg-white">
                <div className="relative mb-8">
                  <div className="w-24 h-24 border-4 border-slate-100 rounded-full"></div>
                  <div className="w-24 h-24 border-4 border-brand-blue border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                  <SearchCheck size={32} className="text-brand-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Analisando Perfil...</h3>
                <p className="text-slate-500 text-sm font-medium animate-pulse">{analysisMessages[analysisStep]}</p>

                <div className="mt-8 grid grid-cols-4 gap-2 w-full max-w-xs opacity-50">
                  {[0, 1, 2, 3].map(i => (
                    <div key={i} className={`h-1.5 rounded-full transition-colors ${i <= analysisStep ? 'bg-brand-blue' : 'bg-slate-200'}`} />
                  ))}
                </div>
              </div>
            )}

            {quizState === 'result' && (
              <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center animate-fade-in-up bg-white">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-3xl flex items-center justify-center mb-6 shadow-[0_10px_30px_rgba(22,163,74,0.2)]">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">Simulação Concluída</h3>
                <p className="text-slate-500 text-sm mb-8 max-w-sm font-medium">Seu perfil indica alta compatibilidade com os critérios do programa.</p>

                <div className="w-full bg-gradient-to-br from-slate-50 to-white p-6 rounded-3xl border border-slate-200 mb-8 shadow-inner">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Estimativa de Benefício</p>
                  <div className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                    R$ <span className="text-brand-blue">600</span><span className="text-2xl text-slate-400">,00</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 font-medium">+ Adicionais por filho aplicáveis</p>
                </div>

                <div className="w-full border-t border-slate-100 pt-6">
                  {renderRecommendations()}
                </div>

                <div className="mt-8">
                  <button onClick={() => setQuizState('intro')} className="text-slate-400 hover:text-brand-blue text-xs font-bold flex items-center gap-2 transition-colors mx-auto px-4 py-2 hover:bg-slate-50 rounded-lg">
                    <RotateCcw size={14} /> Refazer Simulação
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
