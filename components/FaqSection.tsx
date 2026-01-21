import React from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ_DATA = [
  {
    q: "Como saber se tenho direito ao Bolsa Família?",
    a: "Para ter direito, a regra principal é que a renda mensal por pessoa da família seja de até R$ 218,00. Além disso, a família precisa estar inscrita no Cadastro Único (CadÚnico) e manter os dados atualizados."
  },
  {
    q: "Preciso estar no CadÚnico para receber benefícios?",
    a: "Sim. O Cadastro Único é a base de dados obrigatória para participar da maioria dos programas sociais do Governo Federal, incluindo Bolsa Família, Tarifa Social e BPC."
  },
  {
    q: "Posso receber mais de um benefício ao mesmo tempo?",
    a: "Sim, é possível acumular benefícios desde que você cumpra os critérios de renda de cada um. Por exemplo, uma família pode receber Bolsa Família e Tarifa Social de Energia simultaneamente."
  },
  {
    q: "Como consultar benefício pelo CPF?",
    a: "Você pode consultar a situação do seu benefício através do aplicativo oficial 'Bolsa Família', no app 'Cadastro Único' ou no portal Gov.br, sempre utilizando seu CPF e senha."
  },
  {
    q: "O que fazer se meu benefício for bloqueado?",
    a: "Primeiro, verifique a mensagem no extrato ou aplicativo. Geralmente, bloqueios ocorrem por falta de atualização cadastral ou frequência escolar baixa. Procure o CRAS para regularizar."
  }
];

const FaqSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
      {/* FAQ Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQ_DATA.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.a
            }
          }))
        })}
      </script>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Dúvidas Frequentes</h2>
          <p className="text-brand-medium">Respostas diretas para as perguntas mais comuns sobre seus direitos.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <details key={idx} className="group bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden open:ring-2 open:ring-brand-blue/10 transition-all">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-bold text-brand-dark text-lg">{item.q}</span>
                <span className="bg-brand-light p-2 rounded-full text-brand-blue group-open:bg-brand-blue group-open:text-white transition-colors">
                  <Plus className="block group-open:hidden" size={20} />
                  <Minus className="hidden group-open:block" size={20} />
                </span>
              </summary>
              <div className="px-6 pb-8 pt-0 text-brand-medium leading-relaxed border-t border-transparent group-open:border-gray-50 group-open:pt-4 animate-fade-in">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;