import { Link } from 'react-router-dom';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/content/ui';
import { projectPath } from '@/lib/paths';
import type { Project } from '@/types/content';
import styles from './NextProject.module.css';

export function NextProject({ project }: { project: Project }) {
  const { lang, t } = useLang();
  return (
    <Link to={projectPath(lang, project.slug)} className={styles.next}>
      <div>
        <span className={styles.eyebrow}>{t(ui.project.next)}</span>
        <h3>{t(project.title)}</h3>
      </div>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </Link>
  );
}
