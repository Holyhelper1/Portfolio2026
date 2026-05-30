
import { useLanguage } from '../../../i18n';
import styles from './LangSwitcher.module.css';

export function LangSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.button} ${locale === 'ru' ? styles.active : ''}`}
        onClick={() => setLocale('ru')}
        aria-label="Switch to Russian"
      >
        RU
      </button>
      <button
        className={`${styles.button} ${locale === 'en' ? styles.active : ''}`}
        onClick={() => setLocale('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
