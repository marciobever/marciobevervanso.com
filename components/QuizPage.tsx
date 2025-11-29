import React, { useState, useEffect } from 'react';
import { Quiz, ViewState } from '../types';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, ChevronLeft, Loader2, Sparkles, Lock, FileText, Banknote, BookOpen, CalendarClock, ExternalLink, ShieldCheck, Users, Target } from 'lucide-react';
import { AdSlot } from './AdSlot';
import { Analytics } from '../lib/analytics';

interface QuizPageProps {
  quizzes: Quiz[];
  activeQuizId: string | null;
  onCloseQuiz: () => void;
  onSelectQuiz: (id: string) => void;
  onNavigate: (view: ViewState) => void;
  isEmbedded?: boolean; // NEW PROP: Toggle embedded mode
}

const QuizPage: React.FC<QuizPageProps> = ({ quizzes, activeQuizId, onCloseQuiz, onSelectQuiz, onNavigate, isEmbedded = false }) => {
  // State for quiz flow
  const [quizState, setQuizState] = useState<'intro' | 'active' | 'result'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<boolean | null>(null);
  const [showIntermissionAd, setShowIntermissionAd] = useState<boolean>(false);

  const activeQuiz = quizzes.find(q => q.id === activeQuizId);

  // If embedded, we might want to skip the "Intro" card and go straight to questions if the user clicked "Simulate" in the article
  // But keeping intro is nice for confirmation. Let's keep intro but styled differently.
  useEffect(() => {
    if (activeQuizId) {
      // If embedded, we can auto-start or show intro. Let's show intro for context but simpler.
      setQuizState('intro'); 
      setCurrentQuestionIndex(0);
      setAnswers({});
      setShowIntermissionAd(false);
    }
  }, [activeQuizId]);

  const handleStartQuiz = () => {
    if (activeQuiz) {
      Analytics.trackQuizStart(activeQuiz.id, activeQuiz.title);
    }
    setQuizState('active');
    // If embedded, scroll slightly to ensure visibility
    if (isEmbedded) {
       const el = document.getElementById('embedded-quiz-anchor');
       el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAnswer = (answer: boolean) => {
    if (!activeQuiz || isEvaluating) return;

    setSelectedOption(answer);
    setIsEvaluating(true);

    // 1.5s delay for embedded to feel snappier
    setTimeout(() => {
      const currentQId = activeQuiz.questions[currentQuestionIndex].id;
      const newAnswers = { ...answers, [currentQId]: answer };
      setAnswers(newAnswers);

      setIsEvaluating(false);
      setSelectedOption(null);

      // Ad Intermission Logic
      // In embedded mode, maybe skip the intermission ad to keep flow tight? 
      // Let's keep it but make it smaller in logic below.
      if (currentQuestionIndex === 4 && !isEmbedded) {
        setShowIntermissionAd(true);
      } else if (currentQuestionIndex < activeQuiz.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        const finalYesCount = Object.values(newAnswers).filter(v => v === true).length;
        const passed = finalYesCount / activeQuiz.questions.length >= 0.7;
        
        Analytics.trackQuizCompletion(
          activeQuiz.id, 
          activeQuiz.title, 
          passed ? 'eligible' : 'not_eligible'
        );
        
        setQuizState('result');
      }
    }, 1500);
  };

  const handleContinueFromAd = () => {
    setShowIntermissionAd(false);
    if (activeQuiz && currentQuestionIndex < activeQuiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const resetQuiz = (fullReset = true) => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    if(fullReset) setQuizState('intro');
    setShowIntermissionAd(false);
    setIsEvaluating(false);
    setSelectedOption(null);
  };

  const calculateResult = () => {
    if (!activeQuiz) return false;
    const yesCount = Object.values(answers).filter(v => v === true).length;
    return yesCount / activeQuiz.questions.length >= 0.7; 
  };

  const renderRecommendations = () => {
     if (!activeQuiz) return null;
     const p = activeQuiz.program.toLowerCase();

     let primaryAction = { label: 'Ver Últimas Notícias', view: 'news' as ViewState, icon: BookOpen };
     let secondaryAction = null;

     if (p.includes('bolsa')) {
        primaryAction = { label: 'Ler Guia Bolsa Família', view: 'guide-bolsa' as ViewState, icon: FileText };
        secondaryAction = { label: 'Calendário 2025', view: 'calendar' as ViewState, icon: CalendarClock };
     } else if (p.includes('bpc') || p.includes('loas')) {
        primaryAction = { label: 'Entender Regras do BPC', view: 'guide-bpc' as ViewState, icon: FileText };
     }

     return (
        <div className="w-full bg-slate-50 rounded-2xl p-5 border border-gray-100 mt-6 text-left">
           <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
              <Sparkles size={16} className="text-yellow-500" fill="currentColor" /> Próximos Passos
           </h4>
           
           <div className="space-y-3">
              <button 
                onClick={() => onNavigate(primaryAction.view)}
                className="w-full bg-white hover:bg-blue-50 border border-gray-200 hover:border-brand-blue p-4 rounded-xl flex items-center justify-between group transition-all"
              >
                 <div className="flex items-center gap-3">
                    <div className="bg-blue-100 text-brand-blue p-2 rounded-lg group-hover:bg-brand-blue group-hover:text-white transition-colors">
                       <primaryAction.icon size={20} />
                    </div>
                    <div className="text-left">
                       <span className="block font-bold text-brand-dark text-sm">{primaryAction.label}</span>
                    </div>
                 </div>
                 <ArrowRight size={18} className="text-gray-300 group-hover:text-brand-blue" />
              </button>
           </div>
        </div>
     );
  };

  // --------------------------------------------------------------------------------
  // VIEW: SINGLE QUIZ (INTRO / ACTIVE / RESULT)
  // --------------------------------------------------------------------------------
  if (activeQuizId && activeQuiz) {
    const info = activeQuiz.detailedInfo;
    
    // EMBEDDED CONTAINER STYLES - REFINED: White bg, Left Border Highlight
    const containerClasses = isEmbedded 
      ? "w-full bg-white rounded-xl border-l-4 border-brand-blue border-y border-r border-gray-100 overflow-hidden relative flex flex-col my-8 shadow-sm"
      : "bg-white rounded-3xl shadow-xl border border-blue-50 overflow-hidden relative min-h-[400px] flex flex-col";

    return (
      <div className={isEmbedded ? "font-sans text-brand-dark" : "min-h-screen bg-brand-light py-6 transition-colors duration-500"}>
        <div className={isEmbedded ? "" : "container mx-auto px-4 max-w-4xl"}>
          
          {/* Top Nav (Only if NOT embedded) */}
          {!isEmbedded && (
            <button 
              onClick={onCloseQuiz} 
              className="mb-4 flex items-center gap-2 text-sm text-brand-medium hover:text-brand-blue font-medium bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 w-fit"
            >
              <ChevronLeft size={16} /> Voltar
            </button>
          )}

          {/* Ad Top (Only if NOT embedded) */}
          {!isEmbedded && (
            <div className="mb-6">
              <AdSlot 
                id="Content1" 
                label="Publicidade em Destaque" 
                refreshKey={quizState === 'active' ? currentQuestionIndex : 'static'} 
              />
            </div>
          )}

          {/* MAIN QUIZ CARD */}
          <div id="embedded-quiz-anchor" className={containerClasses}>
             
             {/* DECORATION (Only for standalone) */}
             {!isEmbedded && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
             )}

             {/* STATE 1: INTRO */}
             {quizState === 'intro' && (
               <div className={`flex flex-col animate-fade-in ${isEmbedded ? 'p-6 items-start text-left' : 'p-8 items-center text-center bg-gradient-to-b from-white to-blue-50/30'}`}>
                  
                  {/* Icon */}
                  {!isEmbedded ? (
                    <div className="w-16 h-16 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center mb-4 shadow-sm">
                       <Sparkles size={32} />
                    </div>
                  ) : (
                    <div className="mb-3 flex items-center gap-2 text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                       <ShieldCheck size={16} />
                       <span className="text-xs font-bold uppercase tracking-wider">Verificação Oficial</span>
                    </div>
                  )}

                  <h2 className={`font-extrabold text-brand-dark mb-3 ${isEmbedded ? 'text-xl' : 'text-2xl'}`}>
                    {isEmbedded ? "Simulador de Elegibilidade" : activeQuiz.title}
                  </h2>
                  
                  <p className={`text-brand-medium mb-6 leading-relaxed ${isEmbedded ? 'text-sm' : 'text-base max-w-lg'}`}>
                    {isEmbedded ? "Responda a algumas perguntas rápidas para verificar se você cumpre os requisitos exigidos pelo governo para este benefício." : activeQuiz.description}
                  </p>
                  
                  <button 
                    onClick={handleStartQuiz}
                    className={`bg-brand-blue hover:bg-brand-hover text-white font-bold rounded-xl shadow-lg shadow-brand-blue/20 hover:-translate-y-1 transition-all flex items-center gap-2 justify-center ${isEmbedded ? 'w-full py-4 text-base' : 'px-10 py-3 text-lg w-full md:w-auto'}`}
                  >
                    {isEmbedded ? "Verificar Agora" : "Iniciar Teste"} <ArrowRight size={20} />
                  </button>
                  
                  {!isEmbedded && (
                      <p className="text-xs text-gray-400 mt-4 flex items-center gap-1 justify-center">
                        <ShieldCheck size={12} /> Seus dados não são armazenados.
                      </p>
                  )}
               </div>
             )}

             {/* STATE 2: INTERMISSION AD (Only if NOT embedded usually, but kept simple here) */}
             {quizState === 'active' && showIntermissionAd && !isEmbedded && (
               <div className="p-8 flex flex-col items-center justify-center h-full animate-fade-in text-center">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Intervalo Comercial</span>
                  <div className="w-full mb-6">
                     <AdSlot id="Content2" label="Oferta Especial" />
                  </div>
                  <button 
                    onClick={handleContinueFromAd}
                    className="bg-brand-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-hover transition-all flex items-center gap-2 shadow-lg"
                  >
                    Continuar para Resultado <ArrowRight size={18} />
                  </button>
               </div>
             )}

             {/* STATE 3: ACTIVE QUESTIONS */}
             {quizState === 'active' && (!showIntermissionAd || isEmbedded) && (
               <div className="flex flex-col h-full animate-fade-in">
                  {/* Header */}
                  <div className={`${isEmbedded ? 'bg-slate-100 text-slate-700 border-b border-gray-200' : 'bg-brand-blue text-white'} p-4 flex justify-between items-center`}>
                     <span className="font-bold text-sm opacity-90 truncate max-w-[200px]">{activeQuiz.program}</span>
                     <span className={`text-xs px-2 py-1 rounded ${isEmbedded ? 'bg-white border border-gray-200' : 'bg-white/20'}`}>Questão {currentQuestionIndex + 1}/{activeQuiz.questions.length}</span>
                  </div>
                  {/* Progress */}
                  <div className="w-full bg-gray-100 h-1.5">
                     <div className="bg-green-500 h-1.5 transition-all duration-500" style={{ width: `${((currentQuestionIndex) / activeQuiz.questions.length) * 100}%` }}></div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-center items-center">
                     <h3 className={`font-bold text-brand-dark mb-8 text-center leading-snug ${isEmbedded ? 'text-lg' : 'text-lg md:text-2xl'}`}>
                       {activeQuiz.questions[currentQuestionIndex].text}
                     </h3>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                        <button 
                          onClick={() => handleAnswer(true)}
                          disabled={isEvaluating}
                          className={`p-4 rounded-xl border-2 flex items-center justify-center gap-3 font-bold text-lg transition-all ${
                            isEvaluating && selectedOption === true ? 'bg-green-50 border-green-500 text-green-700' : 'border-gray-100 hover:border-green-500 hover:bg-green-50 text-gray-700 bg-white'
                          }`}
                        >
                          {isEvaluating && selectedOption === true ? <Loader2 className="animate-spin"/> : <CheckCircle2/>} Sim
                        </button>
                        
                        <button 
                          onClick={() => handleAnswer(false)}
                          disabled={isEvaluating}
                          className={`p-4 rounded-xl border-2 flex items-center justify-center gap-3 font-bold text-lg transition-all ${
                            isEvaluating && selectedOption === false ? 'bg-red-50 border-red-500 text-red-700' : 'border-gray-100 hover:border-red-500 hover:bg-red-50 text-gray-700 bg-white'
                          }`}
                        >
                          {isEvaluating && selectedOption === false ? <Loader2 className="animate-spin"/> : <XCircle/>} Não
                        </button>
                     </div>
                  </div>
               </div>
             )}

             {/* STATE 4: RESULT */}
             {quizState === 'result' && (
               <div className="p-8 flex flex-col items-center justify-center text-center h-full flex-grow animate-fade-in-up">
                  {calculateResult() ? (
                    <div className="mb-4">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-dark mb-2">Você tem o perfil!</h3>
                      <p className="text-brand-medium text-sm max-w-xs mx-auto">Com base nas respostas, você cumpre os requisitos básicos.</p>
                    </div>
                  ) : (
                     <div className="mb-4">
                      <div className="w-20 h-20 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                        <Lock size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-dark mb-2">Critérios Pendentes</h3>
                      <p className="text-brand-medium text-sm max-w-xs mx-auto">Alguns requisitos parecem não ter sido atendidos.</p>
                    </div>
                  )}

                  {/* Internal Recommendations */}
                  {renderRecommendations()}
                  
                  {/* Ad Result */}
                  {!isEmbedded && (
                    <div className="w-full my-6">
                       <AdSlot id="Content3" label="Oportunidades" />
                    </div>
                  )}

                  <div className="flex gap-3 w-full max-w-xs justify-center mt-6">
                     {isEmbedded ? (
                        <button onClick={onCloseQuiz} className="bg-gray-200 text-brand-dark px-6 py-3 rounded-xl font-bold hover:bg-gray-300 text-sm w-full transition-colors">
                           Fechar e Continuar Lendo
                        </button>
                     ) : (
                       <>
                         <button onClick={onCloseQuiz} className="bg-gray-100 text-brand-dark px-6 py-2 rounded-lg font-bold hover:bg-gray-200 text-sm">Voltar</button>
                         <button onClick={() => resetQuiz(true)} className="text-brand-medium hover:text-brand-blue py-2 text-sm font-semibold flex items-center gap-1"><RotateCcw size={14}/> Refazer</button>
                       </>
                     )}
                  </div>
               </div>
             )}
          </div>

          {/* RICH CONTENT ARTICLE (Show only if NOT embedded, because in embedded mode this IS the article content already around it) */}
          {!isEmbedded && info && (
            <article className="mt-8 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 prose prose-slate max-w-none">
               {/* Header Info */}
               <div className="flex items-center gap-2 text-brand-blue mb-4 border-b border-gray-100 pb-2">
                  <FileText size={20} />
                  <span className="text-sm font-bold uppercase tracking-widest">Guia Informativo</span>
               </div>
               
               <h1 className="text-2xl font-bold text-brand-dark mb-4">{info.introTitle}</h1>
               <p className="text-base text-brand-medium mb-6 leading-relaxed">{info.introText}</p>

               {/* Grid for Audience & Value */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 not-prose">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                     <h4 className="text-sm font-bold text-blue-800 uppercase mb-1 flex items-center gap-2">
                        <Users size={16} /> Público Alvo
                     </h4>
                     <p className="text-blue-900 font-medium">{info.targetAudience}</p>
                  </div>
                  {info.estimatedValue && (
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                       <h4 className="text-sm font-bold text-green-800 uppercase mb-1 flex items-center gap-2">
                          <Banknote size={16} /> Valor Estimado
                       </h4>
                       <p className="text-green-900 font-medium">{info.estimatedValue}</p>
                    </div>
                  )}
               </div>

               {/* Requirements List */}
               <h3 className="text-xl font-bold text-slate-800 mb-4">Principais Requisitos</h3>
               <ul className="space-y-3 not-prose">
                  {info.requirementsList.map((req, idx) => (
                     <li key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="mt-0.5 bg-brand-blue text-white rounded-full p-1 shrink-0">
                           <CheckCircle2 size={12} />
                        </div>
                        <span className="text-slate-700 font-medium text-sm">{req}</span>
                     </li>
                  ))}
               </ul>
            </article>
          )}
        </div>
      </div>
    );
  }

  // FALLBACK LIST VIEW (Standard)
  return (
      <div className="bg-brand-light min-h-screen py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-3 block">Simulador Oficial</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Verificação de Elegibilidade</h1>
          </div>
          <AdSlot id="Content1" label="Publicidade Patrocinada" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10">
            {quizzes.map((quiz) => (
              <div 
                key={quiz.id} 
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-card hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1 relative overflow-hidden" 
                onClick={() => onSelectQuiz(quiz.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-brand-light text-brand-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-blue-100">
                    {quiz.program}
                  </span>
                  <ArrowRight size={20} className="text-gray-300 group-hover:text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{quiz.title}</h3>
                <p className="text-sm text-brand-medium line-clamp-2">{quiz.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default QuizPage;