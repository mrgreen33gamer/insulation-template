import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thermoshieldinsulation.com";
const url = `${BASE_URL}/industries/homebuilders`;

export const metadata: Metadata = {
  title: "Insulation for Homebuilders | ThermoShield Waco TX",
  description:
    "Production-ready insulation packages for Central Texas homebuilders — attic, spray foam, cellulose, air sealing. Plan pricing, consistent crews, post-close support.",
  alternates: { canonical: url },
  openGraph: {
    title: "Insulation for Homebuilders | ThermoShield Insulation",
    description: "Plan packages, consistent crews, and post-close support for builders across Waco and Central Texas.",
    url,
    siteName: "ThermoShield Insulation",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
