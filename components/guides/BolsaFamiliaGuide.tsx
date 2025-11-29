import React, { useEffect } from 'react';
import { AdSlot } from '../AdSlot';
import { Wallet, CheckCircle2, AlertTriangle, Calendar, Baby, HeartPulse, HelpCircle, ArrowRight } from 'lucide-react';

const BolsaFamiliaGuide: React.FC = () => {
  // SEO Optimization
  useEffect(() => {
    document.title = "Bolsa Família 2025: Calendário, Valor e Consulta | Guia Oficial Atualizado";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Consulte o Calendário Bolsa Família 2025 e novos valores. Veja quem tem direito aos adicionais de R$ 150 por criança e como consultar no app oficial.";
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    } else {
      const m = document.createElement('meta');
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }

    const metaKeys = document.querySelector('meta[name="keywords"]');
    const keys = "bolsa família 2025, calendário bolsa família, valor bolsa família, consulta bolsa família, auxílio brasil 2025, cadastro único, pagamentos bolsa família";
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
    <div className="bg-brand-light min-h-screen py-10">
      
      {/* JSON-LD Schema for FAQ (SEO Gold) */}
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Qual o valor do Bolsa Família em 2025?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O valor base é de R$ 600,00 por família. Contudo, existem adicionais de R$ 150,00 por criança de até 6 anos e R$ 50,00 para gestantes e jovens entre 7 e 18 anos. A média nacional gira em torno de R$ 680,00."
            }
          }, {
            "@type": "Question",
            "name": "Quem tem direito ao Bolsa Família?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Têm direito as famílias inscritas no Cadastro Único com renda mensal por pessoa (per capita) de até R$ 218,00."
            }
          }, {
            "@type": "Question",
            "name": "Como se cadastrar no Bolsa Família?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O cadastro não é online. O responsável familiar deve comparecer ao CRAS ou posto do CadÚnico do município levando CPF e documentos de todos os moradores da residência."
            }
          }]
        }
      `}
      </script>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* Header SEO Optimized */}
        <div className="mb-8 border-b border-gray-200 pb-8">
          <span className="inline-block py-1 px-3 rounded-md bg-blue-100 text-brand-blue font-bold tracking-wider uppercase text-xs mb-3">
             Guia Atualizado 2025
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4 leading-tight">
            Bolsa Família 2025: Guia Completo de Valores, Regras e Calendário
          </h1>
          <p className="text-lg md:text-xl text-brand-medium max-w-3xl leading-relaxed">
            Descubra quem tem direito ao novo Bolsa Família, consulte o valor atualizado do benefício e entenda os adicionais de R$ 150 e R$ 50 aprovados pelo Governo Federal.
          </p>
        </div>

        <AdSlot id="Content4" label="Publicidade Guia Topo" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          
          {/* Main Article Content */}
          <article className="lg:col-span-8 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 prose prose-slate max-w-none prose-lg prose-headings:font-bold prose-headings:text-brand-dark prose-a:text-brand-blue">
            
            {/* Highlight Box */}
            <div className="not-prose flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl mb-10 border border-blue-100 shadow-sm">
               <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <Wallet size={32} />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-brand-blue mb-1">Qual o valor do benefício hoje?</h3>
                  <p className="text-brand-medium text-base leading-snug">
                     O piso nacional é de <strong>R$ 600,00</strong>. Famílias com crianças pequenas podem receber até <strong>R$ 900,00</strong> ou mais, dependendo da composição familiar.
                  </p>
               </div>
            </div>

            <h2>Como funciona o Bolsa Família em 2025?</h2>
            <p>
              O <strong>Programa Bolsa Família</strong> é a principal iniciativa de transferência de renda do Brasil, relançada pela Lei nº 14.601. O objetivo é combater a fome e a pobreza, integrando políticas públicas de saúde, educação e assistência social.
            </p>
            <p>
              Diferente do antigo Auxílio Brasil, o novo modelo leva em conta o tamanho da família. Famílias com mais pessoas recebem mais.
            </p>

            <h3>Tabela de Valores e Adicionais</h3>
            <p>O benefício é composto por uma cesta de pagamentos. Confira a tabela atualizada:</p>
            
            <ul className="list-none pl-0 space-y-4 not-prose mb-8">
               <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="bg-green-100 p-2 rounded-lg text-green-700 mt-1"><CheckCircle2 size={20} /></div>
                  <div>
                    <strong className="block text-brand-dark text-lg">Benefício de Renda de Cidadania (BRC)</strong>
                    <span className="text-brand-medium">Valor de R$ 142,00 por pessoa da família.</span>
                  </div>
               </li>
               <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="bg-blue-100 p-2 rounded-lg text-brand-blue mt-1"><Wallet size={20} /></div>
                  <div>
                    <strong className="block text-brand-dark text-lg">Benefício Complementar (BCO)</strong>
                    <span className="text-brand-medium">Garante que nenhuma família receba menos que R$ 600,00, independente do número de pessoas.</span>
                  </div>
               </li>
               <li className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl border border-pink-100">
                  <div className="bg-pink-100 p-2 rounded-lg text-pink-600 mt-1"><Baby size={20} /></div>
                  <div>
                    <strong className="block text-brand-dark text-lg">Benefício Primeira Infância (BPI)</strong>
                    <span className="text-brand-medium">Adicional de <strong>R$ 150,00</strong> por criança de 0 a 6 anos completos.</span>
                  </div>
               </li>
               <li className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <div className="bg-orange-100 p-2 rounded-lg text-orange-600 mt-1"><HeartPulse size={20} /></div>
                  <div>
                    <strong className="block text-brand-dark text-lg">Benefício Variável Familiar (BVF)</strong>
                    <span className="text-brand-medium">Adicional de <strong>R$ 50,00</strong> para gestantes e crianças/adolescentes de 7 a 18 anos.</span>
                  </div>
               </li>
            </ul>

            <div className="my-8">
               <AdSlot id="Content5" label="Publicidade Contextual" />
            </div>

            <h2>Regras de Elegibilidade: Quem tem direito?</h2>
            <p>
              Para ser aceito no programa, a família precisa cumprir rigorosamente o critério de renda. A <strong>renda mensal per capita</strong> (soma de tudo que a família ganha dividido pelo número de moradores) deve ser de, no máximo, <strong>R$ 218,00</strong>.
            </p>
            <p>
               Além disso, é obrigatório estar inscrito no <strong>Cadastro Único (CadÚnico)</strong> e manter os dados atualizados a cada 2 anos.
            </p>

            <h3>Condicionalidades (Deveres da Família)</h3>
            <p>Para continuar recebendo o dinheiro todo mês, não basta ter baixa renda. É preciso:</p>
            <ul>
               <li>Realizar o acompanhamento pré-natal (gestantes).</li>
               <li>Seguir o calendário nacional de vacinação (crianças).</li>
               <li>Acompanhar o estado nutricional (peso e altura) de crianças menores de 7 anos.</li>
               <li>Garantir frequência escolar mínima de 60% (crianças de 4 a 5 anos) e 75% (beneficiários de 6 a 18 anos).</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl my-8 not-prose">
               <div className="flex items-center gap-2 text-yellow-800 font-bold text-lg mb-2">
                  <AlertTriangle size={24} /> Atenção à Regra de Proteção
               </div>
               <p className="text-yellow-900 m-0">
                  Se algum membro da família conseguir um emprego e a renda subir (até meio salário mínimo por pessoa), o Bolsa Família <strong>não é cortado imediatamente</strong>. A família entra na Regra de Proteção e continua recebendo 50% do valor do benefício por até 2 anos.
               </p>
            </div>

            <h2>Perguntas Frequentes (FAQ)</h2>
            <div className="not-prose space-y-4 mt-6">
               <details className="group bg-gray-50 rounded-xl border border-gray-200 p-4 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-bold">
                     <span className="flex items-center gap-2"><HelpCircle size={18} className="text-brand-blue"/> Como consultar se fui aprovado?</span>
                     <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                     </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-gray-700">
                     Você receberá uma carta no endereço cadastrado. Também é possível consultar pelo aplicativo oficial Bolsa Família, pelo app Caixa Tem ou ligando para o telefone 121 do Ministério da Cidadania.
                  </p>
               </details>

               <details className="group bg-gray-50 rounded-xl border border-gray-200 p-4 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-bold">
                     <span className="flex items-center gap-2"><HelpCircle size={18} className="text-brand-blue"/> Qual a data do pagamento?</span>
                     <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                     </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-gray-700">
                     O pagamento ocorre nos últimos 10 dias úteis de cada mês, seguindo a ordem do dígito final do NIS (Número de Identificação Social).
                  </p>
               </details>
            </div>

          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
               <h3 className="font-bold text-brand-dark mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                  <Calendar size={20} className="text-brand-blue" />
                  Resumo Rápido
               </h3>
               <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center">
                     <span className="text-gray-500 font-medium">Renda Limite</span>
                     <span className="font-bold bg-gray-100 px-2 py-1 rounded">R$ 218,00 / pessoa</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-gray-500 font-medium">Valor Mínimo</span>
                     <span className="font-bold bg-blue-50 text-brand-blue px-2 py-1 rounded">R$ 600,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-gray-500 font-medium">Extra Criança</span>
                     <span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+ R$ 150,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-gray-500 font-medium">Extra Gestante</span>
                     <span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+ R$ 50,00</span>
                  </div>
                  
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <button className="w-full bg-brand-blue text-white py-3.5 rounded-xl font-bold hover:bg-brand-hover transition-all shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2">
                       Ver Calendário Completo <ArrowRight size={16}/>
                    </button>
                    <p className="text-xs text-center text-gray-400 mt-3">Baseado nos dados oficiais do MDS.</p>
                  </div>
               </div>
            </div>
             <div className="sticky top-[400px]">
                <AdSlot id="Content1" label="Oferta Especial" />
             </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default BolsaFamiliaGuide;