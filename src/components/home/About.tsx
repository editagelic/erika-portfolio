import { useLang } from '@/context/LanguageContext';
import { ui } from '@/content/ui';
import { site } from '@/content/site';
import { SECTION_IDS } from '@/lib/paths';
import styles from './About.module.css';

export function About() {
  const { t } = useLang();
  return (
    <section id={SECTION_IDS.about} className={`container ${styles.section}`}>
      <div className={styles.grid}>
        <div className={styles.portrait}>
          {site.photo ? (
            <img src={site.photo.src} alt={t(site.photo.alt)} loading="lazy" />
          ) : (
            <span className={styles.placeholder}>{t(ui.about.photoPlaceholder)}</span>
          )}
          <span className={styles.chip}>{site.name}</span>
        </div>
        <div className={styles.text}>
          <span className="label">{t(ui.about.eyebrow)}</span>
          <h2>{t(ui.about.title)}</h2>
          <p>{t(ui.about.p1)}</p>
          <p>{t(ui.about.p2)}</p>
          <ul className={styles.tools}>
            {site.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
