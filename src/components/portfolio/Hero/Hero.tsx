import { useLanguage } from '../../../i18n';
import styles from './Hero.module.css';
// Импортируем ваше фото (путь укажите свой)
import avatarImg from '../../../assets/my-photo.jpg'; 

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroBg}>
        <div className={styles.heroGradient} />
        <div className={styles.heroBlob1} />
        <div className={styles.heroBlob2} />
      </div>

      {/* Главный контейнер теперь будет флекс-контейнером для текста и фото */}
      <div className={styles.content}>
        
        {/* Левая колонка: Текст и кнопки */}
        <div className={styles.textContent}>
          <p className={styles.greeting}>{t.hero.greeting}</p>
          <h1 className={styles.name}>{t.hero.name}</h1>
          <p className={styles.role}>{t.hero.role}</p>
          <p className={styles.subtitle}>
            {'< '}
            <span>React</span>
            {' | '}
            <span>TypeScript</span>
            {' | '}
            <span>Redux Toolkit</span>
            {' >'}
          </p>
          <p className={styles.description}>{t.hero.description}</p>
          
          <div className={styles.ctaGroup}>
            <button
              className={styles.ctaPrimary}
              onClick={() => onNavigate('projects')}
            >
              {t.header.projects}
            </button>
            <button
              className={styles.ctaSecondary}
              onClick={() => onNavigate('contact')}
            >
              {t.header.contact}
            </button>
          </div>
        </div>

        {/* Правая колонка: Контейнер для фото */}
        <div className={styles.photoContainer}>
          <img 
            src={avatarImg} 
            alt={t.hero.name} 
            className={styles.avatar} 
          />
        </div>

      </div>

      <div className={styles.scrollIndicator}>
        <span>SCROLL</span>
        <span className={styles.scrollArrow}>↓</span>
      </div>
    </section>
  );
}

