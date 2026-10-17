import { Link } from 'react-router-dom';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/content/ui';
import { projectPath } from '@/lib/paths';
import type { Project } from '@/types/content';
import { ProjectMockup } from '@/components/mockups/ProjectMockup';
import { TagList } from '@/components/ui/Tag';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }: { project: Project }) {
  const { lang, t } = useLang();

  return (
    <Link to={projectPath(lang, project.slug)} className={`${styles.card} mockup-host`}>
      <div className={`${styles.shot} ${project.cover ? styles.hasCover : ''}`} style={{ background: project.surface }}>
        {project.cover ? (
          <img src={project.cover.src} alt={t(project.cover.alt)} loading="lazy" className={styles.coverImg} />
        ) : (
          <ProjectMockup data={project.mockup} />
        )}
      </div>
      <div className={styles.info}>
        <TagList tags={project.tags.map(t)} />
        <h3 className={styles.title}>{t(project.title)}</h3>
        <p className={styles.summary}>{t(project.summary)}</p>
        <span className={styles.more}>
          {t(ui.work.view)} <i aria-hidden="true">→</i>
        </span>
      </div>
    </Link>
  );
}
