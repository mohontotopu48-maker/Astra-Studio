import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Design Nuvio — Premium UI/UX & Brand Design Agency',
    short_name: 'Design Nuvio',
    description:
      'Award-winning design agency specializing in UI/UX design, brand identity, and digital transformation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#592DB5',
    orientation: 'portrait-primary',
    categories: ['business', 'design', 'productivity'],
    icons: [
      {
        src: '/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
