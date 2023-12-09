import BaseLayout from '@/layouts/BaseLayout/BaseLayout.vue'
import '@/styles/index.scss'

/** @type {import('vitepress').Theme} */
const Theme = {
  Layout: BaseLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
}

export default Theme
