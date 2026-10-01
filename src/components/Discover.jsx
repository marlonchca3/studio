import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Diagnostico" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Comenzamos entendiendo tus{" "}
          <strong className="font-semibold text-neutral-950">objetivos</strong>,
          procesos, usuarios y restricciones. Esa claridad permite decidir que
          construir primero y que dejar preparado para una siguiente etapa.
        </p>
        <p>
          Revisamos contenido, datos, herramientas actuales e integraciones
          necesarias para disenar una solucion que encaje con la forma real en
          que trabaja tu{" "}
          <strong className="font-semibold text-neutral-950">empresa</strong>.
        </p>
        <p>
          Cerramos esta fase con un{" "}
          <strong className="font-semibold text-neutral-950">plan</strong> de
          alcance, prioridades, tiempos estimados y entregables.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Incluye
      </h3>
      <TagList className="mt-4">
        <TagListItem>Relevamiento funcional</TagListItem>
        <TagListItem>Mapa de procesos</TagListItem>
        <TagListItem>Arquitectura inicial</TagListItem>
        <TagListItem>Prioridades del producto</TagListItem>
        <TagListItem>Estimacion de alcance</TagListItem>
        <TagListItem>Roadmap de trabajo</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
