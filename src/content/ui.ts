import type { Localized } from '@/types/content';

/** Svi statični tekstovi sučelja na oba jezika. */
export const ui = {
  nav: {
    work: { hr: 'Radovi', en: 'Work' },
    process: { hr: 'Proces', en: 'Process' },
    about: { hr: 'O meni', en: 'About' },
    contact: { hr: 'Kontakt', en: 'Contact' },
    langLabel: { hr: 'Jezik', en: 'Language' },
    themeToLight: { hr: 'Uključi svijetlu temu', en: 'Switch to light theme' },
    themeToDark: { hr: 'Uključi tamnu temu', en: 'Switch to dark theme' },
  },
  hero: {
    status: { hr: 'Otvorena za nove poslovne prilike', en: 'Open to new job opportunities' },
    greeting: { hr: 'Bok, ja sam', en: "Hey there, I'm" },
    intro: {
      hr: 'UX/UI dizajnerica koja redizajnira web stranice i gradi vizualne identitete. Tražim tim u kojem mogu rasti i dizajnirati proizvode koje ljudi rado koriste.',
      en: "UX/UI designer who redesigns websites and builds visual identities. I'm looking for a team where I can grow and design products people enjoy using.",
    },
    ctaWork: { hr: 'Pogledaj radove ↓', en: 'See my work ↓' },
  },
  work: {
    title: { hr: 'Najnoviji radovi', en: 'Latest work' },
    count: { hr: 'projekta', en: 'projects' },
    view: { hr: 'Pogledaj projekt', en: 'View project' },
  },
  process: {
    title: { hr: 'Kako radim', en: 'How I work' },
    subtitle: { hr: 'Od problema do rješenja', en: 'From problem to solution' },
    step: { hr: 'Korak', en: 'Step' },
  },
  about: {
    eyebrow: { hr: 'O meni', en: 'About me' },
    title: { hr: 'Dizajn koji je jasan na prvi pogled.', en: 'Design that makes sense at first glance.' },
    p1: {
      hr: 'Magistra multimedije s posebnim interesom za UX/UI dizajn i oblikovanje digitalnih iskustava. U svom radu fokusiram se na stvaranje intuitivnih, funkcionalnih i vizualno privlačnih rješenja koja odgovaraju potrebama korisnika.',
      en: 'Master of Multimedia with a special interest in UX/UI design and shaping digital experiences. In my work I focus on creating intuitive, functional and visually appealing solutions that meet users’ needs.',
    },
    p2: {
      hr: 'Volim istraživati nove ideje, rješavati dizajnerske izazove i kontinuirano razvijati svoje vještine.',
      en: 'I love exploring new ideas, solving design challenges and continuously developing my skills.',
    },
    photoPlaceholder: { hr: '[ fotografija 4:5 ]', en: '[ photo 4:5 ]' },
  },
  contact: {
    eyebrow: { hr: 'Kontakt', en: 'Contact' },
    titleA: { hr: 'Radimo', en: "Let's work" },
    titleB: { hr: 'nešto', en: '' },
    titleEm: { hr: 'zajedno?', en: 'together?' },
    copy: { hr: 'Kopiraj email', en: 'Copy email' },
    copied: { hr: 'Kopirano ✓', en: 'Copied ✓' },
    selected: { hr: 'Označeno, pritisni Ctrl+C', en: 'Selected, press Ctrl+C' },
    cv: { hr: 'Preuzmi CV', en: 'Download CV' },
  },
  project: {
    back: { hr: '← Svi radovi', en: '← All work' },
    sample: { hr: 'Primjer sadržaja', en: 'Sample content' },
    about: { hr: 'O projektu', en: 'About the project' },
    problem: { hr: 'Problem', en: 'The problem' },
    work: { hr: 'Što sam radila', en: 'What I did' },
    learned: { hr: 'Što sam naučila', en: 'What I learned' },
    decisions: { hr: 'Ključne dizajnerske odluke', en: 'Key design decisions' },
    finalDesign: { hr: 'Finalni dizajn', en: 'Final design' },
    results: { hr: 'Rezultat', en: 'Results' },
    next: { hr: 'Sljedeći projekt', en: 'Next project' },
    prototype: { hr: 'Otvori prototip u Figmi ↗', en: 'Open Figma prototype ↗' },
  },
  notFound: {
    title: { hr: 'Stranica ne postoji', en: 'Page not found' },
    back: { hr: 'Natrag na početnu', en: 'Back to home' },
  },
} satisfies Record<string, Record<string, Localized>>;
