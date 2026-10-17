import type { Lang } from './i18n';

/** Segment URL-a za projekte na svakom jeziku: /hr/projekti/..., /en/projects/... */
export const PROJECT_SEGMENT: Record<Lang, string> = { hr: 'projekti', en: 'projects' };

export const homePath = (lang: Lang, hash?: string) => `/${lang}${hash ? `#${hash}` : ''}`;

export const projectPath = (lang: Lang, slug: string) => `/${lang}/${PROJECT_SEGMENT[lang]}/${slug}`;

/** Prebacuje trenutnu putanju na drugi jezik, zadržava stranicu i hash. */
export function switchLangPath(pathname: string, hash: string, to: Lang): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length >= 3) return projectPath(to, parts[2]) + hash;
  return homePath(to) + hash;
}

/** ID-jevi sekcija na početnoj (koriste se za sidra u navigaciji) */
export const SECTION_IDS = {
  work: 'radovi',
  process: 'proces',
  about: 'o-meni',
  contact: 'kontakt',
} as const;
