import { useEffect, useState } from 'react';
import {
  Archive,
  ChevronDown,
  ExternalLink,
  FolderGit2,
  Lock,
  X,
} from 'lucide-react';
import { useLanguage } from '../../../i18n';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { CapsulaCase } from './CapsulaCase';
import styles from './Projects.module.css';

import tentotekaImg from '../../../assets/projects/tentoteka.jpg';
import ruslanaImg from '../../../assets/projects/ruslana_cakes.jpg';
import dreamhouseImg from '../../../assets/projects/dreamhouse.jpg';
import crossfitImg from '../../../assets/projects/crossfit.jpg';
import nocodeImg from '../../../assets/projects/nocode.jpg';

export function Projects() {
  const { t, locale } = useLanguage();
  const { ref, isRevealed } = useScrollReveal();

  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImage(null);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeImage]);

  const projects = [
    {
      id: 'tentoteka',
      title: t.projects.tentoteka.title,
      tagline: t.projects.tentoteka.tagline,
      task: t.projects.tentoteka.task,
      solution: t.projects.tentoteka.solution,
      result: t.projects.tentoteka.result,
      tech: t.projects.tentoteka.tech,
      badge: t.projects.tentoteka.badge,
      accent: styles.cardAccent2,
      image: tentotekaImg,
      demoUrl: 'https://tentoteka.ru/',
      codeUrl: 'https://github.com/Holyhelper1/tentoteka',
    },
    {
      id: 'no-code-testing',
      title: t.projects.noCodeTesting.title,
      tagline: t.projects.noCodeTesting.tagline,
      task: t.projects.noCodeTesting.task,
      solution: t.projects.noCodeTesting.solution,
      result: t.projects.noCodeTesting.result,
      tech: t.projects.noCodeTesting.tech,
      badge: t.projects.noCodeTesting.badge,
      accent: styles.cardAccent6,
      image: nocodeImg,
      isPrivate: true,
    },
    {
      id: 'ruslana_cakes',
      title: t.projects.ruslana.title,
      tagline: t.projects.ruslana.tagline,
      task: t.projects.ruslana.task,
      solution: t.projects.ruslana.solution,
      result: t.projects.ruslana.result,
      tech: t.projects.ruslana.tech,
      badge: t.projects.ruslana.badge,
      accent: styles.cardAccent3,
      image: ruslanaImg,
      demoUrl: 'https://ruslana-cakes.web.app/',
      codeUrl: 'https://github.com/Holyhelper1/Ruslana_Cakes',
      wide: true,
    },
  ];

  const archiveProjects = [
    {
      id: 'dreamhouse',
      title: t.projects.archive.dreamhouse.title,
      description: t.projects.archive.dreamhouse.description,
      tech: t.projects.archive.dreamhouse.tech,
      image: dreamhouseImg,
      demoUrl: 'https://holyhelper1.github.io/DreamHouse/',
      codeUrl: 'https://github.com/Holyhelper1/DreamHouse',
    },
    {
      id: 'crossfit',
      title: t.projects.archive.crossfit.title,
      description: t.projects.archive.crossfit.description,
      tech: t.projects.archive.crossfit.tech,
      image: crossfitImg,
      demoUrl: 'https://holyhelper1.github.io/CrossFit/',
      codeUrl: 'https://github.com/Holyhelper1/CrossFit',
    },
  ];

  const techToArray = (techStr: string) => {
    if (!techStr) return [];
    return techStr.split(',').map((item) => item.trim());
  };

  return (
    <section
      className={`${styles.projects} ${isRevealed ? styles.visible : ''}`}
      id="projects"
      ref={ref}
    >
      <h2 className={styles.sectionTitle}>{t.projects.title}</h2>
      <p className={styles.sectionSubtitle}>{t.projects.subtitle}</p>

      <CapsulaCase isRevealed={isRevealed} />

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`${styles.card} ${project.accent} ${
              project.wide ? styles.cardWide : ''
            }`}
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
              <p className={styles.cardTagline}>{project.tagline}</p>

              <dl className={styles.caseList}>
                <div className={styles.caseRow}>
                  <dt>{t.projects.labels.task}</dt>
                  <dd>{project.task}</dd>
                </div>
                <div className={styles.caseRow}>
                  <dt>{t.projects.labels.solution}</dt>
                  <dd>{project.solution}</dd>
                </div>
                <div className={styles.caseRow}>
                  <dt>{t.projects.labels.result}</dt>
                  <dd className={styles.caseResult}>{project.result}</dd>
                </div>
              </dl>

              <div className={styles.cardTech}>
                {techToArray(project.tech).map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.cardActions}>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.cardLink} ${styles.cardLinkPrimary}`}
                  >
                    <ExternalLink size={14} /> {t.projects.links.demo}
                  </a>
                )}

                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.cardLink} ${styles.cardLinkSecondary}`}
                  >
                    <FolderGit2 size={14} /> {t.projects.links.code}
                  </a>
                )}

                {project.isPrivate && (
                  <span className={styles.privateBadge}>
                    <Lock size={14} /> {t.projects.links.private}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <details className={styles.archive}>
        <summary className={styles.archiveSummary}>
          <span className={styles.archiveTitle}>
            <Archive size={18} /> {t.projects.archive.title}
          </span>
          <span className={styles.archiveDescription}>
            {t.projects.archive.description}
          </span>
          <ChevronDown size={20} className={styles.archiveChevron} />
        </summary>

        <div className={styles.archiveGrid}>
          {archiveProjects.map((project) => (
            <article key={project.id} className={styles.archiveCard}>
              <button
                type="button"
                className={styles.archiveImage}
                onClick={() => setActiveImage(project.image)}
                aria-label={project.title}
              >
                <img src={project.image} alt={project.title} loading="lazy" />
              </button>
              <div className={styles.archiveBody}>
                <h4 className={styles.archiveCardTitle}>{project.title}</h4>
                <p className={styles.archiveCardText}>{project.description}</p>
                <span className={styles.archiveTech}>{project.tech}</span>
                <div className={styles.archiveActions}>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.archiveLink}
                  >
                    <ExternalLink size={13} /> {t.projects.links.demo}
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.archiveLink}
                  >
                    <FolderGit2 size={13} /> {t.projects.links.code}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </details>

      {activeImage && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Project preview"
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
            onClick={(event) => event.stopPropagation()}
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
