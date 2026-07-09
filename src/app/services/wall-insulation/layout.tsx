import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.thermoshieldinsulation.com';
const url = BASE_URL + '/services/wall-insulation';

export const metadata: Metadata = {
  title: "Wall Insulation Waco TX | ThermoShield Insulation",
  description: "Dense-pack wall insulation in Waco and Central Texas. Quieter rooms, fewer drafts — flat-rate pricing, BPI-aligned installers.",
  keywords: [
    "wall insulation Waco TX",
    "dense pack cellulose walls",
    "exterior wall insulation Central Texas",
    "ThermoShield Insulation",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Wall Insulation Waco TX | ThermoShield Insulation",
    description: "Dense-pack wall insulation in Waco and Central Texas. Quieter rooms, fewer drafts — flat-rate pricing, BPI-aligned installers.",
    url,
    siteName: "ThermoShield Insulation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wall Insulation Waco TX | ThermoShield Insulation",
    description: "Dense-pack wall insulation in Waco and Central Texas. Quieter rooms, fewer drafts — flat-rate pricing, BPI-aligned installers.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wall Insulation",
  description: "Dense-pack wall insulation in Waco and Central Texas. Quieter rooms, fewer drafts — flat-rate pricing, BPI-aligned installers.",
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
  serviceType: "Wall Insulation",
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