import { Send, Mail, Briefcase, Github, Heart } from 'lucide-react';
import { useLanguage } from '../../../i18n';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const socials = [
    {
      icon: <Send size={20} />,
      href: 'https://t.me/AlexanderShulg',
      label: 'Telegram',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:shulgin.alexandera@gmail.com',
      label: 'Email',
    },
    {
      icon: <Briefcase size={20} />,
      href: 'https://www.linkedin.com/in/alexander-shulgin-964b49267/',
      label: 'LinkedIn',
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com/Holyhelper1',
      label: 'GitHub',
    },
  ];

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerGlow} />

      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <div className={styles.brandName}>Alexander Shulgin</div>
            <p className={styles.brandDesc}>
              {t.hero.description}
            </p>
            <div className={styles.socials}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>{t.header.projects}</h4>
              <a href="#projects">Lumiere-closet</a>
              <a href="#projects">Tentoteka</a>
              <a href="#projects">Ruslana Cakes</a>
              <a href="#projects">No-Code Testing</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>{t.header.contact}</h4>
              <a href="https://t.me/AlexanderShulg" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
              <a href="mailto:shulgin.alexandera@gmail.com">
                Email
              </a>
              <a href="https://www.linkedin.com/in/alexander-shulgin-964b49267/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/Holyhelper1" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <span className={styles.copyright}>
            © {currentYear} Alexander Shulgin. {t.footer.rights}.
          </span>
          <span className={styles.madeWith}>
            {t.footer.madeWith} <Heart size={14} className={styles.heart} /> React & TypeScript
          </span>
        </div>
      </div>
    </footer>
  );
}