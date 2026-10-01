import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Soluciones",
    links: [
      { title: "Desarrollo web", href: "/#servicios" },
      { title: "Sistemas empresariales", href: "/#servicios" },
      { title: "Dashboards", href: "/#proyectos" },
      {
        title: (
          <>
            Ver proyectos <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Empresa",
    links: [
      { title: "Sobre PUROINTERNET", href: "/about" },
      { title: "Proceso", href: "/process" },
      { title: "Tecnologias", href: "/#tecnologias" },
      { title: "Contacto", href: "/contact" },
    ],
  },
  {
    title: "Contacto",
    links: SocialMediaProfiles,
  },
];
