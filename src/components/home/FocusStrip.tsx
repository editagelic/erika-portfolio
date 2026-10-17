import { Fragment } from 'react';
import { useLang } from '@/context/LanguageContext';
import { site } from '@/content/site';
import styles from './FocusStrip.module.css';

export function FocusStrip() {
  const { t } = useLang();
  return (
    <div className="container">
      <div className={styles.strip}>
        {site.focus.map((f, i) => (
          <Fragment key={i}>
            {i > 0 && <i aria-hidden="true" />}
            <span>{t(f)}</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
