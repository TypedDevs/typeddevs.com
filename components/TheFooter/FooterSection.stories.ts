import FooterSection from './FooterSection.vue'
import { type Meta, type StoryObj } from '@storybook/vue3'

export default {
  component: FooterSection,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FooterSection>

export const Default: StoryObj<typeof FooterSection> = {}
