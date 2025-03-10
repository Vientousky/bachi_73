import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Foter";
import "./ui/globals.css";
import "./ui/fonts"


export const metadata: Metadata = {
  title: "EES N°59 - Colegio del Centenario",
  description: "Escuela de educación secundaria del centenario",
  metadataBase: new URL("https://ees-n59.vercel.app")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header/>
        {children}
        <Footer/>
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  );
}
