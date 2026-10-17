import { Link } from 'react-router-dom';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/content/ui';
import { homePath, SECTION_IDS } from '@/lib/paths';
import type { Project } from '@/types/content';
import { ProjectMockup } from '@/components/mockups/ProjectMockup';
import styles from './ProjectHeader.module.css';

export function ProjectHeader({ project }: { project: Project }) {
  const { lang, t } = useLang();
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Link to={homePath(lang, SECTION_IDS.work)} className={styles.back}>
          {t(ui.project.back)}
        </Link>
        {project.isSample && <span className={styles.sample}>{t(ui.project.sample)}</span>}
      </div>

      <div className={styles.intro}>
        <span className="label">Case study</span>
        <h1>{t(project.title)}</h1>
        <p>{t(project.lead)}</p>
        {project.prototypeUrl && (
          <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer" className={styles.proto}>
            {t(ui.project.prototype)}
          </a>
        )}
      </div>

      <div className={`${styles.cover} ${project.cover ? styles.hasCover : ''}`} style={{ background: project.surface }}>
        {project.cover ? (
          <img src={project.cover.src} alt={t(project.cover.alt)} />
        ) : (
          <ProjectMockup data={project.mockup} static />
        )}
      </div>
    </header>
  );
}
