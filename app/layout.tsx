import type { Metadata } from "next";
import Header from "./layout/Header";
import Footer from "./layout/Pie";
import "./ui/globals.css";
import "./ui/fonts"


export const metadata: Metadata = {
  title: "ESS N59",
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
