import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/initialData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <section id="servicos" className="py-28 lg:py-40 bg-[#050505] relative overflow-hidden">
      {/* Background subtle radial lighting */}
      <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#0055FF]/10 via-[#00F0FF]/5 to-transparent blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-4">
              <span className="w-8 h-[1px] bg-cyan-400" />
              <span>Disciplinas de Engenharia</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
              Soluções completas para seu projeto
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Atuação de ponta a ponta: do cálculo luminotécnico e montagem de quadros à homologação solar e automação integrada.
          </p>
        </div>

        {/* Elegant Service Tabs Selector - Clean, Spacious, Not App-like */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar border-b border-white/[0.08]">
          {SERVICES_DATA.map((service, index) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`py-3 px-5 text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer flex items-center gap-2.5 rounded-lg ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 shadow-[0_0_20px_rgba(0,180,255,0.2)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? 'text-cyan-400' : 'text-slate-600'}`}>
                  0{index + 1}
                </span>
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Large Cinematic Feature Block for the Active Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#090B0E] border border-white/[0.08] rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Subtle electric circuit glow in background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-5" />

          {/* Left Column: Big Panoramic Image (Col 7) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#111] border border-white/10 shadow-xl">
              <img
                src={activeService.image}
                alt={activeService.title}
                key={activeService.id}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold text-white tracking-wide">
                  {activeService.subtitle}
                </span>
                <span className="text-cyan-400 font-mono text-[11px]">
                  NBR 5410 & Homologado
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Engineering Narrative & Deliverables (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest mb-2">
              Disciplina Técnica
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              {activeService.title}
            </h3>

            <p className="text-sm font-medium text-cyan-400/90 mb-5">
              {activeService.subtitle}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed font-light mb-8">
              {activeService.description}
            </p>

            {/* Technical Checklist */}
            <div className="space-y-3 mb-10 pt-6 border-t border-white/[0.08]">
              {activeService.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-cyan-400" />
                  </div>
                  <span className="leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>

            {/* Direct Action */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => onOpenQuote(activeService.title)}
                className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:shadow-[0_0_35px_rgba(0,229,255,0.55)] flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <span>Solicitar Orçamento</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
