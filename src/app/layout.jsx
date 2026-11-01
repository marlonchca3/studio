import RootLayout from "@/components/RootLayout";
import localFont from "next/font/local";
import "./globals.css";

const monaSans = localFont({
  src: "../fonts/Mona-Sans.var.woff2",
  display: "swap",
  weight: "200 900",
  variable: "--font-mona-sans",
  declarations: [{ prop: "font-stretch", value: "75% 125%" }],
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://purointernet.com/#organization",
      name: "PUROINTERNET",
      url: "https://purointernet.com/",
      logo: "https://purointernet.com/purointernet-logo.svg",
      description:
        "Desarrollo de páginas web, sistemas empresariales, dashboards, automatizaciones e integraciones digitales. Atención remota desde Perú y proyectos para Latinoamérica.",
      areaServed: ["Perú", "Latinoamérica"],
    },
    {
      "@type": "WebSite",
      "@id": "https://purointernet.com/#website",
      url: "https://purointernet.com/",
      name: "PUROINTERNET",
      inLanguage: "es-PE",
      publisher: {
        "@id": "https://purointernet.com/#organization",
      },
    },
  ],
};

export const metadata = {
  metadataBase: new URL("https://purointernet.com"),
  title: {
    template: "%s | PUROINTERNET",
    default: "Diseño de Páginas Web en Lima desde S/150 | PuroInternet",
  },
  description:
    "Creamos páginas web profesionales para negocios y emprendedores en Perú. Diseño moderno desde S/150. Cotiza tu página web por WhatsApp.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Diseño de Páginas Web en Lima desde S/150 | PuroInternet",
    description:
      "Creamos páginas web profesionales para negocios y emprendedores en Perú. Diseño moderno desde S/150. Cotiza tu página web por WhatsApp.",
    url: "/",
    siteName: "PUROINTERNET",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Diseño de Páginas Web en Lima desde S/150 | PuroInternet",
    description:
      "Creamos páginas web profesionales para negocios y emprendedores en Perú. Diseño moderno desde S/150. Cotiza tu página web por WhatsApp.",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="es"
      className={`${monaSans.variable} h-full bg-neutral-950 text-base antialiased text-neutral-100`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
