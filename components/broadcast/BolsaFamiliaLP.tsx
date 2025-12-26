
import React, { useEffect, useState } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { Wallet, Calendar, CheckCircle2, AlertTriangle, FileText, Info, ShieldCheck, Search, Users, Landmark } from 'lucide-react';
import { Quiz, ViewState } from '../../types';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { CredspotBanner, SuperSimBanner } from '../ActionPayBanners';

interface Props {
  onNavigate: (view: ViewState) => void;
  quizzes?: Quiz[];
}

export const BolsaFamiliaLP: React.FC<Props> = ({ onNavigate, quizzes }) => {
  const [selectedNis, setSelectedNis] = useState<string>('1');

  useEffect(() => {
    document.title = "Informativo Bolsa Família 2026: Regras, Fiscalização e Acompanhamento Cadastral";
    window.scrollTo(0, 0);
  }, []);

  const calendar2026: Record<string, string[]> = {
    '1': ['19/Jan', '18/Fev', '18/Mar', '17/Abr', '18/Mai'],
    '2': ['20/Jan', '19/Fev', '19/Mar', '18/Abr', '19/Mai'],
    '3': ['21/Jan', '20/Fev', '20/Mar', '22/Abr', '22/Mai'],
    '4': ['22/Jan', '21/Fev', '21/Mar', '23/Abr', '23/Mai'],
    '5': ['23/Jan', '24/Fev', '24/Mar', '24/Abr', '24/Mai'],
    '6': ['26/Jan', '25/Fev', '25/Mar', '27/Abr', '25/Mai'],
    '7': ['27/Jan', '26/Fev', '26/Mar', '28/Abr', '26/Mai'],
    '8': ['28/Jan', '27/Fev', '27/Mar', '29/Abr', '29/Mai'],
    '9': ['29/Jan', '28/Fev', '28/Mar', '30/Abr', '30/Mai'],
    '0': ['30/Jan', '29/Fev', '31/Mar', '30/Abr', '31/Mai'],
  };

  return (
    <BroadcastLayout
      title="Bolsa Família 2026: Guia Informativo sobre Regras e Manutenção do Benefício"
      subtitle="Entenda as diretrizes para o acompanhamento do Cadastro Único, os processos de verificação de dados e as condicionalidades para a permanência no programa em 2026."
      onNavigate={onNavigate}
      quizId="2"
      quizzes={quizzes}
      updatedDate="Atualizado recentemente"
    >
      <SchemaMarkup data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Guia Completo Bolsa Família 2026",
        "description": "Artigo informativo detalhado sobre as regras, valores e processos de fiscalização do programa Bolsa Família para o ano de 2026.",
        "author": { "@type": "Organization", "name": "Guia Social Brasil" }
      }} />

      <section className="mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-6">1. Introdução ao Cenário do Bolsa Família em 2026</h2>
        <p className="text-lg leading-relaxed text-slate-700 mb-6">
          O Programa Bolsa Família consolida-se em 2026 como a principal ferramenta de transferência direta de renda e combate à vulnerabilidade social no Brasil. Instituído para garantir a segurança alimentar e o acesso a direitos básicos, o programa vai além do repasse financeiro, exigindo que as famílias beneficiárias mantenham um acompanhamento rigoroso de suas informações no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico).
        </p>
        <p className="text-lg leading-relaxed text-slate-700 mb-6">
          A importância do acompanhamento cadastral reside na necessidade de garantir que os recursos públicos cheguem, efetivamente, às parcelas da população que se enquadram nos critérios legais de renda. Em 2026, a ênfase governamental recai sobre a precisão dos dados, incentivando os cidadãos a realizarem atualizações proativas sempre que houver mudanças na estrutura familiar, como nascimento, óbito, alteração de endereço ou variação na renda mensal.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-6">2. Como funciona o sistema de concessão e pagamentos</h2>
        <p className="text-lg leading-relaxed text-slate-700 mb-6">
          O funcionamento do Bolsa Família é estruturado em três pilares fundamentais: a identificação via Cadastro Único, a verificação da renda familiar per capita e a operacionalização dos pagamentos pela Caixa Econômica Federal. O processo inicia-se obrigatoriamente com a inscrição da família no CadÚnico, realizada em postos de atendimento municipais, como o Centro de Referência de Assistência Social (CRAS).
        </p>
        <p className="text-lg leading-relaxed text-slate-700 mb-6">
          A elegibilidade é determinada pela renda familiar per capita, que é a soma de todos os rendimentos brutos da casa dividida pelo número de moradores. Segundo as diretrizes vigentes, podem ter acesso ao programa famílias com renda por pessoa compatível com as linhas de pobreza e extrema pobreza estabelecidas legalmente. Uma vez aprovada, a família recebe o benefício mensalmente, seguindo um fluxo de depósitos automatizados que podem ser acessados via aplicativo Caixa Tem ou cartões magnéticos específicos.
        </p>
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 my-8">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><Info size={20} className="text-brand-blue" /> Observação Importante</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            A inclusão no Cadastro Único não garante a entrada imediata no programa Bolsa Família, uma vez que a concessão depende da disponibilidade orçamentária do Governo Federal e da análise contínua de elegibilidade realizada pelos sistemas de assistência social.
          </p>
        </div>
      </section>

      <SuperSimBanner />

      <section className="mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-6">3. Atualizações e fiscalização em 2026</h2>
        <p className="text-lg leading-relaxed text-slate-700 mb-6">
          Para o ano de 2026, o Governo Federal aprimorou os mecanismos de fiscalização e cruzamento de dados para assegurar a transparência do programa. A fiscalização em 2026 utiliza tecnologias de integração entre diferentes bases públicas, como o Cadastro Nacional de Informações Sociais (CNIS), a Relação Anual de Informações Sociais (RAIS) e dados do eSocial.
        </p>
        <p className="text-lg leading-relaxed text-slate-700 mb-6">
          Esse processo de verificação digital busca identificar possíveis inconsistências entre a renda declarada no CadÚnico e os dados de emprego formal ou outros rendimentos registrados em nome dos beneficiários. De acordo com as orientações oficiais, essa fiscalização ocorre de forma preventiva e automatizada. Quando o sistema detecta uma divergência, o benefício pode ser encaminhado para um processo de revisão cadastral, onde o titular é convidado a prestar esclarecimentos no CRAS de sua região para evitar interrupções no recebimento.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-6">4. Principais motivos que podem gerar bloqueio ou suspensão</h2>
        <p className="text-lg leading-relaxed text-slate-700 mb-6">
          A manutenção do benefício depende do cumprimento das regras de permanência. Abaixo, listamos os fatores que, segundo os manuais de gestão do programa, podem resultar na suspensão temporária ou bloqueio do repasse:
        </p>
        <div className="space-y-6 not-prose">
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 flex gap-4 items-start">
            <div className="bg-slate-100 p-3 rounded-xl text-slate-600"><FileText /></div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Cadastro Desatualizado</h4>
              <p className="text-sm text-slate-600">A legislação exige a atualização dos dados a cada 24 meses. A ausência de revisão no prazo pode sinalizar ao sistema que a família não necessita mais do auxílio.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 flex gap-4 items-start">
            <div className="bg-slate-100 p-3 rounded-xl text-slate-600"><Landmark /></div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Renda Incompatível</h4>
              <p className="text-sm text-slate-600">Se a renda per capita superar os limites estabelecidos, a família pode ser desligada do programa ou inserida na Regra de Proteção, que permite o recebimento parcial por um período determinado.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 flex gap-4 items-start">
            <div className="bg-slate-100 p-3 rounded-xl text-slate-600"><ShieldCheck /></div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Descumprimento de Condicionalidades</h4>
              <p className="text-sm text-slate-600">O não cumprimento da frequência escolar mínima ou a ausência de acompanhamento vacinal e nutricional (pesagem) são causas frequentes de interrupção preventiva.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-6">5. O que fazer se o benefício for bloqueado</h2>
        <p className="text-lg leading-relaxed text-slate-700 mb-6">
          Caso o cidadão identifique que seu benefício não foi depositado ou apresenta status de bloqueio no aplicativo, é necessário seguir um protocolo padrão de regularização. O primeiro passo recomendado é a verificação do motivo específico através dos canais de consulta digital ou pelo telefone oficial do ministério.
        </p>
        <div className="bg-blue-50 border-l-4 border-brand-blue p-8 rounded-r-3xl my-8">
          <h4 className="text-brand-blue font-bold text-xl mb-4">Passo a passo para regularização:</h4>
          <ol className="list-decimal pl-5 space-y-4 text-slate-700 font-medium">
            <li>Agendar atendimento no CRAS ou unidade do CadÚnico do município.</li>
            <li>Apresentar documentos de todos os membros da família (RG, CPF, Certidões, Comprovante de Residência e de Matrícula Escolar).</li>
            <li>Informar detalhadamente qualquer mudança na renda ou composição do núcleo familiar.</li>
            <li>Aguardar o prazo de processamento do sistema federal, que pode levar de 30 a 90 dias dependendo da complexidade da revisão.</li>
          </ol>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-6">6. Estrutura de Valores do Bolsa Família</h2>
        <p className="text-lg leading-relaxed text-slate-700 mb-6">
          A composição dos valores repassados pelo Bolsa Família em 2026 é variável e depende diretamente das características de cada núcleo familiar. Existe um valor base garantido para as famílias elegíveis, sobre o qual podem ser somados benefícios adicionais conforme a legislação vigente e possíveis decretos atualizadores.
        </p>
        <p className="text-lg leading-relaxed text-slate-700 mb-6">
          Como referência, o programa costuma oferecer suplementos para famílias com crianças na primeira infância (até 6 anos), gestantes e jovens em idade escolar. É fundamental compreender que esses valores não são estáticos e podem ser reajustados ou alterados mediante decisões do Poder Executivo e disponibilidade de recursos no orçamento da seguridade social. Para saber o valor exato correspondente ao seu perfil, a consulta deve ser feita individualmente nos canais oficiais.
        </p>
      </section>

      <CredspotBanner />

      <section className="mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-6">7. Organização do Calendário de Pagamentos</h2>
        <p className="text-lg leading-relaxed text-slate-700 mb-6">
          A logística de pagamentos do Bolsa Família em 2026 segue o modelo escalonado por meio do Número de Identificação Social (NIS). Este sistema visa evitar aglomerações em agências bancárias e garantir que o fluxo de depósitos ocorra de maneira ordenada ao longo dos últimos dez dias úteis de cada mês.
        </p>
        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] my-10 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-20 blur-3xl"></div>
           <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6 text-center">Referência de Pagamento 2026</h3>
              <div className="flex flex-wrap gap-2 mb-8 justify-center">
                 {[1,2,3,4,5,6,7,8,9,0].map(n => (
                    <button 
                      key={n}
                      onClick={() => setSelectedNis(n.toString())}
                      className={`w-10 h-10 rounded-xl font-black transition-all border ${selectedNis === n.toString() ? 'bg-white text-brand-dark border-white scale-110' : 'bg-transparent border-slate-600 text-slate-400'}`}
                    >
                       {n}
                    </button>
                 ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                 {['Jan', 'Fev', 'Mar', 'Abr', 'Mai'].map((mes, i) => (
                   <div key={mes} className="bg-white/10 p-4 rounded-2xl text-center border border-white/5">
                      <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">{mes}</p>
                      <p className="text-lg font-black text-white">{calendar2026[selectedNis][i]}</p>
                   </div>
                 ))}
              </div>
              <p className="text-xs text-slate-400 mt-6 text-center italic">
                *Datas baseadas no padrão de repasses da Caixa Econômica Federal.
              </p>
           </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-6">8. Canais Oficiais de Consulta</h2>
        <p className="text-lg leading-relaxed text-slate-700 mb-6">
          Para garantir a segurança das informações e evitar a exposição a fraudes, os beneficiários devem utilizar exclusivamente os meios oficiais de comunicação com o governo. Atualmente, os canais de autoatendimento permitem verificar o status do benefício, o valor da parcela e a existência de possíveis mensagens de advertência ou convocação para o CRAS.
        </p>
        <ul className="space-y-4 text-slate-700">
          <li className="flex gap-3 items-center"><CheckCircle2 className="text-green-500" size={20} /> <strong>Aplicativo Bolsa Família:</strong> Disponível nas lojas oficiais de aplicativos para dispositivos móveis.</li>
          <li className="flex gap-3 items-center"><CheckCircle2 className="text-green-500" size={20} /> <strong>Aplicativo Caixa Tem:</strong> Ferramenta para movimentação financeira e consulta de extratos.</li>
          <li className="flex gap-3 items-center"><CheckCircle2 className="text-green-500" size={20} /> <strong>Atendimento Telefônico:</strong> Central de Atendimento 111 (Caixa) ou 121 (Ministério do Desenvolvimento Social).</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-6">9. Perguntas Frequentes (FAQ)</h2>
        <div className="space-y-8">
          <div>
            <h4 className="font-bold text-slate-900 text-xl mb-2">O recebimento de transferências via PIX interfere no Bolsa Família?</h4>
            <p className="text-slate-700 leading-relaxed">
              O recebimento esporádico de valores via PIX, como ajuda de familiares ou vendas pontuais de itens usados, geralmente não acarreta o cancelamento imediato. Entretanto, movimentações recorrentes de valores elevados podem ser captadas pelos sistemas de cruzamento de dados bancários, sugerindo uma renda superior à declarada no CadÚnico. Segundo orientações oficiais, é importante que a declaração de renda seja fiel à realidade financeira da família.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-xl mb-2">Trabalho temporário cancela o benefício?</h4>
            <p className="text-slate-700 leading-relaxed">
              Não necessariamente. O programa possui a chamada Regra de Proteção. Se um membro da família conseguir um emprego e a renda subir, a família pode permanecer no programa recebendo 50% do valor do benefício por até dois anos, desde que a renda por pessoa não ultrapasse meio salário mínimo.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-xl mb-2">Receber ajuda financeira de familiares conta como renda?</h4>
            <p className="text-slate-700 leading-relaxed">
              De acordo com as regras do Cadastro Único, toda forma de rendimento que contribui para o sustento da casa deve ser informada. Isso inclui não apenas salários formais, mas também pensões, aposentadorias e ajudas financeiras regulares. A transparência na entrevista do CRAS é o que garante a segurança jurídica do benefício.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-xl mb-2">É possível acumular o Bolsa Família com outros benefícios?</h4>
            <p className="text-slate-700 leading-relaxed">
              Sim, o Bolsa Família pode ser acumulado com outros programas sociais, como o Auxílio Gás, o Benefício de Prestação Continuada (BPC) — respeitadas as regras de cálculo de renda de cada um — e incentivos educacionais como o Pé-de-Meia para estudantes do ensino médio.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 pt-12 border-t border-slate-200">
        <h2 className="text-2xl font-black text-slate-900 mb-4">10. Aviso legal e fontes</h2>
        <div className="bg-slate-100 p-8 rounded-3xl text-sm text-slate-600 leading-relaxed">
          <p className="mb-4">
            <strong>Aviso Legal:</strong> Este conteúdo possui caráter meramente informativo e educacional. O portal marciobevervanso.com é um veículo independente e não possui qualquer vínculo oficial com o Governo Federal, com o Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome, ou com a Caixa Econômica Federal.
          </p>
          <p className="mb-4">
            As informações aqui contidas foram compiladas com base em dados públicos, manuais de gestão do programa e legislações vigentes (Lei nº 14.601/2023). Este artigo não substitui o atendimento presencial em órgãos oficiais, como o CRAS, nem as orientações fornecidas pelos canais de atendimento do Governo Federal.
          </p>
          <p>
            <strong>Fontes consultadas:</strong> Portal Gov.br, Site Oficial da Caixa Econômica Federal, Diário Oficial da União e manuais técnicos do Ministério do Desenvolvimento Social.
          </p>
        </div>
      </section>

    </BroadcastLayout>
  );
};
