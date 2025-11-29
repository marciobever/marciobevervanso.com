
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ShieldAlert, Search, AlertTriangle, CheckCircle2, Lock, Smartphone, Siren } from 'lucide-react';
import { AdSlot } from '../AdSlot';

// Declaração para satisfazer o TypeScript
declare const process: {
  env: {
    API_KEY: string;
  }
};

interface AnalysisResult {
  isScam: boolean;
  riskLevel: 'Baixo' | 'Médio' | 'Alto' | 'Crítico';
  explanation: string;
  tips: string[];
}

export const ScamDetector: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const analyzeText = async () => {
    if (!input.trim()) return;
    if (!process.env.API_KEY) {
      alert("Erro de configuração: Chave API ausente.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const prompt = `
        Atue como um especialista em segurança digital do Governo Federal. Analise a seguinte mensagem (recebida por SMS, WhatsApp ou Email) e determine se é um GOLPE focado em beneficiários do Bolsa Família/INSS.
        
        Mensagem: "${input}"
        
        Retorne APENAS um JSON com este formato:
        {
          "isScam": boolean,
          "riskLevel": "Baixo" | "Médio" | "Alto" | "Crítico",
          "explanation": "Explicação curta e direta de 2 frases.",
          "tips": ["Dica 1", "Dica 2", "Dica 3"]
        }
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: { responseMimeType: 'application/json' }
      });

      const data = JSON.parse(response.text || '{}');
      setResult(data);

    } catch (error) {
      console.error(error);
      alert("Não foi possível analisar no momento. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen py-12 text-white font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-red-500/20 rounded-full mb-4 border border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
            <ShieldAlert size={48} className="text-red-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Verificador de Golpes</h1>
          <p className="text-slate-400 text-lg">
            Recebeu um SMS estranho sobre o Bolsa Família ou Empréstimo? <br className="hidden md:block"/>
            Cole a mensagem abaixo e nossa Inteligência Artificial vai analisar se é seguro.
          </p>
        </div>

        <div className="bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
           {/* Decor */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

           <div className="relative z-10">
              <label className="block text-sm font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                 <Smartphone size={16} /> Cole a mensagem aqui
              </label>
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: 'Caixa Informa: Seu benefício foi bloqueado. Clique aqui para atualizar...'"
                className="w-full h-32 bg-slate-900 border border-slate-600 rounded-xl p-4 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none transition-all"
              />
              
              <button 
                onClick={analyzeText}
                disabled={loading || !input.trim()}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
              >
                 {loading ? <Search className="animate-spin" /> : <ShieldAlert />}
                 {loading ? 'Analisando Riscos...' : 'Verificar Agora Grátis'}
              </button>
           </div>
        </div>

        {/* RESULTS AREA */}
        {result && (
           <div className="mt-8 animate-fade-in-up">
              <div className={`rounded-3xl p-1 border-2 ${result.isScam ? 'border-red-500 bg-red-500/10' : 'border-green-500 bg-green-500/10'}`}>
                 <div className="bg-slate-800 rounded-[20px] p-6 md:p-8">
                    
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6 border-b border-slate-700 pb-6">
                       <div className={`w-20 h-20 rounded-full flex items-center justify-center shrink-0 ${result.isScam ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]' : 'bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]'}`}>
                          {result.isScam ? <Siren size={40} className="animate-pulse" /> : <CheckCircle2 size={40} />}
                       </div>
                       <div className="text-center md:text-left">
                          <h2 className={`text-3xl font-extrabold mb-1 ${result.isScam ? 'text-red-400' : 'text-green-400'}`}>
                             {result.isScam ? 'ALERTA DE GOLPE!' : 'PARECE SEGURO'}
                          </h2>
                          <div className="flex items-center justify-center md:justify-start gap-3">
                             <span className="text-slate-400 font-medium">Nível de Risco:</span>
                             <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                                result.riskLevel === 'Crítico' ? 'bg-red-600 text-white' :
                                result.riskLevel === 'Alto' ? 'bg-orange-500 text-white' :
                                result.riskLevel === 'Médio' ? 'bg-yellow-500 text-black' :
                                'bg-green-500 text-black'
                             }`}>
                                {result.riskLevel}
                             </span>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-6">
                       <div>
                          <h3 className="text-lg font-bold text-white mb-2">Análise da IA</h3>
                          <p className="text-slate-300 leading-relaxed">{result.explanation}</p>
                       </div>

                       <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700">
                          <h4 className="text-sm font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                             <Lock size={14} /> Recomendações de Segurança
                          </h4>
                          <ul className="space-y-3">
                             {result.tips.map((tip, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                                   <AlertTriangle size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                                   {tip}
                                </li>
                             ))}
                          </ul>
                       </div>
                    </div>

                 </div>
              </div>
           </div>
        )}

        <div className="mt-12 text-center text-xs text-slate-500">
           <p>Esta ferramenta utiliza Inteligência Artificial para identificar padrões comuns de golpes. <br/>Sempre verifique informações nos canais oficiais do Governo (gov.br).</p>
        </div>

        <div className="mt-8">
           <AdSlot id="Content1" label="Proteção e Segurança" />
        </div>

      </div>
    </div>
  );
};
