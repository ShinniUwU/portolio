import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lunarlabs.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://shell.lunarlabs.dev',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.8,
    }
  ]
}