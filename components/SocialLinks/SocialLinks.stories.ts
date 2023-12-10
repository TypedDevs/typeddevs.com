import SocialLinks from './SocialLinks.vue'
import { type Meta, type StoryObj } from '@storybook/vue3'

export default {
  component: SocialLinks,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SocialLinks>

export const AllEnabled: StoryObj<typeof SocialLinks> = {
  args: {
    linkedInUserHandle: '404',
    xHandle: 'github',
    gitHubHandle: 'octocat',
    website: 'https://typeddevs.com/',
  },
}

export const OnlyLinkedIn: StoryObj<typeof SocialLinks> = {
  args: {
    linkedInUserHandle: '404',
  },
}

export const OnlyX: StoryObj<typeof SocialLinks> = {
  args: {
    xHandle: 'github',
  },
}

export const OnlyGitHub: StoryObj<typeof SocialLinks> = {
  args: {
    gitHubHandle: 'octocat',
  },
}

export const OnlyWebsite: StoryObj<typeof SocialLinks> = {
  args: {
    website: 'https://typeddevs.com/',
  },
}
