import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thermoshieldinsulation.com";

export const metadata: Metadata = {
  title: "Industries Served | ThermoShield Insulation Waco TX",
  description:
    "Insulation services for homebuilders, property management, and commercial buildings across Waco and Central Texas. BPI-aligned installers, flat-rate packages.",
  alternates: { canonical: `${BASE_URL}/industries` },
  openGraph: {
    title: "Industries Served | ThermoShield Insulation",
    description: "Homebuilders, property management, and commercial buildings across Central Texas.",
    url: `${BASE_URL}/industries`,
    siteName: "ThermoShield Insulation",
    locale: "en_US",
    type: "website",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
