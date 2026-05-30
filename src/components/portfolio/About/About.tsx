
import { Zap, Rocket, Wrench, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../../../i18n';
import styles from './About.module.css';

export function About() {
  const { t } = useLanguage();

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
      icon: <Wrench size={24} />,
      value: t.about.technologiesValue,
      label: t.about.technologies,
      iconClass: styles.statIconTech,
    },
  ];

  return (
    <section className={styles.about} id="about">
      <h2 className={styles.sectionTitle}>{t.about.title}</h2>
      <p className={styles.sectionSubtitle}>
        Frontend Developer · React · TypeScript
      </p>

      <div className={styles.grid}>
        <div className={styles.textBlock}>
          <p>{t.about.description}</p>
          <p>{t.about.description2}</p>
          <div className={styles.location}>
            <MapPin size={16} /> {t.about.location} &nbsp;|&nbsp; <Globe size={16} /> {t.about.english}
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>TypeScript 51.2%</span>
            <span className={styles.tag}>JavaScript 28.4%</span>
            <span className={styles.tag}>CSS 12.1%</span>
            <span className={styles.tag}>HTML 8.3%</span>
          </div>
        </div>

        <div className={styles.statsBlock}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
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
