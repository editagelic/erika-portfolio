import { useLang } from '@/context/LanguageContext';
import type { BrandMockupData, BrowserMockupData, MockupData } from '@/types/content';
import styles from './ProjectMockup.module.css';

/** Ilustracija projekta dok nema prave naslovne slike. */
export function ProjectMockup({ data, static: isStatic = false }: { data: MockupData; static?: boolean }) {
  return data.kind === 'browser' ? <BrowserMockup data={data} isStatic={isStatic} /> : <BrandBoard data={data} isStatic={isStatic} />;
}

function BrowserMockup({ data, isStatic }: { data: BrowserMockupData; isStatic: boolean }) {
  const { t } = useLang();
  const { page } = data;
  return (
    <div className={`${styles.browser} ${isStatic ? styles.static : ''}`} aria-hidden="true">
      <div className={styles.chrome}>
        <i />
        <i />
        <i />
      </div>
      <div className={styles.page} style={{ background: page.bg, color: page.fg }}>
        <div className={styles.nb}>
          <b>{data.brand}</b>
          <span>
            {[0, 1, 2].map((i) => (
              <i key={i} style={{ background: page.muted }} />
            ))}
          </span>
        </div>
        <div className={styles.big}>{t(data.headline)}</div>
        <div className={styles.ln} style={{ background: page.muted }} />
        <span className={styles.pill} style={{ background: page.accent }}>
          {t(data.cta)}
        </span>
        <div className={styles.tiles}>
          {page.tiles.map((c, i) => (
            <i key={i} style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BrandBoard({ data, isStatic }: { data: BrandMockupData; isStatic: boolean }) {
  return (
    <div className={`${styles.board} ${isStatic ? styles.static : ''}`} aria-hidden="true">
      <div className={styles.mark} style={{ background: data.dark, color: data.light }}>
        <div>
          {data.wordmark}
          <small>{data.tagline}</small>
        </div>
      </div>
      <div className={styles.swatches}>
        {data.swatches.map((c) => (
          <i key={c} style={{ background: c }} />
        ))}
      </div>
      <div className={styles.type} style={{ background: data.light, color: data.dark }}>
        Aa
      </div>
    </div>
  );
}
