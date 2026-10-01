import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Lanzamiento" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Antes de publicar validamos experiencia, rendimiento, formularios,
          flujos criticos, configuracion de dominio y comportamiento responsive.
          La idea es lanzar con{" "}
          <strong className="font-semibold text-neutral-950">
            confianza
          </strong>
          .
        </p>
        <p>
          Tambien dejamos una base ordenada para futuras mejoras: nuevas
          secciones, modulos, integraciones, automatizaciones o reportes.
        </p>
        <p>
          Despues del lanzamiento podemos acompanar con{" "}
          <strong className="font-semibold text-neutral-950">
            mantenimiento
          </strong>
          , soporte tecnico, optimizacion y evolucion continua del producto.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Incluye
      </h3>
      <List>
        <ListItem title="Pruebas">
          Revision funcional, responsive y de formularios antes de publicar.
        </ListItem>
        <ListItem title="Infraestructura">
          Preparacion para despliegue, dominio, analitica y buenas practicas de
          rendimiento.
        </ListItem>
        <ListItem title="Soporte">
          Acompanamiento posterior para mejoras, ajustes, monitoreo y nuevas
          funcionalidades.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
