// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for ThermoShield Insulation — used by Testimonials,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Attic Insulation',
    text:     "Our upstairs stayed 10 degrees hotter than the rest of the house all summer. ThermoShield added blown-in cellulose, sealed the attic hatch, and the difference was immediate. Flat-rate quote, clean crew, 5-year workmanship. Highly recommend.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Spray Foam',
    text:     'Had open-cell spray foam done in our new addition. Brooke\'s team explained R-value and moisture clearly, protected every surface, and finished on schedule. Energy bills dropped the first month. This is the kind of service you tell your neighbors about.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Energy Audits',
    text:     'Three companies wanted to sell me a full attic tear-out. ThermoShield did an honest energy audit, showed thermal photos, and recommended air sealing plus a cellulose top-up — half the cost of what others quoted. Clean work and zero pressure.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Wall Insulation',
    text:     'Dense-pack cellulose in exterior walls of our 1970s home. The crew was careful with siding and cleaned up thoroughly. Rooms are quieter and more even. Worth every penny.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Commercial Buildings',
    text:     'We hired ThermoShield for spray foam on a warehouse office build-out. They coordinated with our GC, met the inspection schedule, and documented everything. Finished ahead of deadline. Professional from start to finish.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Air Sealing',
    text:     'After years of dusty attic air dumping into the house, ThermoShield sealed penetrations, baffles, and can lights. Comfort improved overnight and the AC cycles less. My go-to insulation company for life.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Blown-In Cellulose',
    text:     'Old fiberglass was compressed and barely covering joists. They removed what needed to go, blown cellulose to the right depth, and left the attic accessible. Fair pricing, no gimmicks.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Attic Insulation',
    text:     'Hot upstairs bedrooms every summer. ThermoShield measured existing R-value, recommended a top-up, and finished in one day. Kids can finally sleep without the fan on high. Thank you.',
  },
];

export default reviews;
