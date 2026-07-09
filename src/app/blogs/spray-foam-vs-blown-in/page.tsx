'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faSprayCan, faWind, faDollarSign, faShieldHalved, faHouseChimney, faBalanceScale, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Spray foam and blown-in cellulose both have a place in Central Texas homes — but they solve different problems. Foam is outstanding at air sealing and high R-value per inch. Cellulose is cost-effective for adding bulk attic depth. Here is an honest comparison so you can choose with confidence.",
  },
  {
    type: 'cards',
    heading: 'Spray Foam vs Blown-In at a Glance',
    cards: [
      { icon: faSprayCan, title: 'Spray foam strengths', body: 'Air sealing + insulation in one step. Excellent for rim joists, sealed attics, and hard-to-baffle spaces.' },
      { icon: faWind, title: 'Cellulose strengths', body: 'Lower cost per R-value for large attic areas. Settles into gaps and around framing better than many batts.' },
      { icon: faDollarSign, title: 'Budget reality', body: 'Foam usually costs more upfront. Cellulose often wins when you mainly need bulk attic R-value.' },
      { icon: faShieldHalved, title: 'Moisture notes', body: 'Closed-cell foam adds moisture resistance. Open-cell and cellulose need proper roof and ventilation context.' },
      { icon: faHouseChimney, title: 'Best hybrid strategy', body: 'Many Waco homes seal major leaks (or foam critical areas) then blow cellulose for total depth.' },
      { icon: faBalanceScale, title: 'Not a one-size answer', body: 'Roof type, attic access, budget, and comfort goals should drive the choice — not a sales script.' },
      { icon: faCheckCircle, title: 'Flat-rate quotes help', body: 'ThermoShield prices both options clearly so you can compare apples to apples on your home.' },
    ],
  },
  {
    type: 'table',
    heading: 'Which Should You Choose?',
    tableHeaders: ['Goal', 'Lean Foam', 'Lean Cellulose'],
    tableRows: [
      ['Air sealing priority', 'Yes — foam excels', 'Pair with dedicated air sealing'],
      ['Large attic, budget-sensitive', 'Maybe hybrid only', 'Yes — bulk R-value'],
      ['Rim joists / crawl details', 'Yes', 'Less ideal alone'],
      ['Existing dry insulation top-up', 'Sometimes overkill', 'Often perfect'],
      ['Highest R per inch', 'Closed-cell foam', 'Needs more depth'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Do not buy foam because it sounds premium if a measured cellulose top-up plus air sealing solves your comfort problem for less. Call (254) 850-5050 for an honest comparison on your attic.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'List your goals: bills, hot rooms, dust, or new construction performance',
      'Measure existing attic depth and note bare spots',
      'Ask for side-by-side flat-rate options when both materials fit',
      'Prioritize air sealing either way',
      'Choose BPI-aligned installers who explain trade-offs clearly',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Spray Foam vs Blown-In Insulation: Which Is Right for Your Waco Home?"
        description="Closed-cell, open-cell, or blown-in cellulose? An honest comparison of cost, R-value, air sealing, and best use cases for Central Texas attics and walls."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="Spray foam vs blown-in insulation comparison for Waco TX"
        category="Comparison"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Not Sure Foam or Cellulose?"
        body="Get a flat-rate comparison from ThermoShield Insulation — no pressure, just building science."
        buttonText="Compare Options"
        buttonHref="/services/spray-foam"
      />
      <NewsletterSignup variant={1} spot="spray-foam-vs-blown-in-blog" />
    </>
  );
}
