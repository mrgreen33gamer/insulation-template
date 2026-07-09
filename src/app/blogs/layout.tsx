import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.thermoshieldinsulation.com';

export const metadata: Metadata = {
  title: 'Insulation Tips & Insights | ThermoShield Insulation Blog',
  description:
    'Insulation safety tips, spray foam guides, and air sealing advice for Waco and Central Texas homeowners from ThermoShield Insulation.',
  alternates: { canonical: `${BASE_URL}/blogs` },
  openGraph: {
    title: 'Insulation Tips & Insights | ThermoShield Insulation Blog',
    description: 'Practical insulation guidance for Central Texas homeowners.',
    url: `${BASE_URL}/blogs`,
    siteName: 'ThermoShield Insulation',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
