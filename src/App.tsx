import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { LanguageProvider, LANG_STORAGE_KEY } from '@/context/LanguageContext';
import { DEFAULT_LANG, isLang, LANGS } from '@/lib/i18n';
import { PROJECT_SEGMENT } from '@/lib/paths';
import { storage } from '@/lib/storage';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { ProjectPage } from '@/pages/ProjectPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

/** "/" → zadnji odabrani jezik ili hrvatski */
function RootRedirect() {
  const saved = storage.get(LANG_STORAGE_KEY);
  return <Navigate to={`/${isLang(saved) ? saved : DEFAULT_LANG}`} replace />;
}

/** Provjeri jezik iz URL-a i daj ga cijelom stablu */
function LangRoute() {
  const { lang } = useParams();
  if (!isLang(lang)) return <Navigate to={`/${DEFAULT_LANG}`} replace />;
  return (
    <LanguageProvider lang={lang}>
      <Layout />
    </LanguageProvider>
  );
}

export default function App() {
  // oba naziva segmenta rade na oba jezika (/hr/projects/x se ne lomi)
  const segments = Array.from(new Set(LANGS.map((l) => PROJECT_SEGMENT[l])));

  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/:lang" element={<LangRoute />}>
        <Route index element={<HomePage />} />
        {segments.map((seg) => (
          <Route key={seg} path={`${seg}/:slug`} element={<ProjectPage />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
