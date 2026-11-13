import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Mémoire mécanique",
    artist: "Lorena Silaj",
    type: "Nature morte · Série 2025",
    description: "Une machine ancienne, témoin silencieux d’un autre temps.",
    image: "/art-gallery-websit/images/presse-ancienne.jpg",
  },
  {
    number: "02",
    title: "Seconde peau",
    artist: "Jairo David",
    type: "Portrait · Série organique",
    description: "Le végétal devient parure, refuge et langage.",
    image: "/art-gallery-websit/images/portrait-vegetal.jpg",
  },
  {
    number: "03",
    title: "Passage",
    artist: "David Gari",
    type: "Street · Lumière naturelle",
    description: "Une ruelle, quelques silhouettes et la ville qui respire.",
    image: "/art-gallery-websit/images/ruelle-urbaine.jpg",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registered, setRegistered] = useState(false);

  return (
    <main className="min-h-screen bg-cream text-ink">
      <header className="sticky top-0 z-50 border-b border-ink/15 bg-cream/95 px-5 backdrop-blur-md lg:px-10">
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between">
          <a href="#top" className="logo">
            DÉDALE <span>DE COULEURS</span>
          </a>
          <nav className="hidden items-center gap-9 text-[0.68rem] font-semibold uppercase tracking-[0.18em] md:flex">
            <a className="nav-link" href="#expo">Expositions</a>
            <a className="nav-link" href="#histoire">Le lab</a>
            <a className="nav-link" href="#agenda">Agenda</a>
            <a className="pill-button" href="#visiter">Nous trouver <Arrow /></a>
          </nav>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-ink md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            <span className="text-xl leading-none">{menuOpen ? "×" : "≡"}</span>
          </button>
        </div>
        {menuOpen && (
          <nav className="grid gap-5 border-t border-ink/15 py-7 font-display text-3xl md:hidden">
            {["Expositions", "Le lab", "Agenda", "Nous trouver"].map((label, index) => (
              <a key={label} href={["#expo", "#histoire", "#agenda", "#visiter"][index]} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="top" className="px-5 pb-14 pt-8 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-7 flex justify-between text-[0.64rem] font-semibold uppercase tracking-[0.2em]">
            <span>Galerie photographique indépendante</span>
            <span className="hidden sm:inline">Paris · 48°51′ N</span>
            <span>Ouvert mar — sam</span>
          </div>
          <h1 className="font-display relative z-10 max-w-7xl text-[clamp(4.5rem,11.7vw,12rem)] leading-[0.76] tracking-[-0.075em]">
            La rue.<br />
            <em className="ml-[10vw] font-normal text-copper">En pleine lumière.</em>
          </h1>
          <div className="mt-8 grid gap-5 lg:-mt-12 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">
            <div className="max-w-sm pb-3">
              <p className="text-base leading-relaxed text-ink/65">
                Photo, street culture et récits vrais. Une galerie où l’on vient autant pour voir que pour se rencontrer.
              </p>
              <a href="#expo" className="mt-7 inline-flex items-center gap-8 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[0.16em]">
                Voir l’expo <Arrow />
              </a>
            </div>
            <div className="group relative aspect-[16/9] overflow-hidden bg-ink">
              <img src="/art-gallery-websit/images/ruelle-urbaine.jpg" alt="Ruelle urbaine éclairée par le soleil" className="image-muted h-full w-full object-cover transition duration-1000 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 text-white lg:p-7">
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em]">Exposition temporaire · 16.05 — 29.08</p>
                  <p className="font-display mt-2 text-3xl">Passage — David Gari</p>
                </div>
                <span className="hidden rounded-full border border-white/60 px-4 py-2 text-xs sm:block">Entrée libre</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expo" className="bg-ink px-5 py-20 text-cream lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 flex items-end justify-between border-b border-white/20 pb-6">
            <div>
              <p className="eyebrow text-copper">Maintenant au Lab</p>
              <h2 className="font-display mt-3 text-5xl tracking-[-0.045em] md:text-7xl">Expositions temporaires</h2>
            </div>
            <p className="hidden max-w-xs text-sm leading-relaxed text-white/55 md:block">Trois écritures. Trois manières de raconter la rue sans la travestir.</p>
          </div>
          <div className="grid gap-x-6 gap-y-16 md:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className={index === 1 ? "md:mt-20" : ""}>
                <a href="#" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-white/10">
                    <img src={project.image} alt={project.description} className="image-muted h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-cream text-xs font-bold text-ink">{project.number}</span>
                  </div>
                  <div className="mt-5 flex justify-between gap-4">
                    <div>
                      <p className="eyebrow text-white/45">{project.artist} · {project.type}</p>
                      <h3 className="font-display mt-2 text-3xl">{project.title}</h3>
                      <p className="mt-3 text-sm text-white/55">{project.description}</p>
                    </div>
                    <span className="text-2xl transition group-hover:rotate-45"><Arrow /></span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="histoire" className="overflow-hidden px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1600px]">
          <p className="eyebrow">Notre histoire · Depuis 2019</p>
          <div className="mt-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <h2 className="font-display max-w-4xl text-[clamp(3.4rem,7vw,7.8rem)] leading-[0.92] tracking-[-0.06em]">
              Deux potes, un bar et <em className="text-copper">beaucoup de photos.</em>
            </h2>
            <div className="flex flex-col justify-end">
              <p className="max-w-lg text-lg leading-relaxed text-ink/65">
                Au début, Sam et Yanis accrochaient leurs tirages sur les murs du bar d’un ami. Les discussions duraient plus longtemps que les vernissages. Dédale de couleurs est né de cette énergie : rendre visibles des histoires peu racontées et créer un espace sans codes intimidants.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-ink/20 pt-5">
                <div><strong className="font-display text-3xl">27</strong><span className="mt-1 block text-[0.62rem] uppercase tracking-wider">artistes exposés</span></div>
                <div><strong className="font-display text-3xl">0 €</strong><span className="mt-1 block text-[0.62rem] uppercase tracking-wider">pour entrer</span></div>
                <div><strong className="font-display text-3xl">6</strong><span className="mt-1 block text-[0.62rem] uppercase tracking-wider">expos par an</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="agenda" className="border-y border-ink/15 bg-stone px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <p className="eyebrow">On se retrouve</p>
          <h2 className="font-display mt-3 text-5xl tracking-[-0.045em] md:text-7xl">Agenda du Lab</h2>
          <div className="mt-12 divide-y divide-ink/30 border-y border-ink/30">
            {[
              ["24.05", "Talk — Photographier sans diplôme", "Discussion · Gratuit"],
              ["07.06", "Open mic, DJ set & projections", "Soirée · Prix libre"],
              ["14.06", "Portrait express : ton book en 30 min", "Shooting · 25 €"],
            ].map(([date, title, meta]) => (
              <a href="#inscription" key={title} className="event-row group">
                <span className="font-display text-3xl">{date}</span>
                <span className="font-display text-2xl md:text-4xl">{title}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em]">{meta}</span>
                <span className="text-2xl transition group-hover:rotate-45"><Arrow /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="inscription" className="bg-ink px-5 py-20 text-cream lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-copper">Prochain vernissage · 24 mai</p>
            <h2 className="font-display mt-4 text-5xl tracking-[-0.05em] md:text-7xl">Viens comme tu es.</h2>
            <p className="mt-5 max-w-md leading-relaxed text-white/55">Pas besoin de tout comprendre à la photo. Les artistes seront là pour en parler. Entrée libre, réservation conseillée.</p>
          </div>
          {registered ? (
            <div className="flex min-h-64 items-center border border-white/20 p-8">
              <p className="font-display text-4xl">C’est noté. On se voit au Lab.</p>
            </div>
          ) : (
            <form onSubmit={(event) => { event.preventDefault(); setRegistered(true); }} className="grid gap-4">
              <input required aria-label="Prénom" placeholder="Ton prénom" className="form-field" />
              <input required type="email" aria-label="Adresse e-mail" placeholder="Ton adresse e-mail" className="form-field" />
              <button className="mt-2 flex items-center justify-between bg-cream px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-ink">
                Réserver ma place <Arrow />
              </button>
            </form>
          )}
        </div>
      </section>

      <footer id="visiter" className="px-5 py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-[1fr_auto_auto]">
          <div>
            <a href="#top" className="logo text-2xl">DÉDALE <span>DE COULEURS</span></a>
            <p className="mt-4 max-w-sm text-sm text-ink/55">La photo sort du cadre. Les histoires prennent leur place.</p>
          </div>
          <div><p className="eyebrow">Le lieu</p><p className="mt-3 text-sm leading-relaxed">18 rue Chapon<br />75003 Paris</p></div>
          <div><p className="eyebrow">Ouvert</p><p className="mt-3 text-sm leading-relaxed">Mar — Sam · 11h—20h<br />Entrée libre</p></div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1600px] justify-between border-t border-ink/20 pt-5 text-[0.6rem] uppercase tracking-[0.14em]">
          <span>© 2025 Dédale de couleurs</span><span>Instagram · TikTok · YouTube</span>
        </div>
      </footer>
    </main>
  );
}
