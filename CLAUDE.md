# Erika Gelić portfolio — upute za Claude Code

Portfolio UX/UI dizajnerice. React 18 + TypeScript + Vite + React Router 6, CSS Modules. Bez UI biblioteka.

## Naredbe
- `yarn dev` — lokalni server
- `yarn build` — typecheck + produkcijski build (mora proći prije commita)
- `yarn typecheck` — samo TypeScript

## Arhitektura
```
src/
  content/      SAV sadržaj (tekstovi HR/EN, projekti, podaci o Eriki) — mijenjaj ovdje, ne u komponentama
    site.ts       ime, email, linkovi, CV, alati, koraci procesa
    projects.ts   projekti (case studyji) + getProject / getNextProject
    ui.ts         statični tekstovi sučelja (gumbi, naslovi sekcija)
  types/        TypeScript tipovi sadržaja (Localized, Project, ...)
  lib/          čiste funkcije: i18n (localize, isLang), paths (URL-ovi), storage (siguran localStorage)
  context/      ThemeContext (light/dark), LanguageContext (jezik iz URL-a, funkcija t())
  hooks/        useCopyToClipboard, useDocumentTitle, useScrollToHash
  components/
    ui/         generičke komponente: Button, Tag, SectionHeader, LangSwitch, ThemeToggle, icons
    layout/     Navbar, Footer, Layout (Outlet)
    mockups/    ProjectMockup — ilustracija projekta dok nema prave slike
    home/       sekcije početne: Hero, FocusStrip, ProjectGrid, ProjectCard, Process, About, Contact
    project/    dijelovi case study stranice: ProjectHeader, ProjectMeta, ProjectSection, Gallery, Results, NextProject
  pages/        HomePage, ProjectPage, NotFoundPage
  styles/       tokens.css (sve boje/fontovi, light + dark), global.css
public/images/projects/<slug>/   slike projekata
```

## Pravila
- **Rute:** `/hr`, `/en`, `/hr/projekti/:slug`, `/en/projects/:slug`. Putanje uvijek preko `lib/paths.ts` (`homePath`, `projectPath`), nikad ručno.
- **Tekst:** svaki tekst vidljiv korisniku je `Localized` (`{ hr, en }`) u `content/`. U komponenti koristi `const { t } = useLang()` i `t(tekst)`. Nikad hardkodirani hrvatski/engleski u JSX-u.
- **Boje:** samo CSS varijable iz `styles/tokens.css`. Nova boja = novi token u oba bloka (light i `[data-theme='dark']`). Iznimka: mockupi klijentskih stranica.
- **Stilovi:** CSS Module uz svaku komponentu (`Component.module.css`). Globalne klase samo `.container`, `.label`, `.visually-hidden`.
- **Novi projekt:** dodaj objekt u `content/projects.ts` i slike u `public/images/projects/<slug>/`. Ništa drugo ne treba mijenjati.
- **Prava slika umjesto mockupa:** postavi `cover: { src, alt }` na projektu.
- **Primjer sadržaja:** projekti s `isSample: true` prikazuju oznaku "Primjer sadržaja". Kad je sadržaj stvaran, postavi na `false`.
- Pristupačnost: alt tekst na svim slikama, vidljiv fokus, poštuj `prefers-reduced-motion`.
- Responzivno do 360px širine, bez horizontalnog skrolanja.

## Otvoreni TODO
- Projekti imaju prave slike; tekstovi su napisani prema dizajnima — Erika ih treba provjeriti
- Dodati trajanje i alate u `meta`, a stvarne brojke u `results` ako postoje
