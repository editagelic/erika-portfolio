import type { Localized, Project, ProjectImage } from '@/types/content';

/**
 * Projekti. Redoslijed u nizu = redoslijed na stranici.
 * Slike su u public/images/projects/<slug>/ (WebP, max 1800 px).
 *
 * Tekstovi su Erikini (HR) s prijevodom na engleski.
 */
const img = (slug: string, file: string, alt: Localized | string, wide = false): ProjectImage => ({
  src: `${import.meta.env.BASE_URL}images/projects/${slug}/${file}.webp`,
  alt,
  caption: alt,
  wide,
});

const WEB_DESIGN: Localized = { hr: 'Web dizajn', en: 'Web design' };

export const projects: Project[] = [
  {
    slug: 'cycling-school',
    title: { hr: 'Web stranica za školu biciklizma', en: 'Website for Cycling School' },
    summary: { hr: "Redizajn web-stranice Škole biciklizma Zagreb s fokusom na bolju organizaciju sadržaja, jednostavniju navigaciju i jasnije predstavljanje programa i mogućnosti učlanjenja.", en: "A redesign of the Zagreb Cycling School website focused on better content organisation, simpler navigation and a clearer presentation of programmes and membership." },
    lead: { hr: "Redizajn web-stranice Škole biciklizma Zagreb s fokusom na bolju organizaciju sadržaja, jednostavniju navigaciju i jasnije predstavljanje programa i mogućnosti učlanjenja.", en: "A redesign of the Zagreb Cycling School website focused on better content organisation, simpler navigation and a clearer presentation of programmes and membership." },
    tags: [WEB_DESIGN, 'UX/UI'],
    accent: '#FF6A2B',
    surface: '#E3DFD9',
    cover: img('cycling-school', 'cover', { hr: 'Početna stranica na desktopu i mobitelu', en: 'Homepage on desktop and mobile' }),
    mockup: {
      kind: 'browser',
      brand: 'ŠBZ',
      headline: { hr: 'Škola biciklizma Zagreb', en: 'Zagreb Cycling School' },
      cta: { hr: 'Pridruži se', en: 'Join us' },
      page: { bg: '#FFFFFF', fg: '#13151B', accent: '#FF6A2B', muted: '#E3E5EA', tiles: ['#FFD9C7', '#FF6A2B', '#FFD9C7'] },
    },
    meta: [
      { label: { hr: "Uloga", en: "Role" }, value: "UX/UI" },
      { label: { hr: "Platforma", en: "Platform" }, value: { hr: 'Web · desktop i mobitel', en: 'Web · desktop & mobile' } },
      { label: { hr: "Alati", en: "Tools" }, value: "Figma" },
      { label: { hr: "Godina", en: "Year" }, value: "2025" },
    ],
    about: { hr: "Škola biciklizma Zagreb nudi različite biciklističke programe, treninge i aktivnosti. Cilj projekta bio je unaprijediti postojeću web-stranicu kako bi posjetitelji mogli jednostavnije pronaći informacije o programima, treninzima, cijenama i načinu prijave.", en: "Zagreb Cycling School offers a range of cycling programmes, training sessions and activities. The goal was to improve the existing website so visitors could more easily find information about programmes, training, prices and how to sign up." },
    problem: { hr: "Postojeća web-stranica temeljila se na WordPress predlošku, a sadržaj je bio prenatrpan i nedovoljno pregledan. Velika količina informacija i nedovoljno jasna struktura otežavale su snalaženje i pronalaženje ključnih sadržaja.\n\nGlavni izazov bio je osmisliti jednostavniju organizaciju stranice koja će korisnicima omogućiti brži pristup informacijama i jasnije istaknuti mogućnosti prijave i učlanjenja.", en: "The existing website was built on a WordPress template, and its content was cluttered and hard to scan. The sheer amount of information and an unclear structure made it difficult to find the key content.\n\nThe main challenge was to design a simpler site structure that gives users faster access to information and more clearly highlights how to sign up and become a member." },
    chapters: [
      {
        title: { hr: "Analiza postojeće web-stranice", en: "Analysing the existing website" },
        text: [
          { hr: "Prvi korak bio je pregled postojeće web-stranice i analiza njezine strukture, navigacije i rasporeda sadržaja.", en: "The first step was reviewing the existing website and analysing its structure, navigation and content layout." },
          { hr: "Posebnu pozornost posvetila sam načinu na koji su predstavljeni programi, informacije o treninzima, novosti i prijave za članstvo.", en: "I paid special attention to how programmes, training information, news and membership sign-ups were presented." },
          { hr: "Analizom sam prepoznala potrebu za jasnijim razdvajanjem sadržaja, boljom vizualnom hijerarhijom i jednostavnijim pristupom najvažnijim informacijama.", en: "The analysis showed a need for clearer separation of content, a better visual hierarchy and simpler access to the most important information." },
        ],
        columns: 4,
        images: [
          img('cycling-school', 'old-member', { hr: "Stara stranica: Učlani se", en: "Old site: Become a member" }),
          img('cycling-school', 'old-news', { hr: "Stara stranica: Novosti", en: "Old site: News" }),
          img('cycling-school', 'old-coaching', { hr: "Stara stranica: Coaching KM+", en: "Old site: Coaching KM+" }),
          img('cycling-school', 'old-article', { hr: "Stara stranica: blog članak", en: "Old site: blog post" }),
        ],
      },
      {
        title: { hr: "Planiranje strukture i izrada wireframeova", en: "Planning the structure and wireframes" },
        text: [
          { hr: "Na temelju analize izradila sam low-fidelity wireframeove za ključne stranice web-sjedišta.", en: "Based on the analysis, I created low-fidelity wireframes for the key pages of the site." },
          { hr: "Cilj je bio definirati raspored i redoslijed sekcija prije razrade vizualnog dizajna, kako bi svaka stranica imala jasnu svrhu i logičan tijek informacija.", en: "The aim was to define the layout and order of sections before the visual design, so every page has a clear purpose and a logical flow of information." },
          { hr: "Prilikom izrade wireframeova vodila sam računa o preglednosti, dosljednosti elemenata i logičnom redoslijedu sadržaja.", en: "While wireframing, I focused on clarity, consistent elements and a logical order of content." },
        ],
        listTitle: { hr: "Stranice za koje sam izradila wireframeove:", en: "Pages I wireframed:" },
        list: [
          { hr: "Naslovnica – pregled programa, osnovne informacije o školi, mogućnosti prijave i istaknuti pozivi na akciju.", en: "Homepage – programme overview, key information about the school, sign-up options and prominent calls to action." },
          { hr: "Učlani se – informacije o članstvu, cijene i obrazac za registraciju.", en: "Become a member – membership information, prices and a registration form." },
          { hr: "Coaching KM+ – prikaz individualnog programa treninga, koraka sudjelovanja i prijave.", en: "Coaching KM+ – the individual training programme, steps to take part and sign-up." },
          { hr: "Novosti – pregled objava i događanja te mogućnost prijave na novosti.", en: "News – posts and events, plus a newsletter sign-up." },
          { hr: "Blog članak – strukturirani prikaz sadržaja članka uz poveznice na društvene mreže.", en: "Blog post – a structured article layout with links to social media." },
        ],
        columns: 3,
        images: [
          img('cycling-school', 'wf-home', { hr: "Naslovnica", en: "Homepage" }),
          img('cycling-school', 'wf-member', { hr: "Učlani se", en: "Become a member" }),
          img('cycling-school', 'wf-coaching', { hr: "Coaching KM+", en: "Coaching KM+" }),
          img('cycling-school', 'wf-news', { hr: "Novosti", en: "News" }),
          img('cycling-school', 'wf-article', { hr: "Blog članak", en: "Blog post" }),
        ],
      },
    ],
    decisions: [
      { hr: "Jasnije odvajanje pojedinih sadržajnih cjelina.", en: "Clearer separation of content sections." },
      { hr: "Isticanje informacija o programima, cijenama i članstvu.", en: "Highlighting information about programmes, prices and membership." },
      { hr: "Postavljanje obrazaca za prijavu na mjesta na kojima su korisnicima najrelevantniji.", en: "Placing sign-up forms where they are most relevant to users." },
      { hr: "Dosljedna struktura navigacije i podnožja kroz različite stranice.", en: "A consistent navigation and footer structure across pages." },
      { hr: "Organizacija sadržaja prema njegovoj važnosti za korisnika.", en: "Organising content by how important it is to the user." },
    ],
    gallery: [
      img('cycling-school', 'home-desktop', { hr: 'Početna stranica s otvorenim upisima', en: 'Homepage with open sign-ups' }, true),
      img('cycling-school', 'signup-mobile', { hr: 'Početna i prijava na mobitelu', en: 'Homepage and sign-up on mobile' }),
      img('cycling-school', 'calendar', { hr: 'Kalendar utrka', en: 'Race calendar' }),
      img('cycling-school', 'style-guide', 'Style guide', true),
    ],
    learned: { hr: "Kroz ovaj projekt naučila sam koliko je važno definirati dobru strukturu web-stranice prije početka vizualnog dizajna. Izrada wireframeova pomogla mi je bolje razumjeti povezanost između organizacije sadržaja, navigacije i korisničkog iskustva.\n\nPosebno sam se usmjerila na to kako postojeći, sadržajno opterećen predložak pretvoriti u jednostavniju i logičnije organiziranu strukturu.", en: "This project taught me how important it is to define a good site structure before starting the visual design. Creating wireframes helped me better understand how content organisation, navigation and user experience connect.\n\nI focused especially on turning an existing, content-heavy template into a simpler and more logically organised structure." },
  },
  {
    slug: 'native-jeeps',
    title: 'Native Jeeps',
    summary: { hr: "Redizajn korisničkog iskustva rezervacije Jeep izleta s fokusom na pregledniji prikaz ponude, jednostavniji odabir termina i jasniji proces rezervacije.", en: "A UX redesign of jeep tour booking focused on a clearer overview of tours, easier date selection and a more straightforward booking process." },
    lead: { hr: "Redizajn korisničkog iskustva rezervacije Jeep izleta s fokusom na pregledniji prikaz ponude, jednostavniji odabir termina i jasniji proces rezervacije.", en: "A UX redesign of jeep tour booking focused on a clearer overview of tours, easier date selection and a more straightforward booking process." },
    tags: [WEB_DESIGN, 'UX/UI', 'E-commerce'],
    accent: '#1A8A5A',
    surface: '#135E49',
    cover: img('native-jeeps', 'cover', { hr: 'Stranica s turama na desktopu i mobitelu', en: 'Tours page on desktop and mobile' }),
    mockup: {
      kind: 'browser',
      brand: 'Native Jeeps',
      headline: 'Our Tours',
      cta: 'Book now',
      page: { bg: '#FFFFFF', fg: '#13151B', accent: '#FFA834', muted: '#E3E5EA', tiles: ['#1A8A5A', '#D9EEE3', '#1A8A5A'] },
    },
    meta: [
      { label: { hr: "Uloga", en: "Role" }, value: "UX/UI" },
      { label: { hr: "Platforma", en: "Platform" }, value: { hr: 'Web · desktop i mobitel', en: 'Web · desktop & mobile' } },
      { label: { hr: "Alati", en: "Tools" }, value: "Figma" },
      { label: { hr: "Godina", en: "Year" }, value: "2025" },
    ],
    about: { hr: "Native Jeeps je platforma za rezervaciju avanturističkih Jeep izleta. Cilj projekta bio je istražiti mogućnosti poboljšanja postojećeg procesa rezervacije i osmisliti rješenje koje korisnicima omogućuje jednostavnije pregledavanje izleta, odabir termina i dovršetak rezervacije.", en: "Native Jeeps is a platform for booking adventure jeep tours. The goal was to explore how the existing booking process could be improved and design a solution that makes it easier for users to browse tours, pick a date and complete their booking." },
    chapters: [
      {
        title: { hr: "Analiza postojećih rješenja", en: "Analysing existing solutions" },
        text: [
          { hr: "Prvi korak bio je istraživanje rezervacijskog sustava FareHarbor i analiza elemenata koji bi mogli poboljšati korisničko iskustvo Native Jeeps stranice.", en: "The first step was researching the FareHarbor booking system and analysing which elements could improve the Native Jeeps experience." },
          { hr: "Izdvojila sam funkcionalnosti koje korisnicima olakšavaju snalaženje i donošenje odluka te analizirala njihovu svrhu i prednosti.", en: "I picked out the features that help users find their way and make decisions, and analysed their purpose and benefits." },
        ],
        listTitle: { hr: "Ključni elementi koje sam izdvojila:", en: "Key elements I identified:" },
        list: [
          { hr: "Kartice izleta s fotografijama – omogućuju brže pregledavanje ponude i lakše razlikovanje dostupnih izleta.", en: "Tour cards with photos – make it faster to browse the offer and tell tours apart." },
          { hr: "Kalendar dostupnosti – korisnicima omogućuje pregled slobodnih termina i jednostavniji odabir datuma.", en: "Availability calendar – shows open slots and makes picking a date easier." },
          { hr: "Ocjene i recenzije korisnika – pridonose vjerodostojnosti usluge i pomažu pri donošenju odluke.", en: "Ratings and reviews – build trust in the service and help users decide." },
          { hr: "Galerija fotografija – pruža bolji uvid u iskustvo koje korisnik rezervira.", en: "Photo gallery – gives a better sense of the experience being booked." },
          { hr: "Pregled ključnih informacija – na jednom mjestu prikazuje trajanje izleta, mjesto okupljanja, veličinu grupe i uvjete otkazivanja.", en: "Key information overview – shows duration, meeting point, group size and cancellation terms in one place." },
          { hr: "Pregled cijene i detalja rezervacije – omogućuje korisniku jasniji uvid u odabranu uslugu i troškove.", en: "Price and booking summary – gives a clear view of the chosen service and costs." },
        ],
        images: [
        img('native-jeeps', 'research-cards', { hr: "Kartice izleta s fotografijama (FareHarbor)", en: "Tour cards with photos (FareHarbor)" }),
        img('native-jeeps', 'research-tour', { hr: "Stranica izleta: recenzije, galerija, pregled informacija i kalendar", en: "Tour page: reviews, gallery, key info and calendar" }),
        img('native-jeeps', 'research-date', { hr: "Odabrani datum prikazuje dostupne termine", en: "A selected date shows available time slots" }),
        img('native-jeeps', 'research-plan', { hr: "Odabir broja osoba i pregled cijene", en: "Choosing the number of people and price summary" }),
        ],
      },
      {
        title: { hr: "Izrada wireframeova", en: "Wireframes" },
        text: [
          { hr: "Na temelju analize izradila sam low-fidelity wireframeove za desktop i mobilnu verziju stranice.", en: "Based on the analysis, I created low-fidelity wireframes for the desktop and mobile versions of the site." },
          { hr: "Fokus je bio na reorganizaciji sadržaja i integraciji odabranih funkcionalnosti u postojeći proces rezervacije.", en: "The focus was on reorganising content and integrating the selected features into the existing booking process." },
        ],
        listTitle: { hr: "Predložena poboljšanja:", en: "Proposed improvements:" },
        list: [
          { hr: "Pregledniji prikaz dostupnih izleta s osnovnim informacijama o cijeni i trajanju.", en: "A clearer overview of available tours with basic price and duration info." },
          { hr: "Jasnija stranica pojedinog izleta s fotografijama, recenzijama i ključnim informacijama.", en: "A clearer tour page with photos, reviews and key information." },
          { hr: "Kalendar za odabir datuma, termina i vrste izleta.", en: "A calendar for choosing the date, time slot and tour type." },
          { hr: "Jednostavniji odabir broja vozila, odraslih i djece.", en: "Simpler selection of the number of vehicles, adults and children." },
          { hr: "Jasno istaknuta ukupna cijena i gumb za nastavak rezervacije.", en: "A clearly highlighted total price and button to continue booking." },
          { hr: "Pregledniji završni korak s detaljima narudžbe i podacima za plaćanje.", en: "A clearer final step with order details and payment information." },
          { hr: "Prilagodba rasporeda elemenata manjim ekranima.", en: "Layouts adapted for smaller screens." },
        ],
        images: [
        img('native-jeeps', 'wf-tours', { hr: "Odabir izleta", en: "Choosing a tour" }, true),
        img('native-jeeps', 'wf-tour-page', { hr: "Stranica izleta s kalendarom fiksiranim pri skrolanju", en: "Tour page with a calendar that stays fixed on scroll" }),
        img('native-jeeps', 'wf-tour-booking', { hr: "Odabir termina i vrste izleta", en: "Choosing a time slot and tour type" }),
        img('native-jeeps', 'wf-vehicles', { hr: "Broj vozila, osoba i djece", en: "Number of vehicles, people and children" }),
        img('native-jeeps', 'wf-checkout', { hr: "Checkout bez glavne navigacije", en: "Checkout without the main navigation" }),
        ],
      },
    ],
    gallery: [
      img('native-jeeps', 'tour-desktop', { hr: 'Stranica ture s odabirom datuma, vremena i broja džipova', en: 'Tour page with date, time and jeep selection' }, true),
      img('native-jeeps', 'tours-mobile', { hr: 'Ture na mobitelu', en: 'Tours on mobile' }),
      img('native-jeeps', 'booking-mobile', { hr: 'Rezervacija i podaci za naplatu', en: 'Booking and billing details' }),
      img('native-jeeps', 'cart-coupon', { hr: 'Stanja kupona u košarici', en: 'Coupon states in the cart' }),
      img('native-jeeps', 'payment', { hr: 'Odabir načina plaćanja', en: 'Payment method selection' }),
      img('native-jeeps', 'checkout', { hr: 'Checkout', en: 'Checkout' }),
      img('native-jeeps', 'style-guide', 'Style guide'),
    ],
    learned: { hr: "Kroz ovaj projekt naučila sam kako analizirati postojeća digitalna rješenja, prepoznati funkcionalnosti koje donose vrijednost korisnicima i primijeniti ih u vlastitom dizajnerskom procesu. Posebno sam se usmjerila na organizaciju informacija i oblikovanje korisničkog puta koji rezervaciju čini jasnijom i jednostavnijom.", en: "Through this project I learned how to analyse existing digital products, recognise the features that bring real value to users and apply them in my own design process. I focused especially on organising information and shaping a user journey that makes booking clearer and simpler." },
  },
  {
    slug: 'paperkarma',
    title: 'PaperKarma',
    summary: { hr: "Redizajn web-stranice usmjeren na jasniju komunikaciju usluge, bolju organizaciju informacija i jednostavniju interakciju s korisnicima.", en: "A website redesign aimed at communicating the service more clearly, organising information better and making interaction simpler." },
    lead: { hr: "Redizajn web-stranice usmjeren na jasniju komunikaciju usluge, bolju organizaciju informacija i jednostavniju interakciju s korisnicima.", en: "A website redesign aimed at communicating the service more clearly, organising information better and making interaction simpler." },
    tags: [WEB_DESIGN, 'UX/UI'],
    accent: '#1DA650',
    surface: '#D9E3DE',
    cover: img('paperkarma', 'cover', { hr: 'Aktivni zahtjevi na desktopu i mobitelu', en: 'Active requests on desktop and mobile' }),
    mockup: {
      kind: 'browser',
      brand: 'PaperKarma',
      headline: 'Active',
      cta: 'Create new request',
      page: { bg: '#F7F8F7', fg: '#13151B', accent: '#1DA650', muted: '#E3E5EA', tiles: ['#FFFFFF', '#FFFFFF', '#FFFFFF'] },
    },
    meta: [
      { label: { hr: "Uloga", en: "Role" }, value: "UX/UI" },
      { label: { hr: "Platforma", en: "Platform" }, value: { hr: 'Web · desktop i mobitel', en: 'Web · desktop & mobile' } },
      { label: { hr: "Alati", en: "Tools" }, value: "Figma" },
      { label: { hr: "Godina", en: "Year" }, value: "2025" },
    ],
    about: { hr: "PaperKarma je digitalna usluga koja korisnicima pomaže smanjiti količinu neželjene fizičke pošte. Cilj projekta bio je unaprijediti način predstavljanja usluge i oblikovati razumljivije korisničko iskustvo koje jasno komunicira njezine prednosti i način korištenja.", en: "PaperKarma is a digital service that helps people reduce unwanted physical mail. The goal was to improve how the service is presented and design a more understandable experience that clearly communicates its benefits and how to use it." },
    problem: { hr: "Glavni izazov bio je predstaviti specifičnu uslugu na jednostavan i razumljiv način. Korisnicima je potrebno brzo objasniti što PaperKarma omogućuje, kako funkcionira proces odjave od neželjene pošte i koje korake trebaju poduzeti.", en: "The main challenge was presenting a niche service in a simple, understandable way. Users need to grasp quickly what PaperKarma does, how opting out of junk mail works and which steps they need to take." },
    work: [
      { hr: "Analizirala postojeću strukturu sadržaja i način predstavljanja usluge.", en: "Analysed the existing content structure and how the service was presented." },
      { hr: "Reorganizirala informacije kako bi korisnici lakše razumjeli svrhu i funkcionalnosti usluge.", en: "Reorganised information so users understand the purpose and features more easily." },
      { hr: "Oblikovala jasniju vizualnu hijerarhiju i istaknula najvažnije informacije.", en: "Designed a clearer visual hierarchy and highlighted the most important information." },
      { hr: "Radila na razumljivijem prikazu koraka korištenja usluge.", en: "Worked on a clearer presentation of the steps for using the service." },
      { hr: "Redizajnirala korisničko sučelje s naglaskom na jednostavnost, čitljivost i dosljednost.", en: "Redesigned the interface with a focus on simplicity, readability and consistency." },
    ],
    gallery: [
      img('paperkarma', 'requests-desktop', { hr: 'Popis zahtjeva sa statusima', en: 'Request list with statuses' }, true),
      img('paperkarma', 'requests-mobile', { hr: 'Zahtjevi i vremenska linija na mobitelu', en: 'Requests and timeline on mobile' }),
      img('paperkarma', 'request-timeline', { hr: 'Detalj zahtjeva s vremenskom linijom', en: 'Request detail with timeline' }),
      img('paperkarma', 'opt-out-steps', { hr: 'Odjava u četiri koraka', en: 'Opt-out in four steps' }),
      img('paperkarma', 'addresses', { hr: 'Adrese i aliasi', en: 'Addresses and aliases' }),
      img('paperkarma', 'address-pricing-mobile', { hr: 'Adrese i cjenik na mobitelu', en: 'Addresses and pricing on mobile' }),
      img('paperkarma', 'pricing', { hr: 'Cjenik', en: 'Pricing' }),
    ],
    learned: { hr: "Projekt mi je pomogao razumjeti važnost jasne komunikacije u digitalnim proizvodima. Naučila sam kako organizacijom sadržaja, vizualnom hijerarhijom i jednostavnim dizajnerskim rješenjima složeniju uslugu učiniti razumljivijom korisnicima.", en: "This project helped me understand the importance of clear communication in digital products. I learned how content organisation, visual hierarchy and simple design solutions can make a complex service easier for users to understand." },
  },
  {
    slug: 'zrnce',
    title: 'Zrnce',
    summary: { hr: "Razvoj vizualnog identiteta s naglaskom na prepoznatljivost brenda, dosljednost dizajna i primjenu kroz različite vizualne materijale.", en: "A visual identity focused on brand recognition, design consistency and application across different materials." },
    lead: { hr: "Razvoj vizualnog identiteta s naglaskom na prepoznatljivost brenda, dosljednost dizajna i primjenu kroz različite vizualne materijale.", en: "A visual identity focused on brand recognition, design consistency and application across different materials." },
    tags: ['Branding', { hr: 'Vizualni identitet', en: 'Visual identity' }],
    accent: '#D95543',
    surface: '#DA5544',
    cover: img('zrnce', 'cover', { hr: 'Zrnce logotip', en: 'Zrnce logo' }),
    mockup: {
      kind: 'brand',
      wordmark: 'zrnce',
      tagline: 'COFFEE TO GO',
      dark: '#D95543',
      light: '#F7F2CF',
      swatches: ['#A9C4E6', '#D95543', '#1F6B3F'],
    },
    meta: [
      { label: { hr: "Uloga", en: "Role" }, value: { hr: 'Brand dizajn', en: 'Brand design' } },
      { label: { hr: "Primjena", en: "Applications" }, value: { hr: 'Ambalaža, print, društvene mreže', en: 'Packaging, print, social media' } },
      { label: { hr: 'Alati', en: 'Tools' }, value: 'Illustrator, Photoshop, InDesign' },
    ],
    about: { hr: "Zrnce je projekt razvoja vizualnog identiteta brenda kave. Cilj je bio oblikovati prepoznatljiv i vizualno dosljedan identitet koji odražava karakter brenda te se može primjenjivati na različitim komunikacijskim i promotivnim materijalima.", en: "Zrnce is a visual identity project for a coffee brand. The goal was to create a recognisable, visually consistent identity that reflects the brand’s character and works across different communication and promotional materials." },
    problemLabel: { hr: "Izazov", en: "The challenge" },
    problem: { hr: "Glavni izazov bio je razviti vizualni jezik koji će biti jednostavan, prepoznatljiv i prilagodljiv različitim formatima. Bilo je važno uskladiti logotip, tipografiju, boje i ostale grafičke elemente kako bi zajedno stvarali jedinstven identitet.", en: "The main challenge was developing a visual language that is simple, recognisable and adaptable to different formats. The logo, typography, colours and other graphic elements had to work together as one identity." },
    work: [
      { hr: "Istraživala vizualni smjer i razvijala koncept identiteta brenda.", en: "Explored the visual direction and developed the brand identity concept." },
      { hr: "Oblikovala logotip i njegove varijante.", en: "Designed the logo and its variants." },
      { hr: "Odabrala tipografiju i paletu boja u skladu s karakterom brenda.", en: "Chose typography and a colour palette that fit the brand’s character." },
      { hr: "Razvijala prateće grafičke elemente i vizualnu komunikaciju.", en: "Developed supporting graphic elements and visual communication." },
      { hr: "Prikazala primjenu identiteta na različitim materijalima brenda.", en: "Showed the identity applied across various brand materials." },
    ],
    gallery: [
      img('zrnce', 'social', { hr: 'Instagram objave i storyji', en: 'Instagram posts and stories' }, true),
      img('zrnce', 'cups', { hr: 'Čaše za tri okusa', en: 'Cups for three flavours' }),
      img('zrnce', 'bags', { hr: 'Vrećice kave', en: 'Coffee bags' }),
      img('zrnce', 'billboard-red', { hr: 'Billboard kampanja', en: 'Billboard campaign' }, true),
      img('zrnce', 'poster-blue', { hr: 'Plakat, karamela', en: 'Poster, caramel' }),
      img('zrnce', 'billboard-green', { hr: 'Billboard, čokolada', en: 'Billboard, chocolate' }),
    ],
    learned: { hr: "Kroz projekt sam razvijala vještine oblikovanja vizualnog identiteta i konceptualnog razmišljanja. Naučila sam koliko je važna dosljednost svih vizualnih elemenata te kako kvalitetan identitet mora biti prepoznatljiv, funkcionalan i prilagodljiv različitim primjenama.", en: "Through this project I developed my visual identity and conceptual thinking skills. I learned how important consistency across all visual elements is, and that a strong identity must be recognisable, functional and adaptable to different uses." },
  },
];

/* ---------- pomoćne funkcije ---------- */

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
