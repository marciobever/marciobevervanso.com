import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Loader2, RefreshCw, ExternalLink, Calendar, TrendingUp, AlertCircle, Search } from 'lucide-react';
import { NewsItem } from '../types';
import { AdSlot } from './AdSlot';

// Declaração para satisfazer o TypeScript sem depender de @types/node
declare const process: {
  env: {
    API_KEY: string;
  }
};

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  // SEO Optimization
  useEffect(() => {
    document.title = "Notícias Bolsa Família e INSS: Monitoramento Diário Oficial";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Acompanhe em tempo real as mudanças nas leis de benefícios sociais. Atualizações sobre pagamentos, bloqueios e novas regras do Governo Federal.";
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    } else {
      const m = document.createElement('meta');
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }

    const metaKeys = document.querySelector('meta[name="keywords"]');
    const keys = "noticias bolsa familia, diario oficial união, ultimas noticias inss, regras beneficios, atualização cadunico";
    if (metaKeys) {
      metaKeys.setAttribute('content', keys);
    } else {
      const m = document.createElement('meta');
      m.name = "keywords";
      m.content = keys;
      document.head.appendChild(m);
    }
  }, []);

  const fetchNews = async () => {
    if (!process.env.API_KEY) {
      setError("Chave de API não configurada no ambiente.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Create a new instance right before making an API call to ensure it uses up-to-date API key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // PROMPT OPTIMIZED FOR "AUTO-UPDATE" FEEL AND OFFICIAL SOURCES
      // Updated model to gemini-3-flash-preview as per text task guidelines
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Atue como um jornalista especializado em Diário Oficial da União e Ministério da Cidadania. 
        Pesquise por alterações RECENTES (últimas 24-48 horas) em leis, decretos ou anúncios oficiais sobre:
        1. Calendário ou valores do Bolsa Família.
        2. Regras do INSS ou BPC/LOAS.
        3. Novos programas sociais lançados pelo Governo Federal.
        
        Se houver novidades urgentes, crie 3 notícias curtas e impactantes. 
        Se não houver grandes mudanças nas últimas 24h, gere um "Resumo do Dia" com as regras vigentes mais importantes que as pessoas costumam esquecer.
        Use tom oficial, confiável e jornalístico.`,
        config: {
          tools: [{ googleSearch: {} }],
        }
      });

      // Extract URLs from groundingChunks as required by guidelines
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const sources: string[] = (groundingChunks as any[])
        .map((chunk: any) => chunk.web?.uri)
        .filter((uri: unknown): uri is string => typeof uri === 'string' && !!uri);
      
      const uniqueSources = Array.from(new Set(sources));
      
      // Append sources to content summary for display
      let summaryContent = response.text || "Nenhuma atualização encontrada nos canais oficiais hoje.";
      if (uniqueSources.length > 0) {
        summaryContent += "\n\n**Fontes verificadas:**\n" + uniqueSources.map(url => `- ${url}`).join("\n");
      }

      // Create a "Digest" news item
      const digestItem: NewsItem = {
        id: 'digest-' + Date.now(),
        date: new Date().toLocaleDateString('pt-BR'),
        title: 'Plantão Oficial: Resumo de Benefícios Sociais',
        summary: summaryContent,
        tag: 'Diário Oficial'
      };

      setNews([digestItem]);
      setLastUpdated(new Date().toLocaleTimeString('pt-BR'));
    } catch (err) {
      console.error(err);
      setError("Não foi possível conectar ao servidor de notícias oficiais. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="bg-brand-light min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 border-b border-gray-200 pb-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-brand-dark flex items-center justify-center md:justify-start gap-3">
               <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
               Monitoramento Oficial
            </h1>
            <p className="text-brand-medium mt-2 max-w-2xl">
               Nosso sistema verifica automaticamente o Diário Oficial e portais do Governo em busca de alterações nas leis de benefícios.
            </p>
          </div>
          <button 
            onClick={fetchNews}
            disabled={loading}
            className="flex items-center gap-2 bg-brand-dark hover:bg-brand-blue text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <RefreshCw size={20} />}
            {loading ? 'Verificando Decretos...' : 'Verificar Atualizações'}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-8 flex items-center gap-3">
             <AlertCircle size={20} />
            {error}
          </div>
        )}

        {loading && news.length === 0 ? (
           <div className="space-y-6 max-w-4xl mx-auto">
             <div className="h-20 bg-gray-200 rounded-xl animate-pulse"></div>
             <div className="h-64 bg-white rounded-3xl shadow-sm animate-pulse border border-gray-100 p-8">
                <div className="h-6 bg-gray-100 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-50 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-50 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-50 rounded w-5/6"></div>
             </div>
           </div>
        ) : (
          <div className="space-y-8 max-w-4xl mx-auto">
            {lastUpdated && !loading && (
              <p className="text-xs font-bold text-gray-400 text-right uppercase tracking-wider flex justify-end gap-2 items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Sistema Online • Última verificação: {lastUpdated}
              </p>
            )}
            
            {news.map((item) => (
              <article key={item.id} className="bg-white rounded-3xl shadow-soft border border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue"></div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-red-100 flex items-center gap-1">
                      <TrendingUp size={12} /> {item.tag}
                    </span>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs font-semibold uppercase tracking-wide">
                      <Calendar size={12} />
                      {item.date}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 leading-tight font-serif">{item.title}</h2>
                  
                  <div className="prose prose-slate max-w-none text-brand-medium leading-relaxed whitespace-pre-line text-lg">
                    {item.summary}
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400 font-medium italic">
                       *Conteúdo gerado via análise de dados públicos e IA. Confirme sempre no Portal Gov.br.
                    </p>
                    <button 
                      onClick={fetchNews}
                      className="text-brand-blue hover:underline text-sm font-bold flex items-center gap-2"
                    >
                      Ler fonte original <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}

            <div className="mt-8">
               <AdSlot id="Content3" label="Publicidade Notícias" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
