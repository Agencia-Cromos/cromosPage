import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Natã Spitz Alves",
  description:
    "Desenvolvedor web e mobile  há mais de 3 aqnos especialista em Ux e Ui Design.",
};

export default function FundadorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

