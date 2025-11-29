import { Benefit, NewsItem, FaqItem, CreditCardProduct, InsuranceProduct, LoanProduct, Quiz } from './types';

export const STATIC_QUIZZES: Quiz[] = [
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
      introText: 'O programa isenta taxas de exames, aulas teóricas, práticas e emissão do documento para pessoas de baixa renda. A oferta varia de acordo com o Detran de cada estado.',
      requirementsList: ['Ser penalmente imputável (maior de 18 anos)', 'Saber ler e escrever', 'Possuir CPF e RG', 'Comprovar baixa renda ou desemprego', 'Residir no estado há pelo menos 2 anos'],
      targetAudience: 'Jovens de baixa renda e Desempregados',
      estimatedValue: 'Economia de até R$ 3.000,00'
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
    ],
    detailedInfo: {
      introTitle: 'Regras da Faixa 1 (Gratuidade)',
      introText: 'A grande novidade de 2025 é que beneficiários do Bolsa Família e BPC são isentos de pagar as parcelas do imóvel na Faixa 1, recebendo a casa praticamente de graça.',
      requirementsList: ['Não ter casa própria', 'Renda familiar bruta até R$ 2.640,00', 'Não ter financiamento habitacional ativo', 'Não ter recebido subsídio habitacional anteriormente'],
      targetAudience: 'Famílias sem moradia própria',
      estimatedValue: 'Subsídio de até 95% ou Isenção Total'
    }
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
      { id: 3, text: 'Sua família é beneficiária de algum programa social (Bolsa Família)?', type: 'yes_no' },
      { id: 4, text: 'Você tem disponibilidade para atendimento em horário comercial?', type: 'yes_no' }
    ],
    detailedInfo: {
      introTitle: 'Tratamento Dentário Gratuito no SUS',
      introText: 'O programa Brasil Sorridente oferece desde limpeza básica até tratamentos especializados como canal, tratamento de gengiva e fornecimento de próteses dentárias (dentaduras) gratuitamente nas UBS e CEO.',
      requirementsList: ['Possuir Cartão do SUS', 'Passar por triagem na UBS mais próxima', 'Residir no município de atendimento', 'Encaminhamento médico para casos complexos'],
      targetAudience: 'Toda a população (Prioridade para Baixa Renda)',
      estimatedValue: 'Tratamento 100% Gratuito'
    }
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
      { id: 4, text: 'Possui CPF regularizado?', type: 'yes_no' }
    ],
    detailedInfo: {
      introTitle: 'Poupança do Ensino Médio',
      introText: 'Incentivo financeiro mensal e anual para estudantes de escolas públicas. O valor é depositado em uma conta poupança digital que pode ser sacada após a formatura do ensino médio.',
      requirementsList: ['Idade entre 14 e 24 anos', 'Matrícula ativa no ensino médio público', 'Frequência escolar mínima de 80%', 'Família inscrita no Cadastro Único', 'Participação no ENEM (para o bônus extra)'],
      targetAudience: 'Estudantes do Ensino Médio Público',
      estimatedValue: 'Até R$ 9.200,00 ao final do curso'
    }
  },
  // --- NOVOS QUIZZES PARA AS LPS ---
  {
    id: '10',
    program: 'Inclusão Financeira',
    title: 'Análise de Crédito para Negativados',
    description: 'Verifique quais bancos parceiros aprovam seu perfil mesmo com restrição no nome.',
    createdAt: '01/12/2024',
    questions: [
      { id: 1, text: 'Você possui CPF ativo na Receita Federal?', type: 'yes_no' },
      { id: 2, text: 'Possui renda mensal comprovável (mesmo que informal)?', type: 'yes_no' },
      { id: 3, text: 'Tem dívidas ativas acima de R$ 5.000,00?', type: 'yes_no' },
      { id: 4, text: 'Você aceitaria um limite inicial menor (R$ 500) para começar?', type: 'yes_no' }
    ],
    detailedInfo: {
      introTitle: 'Crédito Consciente para Negativados',
      introText: 'Diversas instituições financeiras estão utilizando novos modelos de análise de crédito que consideram seu momento atual e capacidade de pagamento, e não apenas dívidas antigas de mais de 5 anos.',
      requirementsList: ['CPF regular na Receita Federal', 'Renda mensal comprovável (extrato bancário serve)', 'Conta digital ativa em banco parceiro', 'Dados cadastrais atualizados'],
      targetAudience: 'Pessoas com Score baixo ou negativadas',
      estimatedValue: 'Limites de R$ 300 a R$ 2.000'
    }
  },
  {
    id: '11',
    program: 'Cartão Black Acessível',
    title: 'Elegibilidade Limite Alto',
    description: 'Descubra se você tem perfil para cartões Platinum/Black com anuidade zero.',
    createdAt: '01/12/2024',
    questions: [
      { id: 1, text: 'Sua renda mensal é superior a R$ 2.000,00?', type: 'yes_no' },
      { id: 2, text: 'Você costuma pagar suas contas em dia?', type: 'yes_no' },
      { id: 3, text: 'Já possui algum cartão de crédito ativo?', type: 'yes_no' },
      { id: 4, text: 'Tem interesse em acumular pontos ou milhas?', type: 'yes_no' }
    ],
    detailedInfo: {
      introTitle: 'Como conseguir cartões de Alta Renda',
      introText: 'Cartões Black e Infinite oferecem seguros viagem, acesso a salas VIP e pontos que não expiram. Hoje, bancos digitais democratizaram o acesso a esses benefícios sem cobrar anuidade.',
      requirementsList: ['Renda acima de R$ 4.000 (ou gastos concentrados)', 'Bom histórico de pagamentos recente', 'Score de crédito médio/alto', 'Relacionamento bancário (Open Finance)'],
      targetAudience: 'Quem busca milhas e benefícios de viagem',
      estimatedValue: 'Limites acima de R$ 5.000'
    }
  },
  {
    id: '12',
    program: 'Proteção Patrimonial',
    title: 'Simulador Seguro Prestamista (Dívida Zero)',
    description: 'Veja se você pode proteger sua família de herdar dívidas de empréstimos e financiamentos.',
    createdAt: '01/12/2024',
    questions: [
      { id: 1, text: 'Você possui algum empréstimo consignado ou financiamento ativo?', type: 'yes_no' },
      { id: 2, text: 'Você tem dependentes financeiros (filhos/cônjuge)?', type: 'yes_no' },
      { id: 3, text: 'Preocupa-se em deixar dívidas para seus familiares?', type: 'yes_no' },
      { id: 4, text: 'Tem idade entre 18 e 75 anos?', type: 'yes_no' }
    ],
    detailedInfo: {
      introTitle: 'Blindagem Patrimonial Familiar',
      introText: 'O seguro prestamista garante a quitação total ou parcial de dívidas em caso de morte ou invalidez do titular, impedindo que o banco tome bens da família (como casa ou carro) para pagar o saldo devedor.',
      requirementsList: ['Ter contrato de empréstimo ou financiamento ativo', 'Idade até 80 anos (na maioria das apólices)', 'Estar em dia com as parcelas', 'Declaração de saúde simples'],
      targetAudience: 'Quem possui dívidas de longo prazo',
      estimatedValue: 'Quitação de 100% do saldo devedor'
    }
  },
  {
    id: '13',
    program: 'Auxílio Funeral',
    title: 'Verificador Seguro Popular',
    description: 'Confira planos a partir de R$ 5,00 que cobrem funeral e sorteios mensais.',
    createdAt: '01/12/2024',
    questions: [
      { id: 1, text: 'Você é responsável pelo sustento da casa?', type: 'yes_no' },
      { id: 2, text: 'Gostaria de concorrer a sorteios mensais em dinheiro?', type: 'yes_no' },
      { id: 3, text: 'Busca um plano que cubra despesas funerárias completas?', type: 'yes_no' },
      { id: 4, text: 'Pode investir R$ 0,20 por dia na segurança da sua família?', type: 'yes_no' }
    ],
    detailedInfo: {
      introTitle: 'Seguro de Vida Popular e Acessível',
      introText: 'Novos micro-seguros permitem proteger sua família pagando centavos por dia. A cobertura inclui auxílio funeral completo (para evitar gastos inesperados de até R$ 5 mil) e sorteios mensais em dinheiro.',
      requirementsList: ['Idade entre 18 e 80 anos', 'CPF válido', 'Não exige exames médicos complexos', 'Pagamento facilitado (conta de luz, débito ou cartão)'],
      targetAudience: 'Famílias de baixa renda',
      estimatedValue: 'Planos a partir de R$ 5,00/mês'
    }
  }
];

export const CREDIT_CARDS: CreditCardProduct[] = [
  {
    id: 'roxinho',
    name: 'Roxinho Gold',
    issuer: 'Nubank',
    type: 'Credit',
    minScore: 300,
    annualFee: 'Grátis',
    benefits: ['Sem anuidade', 'Controle pelo App', 'Aumento de limite progressivo'],
    colorGradient: 'from-purple-700 to-purple-900',
    flag: 'Mastercard',
    applyLink: '#',
    tag: 'Fácil Aprovação'
  },
  {
    id: 'caixa-sim',
    name: 'Caixa Sim',
    issuer: 'Caixa',
    type: 'Credit',
    minScore: 400,
    annualFee: 'Grátis',
    benefits: ['Taxas reduzidas', 'Aceita negativado (sob análise)', 'Programa de Pontos'],
    colorGradient: 'from-blue-500 to-blue-700',
    flag: 'Elo',
    applyLink: '#',
    tag: 'Governo'
  },
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
    applyLink: '#',
    tag: 'Para Negativado'
  },
  {
    id: 'inter',
    name: 'Inter Gold',
    issuer: 'Inter',
    type: 'Credit',
    minScore: 500,
    annualFee: 'Grátis',
    benefits: ['Cashback na fatura', 'Super App Completo', 'Investimentos'],
    colorGradient: 'from-orange-500 to-orange-600',
    flag: 'Mastercard',
    applyLink: '#'
  }
];

export const LOAN_OFFERS: LoanProduct[] = [
  {
    id: 'fgts-antecipacao',
    name: 'Antecipação Saque-Aniversário',
    provider: 'Banco Pan / Safra',
    rate: '1,49% a.m.',
    minAmount: 'R$ 300,00',
    maxAmount: 'Saldo FGTS',
    term: 'Até 10 anos',
    type: 'FGTS',
    tags: ['Sem Consulta SPC', 'Dinheiro em 2h'],
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'emprestimo-pessoal',
    name: 'Crédito Pessoal Online',
    provider: 'Simplic / Jeitto',
    rate: 'A partir de 2,9% a.m.',
    minAmount: 'R$ 500,00',
    maxAmount: 'R$ 3.500,00',
    term: '3 a 12 meses',
    type: 'Pessoal',
    tags: ['Aprovação Rápida', 'Tudo pelo Celular'],
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'consignado-inss',
    name: 'Consignado INSS/BPC',
    provider: 'C6 Bank',
    rate: '1,66% a.m. (Teto INSS)',
    minAmount: 'R$ 1.000,00',
    maxAmount: 'Margem Disp.',
    term: 'Até 84x',
    type: 'Consignado',
    tags: ['Menor Taxa', 'Sem Consulta'],
    color: 'bg-orange-100 text-orange-800'
  }
];

export const INSURANCE_OPTIONS: InsuranceProduct[] = [
  {
    id: 'amparo',
    title: 'Seguro Amparo (Funeral)',
    provider: 'Caixa Seguridade',
    monthlyPrice: 'R$ 5,00',
    coverage: ['Auxílio Funeral', 'Sorteios Mensais', 'Sem carência para acidentes'],
    type: 'Vida',
    iconName: 'HeartHandshake'
  },
  {
    id: 'prestamista',
    title: 'Seguro Prestamista',
    provider: 'Vários Bancos',
    monthlyPrice: 'Variável',
    coverage: ['Quitação de dívida em caso de morte', 'Cobre desemprego involuntário'],
    type: 'Prestamista',
    iconName: 'ShieldCheck'
  },
  {
    id: 'moto-facil',
    title: 'Moto Protegida',
    provider: 'Suhai',
    monthlyPrice: 'R$ 45,00',
    coverage: ['Roubo e Furto', 'Assistência 24h', 'Aceita qualquer ano/modelo'],
    type: 'Auto',
    iconName: 'Bike'
  }
];

export const BENEFITS_DATA: Benefit[] = [
  {
    id: 'bolsa-familia',
    title: 'Bolsa Família',
    shortDescription: 'Transferência de renda para famílias em situação de vulnerabilidade.',
    fullDescription: 'O Bolsa Família é o maior programa de transferência de renda do Brasil. Ele visa quebrar o ciclo da pobreza através de auxílio financeiro mensal.',
    requirements: ['Inscrição no CadÚnico.', 'Renda per capita até R$ 218,00.', 'Dados atualizados.'],
    iconName: 'Wallet',
    category: 'Renda',
    highlight: true,
  },
  {
    id: 'tarifa-social',
    title: 'Tarifa Social de Energia',
    shortDescription: 'Desconto de até 65% na conta de luz.',
    fullDescription: 'A TSEE concede descontos na conta de luz para famílias de baixa renda. O desconto é aplicado automaticamente para quem está no CadÚnico.',
    requirements: ['Inscrição no CadÚnico.', 'Renda per capita até meio salário mínimo.'],
    iconName: 'Zap',
    category: 'Habitação',
    highlight: true,
  },
  {
    id: 'id-jovem',
    title: 'ID Jovem',
    shortDescription: 'Viagens interestaduais gratuitas e meia-entrada.',
    fullDescription: 'A Identidade Jovem é o documento que possibilita acesso aos benefícios de meia-entrada em eventos e vagas gratuitas no transporte coletivo interestadual.',
    requirements: ['Idade entre 15 e 29 anos.', 'Renda familiar até 2 salários mínimos.', 'Inscrição no CadÚnico.'],
    iconName: 'Bus',
    category: 'Educação',
  },
  {
    id: 'farmacia-popular',
    title: 'Farmácia Popular',
    shortDescription: 'Remédios gratuitos para Diabetes, Asma e Hipertensão.',
    fullDescription: 'Programa que oferece medicamentos gratuitos ou com até 90% de desconto em farmácias credenciadas.',
    requirements: ['Receita médica válida.', 'CPF.', 'Documento com foto.'],
    iconName: 'Pill',
    category: 'Saúde',
  },
  {
    id: 'pis-pasep',
    title: 'Abono Salarial (PIS)',
    shortDescription: 'Benefício anual de até um salário mínimo para trabalhadores.',
    fullDescription: 'O Abono Salarial equivale ao valor de, no máximo, um salário mínimo a ser pago conforme calendário anual.',
    requirements: ['Trabalhou 30 dias no ano-base.', 'Recebeu até 2 salários mínimos.', 'Inscrito há 5 anos.'],
    iconName: 'Coins',
    category: 'Renda',
  },
  {
    id: 'cnh-social',
    title: 'CNH Social',
    shortDescription: 'Carteira de Habilitação gratuita para baixa renda.',
    fullDescription: 'O programa CNH Social oferece a primeira habilitação gratuitamente. As regras variam por estado.',
    requirements: ['Ter mais de 18 anos.', 'Saber ler e escrever.', 'CadÚnico ativo.'],
    iconName: 'Car',
    category: 'Educação',
  },
  {
    id: 'kit-antena',
    title: 'Kit Antena Digital',
    shortDescription: 'Equipamento gratuito para TV Digital.',
    fullDescription: 'Distribuição gratuita de antena e conversor para famílias de baixa renda continuarem assistindo TV após o desligamento do sinal analógico parabólico.',
    requirements: ['Estar no CadÚnico.', 'Ter parabólica tradicional antiga instalada.'],
    iconName: 'Tv',
    category: 'Habitação',
  },
  {
    id: 'bpc-loas',
    title: 'BPC / LOAS',
    shortDescription: 'Salário mínimo para idosos e PcD.',
    fullDescription: 'Garante um salário mínimo mensal ao idoso com 65 anos ou mais e à pessoa com deficiência.',
    requirements: ['CadÚnico.', 'Renda familiar per capita <= 1/4 salário mínimo.'],
    iconName: 'Accessibility',
    category: 'Renda',
  }
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: '1',
    date: '12 Out 2023',
    title: 'Calendário Bolsa Família: Pagamentos antecipados',
    summary: 'Governo anuncia antecipação de pagamentos para municípios em estado de calamidade pública.',
    tag: 'Urgente'
  },
  {
    id: '2',
    date: '10 Out 2023',
    title: 'Novo pente-fino no CadÚnico',
    summary: 'Ministério convoca famílias unipessoais para atualização cadastral obrigatória.',
    tag: 'CadÚnico'
  },
  {
    id: '3',
    date: '05 Out 2023',
    title: 'CNH Social abre inscrições em 3 estados',
    summary: 'Confira se o seu estado está na lista e veja o passo a passo para se inscrever.',
    tag: 'Educação'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Como saber se tenho direito ao Bolsa Família?",
    answer: "A principal regra é a renda mensal por pessoa de até R$ 218,00. Além disso, a família precisa estar inscrita no Cadastro Único e com os dados atualizados."
  },
  {
    question: "Onde faço o Cadastro Único?",
    answer: "O cadastramento é feito presencialmente num posto de atendimento na cidade onde a família mora, geralmente no CRAS (Centro de Referência de Assistência Social)."
  },
  {
    question: "O serviço deste site é oficial?",
    answer: "Não. Este é um portal informativo independente (guia) para auxiliar o cidadão. Para serviços oficiais, acesse sempre os canais do Governo Federal (gov.br)."
  }
];