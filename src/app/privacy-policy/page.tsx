import type { Metadata } from "next";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { privacyPolicy } from "@/content/en/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How EvoData handles personal data under the GDPR: what the website collects, why, how long it is kept, and the rights visitors have.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | EvoData",
    description: "How EvoData handles personal data under the GDPR.",
    url: "/privacy-policy",
  },
};

/** Privacy Policy — no Figma node; see `LegalDocument`. */
export default function PrivacyPolicyPage() {
  return <LegalDocument doc={privacyPolicy} />;
}
