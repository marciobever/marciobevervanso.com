
import React, { useEffect, useState } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { Wallet, Calendar, CheckCircle2, AlertTriangle, Baby, HeartPulse, GraduationCap, Info, Search, ArrowRight, Download, Users, Landmark, ShieldAlert, History, UserCheck, Calculator, CreditCard } from 'lucide-react';
import { Quiz, ViewState } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';

interface Props {
  onNavigate: (view: ViewState) => void;
  quizzes?: Quiz[];
}

export const BolsaFamiliaLP: React.FC<Props> = ({ onNavigate, quizzes }) => {
  const [selectedNis, setSelectedNis] = useState<string>('1');

  useEffect(() => {
    document.title = "Consulta Bolsa Família 2025: Calendário, Valores e Regras do Pente-Fino";
    window.scrollTo(0, 0);
  }, []);

  const calendar2025: Record<string, string[]> = {
    '1': ['18/Jan', '16/Fev', '18/Mar', '17/Abr', '18/Mai'],
    '2': ['19/Jan', '17/Fev', '19/Mar', '18/Abr', '19/Mai'],
    '3': ['22/Jan', '20/Fev', '20/Mar', '22/Abr', '22/Mai'],
    '4': ['23/Jan', '21/Fev', '21/Mar', '23/Abr', '23/Mai'],
    '5': ['24/Jan', '22/Fev', '24/Mar', '24/Abr', '24/Mai'],
    '6': ['25/Jan', '23/Fev', '25/Mar', '25/Abr', '25/Mai'],
    '7': ['26/Jan', '24/Fev', '26/Mar', '26/Abr', '26/Mai'],
    '8': ['29/Jan', '27/Fev', '27/Mar', '29/Abr', '29/Mai'],
    '9': ['30/Jan', '28/Fev', '28/Mar', '30/Abr', '30/Mai'],
    '0': ['31/Jan', '29/Fev', '31/Mar', '30/Abr', '31/Mai'],
  };

  return (
    <BroadcastLayout
      title="Bolsa Família 2025: Guia de Consulta, Novos Valores e Calendário NIS"
      subtitle="O Governo iniciou o cruzamento de dados para o pente-fino. Use nosso simulador oficial abaixo para ver se você corre risco de bloqueio e qual o seu valor de 2025."
      onNavigate={onNavigate}
      quizId="2"
      quizzes={quizzes}
      updatedDate="Hoje"
    >
      <SchemaMarkup data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Bolsa Família 2025: Guia de Valores e Consulta pelo CPF",
        "description": "Simule o valor do seu Bolsa Família com os bônus de R$ 150 e R$ 50 e veja o calendário de 2025.",
        "author": { "@type": "Organization", "name": "Guia Social Brasil" }
      }} />

      {/* SEÇÃO 1: TABELA DE VALORES */}
      <h2 className="mt-10">Qual o valor do Bolsa Família em 2025?</h2>
      <p>
        O <strong>Bolsa Família 2025</strong> não paga mais um valor fixo por família. Agora, o cálculo é feito somando benefícios individuais. O piso nacional é de <strong>R$ 600,00</strong>, mas muitas famílias recebem mais de R$ 1.000,00 devido aos bônus extras.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-8">
         <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-8 h-8 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-xs">BRC</div>
               <h4 className="font-bold text-slate-800">Renda de Cidadania</h4>
            </div>
            <p className="text-2xl font-black text-brand-blue">R$ 142,00</p>
            <p className="text-xs text-slate-500">Valor pago individualmente por cada membro da família.</p>
         </div>

         <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-green-500 transition-colors">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">BPI</div>
               <h4 className="font-bold text-slate-800">Primeira Infância</h4>
            </div>
            <p className="text-2xl font-black text-green-600">+ R$ 150,00</p>
            <p className="text-xs text-slate-500">Adicional para cada criança da casa de 0 a 6 anos completos.</p>
         </div>

         <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-orange-500 transition-colors">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">BCF</div>
               <h4 className="font-bold text-slate-800">Variável Familiar</h4>
            </div>
            <p className="text-2xl font-black text-orange-600">+ R$ 50,00</p>
            <p className="text-xs text-slate-500">Para gestantes, nutrizes e jovens de 7 a 18 anos incompletos.</p>
         </div>

         <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-purple-500 transition-colors">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">BCO</div>
               <h4 className="font-bold text-slate-800">Complementar</h4>
            </div>
            <p className="text-2xl font-black text-purple-600">Piso R$ 600</p>
            <p className="text-xs text-slate-500">Garante que o valor final nunca seja menor que R$ 600,00.</p>
         </div>
      </div>

      {/* ALERTA DE PENTE-FINO - ELEMENTO DE ALTA ATENÇÃO */}
      <div className="bg-red-50 border-2 border-red-200 p-6 rounded-3xl my-10 not-prose flex flex-col md:flex-row gap-6 items-center">
         <div className="bg-red-500 text-white p-4 rounded-2xl shadow-lg animate-pulse shrink-0">
            <ShieldAlert size={32} />
         </div>
         <div>
            <h3 className="text-red-900 font-black text-xl mb-1 uppercase tracking-tight">Alerta de Pente-Fino Dataprev</h3>
            <p className="text-red-800 text-sm leading-relaxed">
               O Ministério do Desenvolvimento Social está bloqueando famílias que moram sozinhas (unipessoais) e cadastros sem atualização há mais de 2 anos. Se você recebeu aviso no <strong>Caixa Tem</strong>, procure o CRAS imediatamente.
            </p>
         </div>
      </div>

      {/* CALENDÁRIO INTERATIVO */}
      <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white my-12 relative overflow-hidden not-prose">
         <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
         
         <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
               <Calendar className="text-blue-400" /> Datas de Pagamento 2025
            </h3>
            <p className="text-blue-100 text-sm mb-6">Selecione o final do seu NIS para ver as datas exatas:</p>
            
            <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
               {[1,2,3,4,5,6,7,8,9,0].map(n => (
                  <button 
                    key={n}
                    onClick={() => setSelectedNis(n.toString())}
                    className={`w-10 h-10 rounded-full font-bold transition-all border-2 ${selectedNis === n.toString() ? 'bg-white text-brand-dark border-white scale-110 shadow-lg' : 'bg-transparent border-white/20 text-white hover:border-white/50'}`}
                  >
                     {n}
                  </button>
               ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
               <div className="text-center md:text-left">
                  <p className="text-[10px] uppercase font-bold text-blue-300">Janeiro</p>
                  <p className="text-xl font-black">{calendar2025[selectedNis][0]}</p>
               </div>
               <div className="text-center md:text-left">
                  <p className="text-[10px] uppercase font-bold text-blue-300">Fevereiro</p>
                  <p className="text-xl font-black">{calendar2025[selectedNis][1]}</p>
               </div>
               <div className="text-center md:text-left">
                  <p className="text-[10px] uppercase font-bold text-blue-300">Março</p>
                  <p className="text-xl font-black">{calendar2025[selectedNis][2]}</p>
               </div>
               <div className="text-center md:text-left">
                  <p className="text-[10px] uppercase font-bold text-blue-300">Abril</p>
                  <p className="text-xl font-black">{calendar2025[selectedNis][3]}</p>
               </div>
            </div>
         </div>
      </div>

      <h2>Quem tem direito ao Bolsa Família em 2025?</h2>
      <p>
        A regra principal é a <strong>renda mensal per capita</strong> (por pessoa) de até <strong>R$ 218,00</strong>. Isso significa que você soma todo o dinheiro que a família ganha no mês e divide pelo número de moradores. Se o resultado for menor que R$ 218, você pode se inscrever no CRAS.
      </p>
      
      <div className="bg-blue-900 text-white p-8 rounded-[2.5rem] my-12 not-prose flex flex-col md:flex-row items-center gap-8 shadow-2xl">
         <div className="flex-grow text-center md:text-left">
            <h3 className="text-2xl font-black mb-2">Conseguiu um Emprego Formal?</h3>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
               Não tenha medo de assinar a carteira! Com a <strong>Regra de Proteção</strong>, se a sua renda subir para até meio salário mínimo (R$ 754) por pessoa, você continua recebendo 50% do Bolsa Família por até 2 anos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
               <button onClick={() => onNavigate('calculator')} className="bg-white text-blue-900 px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow-lg">
                  Calcular Nova Renda <Calculator size={18} />
               </button>
               <button onClick={() => onNavigate('cards')} className="bg-blue-800 text-white border border-blue-700 px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                  Cartões para Empregados <CreditCard size={18} />
               </button>
            </div>
         </div>
         <div className="w-32 h-32 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20 hidden md:flex">
            <UserCheck size={64} className="text-blue-400" />
         </div>
      </div>

      <h3>Dúvidas Rápidas (FAQ)</h3>
      <div className="space-y-4 not-prose mb-12">
         <details className="group bg-gray-50 p-5 rounded-2xl border border-gray-200 cursor-pointer">
            <summary className="font-bold text-slate-800 flex justify-between items-center list-none">
               Como sacar o benefício sem o cartão? <Info size={18} className="text-brand-blue" />
            </summary>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed pl-4 border-l-2 border-brand-blue">
               Basta utilizar o aplicativo <strong>Caixa Tem</strong>. No app, você gera um código de saque (token) que vale por 1 hora e pode ser usado em qualquer caixa eletrônico ou Lotérica sem precisar do cartão físico.
            </p>
         </details>
         <details className="group bg-gray-50 p-5 rounded-2xl border border-gray-200 cursor-pointer">
            <summary className="font-bold text-slate-800 flex justify-between items-center list-none">
               O Vale Gás é pago em qual data? <Info size={18} className="text-brand-blue" />
            </summary>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed pl-4 border-l-2 border-brand-blue">
               O <strong>Auxílio Gás</strong> é pago a cada dois meses (meses pares: Fevereiro, Abril, Junho, Agosto, Outubro e Dezembro), seguindo exatamente o mesmo calendário do Bolsa Família de acordo com o seu NIS.
            </p>
         </details>
      </div>

    </BroadcastLayout>
  );
};
