import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Nuestra forma de trabajo"
        title="Equipo tecnico, mirada comercial y comunicacion clara."
        invert
      >
        <p>
          Nos enfocamos en construir relaciones de largo plazo con empresas que
          necesitan soluciones digitales confiables y medibles.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Claridad" invert>
            Definimos alcance, prioridades y criterios de entrega antes de
            avanzar con el desarrollo.
          </GridListItem>
          <GridListItem title="Confianza" invert>
            Mantenemos seguimiento constante para que cada decision sea visible
            y entendible.
          </GridListItem>
          <GridListItem title="Evolucion" invert>
            Pensamos cada producto para crecer con nuevas funciones,
            automatizaciones e integraciones.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
