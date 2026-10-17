# Erika Gelić — portfolio

React + TypeScript + Vite. HR/EN, svijetla i tamna tema, stranica za svaki projekt.

## Pokretanje
```bash
yarn install
yarn dev        # http://localhost:5173
```

## Rad s Claude Codeom
U mapi projekta pokreni `claude`. Datoteka `CLAUDE.md` mu objašnjava arhitekturu i pravila, pa možeš odmah tražiti npr.:
- „Ubaci pravi sadržaj za projekt Zrnce: …"
- „Dodaj lightbox za slike u galeriji"
- „Dodaj animaciju pojavljivanja sekcija pri skrolanju"

## Gdje se što mijenja
| Što | Gdje |
|---|---|
| Ime, email, linkovi, CV, alati | `src/content/site.ts` |
| Projekti (tekst, slike, rezultati) | `src/content/projects.ts` |
| Tekstovi gumba i naslova | `src/content/ui.ts` |
| Boje i fontovi | `src/styles/tokens.css` |
| Slike projekata | `public/images/projects/<slug>/` |
| CV | `public/cv/Erika-Gelic-CV.pdf` |

## Objava (Vercel)
1. Pushaj projekt na GitHub
2. vercel.com → Add New Project → odaberi repo → Deploy (Vite se prepozna sam)
3. Po želji spoji vlastitu domenu u Settings → Domains

`vercel.json` i `public/_redirects` (Netlify) već su podešeni da rade direktni linkovi na projekte.
