import { createContext, useCallback, useContext, useEffect, type ReactNode } from 'react';
import { localize, type Lang } from '@/lib/i18n';
import { storage } from '@/lib/storage';
import type { Text } from '@/types/content';

interface LanguageContextValue {
  lang: Lang;
  /** Prevodi tekst na trenutni jezik */
  t: (text: Text) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LANG_STORAGE_KEY = 'lang';

/** Jezik dolazi iz URL-a (/hr, /en); provider ga samo dijeli komponentama. */
export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    storage.set(LANG_STORAGE_KEY, lang);
  }, [lang]);

  const t = useCallback((text: Text) => localize(text, lang), [lang]);

  return <LanguageContext.Provider value={{ lang, t }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang mora biti unutar LanguageProvider');
  return ctx;
}
