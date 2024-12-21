import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Star Wars Unlimited",
  description: "Manage cards and decks for Star Wars Unlimited.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
