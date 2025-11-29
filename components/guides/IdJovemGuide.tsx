import React, { useEffect } from 'react';
import { BroadcastLayout } from '../broadcast/BroadcastLayout';
import { Bus, Ticket, Music, CheckCircle2 } from 'lucide-react';
import { ViewState } from '../../types';

interface Props {
  onNavigate: (view: ViewState) => void;
}

export const IdJovemGuide: React.FC<Props> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = "ID Jovem 2.0: Viagens Gratuitas e Meia-Entrada | Cadastro 2025";
  }, []);

  return (
    <BroadcastLayout
      title="ID Jovem: Viaje de graça para outros estados e pague meia no cinema"
      subtitle="Documento garante transporte interestadual gratuito e meia-entrada em eventos culturais para jovens de baixa renda, mesmo que não sejam estudantes."
      onNavigate={onNavigate}
      quizTriggerLabel="Emitir Carteira Digital"
      onTakeQuiz={() => window.open('https://idjovem.juventude.gov.br/', '_blank')}
    >
      <h2>O que é a Identidade Jovem?</h2>
      <p>
        A ID Jovem é um documento virtual, totalmente gratuito, que possibilita aos jovens de baixa renda o acesso aos benefícios de meia-entrada em eventos artísticos-culturais e esportivos, além de vagas gratuitas ou com desconto no sistema de transporte coletivo interestadual.
      </p>

      <h3>Principais Benefícios</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-3">
               <Bus size={24} />
            </div>
            <h4 className="font-bold text-slate-900 text-lg">Transporte Interestadual</h4>
            <p className="text-sm text-slate-600 mt-2">
               2 vagas gratuitas e 2 vagas com 50% de desconto em cada viagem de ônibus, trem ou barco entre estados.
            </p>
         </div>
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-300 transition-colors">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-3">
               <Ticket size={24} />
            </div>
            <h4 className="font-bold text-slate-900 text-lg">Cultura e Lazer</h4>
            <p className="text-sm text-slate-600 mt-2">
               Meia-entrada (50% de desconto) em cinemas, teatros, shows, jogos de futebol e outros eventos.
            </p>
         </div>
      </div>

      <h3>Quem pode emitir?</h3>
      <ul className="space-y-3">
         <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500"/> Ter entre 15 e 29 anos;</li>
         <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500"/> Pertencer a família com renda mensal de até 2 salários mínimos;</li>
         <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500"/> Estar inscrito no Cadastro Único (CadÚnico) com dados atualizados há pelo menos 24 meses.</li>
      </ul>

      <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 text-sm text-yellow-800 my-6">
         <strong>Importante:</strong> Não é necessário ser estudante para ter a ID Jovem. Basta cumprir os requisitos de idade e renda.
      </div>

    </BroadcastLayout>
  );
};