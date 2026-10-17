import { useLang } from '@/context/LanguageContext';
import type { Chapter } from '@/types/content';
import { ProjectSection } from './ProjectSection';
import { Gallery } from './Gallery';
import styles from './ChapterSection.module.css';

/** Jedna faza procesa: numerirani naslov, tekst, natuknice i slike. */
export function ChapterSection({ chapter, index }: { chapter: Chapter; index: number }) {
  const { t } = useLang();
  const number = String(index + 1).padStart(2, '0');

  return (
    <>
      <ProjectSection
        title={t(chapter.title)}
        eyebrow={number}
      >
        {chapter.text.map((p, i) => (
          <p key={i}>{t(p)}</p>
        ))}
        {chapter.list && chapter.list.length > 0 && (
          <>
            {chapter.listTitle && <p className={styles.listTitle}>{t(chapter.listTitle)}</p>}
            <ul className={styles.list}>
              {chapter.list.map((item, i) => {
                const [term, ...rest] = t(item).split(' – ');
                return (
                  <li key={i}>
                    {rest.length ? (
                      <>
                        <strong>{term}</strong> – {rest.join(' – ')}
                      </>
                    ) : (
                      term
                    )}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </ProjectSection>
      {chapter.images && <Gallery images={chapter.images} fit="natural" columns={chapter.columns} />}
    </>
  );
}
