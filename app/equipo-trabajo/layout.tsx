import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESS N°59 | Equipo de trabajo",
  description: "Encuentre aqui como esta compuesta la jerarquia de trabajo",
  keywords: [
    "Trabajadores de EES N°59",
    "Como esta compuesto el equipo de trabajo del EESN59?",
    "¿Quien es el director de turno mañana del EESN59?",
    "¿Quien es el vicedirectora del turno tarde EESN59?",
    "¿Quien es el vicedirector del turno Vespertino EESN59?",
    "¿Quien es la secretaria EESN59?",
    "¿Quien es la asesora pedagogica del EESN59?",
  ],
  openGraph: {
    title: "EES N°59 | Equipo de Trabajo",
    description: "Jerarquia del colegio",
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
