import { useLocation, useNavigate } from 'react-router-dom';
import { useLang } from '@/context/LanguageContext';
import { LANGS } from '@/lib/i18n';
import { switchLangPath } from '@/lib/paths';
import { ui } from '@/content/ui';
import styles from './LangSwitch.module.css';

export function LangSwitch() {
  const { lang, t } = useLang();
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.seg} role="group" aria-label={t(ui.nav.langLabel)}>
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          aria-pressed={l === lang}
          className={styles.opt}
          onClick={() => l !== lang && navigate(switchLangPath(pathname, hash, l), { replace: true })}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
