import type { CSSProperties } from 'react';
import { useParams } from 'react-router-dom';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/content/ui';
import { site } from '@/content/site';
import { getNextProject, getProject } from '@/content/projects';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { ProjectHeader } from '@/components/project/ProjectHeader';
import { ProjectMeta } from '@/components/project/ProjectMeta';
import { GoalList, ProjectSection } from '@/components/project/ProjectSection';
import { Gallery } from '@/components/project/Gallery';
import { ChapterSection } from '@/components/project/ChapterSection';
import { Results } from '@/components/project/Results';
import { NextProject } from '@/components/project/NextProject';
import { NotFoundPage } from './NotFoundPage';

export function ProjectPage() {
  const { slug = '' } = useParams();
  const { t } = useLang();
  const project = getProject(slug);

  useDocumentTitle(project ? `${t(project.title)} · ${site.name}` : site.name);

  if (!project) return <NotFoundPage />;

  const next = getNextProject(project.slug);

  return (
    <article className="container" style={{ '--project-accent': project.accent, paddingBottom: 40 } as CSSProperties}>
      <ProjectHeader project={project} />
      <ProjectMeta meta={project.meta} />

      <ProjectSection title={t(ui.project.about)}>
        <Paragraphs text={t(project.about)} />
      </ProjectSection>

      {project.problem && (
        <ProjectSection title={t(project.problemLabel ?? ui.project.problem)}>
          <Paragraphs text={t(project.problem)} />
        </ProjectSection>
      )}

      {project.work && project.work.length > 0 && (
        <ProjectSection title={t(ui.project.work)}>
          <GoalList items={project.work.map(t)} />
        </ProjectSection>
      )}

      {project.chapters?.map((ch, i) => (
        <ChapterSection key={i} chapter={ch} index={i} />
      ))}

      {project.decisions && project.decisions.length > 0 && (
        <ProjectSection title={t(ui.project.decisions)}>
          <GoalList items={project.decisions.map(t)} />
        </ProjectSection>
      )}

      {project.chapters && project.gallery.length > 0 && (
        <ProjectSection title={t(ui.project.finalDesign)} eyebrow={String(project.chapters.length + 1).padStart(2, '0')}>
          {null}
        </ProjectSection>
      )}
      <Gallery images={project.gallery} />

      {project.results && project.results.length > 0 && (
        <ProjectSection title={t(ui.project.results)}>
          <Results results={project.results} />
        </ProjectSection>
      )}

      <ProjectSection title={t(ui.project.learned)}>
        <Paragraphs text={t(project.learned)} />
      </ProjectSection>

      <NextProject project={next} />
    </article>
  );
}

/** Tekst s praznim redom ("\n\n") prikazuje se kao više odlomaka. */
function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split(/\n\s*\n/).map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </>
  );
}
