
import React, { useEffect } from 'react';
import { BroadcastLayout } from '../broadcast/BroadcastLayout';
import { Quiz, ViewState } from '../../types';
import { Smile, DollarSign, Home, Droplets, Fuel, Baby, Scale, FileText, CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (view: ViewState) => void;
  quizzes?: Quiz[];
}

// 1. Quiz Benefícios Sociais
export const QuizBeneficiosPage: React.FC<Props> = ({ onNavigate, quizzes }) => {
  useEffect(() => { document.title = "Quiz de Benefícios Sociais: Descubra seus Direitos"; }, []);
  return (
    <BroadcastLayout
      title="Quiz Oficial: Descubra quais benefícios sociais você tem direito hoje"
      subtitle="Responda 4 perguntas rápidas e nosso sistema inteligente analisará seu perfil para o Bolsa Família, BPC, Vale Gás e outros auxílios."
      onNavigate={onNavigate}
      quizTriggerLabel="Iniciar Quiz Agora"
      onTakeQuiz={() => onNavigate('quizzes')}
    >
      <p>Muitas famílias brasileiras deixam de receber dinheiro do governo simplesmente por não saberem que têm direito. As regras mudam constantemente e é difícil acompanhar tudo.</p>
      <p>Nossa ferramenta de verificação cruza seus dados básicos (idade, renda aproximada e composição familiar) com as regras atualizadas de 2026.</p>
    </BroadcastLayout>
  );
};

// 2. Brasil Sorridente vs Planos Privados (Foco: Qualidade SUS)
export const BrasilSorridentePrivadoPage: React.FC<Props> = ({ onNavigate, quizzes }) => {
  useEffect(() => { document.title = "Brasil Sorridente 2026: Tratamento de Qualidade Gratuito"; }, []);
  return (
    <BroadcastLayout
      title="Dentista no SUS funciona? Conheça o 'Plano de Saúde' do Governo"
      subtitle="O Brasil Sorridente foi ampliado e agora oferece tratamentos que antes só existiam em planos caros. Veja o que mudou."
      onNavigate={onNavigate}
      quizId="6"
      quizzes={quizzes}
      quizTriggerLabel="Verificar Unidades"
    >
      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 not-prose">
        <h4 className="font-bold text-blue-900 flex items-center gap-2 mb-2"><Smile /> Evolução do Atendimento</h4>
        <p className="text-sm text-blue-800">Antigamente, o SUS era focado apenas em extração. Hoje, os CEOs (Centros de Especialidades) realizam canais, tratamento de gengiva e até próteses com material de qualidade similar ao particular.</p>
      </div>
      <p>A principal vantagem do SUS é a <strong>gratuidade total</strong>. Enquanto um plano privado básico tem carência e cobra coparticipação para procedimentos complexos, o Brasil Sorridente cobre tudo, desde que você tenha paciência com a fila de espera.</p>
    </BroadcastLayout>
  );
};

// 3. Brasil Sorridente vs Planos Odontológicos (Foco: Cobertura)
export const BrasilSorridenteOdontoPage: React.FC<Props> = ({ onNavigate, quizzes }) => {
  useEffect(() => { document.title = "Cobertura Odontológica SUS 2026: O que está incluso?"; }, []);
  return (
    <BroadcastLayout
      title="Implante e Aparelho: O que o SUS cobre de verdade em 2026?"
      subtitle="Entenda a lista de procedimentos complexos disponíveis na rede pública e como conseguir encaminhamento."
      onNavigate={onNavigate}
      quizId="6"
      quizzes={quizzes}
      quizTriggerLabel="Consultar Cobertura"
    >
      <h3>Ortodontia e Implantes</h3>
      <p>A grande dúvida é sobre aparelhos e implantes. Embora existam na tabela do SUS, eles não estão em todas as cidades. Geralmente, são oferecidos em parceria com Universidades Federais ou em grandes centros urbanos (CEOs Tipo III).</p>
      <p>Para próteses removíveis (dentaduras e pontes), a cobertura é nacional e muito eficiente, devolvendo o sorriso e a capacidade de mastigação para milhares de idosos.</p>
    </BroadcastLayout>
  );
};

// 4. Benefícios Governo Família (Visão Geral)
export const BeneficiosFamiliaPage: React.FC<Props> = ({ onNavigate, quizzes }) => {
  useEffect(() => { document.title = "Benefícios para Famílias 2026: Guia Unificado"; }, []);
  return (
    <BroadcastLayout
      title="Pacote de Proteção à Família: Todos os auxílios disponíveis em 2026"
      subtitle="O governo unificou diversos programas. Entenda como o Bolsa Família se conecta com o Auxílio Gás e a Tarifa Social."
      onNavigate={onNavigate}
      quizTriggerLabel="Calcular Renda Familiar"
      onTakeQuiz={() => onNavigate('calculator')}
    >
      <p>Não é apenas sobre o Bolsa Família. O governo criou uma rede de proteção que inclui:</p>
      <ul className="space-y-2">
        <li><strong>Nutrição:</strong> Valor base do Bolsa Família.</li>
        <li><strong>Energia:</strong> Desconto de até 65% na conta de luz.</li>
        <li><strong>Moradia:</strong> Faixa 1 do Minha Casa Minha Vida gratuita.</li>
        <li><strong>Educação:</strong> Pé-de-Meia para estudantes do ensino médio.</li>
      </ul>
      <p>O segredo para acessar tudo isso é um só: <strong>CadÚnico atualizado</strong>.</p>
    </BroadcastLayout>
  );
};

// 5. Auxílio Reconstrução
export const AuxilioReconstrucaoPage: React.FC<Props> = ({ onNavigate, quizzes }) => {
  useEffect(() => { document.title = "Auxílio Reconstrução 2026: Quem tem direito aos R$ 5.100"; }, []);
  return (
    <BroadcastLayout
      title="Auxílio Reconstrução: Como receber o PIX de R$ 5.100 do Governo"
      subtitle="Destinado a famílias atingidas por calamidades climáticas. Veja como consultar se seu município está na lista e como confirmar os dados."
      onNavigate={onNavigate}
      quizTriggerLabel="Verificar Municípios"
      onTakeQuiz={() => window.open('https://www.gov.br/mdr/pt-br', '_blank')}
    >
      <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6 not-prose">
        <h4 className="font-bold text-red-900 mb-2">Atenção ao Prazo</h4>
        <p className="text-sm text-red-800">O benefício é liberado em lotes para cidades com decreto de Calamidade Pública ou Emergência reconhecido pela Defesa Civil Nacional.</p>
      </div>
      <h3>Como funciona?</h3>
      <p>O Responsável Familiar deve entrar no portal Gov.br e confirmar o endereço. O cruzamento de dados é feito via satélite e cadastro da prefeitura. O pagamento é feito em parcela única via PIX no Caixa Tem.</p>
    </BroadcastLayout>
  );
};

// 6. Auxílio Mãe Solteira
export const AuxilioMaeSolteiraPage: React.FC<Props> = ({ onNavigate, quizzes }) => {
  useEffect(() => { document.title = "Benefício para Mães Solteiras 2026: Valores e Regras"; }, []);
  return (
    <BroadcastLayout
      title="Auxílio para Mães Solo: Entenda os valores extras no Bolsa Família"
      subtitle="Mulheres chefes de família têm prioridade e recebem adicionais por criança que podem elevar o benefício a mais de R$ 900."
      onNavigate={onNavigate}
      quizTriggerLabel="Simular Valor Total"
      quizId="2" // Assuming ID 2 or create generic
      onTakeQuiz={() => onNavigate('calculator')}
    >
      <p>Embora o projeto de lei específico de R$ 1.200 permanente ainda tramite no Congresso, na prática, o novo Bolsa Família já atua como um auxílio robusto para mães solo através da soma de benefícios:</p>
      <div className="space-y-3 not-prose my-6">
        <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200">
          <span>Base Familiar</span>
          <span className="font-bold text-brand-blue">R$ 600,00</span>
        </div>
        <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200">
          <span>Filho (0-6 anos)</span>
          <span className="font-bold text-green-600">+ R$ 150,00</span>
        </div>
        <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200">
          <span>Gestantes/Nutrizes</span>
          <span className="font-bold text-green-600">+ R$ 50,00</span>
        </div>
      </div>
    </BroadcastLayout>
  );
};

// 7. Auxílio Gás
export const AuxilioGasPage: React.FC<Props> = ({ onNavigate, quizzes }) => {
  useEffect(() => { document.title = "Vale Gás 2026: Calendário e Valor Atualizado"; }, []);
  return (
    <BroadcastLayout
      title="Auxílio Gás 2026: Calendário de Pagamentos e Valor de 100%"
      subtitle="O benefício paga o valor integral da média nacional do botijão de 13kg a cada dois meses. Veja quem recebe."
      onNavigate={onNavigate}
      quizTriggerLabel="Consultar Vale Gás"
      onTakeQuiz={() => onNavigate('calendarios')}
    >
      <div className="flex items-center gap-4 bg-orange-50 p-6 rounded-2xl mb-6 not-prose">
        <Droplets size={32} className="text-orange-600" />
        <div>
          <h4 className="font-bold text-orange-900">Pagamento Bimestral</h4>
          <p className="text-sm text-orange-800">O depósito é feito nos meses pares (Fevereiro, Abril, Junho...) junto com o Bolsa Família.</p>
        </div>
      </div>
      <h3>Quem tem prioridade?</h3>
      <p>Como o orçamento é limitado, a lei dá prioridade para:</p>
      <ol>
        <li>Famílias com mulheres vítimas de violência doméstica (com medidas protetivas).</li>
        <li>Famílias com menor renda per capita.</li>
        <li>Famílias com maior número de membros.</li>
      </ol>
    </BroadcastLayout>
  );
};

// 8. Auxílio Combustível (Taxista/Caminhoneiro)
export const AuxilioCombustivelPage: React.FC<Props> = ({ onNavigate, quizzes }) => {
  useEffect(() => { document.title = "Auxílio Taxista e Caminhoneiro 2026: Situação Atual"; }, []);
  return (
    <BroadcastLayout
      title="Auxílio Combustível: O benefício para motoristas vai voltar em 2026?"
      subtitle="Entenda a situação atual do auxílio para taxistas e caminhoneiros e quais as alternativas de crédito disponíveis."
      onNavigate={onNavigate}
      quizTriggerLabel="Ver Crédito para Motoristas"
      onTakeQuiz={() => onNavigate('loans')}
    >
      <p>O Auxílio Taxista e o Auxílio Caminhoneiro foram benefícios emergenciais criados em 2022 devido à alta dos combustíveis. Atualmente, <strong>não há previsão de renovação</strong> desses pagamentos mensais para 2026 no orçamento federal.</p>
      <div className="bg-slate-100 p-6 rounded-2xl mb-6 border border-slate-200">
        <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2"><Fuel /> Alternativas</h4>
        <p className="text-sm text-slate-700">Para motoristas que precisam de capital de giro ou manutenção do veículo, o Governo disponibilizou linhas de microcrédito (SIM Digital) e antecipação do Saque-Aniversário FGTS como opções de liquidez.</p>
      </div>
    </BroadcastLayout>
  );
};

// 9. BPC vs Bolsa Família (Foco: Nuances)
export const BpcBolsaLegacyPage: React.FC<Props> = ({ onNavigate, quizzes }) => {
  useEffect(() => { document.title = "BPC ou Bolsa Família: Qual é melhor para sua família?"; }, []);
  return (
    <BroadcastLayout
      title="BPC ou Bolsa Família? Entenda as regras para quem tem PcD em casa"
      subtitle="Muitas famílias têm dúvidas se podem acumular os dois ou qual escolher. Analisamos os prós e contras de cada um."
      onNavigate={onNavigate}
      quizTriggerLabel="Comparar Benefícios"
      onTakeQuiz={() => onNavigate('comparativo')}
    >
      <h3>Acúmulo de Benefícios</h3>
      <p>Uma grande vitória recente foi a mudança na lei que permite, em alguns casos, descontar o valor do BPC do cálculo de renda para o Bolsa Família, ou receber ambos se a renda per capita ainda se mantiver abaixo do limite.</p>

      <h3>Diferença Fundamental</h3>
      <ul className="space-y-4 not-prose my-6">
        <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <strong className="block text-purple-700 mb-1">BPC/LOAS</strong>
          <span className="text-sm text-gray-600">Valor fixo de 1 Salário Mínimo. É individual e vitalício (enquanto durar a condição), mas não deixa pensão.</span>
        </li>
        <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <strong className="block text-brand-blue mb-1">Bolsa Família</strong>
          <span className="text-sm text-gray-600">Valor variável. Foca na família toda, exige frequência escolar e vacinação.</span>
        </li>
      </ul>
    </BroadcastLayout>
  );
};

// 10. Guia Direitos
export const GuiaDireitosPage: React.FC<Props> = ({ onNavigate, quizzes }) => {
  useEffect(() => { document.title = "Guia de Direitos Sociais 2026: Cidadania"; }, []);
  return (
    <BroadcastLayout
      title="Seus Direitos em 2026: Guia completo de Cidadania"
      subtitle="Além dos auxílios financeiros, você tem direito a isenções de taxas, transporte gratuito e prioridade em programas habitacionais."
      onNavigate={onNavigate}
      quizTriggerLabel="Consultar CadÚnico"
      onTakeQuiz={() => onNavigate('guide-cadunico')}
    >
      <h3>Isenção em Concursos</h3>
      <p>Inscritos no CadÚnico têm direito à isenção total da taxa de inscrição em concursos públicos federais e no ENEM.</p>

      <h3>Telefone Popular</h3>
      <p>Famílias de baixa renda podem solicitar uma linha de telefone fixo com tarifa reduzida e franquia de minutos.</p>

      <h3>Carteira do Idoso</h3>
      <p>Para idosos acima de 60 anos que não possuem comprovante de renda, a Carteira do Idoso garante a gratuidade ou desconto de 50% em viagens interestaduais de ônibus.</p>
    </BroadcastLayout>
  );
};

// 11. CNH Gratuita Regras
export const CnhLegacyPage: React.FC<Props> = ({ onNavigate, quizzes }) => {
  useEffect(() => { document.title = "Regras CNH Social 2026: O que reprova?"; }, []);
  return (
    <BroadcastLayout
      title="Regras da CNH Social: O que pode reprovar sua inscrição em 2026?"
      subtitle="Não basta ter baixa renda. Detalhes como data de atualização do cadastro e infrações anteriores podem te tirar da lista."
      onNavigate={onNavigate}
      quizTriggerLabel="Verificar Requisitos"
      onTakeQuiz={() => onNavigate('landing-cnh')}
    >
      <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm mb-6 not-prose">
        <h4 className="font-bold text-red-900 mb-4">Principais Motivos de Reprovação</h4>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex gap-2"><CheckCircle2 className="text-red-500" size={16} /> Cadastro Único desatualizado há mais de 24 meses.</li>
          <li className="flex gap-2"><CheckCircle2 className="text-red-500" size={16} /> Divergência de endereço entre o Detran e o CRAS.</li>
          <li className="flex gap-2"><CheckCircle2 className="text-red-500" size={16} /> Já possuir processo de habilitação aberto (o programa é para primeira habilitação ou mudança de categoria, não para reiniciar processos pagos).</li>
        </ul>
      </div>
      <p>A CNH Social é um programa estadual, então as regras podem ter pequenas variações entre Ceará, Goiás, Espírito Santo e outros estados participantes.</p>
    </BroadcastLayout>
  );
};

// 12. Bolsa Família Regras
export const BolsaFamiliaLegacyPage: React.FC<Props> = ({ onNavigate, quizzes }) => {
  useEffect(() => { document.title = "Regras Bolsa Família 2026: Guia Detalhado"; }, []);
  return (
    <BroadcastLayout
      title="Bolsa Família: Entenda as Condicionalidades de Saúde e Educação"
      subtitle="Para manter o benefício, a família precisa cumprir compromissos. O descumprimento pode gerar bloqueio ou cancelamento."
      onNavigate={onNavigate}
      quizTriggerLabel="Consultar Situação"
      onTakeQuiz={() => onNavigate('guide-bolsa')}
    >
      <h3>O que é cobrado?</h3>
      <ul className="space-y-4 not-prose my-6">
        <li className="flex gap-3 items-start">
          <div className="bg-blue-100 p-2 rounded text-blue-700"><Baby size={20} /></div>
          <div>
            <strong className="block text-slate-900">Saúde (Crianças)</strong>
            <p className="text-sm text-slate-600">Calendário de vacinação em dia e acompanhamento de peso/altura (nutricional) semestral no posto de saúde.</p>
          </div>
        </li>
        <li className="flex gap-3 items-start">
          <div className="bg-green-100 p-2 rounded text-green-700"><CheckCircle2 size={20} /></div>
          <div>
            <strong className="block text-slate-900">Pré-Natal</strong>
            <p className="text-sm text-slate-600">Gestantes devem realizar o pré-natal completo na rede pública.</p>
          </div>
        </li>
        <li className="flex gap-3 items-start">
          <div className="bg-yellow-100 p-2 rounded text-yellow-700"><FileText size={20} /></div>
          <div>
            <strong className="block text-slate-900">Educação</strong>
            <p className="text-sm text-slate-600">Frequência escolar mínima de 60% (4 a 5 anos) e 75% (6 a 18 anos).</p>
          </div>
        </li>
      </ul>
    </BroadcastLayout>
  );
};
