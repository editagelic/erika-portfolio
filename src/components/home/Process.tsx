import { useLang } from '@/context/LanguageContext';
import { ui } from '@/content/ui';
import { processSteps } from '@/content/site';
import { SECTION_IDS } from '@/lib/paths';
import { SectionHeader } from '@/components/ui/SectionHeader';
import styles from './Process.module.css';

export function Process() {
  const { t } = useLang();
  return (
    <section id={SECTION_IDS.process} className={`container ${styles.section}`}>
      <SectionHeader title={t(ui.process.title)} aside={t(ui.process.subtitle)} />
      <ol className={styles.steps}>
        {processSteps.map((s, i) => (
          <li key={i} className={styles.step}>
            <span className="label">
              {t(ui.process.step)} {i + 1}
            </span>
            <h3>{t(s.title)}</h3>
            <p>{t(s.text)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
