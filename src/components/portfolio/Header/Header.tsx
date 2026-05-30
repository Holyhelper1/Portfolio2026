import { useState } from 'react';
import { useLanguage } from '../../../i18n';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import styles from './Header.module.css';
import Logo from '../../../assets/logo.png';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { key: 'about', label: t.header.about },
    { key: 'projects', label: t.header.projects },
    { key: 'stack', label: t.header.stack },
    { key: 'contact', label: t.header.contact },
  ];

  const handleNav = (section: string) => {
    onNavigate(section);
    setMobileOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
       <div className={styles.logoContainer} onClick={() => handleNav('hero')}>
          <img 
            src={Logo}
            alt="Alexander Shulgin Logo" 
            className={styles.logoIcon} 
          />
          <span className={styles.logoText}>
            Shulgin<span className={styles.logoDot}>.dev</span>
          </span>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <span
              key={item.key}
              className={styles.navLink}
              onClick={() => handleNav(item.key)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNav(item.key)}
            >
              {item.label}
            </span>
          ))}
        </nav>

        <div className={styles.controls}>
          <LangSwitcher />
          <ThemeToggle />
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <span
              key={item.key}
              className={styles.mobileNavLink}
              onClick={() => handleNav(item.key)}
              role="button"
              tabIndex={0}
            >
              {item.label}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
