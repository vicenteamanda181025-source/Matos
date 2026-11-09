import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/initialData';

interface NavbarProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] py-4'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-8">
          
          {/* Brand Wordmark - Corporate, Sleek, Discrete */}
          <a
            href="#inicio"
            className="flex items-center gap-3.5 group whitespace-nowrap shrink-0"
          >
            {/* Minimalist engineering mark */}
            <div className="w-9 h-9 rounded-lg bg-[#0E1015] border border-cyan-500/30 flex items-center justify-center transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,180,255,0.35)]">
              <span className="font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white text-base">
                M⚡
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors uppercase">
                {COMPANY_INFO.name}
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-[0.16em] uppercase">
                Engenharia Elétrica & Automação
              </span>
            </div>
          </a>

          {/* Nav Links - 5 concise links, restrained typography */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Button - Refined Corporate Button */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenQuote()}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-transparent hover:bg-cyan-950/40 border border-cyan-500/40 hover:border-cyan-400 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(0,140,255,0.15)] hover:shadow-[0_0_25px_rgba(0,180,255,0.4)] flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-white/10"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A0A0A]/98 backdrop-blur-2xl border-b border-white/10 px-6 pt-4 pb-8 shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 px-4 text-center text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center gap-2"
              >
                <span>Solicitar Orçamento</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
