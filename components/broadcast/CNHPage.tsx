
import React, { useEffect } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { MapPin, ExternalLink, Calendar, AlertCircle } from 'lucide-react';
import { Quiz } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';

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
  }
];

export const CNHPage: React.FC<Props> = ({ onNavigate, onSimulate, quizzes }) => {
  useEffect(() => {
    document.title = "CNH Social 2025: Inscrições Abertas, Estados e Requisitos";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Tudo sobre a CNH Social 2025. Veja a lista de estados com inscrições abertas, requisitos para gratuidade e como tirar sua habilitação sem custo.";
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    }
  }, []);

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "CNH Social",
      "serviceType": "Driving License Support",
      "provider": {
        "@type": "GovernmentOrganization",
        "name": "Detran"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Baixa Renda"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BRL",
        "description": "Gratuidade total para taxas e exames de habilitação."
      }
    }
  ];

  return (
    <BroadcastLayout
      title="CNH Social 2025: Como se inscrever, Prazos e Critérios de Aprovação"
      subtitle="Não perca o prazo. O programa oferece a 1ª habilitação gratuita para quem tem baixa renda. Entenda as 3 etapas para garantir sua vaga."
      quizId="3"
      quizzes={quizzes}
      onNavigate={onNavigate}
      quizTriggerLabel="Verificar Minha Elegibilidade"
      relatedArticle={{
        title: "Dica: Como comprar moto sem entrada usando o FGTS",
        onClick: () => onNavigate('loans')
      }}
    >
      <SchemaMarkup data={schemaData} />
      <h2>O que é a CNH Social?</h2>
      <p>
        A CNH Social é um programa estadual que custeia 100% do processo de habilitação (exames, aulas teóricas, práticas e taxas) para pessoas de baixa renda. A economia é de cerca de <strong>R$ 3.000,00</strong>.
      </p>

      <h3>As 3 Etapas da Aprovação</h3>
      <div className="space-y-4 not-prose my-8">
         <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
               <span className="bg-slate-900 text-white w-6 h-6 rounded flex items-center justify-center text-xs">1</span>
               Inscrição Online
            </h4>
            <p className="text-sm text-slate-600">
               Feita exclusivamente no site do DETRAN do seu estado. Você preenche os dados e o sistema cruza automaticamente com o <strong>CadÚnico</strong> para verificar a renda.
            </p>
         </div>
         <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
               <span className="bg-slate-900 text-white w-6 h-6 rounded flex items-center justify-center text-xs">2</span>
               Lista de Selecionados
            </h4>
            <p className="text-sm text-slate-600">
               Após o fim do prazo, o DETRAN divulga a lista. Os critérios de desempate geralmente são: menor renda per capita, maior número de filhos e beneficiários do Bolsa Família.
            </p>
         </div>
         <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
               <span className="bg-slate-900 text-white w-6 h-6 rounded flex items-center justify-center text-xs">3</span>
               Matrícula Presencial
            </h4>
            <p className="text-sm text-slate-600">
               Se aprovado, você tem um prazo curto (geralmente 15 dias) para ir ao DETRAN ou Autoescola parceira confirmar os dados. <strong>Se perder esse prazo, perde a vaga.</strong>
            </p>
         </div>
      </div>

      <h3>Critérios que Reprovam (Cuidado!)</h3>
      <ul className="space-y-2 mb-8">
         <li className="flex items-center gap-2 text-red-700"><AlertCircle size={16}/> CadÚnico desatualizado há mais de 24 meses.</li>
         <li className="flex items-center gap-2 text-red-700"><AlertCircle size={16}/> Renda per capita superior a meio salário mínimo.</li>
         <li className="flex items-center gap-2 text-red-700"><AlertCircle size={16}/> Ter cometido infração de trânsito grave ou gravíssima nos últimos 12 meses (para quem tenta mudança de categoria).</li>
         <li className="flex items-center gap-2 text-red-700"><AlertCircle size={16}/> Faltar à matrícula após ser convocado.</li>
      </ul>

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
      
      <p>
        As vagas são limitadas e a concorrência é alta. Mantenha seu CadÚnico atualizado, pois ele é a base de tudo.
      </p>
    </BroadcastLayout>
  );
};
