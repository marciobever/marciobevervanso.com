
import React, { useEffect } from 'react';
import { Shield, FileText, Info } from 'lucide-react';

export const LegalPage: React.FC = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="bg-white min-h-screen py-12">
         <div className="container mx-auto px-4 max-w-3xl">

            {/* About Us Section - Crucial for Approval */}
            <section className="mb-12 border-b border-gray-200 pb-8">
               <h1 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Info className="text-brand-blue" /> Sobre Nós
               </h1>
               <div className="prose prose-slate max-w-none text-slate-600">
                  <p className="text-lg leading-relaxed">
                     O <strong>Guia Social</strong> (beneficios.receitapopular.com.br) nasceu com a missão de simplificar a burocracia estatal. Sabemos que entender as leis e regras dos benefícios sociais pode ser difícil, por isso traduzimos a linguagem oficial para algo que todo cidadão brasileiro possa compreender.
                  </p>
                  <p>
                     Somos uma equipe independente de jornalistas e desenvolvedores comprometidos com a verdade. Nosso compromisso é entregar informação verificada, combatendo as Fake News que prejudicam quem mais precisa.
                  </p>
               </div>
            </section>

            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
               <FileText className="text-brand-blue" /> Termos de Uso e Privacidade
            </h2>

            <div className="prose prose-slate max-w-none text-sm text-slate-600">
               <h3>1. Isenção de Responsabilidade (Disclaimer)</h3>
               <p>
                  Este site é um portal informativo de caráter privado.
                  <strong>NÃO possuímos vínculo com o Governo Federal</strong>, CAIXA, INSS ou quaisquer órgãos públicos.
                  Nossa missão é facilitar o acesso à informação pública (Lei de Acesso à Informação nº 12.527/2011).
               </p>
               <p>
                  Nunca cobramos taxas para liberar benefícios. Se alguém cobrar em nosso nome, denuncie, pois é golpe.
               </p>

               <h3>2. Coleta e Proteção de Dados</h3>
               <p>
                  Sua privacidade é nossa prioridade. Utilizamos cookies para personalizar conteúdo e anúncios (via Google AdSense) e analisar nosso tráfego (via Google Analytics).
                  Ao realizar simulações em nossos quizzes, os dados inseridos (como respostas sobre renda) são processados localmente no seu dispositivo para gerar o resultado visual, não sendo armazenados em nossos servidores de forma identificável.
               </p>

               <h3>3. Publicidade</h3>
               <p>
                  Este site é mantido através de publicidade programática e parcerias com instituições financeiras regulamentadas. Os anúncios exibidos são fornecidos pelo Google e parceiros afiliados.
                  O Google utiliza cookies (como o DART) para exibir anúncios com base em suas visitas a este e outros sites na internet.
               </p>

               <h3>4. Uso das Ferramentas</h3>
               <p>
                  As calculadoras e simuladores (Score, Renda Per Capita, Elegibilidade) fornecem estimativas baseadas nas regras gerais divulgadas em Diário Oficial.
                  O resultado oficial e final cabe exclusivamente ao ente governamental responsável após análise documental presencial no CRAS ou agência bancária.
               </p>

               <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
                  <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                     <Shield size={18} /> Contato para LGPD
                  </h4>
                  <p>
                     Para solicitar exclusão de dados de cookies, tirar dúvidas sobre privacidade ou entrar em contato com nossa equipe editorial, envie um email para: <strong>contato@receitapopular.com.br</strong>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};
