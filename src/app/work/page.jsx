import PageIntro from "@/components/PageIntro";
import { ProjectGallery } from "@/components/Projects";
import { createPageMetadata } from "@/lib/seo";
import React from "react";

export const metadata = createPageMetadata({
  title: "Proyectos y soluciones de desarrollo web",
  description:
    "Explora los tipos de soluciones digitales que PUROINTERNET puede desarrollar: sistemas de gestión, dashboards, e-commerce y páginas web.",
  path: "/work/",
});

const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Proyectos"
        title="Diseños web para turismo, moda y formación profesional."
      >
        <p>
          Explora estos conceptos visuales de portafolio y descubre distintas
          formas de presentar una marca y sus servicios en internet.
        </p>
      </PageIntro>
      <ProjectGallery className="mt-12 sm:mt-16" />
    </>
  );
};

export default WorkPage;
