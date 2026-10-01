import RootLayout from "@/components/RootLayout";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | PUROINTERNET",
    default: "PUROINTERNET | Desarrollo web y soluciones digitales",
  },
  description:
    "Creamos páginas web, sistemas empresariales, dashboards, automatización e integraciones digitales modernas.",
};

export default function Layout({ children }) {
  return (
    <html
      lang="es"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
