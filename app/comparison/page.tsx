import type { Metadata } from "next";
import { ComparisonBody } from "@/components/pages/ComparisonBody";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "Honest, cited comparison of BoundPro vs FastBound, Orchid eBound, Easybound, and AIM — pricing, 4473, NFA, API, and audit features.",
  alternates: { canonical: "/comparison" },
  openGraph: {
    title: "BoundPro vs FastBound, Orchid, Easybound & AIM",
    description: "Sourced feature and pricing comparison of A and D Software for FFLs.",
    url: "/comparison",
  },
};

export default function ComparisonPage() {
  return <ComparisonBody />;
}
