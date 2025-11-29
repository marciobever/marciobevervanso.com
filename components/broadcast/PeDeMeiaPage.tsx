import React, { useEffect } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { GraduationCap, DollarSign, CalendarClock, FileText } from 'lucide-react';
import { Quiz } from '../../types';

interface Props {
  onNavigate: (view: any) => void;
  onSimulate: (id: string) => void;
  quizzes?: Quiz[];
}

export const PeDeMeiaPage: React.FC<Props> = ({ onNavigate, onSimulate, quizzes }) => {
  // SEO Optimization
  useEffect(() => {
    document.title = "Pé-de-Meia 2025: Consulta de Pagamento e Cadastro | R$ 9.200 Estudantes";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Tudo sobre o programa Pé-de-Meia para estudantes do ensino médio. Consulte o calendário de pagamentos, valor das parcelas e como desbloquear no Caixa Tem.";
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    } else {
      const m = document.createElement('meta');
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }

    const metaKeys = document.querySelector('meta[name="keywords"]');
    const keys = "pé de meia 2025, auxilio estudante, poupança ensino médio, consulta pé de meia, cadastro pé de meia, caixa tem, incentivo financeiro educacional";
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
      title="Benefício Pé-de-Meia 2025: Guia Completo e Valores"
      subtitle="Entenda como funciona a poupança do ensino médio que pode pagar até R$ 9.200,00 por aluno para incentivar a conclusão dos estudos."
      quizId="7" // ID for PeDeMeia Quiz
      quizzes={quizzes}
      onNavigate={onNavigate}
      quizTriggerLabel="Sou estudante, tenho direito?"
    >
      <h2>O que é o Pé-de-Meia?</h2>
      <p>
        O Pé-de-Meia é um programa de incentivo financeiro-educacional, na modalidade de poupança, destinado a promover a permanência e a conclusão escolar de estudantes matriculados no ensino médio público. O objetivo é democratizar o acesso e reduzir a desigualdade social entre os jovens.
      </p>

      <h3>Valores dos Pagamentos</h3>
      <p>O programa oferece quatro tipos de incentivos que, somados, podem chegar a R$ 9.200,00 ao final do Ensino Médio:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><DollarSign size={48} className="text-green-600"/></div>
            <h4 className="text-green-700 font-bold text-lg mb-2">Incentivo Matrícula</h4>
            <p className="text-3xl font-extrabold text-slate-900 mb-1">R$ 200,00</p>
            <p className="text-sm text-gray-500">Pago uma vez ao ano, no ato da matrícula.</p>
         </div>
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><CalendarClock size={48} className="text-green-600"/></div>
            <h4 className="text-green-700 font-bold text-lg mb-2">Incentivo Frequência</h4>
            <p className="text-3xl font-extrabold text-slate-900 mb-1">R$ 1.800,00</p>
            <p className="text-sm text-gray-500">Pago em 9 parcelas de R$ 200,00 por ano (exige 80% de presença).</p>
         </div>
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><GraduationCap size={48} className="text-green-600"/></div>
            <h4 className="text-green-700 font-bold text-lg mb-2">Incentivo Conclusão</h4>
            <p className="text-3xl font-extrabold text-slate-900 mb-1">R$ 1.000,00</p>
            <p className="text-sm text-gray-500">Depositado ao final de cada ano letivo aprovado (saque apenas ao formar).</p>
         </div>
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><FileText size={48} className="text-green-600"/></div>
            <h4 className="text-green-700 font-bold text-lg mb-2">Incentivo ENEM</h4>
            <p className="text-3xl font-extrabold text-slate-900 mb-1">R$ 200,00</p>
            <p className="text-sm text-gray-500">Pago uma única vez ao estudante do 3º ano que comparecer aos dois dias de prova.</p>
         </div>
      </div>

      <h3>Quem tem direito?</h3>
      <ul>
         <li>Estudantes de 14 a 24 anos.</li>
         <li>Matriculados no Ensino Médio da rede pública.</li>
         <li>Pertencentes a famílias inscritas no <strong>CadÚnico</strong>.</li>
         <li>Prioridade para beneficiários do Bolsa Família.</li>
      </ul>

      <p>
        <strong>Não é necessário se inscrever.</strong> O Ministério da Educação (MEC) cruza os dados da matrícula (enviados pelas escolas) com o CadÚnico. Se você for elegível, uma conta digital será aberta automaticamente no seu nome na CAIXA (acessível pelo App Caixa Tem).
      </p>
    </BroadcastLayout>
  );
};