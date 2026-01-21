
import { ViewState } from '../../types';

export interface StorySlide {
  id: string;
  type: 'cover' | 'content' | 'quiz';
  mediaUrl: string; // URL da imagem vertical (9:16)
  title?: string;
  text?: string;
  ctaText?: string;
  ctaLink?: ViewState;
  duration?: number; // em segundos
}

export interface WebStory {
  id: string;
  title: string;
  thumbnail: string;
  slides: StorySlide[];
  viewed?: boolean;
}

export const VIRAL_STORIES: WebStory[] = [
  {
    id: 'story-1',
    title: 'Calendário Antecipado',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&h=600&auto=format&fit=crop',
    slides: [
      {
        id: 's1-1',
        type: 'cover',
        mediaUrl: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'URGENTE: Pagamento Antecipado Confirmado!',
        text: 'Governo libera calendário especial para este mês. Veja se você recebe.',
        duration: 5
      },
      {
        id: 's1-2',
        type: 'content',
        mediaUrl: 'https://images.unsplash.com/photo-1580048914979-994586438541?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'NIS Final 1 a 5',
        text: 'Começam a receber a partir do dia 18. Fique atento ao App Caixa Tem.',
        duration: 5
      },
      {
        id: 's1-3',
        type: 'content',
        mediaUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'Cidades em Emergência',
        text: 'Municípios em estado de calamidade recebem no 1º dia, independente do NIS.',
        ctaText: 'Ver Lista Completa',
        ctaLink: 'calendarios',
        duration: 6
      }
    ]
  },
  {
    id: 'story-card',
    title: 'Cartão Aprovado',
    thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=400&h=600&auto=format&fit=crop',
    slides: [
      {
        id: 'sc-1',
        type: 'cover',
        mediaUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'Nome Sujo? Sem Problema!',
        text: 'Descubra os 3 cartões que mais aprovam negativados em 2026.',
        duration: 5
      },
      {
        id: 'sc-2',
        type: 'content',
        mediaUrl: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'Sem Consulta SPC',
        text: 'Alguns bancos digitais analisam seu fluxo de caixa, não suas dívidas antigas.',
        duration: 5
      },
      {
        id: 'sc-3',
        type: 'content',
        mediaUrl: 'https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'Limite Garantido',
        text: 'Veja a lista de cartões com função "Construir Limite" e anuidade grátis.',
        ctaText: 'Ver Lista de Cartões',
        ctaLink: 'landing-cards-negativado',
        duration: 6
      }
    ]
  },
  {
    id: 'story-seguro',
    title: 'Seguro de R$ 5,00',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&h=600&auto=format&fit=crop',
    slides: [
      {
        id: 'ss-1',
        type: 'cover',
        mediaUrl: 'https://images.unsplash.com/photo-1516733968668-dbdce39c4651?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'Proteção por Centavos',
        text: 'Você sabia que pode ter seguro de vida e auxílio funeral pagando R$ 5 por mês?',
        duration: 5
      },
      {
        id: 'ss-2',
        type: 'content',
        mediaUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'Prêmios em Dinheiro',
        text: 'Além da proteção, você concorre a sorteios de R$ 10.000 todo mês pela Loteria.',
        duration: 5
      },
      {
        id: 'ss-3',
        type: 'content',
        mediaUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'Contrate no Zap',
        text: 'Sem burocracia, sem exames médicos. Proteja quem você ama agora.',
        ctaText: 'Ver Planos Populares',
        ctaLink: 'landing-seguro-vida',
        duration: 6
      }
    ]
  },
  {
    id: 'story-2',
    title: 'Limpa Nome FGTS',
    thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=400&h=600&auto=format&fit=crop',
    slides: [
      {
        id: 's2-1',
        type: 'cover',
        mediaUrl: 'https://images.unsplash.com/photo-1565514020176-dbf2277478b3?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'Dinheiro Esquecido?',
        text: 'Você pode ter saldo no FGTS e não sabe. Use para limpar seu nome agora.',
        duration: 5
      },
      {
        id: 's2-2',
        type: 'content',
        mediaUrl: 'https://images.unsplash.com/photo-1628109573752-198d6dd03333?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'Sem Consulta SPC',
        text: 'Bancos parceiros liberam antecipação mesmo para negativados em 2 horas.',
        ctaText: 'Simular Saque',
        ctaLink: 'loans',
        duration: 7
      }
    ]
  },
  {
    id: 'story-alerta',
    title: 'Alerta de Golpe',
    thumbnail: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=400&h=600&auto=format&fit=crop',
    slides: [
      {
        id: 'sa-1',
        type: 'cover',
        mediaUrl: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'CUIDADO: SMS Falso',
        text: 'Criminosos estão enviando mensagens sobre "Bloqueio do Benefício". Não clique!',
        duration: 5
      },
      {
        id: 'sa-2',
        type: 'content',
        mediaUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'Como Verificar',
        text: 'Jamais forneça sua senha por telefone. O Governo não manda links por SMS.',
        ctaText: 'Verificador de Golpes',
        ctaLink: 'tool-scam',
        duration: 6
      }
    ]
  },
  {
    id: 'story-3',
    title: 'CNH Gratuita',
    thumbnail: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=400&h=600&auto=format&fit=crop',
    slides: [
      {
        id: 's3-1',
        type: 'cover',
        mediaUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'CNH Social 2026',
        text: 'Inscrições abertas em 3 estados! Economize até R$ 3.000.',
        duration: 5
      },
      {
        id: 's3-2',
        type: 'content',
        mediaUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'Moto ou Carro?',
        text: 'Você pode escolher a categoria A (Moto) ou B (Carro). Tudo 100% grátis.',
        duration: 5
      },
      {
        id: 's3-3',
        type: 'content',
        mediaUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'Requisitos Básicos',
        text: 'Maior de 18 anos, saber ler e escrever, e estar no CadÚnico.',
        ctaText: 'Verificar Estados',
        ctaLink: 'landing-cnh',
        duration: 6
      }
    ]
  },
  {
    id: 'story-student',
    title: 'Estudante Ganha',
    thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400&h=600&auto=format&fit=crop',
    slides: [
      {
        id: 'st-1',
        type: 'cover',
        mediaUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'Pé-de-Meia',
        text: 'Você sabia que estudante do Ensino Médio público pode ganhar até R$ 9.200?',
        duration: 5
      },
      {
        id: 'st-2',
        type: 'content',
        mediaUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1080&h=1920&auto=format&fit=crop',
        title: 'Dinheiro no Caixa Tem',
        text: 'Receba R$ 200 todo mês por ir à aula e R$ 1.000 ao passar de ano.',
        ctaText: 'Guia do Estudante',
        ctaLink: 'landing-pe-de-meia',
        duration: 6
      }
    ]
  }
];
