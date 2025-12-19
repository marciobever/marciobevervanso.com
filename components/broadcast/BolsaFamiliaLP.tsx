import React, { useEffect, useState } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { Wallet, Calendar, CheckCircle2, AlertTriangle, Baby, HeartPulse, GraduationCap, Info, Search, ArrowRight, Download, Users, Landmark, ShieldAlert, History, UserCheck, Calculator, Landmark as Bank, CreditCard } from 'lucide-react';
import { Quiz, ViewState } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';

interface Props {
  onNavigate: (view: ViewState) => void;
  quizzes?: Quiz[];
}

export const BolsaFamiliaLP: React.FC<Props> = ({ onNavigate, quizzes }) => {
  const [selectedNis, setSelectedNis] = useState<string>('1');

  useEffect(() => {
    document.title = "Consultar Bolsa Família 2025: Calendário NIS, CPF e Valor Estimado";
    window.scrollTo(0, 0);
  }, []);

  const calendar2025: Record<string, string[]> = {
    '1': ['18/Jan', '16/Fev', '18/Mar', '17/Abr'],
    '2': ['19/Jan', '17/Fev', '19/Mar', '18/Abr'],
    '3': ['22/Jan', '20/Fev', '20/Mar', '22/Abr'],
    '4': ['23/Jan', '21/Fev', '21/Mar', '23/Abr'],
    '5': ['24/Jan', '22/Fev', '24/Mar', '24/Abr'],
    '6': ['25/Jan', '23/Fev', '25/Mar', '25/Abr'],
    '7': ['26/Jan', '24/Fev', '26/Mar', '26/Abr'],
    '8': ['29/Jan', '27/Fev', '27/Mar', '29/Abr'],
    '9': ['30/Jan', '28/Fev', '28/Mar', '30/Abr'],
    '0': ['31/Jan', '29/Fev', '31/Mar', '30/Abr'],
  };

  return (
    <BroadcastLayout
      title="Bolsa Família 2025: Novo Calendário e Simulador de Valor Oficial"
      subtitle="O Governo Federal atualizou as regras de pagamento e iniciou o pente-fino do CadÚnico. Use nosso simulador abaixo para estimar seu benefício e ver as datas do seu NIS."
      onNavigate={onNavigate}
      quizId="2"
      quizzes={quizzes}
      updatedDate="Hoje"
    >
      <SchemaMarkup data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Bolsa Família 2025: Guia de Valores, Consulta CPF e Calendário",
        "description": "Simule o valor do seu Bolsa Família com os adicionais de R$ 150 e R$ 50 e consulte o calendário oficial de 2025 pelo NIS.",
        "author": { "@type": "Organization", "name": "Guia Social Brasil" }
      }} />

      {/* CONTEÚDO SEO ENCORPADO */}
      <h2 className="mt-12">Quanto minha família vai receber no Bolsa Família 2025?</h2>
      <p>
        Muitas pessoas buscam por <strong>"Bolsa Família valor 2025"</strong> ou <strong>"Consultar Bolsa Família pelo CPF"</strong>. É importante entender que o programa atual não é mais um valor fixo único, mas uma cesta de benefícios. O valor base garantido é de <strong>R$ 600,00</strong>, mas o total pode ultrapassar os R$ 1.000,00 dependendo da quantidade de filhos, gestantes e nutrizes na residência.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-8">
         <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-8 h-8 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-xs">BRC</div>
               <h4 className="font-bold text-slate-800">Renda de Cidadania</h4>
            </div>
            <p className="text-2xl font-black text-brand-blue">R$ 142,00</p>
            <p className="text-xs text-slate-500">Valor individual pago para cada membro da família.</p>
         </div>

         <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-green-500 transition-colors">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">BPI</div>
               <h4 className="font-bold text-slate-800">Primeira Infância</h4>
            </div>
            <p className="text-2xl font-black text-green-600">+ R$ 150,00</p>
            <p className="text-xs text-slate-500">Adicional para crianças de 0 a 6 anos completos.</p>
         </div>

         <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-orange-500 transition-colors">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">BCF</div>
               <h4 className="font-bold text-slate-800">Variável Familiar</h4>
            </div>
            <p className="text-2xl font-black text-orange-600">+ R$ 50,00</p>
            <p className="text-xs text-slate-500">Para gestantes, nutrizes e jovens de 7 a 18 anos.</p>
         </div>

         <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-purple-500 transition-colors">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">BCO</div>
               <h4 className="font-bold text-slate-800">Complementar</h4>
            </div>
            <p className="text-2xl font-black text-purple-600">Piso R$ 600</p>
            <p className="text-xs text-slate-500">Garante o valor mínimo caso a soma per capita seja inferior.</p>
         </div>
      </div>

      {/* GATILHO DE ATENÇÃO: PENTE-FINO DATAPREV */}
      <div className="bg-red-50 border-2 border-red-200 p-6 rounded-3xl my-10 not-prose flex flex-col md:flex-row gap-6 items-center">
         <div className="bg-red-500 text-white p-4 rounded-2xl shadow-lg animate-pulse shrink-0">
            <ShieldAlert size={32} />
         </div>
         <div>
            <h3 className="text-red-900 font-black text-xl mb-1 uppercase tracking-tight">Pente-Fino CadÚnico 2025</h3>
            <p className="text-red-800 text-sm leading-relaxed">
               O Ministério do Desenvolvimento Social (MDS) está realizando o cruzamento de dados via <strong>Dataprev</strong>. Famílias com cadastros desatualizados há mais de 24 meses ou divergências na renda informada podem ter o benefício bloqueado ou cancelado. Mantenha seus dados em dia no CRAS.
            </p>
         </div>
      </div>

      {/* SEÇÃO CALENDÁRIO INTERATIVO */}
      <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white my-12 relative overflow-hidden not-prose">
         <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
         
         <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
               <Calendar className="text-blue-400" /> Datas de Pagamento pelo NIS
            </h3>
            <p className="text-blue-100 text-sm mb-6">Escolha o final do seu NIS para ver as datas de 2025:</p>
            
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

      <h2>Inscrição Bolsa Família 2025: Como garantir sua vaga?</h2>
      <p>
        A inscrição <strong>não pode ser feita pela internet</strong>. O primeiro passo é realizar o pré-cadastro no aplicativo oficial do <strong>Cadastro Único</strong>, mas a validação final exige a entrevista presencial no <strong>CRAS</strong> do seu município.
      </p>
      
      <div className="bg-blue-900 text-white p-8 rounded-[2.5rem] my-12 not-prose flex flex-col md:flex-row items-center gap-8 shadow-2xl">
         <div className="flex-grow text-center md:text-left">
            <h3 className="text-2xl font-black mb-2">Conseguiu um Emprego Formal?</h3>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
               Com a nova <strong>Regra de Proteção</strong>, se a sua renda subir para até R$ 706 por pessoa, você continua recebendo 50% do Bolsa Família por até 2 anos. Não tenha medo de assinar a carteira!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
               <button onClick={() => onNavigate('calculator')} className="bg-white text-blue-900 px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow-lg">
                  Calcular Nova Renda <Calculator size={18} />
               </button>
               <button onClick={() => onNavigate('cards')} className="bg-blue-800 text-white border border-blue-700 px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                  Cartão para Empregado <CreditCard size={18} />
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
               Como sacar sem o cartão físico? <Info size={18} className="text-brand-blue" />
            </summary>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed pl-4 border-l-2 border-brand-blue">
               Utilize o aplicativo <strong>Caixa Tem</strong> para gerar um código de saque (Token). Ele permite retirar o dinheiro em qualquer caixa eletrônico ou Lotérica sem precisar do cartão.
            </p>
         </details>
         <details className="group bg-gray-50 p-5 rounded-2xl border border-gray-200 cursor-pointer">
            <summary className="font-bold text-slate-800 flex justify-between items-center list-none">
               O Vale Gás é pago todo mês? <Info size={18} className="text-brand-blue" />
            </summary>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed pl-4 border-l-2 border-brand-blue">
               Não. O <strong>Auxílio Gás</strong> é pago a cada dois meses (meses pares: Fevereiro, Abril, Junho, Agosto, Outubro e Dezembro). O valor corresponde a 100% da média nacional do botijão de 13kg.
            </p>
         </details>
      </div>

    </BroadcastLayout>
  );
};