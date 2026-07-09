import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thermoshieldinsulation.com";

export const metadata: Metadata = {
  title: "About ThermoShield Insulation — Waco TX Insulation Company Since 2012",
  description:
    "Meet the ThermoShield Insulation team. Locally owned and operated in Waco, Texas since 2012. BPI-aligned installers, bonded & insured, Comfort & Efficiency Guarantee · 5-Year Workmanship. Serving Waco, Hewitt, Woodway, and all of Central Texas.",
  keywords: [
    "about ThermoShield Insulation",
    "Waco insulation company",
    "insulation contractor Waco TX",
    "locally owned insulation Waco",
    "BPI aligned insulation Waco Texas",
    "Brooke Lang ThermoShield",
  ],
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About ThermoShield Insulation — Waco TX Insulation Company Since 2012",
    description:
      "Locally owned insulation company in Waco, TX. BPI-aligned, flat-rate pricing, Comfort & Efficiency Guarantee · 5-Year Workmanship.",
    url: `${BASE_URL}/about`,
    siteName: "ThermoShield Insulation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ThermoShield Insulation — Waco TX Since 2012",
    description: "Locally owned insulation company in Waco, TX. BPI-aligned, flat-rate pricing.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About ThermoShield Insulation",
  url: `${BASE_URL}/about`,
  mainEntity: {
    "@type": "HomeAndConstructionBusiness",
    name: "ThermoShield Insulation",
    telephone: "+12548505050",
    email: "hello@thermoshieldinsulation.com",
    foundingDate: "2012",
    founder: { "@type": "Person", name: "Brooke Lang" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "2201 S Valley Mills Dr",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76706",
      addressCountry: "US",
    },
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
