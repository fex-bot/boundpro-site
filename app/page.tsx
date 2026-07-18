import type { Metadata } from "next";
import { HomeBody } from "@/components/pages/HomeBody";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "BoundPro — The #1 A and D Software for Federal Firearms Licensees" },
  description: siteConfig.description,
  keywords: [
    "A and D Software",
    "FFL software",
    "bound book software",
    "ATF Form 4473 software",
    "electronic A and D book",
    "FFL compliance software",
    "NFA tracking",
    "electronic bound book",
  ],
  alternates: { canonical: "/" },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BoundPro",
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo-icon.svg`,
  description:
    "BoundPro is modern A and D Software built for Federal Firearms Licensees. Electronic bound book, ATF Form 4473, NFA tracking, and one-click compliance reporting.",
  sameAs: [],
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BoundPro",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "A and D Software for Federal Firearms Licensees — electronic bound book, Form 4473, NFA registry, NICS tracking, and ATF-ready compliance reports.",
  offers: {
    "@type": "Offer",
    price: "29.00",
    priceCurrency: "USD",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }}
      />
      <HomeBody />
    </>
  );
}
