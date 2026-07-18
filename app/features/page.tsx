import type { Metadata } from "next";
import { FeaturesBody } from "@/components/pages/FeaturesBody";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Every BoundPro feature in detail — electronic A&D ledger, Form 4473 with QR-code buyer signing, NICS tracking, 3310 auto-detection, NFA registry, multi-FFL, API, and audit mode.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "BoundPro Features — A and D Software for FFLs",
    description:
      "Electronic bound book, 4473, NICS, NFA, multi-FFL, API, and ATF audit mode — every workflow an FFL needs.",
    url: "/features",
  },
};

export default function FeaturesPage() {
  return <FeaturesBody />;
}
