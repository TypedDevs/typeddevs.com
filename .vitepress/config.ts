import { defineConfig } from 'vitepress'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Site Metadata
  title: 'TypedDevs',
  description: 'Main website of TypedDevs, meet those behind it and their projects.',
  lang: 'en',
  head: [
    [
      'link',
      { rel: 'icon', href: '/favicon.ico' },
    ],
    [
      'meta',
      { property: 'og:type', content: 'website' },
    ],
    [
      'meta',
      { property: 'og:image', content: '/images/og-image.png' },
    ],
  ],
  transformHead(context) {
    const canonical = context.page.replace(/(index)?\.md$/, '')

    return [
      [
        'meta',
        { property: 'og:title', content: context.title },
      ],
      [
        'meta',
        { property: 'og:url', content: `https://typeddevs.com/${canonical}` },
      ],
      [
        'link',
        { rel: 'canonical', href: `https://typeddevs.com/${canonical}` },
      ],
    ]
  },

  // Routing
  cleanUrls: true,

  // Build
  srcDir: 'pages',
  sitemap: {
    hostname: 'https://typeddevs.com',
  },

  // Vite
  vite: {
    publicDir: '../public',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '..'),
      },
    },
  },
})
