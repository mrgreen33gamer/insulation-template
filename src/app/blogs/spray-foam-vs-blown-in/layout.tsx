import type { Metadata } from 'next';
import { getPostBySlug } from '&/blog-posts';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.thermoshieldinsulation.com';
const slug = 'spray-foam-vs-blown-in';
const post = getPostBySlug(slug)!;
const url = `${BASE_URL}/blogs/${slug}`;
const imgUrl = `${BASE_URL}${post.imageSrc}`;

export const metadata: Metadata = {
  title: `${post.title} | ThermoShield Insulation`,
  description: post.excerpt,
  keywords: ['spray foam vs cellulose', 'blown-in insulation Waco', 'open cell closed cell Texas', 'attic insulation comparison'],
  alternates: { canonical: url },
  openGraph: {
    title: post.title,
    description: post.excerpt,
    url,
    siteName: 'ThermoShield Insulation',
    images: [{ url: imgUrl, width: 1200, height: 630, alt: post.imageAlt }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: post.title,
    description: post.excerpt,
    images: [imgUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
