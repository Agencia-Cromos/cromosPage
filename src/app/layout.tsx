import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { NavigationLoaderProvider } from "@/components/common/NavigationLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agência Cromos",
  description:
    "Plataforma oficial da Agência Cromos, a mais tecnológica em softwares sob demanda.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <NavigationLoaderProvider>{children}</NavigationLoaderProvider>
      </body>
    </html>
  );
}
