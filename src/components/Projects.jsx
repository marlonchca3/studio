import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import SectionIntro from "./SectionIntro";
import tourismProject from "../../portafolio/1.png";
import fashionProject from "../../portafolio/2.png";
import aviationProject from "../../portafolio/3.png";

const projects = [
  {
    title: "Turismo Perú",
    type: "Turismo y viajes",
    subtitle: "Destinos, tours y experiencias para descubrir el Perú.",
    image: tourismProject,
    imageAlt: "Diseño conceptual de una página turística sobre el Perú",
    accent: "from-cyan-500 to-sky-500 border-cyan-200 text-cyan-700",
  },
  {
    title: "Consuelo Fashion",
    type: "Tienda online",
    subtitle: "Catálogo de moda con categorías y una experiencia de compra clara.",
    image: fashionProject,
    imageAlt: "Diseño conceptual de una tienda online de moda",
    accent: "from-emerald-500 to-lime-400 border-emerald-200 text-emerald-700",
  },
  {
    title: "AeroAcademy",
    type: "Educación aeronáutica",
    subtitle: "Cursos y formación profesional para quienes quieren volar alto.",
    image: aviationProject,
    imageAlt: "Diseño conceptual de una plataforma de formación aeronáutica",
    accent: "from-fuchsia-500 to-rose-500 border-fuchsia-200 text-fuchsia-700",
  },
];

export function ProjectGallery({ className = "mt-16" }) {
  return (
    <Container className={className}>
      <FadeInStagger>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeIn key={project.title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg shadow-neutral-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[3/2] overflow-hidden bg-neutral-100">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p
                    className={`w-fit rounded-full border bg-gradient-to-r px-3 py-1 text-xs font-semibold shadow-sm ${project.accent}`}
                  >
                    {project.type}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-medium text-neutral-950">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-base text-neutral-600">
                    {project.subtitle}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-auto pt-6 text-sm font-semibold text-neutral-950 transition hover:text-cyan-700"
                  >
                    Crear un proyecto similar{" "}
                    <span aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </Container>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Proyectos"
        title="Ideas digitales diseñadas para distintos sectores."
      >
        <p>
          Diseños conceptuales de sitios web para turismo, moda y formación
          aeronáutica.
        </p>
      </SectionIntro>
      <ProjectGallery />
    </section>
  );
}
