import React from 'react';
import { BarChart3, TrendingUp, Users, Clock, MousePointerClick, ExternalLink, Activity } from 'lucide-react';

const AnalyticsDashboard: React.FC = () => {
  // Mock Data to Simulate GA4 API Response
  const stats = [
    { label: 'Visitantes Hoje', value: '12,450', change: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Taxa de Rejeição', value: '34.2%', change: '-2.1%', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Tempo Médio', value: '2m 15s', change: '+0.5%', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Cliques Quiz', value: '3,892', change: '+8.4%', icon: MousePointerClick, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  const topPages = [
    { path: '/quiz/bolsa-familia', views: '4,200', ctr: '15%' },
    { path: '/guia-bolsa-familia', views: '3,150', ctr: '12%' },
    { path: '/calendario-2025', views: '2,800', ctr: '8%' },
    { path: '/quiz/bpc-loas', views: '1,900', ctr: '14%' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen p-8">
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <BarChart3 className="text-brand-blue" /> Painel de Monitoramento
            </h1>
            <p className="text-slate-500 text-sm mt-1">Status: <span className="font-semibold text-orange-600">Simulação (Mock Data)</span></p>
          </div>
          
          <div className="flex gap-2">
            <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border border-green-200">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
               Coleta GA4 Ativa
            </span>
            <a 
              href="https://analytics.google.com/analytics/web/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-blue hover:bg-brand-hover text-white px-4 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors shadow-sm"
            >
              Acessar Dados Reais <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Integration Note */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8 flex items-start gap-3">
           <Activity className="text-brand-blue shrink-0 mt-0.5" size={20} />
           <div className="text-sm text-blue-900">
              <p className="font-bold mb-1">Como integrar dados reais aqui?</p>
              <p>
                 Atualmente, o site está <strong>enviando</strong> dados corretamente para o Google Analytics 4.
                 Para <strong>exibir</strong> esses dados numéricos aqui neste painel (ao invés dos números fictícios abaixo), 
                 é necessário conectar uma API de Backend (Node.js/Python) usando a <em>Google Analytics Data API</em>. 
                 Por questões de segurança, chaves de leitura de API não podem ficar no código do Frontend.
              </p>
           </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                  <stat.icon size={20} />
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-lg ${stat.change.startsWith('+') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Chart Area (Mock Visual) */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-slate-900 mb-6">Tráfego Semanal (Estimado)</h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="w-full bg-blue-50 rounded-t-lg relative group">
                  <div 
                    className="absolute bottom-0 w-full bg-brand-blue rounded-t-lg transition-all duration-500 group-hover:bg-brand-hover"
                    style={{ height: `${h}%` }}
                  ></div>
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity">
                    {h * 100} views
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-gray-400 font-medium">
              <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sab</span><span>Dom</span>
            </div>
          </div>

          {/* Top Pages List */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-slate-900 mb-4">Páginas Mais Acessadas</h3>
            <div className="space-y-4">
              {topPages.map((page, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-default">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-300 font-bold text-sm">#{idx + 1}</span>
                    <div>
                       <p className="text-sm font-bold text-slate-800">{page.path}</p>
                       <p className="text-xs text-gray-400">CTR Estimado: {page.ctr}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-brand-blue">{page.views}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-sm text-brand-medium border border-gray-200 py-2 rounded-lg hover:border-brand-blue hover:text-brand-blue transition-colors">
              Ver relatório completo no GA4
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;