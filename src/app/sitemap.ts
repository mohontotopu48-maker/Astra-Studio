import { MetadataRoute } from 'next'

const baseUrl = 'https://designnuvio.com'

// All hash-routed pages that should be indexed
const routes = [
  { path: '', priority: 1, changeFrequency: 'weekly' as const },
  { path: '#product-design', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '#saas-design', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '#dashboard-design', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '#mobile-app-design', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '#ux-audit', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '#design-systems', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '#about', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '#case-studies', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '#case-triply', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '#case-plate', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '#case-yenex', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '#case-fitmate', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '#case-zantrik', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '#process', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '#careers', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '#contact', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '#saas', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '#fintech', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '#ai', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '#healthcare', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '#blog', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '#faq', priority: 0.5, changeFrequency: 'monthly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return routes.map((route) => ({
    url: `${baseUrl}/${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
