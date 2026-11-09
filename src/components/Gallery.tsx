import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Plus,
  Trash2,
  Upload,
  RotateCcw,
  SlidersHorizontal,
  CheckCircle,
} from 'lucide-react';
import { INITIAL_GALLERY_DATA } from '../data/initialData';
import { GalleryItem } from '../types';

const cleanImageUrl = (url: string) => {
  if (!url) return '';
  if (url.startsWith('/src/assets/images/')) {
    return url.replace('/src/assets/images/', '/images/');
  }
  return url;
};

export const Gallery: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem('matos_gallery_items');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item: GalleryItem) => ({
            ...item,
            imageUrl: cleanImageUrl(item.imageUrl),
          }));
        }
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_GALLERY_DATA;
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // New item form state for manager
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<GalleryItem['category']>('paineis');
  const [newCategoryLabel, setNewCategoryLabel] = useState('Painéis & Quadros');
  const [newCaption, setNewCaption] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('matos_gallery_items', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'paineis', label: 'Painéis & Quadros' },
    { id: 'solar', label: 'Energia Solar' },
    { id: 'iluminacao', label: 'Iluminação' },
    { id: 'automacao', label: 'Automação' },
    { id: 'geral', label: 'Padrão & Elétrica' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -500 : 500;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setNewImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newImageUrl.trim()) {
      setFeedbackMsg('Por favor, informe ao menos o título e uma imagem.');
      return;
    }

    const newItem: GalleryItem = {
      id: `custom-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      categoryLabel: newCategoryLabel,
      imageUrl: newImageUrl,
      caption: newCaption.trim() || 'Serviço executado com conformidade técnica pela equipe Matos Soluções Elétricas.',
      isRealWork: true,
    };

    setItems([newItem, ...items]);
    setNewTitle('');
    setNewCaption('');
    setNewImageUrl('');
    setFeedbackMsg('Foto adicionada com sucesso!');
    setTimeout(() => setFeedbackMsg(''), 3000);
  };

  const handleDeleteItem = (id: string) => {
    if (window.confirm('Tem certeza que deseja remover esta imagem?')) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm('Deseja restaurar as fotos padrão da galeria?')) {
      setItems(INITIAL_GALLERY_DATA);
      localStorage.removeItem('matos_gallery_items');
      setFeedbackMsg('Galeria restaurada.');
      setTimeout(() => setFeedbackMsg(''), 3000);
    }
  };

  return (
    <section id="galeria" className="py-28 lg:py-40 bg-[#070709] border-t border-b border-white/[0.06] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/5 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Horizontal Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-4">
              <span className="w-8 h-[1px] bg-cyan-400" />
              <span>Obras & Realizações de Engenharia</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Galeria de Projetos
            </h2>
          </div>

          {/* Controls: Prev/Next Buttons + Manager Trigger */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => setIsManagerOpen(true)}
              className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-[#12141a] hover:bg-[#1a1f29] border border-white/10 hover:border-cyan-500/40 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Gerenciar Galeria ({items.length})</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-11 h-11 rounded-xl bg-[#12141a] border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Projeto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-11 h-11 rounded-xl bg-[#12141a] border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Próximo projeto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`py-2 px-4 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(0,229,255,0.35)]'
                  : 'bg-[#101216] text-slate-400 hover:text-white border border-white/[0.06] hover:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* FULL-WIDTH HORIZONTAL GALLERY SCROLLWAY */}
      <div
        ref={scrollContainerRef}
        className="flex items-stretch gap-6 overflow-x-auto px-6 sm:px-8 lg:px-12 py-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative min-w-[320px] sm:min-w-[460px] lg:min-w-[540px] rounded-3xl overflow-hidden bg-[#0A0C10] border border-white/[0.08] hover:border-cyan-500/50 transition-all duration-500 cursor-pointer shadow-2xl flex-shrink-0 snap-start hover:shadow-[0_20px_50px_rgba(0,140,255,0.2)]"
          >
            {/* Cinematic Big Image */}
            <div className="aspect-[16/10] w-full overflow-hidden bg-black relative">
              <img
                src={cleanImageUrl(item.imageUrl)}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.includes('/src/assets/images/')) {
                    target.src = target.src.replace('/src/assets/images/', '/images/');
                  } else {
                    target.src = '/public/assets/aistudio/IMG_6280_65ce4fe8.jpeg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Tag indicator */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-cyan-500/40 text-[10px] font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{item.categoryLabel}</span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Content Bar */}
            <div className="p-6 bg-[#0A0C10]">
              <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400/80 mb-2">
                <span>PROJETO 0{index + 1}</span>
                <span>—</span>
                <span>OBRA HOMOLOGADA</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-2">
                {item.title}
              </h3>
              {item.caption && (
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#0E1015] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={cleanImageUrl(selectedItem.imageUrl)}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.includes('/src/assets/images/')) {
                    target.src = target.src.replace('/src/assets/images/', '/images/');
                  } else {
                    target.src = '/public/assets/aistudio/IMG_6280_65ce4fe8.jpeg';
                  }
                }}
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white hover:text-cyan-400 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Fechar visualização"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8 bg-[#090A0D]">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
                <span>{selectedItem.categoryLabel}</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">Instalação Realizada</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{selectedItem.title}</h3>
              {selectedItem.caption && (
                <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                  {selectedItem.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* GALLERY MANAGER MODAL */}
      {isManagerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setIsManagerOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#0E1015] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-left my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2.5">
                <SlidersHorizontal className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Gerenciar Projetos da Galeria</h3>
              </div>
              <button
                onClick={() => setIsManagerOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {feedbackMsg && (
              <div className="mb-5 p-3 rounded-lg bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-medium flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>{feedbackMsg}</span>
              </div>
            )}

            {/* Add Photo Form */}
            <form onSubmit={handleAddItem} className="space-y-4 mb-8 bg-[#13161F] p-5 rounded-2xl border border-white/[0.06]">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Plus className="w-4 h-4 text-cyan-400" />
                Adicionar Novo Registro de Obra
              </h4>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Título do Projeto *</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Ex: Instalação de Usina Fotovoltaica Residencial 8kWp"
                  className="w-full px-3.5 py-2.5 bg-[#090A0D] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Categoria *</label>
                  <select
                    value={newCategory}
                    onChange={(e) => {
                      const val = e.target.value as GalleryItem['category'];
                      setNewCategory(val);
                      const map: Record<string, string> = {
                        paineis: 'Painéis & Quadros',
                        solar: 'Energia Solar',
                        iluminacao: 'Iluminação',
                        automacao: 'Automação',
                        geral: 'Padrão & Elétrica',
                      };
                      setNewCategoryLabel(map[val] || 'Geral');
                    }}
                    className="w-full px-3.5 py-2.5 bg-[#090A0D] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="paineis">Painéis & Quadros</option>
                    <option value="solar">Energia Solar</option>
                    <option value="iluminacao">Iluminação</option>
                    <option value="automacao">Automação</option>
                    <option value="geral">Padrão & Elétrica</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Upload de Imagem</label>
                  <label className="w-full px-3.5 py-2.5 bg-[#090A0D] border border-dashed border-cyan-500/40 rounded-xl text-xs text-cyan-300 flex items-center justify-center gap-2 cursor-pointer hover:bg-cyan-950/20">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Selecionar Arquivo</span>
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Ou Link Direto da Imagem</label>
                <input
                  type="url"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2.5 bg-[#090A0D] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {newImageUrl && (
                <div className="flex items-center gap-3 p-2 bg-[#090A0D] rounded-lg border border-white/10">
                  <img src={newImageUrl} alt="Prévia" className="w-12 h-12 object-cover rounded" />
                  <span className="text-[11px] text-cyan-300 truncate">Imagem carregada e pronta</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Especificações Técnicas</label>
                <textarea
                  value={newCaption}
                  onChange={(e) => setNewCaption(e.target.value)}
                  rows={2}
                  placeholder="Materiais utilizados, conformidade NBR 5410, etc."
                  className="w-full px-3.5 py-2 bg-[#090A0D] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.4)]"
              >
                <Plus className="w-4 h-4" />
                <span>Salvar Projeto na Galeria</span>
              </button>
            </form>

            {/* Existing Items */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-white">Projetos Atuais ({items.length})</h4>
                <button
                  type="button"
                  onClick={handleResetDefaults}
                  className="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Restaurar Padrão</span>
                </button>
              </div>

              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#13161F] border border-white/[0.04]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={cleanImageUrl(item.imageUrl)}
                        alt={item.title}
                        className="w-10 h-10 object-cover rounded-lg bg-black"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.src.includes('/src/assets/images/')) {
                            target.src = target.src.replace('/src/assets/images/', '/images/');
                          } else {
                            target.src = '/public/assets/aistudio/IMG_6280_65ce4fe8.jpeg';
                          }
                        }}
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-white truncate">{item.title}</p>
                        <p className="text-[10px] text-cyan-400">{item.categoryLabel}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDeleteItem(item.id)}
                      className="p-1.5 text-slate-400 hover:text-red-400 rounded transition-colors cursor-pointer"
                      title="Excluir"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
