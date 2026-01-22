import React, { useState, useEffect, Suspense, lazy } from 'react';
import { SEOProvider } from './components/seo/SEOProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import StartHere from './components/StartHere';
import BenefitList from './components/BenefitList';
import CadUnicoSection from './components/CadUnicoSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FinancialSection from './components/FinancialSection';
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
import { ErrorBoundary } from './components/ErrorBoundary';
import { MetaHead } from './components/seo/MetaHead'; // Import SEO
import { StoriesGallery } from './components/web-stories/StoriesGallery'; // Import Stories
import { STATIC_QUIZZES, CREDIT_CARDS } from './constants';

// Lazy Load Components
const Dashboard = lazy(() => import('./components/Dashboard'));
const QuizPage = lazy(() => import('./components/QuizPage'));
const NewsPage = lazy(() => import('./components/NewsPage'));
const ChatPage = lazy(() => import('./components/ChatPage'));
const AnalyticsDashboard = lazy(() => import('./components/AnalyticsDashboard'));
const SecretMenu = lazy(() => import('./components/SecretMenu'));
const ScamDetector = lazy(() => import('./components/tools/ScamDetector').then(m => ({ default: m.ScamDetector })));
const LegalPage = lazy(() => import('./components/pages/LegalPage').then(m => ({ default: m.LegalPage })));
// Fix: Added missing lazy imports for SocialPostGenerator and SeoTools
const SocialPostGenerator = lazy(() => import('./components/admin/SocialPostGenerator').then(m => ({ default: m.SocialPostGenerator })));
const SeoTools = lazy(() => import('./components/admin/SeoTools').then(m => ({ default: m.SeoTools })));

// Lazy Guides
const BolsaFamiliaGuide = lazy(() => import('./components/guides/BolsaFamiliaGuide'));
const BPCGuide = lazy(() => import('./components/guides/BPCGuide'));
const FarmaciaGuide = lazy(() => import('./components/guides/FarmaciaGuide').then(m => ({ default: m.FarmaciaGuide })));
const PisPasepGuide = lazy(() => import('./components/guides/PisPasepGuide').then(m => ({ default: m.PisPasepGuide })));
const AntenaGuide = lazy(() => import('./components/guides/AntenaGuide').then(m => ({ default: m.AntenaGuide })));
const IdJovemGuide = lazy(() => import('./components/guides/IdJovemGuide').then(m => ({ default: m.IdJovemGuide })));
const CadUnicoGuide = lazy(() => import('./components/guides/CadUnicoGuide').then(m => ({ default: m.CadUnicoGuide })));

// Pages
const CardsPage = lazy(() => import('./components/pages/CardsPage'));
const CardDetailsPage = lazy(() => import('./components/pages/CardDetailsPage'));
const InsurancePage = lazy(() => import('./components/pages/InsurancePage').then(m => ({ default: m.InsurancePage })));
const InsuranceQuotePage = lazy(() => import('./components/pages/InsuranceQuotePage').then(m => ({ default: m.InsuranceQuotePage })));
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
const BolsaFamiliaLP = lazy(() => import('./components/broadcast/BolsaFamiliaLP').then(m => ({ default: m.BolsaFamiliaLP })));

// Legacy Pages
import {
  QuizBeneficiosPage,
  BrasilSorridentePrivadoPage,
  BrasilSorridenteOdontoPage,
  BeneficiosFamiliaPage,
  AuxilioReconstrucaoPage,
  AuxilioMaeSolteiraPage,
  AuxilioGasPage,
  AuxilioCombustivelPage,
  BpcBolsaLegacyPage,
  GuiaDireitosPage,
  CnhLegacyPage,
  BolsaFamiliaLegacyPage
} from './components/pages/LegacyArticles';

const ROUTES: Record<string, ViewState> = {
  '/': 'home',
  '/beneficios': 'all-benefits',
  '/estados': 'benefits-by-state',
  '/calendarios': 'calendarios',
  '/cartoes': 'cards',
  '/detalhes-cartao': 'card-details',
  '/seguros': 'insurance',
  '/cotacao-seguro': 'insurance-quote',
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
  '/guia-cadastro-unico': 'guide-cadunico',
  '/tarifa-social-energia': 'landing-tarifa',
  '/minha-casa-minha-vida-2025-comparativo-faixas-beneficios': 'landing-mcmv',
  '/dentista-gratuito-sus-quiz-prioridade': 'landing-dentista',
  '/cnh-social-2025': 'landing-cnh',
  '/beneficio-pe-de-meia-2025-guia-completo': 'landing-pe-de-meia',
  '/bolsa-familia-2025-calendario-regras-valores': 'landing-bolsa-comparativo', // Mapeando nova LP
  '/cartao-credito-para-negativado-2025-lista-facil': 'landing-cards-negativado',
  '/ranking-cartoes-limite-alto-aprovacao-imediata': 'landing-cards-limite',
  '/lei-protege-herdeiros-seguro-quita-dividas': 'landing-seguro-divida',
  '/seguro-vida-popular-auxilio-funeral-5-reais': 'landing-seguro-vida',
  '/admin': 'secret-menu',
  '/admin/social': 'admin-social',
  '/admin/seo': 'admin-seo',
  '/admin/analytics': 'analytics',

  // Legacy
  '/quiz-beneficios-sociais': 'legacy-quiz',
  '/bolsa-familia': 'guide-bolsa',
  '/brasil-sorridente': 'landing-dentista',
  '/brasil-sorridente-vs-planos-privados-comparativo-2025': 'legacy-dental-priv',
  '/brasil-sorridente-vs-planos-odontologicos-comparativo-2025': 'legacy-dental-plan',
  '/beneficios-governo-familia-2025-comparativo': 'legacy-family-ben',
  '/auxilio-reconstrucao-federal-estadual-comparativo-2025': 'legacy-reconstruction',
  '/auxilio-mae-solteira-vs-bolsa-familia-2025': 'legacy-single-mom',
  '/auxilio-gas-vs-gas-do-povo-regras-2025': 'legacy-gas',
  '/auxilio-combustivel-guia-completo-como-funciona': 'legacy-fuel',
  '/bpc-vs-bolsa-familia-2025-comparativo-beneficios': 'legacy-bpc-bolsa',
  '/beneficios-sociais-governo-federal-guia-direitos-2025': 'legacy-general-rights',
  '/cnh-gratuita-social-comparativo-regras-2025': 'legacy-cnh-rules',
  '/bpc-loas-2025-comparativo-regras-valores': 'guide-bpc',
  '/bolsa-familia-comparativo-beneficios-regras': 'legacy-bolsa-rules'
};

function App() {
  const getInitialView = (): ViewState => {
    try {
      if (typeof window === 'undefined') return 'home';
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
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [selectedInsuranceId, setSelectedInsuranceId] = useState<string | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Initialize state from URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const qId = params.get('quizId');
    const cId = params.get('cardId');
    const iId = params.get('insId');

    if (qId) {
      setActiveQuizId(qId);
      if (currentView !== 'quizzes' && !currentView.startsWith('landing')) {
        setCurrentView('quizzes');
      }
    }
    if (cId) {
      setSelectedCardId(cId);
      if (currentView !== 'card-details') setCurrentView('card-details');
    }
    if (iId) {
      setSelectedInsuranceId(iId);
      if (currentView !== 'insurance-quote') setCurrentView('insurance-quote');
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigate = (view: ViewState) => {
    if (!view) {
      window.location.href = '/';
      return;
    }
    const path = Object.keys(ROUTES).find(key => ROUTES[key] === view) || '/';
    window.location.href = path;
  };

  const handleStartQuiz = (id: string) => {
    window.location.href = `/quiz?quizId=${id}`;
  };

  const handleViewCard = (cardId: string) => {
    window.location.href = `/detalhes-cartao?cardId=${cardId}`;
  };

  const handleQuoteInsurance = (id: string) => {
    window.location.href = `/cotacao-seguro?insId=${id}`;
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <MetaHead
              title="Guia Social Brasil 2025: Consulta de Benefícios e Cidadania"
              description="Portal informativo independente. Consulte o Calendário Bolsa Família 2025, regras do BPC/LOAS, CNH Social e Empréstimos."
            />
            <Hero onNavigate={handleNavigate} />
            <StartHere onNavigate={handleNavigate} onOpenConsultation={() => setIsConsultationOpen(true)} />
            <AdSlot id="Content1" label="Destaque Principal" className="my-12 md:my-16" />
            <BenefitList onNavigate={handleNavigate} />
            <FinancialSection onNavigate={handleNavigate} />

            <CadUnicoSection onNavigate={handleNavigate} />
            <div id="web-stories" className="bg-slate-50 border-t border-gray-200 py-12">
              <StoriesGallery onNavigate={handleNavigate} />
            </div>
            <FaqSection />

          </>
        );
      case 'dashboard': return <Dashboard quizzes={quizzes} setQuizzes={setQuizzes} onTakeQuiz={handleStartQuiz} />;
      case 'tool-scam': return <ScamDetector />;
      case 'legal': return <LegalPage />;
      case 'quizzes':
        return (
          <>
            <MetaHead
              title="Simulador de Elegibilidade: Teste Oficial"
              description="Responda ao quiz e descubra na hora se você tem direito aos principais benefícios do governo."
            />
            <QuizPage
              quizzes={quizzes}
              activeQuizId={activeQuizId}
              onCloseQuiz={() => { window.location.href = '/quiz'; }}
              onSelectQuiz={handleStartQuiz}
              onNavigate={handleNavigate}
            />
          </>
        );
      case 'news': return <NewsPage />;
      case 'chat': return <ChatPage />;
      case 'guide-bolsa': return <BolsaFamiliaGuide />;
      case 'guide-bpc': return <BPCGuide />;
      case 'guide-farmacia': return <FarmaciaGuide onNavigate={handleNavigate} />;
      case 'guide-pis': return <PisPasepGuide onNavigate={handleNavigate} />;
      case 'guide-antena': return <AntenaGuide onNavigate={handleNavigate} />;
      case 'guide-idjovem': return <IdJovemGuide onNavigate={handleNavigate} />;
      case 'guide-cadunico': return <CadUnicoGuide onNavigate={handleNavigate} />;
      case 'calendar':
      case 'calendarios': return <CalendariosPage />;
      case 'analytics': return <AnalyticsDashboard />;
      case 'secret-menu': return <SecretMenu onNavigate={handleNavigate} />;
      case 'admin-social': return <SocialPostGenerator onNavigate={handleNavigate} />;
      case 'admin-seo': return <SeoTools onNavigate={handleNavigate} />;
      case 'cards': return <CardsPage onViewDetails={handleViewCard} />;
      case 'card-details': {
        const card = CREDIT_CARDS.find(c => c.id === selectedCardId);
        if (!card) return <CardsPage onViewDetails={handleViewCard} />;
        return <CardDetailsPage card={card} onNavigate={handleNavigate} onBack={() => handleNavigate('cards')} />;
      }
      case 'insurance': return <InsurancePage onQuote={handleQuoteInsurance} />;
      case 'insurance-quote': return <InsuranceQuotePage insuranceId={selectedInsuranceId} onNavigate={handleNavigate} />;
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
      case 'landing-bolsa-comparativo': return <BolsaFamiliaLP onNavigate={handleNavigate} quizzes={quizzes} />;
      case 'landing-bpc-comparativo':
      case 'landing-general-rights': return <ComparativoPage />;
      // Legacy Render
      case 'legacy-quiz': return <QuizBeneficiosPage onNavigate={handleNavigate} quizzes={quizzes} />;
      case 'legacy-dental-priv': return <BrasilSorridentePrivadoPage onNavigate={handleNavigate} quizzes={quizzes} />;
      case 'legacy-dental-plan': return <BrasilSorridenteOdontoPage onNavigate={handleNavigate} quizzes={quizzes} />;
      case 'legacy-family-ben': return <BeneficiosFamiliaPage onNavigate={handleNavigate} quizzes={quizzes} />;
      case 'legacy-reconstruction': return <AuxilioReconstrucaoPage onNavigate={handleNavigate} quizzes={quizzes} />;
      case 'legacy-single-mom': return <AuxilioMaeSolteiraPage onNavigate={handleNavigate} quizzes={quizzes} />;
      case 'legacy-gas': return <AuxilioGasPage onNavigate={handleNavigate} quizzes={quizzes} />;
      case 'legacy-fuel': return <AuxilioCombustivelPage onNavigate={handleNavigate} quizzes={quizzes} />;
      case 'legacy-bpc-bolsa': return <BpcBolsaLegacyPage onNavigate={handleNavigate} quizzes={quizzes} />;
      case 'legacy-general-rights': return <GuiaDireitosPage onNavigate={handleNavigate} quizzes={quizzes} />;
      case 'legacy-cnh-rules': return <CnhLegacyPage onNavigate={handleNavigate} quizzes={quizzes} />;
      case 'legacy-bolsa-rules': return <BolsaFamiliaLegacyPage onNavigate={handleNavigate} quizzes={quizzes} />;
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
    <SEOProvider>
      <div className="min-h-screen bg-brand-light font-sans text-brand-dark flex flex-col">

        <NotificationBar onNavigate={handleNavigate} />
        <Header onNavigate={handleNavigate} />
        <main className="flex-grow">
          <ErrorBoundary>
            <Suspense fallback={<LoadingScreen />}>
              {renderContent()}
            </Suspense>
          </ErrorBoundary>
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
    </SEOProvider>
  );
}

export default App;