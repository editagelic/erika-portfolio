import { site } from '@/content/site';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <span>
        © {new Date().getFullYear()} {site.name}
      </span>
      <div className={styles.links}>
        {site.socials.map((s) => (
          <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
