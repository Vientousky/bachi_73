import type { Metadata } from "next";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Foter";
import "./ui/globals.css";
import "./ui/fonts"


export const metadata: Metadata = {
  title: "EES N°59 - Colegio del Centenario",
  description: "Escuela de educación secundaria del centenario",
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
      </body>
    </html>
  );
}
