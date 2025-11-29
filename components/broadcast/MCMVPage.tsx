import React, { useEffect } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { Home, Percent, ShieldCheck } from 'lucide-react';
import { Quiz } from '../../types';

interface Props {
  onNavigate: (view: any) => void;
  onSimulate: (id: string) => void;
  quizzes?: Quiz[];
}

export const MCMVPage: React.FC<Props> = ({ onNavigate, onSimulate, quizzes }) => {
  // SEO Optimization
  useEffect(() => {
    document.title = "Minha Casa Minha Vida 2025: Simulador de Subsídio | Guia Oficial";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Descubra como conseguir até 95% de subsídio no Minha Casa Minha Vida 2025. Simulador de faixas, regras para autônomos e isenção para Bolsa Família.";
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    } else {
      const m = document.createElement('meta');
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }

    const metaKeys = document.querySelector('meta[name="keywords"]');
    const keys = "minha casa minha vida 2025, simulador habitacional, subsídio caixa, casa própria, faixa 1, minha casa minha vida cadastro, financiamento caixa";
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
      title="Minha Casa Minha Vida 2025: Comparativo de Faixas e Subsídios"
      subtitle="Guia definitivo sobre as novas regras, taxas de juros reduzidas e como conseguir subsídio de até 95% no valor do imóvel."
      quizId="5" // ID for MCMV Quiz
      quizzes={quizzes}
      onNavigate={onNavigate}
      quizTriggerLabel="Simular Financiamento"
      relatedArticle={{
        title: "Segredo: Como conseguir financiamento 100% sem entrada",
        onClick: () => onNavigate('loans') // Redirecionando para área financeira/empréstimos como exemplo
      }}
    >
      <h2>O que mudou em 2025?</h2>
      <p>
        O programa habitacional passou por uma reformulação completa para atender melhor as famílias de baixa renda. A grande novidade é o retorno da <strong>Faixa 1</strong>, focada em quem ganha até R$ 2.640,00, oferecendo as menores taxas da história.
      </p>

      <h3>Tabela Oficial de Faixas de Renda</h3>
      <div className="overflow-x-auto not-prose my-8">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-brand-dark text-white">
            <tr>
              <th className="py-4 px-6 text-left font-bold">Faixa</th>
              <th className="py-4 px-6 text-left font-bold">Renda Familiar Bruta</th>
              <th className="py-4 px-6 text-left font-bold">Subsídio Máximo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm md:text-base">
            <tr className="bg-blue-50/50">
              <td className="py-4 px-6 font-bold text-brand-blue">Faixa 1</td>
              <td className="py-4 px-6">Até R$ 2.640,00</td>
              <td className="py-4 px-6 font-bold text-green-600">Até 95% (Imóvel quase gratuito)</td>
            </tr>
            <tr>
              <td className="py-4 px-6 font-bold text-brand-blue">Faixa 2</td>
              <td className="py-4 px-6">R$ 2.640,01 a R$ 4.400,00</td>
              <td className="py-4 px-6 text-gray-600">Até R$ 55.000,00 (Entrada)</td>
            </tr>
            <tr className="bg-blue-50/50">
              <td className="py-4 px-6 font-bold text-brand-blue">Faixa 3</td>
              <td className="py-4 px-6">R$ 4.400,01 a R$ 8.000,00</td>
              <td className="py-4 px-6 text-gray-600">Taxas de juros reduzidas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Beneficiários do Bolsa Família e BPC</h3>
      <p>
        Uma das maiores vitórias de 2025: beneficiários do Bolsa Família e do BPC (Benefício de Prestação Continuada) que contratarem o financiamento na Faixa 1 estão <strong>isentos das parcelas</strong>. O imóvel é quitado pelo governo após 5 anos, desde que cumpridas as regras contratuais.
      </p>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl my-6 not-prose">
         <h4 className="flex items-center gap-2 text-green-800 font-bold text-lg mb-2">
            <ShieldCheck /> Documentação Necessária
         </h4>
         <ul className="space-y-2 text-green-700">
            <li>RG e CPF (do casal, se houver).</li>
            <li>Comprovante de Renda (Holerite ou Extrato Bancário).</li>
            <li>Certidão de Nascimento ou Casamento.</li>
            <li>Comprovante de Residência atualizado.</li>
            <li>Declaração de Imposto de Renda (se declarar).</li>
         </ul>
      </div>

      <h3>Como realizar o cadastro?</h3>
      <ol>
        <li><strong>Para Faixa 1:</strong> O cadastro deve ser feito na Prefeitura da sua cidade (Setor de Habitação) ou em Entidades Organizadoras.</li>
        <li><strong>Para Faixas 2 e 3:</strong> A contratação pode ser feita diretamente através de construtoras parceiras ou correspondentes Caixa Aqui.</li>
      </ol>

      <p>
        Não perca a chance de sair do aluguel. O subsídio do governo pode cobrir quase todo o valor da entrada, tornando a parcela menor que um aluguel.
      </p>
    </BroadcastLayout>
  );
};