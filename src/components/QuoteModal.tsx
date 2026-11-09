import React, { useState, useEffect } from 'react';
import { X, Send, Zap, MessageCircle, CheckCircle, Copy } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/initialData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Quadros e Painéis',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService);
  const [propertyType, setPropertyType] = useState('Residencial');
  const [urgency, setUrgency] = useState('Normal (planejamento)');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const buildMessage = () => {
    return `*Solicitação de Orçamento - Matos Soluções Elétricas*
• *Nome:* ${name.trim() || 'Cliente'}
• *WhatsApp:* ${phone.trim() || 'A informar'}
• *Serviço Escolhido:* ${service}
• *Tipo de Imóvel:* ${propertyType}
• *Prioridade:* ${urgency}
• *Detalhes:* ${notes.trim() || 'Gostaria de uma estimativa de valores e disponibilidade de atendimento.'}`;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Por favor, preencha seu nome e telefone para contato.');
      return;
    }

    const message = buildMessage();
    const url = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(buildMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#0A0C10] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-left my-8 max-h-[95vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">Solicitar Orçamento de Engenharia</h3>
              <p className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">{COMPANY_INFO.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSendWhatsApp} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Seu Nome *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              className="w-full px-3.5 py-2.5 bg-[#0A0A0A] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">WhatsApp com DDD *</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(11) 99999-9999"
              className="w-full px-3.5 py-2.5 bg-[#0A0A0A] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Serviço Desejado</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#0A0A0A] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Projeto Completo">Projeto Completo</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Tipo de Imóvel</label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#0A0A0A] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
              >
                <option value="Casa / Sobrado">Casa / Sobrado</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Comercial / Escritório">Comercial / Escritório</option>
                <option value="Condomínio">Condomínio</option>
                <option value="Galpão">Galpão</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Prioridade</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setUrgency('Normal (planejamento)')}
                className={`py-2 text-xs rounded-lg border transition-all cursor-pointer ${
                  urgency === 'Normal (planejamento)'
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                    : 'bg-[#0A0A0A] border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                Planejamento normal
              </button>
              <button
                type="button"
                onClick={() => setUrgency('Urgente / Imediato')}
                className={`py-2 text-xs rounded-lg border transition-all cursor-pointer ${
                  urgency === 'Urgente / Imediato'
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                    : 'bg-[#0A0A0A] border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                Urgente / Esta semana
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Observações / Detalhes</label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Descreva detalhes como metragens, problemas no quadro, quantidade de pontos, etc."
              className="w-full px-3.5 py-2 bg-[#0A0A0A] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#0062FF] via-[#0084FF] to-[#00C2FF] hover:from-[#0052DD] hover:to-[#00B4EA] shadow-[0_0_20px_rgba(0,140,255,0.4)] flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enviar via WhatsApp Oficial</span>
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-[#181818] border border-white/10 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copied ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado para a área de transferência!' : 'Copiar dados da mensagem'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
