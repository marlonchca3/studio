import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
  "Empresas de servicios",
  "Educacion",
  "Retail y e-commerce",
  "Operaciones internas",
  "Marketing y ventas",
  "Datos y reportes",
  "Automatizacion",
  "Integraciones API",
];

const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Soluciones para equipos que necesitan vender, operar y medir mejor
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4"
          >
            {clients.map((client) => (
              <li key={client}>
                <FadeIn>
                  <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-5 text-sm font-semibold text-white">
                    {client}
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
