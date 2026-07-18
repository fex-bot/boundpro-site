import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "BoundPro — The #1 A and D Software for Federal Firearms Licensees",
    template: "%s — BoundPro",
  },
  description: siteConfig.description,
  authors: [{ name: "BoundPro" }],
  openGraph: {
    type: "website",
    siteName: "BoundPro",
    title: "BoundPro — A and D Software for Federal Firearms Licensees",
    description:
      "Modern A and D Software for FFLs. Electronic bound book, 4473 with QR-code buyer signing, NFA tracking, and one-click ATF compliance packs.",
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 800,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BoundPro — A and D Software for FFLs",
    description: "The modern A and D Software built for Federal Firearms Licensees.",
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [{ url: "/images/logo.svg", type: "image/svg+xml" }],
    apple: "/images/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
