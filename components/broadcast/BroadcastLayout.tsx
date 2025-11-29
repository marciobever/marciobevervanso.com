import React, { useState, useEffect } from 'react';
import { AdSlot } from '../AdSlot';
import { CheckCircle2, ArrowRight, FileText, Users, Eye, Zap, ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { Quiz, ViewState } from '../../types';
import QuizPage from '../QuizPage';

interface BroadcastLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  quizTriggerLabel?: string;
  
  // New props for embedded quiz logic
  quizId?: string;
  quizzes?: Quiz[];
  onNavigate?: (view: ViewState) => void;
  
  // Optional related article link
  relatedArticle?: {
    title: string;
    onClick: () => void;
  };
  
  // Deprecated/Legacy props (optional for backward compatibility if needed)
  onTakeQuiz?: () => void; 
  updatedDate?: string;
}

// Fake comments data
const COMMENTS = [
  { name: 'Maria Silva', time: 'há 2 min', text: 'Gente, funcionou mesmo! Fiz a simulação aqui e vi que tinha direito. Já fui no CRAS e deu tudo certo.', likes: 24, avatarColor: 'bg-purple-600' },
  { name: 'João Souza', time: 'há 5 min', text: 'Muito bom esse guia. Estava com dúvida sobre o valor do adicional por criança e aqui explicou tudo.', likes: 18, avatarColor: 'bg-blue-600' },
  { name: 'Ana Paula', time: 'há 12 min', text: 'Alguém sabe se demora pra aprovar? Fiz o cadastro ontem.', likes: 5, avatarColor: 'bg-green-600', hasReply: true },
  { name: 'Carlos Ferreira', time: 'há 45 min', text: 'Obrigado pelas informações! O site do governo estava fora do ar, mas aqui consegui entender as regras.', likes: 42, avatarColor: 'bg-orange-600' },
  { name: 'Fernanda Lima', time: 'há 1 h', text: 'Consegui meu cartão depois de ver a dica do score aqui no site. Recomendo!', likes: 31, avatarColor: 'bg-pink-600' },
];

export const BroadcastLayout: React.FC<BroadcastLayoutProps> = ({ 
  title, 
  subtitle, 
  children, 
  quizTriggerLabel = "Verificar Elegibilidade Agora", 
  quizId,
  quizzes,
  onNavigate,
  relatedArticle,
  onTakeQuiz, // Legacy handler, still supported if no quizId provided
  updatedDate = new Date().toLocaleDateString('pt-BR')
}) => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [viewers, setViewers] = useState(120);
  const [showSticky, setShowSticky] = useState(false);

  // Effect for Fake Real-time Viewers & Sticky Footer Scroll
  useEffect(() => {
    // Randomize viewers slightly
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(80, prev + change);
      });
    }, 4000);

    // Scroll listener for sticky footer
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSimulateClick = () => {
    // Safety check: ensure the quiz ID actually exists in the provided list
    const targetQuiz = quizzes?.find(q => q.id === quizId);
    
    if (quizId && quizzes && targetQuiz) {
      setIsQuizOpen(true);
      setTimeout(() => {
        document.getElementById('embedded-quiz-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } else if (onTakeQuiz) {
      onTakeQuiz();
    } else {
       console.warn("Quiz not found or not provided");
       // Optional: Navigate to main quiz page fallback
       if(onNavigate) onNavigate('quizzes');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 md:pb-20 font-sans relative">
      {/* Top Warning / Trust Bar */}
      <div className="bg-brand-dark text-white text-[10px] md:text-xs py-2 text-center font-medium tracking-wide flex justify-center items-center gap-2">
        <span>PORTAL OFICIAL • CONTEÚDO VERIFICADO</span>
        <span className="hidden md:inline">•</span>
        <span className="flex items-center gap-1 text-green-400 animate-pulse">
           <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
           Online
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-6 max-w-4xl">
        
        {/* Social Proof Bar - High Trust Factor */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 bg-white w-fit px-3 py-1 rounded-full shadow-sm border border-slate-100 mx-auto md:mx-0">
           <Eye size={14} className="text-red-500" />
           <span className="font-bold text-slate-700">{viewers} pessoas</span> estão lendo esta notícia agora.
        </div>

        {/* Ad Container - Top (High Visibility) */}
        <div className="bg-slate-50/95 pt-2 pb-6 border-b border-gray-200 mb-6">
           <AdSlot id="Content1" label="Recomendado para Você" />
        </div>

        {/* Header Content */}
        <header className="mb-8 text-center md:text-left">
           <span className="inline-flex items-center gap-1 py-1 px-3 rounded-md bg-blue-100/50 text-brand-blue text-xs font-bold uppercase tracking-widest mb-3 border border-blue-200">
             <Zap size={12} fill="currentColor" /> Atualizado em {updatedDate}
           </span>
           <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
             {title}
           </h1>
           <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
             {subtitle}
           </p>
        </header>

        {/* Main Content Area */}
        <article className="prose prose-lg prose-slate max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
          
          {children}

          {/* Native Ad Slot "In-Content" - High CTR Area */}
          <div className="my-8 not-prose">
             <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl p-1">
                <AdSlot id="Content2" label="Publicidade" />
             </div>
          </div>

          {/* DYNAMIC CONTENT: CTA Button OR Embedded Quiz */}
          <div className="my-10">
            {isQuizOpen && quizId && quizzes ? (
               <div id="embedded-quiz-container" className="animate-fade-in-up">
                  <QuizPage 
                    quizzes={quizzes}
                    activeQuizId={quizId}
                    onCloseQuiz={() => setIsQuizOpen(false)}
                    onSelectQuiz={() => {}}
                    onNavigate={onNavigate || (() => {})}
                    isEmbedded={true}
                  />
               </div>
            ) : (
              <div className="flex flex-col gap-4">
                {/* Main CTA - Conversion Focus */}
                <div 
                  className="bg-brand-light border-2 border-brand-blue rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl shadow-brand-blue/10 transform hover:scale-[1.01] transition-transform cursor-pointer relative overflow-hidden group" 
                  onClick={handleSimulateClick}
                >
                  <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider z-10">
                     Gratuito
                  </div>
                  
                  <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center shrink-0 animate-pulse ring-4 ring-blue-100">
                      <CheckCircle2 size={32} />
                  </div>
                  <div className="flex-grow text-center md:text-left z-10">
                      <h3 className="text-xl font-bold text-brand-dark mb-1 m-0">Consultar Disponibilidade</h3>
                      <p className="text-brand-medium m-0 text-sm md:text-base leading-snug">Faça a simulação oficial e veja se seu CPF está apto.</p>
                  </div>
                  <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-xl flex items-center gap-2 shadow-lg shadow-green-600/20 whitespace-nowrap z-10 group-hover:bg-green-500 transition-all">
                      {quizTriggerLabel} <ArrowRight size={20} />
                  </button>
                </div>

                {/* Related Article Link - SEO & Pageviews */}
                {relatedArticle && (
                  <button 
                    onClick={relatedArticle.onClick}
                    className="flex items-center justify-center gap-2 text-brand-blue hover:text-brand-hover text-sm font-semibold hover:underline decoration-2 underline-offset-4 py-3 bg-blue-50/50 rounded-xl transition-all border border-transparent hover:border-blue-100"
                  >
                    <FileText size={16} /> <span className="truncate max-w-[300px] md:max-w-none">Leia também: {relatedArticle.title}</span>
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <AdSlot id="Content5" label="Publicidade Rodapé Conteúdo" />
          </div>

        </article>

        {/* COMMENTS SECTION - SOCIAL PROOF */}
        <div className="mt-8 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
           <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <MessageCircle size={20} className="text-brand-blue" /> 
              Comentários ({COMMENTS.length})
           </h3>

           <div className="space-y-6">
              {COMMENTS.map((comment, idx) => (
                 <div key={idx} className="flex gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ${comment.avatarColor}`}>
                       {comment.name.charAt(0)}
                    </div>
                    <div className="flex-grow">
                       <div className="bg-slate-50 p-3 rounded-2xl rounded-tl-none border border-slate-100">
                          <div className="flex justify-between items-center mb-1">
                             <span className="font-bold text-slate-900 text-sm">{comment.name}</span>
                             <span className="text-xs text-gray-400">{comment.time}</span>
                          </div>
                          <p className="text-sm text-slate-700 leading-snug">{comment.text}</p>
                       </div>
                       <div className="flex items-center gap-4 mt-1 ml-2 text-xs text-gray-500 font-semibold">
                          <button className="hover:text-brand-blue flex items-center gap-1">
                             <ThumbsUp size={12} /> Curtir ({comment.likes})
                          </button>
                          <button className="hover:text-brand-blue">Responder</button>
                          {comment.hasReply && (
                             <span className="text-brand-blue flex items-center gap-1 cursor-pointer">
                                <div className="w-4 h-px bg-gray-300"></div> Ver resposta
                             </span>
                          )}
                       </div>
                    </div>
                 </div>
              ))}
           </div>
           
           <button className="w-full mt-6 py-3 border border-gray-200 text-gray-500 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors">
              Carregar mais comentários
           </button>
        </div>

      </div>

      {/* STICKY MOBILE FOOTER CTA - REVENUE DRIVER */}
      {/* Shows only on mobile/tablet when user scrolls past header */}
      <div className={`fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-40 transition-transform duration-300 md:hidden ${showSticky && !isQuizOpen ? 'translate-y-0' : 'translate-y-full'}`}>
         <div className="flex items-center gap-3">
            <div className="flex-grow">
               <p className="text-xs text-gray-500 font-bold uppercase mb-0.5">Não perca o prazo</p>
               <p className="text-sm font-bold text-brand-dark truncate">{title}</p>
            </div>
            <button 
               onClick={handleSimulateClick}
               className="bg-green-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2 animate-pulse"
            >
               Simular <ArrowRight size={16} />
            </button>
         </div>
      </div>

    </div>
  );
};