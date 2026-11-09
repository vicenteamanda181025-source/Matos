export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'solar' | 'paineis' | 'iluminacao' | 'geral' | 'automacao';
  categoryLabel: string;
  imageUrl: string;
  caption?: string;
  isRealWork: boolean; // Indicates verified real work by company vs illustrative
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email?: string;
  service: string;
  projectType: string;
  message: string;
}
