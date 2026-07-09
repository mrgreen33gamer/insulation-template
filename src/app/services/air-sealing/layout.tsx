import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.thermoshieldinsulation.com';
const url = BASE_URL + '/services/air-sealing';

export const metadata: Metadata = {
  title: "Air Sealing Waco TX | ThermoShield Insulation",
  description: "Professional air sealing for Waco homes — attic penetrations, can lights, top plates, and ducts. Flat-rate, BPI-aligned, Comfort & Efficiency Guarantee.",
  keywords: [
    "air sealing Waco TX",
    "attic air seal Central Texas",
    "can light sealing Waco",
    "ThermoShield Insulation",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Air Sealing Waco TX | ThermoShield Insulation",
    description: "Professional air sealing for Waco homes — attic penetrations, can lights, top plates, and ducts. Flat-rate, BPI-aligned, Comfort & Efficiency Guarantee.",
    url,
    siteName: "ThermoShield Insulation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Sealing Waco TX | ThermoShield Insulation",
    description: "Professional air sealing for Waco homes — attic penetrations, can lights, top plates, and ducts. Flat-rate, BPI-aligned, Comfort & Efficiency Guarantee.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Air Sealing",
  description: "Professional air sealing for Waco homes — attic penetrations, can lights, top plates, and ducts. Flat-rate, BPI-aligned, Comfort & Efficiency Guarantee.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "ThermoShield Insulation",
    url: BASE_URL,
    telephone: "+12548505050",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2201 S Valley Mills Dr",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76706",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Air Sealing",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}