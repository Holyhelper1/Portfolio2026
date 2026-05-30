
import { useTheme } from '../../../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className={`${styles.toggle} ${isDark ? styles.toggleDark : ''}`}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Светлая тема' : 'Тёмная тема'}
    >
      <span className={`${styles.knob} ${isDark ? styles.knobDark : ''}`}>
        <span className={`${styles.icon} ${isDark ? styles.moonIcon : styles.sunIcon}`}>
          {isDark ? <Moon size={12} /> : <Sun size={12} />}
        </span>
      </span>
    </button>
  );
}
