import styles from './Tag.module.css';

export function Tag({ children }: { children: string }) {
  return <span className={styles.tag}>{children}</span>;
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className={styles.list}>
      {tags.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  );
}
