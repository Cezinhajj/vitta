import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vitta — sua rotina, seu bairro, sua evolução",
  description: "Alimentação prática, corrida e conquistas em uma jornada perto de você.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
