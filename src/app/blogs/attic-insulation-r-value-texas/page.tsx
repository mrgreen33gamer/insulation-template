'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faTemperatureHigh, faRulerCombined, faBolt, faHouseChimney, faChartLine, faShieldHalved, faClock } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Central Texas summers punish under-insulated attics. If your upstairs is always hotter, your AC never rests, or your attic floor looks patchy from the hatch, R-value is likely the issue. Here is what Waco homeowners need to know about attic insulation levels — without the sales jargon.",
  },
  {
    type: 'cards',
    heading: 'R-Value Essentials for Texas Homes',
    cards: [
      { icon: faTemperatureHigh, title: 'Heat rises — and so do bills', body: 'Inadequate attic insulation lets cool air escape and hot attic air radiate into living spaces. Your AC works harder every peak afternoon.' },
      { icon: faRulerCombined, title: 'Depth is not the whole story', body: 'R-value depends on material type and settled density. A fluffy inch of one product is not equal to an inch of another.' },
      { icon: faBolt, title: 'Common target ranges', body: 'Many Central Texas attics benefit from roughly R-38 to R-60 depending on goals, roof type, and existing conditions.' },
      { icon: faHouseChimney, title: 'Top-up vs full replace', body: 'If existing insulation is dry and even, a measured top-up often works. Wet, pest-damaged, or contaminated material may need removal first.' },
      { icon: faChartLine, title: 'Air sealing multiplies results', body: 'Adding insulation over big air leaks wastes money. Seal can lights, chases, and top plates before or with the install.' },
      { icon: faShieldHalved, title: 'Baffles and ventilation still matter', body: 'Insulation should not block soffit airflow. Proper baffles protect roof health while you raise R-value.' },
      { icon: faClock, title: 'Same-week help is available', body: 'ThermoShield prioritizes attic assessments across Waco, Hewitt, Woodway, Temple, and Killeen.' },
    ],
  },
  {
    type: 'table',
    heading: 'Quick Attic Check List',
    tableHeaders: ['Check', 'What You Want', 'Red Flag'],
    tableRows: [
      ['Depth at joists', 'Insulation above joist tops evenly', 'Joists clearly visible across the attic'],
      ['Coverage', 'Even layer wall-to-wall', 'Bare spots near eaves or hatch'],
      ['Moisture', 'Dry material, no stains', 'Damp, moldy, or compressed clumps'],
      ['Air leaks', 'Sealed penetrations', 'Daylight or drafts at can lights/chases'],
      ['Access hatch', 'Insulated and weatherstripped', 'Bare hatch dumping attic air into the house'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: If joists are fully visible from the hatch, you are almost certainly under-insulated for Texas heat. Call (254) 850-5050 for a flat-rate attic assessment — Comfort & Efficiency Guarantee · 5-Year Workmanship on installs.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Measure existing depth in several attic spots',
      'Note bare areas near eaves, bathrooms, and HVAC chases',
      'Seal major air leaks before or with new insulation',
      'Ask for a written target R-value and flat-rate quote',
      'Choose BPI-aligned installers who clean up after the job',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Attic Insulation R-Value for Texas Homes: What Waco Homeowners Need"
        description="Texas heat demands higher attic R-values than many homes still have. Learn recommended ranges for Central Texas, signs of under-insulation, and when to top up or replace."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="Attic insulation R-value guide for Waco TX homeowners"
        category="Education"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Hot Attic? High Cooling Bills?"
        body="Get a flat-rate attic assessment from ThermoShield Insulation — BPI-aligned installers with a Comfort & Efficiency Guarantee."
        buttonText="Schedule Attic Service"
        buttonHref="/services/attic-insulation"
      />
      <NewsletterSignup variant={1} spot="attic-insulation-r-value-texas-blog" />
    </>
  );
}
