import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.thermoshieldinsulation.com';

export const metadata: Metadata = {
  title: 'Service Areas | ThermoShield Insulation — Waco & Central Texas',
  description:
    'Serving Waco and all of Central Texas with flat-rate attic insulation, spray foam, cellulose, wall insulation, and air sealing. Same-week service available.',
  alternates: { canonical: `${BASE_URL}/service-areas` },
  openGraph: {
    title: 'Service Areas | ThermoShield Insulation',
    description:
      'Serving Waco and all of Central Texas with flat-rate insulation services. Same-week service available.',
    url: `${BASE_URL}/service-areas`,
    siteName: 'ThermoShield Insulation',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
