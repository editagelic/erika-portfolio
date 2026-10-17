import type { Text } from '@/types/content';

export const LANGS = ['hr', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'hr';

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value);
}

/** Vraća tekst za zadani jezik. Običan string vraća nepromijenjen. */
export function localize(text: Text, lang: Lang): string {
  return typeof text === 'string' ? text : text[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'hr' ? 'en' : 'hr';
}
