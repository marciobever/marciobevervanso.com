
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
  onTakeQuiz, 
  updatedDate = new Date().toLocaleDateString('pt-BR')
}) => {
  const [viewers, setViewers] = useState(120);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(80, prev + change);
      });
    }, 4000);

    const handleScroll = () => {
      if (window.scrollY > 600) {
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

  const scrollToQuiz = () => {
    document.getElementById('embedded-quiz-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 md:pb-20 font-sans relative">
      <div className="bg-brand-dark text-white text-[10px] md:text-xs py-2 text-center font-medium tracking-wide flex justify-center items-center gap-2">
        <span>PORTAL OFICIAL • CONTEÚDO VERIFICADO</span>
        <span className="hidden md:inline">•</span>
        <span className="flex items-center gap-1 text-green-400 animate-pulse">
           <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
           Online
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-6 max-w-4xl">
        
        {/* Simple Breadcrumb */}
        <nav className="flex items-center text-xs text-gray-500 mb-4">
           <button onClick={() => onNavigate && onNavigate('home')} className="hover:text-brand-blue"><Home size={14}/></button>
           <ChevronRight size={12} className="mx-1"/>
           <span className="text-gray-400">Notícias</span>
           <ChevronRight size={12} className="mx-1"/>
           <span className="text-brand-blue font-bold truncate max-w-[150px] md:max-w-none">{title.split(':')[0]}</span>
        </nav>

        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-white w-fit px-3 py-1 rounded-full shadow-sm border border-slate-100">
           <Eye size={14} className="text-red-500" />
           <span className="font-bold text-slate-700">{viewers} pessoas</span> estão lendo agora.
        </div>

        <header className="mb-6 text-center md:text-left">
           <span className="inline-flex items-center gap-1 py-1 px-3 rounded-md bg-blue-100/50 text-brand-blue text-xs font-bold uppercase tracking-widest mb-3 border border-blue-200">
             <Zap size={12} fill="currentColor" /> Atualizado em {updatedDate}
           </span>
           <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
             {title}
           </h1>
           <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
             {subtitle}
           </p>

           {/* AD PLACEMENT: RIGHT BELOW TITLE */}
           <div className="mt-6 mb-2">
              <AdSlot id="Content1" label="Publicidade" />
           </div>
        </header>

        {/* QUIZ SECTION - MOVED TO TOP (FIRST FOLD) */}
        <div id="embedded-quiz-anchor" className="mb-10 scroll-mt-24">
            {quizId && quizzes ? (
               <div className="transform transition-all hover:scale-[1.01] duration-300">
                  <div className="flex items-center gap-2 mb-2 px-1">
                     <span className="relative flex h-3 w-3">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                     </span>
                     <span className="text-xs font-bold text-green-700 uppercase tracking-wide">Ferramenta Oficial Liberada</span>
                  </div>
                  <QuizPage 
                    quizzes={quizzes}
                    activeQuizId={quizId}
                    onCloseQuiz={() => {}} // Embedded mode doesn't close
                    onSelectQuiz={() => {}}
                    onNavigate={onNavigate || (() => {})}
                    isEmbedded={true}
                  />
               </div>
            ) : onTakeQuiz ? (
               // Fallback for custom actions (like external links) styled as Quiz
               <div 
                  className="bg-white border-l-4 border-brand-blue rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all group"
                  onClick={onTakeQuiz}
               >
                  <div className="flex items-center gap-4">
                     <div className="bg-blue-50 p-3 rounded-full text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <CheckCircle2 size={32} />
                     </div>
                     <div className="flex-grow">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{quizTriggerLabel}</h3>
                        <p className="text-slate-500 text-sm">Acesse o sistema oficial para verificar seu cadastro.</p>
                     </div>
                     <div className="bg-brand-blue text-white p-2 rounded-lg">
                        <ArrowRight size={24} />
                     </div>
                  </div>
               </div>
            ) : null}
        </div>

        {/* ARTICLE CONTENT */}
        <article className="prose prose-lg prose-slate max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
          
          {children}

          {relatedArticle && (
            <div className="my-8 not-prose">
               <button 
                 onClick={relatedArticle.onClick}
                 className="flex items-center justify-center gap-2 w-full p-4 rounded-xl bg-blue-50 border-2 border-blue-100 text-brand-blue font-bold hover:bg-white hover:border-brand-blue transition-all shadow-sm group"
               >
                 <FileText size={20} className="group-hover:scale-110 transition-transform shrink-0"/> 
                 <span className="text-base">Leia também: {relatedArticle.title}</span>
               </button>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-gray-100">
            <AdSlot id="Content5" label="Publicidade Rodapé Conteúdo" />
          </div>

        </article>

        {/* COMMENTS SECTION */}
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

      {/* Sticky Footer for Mobile - Scrolls back to Top Quiz */}
      <div className={`fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-40 transition-transform duration-300 md:hidden ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
         <div className="flex items-center gap-3">
            <div className="flex-grow">
               <p className="text-xs text-gray-500 font-bold uppercase mb-0.5">Não perca o prazo</p>
               <p className="text-sm font-bold text-brand-dark truncate">{title}</p>
            </div>
            <button 
               onClick={scrollToQuiz}
               className="bg-green-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2 animate-pulse"
            >
               Fazer Teste <ArrowRight size={16} />
            </button>
         </div>
      </div>

    </div>
  );
};
