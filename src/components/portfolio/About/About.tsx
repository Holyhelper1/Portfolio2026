import { Zap, Rocket, Sparkles, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../../../i18n';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import styles from './About.module.css';

export function About() {
  const { t } = useLanguage();
  const { ref, isRevealed } = useScrollReveal();

  const stats = [
    {
      icon: <Zap size={24} />,
      value: t.about.experienceValue,
      label: t.about.experience,
      iconClass: styles.statIconExp,
    },
    {
      icon: <Rocket size={24} />,
      value: t.about.projectsValue,
      label: t.about.projects,
      iconClass: styles.statIconProj,
    },
    {
      icon: <Sparkles size={24} />,
      value: t.about.aiProductValue,
      label: t.about.aiProduct,
      iconClass: styles.statIconTech,
    },
  ];

  return (
    <section
      className={`${styles.about} ${isRevealed ? styles.visible : ''}`}
      id="about"
      ref={ref}
    >
      <h2 className={styles.sectionTitle}>{t.about.title}</h2>
      <p className={styles.sectionSubtitle}>{t.about.subtitle}</p>

      <div className={styles.grid}>
        <div className={styles.textBlock}>
          <p>{t.about.description}</p>
          <p>{t.about.description2}</p>
          <div className={styles.location}>
            <MapPin size={16} /> {t.about.location} &nbsp;|&nbsp;{' '}
            <Globe size={16} /> {t.about.english}
          </div>
          <div className={styles.tags}>
            {t.about.focus.map((item) => (
              <span key={item} className={styles.tag}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.statsBlock}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={styles.statCard}
              style={{ '--index': index } as React.CSSProperties}
            >
              <div className={`${styles.statIcon} ${stat.iconClass}`}>
                {stat.icon}
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
