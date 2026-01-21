
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, User, Bot, Loader2, Search, Info } from 'lucide-react';
// AdSlot import removed to clean up UI as requested
// import { AdSlot } from './AdSlot'; 

// Declaração para satisfazer o TypeScript sem depender de @types/node
declare const process: {
  env: {
    API_KEY: string;
  }
};

interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  sources?: string[];
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', content: 'Olá! Sou seu assistente virtual do Portal Guia Social. Posso tirar dúvidas sobre Bolsa Família, CadÚnico, CNH Social e outros programas. O que você gostaria de saber hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      if (!process.env.API_KEY) throw new Error("API Key missing");
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: "Você é um especialista em assistência social no Brasil. Responda de forma clara, educada e direta. Use o Google Search para garantir que suas respostas sobre benefícios, leis e valores estejam 100% atualizadas." }] },
          ...messages.map(m => ({ role: m.role, parts: [{ text: m.content }] })),
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          tools: [{ googleSearch: {} }],
        }
      });

      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const sources: string[] = (groundingChunks as any[])
        .map((chunk: any) => chunk.web?.uri)
        .filter((uri: unknown): uri is string => typeof uri === 'string' && !!uri);

      const uniqueSources = Array.from(new Set(sources));

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: response.text || "Desculpe, não consegui encontrar essa informação no momento.",
        sources: uniqueSources.length > 0 ? uniqueSources : undefined
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        content: "Ocorreu um erro ao conectar com o serviço. Por favor, verifique sua conexão ou tente mais tarde."
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-brand-light h-[calc(100vh-80px)] flex flex-col relative">
      {/* Header Info */}
      <div className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between shrink-0 shadow-sm z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold text-brand-medium uppercase tracking-wide">Consultor IA Online</span>
        </div>
        <div className="text-xs text-gray-400 flex items-center gap-1">
          <Info size={12} />
          Respostas geradas por IA
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-4 md:p-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Ad removed from here per user request to improve visibility */}

          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>

              {msg.role === 'model' && (
                <div className="w-10 h-10 rounded-2xl bg-brand-blue text-white flex items-center justify-center shrink-0 shadow-lg shadow-brand-blue/20">
                  <Bot size={22} />
                </div>
              )}

              <div className={`max-w-[85%] md:max-w-[75%] rounded-3xl p-5 shadow-sm ${msg.role === 'user'
                  ? 'bg-brand-dark text-white rounded-tr-none'
                  : 'bg-white text-brand-dark border border-gray-100 rounded-tl-none'
                }`}>
                <p className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">{msg.content}</p>

                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-gray-100/10">
                    <p className="text-[10px] font-bold mb-2 flex items-center gap-1 opacity-70 uppercase tracking-wider">
                      <Search size={10} /> Fontes verificadas
                    </p>
                    <ul className="space-y-1">
                      {msg.sources.slice(0, 3).map((source, idx) => (
                        <li key={idx}>
                          <a
                            href={source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs opacity-70 hover:opacity-100 truncate block hover:underline"
                          >
                            {source}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {msg.role === 'user' && (
                <div className="w-10 h-10 rounded-2xl bg-gray-200 text-gray-500 flex items-center justify-center shrink-0">
                  <User size={22} />
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex gap-4 justify-start">
              <div className="w-10 h-10 rounded-2xl bg-brand-blue text-white flex items-center justify-center shrink-0">
                <Bot size={22} />
              </div>
              <div className="bg-white p-5 rounded-3xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-3 text-gray-400 text-sm">
                <Loader2 className="animate-spin text-brand-blue" size={18} />
                <span className="animate-pulse">Pesquisando e escrevendo...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="bg-white border-t border-gray-200 p-4 md:p-6 fixed bottom-0 left-0 w-full z-20">
        <div className="max-w-3xl mx-auto relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Pergunte sobre um benefício..."
            className="w-full pl-6 pr-14 py-4 rounded-2xl border border-gray-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none shadow-soft transition-all text-brand-dark"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="absolute right-2 top-2 p-2.5 bg-brand-blue text-white rounded-xl hover:bg-brand-hover disabled:opacity-50 disabled:hover:bg-brand-blue transition-colors shadow-md"
          >
            <Send size={20} className={loading ? 'opacity-0' : 'opacity-100'} />
            {loading && <div className="absolute inset-0 flex items-center justify-center"><Loader2 size={20} className="animate-spin" /></div>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
