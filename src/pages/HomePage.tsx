import { useLang } from '@/context/LanguageContext';
import { site } from '@/content/site';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Hero } from '@/components/home/Hero';
import { FocusStrip } from '@/components/home/FocusStrip';
import { ProjectGrid } from '@/components/home/ProjectGrid';
import { Process } from '@/components/home/Process';
import { About } from '@/components/home/About';
import { Contact } from '@/components/home/Contact';

export function HomePage() {
  const { t } = useLang();
  useDocumentTitle(`${site.name} · ${t(site.role)}`);

  return (
    <>
      <Hero />
      <FocusStrip />
      <ProjectGrid />
      <Process />
      <About />
      <Contact />
    </>
  );
}
