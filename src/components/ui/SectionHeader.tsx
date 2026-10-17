import styles from './SectionHeader.module.css';

interface Props {
  title: string;
  aside?: string;
  id?: string;
}

export function SectionHeader({ title, aside, id }: Props) {
  return (
    <div className={styles.head}>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {aside && <span className="label">{aside}</span>}
    </div>
  );
}
