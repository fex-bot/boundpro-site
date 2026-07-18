import type { Metadata } from "next";
import { PricingBody } from "@/components/pages/PricingBody";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "BoundPro pricing for FFLs — Starter $29, Professional $79, Enterprise $199. No per-4473 fees. 14-day free trial.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "BoundPro Pricing — A and D Software for FFLs",
    description: "One transparent monthly price per FFL. No per-transaction fees. Cancel anytime.",
    url: "/pricing",
  },
};

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "BoundPro",
  description: "A and D Software for Federal Firearms Licensees",
  brand: { "@type": "Brand", "name": "BoundPro" },
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "29.00",
      priceCurrency: "USD",
      description:
        "A and D Software for single-location dealers. 1 FFL, up to 500 Form 4473s/year.",
      brand: { "@type": "Brand", name: "BoundPro" },
      offers: {
        "@type": "Offer",
        price: "29.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Offer",
      name: "Professional",
      price: "79.00",
      priceCurrency: "USD",
      description:
        "A and D Software for multi-FFL retailers and SOT dealers. Up to 3 FFLs, unlimited 4473s, NFA registry, REST API.",
      brand: { "@type": "Brand", name: "BoundPro" },
      offers: {
        "@type": "Offer",
        price: "79.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      price: "199.00",
      priceCurrency: "USD",
      description:
        "A and D Software for chains, distributors, and manufacturers. Unlimited FFLs, webhooks, SSO, dedicated account manager.",
      brand: { "@type": "Brand", name: "BoundPro" },
      offers: {
        "@type": "Offer",
        price: "199.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      <PricingBody />
    </>
  );
}
