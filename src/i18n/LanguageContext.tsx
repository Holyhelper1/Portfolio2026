
import React, { createContext, useContext, useState, useCallback } from 'react';
import ru from './locales/ru.json';
import en from './locales/en.json';

type Locale = 'ru' | 'en';

type Translations = typeof ru;

const translations: Record<Locale, Translations> = { ru, en };

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return 'ru';
  const saved = localStorage.getItem('locale');
  if (saved === 'ru' || saved === 'en') return saved;
  return 'ru';
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'ru',
  setLocale: () => {},
  t: ru,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  const value = {
    locale,
    setLocale,
    t: translations[locale],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
