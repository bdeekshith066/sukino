import SiteHeader from "@/components/site-header";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SUKINO - Cafe & Kitchen",
  description: "A minimalist café experience inspired by Japanese aesthetics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col pattern-wave overflow-x-hidden">
        <SiteHeader />
        <main className="flex-1 w-full">{children}</main>
      </body>
    </html>
  );
}

