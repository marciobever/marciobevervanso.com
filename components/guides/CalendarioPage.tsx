import React, { useEffect } from 'react';
import { AdSlot } from '../AdSlot';
import { CalendarClock, Download } from 'lucide-react';

const CalendarioPage: React.FC = () => {
  // SEO Optimization
  useEffect(() => {
    document.title = "Calendário Bolsa Família 2025: Datas de Pagamento pelo NIS";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Consulte o calendário oficial do Bolsa Família 2025. Veja as datas de pagamento de Janeiro a Dezembro de acordo com o final do seu NIS.";
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    } else {
      const m = document.createElement('meta');
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }

    const metaKeys = document.querySelector('meta[name="keywords"]');
    const keys = "calendário bolsa família 2025, data pagamento bolsa família, tabela bolsa família 2025, nis 1, nis 0, consultar beneficio";
    if (metaKeys) {
      metaKeys.setAttribute('content', keys);
    } else {
      const m = document.createElement('meta');
      m.name = "keywords";
      m.content = keys;
      document.head.appendChild(m);
    }
  }, []);

  // Mock data for NIS dates
  const nisData = [
    { nis: 1, dates: '18/Jan, 16/Fev, 15/Mar' },
    { nis: 2, dates: '19/Jan, 17/Fev, 18/Mar' },
    { nis: 3, dates: '20/Jan, 18/Fev, 19/Mar' },
    { nis: 4, dates: '23/Jan, 19/Fev, 20/Mar' },
    { nis: 5, dates: '24/Jan, 20/Fev, 21/Mar' },
    { nis: 6, dates: '25/Jan, 23/Fev, 22/Mar' },
    { nis: 7, dates: '26/Jan, 24/Fev, 25/Mar' },
    { nis: 8, dates: '27/Jan, 25/Fev, 26/Mar' },
    { nis: 9, dates: '30/Jan, 26/Fev, 27/Mar' },
    { nis: 0, dates: '31/Jan, 27/Fev, 28/Mar' },
  ];

  return (
    <div className="bg-brand-light min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4 flex items-center justify-center gap-3">
             <CalendarClock className="text-brand-blue" size={40} />
             Calendário Bolsa Família 2025
          </h1>
          <p className="text-lg text-brand-medium">Consulte a data do seu pagamento pelo final do NIS.</p>
        </div>

        <AdSlot id="Content4" label="Publicidade Calendário" />

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mt-8">
           <div className="bg-brand-blue p-6 text-white text-center">
              <p className="text-sm opacity-90 uppercase tracking-widest font-bold">Datas Oficiais</p>
              <p className="text-xs mt-2 opacity-75">O pagamento é liberado nas primeiras horas do dia no Caixa Tem.</p>
           </div>
           
           <div className="p-0 md:p-8">
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-gray-50 border-b border-gray-200 text-brand-dark">
                          <th className="p-4 font-extrabold text-center w-24">Final NIS</th>
                          <th className="p-4 font-bold text-gray-600">Datas de Pagamento (1º Trimestre)</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                       {nisData.map((row) => (
                          <tr key={row.nis} className="hover:bg-blue-50/50 transition-colors">
                             <td className="p-4 text-center">
                                <span className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mx-auto shadow-sm">
                                   {row.nis}
                                </span>
                             </td>
                             <td className="p-4 text-brand-medium font-medium">
                                {row.dates}
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>

           <div className="bg-gray-50 p-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-400">Fonte: Ministério do Desenvolvimento Social</p>
              <button className="flex items-center gap-2 text-brand-blue font-bold hover:underline">
                 <Download size={18} /> Baixar Calendário em PDF
              </button>
           </div>
        </div>

        <div className="mt-8 text-center">
           <AdSlot id="Content5" label="Publicidade Rodapé" />
        </div>

      </div>
    </div>
  );
};

export default CalendarioPage;