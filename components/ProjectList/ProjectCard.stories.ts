import ProjectCard from './ProjectCard.vue'
import { type Meta, type StoryObj } from '@storybook/vue3'

export default {
  component: ProjectCard,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="max-width: 18rem;"><story /></div>',
    }),
  ],
} satisfies Meta<typeof ProjectCard>

export const Default: StoryObj<typeof ProjectCard> = {
  args: {
    project: {
      name: 'bashunit',
      logo: '/images/projects/bashunit.svg',
      description:
        'Test your bash scripts in the fastest and simplest way, discover the most modern bash testing framework.',
      xHandle: 'bashunit',
      gitHubHandle: 'TypedDevs/bashunit',
      website: 'https://bashunit.typeddevs.com/',
    },
  },
}
