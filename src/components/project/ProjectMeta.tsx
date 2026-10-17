import { useLang } from '@/context/LanguageContext';
import type { Project } from '@/types/content';
import styles from './ProjectMeta.module.css';

export function ProjectMeta({ meta }: { meta: Project['meta'] }) {
  const { t } = useLang();
  return (
    <dl className={styles.meta}>
      {meta.map((m, i) => (
        <div key={i}>
          <dt className="label">{t(m.label)}</dt>
          <dd>{t(m.value)}</dd>
        </div>
      ))}
    </dl>
  );
}
