/**
 * Legal pages — Privacy Policy and Terms of Service.
 *
 * Copy comes verbatim from the client documents ("PRIVACY POLICY.pdf" and
 * "Website Terms of Service для сайта EvoData.pdf"); only the ALL-CAPS section
 * headings were set in title case, which is how headings read everywhere else
 * on the site. Neither page is in the Figma file — the layout follows the rest
 * of the site (see `LegalDocument`).
 */

export type LegalBlock =
  | { type: "paragraph"; text: string }
  /** Heading inside a section, e.g. "Legal Basis". */
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: readonly string[] }
  /** Address or a name block: one line each, no bullets. */
  | { type: "lines"; items: readonly string[] }
  | { type: "link"; href: string; label: string }
  /** Data protection e-mail — rendered through `ContactLink`. */
  | { type: "email" };

export type LegalSection = {
  /** Section number as printed in the document. */
  number: string;
  title: string;
  blocks: readonly LegalBlock[];
};

export type LegalDocumentContent = {
  breadcrumb: string;
  title: string;
  effectiveDate: string;
  intro: readonly string[];
  sections: readonly LegalSection[];
};

export const privacyPolicy: LegalDocumentContent = {
  breadcrumb: "Privacy Policy",
  title: "Privacy Policy",
  effectiveDate: "Effective date: 06.2026",
  intro: [
    'EvoData ("EvoData", "we", "our", or "us") respects your privacy and is committed to protecting personal data in accordance with the General Data Protection Regulation (EU) 2016/679 ("GDPR") and applicable Austrian data protection laws.',
  ],
  sections: [
    {
      number: "1",
      title: "Data Controller",
      blocks: [
        { type: "lines", items: ["Data Controller:", "Dmytro Herbeda e.U."] },
        { type: "email" },
        {
          type: "paragraph",
          text: "Please note that our Website is designed not to collect information that directly identifies individual visitors. Consequently, we may not be able to identify you or fulfill certain requests unless additional information is provided.",
        },
      ],
    },
    {
      number: "2",
      title: "Information We Collect",
      blocks: [
        {
          type: "paragraph",
          text: "Our Website is intended for informational purposes only.",
        },
        {
          type: "paragraph",
          text: "We do not require visitors to register, create an account, submit contact forms, or otherwise provide personal information in order to use the Website.",
        },
        {
          type: "paragraph",
          text: "When you visit our Website, certain technical information may be processed automatically by our hosting provider and analytics services, including:",
        },
        {
          type: "bullets",
          items: [
            "IP address (anonymized where applicable);",
            "browser type and version;",
            "operating system;",
            "device type;",
            "pages visited;",
            "date and time of the visit;",
            "referring website (if applicable);",
            "approximate geographic location.",
          ],
        },
        {
          type: "paragraph",
          text: "This information is used solely to ensure the proper operation of the Website, improve its performance, and analyze website traffic.",
        },
      ],
    },
    {
      number: "3",
      title: "Purposes and Legal Basis of Processing",
      blocks: [
        {
          type: "paragraph",
          text: "Technical information is processed exclusively for the following purposes:",
        },
        {
          type: "bullets",
          items: [
            "ensuring the security and stability of the Website;",
            "monitoring Website performance;",
            "analyzing anonymous visitor statistics through Google Analytics.",
          ],
        },
        { type: "subheading", text: "Legal Basis" },
        {
          type: "paragraph",
          text: "Article 6(1)(f) GDPR – Legitimate Interest.",
        },
        {
          type: "paragraph",
          text: "Where required by applicable law, analytics cookies will only be activated after obtaining your consent.",
        },
      ],
    },
    {
      number: "4",
      title: "Cookies",
      blocks: [
        { type: "paragraph", text: "The Website uses:" },
        {
          type: "bullets",
          items: [
            "essential cookies required for the technical operation of the Website;",
            "analytics cookies provided by Google Analytics.",
          ],
        },
        {
          type: "paragraph",
          text: "Analytics cookies are used solely to understand how visitors interact with the Website and to improve its content and performance.",
        },
        {
          type: "paragraph",
          text: "Where required under applicable law, your consent will be requested before analytics cookies are stored on your device.",
        },
      ],
    },
    {
      number: "5",
      title: "Google Analytics",
      blocks: [
        {
          type: "paragraph",
          text: "This Website uses Google Analytics, a web analytics service provided by Google LLC.",
        },
        {
          type: "paragraph",
          text: "Google Analytics collects anonymous statistical information about Website usage, such as pages visited, session duration, device type, and general geographic region.",
        },
        {
          type: "paragraph",
          text: "IP anonymization is enabled where available.",
        },
        {
          type: "paragraph",
          text: "Google may process certain technical information on servers located outside the European Economic Area (EEA). Appropriate safeguards, including the European Commission's Standard Contractual Clauses, are applied where required.",
        },
        {
          type: "paragraph",
          text: "More information about Google's privacy practices is available at:",
        },
        {
          type: "link",
          href: "https://policies.google.com/privacy",
          label: "policies.google.com/privacy",
        },
      ],
    },
    {
      number: "6",
      title: "Data Sharing",
      blocks: [
        {
          type: "paragraph",
          text: "We do not sell or disclose personal data to third parties for marketing purposes.",
        },
        {
          type: "paragraph",
          text: "Technical information may be processed by trusted service providers acting on our behalf, including:",
        },
        {
          type: "bullets",
          items: ["our website hosting provider;", "Google Analytics."],
        },
        {
          type: "paragraph",
          text: "Where required by law, information may also be disclosed to competent public authorities.",
        },
      ],
    },
    {
      number: "7",
      title: "International Data Transfers",
      blocks: [
        {
          type: "paragraph",
          text: "Where personal data is transferred outside the European Economic Area (EEA), appropriate safeguards are implemented in accordance with the GDPR, including Standard Contractual Clauses or other legally recognized transfer mechanisms.",
        },
      ],
    },
    {
      number: "8",
      title: "Data Retention",
      blocks: [
        {
          type: "paragraph",
          text: "Technical information is retained only for as long as necessary to fulfill the purposes described in this Privacy Policy or as required by applicable law.",
        },
        {
          type: "paragraph",
          text: "Retention periods for analytics data are determined by the configuration of Google Analytics.",
        },
      ],
    },
    {
      number: "9",
      title: "Your Rights",
      blocks: [
        { type: "paragraph", text: "Under the GDPR, you have the right to:" },
        {
          type: "bullets",
          items: [
            "request access to your personal data;",
            "request rectification of inaccurate personal data;",
            "request erasure of your personal data;",
            "request restriction of processing;",
            "object to the processing of your personal data;",
            "withdraw your consent at any time where processing is based on consent (for example, analytics cookies);",
            "lodge a complaint with the competent supervisory authority.",
          ],
        },
        {
          type: "paragraph",
          text: "Please note that our Website is designed not to collect information that directly identifies individual visitors. Consequently, we may not be able to identify you or fulfill certain requests unless additional information is provided.",
        },
        {
          type: "paragraph",
          text: "If you have any questions regarding the processing of personal data or wish to exercise your rights under the GDPR, please contact us using the details provided below.",
        },
      ],
    },
    {
      number: "10",
      title: "Security",
      blocks: [
        {
          type: "paragraph",
          text: "We implement appropriate technical and organizational measures to protect information processed through the Website against unauthorized access, disclosure, alteration, or destruction.",
        },
        {
          type: "paragraph",
          text: "However, no method of electronic transmission or storage can guarantee absolute security.",
        },
      ],
    },
    {
      number: "11",
      title: "Complaints",
      blocks: [
        {
          type: "paragraph",
          text: "If you believe that your personal data has been processed unlawfully, you have the right to lodge a complaint with the competent supervisory authority.",
        },
        { type: "paragraph", text: "For Austria:" },
        {
          type: "lines",
          items: [
            "Österreichische Datenschutzbehörde",
            "Barichgasse 40–42",
            "1030 Vienna",
            "Austria",
          ],
        },
        { type: "link", href: "https://www.dsb.gv.at", label: "dsb.gv.at" },
      ],
    },
    {
      number: "12",
      title: "Changes to This Privacy Policy",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this Privacy Policy from time to time to reflect changes in legal requirements or our Website.",
        },
        {
          type: "paragraph",
          text: "The current version will always be available on this Website.",
        },
      ],
    },
    {
      number: "13",
      title: "Contact",
      blocks: [
        {
          type: "paragraph",
          text: "For any questions regarding this Privacy Policy or data protection matters, please contact us.",
        },
        // Section 9 refers the reader to "the details provided below", so the
        // controller's address from section 1 is repeated here.
        { type: "email" },
      ],
    },
  ],
};

export const termsOfService: LegalDocumentContent = {
  breadcrumb: "Terms of Service",
  title: "Terms of Service",
  effectiveDate: "Effective date: 07.2026",
  intro: [
    'These Terms of Service ("Terms") govern access to and use of the EvoData website ("Website") operated by EvoData ("EvoData", "we", "us", or "our").',
    "By accessing or using the Website, you agree to be bound by these Terms.",
  ],
  sections: [
    {
      number: "1",
      title: "Purpose of the Website",
      blocks: [
        {
          type: "paragraph",
          text: "The Website is provided for informational and business purposes and may include information relating to:",
        },
        {
          type: "bullets",
          items: [
            "Artificial Intelligence solutions",
            "Machine Learning services",
            "Data Analytics",
            "Software Development",
            "Cloud Services",
            "Consulting Services",
            "Technical Resources",
            "Company Information",
          ],
        },
        {
          type: "paragraph",
          text: "Nothing on the Website constitutes legal, financial, investment, medical, regulatory, or professional advice.",
        },
      ],
    },
    {
      number: "2",
      title: "Acceptable Use",
      blocks: [
        { type: "paragraph", text: "You must not:" },
        {
          type: "bullets",
          items: [
            "interfere with or disrupt the operation or security of the Website;",
            "attempt to gain unauthorized access to the Website, its systems, or infrastructure;",
            "introduce malicious software or other harmful code;",
            "use automated means to scrape, copy, or extract Website content without our prior written authorization;",
            "use the Website for any unlawful purpose.",
          ],
        },
      ],
    },
    {
      number: "3",
      title: "Intellectual Property",
      blocks: [
        {
          type: "paragraph",
          text: "Unless otherwise indicated, all Website content is owned by or licensed to EvoData, including:",
        },
        {
          type: "bullets",
          items: [
            "trademarks;",
            "logos;",
            "graphics;",
            "text;",
            "software;",
            "designs;",
            "source code;",
            "documentation;",
            "AI methodologies;",
            "proprietary materials.",
          ],
        },
        {
          type: "paragraph",
          text: "No ownership rights are transferred through Website access.",
        },
      ],
    },
    {
      number: "4",
      title: "Limited License",
      blocks: [
        {
          type: "paragraph",
          text: "EvoData grants a limited, revocable, non-exclusive, non-transferable license to access and use the Website for lawful business purposes.",
        },
        { type: "paragraph", text: "No other rights are granted." },
      ],
    },
    {
      number: "5",
      title: "Third-Party Links",
      blocks: [
        {
          type: "paragraph",
          text: "The Website may contain links to third-party websites.",
        },
        {
          type: "paragraph",
          text: "EvoData does not control, endorse, or assume responsibility for third-party content, products, services, privacy practices, or security.",
        },
        {
          type: "paragraph",
          text: "Access to third-party websites is at your own risk.",
        },
      ],
    },
    {
      number: "6",
      title: "No Warranties",
      blocks: [
        {
          type: "paragraph",
          text: 'The Website is provided on an "AS IS" and "AS AVAILABLE" basis.',
        },
        {
          type: "paragraph",
          text: "To the fullest extent permitted by applicable law, EvoData disclaims all warranties, including:",
        },
        {
          type: "bullets",
          items: [
            "merchantability;",
            "fitness for a particular purpose;",
            "accuracy;",
            "completeness;",
            "availability;",
            "non-infringement.",
          ],
        },
        {
          type: "paragraph",
          text: "EvoData does not guarantee uninterrupted or error-free operation.",
        },
      ],
    },
    {
      number: "7",
      title: "Limitation of Liability",
      blocks: [
        {
          type: "paragraph",
          text: "To the fullest extent permitted by applicable law, EvoData shall not be liable for:",
        },
        {
          type: "bullets",
          items: [
            "indirect damages;",
            "incidental damages;",
            "consequential damages;",
            "loss of profits;",
            "loss of revenue;",
            "loss of data;",
            "business interruption;",
            "reputational harm.",
          ],
        },
        {
          type: "paragraph",
          text: "Website use is entirely at the user's own risk.",
        },
      ],
    },
    {
      number: "8",
      title: "AI-Related Content Disclaimer",
      blocks: [
        {
          type: "paragraph",
          text: "Any AI-related information, demonstrations, examples, case studies, or descriptions provided on the Website are for informational purposes only.",
        },
        {
          type: "paragraph",
          text: "AI systems may generate inaccurate, incomplete, outdated, biased, or unexpected outputs.",
        },
        {
          type: "paragraph",
          text: "Nothing on the Website constitutes a guarantee of future performance, model accuracy, business outcomes, or commercial success.",
        },
      ],
    },
    {
      number: "9",
      title: "Confidential Information",
      blocks: [
        {
          type: "paragraph",
          text: "Information submitted through contact forms, inquiries, or communications shall not be considered confidential unless otherwise agreed in writing.",
        },
      ],
    },
    {
      number: "10",
      title: "Changes",
      blocks: [
        {
          type: "paragraph",
          text: "EvoData reserves the right to modify these Terms at any time.",
        },
        {
          type: "paragraph",
          text: "Updated Terms shall become effective upon publication on the Website.",
        },
      ],
    },
    {
      number: "11",
      title: "Governing Law",
      blocks: [
        {
          type: "paragraph",
          text: "These Terms shall be governed by the laws of Austria.",
        },
        {
          type: "paragraph",
          text: "The competent courts of Vienna, Austria shall have exclusive jurisdiction over disputes arising from these Terms.",
        },
      ],
    },
  ],
};
