import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.thermoshieldinsulation.com';
const url = BASE_URL + '/services/blown-in-cellulose';

export const metadata: Metadata = {
  title: "Blown-In Cellulose Waco TX | ThermoShield Insulation",
  description: "Blown-in cellulose insulation for Waco and Central Texas attics. Dense, even coverage to target R-value — flat-rate, BPI-aligned, 5-year workmanship.",
  keywords: [
    "blown-in cellulose Waco TX",
    "cellulose insulation Central Texas",
    "attic cellulose install Waco",
    "ThermoShield Insulation",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Blown-In Cellulose Waco TX | ThermoShield Insulation",
    description: "Blown-in cellulose insulation for Waco and Central Texas attics. Dense, even coverage to target R-value — flat-rate, BPI-aligned, 5-year workmanship.",
    url,
    siteName: "ThermoShield Insulation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blown-In Cellulose Waco TX | ThermoShield Insulation",
    description: "Blown-in cellulose insulation for Waco and Central Texas attics. Dense, even coverage to target R-value — flat-rate, BPI-aligned, 5-year workmanship.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Blown-In Cellulose",
  description: "Blown-in cellulose insulation for Waco and Central Texas attics. Dense, even coverage to target R-value — flat-rate, BPI-aligned, 5-year workmanship.",
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
  serviceType: "Blown-In Cellulose",
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