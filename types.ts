
import { LucideIcon } from 'lucide-react';

export interface Benefit {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  requirements: string[];
  iconName: string; // Used to map to Lucide icons
  category: 'Renda' | 'Saúde' | 'Educação' | 'Habitação' | 'Documentos';
  highlight?: boolean;
}

export interface CreditCardProduct {
  id: string;
  name: string;
  issuer: string;
  type: 'Credit' | 'Prepaid' | 'Consignado';
  minScore: number;
  annualFee: string;
  benefits: string[];
  colorGradient: string; // CSS class for visual
  flag: 'Mastercard' | 'Visa' | 'Elo';
  applyLink: string;
  tag?: string;
}

export interface LoanProduct {
  id: string;
  name: string;
  provider: string;
  rate: string; // Interest rate
  minAmount: string;
  maxAmount: string;
  term: string; // payment terms
  type: 'Pessoal' | 'Consignado' | 'FGTS' | 'Negativado';
  tags: string[];
  color: string;
}

export interface InsuranceProduct {
  id: string;
  title: string;
  provider: string;
  monthlyPrice: string;
  coverage: string[];
  type: 'Vida' | 'Auto' | 'Residencial' | 'Prestamista';
  iconName: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  open?: boolean;
}

export interface Question {
  id: number;
  text: string;
  type: 'yes_no' | string;
}

export interface QuizDetailedInfo {
  introTitle: string;
  introText: string;
  requirementsList: string[];
  estimatedValue?: string;
  targetAudience: string;
}

export interface Quiz {
  id: string;
  program: string;
  title: string;
  description: string;
  createdAt: string;
  questions: Question[];
  detailedInfo?: QuizDetailedInfo; // New field for SEO content
}

export type ViewState = 
  | 'home' 
  | 'dashboard' 
  | 'quizzes' 
  | 'news' 
  | 'chat' 
  | 'tool-scam' 
  | 'legal'     
  | 'guide-bolsa' 
  | 'guide-bpc' 
  | 'guide-farmacia' 
  | 'guide-pis'      
  | 'guide-antena'   
  | 'guide-idjovem'
  | 'guide-cadunico' // NEW
  | 'calendar'      
  | 'calendarios'   
  | 'analytics'
  | 'secret-menu'
  | 'cards'         
  | 'insurance'     
  | 'comparativo'   
  | 'loans'         
  | 'calculator'
  | 'all-benefits'
  | 'benefits-by-state'
  // Admin Tools
  | 'admin-social'
  | 'admin-seo'
  // Broadcast / Landing Pages Governamentais
  | 'landing-mcmv'
  | 'landing-dentista'
  | 'landing-cnh'
  | 'landing-pe-de-meia'
  | 'landing-tarifa' 
  | 'landing-bpc-comparativo'
  | 'landing-bolsa-comparativo'
  | 'landing-general-rights'
  // Novas Landing Pages de Alta Conversão
  | 'landing-cards-negativado'
  | 'landing-cards-limite'
  | 'landing-seguro-divida'
  | 'landing-seguro-vida';
