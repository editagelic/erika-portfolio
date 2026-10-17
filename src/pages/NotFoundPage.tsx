import { useLang } from '@/context/LanguageContext';
import { ui } from '@/content/ui';
import { homePath } from '@/lib/paths';
import { Button } from '@/components/ui/Button';

export function NotFoundPage() {
  const { lang, t } = useLang();
  return (
    <section className="container" style={{ paddingBlock: '120px', display: 'grid', gap: 24, justifyItems: 'start' }}>
      <span className="label">404</span>
      <h1 style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 800, letterSpacing: '-0.03em' }}>{t(ui.notFound.title)}</h1>
      <Button to={homePath(lang)}>{t(ui.notFound.back)}</Button>
    </section>
  );
}
