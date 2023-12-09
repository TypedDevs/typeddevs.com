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
  ],

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
