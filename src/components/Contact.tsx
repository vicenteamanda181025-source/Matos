import React, { useState } from 'react';
import {
  MessageCircle,
  Instagram,
  Mail,
  Phone,
  ArrowUpRight,
  CheckCircle,
  Copy,
  MapPin,
  Clock,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/initialData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: 'Residencial de Alto Padrão',
    service: 'Quadros e Painéis',
    location: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Por favor, preencha seu nome e telefone.');
      return;
    }

    const text = `*Solicitação de Orçamento - Matos Soluções Elétricas*
• *Nome:* ${formData.name.trim()}
• *Telefone/WhatsApp:* ${formData.phone.trim()}
• *Serviço de Interesse:* ${formData.service}
• *Tipo de Imóvel:* ${formData.propertyType}
• *Localização (Bairro/Cidade):* ${formData.location.trim() || 'São Paulo e Região'}
• *Descrição do Projeto:* ${formData.message.trim() || 'Gostaria de agendar uma avaliação técnica e obter um orçamento detalhado.'}`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${encoded}`;

    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  const handleCopyMessage = () => {
    const text = `*Solicitação de Orçamento - Matos Soluções Elétricas*
• *Nome:* ${formData.name.trim() || 'Cliente'}
• *Telefone/WhatsApp:* ${formData.phone.trim() || 'Não informado'}
• *Serviço de Interesse:* ${formData.service}
• *Tipo de Imóvel:* ${formData.propertyType}
• *Localização:* ${formData.location.trim() || 'São Paulo'}
• *Descrição:* ${formData.message.trim() || 'Solicitação de orçamento técnico.'}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const directWhatsAppUrl = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(
    'Olá! Gostaria de conversar com a equipe de engenharia da Matos Soluções Elétricas.'
  )}`;

  return (
    <section id="contato" className="py-28 lg:py-40 bg-[#070709] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background radial blue glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#0051FF]/15 via-[#00B4D8]/10 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-4">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span>Atendimento & Engenharia</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Inicie seu projeto com quem entende de precisão
          </h2>
          <p className="text-base text-slate-300 font-light mt-4 max-w-2xl leading-relaxed">
            Solicite um orçamento sem compromisso. Nossa equipe técnica está pronta para avaliar a infraestrutura do seu imóvel e elaborar uma proposta completa.
          </p>
        </div>

        {/* 2-Column Architectural Layout: Form on Left, Direct Coordinates on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Architectural Contact Form (Col 7) */}
          <div className="lg:col-span-7 bg-[#0A0C10] border border-white/[0.08] rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Formulário de Especificação de Projeto
            </h3>
            <p className="text-xs text-slate-400 mb-8 font-light">
              Campos essenciais para dimensionamento prévio e contato direto.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome ou razão social"
                    className="w-full px-4 py-3.5 bg-[#050608] border border-white/[0.08] rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3.5 bg-[#050608] border border-white/[0.08] rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Serviço de Interesse *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#050608] border border-white/[0.08] rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Projeto Geral / Obra Completa">Projeto Geral / Obra Completa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Tipo de Imóvel *
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#050608] border border-white/[0.08] rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Residencial de Alto Padrão">Residencial de Alto Padrão</option>
                    <option value="Apartamento / Cobertura">Apartamento / Cobertura</option>
                    <option value="Comercial / Escritório">Comercial / Escritório</option>
                    <option value="Condomínio Residencial">Condomínio Residencial</option>
                    <option value="Galpão / Industrial">Galpão / Industrial</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Local da Obra (Bairro ou Cidade)
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Ex: Jardins, Morumbi, Alphaville, Moema..."
                  className="w-full px-4 py-3.5 bg-[#050608] border border-white/[0.08] rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Descrição dos Requisitos do Projeto
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Descreva necessidades de quadro de distribuição, energia solar, automação ou prazos estimados..."
                  className="w-full px-4 py-3.5 bg-[#050608] border border-white/[0.08] rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-xs text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_25px_rgba(0,229,255,0.4)] flex items-center justify-center gap-2.5 cursor-pointer transition-all"
                >
                  <span>Enviar Especificação via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="w-full sm:w-auto px-5 py-4 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-[#14161F] hover:bg-[#1a1e2a] border border-white/[0.08] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copied ? <CheckCircle className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
                </button>
              </div>

              {submitted && (
                <p className="text-xs text-cyan-400 pt-2 font-mono">
                  ✓ Abrindo o canal de atendimento no WhatsApp oficial...
                </p>
              )}
            </form>
          </div>

          {/* Right Column: Direct Channels & Engineering Coordinates (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct WhatsApp Callout Card */}
            <div className="p-8 rounded-3xl bg-[#0A0C10] border border-white/[0.08] shadow-xl">
              <h4 className="text-lg font-bold text-white mb-2">
                Atendimento Imediato
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light mb-6">
                Para emergências elétricas, vistorias técnicas urgentes ou consultas diretas com a equipe de engenharia.
              </p>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-xs text-white bg-[#008855] hover:bg-[#009960] flex items-center justify-center gap-2.5 transition-all shadow-[0_0_25px_rgba(0,180,100,0.3)]"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#008855]" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

            {/* Coordinates Directory */}
            <div className="p-8 rounded-3xl bg-[#0A0C10] border border-white/[0.08] shadow-xl space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">Linha Direta</span>
                  <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">E-mail Corporativo</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-950/60 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">Instagram Oficial</span>
                  <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                    {COMPANY_INFO.instagram}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">Área de Atuação</span>
                  <span className="text-xs text-slate-300">
                    São Paulo (Capital), Região Metropolitana, Grande ABC e Alphaville.
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
