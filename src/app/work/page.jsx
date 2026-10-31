import PageIntro from "@/components/PageIntro";
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
        title="Soluciones digitales pensadas para problemas reales de negocio."
      >
        <p>
          Estos casos iniciales pueden editarse para mostrar resultados reales:
          sistemas de gestion, dashboards, plataformas educativas, e-commerce y
          landing pages corporativas.
        </p>
      </PageIntro>
    </>
  );
};

export default WorkPage;
