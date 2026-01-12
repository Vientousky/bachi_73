import "./ui/globals.css";
import "./ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="site">
        {children}
      </body>
    </html>
  );
}
