import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESS N°59 | Reglamentos",
  description:
    "Encuentra todo el reglamento del colegio para no tener incovenientes",
  keywords: [
    "Reglamento EES N°59",
    "Reglamento Colegio del Centenario",
    "Normas de convivencia secundaria EES 59",
    "Reglamento escolar Sáenz Peña Chaco",
    "Derechos y deberes estudiantes EES 59",
    "Reglamento interno colegio Centenario",
  ],
  openGraph: {
    title: "EES N°59 | Reglamento",
    description: "Reglamento completo del colegio",
    url: "https://ees-n59.vercel.app/reglamento",
    siteName: "EES N°59",
    images: [
      {
        url: "/reglamento-og.png",
        width: 1200,
        height: 630,
        alt: "Imagen OG reglamento",
      },
    ],
    type: "article",
  },
};

export default function LoadingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
