import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <section id="servicios">
      <SectionIntro
        eyebrow="Servicios"
        title="Desarrollamos soluciones digitales completas para operar, vender y escalar."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Desde una landing page rapida hasta un sistema web con usuarios,
          bases de datos, paneles e integraciones, construimos tecnologia con
          foco en resultados.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Paginas web y landing pages">
              Sitios corporativos, paginas de venta y experiencias responsive
              con contenido claro, buen rendimiento y una presencia profesional.
            </ListItem>
            <ListItem title="Sistemas web empresariales">
              Plataformas a medida con login, roles, formularios, bases de
              datos, modulos internos y administracion de procesos.
            </ListItem>
            <ListItem title="Dashboards y paneles administrativos">
              Tableros con metricas, filtros, gestion de usuarios, reportes y
              visualizacion de datos para tomar mejores decisiones.
            </ListItem>
            <ListItem title="Automatizacion, APIs, IA y e-commerce">
              Integramos herramientas, automatizamos tareas, conectamos APIs,
              implementamos soluciones con inteligencia artificial y tiendas
              online listas para vender.
            </ListItem>
            <ListItem title="Mantenimiento y soporte web">
              Acompanamos la evolucion del producto con mejoras, monitoreo,
              optimizacion, correcciones y soporte tecnico continuo.
            </ListItem>
          </List>
        </div>
      </Container>
    </section>
  );
};

export default Services;
