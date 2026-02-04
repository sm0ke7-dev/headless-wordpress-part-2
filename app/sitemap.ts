import { MetadataRoute } from 'next';
import { getServices, getLocations } from '../lib/wp';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  // Fetch dynamic routes
  const [services, locations] = await Promise.all([
    getServices(),
    getLocations(),
  ]);

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Dynamic service pages
  const servicePages = services.map((service: any) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(service.modified),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic location pages
  const locationPages = locations.map((location: any) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date(location.modified),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
