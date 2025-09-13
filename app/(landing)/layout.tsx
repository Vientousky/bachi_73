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
   openGraph: {
    title: "EES N°59",
    description: "Escuela de Educación Secundaria del Centenario en Presidencia Roque Sáenz Peña, Chaco, Argentina.",
    url: "https://misitio.com",
    siteName: "Mi sitio",
    images: [
      {
        url: "/default-og.png",
        width: 1200,
        height: 630,
        alt: "Imagen de la web",
      },
    ],
    type: "website",
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
