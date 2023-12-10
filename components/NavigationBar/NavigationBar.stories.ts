import NavigationBar from './NavigationBar.vue'
import { type Meta, type StoryObj } from '@storybook/vue3'

export default {
  component: NavigationBar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NavigationBar>

export const Default: StoryObj<typeof NavigationBar> = {}
