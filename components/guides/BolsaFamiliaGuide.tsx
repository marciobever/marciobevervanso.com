
import React, { useEffect } from 'react';
import { AdSlot } from '../AdSlot';
import { Wallet, CheckCircle2, AlertTriangle, Calendar, Baby, HeartPulse, HelpCircle, ArrowRight, List } from 'lucide-react';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { ViewState } from '../../types';
import { WhatsAppInvite } from '../ui/WhatsAppInvite';

// Mock navigation prop injection (in real implementation, pass via props)
const BolsaFamiliaGuide: React.FC = () => {
   // Hack to access navigation from context or props if not passed directly. 
   // Assuming parent passes logic or we use window event custom dispatcher for this specific demo structure.
   const handleNavigate = (view: ViewState) => {
      // Implementation would depend on how App.tsx passes props down. 
      // For this code block, we assume visual rendering is priority.
      window.scrollTo(0, 0);
   };

   // SEO Optimization
   useEffect(() => {
      document.title = "Bolsa Família 2025: Calendário, Valor e Consulta | Guia Oficial Atualizado";

      const metaDesc = document.querySelector('meta[name="description"]');
      const desc = "Consulte o Calendário Bolsa Família 2025 e novos valores. Veja quem tem direito aos adicionais de R$ 150 por criança e como consultar no app oficial.";
      if (metaDesc) {
         metaDesc.setAttribute('content', desc);
      }
   }, []);

   const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
         "@type": "Question",
         "name": "Qual o valor do Bolsa Família em 2025?",
         "acceptedAnswer": {
            "@type": "Answer",
            "text": "O valor base é de R$ 600,00 por família. Contudo, existem adicionais de R$ 150,00 por criança de até 6 anos e R$ 50,00 para gestantes e jovens entre 7 e 18 anos."
         }
      }, {
         "@type": "Question",
         "name": "Quem tem direito ao Bolsa Família?",
         "acceptedAnswer": {
            "@type": "Answer",
            "text": "Têm direito as famílias inscritas no Cadastro Único com renda mensal por pessoa (per capita) de até R$ 218,00."
         }
      }]
   };

   const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Bolsa Família 2025: Guia Completo de Valores e Regras",
      "image": ["https://beneficios.receitapopular.com.br/og-image.jpg"],
      "datePublished": "2024-11-28T08:00:00+08:00",
      "dateModified": new Date().toISOString(),
      "author": [{
         "@type": "Person",
         "name": "Guia Social",
         "url": "https://beneficios.receitapopular.com.br/sobre"
      }]
   };

   const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
   };

   return (
      <div className="bg-brand-light min-h-screen py-8">

         {/* RICH SNIPPETS INJECTION */}
         <SchemaMarkup data={[faqSchema, articleSchema]} />

         <div className="container mx-auto px-4 md:px-6 max-w-5xl">

            <Breadcrumbs
               items={[
                  { label: 'Benefícios', href: 'all-benefits' },
                  { label: 'Guias Informativos', href: 'all-benefits' },
                  { label: 'Bolsa Família 2025' }
               ]}
               onNavigate={(view) => console.log(view)} // Placeholder
            />

            {/* Header SEO Optimized */}
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

            <AdSlot id="Content4" label="Publicidade Guia Topo" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">

               {/* Main Article Content */}
               <article className="lg:col-span-8 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 prose prose-slate max-w-none prose-lg prose-headings:font-bold prose-headings:text-brand-dark prose-a:text-brand-blue">

                  {/* Table of Contents - SEO Booster for Sitelinks */}
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

                  <div className="not-prose flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl mb-10 border border-blue-100 shadow-sm">
                     <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                        <Wallet size={32} />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-brand-blue mb-1">Qual o valor do benefício hoje?</h3>
                        <p className="text-brand-medium text-base leading-snug">
                           O piso nacional é de <strong>R$ 600,00</strong>. Famílias com crianças pequenas podem receber até <strong>R$ 900,00</strong> ou mais.
                        </p>
                     </div>
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
                     <li className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl border border-pink-100">
                        <div className="bg-pink-100 p-2 rounded-lg text-pink-600 mt-1"><Baby size={20} /></div>
                        <div>
                           <strong className="block text-brand-dark text-lg">Benefício Primeira Infância (BPI)</strong>
                           <span className="text-brand-medium">Adicional de <strong>R$ 150,00</strong> por criança de 0 a 6 anos completos.</span>
                        </div>
                     </li>
                  </ul>

                  <div className="my-8">
                     <AdSlot id="Content5" label="Publicidade Contextual" />
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
                     <details className="group bg-gray-50 rounded-xl border border-gray-200 p-4 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-bold">
                           <span className="flex items-center gap-2"><HelpCircle size={18} className="text-brand-blue" /> Como consultar se fui aprovado?</span>
                           <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                           </span>
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

                     {/* WHATSAPP WIDGET (NEW) */}
                     <WhatsAppInvite />

                     <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
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

                           <div className="pt-4 mt-4 border-t border-gray-100">
                              <button className="w-full bg-brand-blue text-white py-3.5 rounded-xl font-bold hover:bg-brand-hover transition-all shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2">
                                 Ver Calendário Completo <ArrowRight size={16} />
                              </button>
                           </div>
                        </div>
                     </div>

                     <AdSlot id="Content1" label="Oferta Especial" />
                  </div>
               </aside>

            </div>
         </div>
      </div>
   );
};

export default BolsaFamiliaGuide;
