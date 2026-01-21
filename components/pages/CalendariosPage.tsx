import React, { useState, useEffect } from 'react';
import { CalendarClock, Download, Search, AlertCircle, ChevronRight, Wallet, Landmark } from 'lucide-react';
import { AdSlot } from '../AdSlot';

export const CalendariosPage: React.FC = () => {
   const [selectedNis, setSelectedNis] = useState<string>('1');
   const [activeTab, setActiveTab] = useState<'bolsa' | 'inss' | 'pemeia'>('bolsa');

   // SEO Optimization
   useEffect(() => {
      document.title = "Calendários de Pagamento 2026: Bolsa Família, BPC e INSS";

      const metaDesc = document.querySelector('meta[name="description"]');
      const desc = "Consulte todas as datas de pagamento dos benefícios sociais em 2026. Tabela oficial do Bolsa Família, Calendário do INSS (BPC) e Pé-de-Meia.";
      if (metaDesc) {
         metaDesc.setAttribute('content', desc);
      } else {
         const m = document.createElement('meta');
         m.name = "description";
         m.content = desc;
         document.head.appendChild(m);
      }
   }, []);

   // Mock Data for 2026 (Estimates based on typical logic)
   const bolsaDates: Record<string, string[]> = {
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

   const inssDates: Record<string, string[]> = {
      '1': ['25/Jan', '23/Fev', '22/Mar', '24/Abr'],
      '2': ['26/Jan', '24/Fev', '25/Mar', '25/Abr'],
      '3': ['29/Jan', '27/Fev', '26/Mar', '26/Abr'],
      '4': ['30/Jan', '28/Fev', '27/Mar', '29/Abr'],
      '5': ['31/Jan', '29/Fev', '28/Mar', '30/Abr'],
      '6': ['01/Fev', '01/Mar', '01/Abr', '02/Mai'],
      '7': ['02/Fev', '04/Mar', '02/Abr', '03/Mai'],
      '8': ['05/Fev', '05/Mar', '03/Abr', '06/Mai'],
      '9': ['06/Fev', '06/Mar', '04/Abr', '07/Mai'],
      '0': ['07/Fev', '07/Mar', '05/Abr', '08/Mai'],
   };

   const peMeiaDates = [
      { month: 'Janeiro/Fevereiro', date: '26/Jan' },
      { month: 'Março/Abril', date: '27/Fev' },
      { month: 'Maio/Junho', date: '26/Mar' },
      { month: 'Julho/Agosto', date: '25/Abr' },
      { month: 'Setembro/Outubro', date: '27/Mai' },
      { month: 'Novembro/Dezembro', date: '28/Jun' },
   ];

   return (
      <div className="bg-brand-light min-h-screen py-10">
         <div className="container mx-auto px-4 md:px-6 max-w-5xl">

            {/* Header */}
            <div className="text-center mb-10">
               <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-4 text-brand-blue">
                  <CalendarClock size={32} />
               </div>
               <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4">
                  Calendários de Pagamento 2026
               </h1>
               <p className="text-lg text-brand-medium max-w-2xl mx-auto">
                  Consulte as datas oficiais de liberação do Bolsa Família, BPC/LOAS, Vale Gás e Pé-de-Meia.
               </p>
            </div>

            <AdSlot id="Content1" label="Publicidade Topo" />

            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
               <button
                  onClick={() => setActiveTab('bolsa')}
                  className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === 'bolsa'
                        ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30'
                        : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200'
                     }`}
               >
                  <Wallet size={18} /> Bolsa Família & Vale Gás
               </button>
               <button
                  onClick={() => setActiveTab('inss')}
                  className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === 'inss'
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                        : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200'
                     }`}
               >
                  <Landmark size={18} /> INSS & BPC
               </button>
               <button
                  onClick={() => setActiveTab('pemeia')}
                  className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === 'pemeia'
                        ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                        : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200'
                     }`}
               >
                  <CalendarClock size={18} /> Pé-de-Meia
               </button>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8 min-h-[400px]">

               {/* TAB: BOLSA FAMÍLIA */}
               {activeTab === 'bolsa' && (
                  <div className="animate-fade-in">
                     <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6 border-b border-gray-100 pb-6">
                        <div>
                           <h2 className="text-2xl font-bold text-brand-dark mb-1">Bolsa Família 2026</h2>
                           <p className="text-sm text-gray-500">Pagamento liberado nos últimos 10 dias úteis do mês.</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-xl flex items-center gap-4 w-full md:w-auto">
                           <span className="text-sm font-bold text-brand-blue uppercase">Selecione o final do NIS:</span>
                           <select
                              value={selectedNis}
                              onChange={(e) => setSelectedNis(e.target.value)}
                              className="bg-white border border-blue-200 text-brand-dark text-lg font-bold rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-blue outline-none"
                           >
                              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                                 <option key={n} value={n.toString()}>{n}</option>
                              ))}
                           </select>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="bg-gradient-to-br from-brand-blue to-blue-600 rounded-2xl p-6 text-white shadow-xl">
                           <p className="text-blue-100 text-sm font-bold uppercase mb-2">Próximos Pagamentos</p>
                           <div className="text-4xl font-extrabold mb-1">NIS Final {selectedNis}</div>
                           <div className="my-6 space-y-3">
                              {bolsaDates[selectedNis].map((date, idx) => (
                                 <div key={idx} className="flex justify-between items-center border-b border-white/20 pb-2 last:border-0">
                                    <span className="opacity-90">{idx === 0 ? 'Janeiro' : idx === 1 ? 'Fevereiro' : idx === 2 ? 'Março' : 'Abril'}</span>
                                    <span className="font-bold text-xl">{date}</span>
                                 </div>
                              ))}
                           </div>
                           <div className="bg-white/10 rounded-lg p-3 text-xs text-blue-50 flex gap-2">
                              <AlertCircle size={14} className="shrink-0 mt-0.5" />
                              O dinheiro cai na conta Caixa Tem nas primeiras horas do dia indicado.
                           </div>
                        </div>

                        <div className="space-y-4">
                           <h3 className="font-bold text-brand-dark flex items-center gap-2">
                              <Wallet size={20} className="text-brand-blue" /> Informações Importantes
                           </h3>
                           <ul className="space-y-3 text-sm text-gray-600">
                              <li className="flex gap-3">
                                 <ChevronRight size={16} className="text-brand-blue shrink-0" />
                                 <span>O <strong>Vale Gás</strong> é pago bimestralmente nas mesmas datas (Fev, Abr, Jun...).</span>
                              </li>
                              <li className="flex gap-3">
                                 <ChevronRight size={16} className="text-brand-blue shrink-0" />
                                 <span>Municípios em estado de calamidade têm o pagamento antecipado para o primeiro dia do calendário, independente do NIS.</span>
                              </li>
                              <li className="flex gap-3">
                                 <ChevronRight size={16} className="text-brand-blue shrink-0" />
                                 <span>O saque pode ser feito em até 120 dias.</span>
                              </li>
                           </ul>
                           <button className="w-full mt-4 border border-gray-200 text-brand-medium font-bold py-3 rounded-xl hover:bg-gray-50 flex items-center justify-center gap-2">
                              <Download size={18} /> Baixar Calendário Completo (PDF)
                           </button>
                        </div>
                     </div>
                  </div>
               )}

               {/* TAB: INSS / BPC */}
               {activeTab === 'inss' && (
                  <div className="animate-fade-in">
                     <div className="mb-8 border-b border-gray-100 pb-6">
                        <h2 className="text-2xl font-bold text-purple-900 mb-1">INSS e BPC/LOAS 2026</h2>
                        <p className="text-sm text-gray-500">Para quem recebe até 1 salário mínimo (R$ 1.509,00 estimado).</p>
                        <div className="mt-4 bg-purple-50 text-purple-800 p-3 rounded-lg text-sm inline-block">
                           <strong>Regra:</strong> Utilize o número final do benefício (NB) <strong>antes</strong> do traço.
                           <br /><span className="text-xs opacity-75">Exemplo: 123.456.78<strong>9</strong>-0 (Seu final é 9).</span>
                        </div>
                     </div>

                     <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                           <thead>
                              <tr className="bg-purple-100 text-purple-900">
                                 <th className="p-4 rounded-tl-xl">Final NB</th>
                                 <th className="p-4">Janeiro</th>
                                 <th className="p-4">Fevereiro</th>
                                 <th className="p-4 rounded-tr-xl">Março</th>
                              </tr>
                           </thead>
                           <tbody className="text-sm text-gray-700">
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                                 <tr key={num} className="border-b border-gray-50 hover:bg-purple-50/30">
                                    <td className="p-4 font-bold text-purple-700 text-center bg-purple-50/50">{num}</td>
                                    <td className="p-4">{inssDates[num.toString()][0]}</td>
                                    <td className="p-4">{inssDates[num.toString()][1]}</td>
                                    <td className="p-4">{inssDates[num.toString()][2]}</td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
               )}

               {/* TAB: PÉ-DE-MEIA */}
               {activeTab === 'pemeia' && (
                  <div className="animate-fade-in">
                     <div className="mb-8 border-b border-gray-100 pb-6">
                        <h2 className="text-2xl font-bold text-green-800 mb-1">Pé-de-Meia (Ensino Médio)</h2>
                        <p className="text-sm text-gray-500">Incentivo Frequência: Pago mensalmente conforme o mês de nascimento do aluno.</p>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {peMeiaDates.map((item, idx) => (
                           <div key={idx} className="bg-white border border-green-100 shadow-sm p-4 rounded-xl flex items-center justify-between group hover:border-green-300 transition-colors">
                              <div>
                                 <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Nascidos em</p>
                                 <p className="font-bold text-green-900">{item.month}</p>
                              </div>
                              <div className="bg-green-50 text-green-700 font-bold px-3 py-1 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors">
                                 {item.date}
                              </div>
                           </div>
                        ))}
                     </div>

                     <div className="mt-8 bg-gray-50 p-4 rounded-xl text-sm text-gray-600 flex gap-3">
                        <AlertCircle className="text-green-600 shrink-0" />
                        <div>
                           <p className="font-bold text-gray-800">Atenção:</p>
                           <p>O incentivo de R$ 200,00 só é pago se o aluno tiver frequentado pelo menos 80% das aulas no mês anterior. O valor cai na conta Caixa Tem aberta automaticamente no nome do estudante.</p>
                        </div>
                     </div>
                  </div>
               )}

            </div>

            <div className="mt-8">
               <AdSlot id="Content2" label="Publicidade Rodapé" />
            </div>

         </div>
      </div>
   );
};