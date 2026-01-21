import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Loader2, Plus, Trash2, Play, LayoutDashboard, Sparkles, CheckCircle2 } from 'lucide-react';
import { Quiz } from '../types';

// Declaração para satisfazer o TypeScript sem depender de @types/node
declare const process: {
  env: {
    API_KEY: string;
  }
};

interface DashboardProps {
  quizzes: Quiz[];
  setQuizzes: React.Dispatch<React.SetStateAction<Quiz[]>>;
  onTakeQuiz: (quizId: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ quizzes, setQuizzes, onTakeQuiz }) => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);

  const generateQuiz = async () => {
    if (!topic.trim()) return;
    if (!process.env.API_KEY) {
      alert("API Key missing");
      return;
    }

    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Crie um quiz de elegibilidade curto e sério sobre o programa social brasileiro: "${topic}". 
        Crie 3 a 5 perguntas de Sim/Não que ajudem a verificar se alguém tem direito.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              questions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.INTEGER },
                    text: { type: Type.STRING },
                    type: { type: Type.STRING, enum: ["yes_no"] }
                  },
                  required: ["id", "text", "type"]
                }
              }
            },
            required: ["title", "description", "questions"]
          }
        }
      });

      const data = JSON.parse(response.text || '{}');
      
      if (data.title) {
        const newQuiz: Quiz = {
          id: Date.now().toString(),
          program: topic,
          title: data.title,
          description: data.description,
          questions: data.questions,
          createdAt: new Date().toLocaleDateString('pt-BR')
        };
        
        setQuizzes(prev => [newQuiz, ...prev]);
        setTopic('');
      }
    } catch (error) {
      console.error("Error generating quiz:", error);
      alert("Erro ao gerar quiz. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const deleteQuiz = (id: string) => {
    setQuizzes(prev => prev.filter(q => q.id !== id));
  };

  return (
    <div className="bg-brand-light min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-brand-blue text-white rounded-xl shadow-lg shadow-brand-blue/20">
              <LayoutDashboard size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-brand-dark">Painel do Criador</h1>
              <p className="text-brand-medium text-sm">Use IA para criar novos testes de elegibilidade.</p>
            </div>
          </div>
        </div>

        {/* Generator Card */}
        <div className="bg-white rounded-3xl shadow-soft border border-gray-100 p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="text-yellow-500 fill-current" size={20} />
            <h2 className="text-xl font-bold text-brand-dark">Gerar Novo Quiz</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 relative z-10">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Nome do Programa (ex: Vale Gás, Tarifa Social, Pé-de-Meia)"
              className="flex-grow px-6 py-4 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-brand-dark"
              onKeyDown={(e) => e.key === 'Enter' && generateQuiz()}
            />
            <button
              onClick={generateQuiz}
              disabled={loading || !topic}
              className="bg-brand-blue hover:bg-brand-hover text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-blue/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[180px]"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Plus size={20} />}
              {loading ? 'Gerando...' : 'Criar com IA'}
            </button>
          </div>
        </div>

        {/* Quizzes List */}
        <div>
          <h3 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-2">
            <CheckCircle2 size={20} className="text-brand-blue" />
            Meus Quizzes ({quizzes.length})
          </h3>

          {quizzes.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-gray-300">
              <p className="text-brand-medium mb-2">Nenhum quiz encontrado.</p>
              <p className="text-sm text-gray-400">Gere um novo teste acima para começar.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.map((quiz) => (
                <div key={quiz.id} className="group bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-soft transition-all p-6 flex flex-col h-full relative">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-brand-light text-brand-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {quiz.program}
                    </span>
                    <button 
                      onClick={() => deleteQuiz(quiz.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors p-2 -mr-2 -mt-2"
                      title="Excluir"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  
                  <h4 className="text-lg font-bold text-brand-dark mb-3">{quiz.title}</h4>
                  <p className="text-sm text-brand-medium mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {quiz.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4 pt-4 border-t border-gray-50">
                    <span>{quiz.questions.length} perguntas</span>
                    <span>{quiz.createdAt}</span>
                  </div>

                  <button 
                    onClick={() => onTakeQuiz(quiz.id)}
                    className="w-full bg-brand-dark hover:bg-brand-blue text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Play size={16} fill="currentColor" />
                    Iniciar Teste
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;