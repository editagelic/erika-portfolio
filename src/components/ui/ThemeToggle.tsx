import { useTheme } from '@/context/ThemeContext';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/content/ui';
import { MoonIcon, SunIcon } from './icons';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLang();
  const label = t(theme === 'dark' ? ui.nav.themeToLight : ui.nav.themeToDark);

  return (
    <button type="button" className={styles.btn} onClick={toggleTheme} aria-label={label} title={label}>
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
