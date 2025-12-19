
import React, { useState, useEffect } from 'react';
import { AdSlot } from '../AdSlot';
import { Eye, Zap, ThumbsUp, MessageCircle, Home, ChevronRight, CheckCircle2, ArrowRight, FileText } from 'lucide-react';
import { Quiz, ViewState } from '../../types';
import QuizPage from '../QuizPage';

interface BroadcastLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  quizTriggerLabel?: string;
  quizId?: string;
  quizzes?: Quiz[];
  onNavigate?: (view: ViewState) => void;
  relatedArticle?: {
    title: string;
    onClick: () => void;
  };
  onTakeQuiz?: () => void; 
  updatedDate?: string;
}

const COMMENTS = [
  { name: 'Maria Silva', time: 'há 2 min', text: 'Gente, funcionou mesmo! Fiz a simulação aqui e vi que tinha direito. Já fui no CRAS e deu tudo certo.', likes: 24, avatarColor: 'bg-purple-600' },
  { name: 'João Souza', time: 'há 5 min', text: 'Muito bom esse guia. Estava com dúvida sobre o valor do adicional por criança e aqui explicou tudo.', likes: 18, avatarColor: 'bg-blue-600' },
  { name: 'Ana Paula', time: 'há 12 min', text: 'Alguém sabe se demora pra aprovar? Fiz o cadastro ontem.', likes: 5, avatarColor: 'bg-green-600', hasReply: true },
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
  onTakeQuiz, 
  updatedDate = "Hoje"
}) => {
  const [viewers, setViewers] = useState(120);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 4000);

    const handleScroll = () => {
      setShowSticky(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToQuiz = () => {
    document.getElementById('embedded-quiz-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 md:pb-20 font-sans relative">
      <div className="bg-brand-dark text-white text-[10px] md:text-xs py-2 text-center font-medium tracking-wide flex justify-center items-center gap-2">
        <span>PORTAL OFICIAL • CONTEÚDO VERIFICADO EM {new Date().getFullYear()}</span>
        <span className="flex items-center gap-1 text-green-400">
           <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
           Sistema Atualizado
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-6 max-w-4xl">
        
        <nav className="flex items-center text-xs text-gray-500 mb-4">
           <button onClick={() => onNavigate && onNavigate('home')} className="hover:text-brand-blue"><Home size={14}/></button>
           <ChevronRight size={12} className="mx-1"/>
           <span className="text-brand-blue font-bold truncate">Notícias Oficiais</span>
        </nav>

        <header className="mb-8 text-center md:text-left">
           <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 bg-white w-fit px-3 py-1 rounded-full shadow-sm border border-slate-100 mx-auto md:mx-0">
              <Eye size={14} className="text-red-500" />
              <span className="font-bold text-slate-700">{viewers} pessoas</span> lendo agora.
           </div>
           
           <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
             {title}
           </h1>
           <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
             {subtitle}
           </p>

           {/* UNICO ANÚNCIO PERMITIDO NA PÁGINA: ABAIXO DO TÍTULO */}
           <div className="mt-8 mb-4 border-y border-slate-100 py-4">
              <AdSlot 
                id="Content1" 
                label="Patrocinado" 
                eagerLoad={true} 
                disableFallback={true}
              />
           </div>
        </header>

        {/* QUIZ SECTION - PRIMEIRA DOBRA */}
        <div id="embedded-quiz-anchor" className="mb-12 scroll-mt-24">
            {quizId && quizzes && (
               <QuizPage 
                 quizzes={quizzes}
                 activeQuizId={quizId}
                 onCloseQuiz={() => {}}
                 onSelectQuiz={() => {}}
                 onNavigate={onNavigate || (() => {})}
                 isEmbedded={true}
               />
            )}
        </div>

        {/* ARTICLE CONTENT */}
        <article className="prose prose-lg prose-slate max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
          {children}
        </article>

        {/* COMMENTS */}
        <div className="mt-8 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
           <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <MessageCircle size={20} className="text-brand-blue" /> 
              Comentários Verificados
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
                          <button className="hover:text-brand-blue flex items-center gap-1"><ThumbsUp size={12} /> {comment.likes}</button>
                          <button className="hover:text-brand-blue">Responder</button>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>

      </div>

      {/* Sticky Bottom CTA */}
      <div className={`fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-40 transition-transform duration-300 md:hidden ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
         <div className="flex items-center gap-3">
            <div className="flex-grow">
               <p className="text-xs text-gray-500 font-bold uppercase mb-0.5">Simulação Pendente</p>
               <p className="text-sm font-bold text-brand-dark truncate">Verifique seu valor estimado</p>
            </div>
            <button 
               onClick={scrollToQuiz}
               className="bg-brand-blue text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg animate-pulse"
            >
               Fazer Simulação <ArrowRight size={16} className="inline ml-1" />
            </button>
         </div>
      </div>

    </div>
  );
};
