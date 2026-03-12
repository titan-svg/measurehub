import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MeasureHub - Gestión de Mediciones Organizacionales",
  description: "Plataforma integral para la gestión de mediciones organizacionales y presentación de resultados de Business Intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
