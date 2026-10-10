import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Offices from "./Offices";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 overflow-hidden rounded-4xl bg-gradient-to-br from-cyan-950 via-slate-950 to-fuchsia-950 px-6 py-20 shadow-2xl shadow-cyan-950/20 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex gap-3">
            <span className="h-2 w-14 rounded-full bg-cyan-300" />
            <span className="h-2 w-10 rounded-full bg-amber-300" />
            <span className="h-2 w-8 rounded-full bg-rose-400" />
          </div>
          <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
            Convirtamos tu idea en una solucion digital lista para crecer
          </h2>
          <p className="mt-6 max-w-2xl text-base text-neutral-300">
            Cuentanos que necesitas construir o mejorar. Te responderemos con
            una propuesta clara de alcance, tiempos y prioridades.
          </p>
          <div className="mt-6 flex">
            <Button href={"/contact"} invert>
              Cotizar proyecto
            </Button>
          </div>
          <div className="mt-10 border-t border-white/10 pt-10">
            <h3 className="font-display text-base font-semibold text-white">
              Modalidad de trabajo
            </h3>
            <Offices
              invert
              className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
            />
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
