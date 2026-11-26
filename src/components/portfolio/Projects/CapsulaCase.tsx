import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowRight,
  CreditCard,
  Expand,
  ExternalLink,
  Lock,
  Scissors,
  Sparkles,
  TrendingUp,
  X,
} from 'lucide-react';
import { useLanguage } from '../../../i18n';
import styles from './CapsulaCase.module.css';

import coverImg from '../../../assets/projects/capsula-cover.jpg';
import showcaseImg from '../../../assets/projects/capsula-showcase.jpg';
import howImg from '../../../assets/projects/capsula-how.jpg';
import pricingImg from '../../../assets/projects/capsula-pricing.jpg';

const challengeIcons = [
  <Scissors size={22} />,
  <Sparkles size={22} />,
  <CreditCard size={22} />,
];

const gallery = [
  { src: showcaseImg, alt: 'CAPSULA AI wardrobe' },
  { src: howImg, alt: 'CAPSULA AI how it works' },
  { src: pricingImg, alt: 'CAPSULA AI pricing and outfit constructor' },
];

interface CapsulaCaseProps {
  isRevealed: boolean;
}

export function CapsulaCase({ isRevealed }: CapsulaCaseProps) {
  const { t, locale } = useLanguage();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const project = t.projects.capsula;

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

  const techToArray = (techStr: string) =>
    techStr
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

  return (
    <article
      className={`${styles.featured} ${isRevealed ? styles.visible : ''}`}
    >
      <div className={styles.top}>
        <div className={styles.info}>
          <div className={styles.badgeRow}>
            <span className={styles.badge}>{project.badge}</span>
            <span className={styles.badgeMuted}>{project.tagline}</span>
          </div>

          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.stack}>
            {techToArray(project.stack).map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.actions}>
            <a
              href="https://capsula-ai.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryLink}
            >
              <ExternalLink size={16} /> {t.projects.links.open}
            </a>
            <span className={styles.privateBadge}>
              <Lock size={14} /> {t.projects.links.private}
            </span>
          </div>
        </div>

        <button
          type="button"
          className={styles.cover}
          onClick={() => setActiveImage(coverImg)}
          aria-label={
            locale === 'ru' ? 'Открыть обложку CAPSULA AI' : 'Open CAPSULA AI cover'
          }
        >
          <img src={coverImg} alt={project.title} />
          <span className={styles.coverHint}>
            <Expand size={15} />
            {locale === 'ru' ? 'Увеличить' : 'Expand'}
          </span>
        </button>
      </div>

      <div className={styles.sectionBlock}>
        <h4 className={styles.blockTitle}>{t.projects.labels.challenges}</h4>
        <div className={styles.challengeGrid}>
          {project.challenges.map((challenge, index) => (
            <div key={challenge.title} className={styles.challenge}>
              <div className={styles.challengeIcon}>
                {challengeIcons[index]}
              </div>
              <h5 className={styles.challengeTitle}>{challenge.title}</h5>
              <p className={styles.challengeText}>{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <h4 className={styles.blockTitle}>{t.projects.labels.architecture}</h4>
        <ol className={styles.flow}>
          {project.architecture.map((step, index) => (
            <li key={step.title} className={styles.flowStep}>
              <span className={styles.stepNumber}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <strong className={styles.stepTitle}>{step.title}</strong>
              <span className={styles.stepText}>{step.description}</span>
              {index < project.architecture.length - 1 && (
                <ArrowRight
                  size={16}
                  className={styles.flowArrow}
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.bottom}>
        <div className={styles.gallery}>
          {gallery.map((image) => (
            <button
              key={image.alt}
              type="button"
              className={styles.galleryItem}
              onClick={() => setActiveImage(image.src)}
              aria-label={image.alt}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
          ))}
        </div>

        <div className={styles.business}>
          <div className={styles.businessIcon}>
            <TrendingUp size={20} />
          </div>
          <div>
            <span className={styles.businessLabel}>
              {t.projects.labels.business}
            </span>
            <p className={styles.businessText}>{project.business}</p>
          </div>
        </div>
      </div>

      {activeImage &&
        createPortal(
          <div
            className={styles.lightboxOverlay}
            onClick={() => setActiveImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="CAPSULA AI preview"
          >
            <button
              type="button"
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
                alt="CAPSULA AI full screen preview"
                className={styles.lightboxImage}
              />
            </div>
          </div>,
          document.body,
        )}
    </article>
  );
}
