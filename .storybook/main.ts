import { StorybookConfig } from '@storybook/vue3-vite'
import path from 'path'

export default {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: [
    path.resolve(__dirname, '../public'),
  ],
  viteFinal(config, options) {
    config.publicDir = path.resolve(__dirname, '../public')

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '..'),
    }

    return config
  },
} satisfies StorybookConfig
