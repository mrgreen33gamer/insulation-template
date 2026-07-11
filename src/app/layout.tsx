// src/app/layout.tsx
// ThermoShield Insulation — root layout (insulation trade template)
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#0d1b2a' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//                                Two values supplied so Safari can pick the
//                                right one for light vs dark mode.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Oxanium, Sora, Inter } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS — uniqueness
const fontTitle = Oxanium({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Sora({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});


const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.thermoshieldinsulation.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
// Next.js 14+ moved viewport / themeColor / colorScheme out of `metadata` and
// into a separate `viewport` export. The `viewportFit: 'cover'` is the single
// most important line in this file for the notch / home-indicator fix.
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  // Two themeColor entries so iOS Safari can pick the right one when the user
  // toggles light/dark mode. Both are obsidian dark to match the brand bg
  // applied to <body> in globals.css. Adjust if you want a lighter Safari
  // chrome tint for light-mode users.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#172554" },
    { media: "(prefers-color-scheme: dark)",  color: "#172554" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ThermoShield Insulation | Attic, Wall & Spray Foam — Waco, TX",
    template: "%s | ThermoShield Insulation",
  },
  description:
    "ThermoShield Insulation is a Waco, TX insulation company offering attic insulation, spray foam, blown-in cellulose, wall insulation, air sealing, and energy audits for Central Texas homes and businesses. BPI-aligned, bonded & insured.",
  keywords: [
    "ThermoShield Insulation",
    "attic insulation Waco TX",
    "spray foam Waco Texas",
    "blown-in cellulose Waco",
    "wall insulation Central Texas",
    "air sealing Waco TX",
    "insulation company Hewitt TX",
    "energy audit Waco",
    "insulation contractor Waco",
  ],
  authors: [{ name: "ThermoShield Insulation", url: BASE_URL }],
  creator: "ThermoShield Insulation",
  publisher: "ThermoShield Insulation",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "ThermoShield Insulation | Attic, Wall & Spray Foam — Waco, TX",
    description:
      "Waco-based insulation company for attic, spray foam, cellulose, wall insulation, air sealing, and energy audits across Central Texas. BPI-aligned & insured. Comfort & Efficiency Guarantee.",
    url: BASE_URL,
    siteName: "ThermoShield Insulation",
    images: [
      {
        url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`,
        width: 1200,
        height: 630,
        alt: "ThermoShield Insulation — Waco TX Attic, Wall & Spray Foam",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThermoShield Insulation | Waco TX Insulation Pros",
    description:
      "Attic insulation, spray foam, cellulose, wall insulation & air sealing for Central Texas. BPI-aligned & insured — Comfort & Efficiency Guarantee.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "5.0";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "ThermoShield Insulation",
  alternateName: "ThermoShield Insulation Waco",
  description:
    "Residential and commercial insulation services in Waco and Central Texas — attic insulation, spray foam, blown-in cellulose, wall insulation, air sealing, and energy audits. BPI-aligned installers, bonded & insured, Comfort & Efficiency Guarantee · 5-Year Workmanship.",
  url: BASE_URL,
  telephone: "+12548505050",
  email: "hello@thermoshieldinsulation.com",
  foundingDate: "2012",
  founder: {
    "@type": "Person",
    name: "Brooke Lang",
    jobTitle: "Owner & Lead Insulation Specialist",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "2201 S Valley Mills Dr",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76706",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Insulation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Attic Insulation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spray Foam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Blown-In Cellulose" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wall Insulation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Sealing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Energy Audits" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/thermoshieldinsulation",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* ConditionalShell shows Header/Footer only on non-admin pages */}
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#38bdf8" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#172554",
                }}
              >
                <PulseLoader size={50} color="#38bdf8" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        {/* Footer only on non-admin pages */}
        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}
