import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.thermoshieldinsulation.com';
const url = BASE_URL + '/services/energy-audits';

export const metadata: Metadata = {
  title: "Energy Audits Waco TX | ThermoShield Insulation",
  description: "Home energy audits in Waco and Central Texas with thermal imaging and prioritized recommendations. Flat-rate assessments, BPI-aligned specialists.",
  keywords: [
    "energy audit Waco TX",
    "home energy assessment Central Texas",
    "thermal imaging insulation Waco",
    "ThermoShield Insulation",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Energy Audits Waco TX | ThermoShield Insulation",
    description: "Home energy audits in Waco and Central Texas with thermal imaging and prioritized recommendations. Flat-rate assessments, BPI-aligned specialists.",
    url,
    siteName: "ThermoShield Insulation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Energy Audits Waco TX | ThermoShield Insulation",
    description: "Home energy audits in Waco and Central Texas with thermal imaging and prioritized recommendations. Flat-rate assessments, BPI-aligned specialists.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Energy Audits",
  description: "Home energy audits in Waco and Central Texas with thermal imaging and prioritized recommendations. Flat-rate assessments, BPI-aligned specialists.",
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
  serviceType: "Energy Audits",
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