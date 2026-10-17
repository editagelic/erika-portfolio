import type { ProcessStep, SiteContent } from '@/types/content';

/**
 * Osnovni podaci o Eriki.
 */
export const site: SiteContent = {
  name: 'Erika Gelić',
  role: { hr: 'UX/UI dizajnerica', en: 'UX/UI Designer' },
  location: 'Hrvatska',
  email: 'erika.gelic12@gmail.com',
  cvUrl: `${import.meta.env.BASE_URL}cv/Erika-Gelic-CV.pdf`,
  photo: { src: `${import.meta.env.BASE_URL}images/erika.webp`, alt: { hr: 'Erika Gelić', en: 'Erika Gelić' } },
  available: true,
  socials: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/erika-geli%C4%87-491b18253/' }],
  focus: [
    'UX research',
    'UI design',
    { hr: 'Redizajn weba', en: 'Website redesign' },
    'Branding',
    { hr: 'Prototipiranje', en: 'Prototyping' },
  ],
  tools: ['Figma', 'Sketch', 'Adobe Illustrator', 'Adobe Photoshop', 'Wireframing', 'Prototyping', 'Branding'],
};

export const processSteps: ProcessStep[] = [
  {
    title: { hr: 'Istraživanje', en: 'Research' },
    text: {
      hr: 'Analiza postojećeg stanja, konkurencije i korisnika. Prvo razumijem problem, tek onda crtam.',
      en: 'I review the current product, competitors and users. I understand the problem before I draw anything.',
    },
  },
  {
    title: { hr: 'Struktura', en: 'Structure' },
    text: { hr: 'Informacijska arhitektura, user flow i wireframeovi.', en: 'Information architecture, user flows and wireframes.' },
  },
  {
    title: { hr: 'Dizajn', en: 'Design' },
    text: {
      hr: 'Vizualni stil, UI komponente i interaktivni prototip u Figmi.',
      en: 'Visual style, UI components and an interactive prototype in Figma.',
    },
  },
  {
    title: { hr: 'Testiranje', en: 'Testing' },
    text: { hr: 'Testiranje s korisnicima, iteracije i predaja developerima.', en: 'User testing, iterations and handoff to developers.' },
  },
];
