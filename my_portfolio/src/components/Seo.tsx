import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const metadata = {
  en: {
    title: 'Abdelilah Elgallati | Junior AI Engineer & Data Scientist',
    description: 'Portfolio of Abdelilah Elgallati, a junior AI engineer and data scientist building machine learning, GenAI, RAG, and production-oriented software systems.',
    locale: 'en_US',
  },
  fr: {
    title: 'Abdelilah Elgallati | Ingénieur IA Junior & Data Scientist',
    description: 'Portfolio d’Abdelilah Elgallati, ingénieur IA junior et data scientist spécialisé dans le machine learning, la GenAI, les systèmes RAG et les logiciels orientés production.',
    locale: 'fr_FR',
  },
} as const;

function updateMeta(attribute: 'name' | 'property', value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${value}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function Seo() {
  const { language } = useLanguage();

  useEffect(() => {
    const currentMetadata = metadata[language];
    document.documentElement.lang = language;
    document.title = currentMetadata.title;

    updateMeta('name', 'title', currentMetadata.title);
    updateMeta('name', 'description', currentMetadata.description);
    updateMeta('property', 'og:title', currentMetadata.title);
    updateMeta('property', 'og:description', currentMetadata.description);
    updateMeta('property', 'og:locale', currentMetadata.locale);
    updateMeta('property', 'og:locale:alternate', language === 'en' ? 'fr_FR' : 'en_US');
    updateMeta('name', 'twitter:title', currentMetadata.title);
    updateMeta('name', 'twitter:description', currentMetadata.description);
  }, [language]);

  return null;
}
