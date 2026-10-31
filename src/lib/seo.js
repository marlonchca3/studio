const siteName = "PUROINTERNET";

export function createPageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "es_PE",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
