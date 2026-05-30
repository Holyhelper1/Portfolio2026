import { useState } from 'react';
import { ExternalLink, FolderGit2, Lock, X } from 'lucide-react';
import { useLanguage } from '../../../i18n';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import styles from './Projects.module.css';

import lumiereImg from '../../../assets/projects/lumiere.png';
import tentotekaImg from '../../../assets/projects/tentoteka.jpg';
import ruslanaImg from '../../../assets/projects/ruslana_cakes.jpg';
import dreamhouseImg from '../../../assets/projects/dreamhouse.jpg';
import crossfitImg from '../../../assets/projects/crossfit.jpg';
import nocodeImg from '../../../assets/projects/nocode.jpg';


export function Projects() {
  const { t, locale } = useLanguage();
  const { ref, isRevealed } = useScrollReveal();
  
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const projects = [
    {
      id: 'lumiere-closet',
      title: t.projects.lumiere.title,
      description: t.projects.lumiere.description,
      tech: t.projects.lumiere.tech,
      accent: styles.cardAccent1,
      badge: locale === 'ru' ? 'В разработке (AI)' : 'In Progress (AI)',
      image: lumiereImg,
      isPrivate: true,
      hasCaseStudy: true,
    },
    {
      id: 'tentoteka',
      title: t.projects.tentoteka.title,
      description: t.projects.tentoteka.description,
      tech: t.projects.tentoteka.tech,
      accent: styles.cardAccent2,
      badge: locale === 'ru' ? 'Коммерческий' : 'Commercial',
      image: tentotekaImg,
      demoUrl: 'https://tentoteka.ru/',
      codeUrl: 'https://github.com/Holyhelper1/tentoteka',
      hasDemo: true,
      hasCode: true,
    },
    {
      id: 'no-code-testing',
      title: t.projects.noCodeTesting.title,
      description: t.projects.noCodeTesting.description,
      tech: t.projects.noCodeTesting.tech,
      accent: styles.cardAccent6,
      badge: locale === 'ru' ? 'Коммерческий (Bravo Soft)' : 'Commercial (Bravo Soft)',
      image: nocodeImg,
      isPrivate: true,
    },
    {
      id: 'ruslana_cakes',
      title: t.projects.ruslana.title,
      description: t.projects.ruslana.description,
      tech: t.projects.ruslana.tech,
      accent: styles.cardAccent3,
      badge: locale === 'ru' ? 'Пет-проект / MVP' : 'Pet Project / MVP',
      image: ruslanaImg,
      demoUrl: 'https://ruslana-cakes.web.app/',
      codeUrl: 'https://github.com/Holyhelper1/Ruslana_Cakes',
      hasDemo: true,
      hasCode: true,
    },
    {
      id: 'dreamhouse',
      title: t.projects.dreamhouse.title,
      description: t.projects.dreamhouse.description,
      tech: t.projects.dreamhouse.tech,
      accent: styles.cardAccent4,
      badge: locale === 'ru' ? 'Верстка / Лендинг' : 'Landing / UI',
      image: dreamhouseImg,
      demoUrl: 'https://holyhelper1.github.io/DreamHouse/',
      codeUrl: 'https://github.com/Holyhelper1/DreamHouse',
      hasDemo: true,
      hasCode: true,
    },
    {
      id: 'crossfit',
      title: t.projects.crossfit.title,
      description: t.projects.crossfit.description,
      tech: t.projects.crossfit.tech,
      accent: styles.cardAccent5,
      badge: locale === 'ru' ? 'Верстка / Лендинг' : 'Landing / UI',
      image: crossfitImg,
      demoUrl: 'https://holyhelper1.github.io/CrossFit/',
      codeUrl: 'https://github.com/Holyhelper1/CrossFit',
      hasDemo: true,
      hasCode: true,
    },
  ];

  const techToArray = (techStr: string) => {
    if (!techStr) return [];
    return techStr.split(',').map((t) => t.trim());
  };

  return (
    <section 
      className={`${styles.projects} ${isRevealed ? styles.visible : ''}`} 
      id="projects"
      ref={ref}
    >
      <h2 className={styles.sectionTitle}>{t.projects.title}</h2>
      <p className={styles.sectionSubtitle}>{t.projects.subtitle}</p>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`${styles.card} ${project.accent}`}
            style={{ '--index': index } as React.CSSProperties}
          >
            <div 
              className={styles.cardImage} 
              onClick={() => setActiveImage(project.image)}
              title={locale === 'ru' ? 'Увеличить изображение' : 'Zoom image'}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className={styles.cardItemImage}
              />
              <div className={styles.cardImageOverlay} />
              <span className={styles.cardBadge}>{project.badge}</span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>

              <div className={styles.cardTech}>
                {techToArray(project.tech).map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.cardActions}>
                {project.hasDemo && project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.cardLink} ${styles.cardLinkPrimary}`}
                  >
                    <ExternalLink size={14} /> {t.projects.links.demo || 'Demo'}
                  </a>
                )}
                
                {project.hasCode && project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.cardLink} ${styles.cardLinkSecondary}`}
                  >
                    <FolderGit2 size={14} /> {t.projects.links.code || 'Code'}
                  </a>
                )}

                {project.isPrivate && (
                  <span className={styles.privateBadge}>
                    <Lock size={14} /> {t.projects.links.private || 'Private'}
                  </span>
                )}

                {project.hasCaseStudy && (
                  <button 
                    className={`${styles.cardLink} ${styles.cardLinkSecondary}`}
                    onClick={() => alert(locale === 'ru' ? 'Описание кейса в разработке' : 'Case study coming soon')}
                  >
                    <ExternalLink size={14} /> {locale === 'ru' ? 'О кейсе' : 'Case Study'}
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeImage && (
        <div 
          className={styles.lightboxOverlay} 
          onClick={() => setActiveImage(null)}
        >
          <button 
            className={styles.lightboxClose} 
            onClick={() => setActiveImage(null)}
            aria-label="Close modal"
          >
            <X size={28} />
          </button>
          <div 
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage} 
              alt="Project preview full screen" 
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}
