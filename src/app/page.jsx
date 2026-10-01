import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import GridPattern from "@/components/GridPattern";
import SectionIntro from "@/components/SectionIntro";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

const projects = [
  {
    title: "Sistema de gestion empresarial",
    type: "ERP a medida",
    description:
      "Control de clientes, operaciones, usuarios, reportes y procesos internos en una plataforma centralizada.",
  },
  {
    title: "Dashboard aeronautico",
    type: "Panel operativo",
    description:
      "Visualizacion de indicadores, alertas y datos criticos para equipos que necesitan decisiones rapidas.",
  },
  {
    title: "Plataforma educativa",
    type: "Producto digital",
    description:
      "Aulas, usuarios, contenidos, pagos y seguimiento de progreso con una experiencia clara para estudiantes.",
  },
  {
    title: "Tienda online",
    type: "E-commerce",
    description:
      "Catalogo, carrito, pagos, administracion de productos y automatizaciones para vender mejor en internet.",
  },
  {
    title: "Landing page corporativa",
    type: "Conversion",
    description:
      "Pagina rapida, persuasiva y optimizada para captar prospectos desde campanas, redes y buscadores.",
  },
];

const process = [
  ["Diagnostico", "Entendemos tu negocio, objetivos, usuarios y procesos."],
  ["Arquitectura", "Definimos alcance, pantallas, datos, flujos e integraciones."],
  ["Desarrollo", "Construimos con entregas visibles, feedback y buenas practicas."],
  ["Lanzamiento", "Probamos, optimizamos, publicamos y dejamos una base escalable."],
];

const technologies = [
  "Next.js",
  "React",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Supabase",
  "Firebase",
  "APIs REST",
  "Stripe",
  "OpenAI",
  "Vercel",
  "Analytics",
];

const benefits = [
  "Diseno moderno con foco comercial",
  "Codigo preparado para crecer",
  "Paneles administrables y bases de datos",
  "Integraciones con herramientas reales",
  "Automatizacion de tareas repetitivas",
  "Soporte claro despues del lanzamiento",
];

function HeroPreview() {
  return (
    <FadeIn className="mt-16 lg:mt-0 lg:w-[34rem] lg:flex-none">
      <div className="relative overflow-hidden rounded-lg bg-neutral-950 p-6 shadow-2xl shadow-neutral-950/20">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-white/5 stroke-white/10"
          yOffset={-80}
        />
        <div className="relative">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-cyan-400" />
            <span className="h-3 w-3 rounded-full bg-lime-300" />
            <span className="h-3 w-3 rounded-full bg-white/50" />
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3">
            <div className="col-span-2 rounded-lg bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Conversion
              </p>
              <p className="mt-4 font-display text-4xl font-medium text-neutral-950">
                +42%
              </p>
              <div className="mt-8 h-2 rounded-full bg-neutral-100">
                <div className="h-2 w-2/3 rounded-full bg-cyan-500" />
              </div>
            </div>
            <div className="rounded-lg bg-cyan-400 p-4 text-neutral-950">
              <p className="text-xs font-semibold uppercase tracking-wider">
                APIs
              </p>
              <p className="mt-10 text-3xl font-semibold">12</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 text-white">
              <p className="text-xs text-white/60">Uptime</p>
              <p className="mt-8 text-2xl font-semibold">99.9%</p>
            </div>
            <div className="col-span-2 rounded-lg bg-white/10 p-4">
              <div className="flex items-center justify-between text-sm text-white">
                <span>Automatizaciones</span>
                <span>Activas</span>
              </div>
              <div className="mt-5 space-y-3">
                <div className="h-2 rounded-full bg-white/70" />
                <div className="h-2 w-4/5 rounded-full bg-white/40" />
                <div className="h-2 w-2/3 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function Projects() {
  return (
    <section id="proyectos" className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Proyectos"
        title="Casos de exito editables para mostrar lo que PUROINTERNET puede construir."
      >
        <p>
          Estos ejemplos iniciales sirven como base para presentar resultados,
          industrias y soluciones reales a medida que el portafolio crezca.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <FadeIn key={project.title}>
                <article className="flex min-h-[18rem] flex-col justify-between rounded-lg border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:border-neutral-950 hover:shadow-xl hover:shadow-neutral-950/10">
                  <div>
                    <p className="text-sm font-semibold text-cyan-700">
                      {project.type}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-medium text-neutral-950">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-base text-neutral-600">
                      {project.description}
                    </p>
                  </div>
                  <Link
                    href="/work"
                    className="mt-8 text-sm font-semibold text-neutral-950 transition hover:text-cyan-700"
                  >
                    Ver detalle <span aria-hidden="true">-&gt;</span>
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </section>
  );
}

function ProcessOverview() {
  return (
    <section id="proceso" className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Como trabajamos"
        title="Un proceso simple para convertir necesidades de negocio en software util."
      >
        <p>
          Trabajamos con entregas claras, decisiones documentadas y validacion
          continua para reducir riesgos desde el primer sprint.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger>
          <ol className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {process.map(([title, description], index) => (
              <FadeIn key={title}>
                <li className="rounded-lg border border-neutral-200 p-6">
                  <span className="font-display text-sm font-semibold text-cyan-700">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-medium text-neutral-950">
                    {title}
                  </h3>
                  <p className="mt-4 text-base text-neutral-600">
                    {description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </FadeInStagger>
      </Container>
    </section>
  );
}

function TechnologyStack() {
  return (
    <section
      id="tecnologias"
      className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-40"
    >
      <SectionIntro
        eyebrow="Tecnologias"
        title="Herramientas modernas para productos rapidos, seguros y escalables."
        invert
      >
        <p>
          Elegimos el stack segun el objetivo del proyecto: velocidad de carga,
          administracion, integraciones, datos, IA o comercio electronico.
        </p>
      </SectionIntro>
      <Container className="mt-12">
        <FadeInStagger faster>
          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <FadeIn key={technology}>
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
                  {technology}
                </span>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Por que elegirnos"
        title="Tecnologia bien pensada, comunicacion directa y foco en resultados."
      >
        <p>
          PUROINTERNET combina criterio de producto, desarrollo web y vision de
          negocio para que cada entrega tenga impacto real.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <FadeIn key={benefit}>
                <div className="border-l border-neutral-950 pl-6">
                  <p className="font-display text-xl font-medium text-neutral-950">
                    {benefit}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <Container>
        <FadeIn className="max-w-4xl">
          <p className="font-display text-base font-semibold text-neutral-950">
            Sobre PUROINTERNET
          </p>
          <h2 className="mt-6 font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
            Somos un equipo digital que construye webs, sistemas e
            integraciones para empresas que necesitan avanzar sin friccion.
          </h2>
          <p className="mt-6 max-w-3xl text-xl text-neutral-600">
            Nos involucramos desde la estrategia hasta el lanzamiento: definimos
            estructura, experiencia, datos, automatizaciones y soporte para que
            tu plataforma no solo se vea bien, sino que trabaje por tu negocio.
          </p>
          <div className="mt-10">
            <Link
              href="/about"
              className="text-sm font-semibold text-neutral-950 transition hover:text-cyan-700"
            >
              Conocer mas <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-x-16">
          <FadeIn className="max-w-4xl lg:max-w-3xl">
            <p className="mb-6 font-display text-base font-semibold text-cyan-700">
              Desarrollo web, sistemas y automatizacion
            </p>
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              Creamos productos digitales que hacen crecer tu negocio
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-neutral-600">
              Disenamos paginas web, sistemas y soluciones digitales rapidas,
              modernas y preparadas para escalar.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Cotizar proyecto
              </Link>
              <Link
                href="#proyectos"
                className="inline-flex rounded-full border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:border-neutral-950"
              >
                Ver proyectos
              </Link>
            </div>
          </FadeIn>
          <HeroPreview />
        </div>
      </Container>
      <Services />
      <Projects />
      <ProcessOverview />
      <TechnologyStack />
      <WhyChooseUs />
      <AboutPreview />
      <Testimonials className="mt-24 sm:mt-32 lg:mt-40">
        PUROINTERNET nos ayudo a ordenar procesos, lanzar una plataforma
        profesional y tener datos claros para tomar mejores decisiones.
      </Testimonials>
      <ContactSection />
    </main>
  );
}
