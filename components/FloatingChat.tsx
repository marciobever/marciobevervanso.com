import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Loader2, Bot, User, Sparkles } from 'lucide-react';

// Declaração para satisfazer o TypeScript
declare const process: {
  env: {
    API_KEY: string;
  }
};

interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
}

export const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '0', role: 'model', content: 'Olá! Sou a IA do Guia Social. Tem dúvida sobre algum benefício?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      if (!process.env.API_KEY) throw new Error("API Key missing");
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: "Você é um assistente virtual especialista em benefícios sociais do Brasil (Bolsa Família, BPC, INSS). Responda de forma curta, direta e amigável (máximo 3 frases se possível). Use emojis." }]},
          ...messages.map(m => ({ role: m.role, parts: [{ text: m.content }] })),
          { role: 'user', parts: [{ text: input }] }
        ]
      });

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: response.text || "Desculpe, não entendi. Pode reformular?"
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', content: "Erro de conexão. Tente novamente." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] max-w-[350px] h-[450px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-brand-blue p-4 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Assistente Social IA</h3>
                <p className="text-[10px] text-blue-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online Agora
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 bg-slate-50 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'model' ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
                  {msg.role === 'model' ? <Sparkles size={14} /> : <User size={14} />}
                </div>
                <div className={`p-3 rounded-2xl text-sm max-w-[80%] ${msg.role === 'user' ? 'bg-brand-dark text-white rounded-tr-none' : 'bg-white border border-gray-200 text-slate-700 rounded-tl-none'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-2">
                 <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0">
                    <Loader2 size={14} className="animate-spin" />
                 </div>
                 <div className="bg-gray-100 px-3 py-2 rounded-xl text-xs text-gray-500 rounded-tl-none italic">
                    Digitando...
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Digite sua dúvida..."
                className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white text-slate-900 placeholder:text-gray-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none text-sm transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-blue text-white rounded-lg hover:bg-brand-hover disabled:opacity-50 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-[9px] text-center text-gray-400 mt-2">IA pode cometer erros. Verifique informações oficiais.</p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-brand-blue text-white rounded-full shadow-lg hover:bg-brand-hover transition-all hover:scale-110 active:scale-95"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        
        {!isOpen && (
          <span className="absolute right-0 top-0 flex h-3 w-3 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        )}
      </button>
    </div>
  );
};