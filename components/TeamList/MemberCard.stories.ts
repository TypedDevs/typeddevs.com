import MemberCard from './MemberCard.vue'
import { type Meta, type StoryObj } from '@storybook/vue3'

export default {
  component: MemberCard,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="max-width: 15rem;"><story /></div>',
    }),
  ],
} satisfies Meta<typeof MemberCard>

export const Default: StoryObj<typeof MemberCard> = {
  args: {
    member: {
      name: 'Octocat',
      image: 'images/team/emmanuel-valverde-ramos.jpg',
      linkedInHandle: '404',
      xHandle: 'github',
      gitHubHandle: 'octocat',
      website: 'https://typeddevs.com/',
    },
  },
}
