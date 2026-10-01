import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Nuestros principios"
        title="Construimos con claridad, velocidad y responsabilidad tecnica."
      >
        <p>
          Cada proyecto combina diseno, desarrollo y criterio de negocio para
          entregar soluciones que se puedan usar, medir y mejorar.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Estrategicos">
            Priorizamos lo que tiene impacto en ventas, operacion, datos o
            experiencia del usuario.
          </GridListItem>
          <GridListItem title="Eficientes">
            Avanzamos con entregas visibles, decisiones claras y componentes
            reutilizables cuando aportan valor.
          </GridListItem>
          <GridListItem title="Adaptables">
            Ajustamos tecnologia, alcance y arquitectura a la realidad de cada
            negocio.
          </GridListItem>
          <GridListItem title="Transparentes">
            Comunicamos avances, riesgos y dependencias para que siempre sepas
            donde esta el proyecto.
          </GridListItem>
          <GridListItem title="Confiables">
            Pensamos en mantenimiento, rendimiento, seguridad y evolucion desde
            el inicio.
          </GridListItem>
          <GridListItem title="Innovadores">
            Integramos automatizacion e inteligencia artificial cuando mejora
            procesos reales, no por moda.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
