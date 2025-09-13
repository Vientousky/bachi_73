import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "EES N°59 - Colegio del Centenario",
  description:
    "Escuela de Educación Secundaria del Centenario en Presidencia Roque Sáenz Peña, Chaco, Argentina.",
  keywords: [
    "EES N°59",
    "Colegio del Centenario",
    "Escuela Secundaria del Centenario",
    "Escuela de Educación Secundaria N°59",
    "Colegios en Presidencia Roque Sáenz Peña",
    "Escuelas secundarias en Sáenz Peña",
    "Colegios en Chaco Argentina",
    "Escuelas públicas en Sáenz Peña",
    "Barrio Juan Domingo Perón Chaco",
    "Colegio barrio Juan Domingo Perón Sáenz Peña",
    "Educación secundaria en Sáenz Peña",
    "Escuelas en Presidencia Roque Sáenz Peña",
    "Colegios estatales en Sáenz Peña Chaco",
    "Escuela secundaria pública Chaco",
    "Instituciones educativas en Sáenz Peña",
    "Colegio del Centenario Sáenz Peña Chaco",
    "Educación media en Chaco",
    "Escuelas de nivel secundario en Sáenz Peña",
    "Colegios secundarios barrio Juan Domingo Perón",
    "Escuela de enseñanza secundaria Chaco",
  ],
  metadataBase: new URL("https://ees-n59.vercel.app"),

  openGraph: {
    title: "EES N°59 - Colegio del Centenario",
    description:
      "Escuela de Educación Secundaria en Presidencia Roque Sáenz Peña, Chaco.",
    url: "https://ees-n59.vercel.app",
    siteName: "EES N°59",
    images: [
      {
        url: "img/opengraph-Loading.png",
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
    title: "EES N°59 - Colegio del Centenario",
    description: "Escuela de Educación Secundaria en Sáenz Peña, Chaco.",
    images: ["img/opengraph-Loading.png"],
  },
};

export default function LoadingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    { children }
    </>
  );
}
