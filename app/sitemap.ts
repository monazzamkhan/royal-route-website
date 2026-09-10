import { MetadataRoute } from 'next'
import { packages } from '@/lib/packages'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://royal-route-travels.vercel.app'

  const packageUrls = packages.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...packageUrls,
  ]
}
