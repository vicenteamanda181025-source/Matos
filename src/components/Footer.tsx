import React from 'react';
import { MessageCircle, Instagram, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/initialData';

interface FooterProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="bg-[#040405] border-t border-white/[0.08] pt-20 pb-12 text-slate-400 relative overflow-hidden">
      {/* Top subtle blue laser hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          
          {/* Brand Col (Col 5) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#0E1015] border border-cyan-500/30 flex items-center justify-center">
                <span className="font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white text-lg">
                  M⚡
                </span>
              </div>
              <div>
                <span className="text-base font-bold text-white block uppercase tracking-wide">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[10px] text-slate-500 font-medium tracking-[0.16em] uppercase">
                  Engenharia Elétrica & Automação
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 font-light leading-relaxed mb-8 max-w-sm">
              Engenharia elétrica consultiva e executiva de alto padrão. Instalações complexas, energia solar fotovoltaica e automação integrada em São Paulo e região.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0D0F14] hover:bg-emerald-950/60 border border-white/[0.08] hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0D0F14] hover:bg-pink-950/60 border border-white/[0.08] hover:border-pink-500/40 text-slate-300 hover:text-pink-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-10 h-10 rounded-xl bg-[#0D0F14] hover:bg-blue-950/60 border border-white/[0.08] hover:border-blue-500/40 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-colors"
                aria-label="E-mail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services (Col 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-6 font-bold">
              Disciplinas
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-light">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-2 group"
                  >
                    <span className="text-cyan-500/60 group-hover:text-cyan-400 transition-colors">—</span>
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation (Col 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-6 font-bold">
              Estrutura
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-light">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">Projetos</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Contact Summary (Col 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-6 font-bold">
              Contato
            </h4>
            <div className="space-y-3 text-xs font-light">
              <div>
                <span className="block text-slate-500 text-[10px] uppercase font-mono">Telefone</span>
                <span className="text-white font-medium">{COMPANY_INFO.phone}</span>
              </div>
              <div>
                <span className="block text-slate-500 text-[10px] uppercase font-mono">E-mail</span>
                <span className="text-white font-medium">{COMPANY_INFO.email}</span>
              </div>
              <div>
                <span className="block text-slate-500 text-[10px] uppercase font-mono">Instagram</span>
                <span className="text-white font-medium">{COMPANY_INFO.instagram}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-slate-500">
          <div>
            <span>© {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.</span>
          </div>
          <div>
            <span>Conformidade com Normas NBR 5410 & NR-10 · Engenharia Elétrica de Alta Precisão</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
