const WP_URL = process.env.NEXT_PUBLIC_WP_URL;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface WpAcf {
  [key: string]: unknown;
}

export interface WpPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content?: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      media_details?: {
        sizes?: {
          large?: { source_url: string };
          full?: { source_url: string };
        };
      };
    }>;
  };
  acf: WpAcf;
}

export interface WpPage extends WpPost {
  link: string;
}

// ---------------------------------------------------------------------------
// Core fetch
// ---------------------------------------------------------------------------

async function wpFetch<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${WP_URL}/wp-json/wp/v2/${endpoint}`, {
    next: { revalidate: 5 }, // ISR – stale content refreshes every 5 s
  });

  if (!res.ok) {
    throw new Error(`WP fetch failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// ---------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------

export const getPage = (slug: string) =>
  wpFetch<WpPage[]>(`pages?slug=${slug}&_embed`).then((pages) => pages[0] ?? null);

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export const getServices = () => wpFetch<WpPost[]>("services");

export const getService = (slug: string) =>
  wpFetch<WpPost[]>(`services?slug=${slug}&_embed`).then((posts) => posts[0] ?? null);

// ---------------------------------------------------------------------------
// Locations
// ---------------------------------------------------------------------------

export const getLocations = () => wpFetch<WpPost[]>("locations");

export const getLocation = (slug: string) =>
  wpFetch<WpPost[]>(`locations?slug=${slug}&_embed`).then(
    (posts) => posts[0] ?? null
  );

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export const getTestimonials = () => wpFetch<WpPost[]>("testimonials");

// ---------------------------------------------------------------------------
// Team members
// ---------------------------------------------------------------------------

export const getTeamMembers = () => wpFetch<WpPost[]>("team-members");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getFeaturedImageUrl(post: WpPost | null): string | null {
  return (
    post?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.large?.source_url ??
    post?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.full?.source_url ??
    null
  );
}
