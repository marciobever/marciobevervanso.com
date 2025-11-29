import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StartHere from './components/StartHere';
import BenefitList from './components/BenefitList';
import CadUnicoSection from './components/CadUnicoSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import QuizPage from './components/QuizPage';
import NewsPage from './components/NewsPage';
import ChatPage from './components/ChatPage';
import BolsaFamiliaGuide from './components/guides/BolsaFamiliaGuide';
import BPCGuide from './components/guides/BPCGuide';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import SecretMenu from './components/SecretMenu';
import { CardsPage } from './components/pages/CardsPage';
import { InsurancePage } from './components/pages/InsurancePage';
import { ComparativoPage } from './components/pages/ComparativoPage';
import { LoansPage } from './components/pages/LoansPage';
import { CalendariosPage } from './components/pages/CalendariosPage';
import { AllBenefitsPage } from './components/pages/AllBenefitsPage';
import { BenefitsByStatePage } from './components/pages/BenefitsByStatePage';
import { IncomeCalculator } from './components/tools/IncomeCalculator';
import { MCMVPage } from './components/broadcast/MCMVPage';
import { DentistaPage } from './components/broadcast/DentistaPage';
import { CNHPage } from './components/broadcast/CNHPage';
import { PeDeMeiaPage } from './components/broadcast/PeDeMeiaPage';
import { CardsNegativadoPage } from './components/broadcast/CardsNegativadoPage';
import { CardsLimitePage } from './components/broadcast/CardsLimitePage';
import { SeguroDividaPage } from './components/broadcast/SeguroDividaPage';
import { SeguroVidaPage } from './components/broadcast/SeguroVidaPage';
import { SocialPostGenerator } from './components/admin/SocialPostGenerator';
import { SeoTools } from './components/admin/SeoTools';

// Import New Guides
import { FarmaciaGuide } from './components/guides/FarmaciaGuide';
import { PisPasepGuide } from './components/guides/PisPasepGuide';
import { AntenaGuide } from './components/guides/AntenaGuide';
import { IdJovemGuide } from './components/guides/IdJovemGuide';

import { ViewState, Quiz } from './types';
import { Analytics } from './lib/analytics';
import { ConsultationModal } from './components/ConsultationModal';
import { AdSlot } from './components/AdSlot';
import { NotificationBar } from './components/NotificationBar';
import { FloatingShare } from './components/FloatingShare';
import { STATIC_QUIZZES } from './constants';

// Mapeamento de Rotas (URL -> ViewState)
const ROUTES: Record<string, ViewState> = {
  '/': 'home',
  '/beneficios': 'all-benefits',
  '/estados': 'benefits-by-state',
  '/calendarios': 'calendarios',
  '/cartoes': 'cards',
  '/seguros': 'insurance',
  '/comparativo': 'comparativo',
  '/emprestimos': 'loans',
  '/calculadora': 'calculator',
  '/quiz': 'quizzes',
  '/noticias': 'news',
  '/chat': 'chat',
  '/dashboard': 'dashboard',
  // Guias
  '/guia-bolsa-familia': 'guide-bolsa',
  '/guia-bpc': 'guide-bpc',
  '/guia-farmacia-popular': 'guide-farmacia',
  '/guia-pis-pasep-abono': 'guide-pis',
  '/guia-kit-antena-digital': 'guide-antena',
  '/guia-id-jovem-viagem': 'guide-idjovem',
  // Broadcasts (LPs Governamentais)
  '/minha-casa-minha-vida-2025-comparativo-faixas-beneficios': 'landing-mcmv',
  '/dentista-gratuito-sus-quiz-prioridade': 'landing-dentista',
  '/cnh-social-2025': 'landing-cnh',
  '/beneficio-pe-de-meia-2025-guia-completo': 'landing-pe-de-meia',
  // LPs Alta Conversão (Ads)
  '/cartao-credito-para-negativado-2025-lista-facil': 'landing-cards-negativado',
  '/ranking-cartoes-limite-alto-aprovacao-imediata': 'landing-cards-limite',
  '/lei-protege-herdeiros-seguro-quita-dividas': 'landing-seguro-divida',
  '/seguro-vida-popular-auxilio-funeral-5-reais': 'landing-seguro-vida',
  // Admin
  '/admin': 'secret-menu',
  '/admin/social': 'admin-social',
  '/admin/seo': 'admin-seo',
  '/admin/analytics': 'analytics'
};

function App() {
  const getInitialView = (): ViewState => {
    try {
      if (typeof window === 'undefined' || window.location.protocol === 'blob:') return 'home';
      const path = window.location.pathname;
      const normalizedPath = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
      if (ROUTES[normalizedPath]) {
        return ROUTES[normalizedPath];
      }
    } catch (e) { }
    return 'home';
  };

  const [currentView, setCurrentView] = useState<ViewState>(getInitialView);
  const [quizzes, setQuizzes] = useState<Quiz[]>(STATIC_QUIZZES);
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getInitialView());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    Analytics.trackPageView(currentView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigate = (view: ViewState) => {
    if (!view) {
      setCurrentView('home');
      return;
    }
    const path = Object.keys(ROUTES).find(key => ROUTES[key] === view) || '/';
    try {
      if (window.history && typeof window.history.pushState === 'function') {
         window.history.pushState({}, '', path);
      }
    } catch (error) {}
    setCurrentView(view);
    if (view !== 'quizzes') {
      setActiveQuizId(null);
    }
  };

  const handleStartQuiz = (id: string) => {
    setActiveQuizId(id);
    handleNavigate('quizzes');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <StartHere onNavigate={handleNavigate} onOpenConsultation={() => setIsConsultationOpen(true)} />
            <AdSlot id="Content1" label="Destaque Principal" className="my-12 md:my-16" />
            <BenefitList onNavigate={handleNavigate} />
            <AdSlot id="Content2" label="Publicidade" className="my-12 md:my-16" />
            <CadUnicoSection />
            <FaqSection />
            <AdSlot id="Content3" label="Mais Informações" className="my-12 md:my-16" />
          </>
        );
      case 'dashboard': return <Dashboard quizzes={quizzes} setQuizzes={setQuizzes} onTakeQuiz={handleStartQuiz} />;
      case 'quizzes':
        return (
          <QuizPage 
            quizzes={quizzes} 
            activeQuizId={activeQuizId} 
            onCloseQuiz={() => { setActiveQuizId(null); handleNavigate('quizzes'); }} 
            onSelectQuiz={handleStartQuiz}
            onNavigate={handleNavigate}
          />
        );
      case 'news': return <NewsPage />;
      case 'chat': return <ChatPage />;
      
      // Existing Guides
      case 'guide-bolsa': return <BolsaFamiliaGuide />;
      case 'guide-bpc': return <BPCGuide />;
      // NEW Guides
      case 'guide-farmacia': return <FarmaciaGuide onNavigate={handleNavigate} />;
      case 'guide-pis': return <PisPasepGuide onNavigate={handleNavigate} />;
      case 'guide-antena': return <AntenaGuide onNavigate={handleNavigate} />;
      case 'guide-idjovem': return <IdJovemGuide onNavigate={handleNavigate} />;

      case 'calendar': 
      case 'calendarios': return <CalendariosPage />;
      case 'analytics': return <AnalyticsDashboard />;
      case 'secret-menu': return <SecretMenu onNavigate={handleNavigate} />;
      
      // Admin Tools
      case 'admin-social': return <SocialPostGenerator onNavigate={handleNavigate} />;
      case 'admin-seo': return <SeoTools onNavigate={handleNavigate} />;

      case 'cards': return <CardsPage />;
      case 'insurance': return <InsurancePage />;
      case 'comparativo': return <ComparativoPage />;
      case 'loans': return <LoansPage />;
      case 'all-benefits': return <AllBenefitsPage onNavigate={handleNavigate} />;
      case 'benefits-by-state': return <BenefitsByStatePage onNavigate={handleNavigate} />;
      case 'calculator': return <IncomeCalculator onNavigate={handleNavigate} />;
        
      // Broadcast / Landing Pages Governamentais
      case 'landing-mcmv': return <MCMVPage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
      case 'landing-dentista': return <DentistaPage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
      case 'landing-cnh': return <CNHPage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
      case 'landing-pe-de-meia': return <PeDeMeiaPage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
      
      // Fallbacks
      case 'landing-bpc-comparativo':
      case 'landing-bolsa-comparativo':
      case 'landing-general-rights': return <ComparativoPage />;

      // Broadcast / Landing Pages Alta Conversão (Ads)
      case 'landing-cards-negativado': return <CardsNegativadoPage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
      case 'landing-cards-limite': return <CardsLimitePage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
      case 'landing-seguro-divida': return <SeguroDividaPage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
      case 'landing-seguro-vida': return <SeguroVidaPage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
        
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <StartHere onNavigate={handleNavigate} onOpenConsultation={() => setIsConsultationOpen(true)} />
            <AdSlot id="Content1" label="Destaque Principal" className="my-12 md:my-16" />
            <BenefitList onNavigate={handleNavigate} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark flex flex-col">
      <NotificationBar onNavigate={handleNavigate} />
      <Header onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <FloatingShare />
      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onNavigate={(view) => { setIsConsultationOpen(false); handleNavigate(view); }}
      />
    </div>
  );
}

export default App;