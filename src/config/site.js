export function constructMetadata({
  title = "PUROINTERNET | Desarrollo web, sistemas y automatización",
  description = "PUROINTERNET crea páginas web, sistemas empresariales, dashboards, automatización e integraciones digitales para negocios que quieren crecer.",
  image = "/agency.PNG",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@purointernet",
    },
    icons,
    metadataBase: new URL("https://purointernet.com/"),
    themeColor: "#0A0A0A",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
