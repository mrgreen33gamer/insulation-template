import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.thermoshieldinsulation.com';

export const metadata: Metadata = {
  title: 'Contact ThermoShield Insulation | Schedule Service in Waco & Central Texas',
  description:
    'Contact ThermoShield Insulation to schedule attic insulation, spray foam, air sealing, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 850-5050.',
  keywords: [
    'contact ThermoShield Insulation',
    'insulation quote Waco TX',
    'schedule insulation Waco',
    'ThermoShield contact',
    '254-850-5050',
  ],
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: 'Contact ThermoShield Insulation | Schedule Service in Waco & Central Texas',
    description:
      'Schedule attic insulation, spray foam, air sealing, or a free estimate in Waco and Central Texas. Call (254) 850-5050.',
    url: `${BASE_URL}/contact`,
    siteName: 'ThermoShield Insulation',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ThermoShield Insulation | Waco & Central Texas',
    description: 'Schedule insulation service or a free estimate. Call (254) 850-5050.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
