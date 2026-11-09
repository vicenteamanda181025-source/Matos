import React from 'react';
import { ArrowUpRight, Zap, Shield, Cpu, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/initialData';

interface AboutProps {
  onOpenQuote: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuote }) => {
  return (
    <section id="sobre" className="relative py-28 lg:py-40 bg-[#070709] border-t border-b border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#0055FF]/10 via-[#00F0FF]/5 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Lead */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-4">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span>Sobre a {COMPANY_INFO.brandShort}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Excelência em soluções elétricas de alto padrão
          </h2>
        </div>

        {/* 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Integrated Engineering Photography (Col 6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500/20 via-white/[0.04] to-transparent p-[1px] shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
              <div className="relative rounded-[23px] overflow-hidden aspect-[4/3] bg-[#0E1015]">
                <img
                  src="/src/assets/images/about_electrician_panel_1794236270109.jpg"
                  alt="Engenheiro elétrico da Matos Soluções Elétricas inspecionando quadro de distribuição técnica"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Clean unboxed proof mark */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="font-bold text-white tracking-wide">Precisão & Acabamento</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">Conformidade NR-10</span>
                </div>
              </div>
            </div>

            {/* Subtle electric blue accent line */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column: Editorial Narrative & Competencies (Col 6) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6">
              A <strong className="text-white font-medium">Matos Soluções Elétricas</strong> atua no desenvolvimento, execução e modernização de infraestruturas elétricas complexas, sistemas solares fotovoltaicos e automação para residências de alto padrão e comércios.
            </p>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed mb-10">
              Com foco total na eliminação de riscos de curto-circuito, sobreaquecimento e desperdício de energia, aliamos engenharia avançada, pontualidade rigorosa e atendimento transparente em cada etapa da sua obra.
            </p>

            {/* 4 Architectural Competencies (Spacious, No Small Toy Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-8 border-t border-white/[0.08] mb-10">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold block mb-1">01</span>
                <h3 className="text-sm font-bold text-white mb-1.5">Qualidade & Segurança</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Projetos e montagens rigorosamente alinhados com as normas ABNT NBR 5410 e NR-10.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold block mb-1">02</span>
                <h3 className="text-sm font-bold text-white mb-1.5">Tecnologia de Ponta</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Instrumentos de medição digital, câmeras térmicas e componentes homologados.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold block mb-1">03</span>
                <h3 className="text-sm font-bold text-white mb-1.5">Projetos Personalizados</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dimensionamento customizado para cada perfil arquitetônico e necessidade energética.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold block mb-1">04</span>
                <h3 className="text-sm font-bold text-white mb-1.5">Compromisso em Detalhes</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Organização impecável de cabos, identificação clara de circuitos e pós-obra limpo.
                </p>
              </div>
            </div>

            {/* Link to Contact */}
            <div className="flex items-center gap-6">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group"
              >
                <span>Fale com nossos engenheiros</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
