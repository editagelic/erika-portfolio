import type { Lang } from '@/lib/i18n';

/** Tekst na oba jezika. */
export type Localized = Record<Lang, string>;

/** Tekst koji je isti na oba jezika (npr. ime brenda) ili preveden. */
export type Text = string | Localized;

export interface BrowserMockupData {
  kind: 'browser';
  brand: string;
  headline: Text;
  cta: Text;
  /** Boje stranice u mockupu: pozadina, tekst, gumb, pločice */
  page: { bg: string; fg: string; accent: string; muted: string; tiles: [string, string, string] };
}

export interface BrandMockupData {
  kind: 'brand';
  wordmark: string;
  tagline: string;
  dark: string;
  light: string;
  swatches: [string, string, string];
}

export type MockupData = BrowserMockupData | BrandMockupData;

export interface ProjectImage {
  /** Putanja u /public, npr. /images/projects/zrnce/cover.svg */
  src: string;
  alt: Text;
  caption?: Text;
  /** Zauzima cijeli red u galeriji */
  wide?: boolean;
}

export interface Project {
  slug: string;
  title: Text;
  /** Kratki opis na kartici */
  summary: Localized;
  /** Uvodna rečenica na stranici projekta */
  lead: Localized;
  tags: Text[];
  /** Akcentna boja projekta (hex) */
  accent: string;
  /** CSS token za pozadinu kartice, npr. var(--soft1) */
  surface: string;
  /** Ako postoji, kartica prikazuje sliku umjesto mockupa */
  cover?: ProjectImage;
  mockup: MockupData;
  meta: { label: Localized; value: Text }[];
  /** O projektu */
  about: Localized;
  /** Problem / izazov */
  problem?: Localized;
  /** Naslov sekcije problema (zadano: "Problem") */
  problemLabel?: Localized;
  /** Što sam radila — natuknice */
  work?: Localized[];
  /** Ključne dizajnerske odluke — prikazuju se nakon faza */
  decisions?: Localized[];
  /** Faze procesa (npr. analiza, wireframeovi) — prikazuju se numerirano */
  chapters?: Chapter[];
  /** Što sam naučila */
  learned: Localized;
  gallery: ProjectImage[];
  /** Mjerljivi rezultati — samo ako su stvarni */
  results?: { value: string; label: Localized }[];
  /** Link na Figma prototip (opcionalno) */
  prototypeUrl?: string;
  /** true dok je sadržaj izmišljen — prikazuje oznaku "Primjer sadržaja" */
  isSample?: boolean;
}

export interface Chapter {
  title: Localized;
  /** Odlomci teksta */
  text: Localized[];
  listTitle?: Localized;
  /** Natuknice; "Pojam – opis" prikazuje pojam podebljano */
  list?: Localized[];
  /** Slike prikazane u prirodnom omjeru */
  images?: ProjectImage[];
  /** Broj stupaca za slike na desktopu (zadano 2) */
  columns?: 2 | 3 | 4;
}

export interface ProcessStep {
  title: Localized;
  text: Localized;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface SiteContent {
  name: string;
  role: Localized;
  location: string;
  email: string;
  cvUrl: string;
  photo?: ProjectImage;
  available: boolean;
  socials: SocialLink[];
  focus: Text[];
  tools: string[];
}
