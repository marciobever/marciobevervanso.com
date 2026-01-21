
import React, { useState, useEffect } from 'react';
import { Calculator, Users, DollarSign, CheckCircle2, XCircle, AlertCircle, ArrowRight, Minus, Plus, HelpCircle, TrendingUp } from 'lucide-react';
import { AdSlot } from '../AdSlot';
import { ViewState } from '../../types';

interface Props {
  onNavigate: (view: ViewState) => void;
}

export const IncomeCalculator: React.FC<Props> = ({ onNavigate }) => {
  const [incomeRaw, setIncomeRaw] = useState<string>('');
  const [members, setMembers] = useState<number>(1);
  const [perCapita, setPerCapita] = useState<number>(0);
  const [showResult, setShowResult] = useState(false);

  // Constants 2026
  const SALARIO_MINIMO = 1509; // Estimativa 2026
  const LIMIT_BOLSA_FAMILIA = 218;
  const LIMIT_BPC = parseFloat((SALARIO_MINIMO / 4).toFixed(2)); // ~377
  const LIMIT_TARIFA = parseFloat((SALARIO_MINIMO / 2).toFixed(2)); // ~754

  // Formata moeda enquanto digita
  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const numberValue = parseInt(value) / 100;
    if (isNaN(numberValue)) {
      setIncomeRaw('');
    } else {
      setIncomeRaw(numberValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 }));
    }
  };

  const calculate = () => {
    const incomeValue = parseFloat(incomeRaw.replace(/\./g, '').replace(',', '.')) || 0;
    const result = incomeValue / (members || 1);
    setPerCapita(result);
    setShowResult(true);
  };

  // Auto-calculate quando inputs mudam
  useEffect(() => {
    if (incomeRaw && members > 0) {
      calculate();
    } else {
      setShowResult(false);
    }
  }, [incomeRaw, members]);

  // SEO
  useEffect(() => {
    document.title = "Calculadora Bolsa Família 2026: Renda Per Capita e Elegibilidade";
  }, []);

  const getStatusColor = (limit: number) => {
    if (!showResult) return 'gray';
    return perCapita <= limit ? 'green' : 'red';
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 md:py-12 font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-4 text-brand-blue border border-blue-50">
            <Calculator size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Calculadora de Renda 2026
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Descubra se sua família tem direito ao <strong>Bolsa Família</strong>, <strong>BPC</strong> e descontos na conta de luz com base nas novas regras de renda per capita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN: INPUTS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-cyan-400"></div>

              <h3 className="font-bold text-xl text-slate-800 mb-6 flex items-center gap-2">
                <span className="bg-brand-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                Dados da Família
              </h3>

              <div className="space-y-8">
                {/* Income Input */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Renda Mensal Total
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue transition-colors">
                      <span className="font-bold text-lg">R$</span>
                    </div>
                    <input
                      type="text"
                      value={incomeRaw}
                      onChange={handleIncomeChange}
                      placeholder="0,00"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none text-2xl font-bold text-slate-900 transition-all placeholder:text-gray-300"
                      inputMode="numeric"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                    <HelpCircle size={12} /> Some salários, bicos e pensões. Não inclua Bolsa Família.
                  </p>
                </div>

                {/* Members Input */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Pessoas na mesma casa
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setMembers(Math.max(1, members - 1))}
                      className="w-14 h-14 rounded-2xl border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand-blue hover:text-brand-blue hover:bg-blue-50 transition-all active:scale-95"
                    >
                      <Minus size={24} />
                    </button>

                    <div className="flex-grow h-14 flex items-center justify-center bg-gray-50 rounded-2xl border-2 border-gray-200 font-bold text-2xl text-slate-900">
                      {members}
                    </div>

                    <button
                      onClick={() => setMembers(members + 1)}
                      className="w-14 h-14 rounded-2xl border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand-blue hover:text-brand-blue hover:bg-blue-50 transition-all active:scale-95"
                    >
                      <Plus size={24} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Conte adultos, idosos e crianças.</p>
                </div>
              </div>
            </div>

            <AdSlot id="Content1" label="Oferta Exclusiva" />
          </div>

          {/* RIGHT COLUMN: RESULTS */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Result Card */}
            <div className={`rounded-3xl p-1 transition-all duration-500 ${showResult ? 'bg-gradient-to-br from-brand-blue to-cyan-500 shadow-xl' : 'bg-gray-200'}`}>
              <div className="bg-white rounded-[22px] p-6 md:p-8 h-full">

                <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-1">Resultado da Análise</h3>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                    {perCapita.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                  <span className="text-sm font-medium text-slate-500 mb-2">por pessoa</span>
                </div>

                {/* Visual Bar (Thermometer) */}
                <div className="relative h-4 bg-gray-100 rounded-full mb-8 overflow-hidden">
                  {/* Markers */}
                  <div className="absolute top-0 bottom-0 w-0.5 bg-white z-10" style={{ left: '20%' }} title="Limite Bolsa Família"></div>
                  <div className="absolute top-0 bottom-0 w-0.5 bg-white z-10" style={{ left: '50%' }} title="Limite Baixa Renda"></div>

                  {/* Gradient Fill */}
                  <div
                    className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ${perCapita <= LIMIT_BOLSA_FAMILIA ? 'bg-green-500' :
                        perCapita <= LIMIT_TARIFA ? 'bg-yellow-400' : 'bg-red-400'
                      }`}
                    style={{ width: showResult ? `${Math.min((perCapita / 800) * 100, 100)}%` : '0%' }}
                  ></div>
                </div>

                {/* Benefits Status Grid */}
                <div className="grid gap-3">

                  {/* Bolsa Família */}
                  <div className={`flex items-center justify-between p-4 rounded-xl border-l-4 transition-colors ${getStatusColor(LIMIT_BOLSA_FAMILIA) === 'green' ? 'bg-green-50 border-green-500' : 'bg-gray-50 border-gray-300 opacity-70'
                    }`}>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${getStatusColor(LIMIT_BOLSA_FAMILIA) === 'green' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'}`}>
                        {getStatusColor(LIMIT_BOLSA_FAMILIA) === 'green' ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Bolsa Família</h4>
                        <p className="text-xs text-slate-500">Renda até R$ 218,00</p>
                      </div>
                    </div>
                    {getStatusColor(LIMIT_BOLSA_FAMILIA) === 'green' && (
                      <span className="text-green-700 font-bold text-sm bg-white px-3 py-1 rounded-full shadow-sm">Aprovado</span>
                    )}
                  </div>

                  {/* Tarifa Social */}
                  <div className={`flex items-center justify-between p-4 rounded-xl border-l-4 transition-colors ${getStatusColor(LIMIT_TARIFA) === 'green' ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-300 opacity-70'
                    }`}>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${getStatusColor(LIMIT_TARIFA) === 'green' ? 'bg-blue-100 text-blue-700' : 'bg-gray-200 text-gray-500'}`}>
                        {getStatusColor(LIMIT_TARIFA) === 'green' ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Tarifa Social (Luz)</h4>
                        <p className="text-xs text-slate-500">Renda até R$ {LIMIT_TARIFA.toFixed(0)},00</p>
                      </div>
                    </div>
                    {getStatusColor(LIMIT_TARIFA) === 'green' && (
                      <span className="text-blue-700 font-bold text-sm bg-white px-3 py-1 rounded-full shadow-sm">Até 65% OFF</span>
                    )}
                  </div>

                  {/* BPC */}
                  <div className={`flex items-center justify-between p-4 rounded-xl border-l-4 transition-colors ${getStatusColor(LIMIT_BPC) === 'green' ? 'bg-purple-50 border-purple-500' : 'bg-gray-50 border-gray-300 opacity-70'
                    }`}>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${getStatusColor(LIMIT_BPC) === 'green' ? 'bg-purple-100 text-purple-700' : 'bg-gray-200 text-gray-500'}`}>
                        {getStatusColor(LIMIT_BPC) === 'green' ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">BPC / LOAS</h4>
                        <p className="text-xs text-slate-500">Para Idosos (65+) ou PcD</p>
                      </div>
                    </div>
                    {getStatusColor(LIMIT_BPC) === 'green' && (
                      <span className="text-purple-700 font-bold text-sm bg-white px-3 py-1 rounded-full shadow-sm">1 Salário Mínimo</span>
                    )}
                  </div>

                </div>

                {showResult && perCapita <= LIMIT_BOLSA_FAMILIA && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="bg-green-600 rounded-xl p-4 text-white flex items-center justify-between shadow-lg shadow-green-600/20 cursor-pointer hover:bg-green-500 transition-colors" onClick={() => onNavigate('guide-bolsa')}>
                      <div>
                        <p className="text-xs font-bold text-green-200 uppercase mb-1">Próximo Passo</p>
                        <p className="font-bold text-lg">Como se cadastrar</p>
                      </div>
                      <div className="bg-white/20 p-2 rounded-lg">
                        <ArrowRight size={24} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 flex gap-3 items-start">
              <AlertCircle className="text-yellow-600 shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-yellow-800 leading-relaxed">
                <strong>Nota:</strong> O cálculo oficial do governo é feito no CRAS e pode considerar descontos (como gastos com remédios para BPC) ou outras fontes de renda. Esta ferramenta é uma estimativa.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12">
          <AdSlot id="Content2" label="Publicidade Rodapé" />
        </div>

      </div>
    </div>
  );
};
