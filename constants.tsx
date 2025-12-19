
import { Benefit, NewsItem, FaqItem, CreditCardProduct, InsuranceProduct, LoanProduct, Quiz } from './types';

export const STATIC_QUIZZES: Quiz[] = [
  {
    id: '2',
    program: 'Bolsa Família',
    title: 'Simulador de Valor e Elegibilidade 2025',
    description: 'Veja se você tem direito e quanto sua família pode receber somando todos os bônus do governo.',
    createdAt: '01/01/2025',
    questions: [
      { id: 1, text: 'Sua família está inscrita e com dados atualizados no CadÚnico?', type: 'yes_no' },
      { id: 2, text: 'A renda por pessoa da casa é menor que R$ 218,00 por mês?', type: 'yes_no' },
      { id: 3, text: 'Existe alguma criança de 0 a 6 anos morando com você?', type: 'yes_no' },
      { id: 4, text: 'Existe alguma gestante ou jovem de 7 a 18 anos na família?', type: 'yes_no' }
    ],
    detailedInfo: {
      introTitle: 'Cálculo do Novo Bolsa Família',
      introText: 'O valor do benefício agora é calculado por pessoa e por bônus de idade. Use nosso simulador para saber o valor aproximado da sua parcela.',
      requirementsList: ['Renda per capita até R$ 218', 'CadÚnico atualizado', 'Frequência escolar em dia', 'Vacinação atualizada'],
      targetAudience: 'Famílias de baixa renda e mães solo',
      estimatedValue: 'R$ 600,00 a R$ 1.200,00'
    }
  },
  {
    id: '3',
    program: 'CNH Social',
    title: 'Simulador CNH Gratuita 2025',
    description: 'Verifique se você cumpre os requisitos exigidos pelos Detrans estaduais para isenção total.',
    createdAt: '28/11/2024',
    questions: [
      { id: 1, text: 'Você tem 18 anos completos ou mais?', type: 'yes_no' },
      { id: 2, text: 'Sabe ler e escrever?', type: 'yes_no' },
      { id: 3, text: 'Sua família está inscrita no Cadastro Único (CadÚnico)?', type: 'yes_no' },
      { id: 4, text: 'A renda familiar per capita é de até 2 salários mínimos?', type: 'yes_no' },
      { id: 5, text: 'Você está desempregado há mais de 1 ano ou é estudante de escola pública?', type: 'yes_no' }
    ],
    detailedInfo: {
      introTitle: 'Como funciona a CNH Social',
      introText: 'O programa isenta taxas de exames, aulas teóricas, práticas e emissão do documento para pessoas de baixa renda.',
      requirementsList: ['Maior de 18 anos', 'Saber ler e escrever', 'CadÚnico ativo', 'Baixa renda'],
      targetAudience: 'Jovens e Desempregados',
      estimatedValue: 'Economia de R$ 3.000,00'
    }
  },
  {
    id: '5',
    program: 'Minha Casa Minha Vida',
    title: 'Simulador de Subsídio MCMV',
    description: 'Descubra se você se encaixa na Faixa 1 (Subsídio de 95%) ou tem direito à isenção total.',
    createdAt: '28/11/2024',
    questions: [
      { id: 1, text: 'Você possui algum imóvel registrado em seu nome?', type: 'yes_no' },
      { id: 2, text: 'Sua renda familiar bruta é de até R$ 2.640,00 mensal?', type: 'yes_no' },
      { id: 3, text: 'Sua família recebe Bolsa Família ou BPC/LOAS?', type: 'yes_no' },
      { id: 4, text: 'Você tem inscrição ativa no Cadastro Único?', type: 'yes_no' }
    ]
  },
  {
    id: '6',
    program: 'Brasil Sorridente',
    title: 'Elegibilidade Dentista SUS',
    description: 'Verifique prioridade para tratamentos complexos (Implantes, Próteses e Canal).',
    createdAt: '28/11/2024',
    questions: [
      { id: 1, text: 'Você possui o Cartão Nacional de Saúde (Cartão SUS)?', type: 'yes_no' },
      { id: 2, text: 'Sente dor aguda ou necessita de intervenção urgente?', type: 'yes_no' },
      { id: 3, text: 'Sua família é beneficiária de algum programa social?', type: 'yes_no' }
    ]
  },
  {
    id: '7',
    program: 'Pé-de-Meia',
    title: 'Simulador Poupança Estudante',
    description: 'Veja se você tem direito aos R$ 9.200,00 do governo para estudantes.',
    createdAt: '28/11/2024',
    questions: [
      { id: 1, text: 'Você tem entre 14 e 24 anos?', type: 'yes_no' },
      { id: 2, text: 'Está matriculado no Ensino Médio da rede pública?', type: 'yes_no' },
      { id: 3, text: 'Sua família está inscrita no CadÚnico?', type: 'yes_no' }
    ]
  }
];

export const CREDIT_CARDS: CreditCardProduct[] = [
  {
    id: 'will',
    name: 'Will Bank',
    issuer: 'Will',
    type: 'Credit',
    minScore: 350,
    annualFee: 'Grátis',
    benefits: ['Cartão Virtual', 'Loja de Descontos', 'Aprovação Rápida'],
    colorGradient: 'from-yellow-400 to-yellow-300 text-black',
    flag: 'Mastercard',
    applyLink: 'card-details',
    officialLink: 'https://www.willbank.com.br/',
    tag: 'Aprova Negativado',
    detailedInfo: {
      reviewScore: 4.6,
      description: 'O amarelinho mais famoso do Brasil. Conhecido por aprovar negativados.',
      pros: ['Aprovação rápida', 'Anuidade zero', 'Loja com Cashback'],
      cons: ['Limite inicial baixo', 'Sem agência física'],
      interestRateRotativo: 'Variável',
      incomeRequirement: 'Livre'
    }
  },
  {
    id: 'roxinho',
    name: 'Nubank Gold',
    issuer: 'Nubank',
    type: 'Credit',
    minScore: 300,
    annualFee: 'Grátis',
    benefits: ['Sem anuidade', 'Controle Total', 'Rende mais que poupança'],
    colorGradient: 'from-purple-700 to-purple-900',
    flag: 'Mastercard',
    applyLink: 'card-details',
    officialLink: 'https://nubank.com.br/',
    tag: 'O Preferido',
    detailedInfo: {
      reviewScore: 4.8,
      description: 'Cartão mais popular do Brasil. Ideal para quem quer simplicidade.',
      pros: ['App excelente', 'Sem taxas escondidas', 'Antecipação de parcelas'],
      cons: ['Limite difícil de subir', 'Programa de milhas pago'],
      interestRateRotativo: '14,5% a.m.',
      incomeRequirement: 'Salário Mínimo'
    }
  }
];

export const LOAN_OFFERS: LoanProduct[] = [
  {
    id: 'supersim',
    name: 'Empréstimo para Negativado',
    provider: 'SuperSim',
    rate: '12,5% a.m.',
    minAmount: 'R$ 500,00',
    maxAmount: 'R$ 2.500,00',
    term: '12x',
    type: 'Pessoal',
    tags: ['Aprova na Hora', 'Garantia Celular'],
    color: 'bg-red-100 text-red-800'
  },
  {
    id: 'credspot',
    name: 'Antecipação FGTS',
    provider: 'Credspot',
    rate: '1,49% a.m.',
    minAmount: 'R$ 50,00',
    maxAmount: 'Saldo Total',
    term: 'Parcela Única',
    type: 'FGTS',
    tags: ['Sem Parcelas Mensais', 'Liberado Agora'],
    color: 'bg-green-100 text-green-800'
  }
];

export const INSURANCE_OPTIONS: InsuranceProduct[] = [
  {
    id: 'amparo',
    title: 'Seguro Amparo (Funeral)',
    provider: 'Caixa Seguridade',
    monthlyPrice: 'R$ 5,00',
    coverage: ['Auxílio Funeral', 'Sorteios Mensais'],
    type: 'Vida',
    iconName: 'HeartHandshake'
  }
];

export const BENEFITS_DATA: Benefit[] = [
  {
    id: 'bolsa-familia',
    title: 'Bolsa Família',
    shortDescription: 'Renda mensal mínima de R$ 600 para famílias.',
    fullDescription: 'O maior programa social do Brasil, reformulado para pagar bônus por filhos e gestantes.',
    requirements: ['Inscrição no CadÚnico', 'Renda até R$ 218 por pessoa', 'Frequência escolar'],
    iconName: 'Wallet',
    category: 'Renda',
    highlight: true,
  },
  {
    id: 'tarifa-social',
    title: 'Tarifa Social de Energia',
    shortDescription: 'Até 65% de desconto na luz.',
    fullDescription: 'Desconto automático para quem está no CadÚnico.',
    requirements: ['CadÚnico ativo', 'Baixo consumo'],
    iconName: 'Zap',
    category: 'Habitação',
    highlight: true,
  }
];

export const LATEST_NEWS: NewsItem[] = [
  { id: '1', date: 'Hoje', title: 'Calendário Bolsa Família: Pagamento Antecipado', summary: 'Cidades em emergência recebem no 1º dia.', tag: 'Urgente' }
];

export const FAQ_ITEMS: FaqItem[] = [
  { question: "Como consultar pelo CPF?", answer: "Use o app Bolsa Família ou o Portal Cidadão da Caixa." }
];
