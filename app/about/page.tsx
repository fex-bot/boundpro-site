import type { Metadata } from "next";
import { AboutBody } from "@/components/pages/AboutBody";

export const metadata: Metadata = {
  title: "About",
  description:
    "BoundPro is A and D Software built by people who've worked the back counter. Modern, fast, ATF-compliant electronic bound book for Federal Firearms Licensees.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About BoundPro — A and D Software for FFLs",
    description: "The modern A and D Software built for Federal Firearms Licensees.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutBody />;
}
