import type { ReactNode } from 'react';
import styles from './ProjectSection.module.css';

/** Dvostupčani blok: naslov lijevo, sadržaj desno. */
export function ProjectSection({ title, eyebrow, children }: { title: string; eyebrow?: string; children: ReactNode }) {
  return (
    <section className={styles.block}>
      <h2>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        {title}
      </h2>
      <div className={styles.body}>{children}</div>
    </section>
  );
}

export function GoalList({ items }: { items: string[] }) {
  return (
    <ul className={styles.goals}>
      {items.map((g) => (
        <li key={g}>{g}</li>
      ))}
    </ul>
  );
}

export function ProcessCards({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className={styles.steps}>
      {steps.map((s, i) => (
        <li key={i} className={styles.step}>
          <span className="label">{String(i + 1).padStart(2, '0')}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
