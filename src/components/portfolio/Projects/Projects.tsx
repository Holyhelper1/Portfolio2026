import { ExternalLink, FolderGit2, Lock } from 'lucide-react';
import { useLanguage } from '../../../i18n';
import styles from './Projects.module.css';

// Импорты изображений (замените пути и расширения на реальные, когда добавите файлы)
import lumiereImg from '../../../../public/projects/lumiere.png';
import tentotekaImg from '../../../../public/projects/tentoteka.jpg';
import ruslanaImg from '../../../../public/projects/ruslana_cakes.jpg';
import dreamhouseImg from '../../../../public/projects/dreamhouse.jpg';
import crossfitImg from '../../../../public/projects/crossfit.jpg';

export function Projects() {
  const { t, locale } = useLanguage();

  const projects = [
    {
      id: 'lumiere-closet',
      title: t.projects.lumiere.title,
      description: t.projects.lumiere.description,
      tech: t.projects.lumiere.tech, // "Next.js, TypeScript, Prisma, Tailwind CSS"
      accent: styles.cardAccent1,
      badge: locale === 'ru' ? 'В разработке (AI)' : 'In Progress (AI)',
      image: lumiereImg,
      isPrivate: true,
      hasCaseStudy: true, // Флаг для кнопки подробного разбора вместо кода
    },
    {
      id: 'tentoteka',
      title: t.projects.tentoteka.title,
      description: t.projects.tentoteka.description,
      tech: t.projects.tentoteka.tech, // "React, TypeScript, Vite, WordPress"
      accent: styles.cardAccent2,
      badge: locale === 'ru' ? 'Коммерческий' : 'Commercial',
      image: tentotekaImg,
      demoUrl: 'https://tentoteka.ru/',
      codeUrl: 'https://github.com/Holyhelper1/tentoteka',
      hasDemo: true,
      hasCode: true,
    },
    {
      id: 'ruslana_cakes',
      title: t.projects.ruslana.title,
      description: t.projects.ruslana.description,
      tech: t.projects.ruslana.tech, // "React, JavaScript, Firebase" (или ваш стек)
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
      tech: t.projects.dreamhouse.tech, // "HTML, CSS, JavaScript" (или SCSS/BEM)
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
    <section className={styles.projects} id="projects">
      <h2 className={styles.sectionTitle}>{t.projects.title}</h2>
      <p className={styles.sectionSubtitle}>{t.projects.subtitle}</p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <article
            key={project.id}
            className={`${styles.card} ${project.accent}`}
          >
            <div className={styles.cardImage}>
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

                {/* Кнопка для будущего разбора кейса Lumiere-closet */}
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
    </section>
  );
}











// import { ExternalLink, FolderGit2, Lock } from 'lucide-react';
// import { useLanguage } from '../../../i18n';
// import styles from './Projects.module.css';
// import ireserve from '../../../../public/projects/ireserve.png';
// import nocode from '../../../../public/projects/nocode.jpg';
// import portfolio from '../../../../public/projects/portfolio.png';

// export function Projects() {
//   const { t, locale } = useLanguage();

//   const projects = [
//     {
//       id: 'ireserve',
//       title: t.projects.iReserve.title,
//       description: t.projects.iReserve.description,
//       tech: t.projects.iReserve.tech,
//       accent: styles.cardAccent1,
//       badge: 'React SPA',
//       image: ireserve,
//       demoUrl: 'http://212.60.21.70/',
//       codeUrl: 'https://github.com/Holyhelper1/iReserve',
//       hasDemo: true,
//       hasCode: true,
//     },
//     {
//       id: 'nocodetesting',
//       title: t.projects.noCodeTesting.title,
//       subtitle: t.projects.noCodeTesting.subtitle,
//       description: t.projects.noCodeTesting.description,
//       tech: t.projects.noCodeTesting.tech,
//       accent: styles.cardAccent2,
//       badge: locale === 'ru' ? 'Коммерческий' : 'Commercial',
//       image: nocode,
//       isPrivate: true,
//     },
//     {
//       id: 'portfolio',
//       title: t.projects.portfolio.title,
//       description: t.projects.portfolio.description,
//       tech: t.projects.portfolio.tech,
//       accent: styles.cardAccent3,
//       badge: locale === 'ru' ? 'Пет-проект' : 'Pet Project',
//       image: portfolio,
//       demoUrl: 'https://holyhelper1.github.io/Portfolio/',
//       codeUrl: 'https://github.com/Holyhelper1/Portfolio',
//       hasDemo: true,
//       hasCode: true,
//     },
//   ];

//   const techToArray = (techStr: string) => techStr.split(',').map((t) => t.trim());

//   return (
//     <section className={styles.projects} id="projects">
//       <h2 className={styles.sectionTitle}>{t.projects.title}</h2>
//       <p className={styles.sectionSubtitle}>{t.projects.subtitle}</p>

//       <div className={styles.grid}>
//         {projects.map((project) => (
//           <article
//             key={project.id}
//             className={`${styles.card} ${project.accent} ${
//               project.id === 'portfolio' ? styles.cardFullWidth : ''
//             }`}
//           >
//             <div className={styles.cardImage}>
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 loading="lazy"
//                 className={styles.cardItemImage}
//               />
//               <div className={styles.cardImageOverlay} />
//               <span className={styles.cardBadge}>{project.badge}</span>
//             </div>

//             <div className={styles.cardBody}>
//               <h3 className={styles.cardTitle}>{project.title}</h3>
//               {project.subtitle && (
//                 <p className={styles.cardSubtitle}>{project.subtitle}</p>
//               )}
//               <p className={styles.cardDescription}>{project.description}</p>

//               <div className={styles.cardTech}>
//                 {techToArray(project.tech).map((tech) => (
//                   <span key={tech} className={styles.techTag}>
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className={styles.cardActions}>
//                 {project.hasDemo && project.demoUrl && (
//                   <a
//                     href={project.demoUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`${styles.cardLink} ${styles.cardLinkPrimary}`}
//                   >
//                     <ExternalLink size={14} /> {t.projects.iReserve.demo}
//                   </a>
//                 )}
//                 {project.hasCode && project.codeUrl && (
//                   <a
//                     href={project.codeUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`${styles.cardLink} ${styles.cardLinkSecondary}`}
//                   >
//                     <FolderGit2 size={14} /> {t.projects.iReserve.code}
//                   </a>
//                 )}
//                 {project.isPrivate && (
//                   <span className={styles.privateBadge}>
//                     <Lock size={14} /> {t.projects.noCodeTesting.private}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }
