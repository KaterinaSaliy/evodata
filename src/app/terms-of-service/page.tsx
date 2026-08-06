import type { Metadata } from "next";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { termsOfService } from "@/content/en/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern access to and use of the EvoData website: acceptable use, intellectual property, disclaimers and governing law.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service | EvoData",
    description:
      "The terms that govern access to and use of the EvoData website.",
    url: "/terms-of-service",
  },
};

/** Terms of Service — no Figma node; see `LegalDocument`. */
export default function TermsOfServicePage() {
  return <LegalDocument doc={termsOfService} />;
}
