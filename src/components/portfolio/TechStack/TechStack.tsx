
import { Code2, Braces, Palette, Wrench, FlaskConical } from 'lucide-react';
import { useLanguage } from '../../../i18n';
import styles from './TechStack.module.css';

export function TechStack() {
  const { t } = useLanguage();

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
      skills: ['React', 'Redux Toolkit', 'RTK Query', 'Vite', 'Next.js'],
    },
    {
      icon: <Palette size={22} />,
      iconClass: styles.iconStyle,
      title: t.stack.styling,
      skills: ['Material UI', 'Tailwind CSS', 'CSS Modules', 'SASS'],
    },
    {
      icon: <Wrench size={22} />,
      iconClass: styles.iconTool,
      title: t.stack.tools,
      skills: ['Git', 'GitHub Actions', 'Docker', 'Figma', 'VDS'],
    },
    {
      icon: <FlaskConical size={22} />,
      iconClass: styles.iconTest,
      title: t.stack.testing,
      skills: ['Playwright', 'Jest'],
    },
  ];

  return (
    <section className={styles.stack} id="stack">
      <h2 className={styles.sectionTitle}>{t.stack.title}</h2>
      <p className={styles.sectionSubtitle}>{t.stack.subtitle}</p>

      <div className={styles.categories}>
        {categories.map((category) => (
          <div key={category.title} className={styles.category}>
            <div className={`${styles.categoryIcon} ${category.iconClass}`}>
              {category.icon}
            </div>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skills}>
              {category.skills.map((skill) => (
                <span key={skill} className={styles.skill}>
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
