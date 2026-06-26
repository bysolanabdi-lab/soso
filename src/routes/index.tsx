import { createFileRoute } from "@tanstack/react-router";
import heroChips from "@/assets/hero-chips.jpg";
import slaysBag from "@/assets/slays-bag.png";
import { useEffect, useState } from "react";
import {
  Sparkles, Leaf, Recycle, UtensilsCrossed, ChevronDown,
  ShieldCheck, Wheat, Mail, MessageCircle, ArrowRight, MapPin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BySolana — Slay Your Cravings. Premium Burundi Potato Brands." },
      { name: "description", content: "BySolana presents Slays chips and a growing universe of premium potato-based brands: Kontry, Cosmetics, and Bio-Agro." },
      { property: "og:title", content: "BySolana — Premium Potato Ecosystem" },
      { property: "og:description", content: "Slay your cravings. Discover Slays paprika chips and the full Solana universe." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Universe />
      <SlaysFocus />
      <SKClub />
      <About />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border/60 shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-slays text-primary-foreground font-display font-bold shadow-glow">
            B
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            By<span className="text-gradient-slays">Solana</span>
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {[
            { label: "Our Brands", href: "#universe" },
            { label: "About Solana", href: "#about" },
            { label: "Contact", href: "#contact" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#slays"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            Discover Slays <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        className="absolute inset-0 opacity-50 mix-blend-overlay"
        style={{
          backgroundImage: `url(${heroChips})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-slays-yellow/40 blur-3xl animate-blob" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-slays-teal/40 blur-3xl animate-blob" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-foreground/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> New launch · Slays Chips
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] text-foreground md:text-7xl lg:text-8xl">
            Slay Your <br />
            <span className="text-gradient-slays">Cravings.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-foreground/80 md:text-xl">
            Discover the premium crunch from the heart of Burundi.
            <span className="font-semibold"> 100% natural, 0% preservatives.</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#slays"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background shadow-pop transition-transform hover:-translate-y-0.5"
            >
              Discover Slays
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#universe"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/40 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-background/70"
            >
              Explore Our Universe
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-medium uppercase tracking-wider text-foreground/70">
            <span className="flex items-center gap-1.5"><Leaf className="h-4 w-4" /> 100% Natural</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> No Preservatives</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Made in Burundi</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-slays-yellow blur-3xl opacity-60 md:h-96 md:w-96" />
          <img
            src={slaysBag}
            alt="Slays Paprika potato chips 50g pouch"
            className="relative z-10 w-[320px] drop-shadow-2xl animate-float md:w-[460px]"
            width={920}
            height={920}
          />
        </div>
      </div>
    </section>
  );
}

type Brand = {
  id: string;
  name: string;
  tag: string;
  description: string;
  cta: string;
  ctaHref: string;
  gradient: string;
  badge?: string;
  icon: React.ReactNode;
  textOnGradient: string;
};

const brands: Brand[] = [
  {
    id: "slays",
    name: "SLAYS",
    tag: "Snacks",
    description:
      "Our premium Paprika potato chips collection. Crisp, natural, and unforgettable.",
    cta: "Enter Slays World",
    ctaHref: "#slays",
    gradient: "bg-gradient-slays",
    icon: <Sparkles className="h-6 w-6" />,
    textOnGradient: "text-slays-teal-deep",
  },
  {
    id: "kontry",
    name: "KONTRY",
    tag: "Fast-Food",
    description:
      "Our successful fast-food chain delivering fresh fries and hot snacks with unique local flavors.",
    cta: "Learn more",
    ctaHref: "#about",
    gradient: "bg-gradient-kontry",
    badge: "Bientôt disponible",
    icon: <UtensilsCrossed className="h-6 w-6" />,
    textOnGradient: "text-white",
  },
  {
    id: "cosmetics",
    name: "Solana Cosmetics",
    tag: "Circular Economy",
    description:
      "Upcycling potato starch into premium, natural cosmetic and hair care products.",
    cta: "Learn more",
    ctaHref: "#about",
    gradient: "bg-gradient-cosmetics",
    badge: "Bientôt disponible",
    icon: <Recycle className="h-6 w-6" />,
    textOnGradient: "text-bio-brown",
  },
  {
    id: "bio",
    name: "Solana Bio-Agro",
    tag: "Sustainability",
    description:
      "Transforming organic co-products into high-quality fertilizers for sustainable agriculture and livestock.",
    cta: "Learn more",
    ctaHref: "#about",
    gradient: "bg-gradient-bio",
    badge: "Bientôt disponible",
    icon: <Wheat className="h-6 w-6" />,
    textOnGradient: "text-white",
  },
];

function Universe() {
  return (
    <section id="universe" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            The Solana Universe
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-6xl">
            Four pillars.<br />
            <span className="text-gradient-slays">One potato ecosystem.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            From snack-time joy to circular cosmetics and regenerative agriculture —
            every Solana brand starts with the humble potato.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {brands.map((b) => (
            <BrandCard key={b.id} brand={b} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl ${brand.gradient} p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-pop md:p-10`}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-black/10 blur-3xl" />

      {brand.badge && (
        <span className="absolute right-6 top-6 rounded-full bg-background/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground shadow-sm backdrop-blur">
          {brand.badge}
        </span>
      )}

      <div className={`relative ${brand.textOnGradient}`}>
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-background/40 backdrop-blur">
            {brand.icon}
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest opacity-80">
            {brand.tag}
          </span>
        </div>
        <h3 className="mt-6 font-display text-4xl font-extrabold md:text-5xl">
          {brand.name}
        </h3>
        <p className="mt-4 max-w-md text-base opacity-90 md:text-lg">
          {brand.description}
        </p>
        <a
          href={brand.ctaHref}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-transform group-hover:translate-x-1"
        >
          {brand.cta}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function SlaysFocus() {
  const [open, setOpen] = useState(true);
  return (
    <section id="slays" className="relative overflow-hidden bg-foreground py-24 text-background md:py-32">
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-slays-yellow/30 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-slays-teal/40 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div className="relative flex justify-center">
          <div className="absolute h-80 w-80 rounded-full bg-gradient-slays opacity-50 blur-3xl" />
          <img
            src={slaysBag}
            alt="Slays Paprika 50g pouch"
            className="relative z-10 w-[340px] drop-shadow-2xl animate-float md:w-[480px]"
            width={920}
            height={920}
            loading="lazy"
          />
        </div>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-background/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-background/80">
            Flagship · Slays
          </span>
          <h2 className="mt-5 font-display text-5xl font-extrabold leading-none md:text-7xl">
            Saveur <span className="text-gradient-slays">Paprika</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-background/75">
            A bold burst of smoked paprika layered onto crisp, hand-picked Burundi potatoes.
            Lightly salted. Big on flavor. Honest by nature.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>Gluten-Free</Badge>
            <Badge>Sans Conservateur</Badge>
            <Badge>100% Natural</Badge>
            <Badge>50g</Badge>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-background/15 bg-background/5 backdrop-blur">
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="font-display text-lg font-bold">
                Ingredients & Nutritional Values
              </span>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-500 ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-4 border-t border-background/15 px-6 py-5 text-sm text-background/85">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-background/60">
                      Ingredients
                    </p>
                    <p className="mt-2 leading-relaxed">
                      Pomme de terre, Huile végétale, Sel, Épices et aromates naturels (paprika fumé).
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {[
                      ["Energy", "525 kcal"],
                      ["Fats", "30 g"],
                      ["Carbs", "55 g"],
                      ["Protein", "6 g"],
                    ].map(([k, v]) => (
                      <div key={k} className="rounded-xl bg-background/10 p-3">
                        <p className="text-[10px] uppercase tracking-widest text-background/60">{k}</p>
                        <p className="mt-1 font-display text-lg font-bold">{v}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-background/55">
                    Per 100g. Indicative values, see pack for full details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-background/25 bg-background/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-background backdrop-blur">
      {children}
    </span>
  );
}

function SKClub() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-club p-10 text-white shadow-pop md:p-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-slays-yellow/40 blur-3xl animate-blob" />
        <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-kontry-red/40 blur-3xl animate-blob" />
        <div className="relative grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur">
              Loyalty Program
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-6xl">
              S<span className="text-slays-yellow">&</span>K Club
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              <span className="font-semibold">Scan. Crunch. Win.</span> Join the S&K Club soon
              to unlock exclusive rewards with every pack of Slays chips and Kontry meals.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-transform hover:-translate-y-0.5">
              Notify me <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { k: "Scan", v: "QR on pack" },
              { k: "Crunch", v: "Earn points" },
              { k: "Win", v: "Real rewards" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <p className="font-display text-2xl font-bold">{s.k}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/70">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            About Solana
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-6xl">
            A Burundi-born <span className="text-gradient-slays">potato ecosystem.</span>
          </h2>
        </div>
        <div className="space-y-5 text-lg text-muted-foreground">
          <p>
            Solana is a multi-brand company building a high-quality, circular potato ecosystem
            across agro-industry, food, cosmetics, and sustainable farming.
          </p>
          <p>
            From the fields of Burundi, every co-product becomes a new opportunity — fueling
            premium snacks, beloved fast-food, natural cosmetics, and regenerative fertilizers.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["Agro-industry", "Food", "Cosmetics", "Circular Economy"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/80">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-slays font-display font-bold text-slays-teal-deep">
                B
              </span>
              <span className="font-display text-2xl font-bold">
                By<span className="text-gradient-slays">Solana</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-footer-foreground/70">
              Nom de la société: <span className="font-semibold text-footer-foreground">Solana</span>
            </p>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-footer-foreground/70">
              <MapPin className="h-4 w-4" /> Fabriqué au Burundi
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold">Feedback</h3>
            <p className="mt-3 text-sm text-footer-foreground/70">
              Avis sur nos Chips? On adore lire vos retours.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-footer-foreground placeholder:text-footer-foreground/40 focus:border-slays-yellow focus:outline-none"
              />
              <button className="rounded-full bg-gradient-slays px-5 py-2.5 text-sm font-semibold text-slays-teal-deep transition-transform hover:-translate-y-0.5">
                Send
              </button>
            </form>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/25761345656"
                  className="inline-flex items-center gap-2 text-footer-foreground/80 transition-colors hover:text-slays-yellow"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp · +257 61 345 656
                </a>
              </li>
              <li>
                <a
                  href="mailto:solana@gmail.com"
                  className="inline-flex items-center gap-2 text-footer-foreground/80 transition-colors hover:text-slays-yellow"
                >
                  <Mail className="h-4 w-4" /> solana@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-footer-foreground/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Solana. All rights reserved.</p>
          <p>Slays · Kontry · Cosmetics · Bio-Agro</p>
        </div>
      </div>
    </footer>
  );
}
