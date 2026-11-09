import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/initialData';

export const FloatingWhatsApp: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = `${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    'Olá! Gostaria de conversar com a equipe de engenharia da Matos Soluções Elétricas.'
  )}`;

  return (
    <aside
      aria-label="Atendimento no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-[#0C1210]/95 hover:bg-[#101a17] border border-emerald-500/40 hover:border-emerald-400 text-white shadow-[0_10px_30px_rgba(0,0,0,0.85)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300"
      >
        {/* Soft pulse glow ring */}
        <span className="absolute -inset-0.5 rounded-full bg-emerald-500/20 blur-[6px] group-hover:bg-emerald-500/35 transition-colors -z-10" />

        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
          <MessageCircle className="w-4 h-4 fill-emerald-400" />
        </div>

        <div className="flex flex-col text-left pr-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold leading-none">
            Online
          </span>
          <span className="text-xs font-semibold text-slate-200 group-hover:text-white leading-tight">
            Fale no WhatsApp
          </span>
        </div>
      </a>
    </aside>
  );
};
