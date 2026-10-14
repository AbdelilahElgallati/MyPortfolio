import React, { createContext, useContext, useState } from 'react';
import { translations } from '../utils/translations';

type Language = 'en' | 'fr';
type TranslationArray = readonly unknown[];
type Translate = {
  (key: string): string;
  (key: string, options: { returnObjects: true }): TranslationArray;
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translate;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const t = ((key: string, options?: { returnObjects: true }): string | TranslationArray => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      value = typeof value === 'object' && value !== null
        ? (value as Record<string, unknown>)[k]
        : undefined;
    }
    
    if (options?.returnObjects) {
      return Array.isArray(value) ? value : [];
    }

    return typeof value === 'string' ? value : key;
  }) as Translate;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}