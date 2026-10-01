import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Desarrollo" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Convertimos el plan en pantallas, componentes, flujos, base de datos
          e integraciones. Trabajamos con entregas visibles para que puedas
          revisar avances y ajustar prioridades con tiempo.
        </p>
        <p>
          Cuidamos rendimiento, responsive, seguridad basica, claridad visual y
          estructura de codigo para que el producto sea facil de mantener.
        </p>
        <p>
          Si el proyecto lo requiere, incorporamos autenticacion, roles,
          dashboards, pagos, APIs, automatizaciones o funciones con IA.
        </p>
      </div>
      <Blockquote
        author={{ name: "PUROINTERNET", role: "Equipo de producto" }}
        className="mt-12"
      >
        Cada entrega debe acercar el producto a una decision de negocio, no solo
        sumar pantallas.
      </Blockquote>
    </Section>
  );
};

export default Build;
