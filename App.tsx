
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StartHere from './components/StartHere';
import BenefitList from './components/BenefitList';
import CadUnicoSection from './components/CadUnicoSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { ViewState, Quiz } from './types';
import { Analytics } from './lib/analytics';
import { ConsultationModal } from './components/ConsultationModal';
import { AdSlot } from './components/AdSlot';
import { NotificationBar } from './components/NotificationBar';
import { FloatingShare } from './components/FloatingShare';
import { FloatingChat } from './components/FloatingChat';
import { CookieBanner } from './components/CookieBanner';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { AccessibilityBar } from './components/ui/AccessibilityBar';
import { InstallPrompt } from './components/ui/InstallPrompt';
import { STATIC_QUIZZES } from './constants';

// Lazy Load Components
const Dashboard = lazy(() => import('./components/Dashboard'));
const QuizPage = lazy(() => import('./components/QuizPage'));
const NewsPage = lazy(() => import('./components/NewsPage'));
const ChatPage = lazy(() => import('./components/ChatPage'));
const AnalyticsDashboard = lazy(() => import('./components/AnalyticsDashboard'));
const SecretMenu = lazy(() => import('./components/SecretMenu'));
const ScamDetector = lazy(() => import('./components/tools/ScamDetector').then(m => ({ default: m.ScamDetector })));
const LegalPage = lazy(() => import('./components/pages/LegalPage').then(m => ({ default: m.LegalPage })));

// Lazy Guides
const BolsaFamiliaGuide = lazy(() => import('./components/guides/BolsaFamiliaGuide'));
const BPCGuide = lazy(() => import('./components/guides/BPCGuide'));
const FarmaciaGuide = lazy(() => import('./components/guides/FarmaciaGuide').then(m => ({ default: m.FarmaciaGuide })));
const PisPasepGuide = lazy(() => import('./components/guides/PisPasepGuide').then(m => ({ default: m.PisPasepGuide })));
const AntenaGuide = lazy(() => import('./components/guides/AntenaGuide').then(m => ({ default: m.AntenaGuide })));
const IdJovemGuide = lazy(() => import('./components/guides/IdJovemGuide').then(m => ({ default: m.IdJovemGuide })));
const CadUnicoGuide = lazy(() => import('./components/guides/CadUnicoGuide').then(m => ({ default: m.CadUnicoGuide }))); // NEW

// Pages
const CardsPage = lazy(() => import('./components/pages/CardsPage').then(m => ({ default: m.CardsPage })));
const InsurancePage = lazy(() => import('./components/pages/InsurancePage').then(m => ({ default: m.InsurancePage })));
const ComparativoPage = lazy(() => import('./components/pages/ComparativoPage').then(m => ({ default: m.ComparativoPage })));
const LoansPage = lazy(() => import('./components/pages/LoansPage').then(m => ({ default: m.LoansPage })));
const CalendariosPage = lazy(() => import('./components/pages/CalendariosPage').then(m => ({ default: m.CalendariosPage })));
const AllBenefitsPage = lazy(() => import('./components/pages/AllBenefitsPage').then(m => ({ default: m.AllBenefitsPage })));
const BenefitsByStatePage = lazy(() => import('./components/pages/BenefitsByStatePage').then(m => ({ default: m.BenefitsByStatePage })));
const IncomeCalculator = lazy(() => import('./components/tools/IncomeCalculator').then(m => ({ default: m.IncomeCalculator })));

// Broadcast LPs
const MCMVPage = lazy(() => import('./components/broadcast/MCMVPage').then(m => ({ default: m.MCMVPage })));
const DentistaPage = lazy(() => import('./components/broadcast/DentistaPage').then(m => ({ default: m.DentistaPage })));
const CNHPage = lazy(() => import('./components/broadcast/CNHPage').then(m => ({ default: m.CNHPage })));
const PeDeMeiaPage = lazy(() => import('./components/broadcast/PeDeMeiaPage').then(m => ({ default: m.PeDeMeiaPage })));
const TarifaSocialPage = lazy(() => import('./components/broadcast/TarifaSocialPage').then(m => ({ default: m.TarifaSocialPage })));
const CardsNegativadoPage = lazy(() => import('./components/broadcast/CardsNegativadoPage').then(m => ({ default: m.CardsNegativadoPage })));
const CardsLimitePage = lazy(() => import('./components/broadcast/CardsLimitePage').then(m => ({ default: m.CardsLimitePage })));
const SeguroDividaPage = lazy(() => import('./components/broadcast/SeguroDividaPage').then(m => ({ default: m.SeguroDividaPage })));
const SeguroVidaPage = lazy(() => import('./components/broadcast/SeguroVidaPage').then(m => ({ default: m.SeguroVidaPage })));

// Admin Tools
const SocialPostGenerator = lazy(() => import('./components/admin/SocialPostGenerator').then(m => ({ default: m.SocialPostGenerator })));
const SeoTools = lazy(() => import('./components/admin/SeoTools').then(m => ({ default: m.SeoTools })));

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
  '/verificador-golpes': 'tool-scam',
  '/legal': 'legal',
  '/guia-bolsa-familia': 'guide-bolsa',
  '/guia-bpc': 'guide-bpc',
  '/guia-farmacia-popular': 'guide-farmacia',
  '/guia-pis-pasep-abono': 'guide-pis',
  '/guia-kit-antena-digital': 'guide-antena',
  '/guia-id-jovem-viagem': 'guide-idjovem',
  '/guia-cadastro-unico': 'guide-cadunico', // NEW
  '/tarifa-social-energia': 'landing-tarifa',
  '/minha-casa-minha-vida-2025-comparativo-faixas-beneficios': 'landing-mcmv',
  '/dentista-gratuito-sus-quiz-prioridade': 'landing-dentista',
  '/cnh-social-2025': 'landing-cnh',
  '/beneficio-pe-de-meia-2025-guia-completo': 'landing-pe-de-meia',
  '/cartao-credito-para-negativado-2025-lista-facil': 'landing-cards-negativado',
  '/ranking-cartoes-limite-alto-aprovacao-imediata': 'landing-cards-limite',
  '/lei-protege-herdeiros-seguro-quita-dividas': 'landing-seguro-divida',
  '/seguro-vida-popular-auxilio-funeral-5-reais': 'landing-seguro-vida',
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
            <CadUnicoSection onNavigate={handleNavigate} />
            <FaqSection />
            <AdSlot id="Content3" label="Mais Informações" className="my-12 md:my-16" />
          </>
        );
      case 'dashboard': return <Dashboard quizzes={quizzes} setQuizzes={setQuizzes} onTakeQuiz={handleStartQuiz} />;
      case 'tool-scam': return <ScamDetector />;
      case 'legal': return <LegalPage />;
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
      case 'guide-bolsa': return <BolsaFamiliaGuide />;
      case 'guide-bpc': return <BPCGuide />;
      case 'guide-farmacia': return <FarmaciaGuide onNavigate={handleNavigate} />;
      case 'guide-pis': return <PisPasepGuide onNavigate={handleNavigate} />;
      case 'guide-antena': return <AntenaGuide onNavigate={handleNavigate} />;
      case 'guide-idjovem': return <IdJovemGuide onNavigate={handleNavigate} />;
      case 'guide-cadunico': return <CadUnicoGuide onNavigate={handleNavigate} />; // NEW
      case 'calendar': 
      case 'calendarios': return <CalendariosPage />;
      case 'analytics': return <AnalyticsDashboard />;
      case 'secret-menu': return <SecretMenu onNavigate={handleNavigate} />;
      case 'admin-social': return <SocialPostGenerator onNavigate={handleNavigate} />;
      case 'admin-seo': return <SeoTools onNavigate={handleNavigate} />;
      case 'cards': return <CardsPage />;
      case 'insurance': return <InsurancePage />;
      case 'comparativo': return <ComparativoPage />;
      case 'loans': return <LoansPage />;
      case 'all-benefits': return <AllBenefitsPage onNavigate={handleNavigate} />;
      case 'benefits-by-state': return <BenefitsByStatePage onNavigate={handleNavigate} />;
      case 'calculator': return <IncomeCalculator onNavigate={handleNavigate} />;
      case 'landing-mcmv': return <MCMVPage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
      case 'landing-dentista': return <DentistaPage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
      case 'landing-cnh': return <CNHPage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
      case 'landing-pe-de-meia': return <PeDeMeiaPage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
      case 'landing-tarifa': return <TarifaSocialPage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
      case 'landing-cards-negativado': return <CardsNegativadoPage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
      case 'landing-cards-limite': return <CardsLimitePage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
      case 'landing-seguro-divida': return <SeguroDividaPage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
      case 'landing-seguro-vida': return <SeguroVidaPage onNavigate={handleNavigate} onSimulate={handleStartQuiz} quizzes={quizzes} />;
      case 'landing-bpc-comparativo':
      case 'landing-bolsa-comparativo':
      case 'landing-general-rights': return <ComparativoPage />;
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <StartHere onNavigate={handleNavigate} onOpenConsultation={() => setIsConsultationOpen(true)} />
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
        <Suspense fallback={<LoadingScreen />}>
          {renderContent()}
        </Suspense>
      </main>
      <Footer onNavigate={handleNavigate} />
      <AccessibilityBar />
      <InstallPrompt />
      <FloatingShare />
      <FloatingChat />
      <CookieBanner />
      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onNavigate={(view) => { setIsConsultationOpen(false); handleNavigate(view); }}
      />
    </div>
  );
}

export default App;
