'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faTemperatureHigh, faDollarSign, faWind, faHouseChimney, faSnowflake, faExclamationTriangle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "A new thermostat will not fix missing attic insulation. If your home has uneven rooms, high bills, or a cold-floor winter / hot-ceiling summer pattern, insulation and air sealing are often the real culprits. Use these seven signs to decide whether it is time for more coverage in your Waco home.",
  },
  {
    type: 'cards',
    heading: '7 Signs You Need More Insulation',
    cards: [
      { icon: faTemperatureHigh, title: '1. Hot upstairs every afternoon', body: 'Second floors that bake while the thermostat is already low often point to thin attic insulation or major air leaks.' },
      { icon: faDollarSign, title: '2. Energy bills keep climbing', body: 'If equipment is healthy but bills rise each summer, heat gain through the attic is a prime suspect.' },
      { icon: faWind, title: '3. Drafts and dusty attic smells', body: 'Attic air mixing into living spaces is an air sealing problem that insulation alone will not fully fix.' },
      { icon: faHouseChimney, title: '4. You can see joists from the hatch', body: 'Visible joist tops across the attic usually mean you are below modern R-value targets for Texas.' },
      { icon: faSnowflake, title: '5. Ice-cold floors or rooms in winter', body: 'Under-insulated floors, walls, or attics create rooms that never feel right no matter the thermostat setting.' },
      { icon: faExclamationTriangle, title: '6. HVAC short-cycles or never stops', body: 'Systems fighting envelope problems run longer and wear out faster.' },
      { icon: faCheckCircle, title: '7. Old insulation is compressed or patchy', body: 'Settled, pest-damaged, or incomplete coverage performs far below its original rating.' },
    ],
  },
  {
    type: 'table',
    heading: 'Symptom → Likely Fix',
    tableHeaders: ['Symptom', 'Likely Priority', 'Common Service'],
    tableRows: [
      ['Hot upstairs', 'Attic R-value + sealing', 'Attic insulation / air sealing'],
      ['High summer bills', 'Envelope first', 'Energy audit then attic'],
      ['Dusty attic air indoors', 'Air sealing', 'Air sealing package'],
      ['Drafty exterior rooms', 'Walls + windows context', 'Wall insulation assessment'],
      ['New addition feels different', 'Match assemblies', 'Spray foam or cellulose'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Fix air leaks and attic R-value before replacing a working HVAC system. Call ThermoShield at (254) 850-5050 for a flat-rate assessment — Comfort & Efficiency Guarantee · 5-Year Workmanship.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Check attic depth and bare spots from a safe hatch position',
      'Note which rooms are always uncomfortable',
      'Compare summer bills year over year',
      'Book an energy audit if priorities are unclear',
      'Get a written flat-rate quote before any install',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="7 Signs You Need More Insulation (Not Just a New Thermostat)"
        description="High energy bills, hot rooms, and icy ducts can mean your insulation is failing. Here is how to tell when it is time for more coverage in Central Texas homes."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Signs you need more insulation in Central Texas"
        category="Home Comfort"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Recognize These Signs?"
        body="ThermoShield Insulation can assess your attic, walls, and air leaks with flat-rate pricing and BPI-aligned installers."
        buttonText="Book an Assessment"
        buttonHref="/services/energy-audits"
      />
      <NewsletterSignup variant={1} spot="signs-you-need-more-insulation-blog" />
    </>
  );
}
