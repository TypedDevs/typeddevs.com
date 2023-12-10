import ProjectList from './ProjectList.vue'
import { type Meta, type StoryObj } from '@storybook/vue3'

export default {
  component: ProjectList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProjectList>

export const Default: StoryObj<typeof ProjectList> = {
  args: {
    projects: [
      {
        name: 'bashunit',
        logo: '/images/projects/bashunit.svg',
        description:
          'Test your bash scripts in the fastest and simplest way, discover the most modern bash testing framework.',
        xHandle: 'bashunit',
        gitHubHandle: 'TypedDevs/bashunit',
        website: 'https://bashunit.typeddevs.com/',
      },
      {
        name: 'bashunit',
        logo: '/images/projects/bashunit.svg',
        description:
          'Test your bash scripts in the fastest and simplest way, discover the most modern bash testing framework.',
        xHandle: 'bashunit',
        gitHubHandle: 'TypedDevs/bashunit',
        website: 'https://bashunit.typeddevs.com/',
      },
    ],
  },
}
