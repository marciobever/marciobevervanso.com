import React, { useEffect } from 'react';
import { AdSlot } from '../AdSlot';
import { Accessibility, FileText, DollarSign, XCircle, CheckCircle2 } from 'lucide-react';
import { SchemaMarkup } from '../seo/SchemaMarkup';

const BPCGuide: React.FC = () => {
  // SEO Optimization
  useEffect(() => {
    document.title = "BPC LOAS 2025: Guia Completo, Valor e Perícia | Idosos e PcD";

    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Entenda as regras do BPC/LOAS em 2025. Saiba quem tem direito, valor atualizado, como passar na perícia médica e requisitos de renda per capita familiar.";
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    } else {
      const m = document.createElement('meta');
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }

    const metaKeys = document.querySelector('meta[name="keywords"]');
    const keys = "bpc loas 2025, benefício prestação continuada, bpc idoso, bpc deficiente, valor bpc 2025, consulta bpc, inss bpc";
    if (metaKeys) {
      metaKeys.setAttribute('content', keys);
    } else {
      const m = document.createElement('meta');
      m.name = "keywords";
      m.content = keys;
      document.head.appendChild(m);
    }
  }, []);

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Guia Oficial BPC/LOAS 2025: Requisitos e Valores",
      "description": "Guia completo sobre como solicitar o Benefício de Prestação Continuada (BPC/LOAS) para idosos e pessoas com deficiência.",
      "author": {
        "@type": "Person",
        "name": "Guia Social"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Guia Social Brasil"
      },
      "datePublished": "2024-11-28",
      "dateModified": new Date().toISOString().split('T')[0]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quem tem direito ao BPC/LOAS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Têm direito idosos com 65 anos ou mais e pessoas com deficiência de qualquer idade que comprovem impedimentos de longo prazo, desde que a renda familiar per capita seja igual ou inferior a 1/4 do salário mínimo."
          }
        },
        {
          "@type": "Question",
          "name": "O BPC paga 13º salário?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. O Benefício de Prestação Continuada (BPC) é um benefício assistencial e, por lei, não contempla o pagamento de 13º salário nem deixa pensão por morte."
          }
        }
      ]
    }
  ];

  return (
    <div className="bg-brand-light min-h-screen py-10">
      <SchemaMarkup data={schemaData} />
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">

        <div className="mb-8">
          <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-2 block">Benefício de Prestação Continuada</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4">Guia BPC/LOAS: Como solicitar sem contribuir</h1>
          <p className="text-lg text-brand-medium">Um salário mínimo garantido para idosos e pessoas com deficiência de baixa renda.</p>
        </div>

        <AdSlot id="Content4" label="Publicidade Topo" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">

          <div className="lg:col-span-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 prose prose-slate max-w-none">

            <p className="lead">
              O BPC (Benefício de Prestação Continuada) não é aposentadoria. Ele é um benefício assistencial pago pelo Governo Federal, via INSS, para quem nunca contribuiu ou contribuiu pouco. O valor é de <strong>um salário mínimo mensal</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="bg-green-50 p-5 rounded-xl border border-green-100">
                <div className="flex items-center gap-2 font-bold text-green-800 mb-2">
                  <CheckCircle2 size={20} /> O que o BPC oferece
                </div>
                <ul className="text-sm text-green-700 m-0 pl-4 space-y-1">
                  <li>1 Salário Mínimo mensal.</li>
                  <li>Não exige contribuição ao INSS.</li>
                  <li>Pode ser solicitado a qualquer momento.</li>
                </ul>
              </div>
              <div className="bg-red-50 p-5 rounded-xl border border-red-100">
                <div className="flex items-center gap-2 font-bold text-red-800 mb-2">
                  <XCircle size={20} /> O que NÃO oferece
                </div>
                <ul className="text-sm text-red-700 m-0 pl-4 space-y-1">
                  <li>Não paga 13º Salário.</li>
                  <li>Não deixa pensão por morte.</li>
                  <li>Não conta como tempo de aposentadoria.</li>
                </ul>
              </div>
            </div>

            <h2>Requisito de Renda</h2>
            <p>
              Este é o ponto que mais reprova pedidos. A renda por pessoa da família deve ser igual ou menor que <strong>1/4 do salário mínimo</strong> (aprox. R$ 353,00 em 2024).
            </p>
            <p>
              <em>Dica de Ouro:</em> Gastos com medicamentos, fraldas e alimentação especial que não são fornecidos pelo SUS podem ser deduzidos do cálculo da renda, facilitando a aprovação.
            </p>

            <AdSlot id="Content5" label="Oferta INSS" />

            <h2>O Processo de Perícia (Para PcD)</h2>
            <p>
              Para pessoas com deficiência, o INSS realiza duas avaliações:
            </p>
            <ol>
              <li><strong>Perícia Médica:</strong> Avalia as condições físicas/mentais e laudos.</li>
              <li><strong>Avaliação Social:</strong> Assistente social avalia as condições de moradia, barreiras sociais e gastos da família.</li>
            </ol>
            <p>É fundamental levar laudos médicos atualizados, receitas e comprovantes de gastos médicos no dia da perícia.</p>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-brand-dark text-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <FileText /> Documentos
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-brand-blue" /> CPF de todos da casa</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-brand-blue" /> CadÚnico atualizado</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-brand-blue" /> Comprovante de Renda</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-brand-blue" /> Laudos Médicos (PcD)</li>
              </ul>
            </div>
            <AdSlot id="Content2" label="Publicidade Lateral" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default BPCGuide;