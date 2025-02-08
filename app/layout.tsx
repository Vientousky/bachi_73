import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}
