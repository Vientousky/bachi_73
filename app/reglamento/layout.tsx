import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESS N°59 | Reglamentos",
  description:
    "Encuentra todo el reglamento del colegio para no tener icovenientes",
  keywords: [
    "Reglamento EES N°59",
    "Reglamento Colegio del Centenario",
    "Normas de convivencia secundaria EES 59",
    "Reglamento escolar Sáenz Peña Chaco",
    "Derechos y deberes estudiantes EES 59",
    "Reglamento interno colegio Centenario",
  ],
  metadataBase: new URL("https://ees-n59.vercel.app"),

  openGraph: {
    title: "EES N°59 | Reglamento",
    description: "Reglamento del colegio EES N°59",
    url: "https://ees-n59.vercel.app/reglamento",
    siteName: "EES N°59",
    images: [
      {
        url: "img/opengraph-reglamento.png",
        width: 1200,
        height: 630,
        alt: "EES N°59 - Colegio del Centenario",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EES N°59 | Reglamento",
    description: "Reglamento del colegio EES N°59",
    images: ["img/opengraph-reglamento.png"],
  },
};

export default function LoadingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
