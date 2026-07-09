import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thermoshieldinsulation.com";
const url = `${BASE_URL}/industries/commercial-buildings`;

export const metadata: Metadata = {
  title: "Commercial Building Insulation | ThermoShield Waco TX",
  description:
    "Commercial insulation for offices, warehouses, and light industrial in Waco and Central Texas. Spray foam, cellulose, air sealing — GC-friendly scheduling.",
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Building Insulation | ThermoShield Insulation",
    description: "GC-friendly commercial insulation packages across Central Texas.",
    url,
    siteName: "ThermoShield Insulation",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
