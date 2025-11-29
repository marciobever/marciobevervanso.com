
import React, { useEffect } from 'react';
import { Shield, FileText } from 'lucide-react';

export const LegalPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-gray-200">
           Termos de Uso e Privacidade
        </h1>

        <div className="prose prose-slate max-w-none text-sm text-slate-600">
           <h3>1. Isenção de Responsabilidade (Disclaimer)</h3>
           <p>
              O site <strong>Guia Social Brasil</strong> (marciobevervanso.com) é um portal informativo de caráter privado e independente. 
              <strong>NÃO possuímos vínculo com o Governo Federal</strong>, CAIXA, INSS ou quaisquer órgãos públicos. 
              Nossa missão é facilitar o acesso à informação pública, traduzindo o "juridiquês" para uma linguagem acessível.
           </p>
           <p>
              Nunca cobramos taxas para liberar benefícios. Se alguém cobrar em nosso nome, é golpe.
           </p>

           <h3>2. Coleta de Dados</h3>
           <p>
              Utilizamos cookies para personalizar conteúdo e anúncios, além de analisar nosso tráfego. 
              Ao realizar simulações em nossos quizzes, os dados inseridos (como respostas sobre renda) são processados localmente ou anonimamente apenas para gerar o resultado visual na tela, não sendo armazenados em bancos de dados persistentes vinculados à sua identidade real.
           </p>

           <h3>3. Publicidade (Google AdSense)</h3>
           <p>
              Este site exibe anúncios fornecidos pelo Google e parceiros. O Google utiliza cookies (como o DART) para exibir anúncios com base em suas visitas a este e outros sites na internet. 
              Você pode desativar o uso do cookie DART acessando a Política de Privacidade da rede de conteúdo e anúncios do Google.
           </p>

           <h3>4. Uso das Ferramentas</h3>
           <p>
              As calculadoras e simuladores (Score, Renda Per Capita, Elegibilidade) fornecem estimativas baseadas nas regras gerais divulgadas em Diário Oficial. 
              O resultado oficial e final cabe exclusivamente ao ente governamental responsável após análise documental presencial.
           </p>

           <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
              <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                 <Shield size={18} /> Contato para LGPD
              </h4>
              <p>
                 Para solicitar exclusão de dados de cookies ou tirar dúvidas sobre privacidade, entre em contato pelo email: privacidade@marciobevervanso.com
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};
