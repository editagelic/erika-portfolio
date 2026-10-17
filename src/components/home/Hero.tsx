import { useLang } from '@/context/LanguageContext';
import { ui } from '@/content/ui';
import { site } from '@/content/site';
import { homePath, SECTION_IDS } from '@/lib/paths';
import { Button } from '@/components/ui/Button';
import { CursorIcon } from '@/components/ui/icons';
import styles from './Hero.module.css';

export function Hero() {
  const { lang, t } = useLang();
  const firstName = site.name.split(' ')[0];

  return (
    <header className={`container ${styles.hero}`}>
      {site.available && (
        <div className={styles.status}>
          <span className={styles.dot} />
          {t(ui.hero.status)}
        </div>
      )}

      <h1 className={styles.title}>
        {t(ui.hero.greeting)}
        <br />
        {/* Figma okvir selekcije oko imena */}
        <span className={styles.sel}>
          {firstName}
          <i className={`${styles.h} ${styles.tl}`} />
          <i className={`${styles.h} ${styles.tr}`} />
          <i className={`${styles.h} ${styles.bl}`} />
          <i className={`${styles.h} ${styles.br}`} />
          <span className={styles.dim} aria-hidden="true">
            Hug × Hug
          </span>
          <span className={styles.cursor} aria-hidden="true">
            <CursorIcon color="var(--cursor)" />
            <b>{firstName}</b>
          </span>
        </span>
      </h1>

      <div className={styles.foot}>
        <p>{t(ui.hero.intro)}</p>
        <div className={styles.ctas}>
          <Button to={homePath(lang, SECTION_IDS.work)}>{t(ui.hero.ctaWork)}</Button>
          <Button variant="ghost" href={site.cvUrl} external>
            CV
          </Button>
        </div>
      </div>
    </header>
  );
}
