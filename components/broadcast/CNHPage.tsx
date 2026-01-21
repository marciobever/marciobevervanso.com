import React, { useEffect } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { MapPin, ExternalLink, Calendar, AlertCircle, CheckCircle2, CircleDashed, Briefcase, Award, HelpCircle, FileText, Info } from 'lucide-react';
import { Quiz } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { MetaHead } from '../seo/MetaHead';

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
      specifics: ['Ter 18 anos completos', 'Saber ler e escrever', 'Possuir CPF e RG']
   }
];

export const CNHPage: React.FC<Props> = ({ onNavigate, onSimulate, quizzes }) => {
   // SEO movido para MetaHead


   return (
      <BroadcastLayout
         title="CNH Social 2025: O Guia Definitivo para Tirar a Habilitação de Graça"
         subtitle="O custo da primeira habilitação no Brasil ultrapassa R$ 3.000. Saiba como o programa governamental isenta 100% das taxas para cidadãos de baixa renda e estudantes."
         quizId="3"
         quizzes={quizzes}
         onNavigate={onNavigate}
         quizTriggerLabel="Simular Minha Vaga"
      >
         <MetaHead
            title="CNH Social 2025: Como Conseguir Habilitação Gratuita | Guia Completo"
            description="Saiba como funciona o programa CNH Social 2025 para tirar habilitação gratuita. Confira estados participantes, requisitos e como se inscrever."
            url="https://beneficios.receitapopular.com.br/cnh-social-2025"
            canonicalUrl="https://beneficios.receitapopular.com.br/cnh-social-2025"
         />
         <SchemaMarkup data={{
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Como funciona a CNH Social 2025",
            "description": "Guia passo a passo sobre inscrições, estados participantes e requisitos da CNH Social.",
            "author": { "@type": "Organization", "name": "Guia Social Brasil" }
         }} />

         <h2>O que é o Programa CNH Social?</h2>
         <p>
            A <strong>CNH Social</strong> (ou CNH Popular/Gratuita) é uma iniciativa de inclusão social que visa democratizar o acesso à Carteira Nacional de Habilitação. O programa é gerenciado pelos Detrans estaduais e financiado por fundos de combate à pobreza ou incentivos governamentais.
         </p>
         <p>
            Muitas vezes, a falta da carteira de motorista é o que impede um pai ou mãe de família de conseguir um emprego como motorista de aplicativo, entregador ou em transportadoras. Por isso, este benefício é considerado um dos mais importantes para a geração de renda.
         </p>

         <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 my-8 not-prose">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
               <Award className="text-blue-600" /> Vantagens de ser Aprovado
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="bg-white p-4 rounded-xl shadow-sm">
                  <strong className="text-brand-blue block mb-1">Isenção Total</strong>
                  <p className="text-xs text-slate-600">Você não paga taxas de exames, aulas teóricas, práticas e nem a emissão do documento.</p>
               </div>
               <div className="bg-white p-4 rounded-xl shadow-sm">
                  <strong className="text-brand-blue block mb-1">Oportunidade de Emprego</strong>
                  <p className="text-xs text-slate-600">Ter CNH abre portas para vagas de logística, vendas externas e transporte.</p>
               </div>
               <div className="bg-white p-4 rounded-xl shadow-sm">
                  <strong className="text-brand-blue block mb-1">Inclusão Digital</strong>
                  <p className="text-xs text-slate-600">Acesso à CNH Digital facilitando o dia a dia e identificação oficial.</p>
               </div>
               <div className="bg-white p-4 rounded-xl shadow-sm">
                  <strong className="text-brand-blue block mb-1">Adoção de Categorias</strong>
                  <p className="text-xs text-slate-600">Muitos estados permitem mudar de 'B' para 'D' ou 'E' gratuitamente.</p>
               </div>
            </div>
         </div>

         <h2>Quem pode participar em 2025?</h2>
         <p>Embora as regras variem um pouco em cada estado, a base de requisitos costuma ser:</p>
         <ul className="space-y-3">
            <li className="flex gap-2"><strong><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-1" /> Estar no CadÚnico:</strong> A inscrição no Cadastro Único do Governo Federal deve estar ativa e atualizada nos últimos 24 meses.</li>
            <li className="flex gap-2"><strong><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-1" /> Renda Familiar:</strong> Geralmente até 2 salários mínimos totais ou meio salário por pessoa.</li>
            <li className="flex gap-2"><strong><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-1" /> Escolaridade:</strong> Saber ler e escrever (alfabetizado).</li>
            <li className="flex gap-2"><strong><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-1" /> Domicílio:</strong> Morar no estado onde está solicitando o benefício por pelo menos 1 ou 2 anos.</li>
         </ul>

         <div className="bg-red-50 p-6 rounded-2xl border border-red-100 my-8 not-prose">
            <h4 className="flex items-center gap-2 text-red-800 font-bold mb-2">
               <AlertCircle size={20} /> O que REPROVA sua inscrição?
            </h4>
            <p className="text-sm text-red-700 leading-relaxed">
               Muitos candidatos são desclassificados por <strong>divergência de dados</strong>. Se seu endereço no DETRAN for diferente do endereço no CadÚnico (CRAS), o sistema bloqueia seu pedido automaticamente. Atualize tudo antes de se inscrever!
            </p>
         </div>

         <h3>Categorias Disponíveis</h3>
         <p>Você pode solicitar a CNH Social para as seguintes modalidades:</p>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose my-6">
            <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200">
               <h5 className="font-bold text-slate-900 mb-1">Categoria A</h5>
               <p className="text-xs text-slate-600">Motos e triciclos. Ideal para quem quer trabalhar com entregas (Motofrete).</p>
            </div>
            <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200">
               <h5 className="font-bold text-slate-900 mb-1">Categoria B</h5>
               <p className="text-xs text-slate-600">Carros de passeio e utilitários leves. A porta de entrada para motoristas de app.</p>
            </div>
            <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200">
               <h5 className="font-bold text-slate-900 mb-1">Mudança D/E</h5>
               <p className="text-xs text-slate-600">Caminhões e Ônibus. Focada em qualificação profissional avançada.</p>
            </div>
         </div>

         <h2>Prazos e Estados Participantes</h2>
         <p>Confira a situação atual nos principais estados que oferecem a gratuidade:</p>

         <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {STATE_PROGRAMS.map((prog, idx) => (
               <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:border-brand-blue transition-colors">
                  <div className="flex justify-between items-start mb-4">
                     <div className="flex items-center gap-2">
                        <MapPin className="text-brand-blue" size={20} />
                        <h4 className="font-bold text-slate-900 text-lg">{prog.state}</h4>
                     </div>
                     <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${prog.status === 'Aberto' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{prog.status}</span>
                  </div>
                  <p className="text-brand-blue font-bold text-sm mb-4">{prog.programName}</p>
                  <ul className="text-xs text-slate-500 space-y-1 mb-6">
                     {prog.specifics.map((s, i) => <li key={i}>• {s}</li>)}
                  </ul>
                  <a href={prog.website} target="_blank" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-brand-blue transition-all">
                     Site Oficial <ExternalLink size={14} />
                  </a>
               </div>
            ))}
         </div>

         <h2>Perguntas Frequentes (FAQ CNH Grátis)</h2>
         <div className="space-y-4 not-prose mb-12">
            <details className="group bg-white p-5 rounded-2xl border border-gray-100 cursor-pointer">
               <summary className="font-bold text-slate-800 flex justify-between items-center list-none">
                  Quanto tempo demora o processo? <HelpCircle size={18} className="text-brand-blue" />
               </summary>
               <p className="text-sm text-slate-600 mt-4 leading-relaxed pl-4 border-l-2 border-brand-blue">
                  Após a seleção, você tem cerca de 12 meses para concluir todas as etapas (exames médicos, curso teórico, prova teórica, aulas práticas e prova prática).
               </p>
            </details>
            <details className="group bg-white p-5 rounded-2xl border border-gray-100 cursor-pointer">
               <summary className="font-bold text-slate-800 flex justify-between items-center list-none">
                  Se eu reprovar na prova, perco o benefício? <HelpCircle size={18} className="text-brand-blue" />
               </summary>
               <p className="text-sm text-slate-600 mt-4 leading-relaxed pl-4 border-l-2 border-brand-blue">
                  Geralmente o programa permite uma reprovação gratuita. Como o aluno reprove mais vezes, ele poderá ter que arcar com a taxa de reteste por conta própria para continuar no programa.
               </p>
            </details>
            <details className="group bg-white p-5 rounded-2xl border border-gray-100 cursor-pointer">
               <summary className="font-bold text-slate-800 flex justify-between items-center list-none">
                  Posso fazer a CNH Social em outro estado? <HelpCircle size={18} className="text-brand-blue" />
               </summary>
               <p className="text-sm text-slate-600 mt-4 leading-relaxed pl-4 border-l-2 border-brand-blue">
                  Não. O benefício exige que você comprove moradia no estado de inscrição por um período determinado em edital (geralmente 1 ou 2 anos).
               </p>
            </details>
         </div>

      </BroadcastLayout>
   );
};