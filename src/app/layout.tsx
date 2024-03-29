/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Kranky } from "next/font/google";
import "./globals.css";

const kranky = Kranky({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Livro de Cantigas",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <body className={kranky.className}>{children}</body>
    </html>
  );
}
