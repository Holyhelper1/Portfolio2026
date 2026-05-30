import { Code2, Braces, Palette, Wrench, FlaskConical } from 'lucide-react';
import { useLanguage } from '../../../i18n';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import styles from './TechStack.module.css';

export function TechStack() {
  const { t } = useLanguage();
  const { ref, isRevealed } = useScrollReveal();

  const categories = [
    {
      icon: <Code2 size={22} />,
      iconClass: styles.iconLang,
      title: t.stack.languages,
      skills: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
    },
    {
      icon: <Braces size={22} />,
      iconClass: styles.iconFw,
      title: t.stack.frameworks,
      skills: ['React', 'Next.js', 'Redux Toolkit', 'RTK Query', 'Vite'],
    },
    {
      icon: <Palette size={22} />,
      iconClass: styles.iconStyle,
      title: t.stack.styling,
      skills: ['SCSS / SASS', 'Tailwind CSS', 'CSS Modules', 'Material UI'],
    },
    {
      icon: <Wrench size={22} />,
      iconClass: styles.iconTool,
      title: t.stack.tools,
      skills: ['Git / GitHub', 'WordPress REST API', 'Prisma (ORM)', 'Firebase', 'Docker', 'VDS'],
    },
    {
      icon: <FlaskConical size={22} />,
      iconClass: styles.iconTest,
      title: t.stack.testing,
      skills: ['Playwright', 'Jest'],
    },
  ];

  return (
    <section 
      className={`${styles.stack} ${isRevealed ? styles.visible : ''}`} 
      id="stack"
      ref={ref}
    >
      <h2 className={styles.sectionTitle}>{t.stack.title}</h2>
      <p className={styles.sectionSubtitle}>{t.stack.subtitle}</p>

      <div className={styles.categories}>
        {categories.map((category, catIndex) => (
          <div 
            key={category.title} 
            className={styles.category}
            style={{ '--cat-index': catIndex } as React.CSSProperties}
          >
            <div className={`${styles.categoryIcon} ${category.iconClass}`}>
              {category.icon}
            </div>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skills}>
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skill} 
                  className={styles.skill}
                  style={{ '--skill-index': skillIndex } as React.CSSProperties}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
