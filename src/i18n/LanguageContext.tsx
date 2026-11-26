import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import ru from './locales/ru.json';
import en from './locales/en.json';

type Locale = 'ru' | 'en';

type Translations = typeof ru;

const translations: Record<Locale, Translations> = { ru, en };

const getInitialLocale = (): Locale => 'ru';

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
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('locale');
    if (saved === 'ru' || saved === 'en') {
      setLocaleState(saved);
    }
  }, []);

  useEffect(() => {
    const meta = translations[locale].meta;
    document.documentElement.lang = locale;
    document.title = meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', meta.description);
    }
  }, [locale]);

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
