import { useRef } from 'react';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/content/ui';
import { site } from '@/content/site';
import { SECTION_IDS } from '@/lib/paths';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { Button } from '@/components/ui/Button';
import styles from './Contact.module.css';

export function Contact() {
  const { t } = useLang();
  const emailRef = useRef<HTMLElement>(null);
  const { state, copy } = useCopyToClipboard();
  const linkedin = site.socials.find((s) => s.label === 'LinkedIn');

  const copyLabel = state === 'copied' ? ui.contact.copied : state === 'selected' ? ui.contact.selected : ui.contact.copy;

  return (
    <section id={SECTION_IDS.contact} className={`container ${styles.section}`}>
      <span className="label">{t(ui.contact.eyebrow)}</span>
      <h2 className={styles.title}>
        {t(ui.contact.titleA)}
        <br />
        {t(ui.contact.titleB)} <em>{t(ui.contact.titleEm)}</em>
      </h2>
      <div className={styles.row}>
        <code ref={emailRef} className={styles.email}>
          {site.email}
        </code>
        <Button onClick={() => copy(site.email, emailRef.current)} aria-live="polite">
          {t(copyLabel)}
        </Button>
        <Button variant="ghost" href={site.cvUrl} external>
          {t(ui.contact.cv)}
        </Button>
        {linkedin && (
          <Button variant="ghost" href={linkedin.url} external>
            LinkedIn ↗
          </Button>
        )}
      </div>
    </section>
  );
}
