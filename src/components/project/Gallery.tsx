import type { CSSProperties } from 'react';
import { useLang } from '@/context/LanguageContext';
import type { ProjectImage } from '@/types/content';
import styles from './Gallery.module.css';

export function Gallery({ images, fit = 'cover', columns = 2 }: { images: ProjectImage[]; fit?: 'cover' | 'natural'; columns?: number }) {
  const { t } = useLang();
  if (!images.length) return null;
  return (
    <div className={`${styles.gallery} ${fit === 'natural' ? styles.natural : ''}`} style={{ '--cols': columns } as CSSProperties}>
      {images.map((img) => (
        <figure key={img.src} className={img.wide ? styles.wide : undefined}>
          <div className={styles.frame}>
            <img src={img.src} alt={t(img.alt)} loading="lazy" />
          </div>
          {img.caption && <figcaption>{t(img.caption)}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
