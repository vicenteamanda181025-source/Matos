import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Differentials } from './components/Differentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('Quadros e Painéis');

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/25 selection:text-white">
      {/* Fixed Top Bar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Início / Hero with 3D Floating Equipment */}
        <Hero onOpenQuote={() => handleOpenQuote('Projeto Geral')} />

        {/* 2. Sobre a Empresa */}
        <About onOpenQuote={() => handleOpenQuote('Avaliação Técnica')} />

        {/* 3. Serviços */}
        <Services onOpenQuote={handleOpenQuote} />

        {/* 4. Galeria de Realizações */}
        <Gallery />

        {/* 5. Diferenciais */}
        <Differentials />

        {/* 6. Contato & Formulário de Orçamento */}
        <Contact />
      </main>

      {/* Corporate Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Global Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        initialService={selectedServiceForQuote}
      />
    </div>
  );
}
