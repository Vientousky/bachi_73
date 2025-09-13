import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import "./ui/globals.css";
import "./ui/fonts";

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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}