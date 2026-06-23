import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://studiosatuakun.id';

  // Core Pages
  const staticRoutes = [
    '',
    '/about',
    '/process',
    '/portfolio',
    '/services',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Landing / Ads Pages
  const landingPages = [
    '/umkm',
    '/ai-automation',
    '/software-custom',
    '/software',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...landingPages];
}
