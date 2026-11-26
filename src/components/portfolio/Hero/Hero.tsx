import { useLanguage } from '../../../i18n';
import styles from './Hero.module.css';
import avatarImg from '../../../assets/my-photo.jpg';
import { Mouse } from 'lucide-react';

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

      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.greeting}>{t.hero.greeting}</p>
          <h1 className={styles.name}>
            <span className={styles.nameText}>{t.hero.name}</span>
            <span className={styles.role}>{t.hero.role}</span>
          </h1>

          <ul className={styles.stackList} aria-label="Tech stack">
            {t.hero.stack.map((tech) => (
              <li key={tech} className={styles.stackTag}>
                {tech}
              </li>
            ))}
          </ul>

          <p className={styles.description}>{t.hero.description}</p>

          <div className={styles.ctaGroup}>
            <button
              className={styles.ctaPrimary}
              onClick={() => onNavigate('projects')}
            >
              {t.hero.primaryCta}
            </button>
            <button
              className={styles.ctaSecondary}
              onClick={() => onNavigate('contact')}
            >
              {t.hero.secondaryCta}
            </button>
          </div>
        </div>

        <div className={styles.photoContainer}>
          <img
            src={avatarImg}
            alt={t.hero.name}
            className={styles.avatar}
          />
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>{t.hero.scroll}</span>
        <span className={styles.scrollArrow}>
          <Mouse size={22} />
        </span>
      </div>
    </section>
  );
}
