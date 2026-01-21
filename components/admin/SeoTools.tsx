import React, { useState } from 'react';
import { FileCode, Copy, Check, ArrowLeft, Globe, Shield } from 'lucide-react';
import { ViewState } from '../../types';

interface Props {
   onNavigate: (view: ViewState) => void;
}

export const SeoTools: React.FC<Props> = ({ onNavigate }) => {
   const [copiedMap, setCopiedMap] = useState(false);
   const [copiedRobot, setCopiedRobot] = useState(false);

   const baseUrl = "https://beneficios.receitapopular.com.br";
   const currentDate = new Date().toISOString().split('T')[0];

   const routes = [
      { path: '/', priority: '1.0' },
      { path: '/beneficios', priority: '0.9' },
      { path: '/calendarios', priority: '0.9' },
      { path: '/cartoes', priority: '0.8' },
      { path: '/seguros', priority: '0.8' },
      { path: '/guia-bolsa-familia', priority: '0.9' },
      { path: '/guia-bpc', priority: '0.8' },
      { path: '/minha-casa-minha-vida-2025-comparativo-faixas-beneficios', priority: '0.8' },
      { path: '/dentista-gratuito-sus-quiz-prioridade', priority: '0.8' },
      { path: '/cnh-social-2025', priority: '0.8' },
      { path: '/beneficio-pe-de-meia-2025-guia-completo', priority: '0.8' },
      { path: '/cartao-credito-para-negativado-2025-lista-facil', priority: '0.7' },
      { path: '/ranking-cartoes-limite-alto-aprovacao-imediata', priority: '0.7' },
      { path: '/lei-protege-herdeiros-seguro-quita-dividas', priority: '0.7' },
      { path: '/seguro-vida-popular-auxilio-funeral-5-reais', priority: '0.7' },
   ];

   const generateSitemap = () => {
      let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
      xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

      routes.forEach(route => {
         xml += `  <url>\n`;
         xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
         xml += `    <lastmod>${currentDate}</lastmod>\n`;
         xml += `    <changefreq>daily</changefreq>\n`;
         xml += `    <priority>${route.priority}</priority>\n`;
         xml += `  </url>\n`;
      });

      xml += `</urlset>`;
      return xml;
   };

   const generateRobots = () => {
      return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;
   };

   const handleCopy = (text: string, setter: React.Dispatch<React.SetStateAction<boolean>>) => {
      navigator.clipboard.writeText(text);
      setter(true);
      setTimeout(() => setter(false), 2000);
   };

   return (
      <div className="min-h-screen bg-slate-900 text-white p-4 md:p-8 font-mono">
         <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-6">
               <button onClick={() => onNavigate('secret-menu')} className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors">
                  <ArrowLeft />
               </button>
               <div>
                  <h1 className="text-2xl font-bold font-sans flex items-center gap-2">
                     <Globe className="text-blue-400" /> Ferramentas SEO
                  </h1>
                  <p className="text-slate-400 text-sm font-sans">Gere arquivos estáticos para melhorar a indexação no Google.</p>
               </div>
            </div>

            <div className="grid gap-8">

               {/* Sitemap Generator */}
               <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <div className="flex justify-between items-center mb-4">
                     <h3 className="text-lg font-bold font-sans flex items-center gap-2 text-yellow-400">
                        <FileCode size={20} /> sitemap.xml
                     </h3>
                     <button
                        onClick={() => handleCopy(generateSitemap(), setCopiedMap)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${copiedMap ? 'bg-green-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
                     >
                        {copiedMap ? <Check size={16} /> : <Copy size={16} />} {copiedMap ? 'Copiado!' : 'Copiar XML'}
                     </button>
                  </div>
                  <p className="text-xs text-slate-400 mb-4 font-sans">
                     Copie este código, salve como <code>sitemap.xml</code> e faça upload na raiz do seu site (public folder).
                  </p>
                  <div className="bg-black/50 p-4 rounded-xl overflow-x-auto border border-slate-600">
                     <pre className="text-xs text-green-300 leading-relaxed">
                        {generateSitemap()}
                     </pre>
                  </div>
               </div>

               {/* Robots Generator */}
               <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <div className="flex justify-between items-center mb-4">
                     <h3 className="text-lg font-bold font-sans flex items-center gap-2 text-purple-400">
                        <Shield size={20} /> robots.txt
                     </h3>
                     <button
                        onClick={() => handleCopy(generateRobots(), setCopiedRobot)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${copiedRobot ? 'bg-green-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
                     >
                        {copiedRobot ? <Check size={16} /> : <Copy size={16} />} {copiedRobot ? 'Copiado!' : 'Copiar TXT'}
                     </button>
                  </div>
                  <p className="text-xs text-slate-400 mb-4 font-sans">
                     Salve como <code>robots.txt</code> na raiz do site para guiar os crawlers do Google.
                  </p>
                  <div className="bg-black/50 p-4 rounded-xl overflow-x-auto border border-slate-600">
                     <pre className="text-xs text-blue-300 leading-relaxed">
                        {generateRobots()}
                     </pre>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
};