import Image from "next/image";
import Link from "next/link";

const images = {
  hero:
    "https://images.unsplash.com/photo-1781183955329-6edb3d53b8d9?auto=format&fit=crop&q=85&w=2400",

  pergola:
    "https://images.unsplash.com/photo-1781183955329-6edb3d53b8d9?auto=format&fit=crop&q=85&w=1400",

  deck:
    "https://images.unsplash.com/photo-1721614473730-1aed4a93f1d5?auto=format&fit=crop&q=85&w=1400",

  fence:
    "https://images.unsplash.com/photo-1766189790526-b699899d1013?auto=format&fit=crop&q=85&w=1400",

  gazebo:
    "https://images.unsplash.com/photo-1723731064572-54b47225da24?auto=format&fit=crop&q=85&w=1400",

  workshop:
    "https://images.unsplash.com/photo-1631396326838-de37e5f8bcbc?auto=format&fit=crop&q=85&w=1400",
};

const services = [
  {
    number: "01",
    title: "Wooden Pergolas",
    description:
      "Custom wooden pergolas designed according to your space, style and practical needs.",
    image: images.pergola,
  },
  {
    number: "02",
    title: "Wooden Decking",
    description:
      "Durable wooden decking that creates a warm and comfortable outdoor living area.",
    image: images.deck,
  },
  {
    number: "03",
    title: "Wooden Fences",
    description:
      "Practical and attractive wooden fencing designed to offer privacy and improve your property.",
    image: images.fence,
  },
  {
    number: "04",
    title: "Gazebos",
    description:
      "Custom wooden gazebos for gardens, swimming pools and outdoor entertainment spaces.",
    image: images.gazebo,
  },
  {
    number: "05",
    title: "Outdoor Structures",
    description:
      "Functional wooden structures made specifically for homes and professional spaces.",
    image: images.pergola,
  },
  {
    number: "06",
    title: "Custom Woodwork",
    description:
      "Special wooden projects designed and constructed around your individual requirements.",
    image: images.workshop,
  },
];

const projects = [
  {
    title: "Modern Outdoor Pergola",
    category: "Pergola",
    image: images.pergola,
  },
  {
    title: "Outdoor Wooden Deck",
    category: "Decking",
    image: images.deck,
  },
  {
    title: "Garden Wooden Fence",
    category: "Fencing",
    image: images.fence,
  },
  {
    title: "Custom Garden Gazebo",
    category: "Gazebo",
    image: images.gazebo,
  },
];

const benefits = [
  {
    value: "15+",
    title: "Years of experience",
    description:
      "Practical experience in wooden structures and custom woodworking.",
  },
  {
    value: "100%",
    title: "Custom construction",
    description:
      "Every project is adapted to the measurements and needs of your space.",
  },
  {
    value: "01",
    title: "Quality materials",
    description:
      "Materials selected carefully for strength, durability and appearance.",
  },
  {
    value: "Free",
    title: "Initial estimate",
    description:
      "Professional consultation and a free initial project estimate.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#15110e] text-[#f7f1e8]">
      {/* NAVBAR */}
      <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full bg-[#f7f1e8] shadow-lg">
              <Image
                src="/ChatGPT Image 17 Ιουλ 2026, 12_22_38 μμ.png"
                alt="Papouis Woodworks logo"
                fill
                priority
                className="scale-[1.15] object-cover"
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-lg font-semibold tracking-[0.16em]">
                PAPOUIS
              </p>

              <p className="text-[10px] font-medium tracking-[0.32em] text-[#c98b52]">
                WOODWORKS
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/75 lg:flex">
            <Link href="#services" className="transition hover:text-[#d49a63]">
              Services
            </Link>

            <Link href="#projects" className="transition hover:text-[#d49a63]">
              Projects
            </Link>

            <Link href="#about" className="transition hover:text-[#d49a63]">
              About
            </Link>

            <Link href="#contact" className="transition hover:text-[#d49a63]">
              Contact
            </Link>
          </nav>

          <Link
            href="#contact"
            className="rounded-full bg-[#b97840] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#cf9158]"
          >
            Free Quote
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen">
        <Image
          src={images.hero}
          alt="Premium outdoor wooden pergola"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#100b08] via-[#100b08]/85 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#15110e] via-transparent to-black/40" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 sm:px-6">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#dba36f]">
              <span className="h-px w-10 bg-[#dba36f]" />
              Custom wooden structures
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl md:text-7xl lg:text-[86px]">
              Crafted with care.
              <span className="block text-[#d49a63]">Built to last.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              Custom wooden pergolas, decks, fences and outdoor structures,
              designed around your space and built with attention to every
              detail.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="rounded-full bg-[#b97840] px-8 py-4 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-[#cf9158]"
              >
                Request a Free Quote
              </Link>

              <Link
                href="#projects"
                className="rounded-full border border-white/25 bg-white/5 px-8 py-4 text-center font-semibold text-white backdrop-blur transition hover:bg-white hover:text-black"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d49a63]">
              Papouis Woodworks
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Quality woodworking for your outdoor space.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-white/55">
            From the first measurement to the final installation, we approach
            every project with precision, quality materials and respect for the
            customer&apos;s property.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-5 py-28 sm:px-6"
      >
        <div className="mb-16 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d49a63]">
              What we build
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Our services
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-white/55">
            Custom wooden solutions for homes, gardens, patios and professional
            spaces.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#1d1814] transition hover:-translate-y-1 hover:border-[#b97840]/70"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-semibold backdrop-blur">
                  {service.number}
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-semibold">{service.title}</h3>

                <p className="mt-4 leading-7 text-white/55">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-[#eee5d8] py-28 text-[#1b1511]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-16 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9a5f32]">
                Selected work
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                Recent projects
              </h2>
            </div>

            <p className="max-w-md text-lg leading-8 text-black/55">
              These are temporary example photographs. Replace them later with
              your own completed constructions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-[32px] ${
                  index === 0 || index === 3
                    ? "h-[500px] md:h-[620px]"
                    : "h-[500px]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e3a96d]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl md:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="border-b border-white/10 px-7 py-16 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <p className="text-4xl font-semibold text-[#d49a63]">
                {benefit.value}
              </p>

              <h3 className="mt-6 text-xl font-semibold">{benefit.title}</h3>

              <p className="mt-4 leading-7 text-white/50">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-28 sm:px-6 lg:grid-cols-2"
      >
        <div className="relative">
          <div className="relative h-[600px] overflow-hidden rounded-[36px]">
            <Image
              src={images.workshop}
              alt="Woodworker crafting a wooden surface"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </div>

          <div className="absolute -bottom-8 right-3 max-w-[280px] rounded-3xl bg-[#b97840] p-7 text-white md:-right-8">
            <p className="text-xl font-semibold">Made with attention</p>

            <p className="mt-3 leading-6 text-white/75">
              Every construction is measured and built according to your
              individual space.
            </p>
          </div>
        </div>

        <div className="pt-12 lg:pt-0">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d49a63]">
            About us
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Family craftsmanship with a modern approach.
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/60">
            Papouis Woodworks is a family business specialising in custom
            wooden structures. We combine practical experience with careful
            planning to create results that are attractive, functional and
            durable.
          </p>

          <p className="mt-5 text-lg leading-8 text-white/60">
            Whether you need a pergola, deck, fence or a unique construction,
            we work with you from the first idea until completion.
          </p>

          <Link
            href="#contact"
            className="mt-10 inline-flex rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:bg-white hover:text-black"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-5 pb-24 sm:px-6">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px]">
          <Image
            src={images.deck}
            alt="Outdoor wooden construction"
            fill
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#100b08]/85" />

          <div className="relative z-10 px-7 py-24 text-center md:px-16 md:py-32">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#dca36d]">
              Start your project
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Have an idea for your outdoor space?
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/60">
              Contact us for a free initial estimate and professional
              consultation.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:+35700000000"
                className="rounded-full bg-[#b97840] px-8 py-4 font-semibold text-white transition hover:bg-[#cf9158]"
              >
                Call Us
              </a>

              <a
                href="https://wa.me/35700000000"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/25 bg-white/5 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white hover:text-black"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-full bg-[#f7f1e8]">
                <Image
                  src="/ChatGPT Image 17 Ιουλ 2026, 12_22_38 μμ.png"
                  alt="Papouis Woodworks logo"
                  fill
                  className="scale-[1.15] object-cover"
                />
              </div>

              <div>
                <p className="text-xl font-semibold tracking-[0.15em]">
                  PAPOUIS
                </p>

                <p className="mt-1 text-xs tracking-[0.3em] text-[#d49a63]">
                  WOODWORKS
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-sm leading-7 text-white/45">
              Custom pergolas, decks, fences and wooden structures, built with
              experience and attention to detail.
            </p>
          </div>

          <div>
            <p className="font-semibold">Services</p>

            <div className="mt-5 flex flex-col gap-3 text-white/45">
              <span>Pergolas</span>
              <span>Wooden Decking</span>
              <span>Fences</span>
              <span>Custom Projects</span>
            </div>
          </div>

          <div>
            <p className="font-semibold">Contact</p>

            <div className="mt-5 flex flex-col gap-3 text-white/45">
              <a href="tel:+35700000000" className="hover:text-white">
                +357 99321043
              </a>

              <span>Larnaca &amp; Famagusta</span>
              <span>Cyprus</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-6 sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-white/35 md:flex-row">
            <p>
              © {new Date().getFullYear()} Papouis Woodworks. All rights
              reserved.
            </p>

            <p>Quality wooden constructions in Cyprus.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}