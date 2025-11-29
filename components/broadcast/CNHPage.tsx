import React, { useEffect } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { Car, MapPin, FileText, ExternalLink, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import { Quiz } from '../../types';

interface Props {
  onNavigate: (view: any) => void;
  onSimulate: (id: string) => void;
  quizzes?: Quiz[];
}

interface StateProgram {
  state: string;
  programName: string;
  status: 'Aberto' | 'Encerrado' | 'Previsto' | 'Em Breve';
  prediction: string;
  website: string;
  specifics: string[];
}

const STATE_PROGRAMS: StateProgram[] = [
  {
    state: 'Ceará',
    programName: 'CNH Popular',
    status: 'Aberto',
    prediction: 'Inscrições contínuas em 2025',
    website: 'https://www.detran.ce.gov.br',
    specifics: ['Separado por categorias (Moto/Carro)', 'Prioridade para beneficiários do Bolsa Família', 'Não pode ter cometido infração gravíssima']
  },
  {
    state: 'Espírito Santo',
    programName: 'CNH Social',
    status: 'Previsto',
    prediction: 'Março/2025 (1ª Fase)',
    website: 'https://detran.es.gov.br',
    specifics: ['Renda per capita até meio salário mínimo', 'Desempregados há mais de 1 ano', 'Vagas distribuídas por município']
  },
  {
    state: 'Goiás',
    programName: 'CNH Social',
    status: 'Em Breve',
    prediction: 'Fevereiro/2025',
    website: 'https://www.detran.go.gov.br',
    specifics: ['Modalidade Estudantil (notas do ENEM)', 'Modalidade Rural', 'Modalidade Urbana']
  },
  {
    state: 'Pará',
    programName: 'CNH Pai D\'égua',
    status: 'Previsto',
    prediction: 'Abril/2025',
    website: 'https://detran.pa.gov.br',
    specifics: ['Ter 18 anos completos', 'Saber ler e escrever', 'Possuir CPF e RG', 'Certidão de nascimento dos dependentes (se houver)']
  },
  {
    state: 'Distrito Federal',
    programName: 'Habilitação Social',
    status: 'Previsto',
    prediction: 'Fevereiro/2025',
    website: 'https://detran.df.gov.br',
    specifics: ['Estar no CadÚnico', 'Ser domiciliado no DF há 2 anos', 'Não ter sofrido penalidades de trânsito']
  },
  {
    state: 'Pernambuco',
    programName: 'CNH Popular',
    status: 'Previsto',
    prediction: 'Maio/2025',
    website: 'https://www.detran.pe.gov.br',
    specifics: ['Alunos de escola pública', 'Beneficiários de programas assistenciais', 'Trabalhadores rurais']
  },
  {
    state: 'Amazonas',
    programName: 'CNH Social',
    status: 'Em Breve',
    prediction: '1º Semestre de 2025',
    website: 'https://detran.am.gov.br',
    specifics: ['Moradores da capital e interior', 'Renda familiar de até 2 salários mínimos', 'Inscrição exclusiva pelo site']
  }
];

export const CNHPage: React.FC<Props> = ({ onNavigate, onSimulate, quizzes }) => {
  // SEO Optimization
  useEffect(() => {
    document.title = "CNH Social 2025: Inscrições Abertas e Lista de Estados | CNH Gratuita";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Saiba como tirar a CNH Social totalmente grátis em 2025. Confira os estados com inscrições abertas, requisitos do Detran e quem pode participar do programa CNH Popular.";
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    } else {
      const m = document.createElement('meta');
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }

    const metaKeys = document.querySelector('meta[name="keywords"]');
    const keys = "cnh social 2025, cnh gratuita, cnh popular, inscrição cnh social, carteira de motorista gratuita, detran cnh social, cnh jovem";
    if (metaKeys) {
      metaKeys.setAttribute('content', keys);
    } else {
      const m = document.createElement('meta');
      m.name = "keywords";
      m.content = keys;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <BroadcastLayout
      title="CNH Social 2025: Cronograma, Editais e Regras por Estado"
      subtitle="Descubra como obter sua Carteira de Habilitação totalmente gratuita (Categoria A ou B). Veja abaixo a lista detalhada de estados participantes e prazos."
      quizId="3" // ID for CNH Quiz
      quizzes={quizzes}
      onNavigate={onNavigate}
      quizTriggerLabel="Verificar Minha Elegibilidade"
    >
      <h2>O que é a CNH Social?</h2>
      <p>
        A CNH Social é um programa governamental (gerido pelos estados) que isenta pessoas de baixa renda de todas as taxas para tirar a carteira de motorista. O benefício cobre exames médicos, psicotécnicos, aulas teóricas, aulas práticas e a taxa de emissão do documento. O valor economizado pode chegar a <strong>R$ 3.000,00</strong>.
      </p>

      <h3>Editais e Prazos por Estado (2025)</h3>
      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {STATE_PROGRAMS.map((prog, idx) => (
           <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:border-brand-blue transition-colors relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-2">
                    <MapPin className="text-brand-blue" size={20} />
                    <h4 className="font-bold text-slate-900 text-lg">{prog.state}</h4>
                 </div>
                 <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${
                    prog.status === 'Aberto' ? 'bg-green-100 text-green-700' :
                    prog.status === 'Em Breve' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-500'
                 }`}>
                    {prog.status}
                 </span>
              </div>
              
              <p className="text-brand-blue font-bold text-sm mb-1">{prog.programName}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                 <Calendar size={14} /> Previsão: {prog.prediction}
              </div>

              <div className="bg-slate-50 rounded-lg p-3 mb-4">
                 <p className="text-xs font-bold text-gray-400 uppercase mb-2">Destaques do Edital</p>
                 <ul className="space-y-1.5">
                    {prog.specifics.map((spec, i) => (
                       <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={12} className="text-green-500 shrink-0 mt-0.5" /> {spec}
                       </li>
                    ))}
                 </ul>
              </div>

              <a 
                href={prog.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-gray-200 text-brand-medium font-bold text-sm hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all"
              >
                Site Oficial Detran <ExternalLink size={14} />
              </a>
           </div>
        ))}
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-3 items-start my-6 not-prose">
         <AlertCircle className="text-yellow-600 shrink-0 mt-0.5" />
         <p className="text-sm text-yellow-800">
            <strong>Atenção:</strong> Se o seu estado não está na lista acima, verifique diretamente no site do DETRAN da sua região. Alguns estados lançam editais surpresa durante o ano ou utilizam nomes diferentes para o programa.
         </p>
      </div>

      <h3>Quem pode participar? (Regras Gerais)</h3>
      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 not-prose my-6">
         <ul className="space-y-3">
            <li className="flex gap-3 text-brand-dark">
               <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xs shrink-0">1</div>
               <span>Ter mais de 18 anos e saber ler/escrever.</span>
            </li>
            <li className="flex gap-3 text-brand-dark">
               <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xs shrink-0">2</div>
               <span>Estar inscrito no <strong>CadÚnico</strong> (ativo e atualizado).</span>
            </li>
            <li className="flex gap-3 text-brand-dark">
               <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xs shrink-0">3</div>
               <span>Comprovar residência no estado há pelo menos 2 anos.</span>
            </li>
            <li className="flex gap-3 text-brand-dark">
               <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xs shrink-0">4</div>
               <span>Renda familiar de até 2 salários mínimos ou estar desempregado há mais de 1 ano.</span>
            </li>
         </ul>
      </div>

      <h3>Categorias Disponíveis</h3>
      <ul>
         <li><strong>Categoria A:</strong> Moto.</li>
         <li><strong>Categoria B:</strong> Carro.</li>
         <li><strong>Adição de Categoria:</strong> Para quem já tem moto e quer carro (ou vice-versa).</li>
         <li><strong>Mudança para D/E:</strong> Alguns estados (como ES e GO) oferecem para motoristas profissionais (ônibus/caminhão) visando empregabilidade.</li>
      </ul>

      <p>
        As vagas são limitadas e a concorrência é alta. Mantenha seu CadÚnico atualizado, pois ele é o principal critério de desempate.
      </p>
    </BroadcastLayout>
  );
};