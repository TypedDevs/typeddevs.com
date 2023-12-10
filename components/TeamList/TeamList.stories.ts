import TeamList from './TeamList.vue'
import { type Meta, type StoryObj } from '@storybook/vue3'

export default {
  component: TeamList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TeamList>

export const Default: StoryObj<typeof TeamList> = {
  args: {
    team: [
      {
        name: 'Octocat',
        image: 'images/team/emmanuel-valverde-ramos.jpg',
        linkedInHandle: '404',
        xHandle: 'github',
        gitHubHandle: 'octocat',
        website: 'https://typeddevs.com/',
      },
      {
        name: 'Octocat',
        image: 'images/team/emmanuel-valverde-ramos.jpg',
        linkedInHandle: '404',
        xHandle: 'github',
        gitHubHandle: 'octocat',
        website: 'https://typeddevs.com/',
      },
    ],
  },
}
