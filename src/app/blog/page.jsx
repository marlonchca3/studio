import PageIntro from "@/components/PageIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Recursos sobre desarrollo web y negocios digitales",
  description:
    "Guías e ideas sobre desarrollo web, automatización, dashboards e integración digital para ayudar a los negocios a crecer.",
  path: "/blog/",
});

const BlogPage = () => {
  return (
    <>
      <PageIntro eyebrow="Recursos" title="Ideas para mejorar tu negocio digital">
        <p>
          Pronto compartiremos guias sobre desarrollo web, automatizacion,
          dashboards, integraciones, inteligencia artificial y crecimiento
          digital para empresas.
        </p>
      </PageIntro>
    </>
  );
};

export default BlogPage;
