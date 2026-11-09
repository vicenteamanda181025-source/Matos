import React, { useState } from 'react';

export const FloatingEquipment: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] lg:max-w-[720px] aspect-[4/3] lg:aspect-[16/12] flex items-center justify-center select-none"
      style={{ perspective: '1400px' }}
    >
      {/* Volumetric Blue Glow Atmospheric Field */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[580px] h-[400px] sm:h-[580px] bg-gradient-to-tr from-[#003BFF]/30 via-[#00B4D8]/25 to-transparent rounded-full blur-[100px] animate-pulse-lightning" />
        <div className="absolute top-1/3 right-1/4 w-[280px] h-[280px] bg-[#00E5FF]/20 rounded-full blur-[70px] pointer-events-none" />
      </div>

      {/* Dynamic Electric Lightning Arcs (SVG with filters) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z-5 overflow-visible"
        viewBox="0 0 700 550"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="lightningGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur1" />
            <feGaussianBlur stdDeviation="14" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="electricGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#00F0FF" />
            <stop offset="70%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#002277" />
          </linearGradient>
        </defs>

        {/* Orbiting energetic lightning loop */}
        <path
          d="M 120,240 Q 180,60 480,90 T 620,290 Q 580,480 320,500 T 100,340 Z"
          stroke="url(#electricGrad)"
          strokeWidth="2.5"
          filter="url(#lightningGlow)"
          strokeDasharray="90 280"
          className="animate-spin"
          style={{ animationDuration: '28s', transformOrigin: 'center' }}
        />

        {/* Jagged electric bolt 1 (top right) */}
        <path
          d="M 460,70 L 490,130 L 475,145 L 530,220 L 510,230 L 560,300"
          stroke="#00F0FF"
          strokeWidth="1.5"
          filter="url(#lightningGlow)"
          opacity="0.75"
          className="animate-pulse"
        />

        {/* Jagged electric bolt 2 (bottom left) */}
        <path
          d="M 180,440 L 150,380 L 165,370 L 120,290 L 140,280 L 95,220"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          filter="url(#lightningGlow)"
          opacity="0.8"
          className="animate-pulse"
        />
      </svg>

      {/* Main Anchor: Large Architectural Luxury Smart House */}
      <div
        className="relative z-10 w-[84%] sm:w-[80%] rounded-3xl overflow-hidden p-[1.5px] bg-gradient-to-br from-cyan-400/50 via-white/10 to-transparent shadow-[0_30px_80px_rgba(0,0,0,0.95)] border border-cyan-500/30 transition-transform duration-500 ease-out"
        style={{
          transform: `rotateY(${mousePos.x * 14}deg) rotateX(${-mousePos.y * 14}deg) translateZ(10px)`,
        }}
      >
        <div className="relative rounded-[22px] overflow-hidden aspect-[16/10] bg-[#0E1015]">
          <img
            src="/src/assets/images/hero_modern_house_solar_1794236269411.jpg"
            alt="Residência contemporânea com energia solar fotovoltaica e iluminação de alto padrão"
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent" />
          
          {/* Subtle architectural status strip */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00E5FF] animate-ping" />
              <span className="font-semibold text-white tracking-wide">Infraestrutura Integrada</span>
            </div>
            <span className="text-slate-400 font-mono text-[11px]">Alta Tensão & Automação</span>
          </div>
        </div>
      </div>

      {/* 3D FLOATING ELEMENT 1: Photovoltaic Solar Module (Top Right) */}
      <div
        className="absolute -top-3 -right-2 sm:right-2 z-20 w-[170px] sm:w-[220px] transition-transform duration-500 ease-out animate-float-solar"
        style={{
          transform: `translate3d(${mousePos.x * -24}px, ${mousePos.y * -24}px, 75px) rotate(8deg)`,
        }}
      >
        <div className="relative p-3 rounded-2xl bg-[#09101d]/90 border border-cyan-400/60 shadow-[0_20px_50px_rgba(0,140,255,0.4)] backdrop-blur-xl">
          {/* Solar Panel Cells Graphic */}
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#06152b] to-[#020712] p-1.5 border border-cyan-500/40">
            <div className="grid grid-cols-4 grid-rows-3 gap-1 aspect-[4/3] bg-cyan-950/60 p-1 rounded-lg">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#0d2e59] via-[#091f3d] to-[#051122] rounded-[3px] relative overflow-hidden group border border-cyan-400/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-300/15 to-transparent" />
                  <div className="absolute top-0 bottom-0 left-1/2 w-[0.5px] bg-cyan-300/50" />
                  <div className="absolute left-0 right-0 top-1/2 h-[0.5px] bg-cyan-300/50" />
                </div>
              ))}
            </div>
            {/* Gloss reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/20 to-transparent pointer-events-none" />
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] font-semibold text-cyan-300">
            <span>Módulo Fotovoltaico</span>
            <span className="text-white/60 font-mono text-[10px]">Tier 1</span>
          </div>
        </div>
      </div>

      {/* 3D FLOATING ELEMENT 2: Radiant LED Architectural Lamp (Top Left) */}
      <div
        className="absolute top-2 -left-3 sm:left-1 z-25 w-[130px] sm:w-[155px] transition-transform duration-500 ease-out animate-float-bulb"
        style={{
          transform: `translate3d(${mousePos.x * 30}px, ${mousePos.y * 30}px, 95px) rotate(-8deg)`,
        }}
      >
        <div className="relative p-3 rounded-3xl bg-[#0f1422]/90 border border-cyan-400/70 shadow-[0_0_40px_rgba(0,229,255,0.5)] backdrop-blur-xl flex flex-col items-center">
          <div className="relative w-20 h-24 flex items-center justify-center">
            {/* Luminous corona */}
            <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-white via-cyan-200 to-cyan-400 blur-[12px] opacity-85" />
            
            {/* Bulb SVG */}
            <svg viewBox="0 0 64 80" className="w-16 h-20 relative z-10 filter drop-shadow-[0_0_15px_rgba(0,229,255,0.9)]">
              <path
                d="M 32,8 C 20,8 12,18 12,28 C 12,38 20,44 22,50 L 42,50 C 44,44 52,38 52,28 C 52,18 44,8 32,8 Z"
                fill="url(#bulbGlass)"
                stroke="#E2F5FF"
                strokeWidth="1.5"
              />
              <path
                d="M 28,48 L 28,30 Q 32,22 36,30 L 36,48"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <rect x="23" y="52" width="18" height="4" rx="1.5" fill="#CBD5E1" />
              <rect x="24" y="58" width="16" height="4" rx="1.5" fill="#94A3B8" />
              <rect x="26" y="64" width="12" height="4" rx="1.5" fill="#64748B" />
              <path d="M 28,70 L 36,70 L 34,74 L 30,74 Z" fill="#334155" />

              <defs>
                <linearGradient id="bulbGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#E0F2FE" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0284C7" stopOpacity="0.45" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-[11px] font-bold text-white tracking-wide mt-1">Luminotécnica</span>
        </div>
      </div>

      {/* 3D FLOATING ELEMENT 3: DIN Rail Circuit Breaker QDC (Bottom Right) */}
      <div
        className="absolute -bottom-4 right-0 sm:right-3 z-25 w-[160px] sm:w-[190px] transition-transform duration-500 ease-out animate-float-breaker"
        style={{
          transform: `translate3d(${mousePos.x * -26}px, ${mousePos.y * -26}px, 85px) rotate(-5deg)`,
        }}
      >
        <div className="relative p-3 rounded-2xl bg-[#111724] border border-cyan-400/60 shadow-[0_20px_50px_rgba(0,102,255,0.45)] backdrop-blur-xl">
          <div className="bg-[#f8fafc] rounded-xl p-2.5 text-slate-800 shadow-inner border border-slate-300">
            <div className="flex justify-between items-center border-b border-slate-300 pb-1 mb-2">
              <span className="text-[9px] font-black uppercase text-blue-700 tracking-wider">MATOS PRO</span>
              <span className="text-[9px] font-bold text-slate-600 font-mono">2P C32 400V</span>
            </div>

            <div className="flex gap-2 justify-center my-2">
              <div className="w-6 h-10 bg-slate-200 rounded border border-slate-400 relative flex flex-col justify-start items-center p-0.5">
                <div className="w-5 h-4.5 bg-[#0066FF] rounded-sm shadow-md flex items-center justify-center">
                  <div className="w-2 h-1 bg-white rounded-[1px]" />
                </div>
                <span className="text-[8px] text-slate-700 font-bold mt-1">I-ON</span>
              </div>
              <div className="w-6 h-10 bg-slate-200 rounded border border-slate-400 relative flex flex-col justify-start items-center p-0.5">
                <div className="w-5 h-4.5 bg-[#0066FF] rounded-sm shadow-md flex items-center justify-center">
                  <div className="w-2 h-1 bg-white rounded-[1px]" />
                </div>
                <span className="text-[8px] text-slate-700 font-bold mt-1">I-ON</span>
              </div>
            </div>

            <div className="flex justify-around pt-1 border-t border-slate-300 text-[9px] text-slate-500 font-mono font-bold">
              <span>[ 1 ]</span>
              <span>[ 3 ]</span>
            </div>
          </div>
          <div className="mt-2 text-center text-[11px] text-cyan-300 font-bold tracking-wide">
            Proteção QDC NBR 5410
          </div>
        </div>
      </div>

      {/* 3D FLOATING ELEMENT 4: Power Plug with Glowing Electric Arc (Bottom Left) */}
      <div
        className="absolute -bottom-6 left-2 sm:left-6 z-20 w-[140px] sm:w-[170px] transition-transform duration-500 ease-out animate-float-plug"
        style={{
          transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 60px) rotate(14deg)`,
        }}
      >
        <div className="relative p-3 rounded-2xl bg-[#091120]/95 border border-cyan-400/50 shadow-[0_15px_40px_rgba(0,220,255,0.3)] backdrop-blur-xl flex items-center gap-2.5">
          <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center bg-cyan-950/70 rounded-xl border border-cyan-500/40">
            <svg viewBox="0 0 40 40" className="w-9 h-9">
              <rect x="12" y="14" width="16" height="18" rx="3" fill="#0F172A" stroke="#00E5FF" strokeWidth="1.2" />
              <rect x="14" y="5" width="3" height="9" rx="1" fill="#FACC15" />
              <rect x="23" y="5" width="3" height="9" rx="1" fill="#FACC15" />
              <rect x="18.5" y="3" width="3" height="11" rx="1" fill="#FACC15" />
              <path
                d="M 12,8 Q 18,1 25,6"
                stroke="#00F0FF"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
                filter="drop-shadow(0 0 4px #00F0FF)"
              />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-bold text-white">Instalações</span>
            <span className="text-[10px] text-cyan-300 font-mono">Padrão ABNT</span>
          </div>
        </div>
      </div>
    </div>
  );
};
