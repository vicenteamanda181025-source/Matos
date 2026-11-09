import React from 'react';
import { ArrowUpRight, MessageCircle, ChevronDown } from 'lucide-react';
import { FloatingEquipment } from './FloatingEquipment';
import { COMPANY_INFO } from '../data/initialData';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const directWhatsAppUrl = `${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    'Olá! Gostaria de falar sobre um projeto de engenharia elétrica com a Matos Soluções Elétricas.'
  )}`;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 lg:pt-28 lg:pb-16 bg-[#050505] overflow-hidden"
    >
      {/* Background Architectural Grid & Subtle Electric Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111116_1px,transparent_1px),linear-gradient(to_bottom,#111116_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_25%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Atmospheric Top Radial Electric Aura */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#0051FF]/25 via-[#00E5FF]/15 to-transparent blur-[150px] pointer-events-none -z-10" />

      {/* Main Hero Body */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto z-10 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Impactful CTAs (Col 6 / 7) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center text-left">
            
            {/* Architectural Kicker */}
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-6">
              <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-400 rotate-45 shadow-[0_0_12px_#00E5FF]" />
              <span>Engenharia Elétrica & Automação de Alto Padrão</span>
            </div>

            {/* Main Headline - Massive, Refined Display Font */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08] text-balance mb-6">
              Energia, tecnologia e{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-white drop-shadow-[0_0_35px_rgba(0,180,255,0.45)]">
                soluções inteligentes
              </span>{' '}
              para seu projeto.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mb-10">
              Instalações elétricas, automação residencial e usinas solares desenvolvidas com rigor técnico, materiais homologados e compromisso com a segurança da sua edificação.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 rounded-xl hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_35px_rgba(0,229,255,0.4)] hover:shadow-[0_0_55px_rgba(0,229,255,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-3 cursor-pointer whitespace-nowrap"
              >
                <span>Solicitar Orçamento</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 text-xs sm:text-sm font-semibold tracking-wide text-slate-200 bg-[#0E1015] hover:bg-[#151922] border border-white/10 hover:border-cyan-500/40 rounded-xl transition-all hover:text-white flex items-center gap-2.5 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Atendimento WhatsApp</span>
              </a>
            </div>

            {/* Proof Metrics & Standards (Unboxed text with separators) */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-slate-400">
              <div>
                <span className="block text-white font-bold text-sm">NBR 5410 & NR-10</span>
                <span>Conformidade Técnica</span>
              </div>
              <span className="hidden sm:inline text-white/20">/</span>
              <div>
                <span className="block text-white font-bold text-sm">Alto Padrão</span>
                <span>Residencial & Comercial</span>
              </div>
              <span className="hidden sm:inline text-white/20">/</span>
              <div>
                <span className="block text-white font-bold text-sm">Garantia Formal</span>
                <span>Emissão de Laudos</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Floating Cinematic Visual Composition (Col 6 / 5) */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center items-center">
            <FloatingEquipment />
          </div>

        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="hidden lg:flex flex-col items-center justify-center text-slate-500 text-[11px] tracking-widest uppercase">
        <a href="#sobre" className="flex flex-col items-center gap-1.5 hover:text-cyan-400 transition-colors">
          <span>Explore a Matos</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </a>
      </div>
    </section>
  );
};
