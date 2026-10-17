import { useLang } from '@/context/LanguageContext';
import type { Project } from '@/types/content';
import styles from './Results.module.css';

export function Results({ results }: { results: NonNullable<Project['results']> }) {
  const { t } = useLang();
  return (
    <div className={styles.results}>
      {results.map((r, i) => (
        <div key={i}>
          <b>{r.value}</b>
          <span>{t(r.label)}</span>
        </div>
      ))}
    </div>
  );
}
