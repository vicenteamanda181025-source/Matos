import React from 'react';
import { DIFFERENTIALS_DATA, COMPANY_INFO } from '../data/initialData';

export const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-28 lg:py-40 bg-[#050505] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-l from-amber-500/10 via-cyan-500/10 to-transparent blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-4">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span>Nossos Pilares de Engenharia</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Por que escolher a {COMPANY_INFO.brandShort}?
          </h2>
          <p className="text-base text-slate-300 font-light mt-4 max-w-2xl leading-relaxed">
            Metodologia estruturada, conformidade técnica com normas ABNT e garantia de segurança patrimonial para sua família e empresa.
          </p>
        </div>

        {/* 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Spacious Numbered Engineering Principles (Col 8) */}
          <div className="lg:col-span-8 space-y-8">
            {DIFFERENTIALS_DATA.map((diff, index) => (
              <div
                key={diff.id}
                className="group pb-8 border-b border-white/[0.08] last:border-none flex items-start gap-6 transition-all"
              >
                {/* Clean Editorial Index */}
                <div className="text-sm font-mono font-bold text-cyan-400 shrink-0 pt-0.5">
                  0{index + 1}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Accent - 3D Glowing Filament Lamp (Col 4) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
              {/* Volumetric Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/20 via-cyan-400/25 to-blue-600/10 blur-[80px] animate-pulse-lightning" />

              {/* Glowing Vintage Edison Lamp Graphic */}
              <div className="relative z-10 w-48 h-72 flex flex-col items-center justify-center animate-float-bulb">
                {/* Socket cap */}
                <div className="w-16 h-9 bg-gradient-to-r from-neutral-600 via-neutral-400 to-neutral-700 rounded-t-xl border-t border-white/40 shadow-lg relative z-20">
                  <div className="w-12 h-2.5 bg-neutral-800 mx-auto -mt-2 rounded-t" />
                </div>

                {/* Glass bulb with glowing filament inside */}
                <div className="relative w-44 h-56 -mt-1 rounded-b-[45px] rounded-t-[75px] bg-gradient-to-b from-black/50 via-amber-950/25 to-amber-900/35 border border-amber-400/50 backdrop-blur-md shadow-[0_0_60px_rgba(245,158,11,0.4)] flex items-center justify-center overflow-hidden">
                  <div className="absolute w-24 h-28 rounded-full bg-gradient-to-t from-amber-400 via-yellow-200 to-white blur-[16px] opacity-80" />

                  <svg viewBox="0 0 100 140" className="w-28 h-36 relative z-10">
                    <path
                      d="M 50,15 L 50,45 M 32,50 L 50,45 L 68,50 M 32,50 L 32,105 L 44,60 L 56,105 L 68,60 L 68,105"
                      stroke="#FFFDF5"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="drop-shadow(0 0 10px #F59E0B)"
                    />
                  </svg>

                  <div className="absolute top-5 left-5 w-4 h-20 bg-white/20 rounded-full blur-[1px] -rotate-12" />
                </div>

                <div className="mt-5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-300">
                  Eficiência & Confiabilidade
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
