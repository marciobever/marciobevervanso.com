
import { Benefit, NewsItem, FaqItem, CreditCardProduct, InsuranceProduct, LoanProduct, Quiz } from './types';

export const STATIC_QUIZZES: Quiz[] = [
  {
    id: '2',
    program: 'Bolsa Família',
    title: 'Simulador de Valor e Elegibilidade 2026',
    description: 'Veja se você tem direito e quanto sua família pode receber somando todos os bônus do governo.',
    createdAt: '01/01/2026',
    questions: [
      { id: 1, text: 'Sua família está inscrita e com dados atualizados no CadÚnico (nos últimos 24 meses)?', type: 'yes_no' },
      { id: 2, text: 'Somando o salário de todos, a renda por pessoa é menor que R$ 218,00?', type: 'yes_no' },
      { id: 3, text: 'Você reside em capital ou região metropolitana?', type: 'yes_no' },
      { id: 4, text: 'Existe alguma gestante na família atualmente?', type: 'yes_no' },
      { id: 5, text: 'Há crianças de 0 a 6 anos na composição familiar?', type: 'yes_no' },
      { id: 6, text: 'Há crianças ou adolescentes de 7 a 18 anos frequentando a escola?', type: 'yes_no' },
      { id: 7, text: 'A carteira de vacinação das crianças está em dia?', type: 'yes_no' },
      { id: 8, text: 'Alguém na casa recebe BPC (Benefício de Prestação Continuada)?', type: 'yes_no' }
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
    title: 'Simulador CNH Gratuita 2026',
    description: 'Verifique se você cumpre os requisitos exigidos pelos Detrans estaduais para isenção total.',
    createdAt: '28/11/2024',
    questions: [
      { id: 1, text: 'Você tem 18 anos completos ou mais?', type: 'yes_no' },
      { id: 2, text: 'Sabe ler e escrever (Alfabetizado)?', type: 'yes_no' },
      { id: 3, text: 'Possui CPF e Carteira de Identidade (RG)?', type: 'yes_no' },
      { id: 4, text: 'Sua família está inscrita no Cadastro Único (CadÚnico)?', type: 'yes_no' },
      { id: 5, text: 'A renda familiar per capita é de até 2 salários mínimos?', type: 'yes_no' },
      { id: 6, text: 'Você está desempregado há mais de 1 ano?', type: 'yes_no' },
      { id: 7, text: 'É beneficiário do Bolsa Família?', type: 'yes_no' },
      { id: 8, text: 'Você já possui alguma habilitação (CNH) anterior?', type: 'yes_no' }
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
      { id: 1, text: 'Você possui algum imóvel registrado em seu nome atualmente?', type: 'yes_no' },
      { id: 2, text: 'Já foi beneficiado por algum programa habitacional anteriormente?', type: 'yes_no' },
      { id: 3, text: 'Sua renda familiar bruta é de até R$ 2.640,00 mensal?', type: 'yes_no' },
      { id: 4, text: 'Você recebe Bolsa Família ou BPC/LOAS?', type: 'yes_no' },
      { id: 5, text: 'Tem inscrição ativa no Cadastro Único?', type: 'yes_no' },
      { id: 6, text: 'Mora em área de risco ou desapropriação?', type: 'yes_no' },
      { id: 7, text: 'Você é arrimo de família (mulher chefe de família)?', type: 'yes_no' }
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
      { id: 3, text: 'Sua família está inscrita no CadÚnico?', type: 'yes_no' },
      { id: 4, text: 'Sua família recebe Bolsa Família?', type: 'yes_no' },
      { id: 5, text: 'Você possui CPF regularizado?', type: 'yes_no' },
      { id: 6, text: 'Você teve frequência escolar acima de 80% no último mês?', type: 'yes_no' },
      { id: 7, text: 'Participou do ENEM ou SAEB (se aplicável)?', type: 'yes_no' }
    ]
  }
];

export const CREDIT_CARDS: CreditCardProduct[] = [
  {
    id: 'will',
    name: 'Will Bank',
    issuer: 'Will',
    type: 'Credit',
    minScore: 300,
    annualFee: 'Grátis',
    benefits: ['Aprovação Fácil', 'Loja de Descontos', 'Cartão Virtual'],
    colorGradient: 'from-yellow-400 to-yellow-300 text-black',
    flag: 'Mastercard',
    applyLink: 'card-details',
    officialLink: 'https://www.willbank.com.br/',
    tag: 'Aprova Negativado',
    detailedInfo: {
      reviewScore: 4.6,
      description: 'O "Amarelinho" é um dos campeões em aprovação para quem tem score baixo ou está negativado. Todo processo é pelo app.',
      pros: ['Aprovação rápida', 'Anuidade zero para sempre', 'Antecipação de fatura com desconto'],
      cons: ['Limite inicial pode ser baixo (R$ 100)', 'Não tem agência física'],
      interestRateRotativo: '13,9% a.m.',
      incomeRequirement: 'Sem exigência'
    }
  },
  {
    id: 'neon',
    name: 'Neon',
    issuer: 'Neon',
    type: 'Credit',
    minScore: 350,
    annualFee: 'Grátis',
    benefits: ['Viracrédito', '3 Saques Grátis', 'Débito Automático'],
    colorGradient: 'from-cyan-400 to-blue-500 text-white',
    flag: 'Visa',
    applyLink: 'card-details',
    officialLink: 'https://neon.com.br/',
    tag: 'Aumenta Limite',
    detailedInfo: {
      reviewScore: 4.7,
      description: 'O Neon se destaca pelo programa "Viracrédito", onde o dinheiro guardado vira limite na hora. Ótimo para construir histórico.',
      pros: ['Viracrédito (Investiu = Limite)', 'Interface simples', 'Cartão virtual cobrado na hora'],
      cons: ['Aprovação direta difícil p/ negativado', 'Atendimento via chat'],
      interestRateRotativo: '12,9% a.m.',
      incomeRequirement: 'Salário Mínimo'
    }
  },
  {
    id: 'santander-sx',
    name: 'Santander SX',
    issuer: 'Santander',
    type: 'Credit',
    minScore: 400,
    annualFee: 'Grátis*',
    benefits: ['Loja Esfera', 'Desconto em Farmácias', 'Pix Parcelado'],
    colorGradient: 'from-red-600 to-red-700 text-white',
    flag: 'Visa',
    applyLink: 'card-details',
    officialLink: 'https://www.santander.com.br/cartao-credito-santander/sx',
    tag: 'Banco Tradicional',
    detailedInfo: {
      reviewScore: 4.5,
      description: 'A porta de entrada do Santander. Para zerar a anuidade, basta gastar R$ 100,00 por mês ou cadastrar CPF e Celular no Pix.',
      pros: ['Limite costuma ser mais alto', 'Benefícios Esfera', 'Saque em dinheiro no crédito'],
      cons: ['Exige gasto mínimo de R$ 100 ou Pix', 'Taxas de juros de banco tradicional'],
      interestRateRotativo: '14,9% a.m.',
      incomeRequirement: 'R$ 1.045,00'
    }
  },
  {
    id: 'pan-zero',
    name: 'Pan Zero',
    issuer: 'Banco Pan',
    type: 'Credit',
    minScore: 350,
    annualFee: 'Grátis',
    benefits: ['Clube de Ofertas', 'Saque Emergencial', 'Controle por App'],
    colorGradient: 'from-blue-600 to-cyan-400 text-white',
    flag: 'Mastercard',
    applyLink: 'card-details',
    officialLink: 'https://www.bancopan.com.br/',
    tag: 'Fácil Aprovação',
    detailedInfo: {
      reviewScore: 4.4,
      description: 'O Banco Pan é conhecido por ser flexível na análise de crédito, atendendo autônomos e negativados com frequência.',
      pros: ['Sem anuidade', 'Descontos em parceiros Pan', 'Acessível para quem ganha pouco'],
      cons: ['Limite sobe devagar', 'App pode ser instável'],
      interestRateRotativo: '15,5% a.m.',
      incomeRequirement: 'Salário Mínimo'
    }
  },
  {
    id: 'superdigital',
    name: 'Superdigital',
    issuer: 'Santander',
    type: 'Prepaid',
    minScore: 0,
    annualFee: 'Grátis*',
    benefits: ['Sem Consulta SPC', 'Mesada Digital', 'Assinaturas'],
    colorGradient: 'from-red-500 to-pink-500 text-white',
    flag: 'Mastercard',
    applyLink: 'card-details',
    officialLink: 'https://superdigital.com.br/',
    tag: 'Sem Consulta',
    detailedInfo: {
      reviewScore: 4.2,
      description: 'Cartão pré-pago ideal para quem está com o nome muito restrito e precisa de um cartão para Uber, Netflix e iFood.',
      pros: ['Aprovação Garantida (Pré-pago)', 'Sem dívidas', 'Aceita negativado'],
      cons: ['Não parcela compras', 'Precisa recarregar antes'],
      interestRateRotativo: '0% (Pré-pago)',
      incomeRequirement: 'Nenhuma'
    }
  },
  {
    id: 'bmg-card',
    name: 'BMG Card',
    issuer: 'BMG',
    type: 'Consignado',
    minScore: 0,
    annualFee: 'Grátis',
    benefits: ['Sem Consulta SPC', 'Juros Menores', 'Saque Disponível'],
    colorGradient: 'from-orange-500 to-orange-600 text-white',
    flag: 'Mastercard',
    applyLink: 'card-details',
    officialLink: 'https://www.bancobmg.com.br/',
    tag: 'Aposentado/BPC',
    detailedInfo: {
      reviewScore: 4.8,
      description: 'Exclusivo para Aposentados, Pensionistas e BPC. Desconta o mínimo direto da folha e tem taxas muito menores que o cartão comum.',
      pros: ['Taxas limitadas por lei', 'Sem anuidade', 'Aprovação para negativados INSS'],
      cons: ['Só para beneficiários INSS/Servidores', 'Compromete margem consignável'],
      interestRateRotativo: '3,06% a.m. (Teto INSS)',
      incomeRequirement: 'Benefício INSS'
    }
  },
  {
    id: 'inter',
    name: 'Inter Gold',
    issuer: 'Inter',
    type: 'Credit',
    minScore: 500,
    annualFee: 'Grátis',
    benefits: ['Cashback na Fatura', 'Super App Completo', 'Investimentos'],
    colorGradient: 'from-orange-400 to-orange-500 text-white',
    flag: 'Mastercard',
    applyLink: 'card-details',
    officialLink: 'https://inter.co/',
    tag: 'Cashback e Conta',
    detailedInfo: {
      reviewScore: 4.9,
      description: 'Um dos melhores bancos digitais. Cartão sem anuidade com cashback real. Exige um score um pouco melhor.',
      pros: ['Cashback em tudo', 'Shopping com desconto', 'Plataforma de investimento'],
      cons: ['Análise de crédito mais rigorosa', 'Suporte digital'],
      interestRateRotativo: '13,5% a.m.',
      incomeRequirement: 'Salário Mínimo'
    }
  },
  {
    id: 'pagbank',
    name: 'Cartão da Conta',
    issuer: 'PagBank',
    type: 'Credit',
    minScore: 300,
    annualFee: 'Grátis',
    benefits: ['Limite Garantido', 'Rende 100% CDI', 'Pagamento de Contas'],
    colorGradient: 'from-green-500 to-yellow-400 text-slate-900',
    flag: 'Visa',
    applyLink: 'card-details',
    officialLink: 'https://pagseguro.uol.com.br/',
    tag: 'Fácil Aprovação',
    detailedInfo: {
      reviewScore: 4.5,
      description: 'Opção excelente para quem quer construir crédito. Você pode investir no CDB e ganhar o mesmo valor em limite no cartão.',
      pros: ['Limite atrelado ao investimento', 'Conta rendeira', 'Bons descontos'],
      cons: ['Limite inicial baixo sem investimento'],
      interestRateRotativo: '14,1% a.m.',
      incomeRequirement: 'Nenhuma'
    }
  }
];

export const LOAN_OFFERS: LoanProduct[] = [
  {
    id: 'supersim',
    name: 'SuperSim: Dinheiro Rápido',
    provider: 'SuperSim',
    rate: '15,8% a.m.',
    minAmount: 'R$ 250,00',
    maxAmount: 'R$ 2.500,00',
    term: 'Até 12x',
    type: 'Negativado',
    tags: ['Aprova Negativado', 'PIX em 30min', 'Alta Aprovação'],
    color: 'bg-red-50 text-red-700',
    affiliateUrl: 'https://apretailer.com.br/click/692e45f32bfa816d36623918/177702/356672/subaccount/marciobevervanso',
    promoBanner: true
  },
  {
    id: 'credspot',
    name: 'Saque FGTS via PIX',
    provider: 'Credspot',
    rate: '1,39% a.m.',
    minAmount: 'R$ 50,00',
    maxAmount: 'Saldo FGTS',
    term: 'Parcela Única',
    type: 'FGTS',
    tags: ['Receba em 10min', 'Sem Boleto Mensal', 'Dinheiro Extra'],
    color: 'bg-emerald-50 text-emerald-700',
    affiliateUrl: 'https://apretailer.com.br/click/692e45f22bfa81658c05e154/186580/356672/subaccount',
    promoBanner: true
  },
  {
    id: 'jeitto',
    name: 'Jeitto Crédito Digital',
    provider: 'Jeitto',
    rate: 'Variável',
    minAmount: 'R$ 50,00',
    maxAmount: 'R$ 2.000,00',
    term: 'Até 3x',
    type: 'Pessoal',
    tags: ['Aprova Rápido', 'Pequenos Valores'],
    color: 'bg-indigo-100 text-indigo-800'
  },
  {
    id: 'simplic',
    name: 'Simplic Pessoal',
    provider: 'Simplic',
    rate: '15,8% a.m.',
    minAmount: 'R$ 500,00',
    maxAmount: 'R$ 3.500,00',
    term: '3x a 12x',
    type: 'Pessoal',
    tags: ['Aceita Negativado', '100% Online'],
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'agibank',
    name: 'Consignado Agibank',
    provider: 'Agibank',
    rate: '1,70% a.m.',
    minAmount: 'R$ 200,00',
    maxAmount: 'Margem Disp.',
    term: 'Até 84x',
    type: 'Consignado',
    tags: ['INSS e Loas', 'Liberação Rápida'],
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'crefaz',
    name: 'Empréstimo na Conta de Luz',
    provider: 'Crefaz',
    rate: '12% a.m. (médio)',
    minAmount: 'R$ 300,00',
    maxAmount: 'R$ 1.200,00',
    term: 'Até 18x',
    type: 'Pessoal',
    tags: ['Débito na Energia', 'Sem Conta em Banco'],
    color: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 'banqi',
    name: 'Empréstimo BanQi',
    provider: 'BanQi (Casas Bahia)',
    rate: 'Leve',
    minAmount: 'R$ 300,00',
    maxAmount: 'R$ 15.000,00',
    term: 'Até 18x',
    type: 'Pessoal',
    tags: ['Carnê Casas Bahia', 'Simples'],
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'fgts-banco-safra',
    name: 'Antecipação Safra FGTS',
    provider: 'Banco Safra',
    rate: '1,49% a.m.',
    minAmount: 'R$ 150,00',
    maxAmount: 'Saldo Total',
    term: 'Parcela Única',
    type: 'FGTS',
    tags: ['Receba em 20min', 'Sem Boleto Mensal'],
    color: 'bg-amber-100 text-amber-800'
  }
];

export const INSURANCE_OPTIONS: InsuranceProduct[] = [
  {
    id: 'amparo',
    title: 'Seguro Amparo (Funeral)',
    provider: 'Caixa Seguridade',
    monthlyPrice: 'R$ 5,00',
    coverage: ['Auxílio Funeral Familiar', 'Sorteio Mensal R$ 10mil', 'Cesta Básica (3 meses)'],
    type: 'Vida',
    iconName: 'HeartHandshake'
  },
  {
    id: 'protecao-lar',
    title: 'Seguro Residencial Popular',
    provider: 'Zurich Seguros',
    monthlyPrice: 'R$ 14,90',
    coverage: ['Incêndio e Queda de Raio', 'Chaveiro 24h', 'Encanador e Eletricista'],
    type: 'Residencial',
    iconName: 'Home'
  },
  {
    id: 'moto-facil',
    title: 'Seguro Moto/Auto Popular',
    provider: 'Suhai Seguradora',
    monthlyPrice: 'R$ 39,90',
    coverage: ['Roubo e Furto', 'Assistência 24h (Guincho)', 'Sem Análise de Perfil'],
    type: 'Auto',
    iconName: 'Car'
  },
  {
    id: 'prestamista',
    title: 'Seguro Prestamista',
    provider: 'Too Seguros',
    monthlyPrice: 'R$ 9,90',
    coverage: ['Quitação de Dívidas', 'Invalidez Permanente', 'Desemprego Involuntário'],
    type: 'Prestamista',
    iconName: 'ShieldCheck'
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
