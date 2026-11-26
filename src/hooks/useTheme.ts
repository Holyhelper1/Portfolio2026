import { useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const getStoredTheme = (): Theme | null => {
  if (typeof window === 'undefined') return null;
  const saved = localStorage.getItem('theme');
  return saved === 'light' || saved === 'dark' ? saved : null;
};

const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const applyTheme = (newTheme: Theme) => {
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};

export const useTheme = () => {
  // The initial value is deterministic so server and client markup match.
  // The real theme is resolved after mount and is already applied by the
  // inline script in index.html.
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(getStoredTheme() ?? getSystemTheme());

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      if (!getStoredTheme()) {
        const newTheme = event.matches ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
      return newTheme;
    });
  }, []);

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };
};
