import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thermoshieldinsulation.com";

export const metadata: Metadata = {
  title: "Insulation Services Waco TX | Attic, Spray Foam & More",
  description:
    "ThermoShield Insulation offers attic insulation, spray foam, blown-in cellulose, wall insulation, air sealing, and energy audits for Waco and Central Texas. BPI-aligned, Comfort & Efficiency Guarantee · 5-Year Workmanship.",
  keywords: [
    "insulation services Waco TX",
    "attic insulation Central Texas",
    "spray foam Waco",
    "blown-in cellulose Waco TX",
    "air sealing Waco",
    "ThermoShield Insulation",
  ],
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: "Insulation Services Waco TX | ThermoShield Insulation",
    description:
      "Attic, spray foam, cellulose, walls, air sealing, and energy audits for Waco and Central Texas. BPI-aligned, Comfort & Efficiency Guarantee · 5-Year Workmanship.",
    url: `${BASE_URL}/services`,
    siteName: "ThermoShield Insulation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insulation Services Waco TX | ThermoShield Insulation",
    description: "Attic, spray foam, cellulose, walls, air sealing & energy audits. BPI-aligned.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
