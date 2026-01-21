import React, { useState, useEffect } from 'react';
import { MapPin, Search, ChevronRight, AlertCircle, Building2, Car, Home, Wallet, Info } from 'lucide-react';
import { AdSlot } from '../AdSlot';
import { ViewState } from '../../types';

interface StateProgram {
  id: string;
  state: string;
  uf: string;
  title: string;
  category: 'Habitação' | 'Renda' | 'Transporte' | 'Saúde' | 'Educação';
  status: 'Aberto' | 'Encerrado' | 'Contínuo';
  description: string;
  link?: string; // Link externo ou interno
  internalRoute?: ViewState;
}

// Dados simulados de programas estaduais reais
const REGIONAL_PROGRAMS: StateProgram[] = [
  {
    id: 'cnh-pa',
    state: 'Pará',
    uf: 'PA',
    title: "CNH Pai D'égua",
    category: 'Transporte',
    status: 'Aberto',
    description: 'Emissão gratuita de CNH para jovens de baixa renda. Inscrições abertas por regiões.',
    internalRoute: 'landing-cnh'
  },
  {
    id: 'maes-go',
    state: 'Goiás',
    uf: 'GO',
    title: 'Mães de Goiás',
    category: 'Renda',
    status: 'Contínuo',
    description: 'Auxílio financeiro mensal de R$ 250,00 para mães com filhos de 0 a 6 anos em vulnerabilidade.',
    link: 'https://www.social.go.gov.br/'
  },
  {
    id: 'vale-gas-sp',
    state: 'São Paulo',
    uf: 'SP',
    title: 'Vale Gás Paulista',
    category: 'Renda',
    status: 'Contínuo',
    description: 'Benefício de R$ 300,00 (pago em 3 parcelas) para compra de botijão de gás.',
    link: 'https://www.bolsadopovo.sp.gov.br/'
  },
  {
    id: 'aluguel-rj',
    state: 'Rio de Janeiro',
    uf: 'RJ',
    title: 'Aluguel Social',
    category: 'Habitação',
    status: 'Contínuo',
    description: 'Auxílio para famílias desabrigadas por calamidades públicas no estado.',
    link: 'https://www.rj.gov.br/'
  },
  {
    id: 'devolve-icms-rs',
    state: 'Rio Grande do Sul',
    uf: 'RS',
    title: 'Devolve ICMS',
    category: 'Renda',
    status: 'Contínuo',
    description: 'Devolução de parte do imposto para famílias do CadÚnico (Cartão Cidadão).',
    link: 'https://www.devolveicms.rs.gov.br/'
  },
  {
    id: 'cnh-social-es',
    state: 'Espírito Santo',
    uf: 'ES',
    title: 'CNH Social ES',
    category: 'Transporte',
    status: 'Encerrado',
    description: 'Programa encerrado para 2025. Previsão de novo edital em Março de 2026.',
    internalRoute: 'landing-cnh'
  },
  {
    id: 'chapeu-palha-pe',
    state: 'Pernambuco',
    uf: 'PE',
    title: 'Chapéu de Palha',
    category: 'Renda',
    status: 'Aberto',
    description: 'Apoio à trabalhadores da cana-de-açúcar e pesca artesanal na entressafra.',
    link: 'https://www.pe.gov.br/'
  },
  {
    id: 'cnh-social-am',
    state: 'Amazonas',
    uf: 'AM',
    title: 'CNH Social AM',
    category: 'Transporte',
    status: 'Aberto',
    description: 'Acesso gratuito à primeira habilitação para residentes de Manaus e interior.',
    internalRoute: 'landing-cnh'
  }
];

const ESTADOS = [
  { uf: 'AC', name: 'Acre' }, { uf: 'AL', name: 'Alagoas' }, { uf: 'AP', name: 'Amapá' },
  { uf: 'AM', name: 'Amazonas' }, { uf: 'BA', name: 'Bahia' }, { uf: 'CE', name: 'Ceará' },
  { uf: 'DF', name: 'Distrito Federal' }, { uf: 'ES', name: 'Espírito Santo' }, { uf: 'GO', name: 'Goiás' },
  { uf: 'MA', name: 'Maranhão' }, { uf: 'MT', name: 'Mato Grosso' }, { uf: 'MS', name: 'Mato Grosso do Sul' },
  { uf: 'MG', name: 'Minas Gerais' }, { uf: 'PA', name: 'Pará' }, { uf: 'PB', name: 'Paraíba' },
  { uf: 'PR', name: 'Paraná' }, { uf: 'PE', name: 'Pernambuco' }, { uf: 'PI', name: 'Piauí' },
  { uf: 'RJ', name: 'Rio de Janeiro' }, { uf: 'RN', name: 'Rio Grande do Norte' }, { uf: 'RS', name: 'Rio Grande do Sul' },
  { uf: 'RO', name: 'Rondônia' }, { uf: 'RR', name: 'Roraima' }, { uf: 'SC', name: 'Santa Catarina' },
  { uf: 'SP', name: 'São Paulo' }, { uf: 'SE', name: 'Sergipe' }, { uf: 'TO', name: 'Tocantins' }
];

interface Props {
  onNavigate: (view: ViewState) => void;
}

export const BenefitsByStatePage: React.FC<Props> = ({ onNavigate }) => {
  const [selectedUF, setSelectedUF] = useState<string>('');

  useEffect(() => {
    document.title = "Benefícios por Estado: Programas Sociais da sua Região | Guia 2026";
    window.scrollTo(0, 0);
  }, []);

  const filteredPrograms = selectedUF
    ? REGIONAL_PROGRAMS.filter(p => p.uf === selectedUF)
    : REGIONAL_PROGRAMS;

  const getIcon = (cat: string) => {
    switch (cat) {
      case 'Transporte': return <Car size={20} />;
      case 'Habitação': return <Home size={20} />;
      case 'Renda': return <Wallet size={20} />;
      default: return <Building2 size={20} />;
    }
  };

  const handleProgramClick = (prog: StateProgram) => {
    if (prog.internalRoute) {
      onNavigate(prog.internalRoute);
    } else if (prog.link) {
      window.open(prog.link, '_blank');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">

        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-4 text-brand-blue border border-gray-100">
            <MapPin size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Benefícios por Estado
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Além do Bolsa Família, seu estado pode oferecer programas exclusivos como CNH Social, Vale Gás estadual e Aluguel Social. Selecione sua região abaixo.
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-8 max-w-3xl mx-auto sticky top-24 z-20">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Selecione seu Estado (UF)
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={selectedUF}
              onChange={(e) => setSelectedUF(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none appearance-none font-bold text-slate-700 transition-all cursor-pointer"
            >
              <option value="">Ver Destaques Nacionais</option>
              {ESTADOS.map(est => (
                <option key={est.uf} value={est.uf}>{est.name} ({est.uf})</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronRight className="rotate-90 text-gray-400" size={16} />
            </div>
          </div>
        </div>

        {/* Ad Strategic Placement: Between Filter and Results (High Attention Area) */}
        <div className="mb-8">
          <AdSlot id="Content1" label="Oportunidades Regionais" />
        </div>

        {/* Results Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-6 bg-brand-blue rounded-full"></div>
            <h2 className="text-xl font-bold text-slate-900">
              {selectedUF ? `Programas em ${ESTADOS.find(e => e.uf === selectedUF)?.name}` : 'Programas Estaduais em Destaque'}
            </h2>
          </div>

          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPrograms.map((prog) => (
                <div
                  key={prog.id}
                  onClick={() => handleProgramClick(prog)}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-blue/50 transition-all cursor-pointer group relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center">
                        {getIcon(prog.category)}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg group-hover:text-brand-blue transition-colors">
                          {prog.title}
                        </h3>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                          {prog.state} • {prog.category}
                        </span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${prog.status === 'Aberto' ? 'bg-green-100 text-green-700' :
                        prog.status === 'Encerrado' ? 'bg-red-100 text-red-700' :
                          'bg-blue-100 text-blue-700'
                      }`}>
                      {prog.status}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {prog.description}
                  </p>

                  <div className="flex items-center text-brand-blue font-bold text-sm gap-1 group-hover:gap-2 transition-all">
                    Verificar requisitos <ChevronRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <Info size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Nenhum programa específico encontrado</h3>
              <p className="text-slate-500 max-w-md mx-auto mb-6">
                No momento, não temos registros de programas estaduais exclusivos cadastrados para <strong>{ESTADOS.find(e => e.uf === selectedUF)?.name}</strong> em nossa base.
              </p>
              <div className="bg-blue-50 p-4 rounded-xl text-left max-w-lg mx-auto">
                <p className="text-sm text-blue-800 font-bold mb-1 flex items-center gap-2">
                  <Wallet size={16} /> Mas lembre-se:
                </p>
                <p className="text-sm text-blue-700">
                  Você ainda tem direito a todos os programas federais como <strong>Bolsa Família</strong>, <strong>BPC/LOAS</strong>, <strong>Tarifa Social</strong> e <strong>Farmácia Popular</strong>.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 bg-slate-100 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Não achou o que procurava?</h3>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Use nossa busca inteligente para encontrar benefícios específicos pelo nome ou categoria.
          </p>
          <button
            onClick={() => onNavigate('all-benefits')}
            className="bg-brand-dark hover:bg-brand-blue text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
          >
            Ver Lista Completa de Benefícios
          </button>
        </div>

        <div className="mt-8">
          <AdSlot id="Content2" label="Publicidade Rodapé" />
        </div>

      </div>
    </div>
  );
};