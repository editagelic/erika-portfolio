import { useLang } from '@/context/LanguageContext';
import { ui } from '@/content/ui';
import { projects } from '@/content/projects';
import { SECTION_IDS } from '@/lib/paths';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectCard } from './ProjectCard';
import styles from './ProjectGrid.module.css';

export function ProjectGrid() {
  const { t } = useLang();
  return (
    <section id={SECTION_IDS.work} className={`container ${styles.section}`}>
      <SectionHeader title={t(ui.work.title)} aside={`${projects.length} ${t(ui.work.count)}`} />
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
