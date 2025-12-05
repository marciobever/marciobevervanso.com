
import React, { useEffect } from 'react';
import { AdSlot } from '../AdSlot';
import { AffiliateBanner } from '../AffiliateBanner';
import { Wallet, CheckCircle2, AlertTriangle, Calendar, Baby, HeartPulse, HelpCircle, ArrowRight, List } from 'lucide-react';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { ViewState } from '../../types';
import { WhatsAppInvite } from '../ui/WhatsAppInvite';

const BolsaFamiliaGuide: React.FC = () => {
  const handleNavigate = (view: ViewState) => {
     window.scrollTo(0,0);
  };

  useEffect(() => {
    document.title = "Bolsa Família 2025: Calendário, Valor e Consulta | Guia Oficial Atualizado";
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Consulte o Calendário Bolsa Família 2025 e novos valores. Veja quem tem direito aos adicionais de R$ 150 por criança e como consultar no app oficial.";
    if (metaDesc) { metaDesc.setAttribute('content', desc); }
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Qual o valor do Bolsa Família em 2025?",
      "acceptedAnswer": { "@type": "Answer", "text": "O valor base é de R$ 600,00 por família. Contudo, existem adicionais de R$ 150,00 por criança de até 6 anos e R$ 50,00 para gestantes e jovens entre 7 e 18 anos." }
    }, {
      "@type": "Question",
      "name": "Quem tem direito ao Bolsa Família?",
      "acceptedAnswer": { "@type": "Answer", "text": "Têm direito as famílias inscritas no Cadastro Único com renda mensal por pessoa (per capita) de até R$ 218,00." }
    }]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bolsa Família 2025: Guia Completo de Valores e Regras",
    "image": ["https://marciobevervanso.com/og-image.jpg"],
    "datePublished": "2024-11-28T08:00:00+08:00",
    "dateModified": new Date().toISOString(),
    "author": [{ "@type": "Person", "name": "Marcio Bevervanso", "url": "https://marciobevervanso.com/sobre" }]
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-brand-light min-h-screen py-8">
      <SchemaMarkup data={[faqSchema, articleSchema]} />

      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        <Breadcrumbs 
          items={[
            { label: 'Benefícios', href: 'all-benefits' },
            { label: 'Guias Informativos', href: 'all-benefits' },
            { label: 'Bolsa Família 2025' }
          ]}
          onNavigate={(view) => console.log(view)} 
        />

        <div className="mb-8 border-b border-gray-200 pb-8">
          <span className="inline-block py-1 px-3 rounded-md bg-blue-100 text-brand-blue font-bold tracking-wider uppercase text-xs mb-3">
             Atualizado: {new Date().toLocaleDateString('pt-BR')}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4 leading-tight">
            Bolsa Família 2025: Guia Completo de Valores, Regras e Calendário
          </h1>
          <p className="text-lg md:text-xl text-brand-medium max-w-3xl leading-relaxed">
            Descubra quem tem direito ao novo Bolsa Família, consulte o valor atualizado do benefício e entenda os adicionais de R$ 150 e R$ 50 aprovados pelo Governo Federal.
          </p>
        </div>

        {/* TOPO: ADSLOT DO GOOGLE (MANTIDO) */}
        <AdSlot id="Content4" label="Publicidade Oficial" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          
          <article className="lg:col-span-8 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 prose prose-slate max-w-none prose-lg prose-headings:font-bold prose-headings:text-brand-dark prose-a:text-brand-blue">
            
            <div className="not-prose bg-slate-50 p-5 rounded-xl border border-slate-200 mb-8">
               <p className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                  <List size={16} /> Índice do Conteúdo
               </p>
               <nav className="space-y-2">
                  <button onClick={() => scrollToSection('valores')} className="block text-brand-blue hover:underline text-sm font-medium text-left w-full">1. Tabela de Valores e Adicionais</button>
                  <button onClick={() => scrollToSection('regras')} className="block text-brand-blue hover:underline text-sm font-medium text-left w-full">2. Quem tem direito (Regras)</button>
                  <button onClick={() => scrollToSection('regra-protecao')} className="block text-brand-blue hover:underline text-sm font-medium text-left w-full">3. Regra de Proteção (Trabalho)</button>
                  <button onClick={() => scrollToSection('faq')} className="block text-brand-blue hover:underline text-sm font-medium text-left w-full">4. Perguntas Frequentes</button>
               </nav>
            </div>

            <h2>Como funciona o Bolsa Família em 2025?</h2>
            <p>
              O <strong>Programa Bolsa Família</strong> é a principal iniciativa de transferência de renda do Brasil, relançada pela Lei nº 14.601. O objetivo é combater a fome e a pobreza, integrando políticas públicas de saúde, educação e assistência social.
            </p>

            <h3 id="valores">Tabela de Valores e Adicionais</h3>
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
                    <span className="text-brand-medium">Garante que nenhuma família receba menos que R$ 600,00.</span>
                  </div>
               </li>
            </ul>

            {/* BANNER AFILIADO NO MEIO DO CONTEÚDO (Credspot - Contexto FGTS/Renda Extra) */}
            <div className="my-8 not-prose">
               <AffiliateBanner type="credspot" />
            </div>

            <h2 id="regras">Regras de Elegibilidade</h2>
            <p>
              Para ser aceito no programa, a família precisa cumprir rigorosamente o critério de renda. A <strong>renda mensal per capita</strong> (soma de tudo que a família ganha dividido pelo número de moradores) deve ser de, no máximo, <strong>R$ 218,00</strong>.
            </p>

            <div id="regra-protecao" className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl my-8 not-prose">
               <div className="flex items-center gap-2 text-yellow-800 font-bold text-lg mb-2">
                  <AlertTriangle size={24} /> Atenção à Regra de Proteção
               </div>
               <p className="text-yellow-900 m-0">
                  Se algum membro da família conseguir um emprego e a renda subir, o Bolsa Família <strong>não é cortado imediatamente</strong>. A família entra na Regra de Proteção e continua recebendo 50% do valor por até 2 anos.
               </p>
            </div>

            <h2 id="faq">Perguntas Frequentes (FAQ)</h2>
            <div className="not-prose space-y-4 mt-6">
               <details className="group bg-gray-50 rounded-xl border border-gray-200 p-4">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-bold">
                     <span className="flex items-center gap-2"><HelpCircle size={18} className="text-brand-blue"/> Como consultar se fui aprovado?</span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-gray-700">
                     Você receberá uma carta no endereço cadastrado. Também é possível consultar pelo aplicativo oficial Bolsa Família ou app Caixa Tem.
                  </p>
               </details>
            </div>

          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
                <WhatsAppInvite />
                
                {/* BANNER AFILIADO NA LATERAL (SuperSim) */}
                <AffiliateBanner type="supersim" className="shadow-lg" />
             </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default BolsaFamiliaGuide;
