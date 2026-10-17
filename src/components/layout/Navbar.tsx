import { Link } from 'react-router-dom';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/content/ui';
import { homePath, SECTION_IDS } from '@/lib/paths';
import { LangSwitch } from '@/components/ui/LangSwitch';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/Button';
import styles from './Navbar.module.css';

export function Navbar() {
  const { lang, t } = useLang();

  const links = [
    { id: SECTION_IDS.work, label: ui.nav.work },
    { id: SECTION_IDS.process, label: ui.nav.process },
    { id: SECTION_IDS.about, label: ui.nav.about },
  ];

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <Link to={homePath(lang)} className={styles.logo}>
          erika<span>.</span>gelić
        </Link>
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.id}>
              <Link to={homePath(lang, l.id)}>{t(l.label)}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.controls}>
          <LangSwitch />
          <ThemeToggle />
          <Button to={homePath(lang, SECTION_IDS.contact)} className={styles.cta}>
            {t(ui.nav.contact)}
          </Button>
        </div>
      </div>
    </nav>
  );
}
