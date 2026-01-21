import React, { useState, useEffect } from 'react';
import { ChevronRight, ShieldCheck, CalendarClock, TrendingUp, CheckCircle2 } from 'lucide-react';
import { ViewState } from '../types';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const now = new Date();
    // Format: "28 de Novembro de 2024"
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    setCurrentDate(now.toLocaleDateString('pt-BR', options));
  }, []);

  return (
    <section
      className="relative pt-8 pb-16 md:pt-16 md:pb-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[85%] bg-gradient-to-b from-blue-50/80 to-transparent -z-10 rounded-b-[40px] md:rounded-b-[80px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="bg-white rounded-3xl shadow-soft border border-gray-100 p-6 md:p-12 lg:p-16 overflow-hidden relative">

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Text Content - SEO Optimized Structure */}
            <div className="lg:w-3/5 space-y-8 text-center lg:text-left z-20">

              {/* Trust/Freshness Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border border-green-100">
                  <CheckCircle2 size={14} aria-hidden="true" /> Dados Verificados Hoje
                </span>
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-brand-blue px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border border-blue-100">
                  <CalendarClock size={14} aria-hidden="true" /> {currentDate}
                </span>
              </div>

              <div className="space-y-4">
                <h1
                  id="hero-heading"
                  className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-[1.15] tracking-tight"
                >
                  Guia Oficial de <span className="text-brand-blue relative inline-block">
                    Benefícios Sociais
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span> e Cidadania.
                </h1>

                <h2 className="text-lg text-brand-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Consulte regras atualizadas do <strong>Bolsa Família 2026</strong>, calendário de pagamentos, <strong>BPC/LOAS</strong> e inscrição no <strong>CadÚnico</strong>. Informação clara, segura e gratuita.
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate('quizzes')}
                  aria-label="Iniciar consulta de elegibilidade para benefícios sociais"
                  className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-hover text-white px-8 py-4 rounded-2xl font-bold text-base transition-all shadow-lg shadow-brand-blue/30 transform hover:-translate-y-1"
                >
                  Consultar Elegibilidade
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
                <button
                  onClick={() => onNavigate('calendarios')}
                  aria-label="Ver o calendário de pagamentos de 2025"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-brand-dark border-2 border-gray-200 px-8 py-4 rounded-2xl font-bold text-base transition-all hover:border-brand-blue hover:text-brand-blue"
                >
                  <CalendarClock size={20} aria-hidden="true" />
                  Ver Calendário 2026
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-gray-400 font-medium pt-2">
                <span className="flex items-center gap-1"><ShieldCheck size={12} aria-hidden="true" /> Site seguro</span>
                <span className="hidden sm:inline" aria-hidden="true">•</span>
                <span>Não pedimos dados bancários</span>
                <span className="hidden sm:inline" aria-hidden="true">•</span>
                <span>Baseado na Lei nº 14.601/2023</span>
              </div>
            </div>

            {/* Illustration/Image Area */}
            <div className="lg:w-2/5 relative hidden md:block">
              {/* Using role="img" and aria-label to describe the CSS composition as a single image */}
              <div
                role="img"
                aria-label="Ilustração de um painel de monitoramento de benefícios mostrando status positivo do Bolsa Família e valor atualizado do salário mínimo"
                className="relative w-full aspect-square max-w-sm mx-auto"
              >
                <div aria-hidden="true">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-cyan-400 rounded-full opacity-10 blur-3xl transform translate-x-10 -translate-y-10"></div>
                  <div className="bg-brand-light rounded-[32px] border border-gray-100 p-8 shadow-2xl relative z-10 rotate-3 transition-transform hover:rotate-0 duration-500">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                          <TrendingUp size={24} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-brand-dark">Atualização Diária</div>
                          <div className="text-xs text-brand-medium">Monitoramento do D.O.U.</div>
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                          <span className="text-xs font-bold text-gray-600">Bolsa Família</span>
                          <span className="text-xs font-bold text-green-600">Liberado</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                          <span className="text-xs font-bold text-gray-600">Auxílio Gás</span>
                          <span className="text-xs font-bold text-blue-600">Em Breve</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                          <span className="text-xs font-bold text-gray-600">Salário Mínimo</span>
                          <span className="text-xs font-bold text-gray-800">R$ 1.509</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-[10px] text-center text-gray-400">
                          Dados meramente ilustrativos. Consulte fontes oficiais.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;