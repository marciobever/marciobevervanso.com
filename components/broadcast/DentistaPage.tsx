import React, { useEffect } from 'react';
import { BroadcastLayout } from './BroadcastLayout';
import { Smile, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Quiz } from '../../types';

interface Props {
  onNavigate: (view: any) => void;
  onSimulate: (id: string) => void;
  quizzes?: Quiz[];
}

export const DentistaPage: React.FC<Props> = ({ onNavigate, onSimulate, quizzes }) => {
  // SEO Optimization
  useEffect(() => {
    document.title = "Dentista Gratuito SUS 2025: Implantes e Aparelhos | Brasil Sorridente";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Guia completo sobre o Brasil Sorridente 2025. Saiba como agendar dentista gratuito pelo SUS, quem tem prioridade e lista de tratamentos (canal, prótese, implante).";
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    } else {
      const m = document.createElement('meta');
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }

    const metaKeys = document.querySelector('meta[name="keywords"]');
    const keys = "dentista gratuito sus, brasil sorridente 2025, implante dentario gratuito, aparelho ortodontico sus, tratamento dentario gratuito, ubs dentista";
    if (metaKeys) {
      metaKeys.setAttribute('content', keys);
    } else {
      const m = document.createElement('meta');
      m.name = "keywords";
      m.content = keys;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <BroadcastLayout
      title="Dentista Gratuito pelo SUS: Quiz de Prioridade e Brasil Sorridente"
      subtitle="Saiba como conseguir tratamento odontológico gratuito, desde limpeza até implantes e aparelhos, através do programa Brasil Sorridente."
      quizId="6" // ID for Dentista Quiz
      quizzes={quizzes}
      onNavigate={onNavigate}
      quizTriggerLabel="Verificar Unidades Próximas"
    >
      <h2>O Programa Brasil Sorridente foi ampliado</h2>
      <p>
        Muitos brasileiros não sabem, mas o SUS oferece tratamento odontológico completo e gratuito. Em 2025, o programa Brasil Sorridente recebeu novos investimentos para credenciar clínicas particulares e ampliar o atendimento nas UBS (Postos de Saúde).
      </p>

      <h3>Tratamentos disponíveis gratuitamente</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-8">
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3">
            <CheckCircle2 className="text-brand-blue shrink-0" />
            <div>
               <strong className="block text-brand-dark">Básico</strong>
               <span className="text-sm text-gray-500">Limpeza, restaurações (obturações), extrações simples e aplicação de flúor.</span>
            </div>
         </div>
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3">
            <CheckCircle2 className="text-brand-blue shrink-0" />
            <div>
               <strong className="block text-brand-dark">Endodontia</strong>
               <span className="text-sm text-gray-500">Tratamento de canal e diagnósticos de polpa dentária.</span>
            </div>
         </div>
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3">
            <CheckCircle2 className="text-brand-blue shrink-0" />
            <div>
               <strong className="block text-brand-dark">Próteses</strong>
               <span className="text-sm text-gray-500">Dentaduras totais e parciais removíveis (pontes).</span>
            </div>
         </div>
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3">
            <CheckCircle2 className="text-brand-blue shrink-0" />
            <div>
               <strong className="block text-brand-dark">Especializados</strong>
               <span className="text-sm text-gray-500">Biopsias, cirurgias orais menores e tratamento de doenças da gengiva.</span>
            </div>
         </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl my-6 not-prose">
         <h4 className="flex items-center gap-2 text-yellow-800 font-bold text-lg mb-2">
            <AlertTriangle /> Quem tem prioridade?
         </h4>
         <p className="text-yellow-800 mb-0">
            Embora seja universal, o atendimento prioriza casos de dor aguda, infecções, gestantes (pré-natal odontológico é obrigatório no Bolsa Família) e idosos.
         </p>
      </div>

      <h3>Como conseguir atendimento?</h3>
      <ol>
         <li><strong>Cartão do SUS:</strong> Tenha em mãos seu Cartão Nacional de Saúde. Se não tiver, faça na hora no posto.</li>
         <li><strong>UBS mais próxima:</strong> Vá até a Unidade Básica de Saúde (Postinho) do seu bairro.</li>
         <li><strong>Triagem:</strong> Passe pela avaliação inicial. Se for um caso simples, é resolvido ali mesmo.</li>
         <li><strong>CEO (Centro de Especialidades):</strong> Se precisar de canal, cirurgia ou prótese, você será encaminhado ao CEO.</li>
      </ol>

      <p>
        Cuidar da saúde bucal é essencial e é um direito seu. Não deixe a dor aumentar. Procure o SUS hoje mesmo.
      </p>
    </BroadcastLayout>
  );
};