// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'attic-insulation-r-value-texas',
    title:    'Attic Insulation R-Value for Texas Homes: What Waco Homeowners Need',
    excerpt:  'Texas heat demands higher attic R-values than many homes still have. Learn recommended R-values for Central Texas, signs of under-insulation, and when to top up or replace.',
    category: 'Education',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/home/welcome/after.jpg',
    imageAlt: 'Attic insulation R-value guide for Waco TX homeowners',
    featured: true,
  },
  {
    slug:     'spray-foam-vs-blown-in',
    title:    'Spray Foam vs Blown-In Insulation: Which Is Right for Your Waco Home?',
    excerpt:  'Closed-cell, open-cell, or blown-in cellulose? An honest comparison of cost, R-value, air sealing, and best use cases for Central Texas attics and walls.',
    category: 'Comparison',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/home/services/service-1.jpg',
    imageAlt: 'Spray foam vs blown-in insulation comparison for Waco TX',
  },
  {
    slug:     'signs-you-need-more-insulation',
    title:    '7 Signs You Need More Insulation (Not Just a New Thermostat)',
    excerpt:  'High energy bills, hot rooms, and icy ducts can mean your insulation is failing. Here is how to tell when it is time for more coverage in Central Texas homes.',
    category: 'Home Comfort',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/home/welcome/hero-main.jpg',
    imageAlt: 'Signs you need more insulation in Central Texas',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
