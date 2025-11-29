import React from 'react';
import { LATEST_NEWS } from '../constants';
import { ArrowRight, FileCheck, Users, AlertTriangle, Smartphone, MapPin, RefreshCw, CheckCircle2, FileText } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <div className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* CadÚnico Guide Section */}
          <div id="cadunico" className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-6">
                <div className="bg-brand-blue p-3 rounded-xl text-white shadow-lg shadow-brand-blue/20">
                  <FileCheck size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">O que é o CadÚnico?</h2>
                  <p className="text-sm text-slate-500">Cadastro Único para Programas Sociais</p>
                </div>
              </div>
              
              <div className="prose prose-slate max-w-none text-slate-600">
                <p className="mb-6 leading-relaxed">
                  O Cadastro Único (CadÚnico) é a principal porta de entrada para os benefícios sociais do Governo Federal. É através dele que o governo sabe quem são e como vivem as famílias de baixa renda no Brasil.
                </p>
                
                {/* Step 1: Registration */}
                <h3 className="text-lg font-bold text-slate-800 mb-4 bg-gray-50 p-2 rounded-lg border-l-4 border-brand-blue pl-4">
                  Passo 1: Primeira Inscrição
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-10">
                  <div className="flex gap-4 p-4 bg-white border border-gray-100 shadow-sm rounded-xl hover:border-brand-blue/30 transition-colors">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white font-bold shrink-0 text-sm">1</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Responsável Familiar</h4>
                      <p className="text-xs text-slate-500 mt-1">Uma pessoa da família (maior de 16 anos, preferencialmente mulher) deve ir ao posto.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-4 bg-white border border-gray-100 shadow-sm rounded-xl hover:border-brand-blue/30 transition-colors">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white font-bold shrink-0 text-sm">2</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Local de Cadastro</h4>
                      <p className="text-xs text-slate-500 mt-1">Procure o CRAS ou posto do CadÚnico da sua prefeitura.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-white border border-gray-100 shadow-sm rounded-xl hover:border-brand-blue/30 transition-colors">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white font-bold shrink-0 text-sm">3</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Entrevista</h4>
                      <p className="text-xs text-slate-500 mt-1">Responda sobre renda, despesas e moradia. Não minta, o governo cruza dados.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-white border border-gray-100 shadow-sm rounded-xl hover:border-brand-blue/30 transition-colors">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white font-bold shrink-0 text-sm">4</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Geração do NIS</h4>
                      <p className="text-xs text-slate-500 mt-1">Em até 48h, cada membro da família receberá um Número de Identificação Social.</p>
                    </div>
                  </div>
                </div>

                {/* Step 2: Updates & Maintenance */}
                <h3 className="text-lg font-bold text-slate-800 mt-8 mb-4 bg-gray-50 p-2 rounded-lg border-l-4 border-green-500 pl-4 flex items-center gap-2">
                   <RefreshCw size={20} className="text-green-600"/> Passo 2: Atualização e Consulta
                </h3>

                <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
                   {/* App Verification */}
                   <div className="bg-green-50 p-5 rounded-2xl border border-green-100">
                      <div className="flex items-center gap-2 mb-3">
                         <div className="p-2 bg-green-100 rounded-lg text-green-700"><Smartphone size={20} /></div>
                         <h4 className="font-bold text-green-900">Verificar Situação</h4>
                      </div>
                      <p className="text-sm text-green-800 mb-3">
                         Baixe o aplicativo <strong>Cadastro Único</strong>. Ao entrar com o Gov.br, verifique a cor da pendência:
                      </p>
                      <ul className="space-y-2 text-xs font-medium">
                         <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500"></span> <strong>Verde:</strong> Cadastro atualizado.</li>
                         <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-yellow-400"></span> <strong>Amarelo:</strong> Perto de vencer (Vá ao CRAS).</li>
                         <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500"></span> <strong>Vermelho:</strong> Excluído ou desatualizado.</li>
                      </ul>
                   </div>

                   {/* CRAS Update */}
                   <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100">
                      <div className="flex items-center gap-2 mb-3">
                         <div className="p-2 bg-orange-100 rounded-lg text-orange-700"><MapPin size={20} /></div>
                         <h4 className="font-bold text-orange-900">Atualizar Dados</h4>
                      </div>
                      <p className="text-sm text-orange-800 mb-3">
                         A atualização de dados (renda, endereço, escola) é <strong>apenas presencial</strong>.
                      </p>
                      <p className="text-xs text-orange-800 leading-relaxed">
                         Deve ser feita obrigatoriamente a cada <strong>2 anos</strong> ou sempre que houver mudança na família (nascimento, óbito, mudança de casa ou de escola das crianças).
                      </p>
                   </div>
                </div>

                {/* Documents List */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                   <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <FileText className="text-brand-blue" /> Documentos Obrigatórios para Atualização
                   </h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-700">
                      <div className="flex items-start gap-2">
                         <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                         <span>CPF ou Título de Eleitor (Responsável)</span>
                      </div>
                      <div className="flex items-start gap-2">
                         <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                         <span>Comprovante de Residência (Conta de luz/água recente)</span>
                      </div>
                      <div className="flex items-start gap-2">
                         <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                         <span>Carteira de Trabalho ou Holerite (Comprovante de Renda)</span>
                      </div>
                      <div className="flex items-start gap-2">
                         <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                         <span>Certidão de Nascimento ou Casamento (Todos os membros)</span>
                      </div>
                      <div className="flex items-start gap-2">
                         <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                         <span>Declaração Escolar (Crianças e Jovens)</span>
                      </div>
                      <div className="flex items-start gap-2">
                         <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                         <span>RG e CPF (Todos os membros da casa)</span>
                      </div>
                   </div>
                </div>

                <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex gap-3 items-start">
                  <AlertTriangle className="text-yellow-600 shrink-0 mt-0.5" size={20} />
                  <p className="text-xs md:text-sm text-yellow-800">
                    <strong>Atenção Famílias Unipessoais:</strong> Se você mora sozinho, o governo está realizando um pente-fino rigoroso. Você pode receber uma visita domiciliar para comprovar que não divide a casa com outros familiares. Mantenha seu endereço exato no cadastro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* News Sidebar */}
          <div id="noticias" className="lg:w-1/3">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Users size={20} className="text-brand-blue" />
              Últimas Atualizações
            </h3>
            
            <div className="space-y-4">
              {LATEST_NEWS.map((news) => (
                <article key={news.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-brand-blue/50 transition-colors cursor-pointer group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-brand-blue bg-blue-50 px-2 py-1 rounded">{news.tag}</span>
                    <span className="text-xs text-gray-400">{news.date}</span>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">{news.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-3">{news.summary}</p>
                </article>
              ))}
            </div>

            <button className="w-full mt-6 py-3 border-2 border-slate-200 text-slate-600 font-bold rounded-lg hover:border-brand-blue hover:text-brand-blue transition-colors flex items-center justify-center gap-2">
              Ver todas as notícias
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InfoSection;