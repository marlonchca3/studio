import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Sobre PUROINTERNET"
        title="Creamos tecnologia clara para empresas que quieren crecer."
      >
        <p>
          PUROINTERNET desarrolla paginas web, sistemas empresariales,
          dashboards, automatizaciones, bases de datos e integraciones digitales
          con una mirada practica y comercial.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Nuestro trabajo empieza por entender como funciona tu negocio y que
            necesita resolver. A partir de ahi disenamos una experiencia
            moderna, estable y lista para evolucionar.
          </p>
          <p>
            Nos enfocamos en soluciones utiles: sitios que convierten, sistemas
            que ordenan operaciones y automatizaciones que ahorran tiempo.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="10+" label="Servicios digitales" />
          <StatListItem value="100%" label="Responsive" />
          <StatListItem value="24/7" label="Presencia online" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
