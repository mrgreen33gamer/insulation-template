import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.thermoshieldinsulation.com';
const url = BASE_URL + '/services/attic-insulation';

export const metadata: Metadata = {
  title: "Attic Insulation Waco TX | ThermoShield Insulation",
  description: "Professional attic insulation in Waco and Central Texas. R-value top-ups, full installs, flat-rate pricing, BPI-aligned, Comfort & Efficiency Guarantee · 5-Year Workmanship.",
  keywords: [
    "attic insulation Waco TX",
    "blown-in attic Waco",
    "R-value attic insulation Texas",
    "attic insulation contractor Waco",
    "ThermoShield Insulation",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Attic Insulation Waco TX | ThermoShield Insulation",
    description: "Professional attic insulation in Waco and Central Texas. R-value top-ups, full installs, flat-rate pricing, BPI-aligned, Comfort & Efficiency Guarantee · 5-Year Workmanship.",
    url,
    siteName: "ThermoShield Insulation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attic Insulation Waco TX | ThermoShield Insulation",
    description: "Professional attic insulation in Waco and Central Texas. R-value top-ups, full installs, flat-rate pricing, BPI-aligned, Comfort & Efficiency Guarantee · 5-Year Workmanship.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Attic Insulation",
  description: "Professional attic insulation in Waco and Central Texas. R-value top-ups, full installs, flat-rate pricing, BPI-aligned, Comfort & Efficiency Guarantee · 5-Year Workmanship.",
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
  serviceType: "Attic Insulation",
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