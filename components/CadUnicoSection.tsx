
import React from 'react';
import { FileText, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';

interface CadUnicoSectionProps {
  onNavigate?: (view: ViewState) => void;
}

const CadUnicoSection: React.FC<CadUnicoSectionProps> = ({ onNavigate }) => {
  return (
    <section id="cadunico" className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-blue/20 text-blue-200 px-3 py-1 rounded-full text-xs font-bold border border-blue-400/30">
                <FileText size={14} /> Base de Dados Oficial
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Tudo começa no <span className="text-brand-blue bg-white px-2 rounded-lg">Cadastro Único</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                O CadÚnico é a porta de entrada para mais de 20 programas sociais. Manter seus dados atualizados é essencial para não perder benefícios.
              </p>
              
              <ul className="space-y-4 pt-2">
                {[
                  'Quem precisa: Famílias com renda de até 1/2 salário mínimo por pessoa.',
                  'Atualização: Obrigatória a cada 2 anos ou mudança de endereço/escola.',
                  'Onde fazer: No CRAS ou postos de atendimento do seu município.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onNavigate && onNavigate('guide-cadunico')}
                className="mt-4 bg-brand-blue hover:bg-brand-hover text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-brand-blue/20"
              >
                Passo a passo do CadÚnico <ArrowRight size={20} />
              </button>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl text-brand-dark">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <AlertTriangle className="text-orange-500" size={24} />
                  <h3 className="text-xl font-bold">Problemas Comuns</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                    <h4 className="font-bold text-red-900 text-sm">Benefício Bloqueado</h4>
                    <p className="text-red-700 text-xs mt-1">Geralmente por falta de atualização cadastral ou inconsistência de dados.</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-900 text-sm">Família Unipessoal</h4>
                    <p className="text-orange-700 text-xs mt-1">O governo está revisando cadastros de quem mora sozinho. Necessário comprovar.</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-brand-blue">
                    <h4 className="font-bold text-brand-blue text-sm">Renda Acima do Limite</h4>
                    <p className="text-blue-800 text-xs mt-1">Se a renda aumentar, você pode entrar na Regra de Proteção e receber 50%.</p>
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

export default CadUnicoSection;
