import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thermoshieldinsulation.com";
const url = `${BASE_URL}/industries/property-management`;

export const metadata: Metadata = {
  title: "Insulation for Property Management | ThermoShield Waco TX",
  description:
    "Turnover-ready insulation for multi-family and rental portfolios in Waco and Central Texas. Flat-rate packages, BPI-aligned installers, fast scheduling.",
  alternates: { canonical: url },
  openGraph: {
    title: "Insulation for Property Management | ThermoShield Insulation",
    description: "Flat-rate unit packages and fast make-ready insulation for Central Texas property managers.",
    url,
    siteName: "ThermoShield Insulation",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
