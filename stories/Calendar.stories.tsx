import type { Meta, StoryObj } from '@storybook/react'
import { subDays, addDays } from 'date-fns'

import { Calendar } from '../src/components/Calendar'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Calendar',
  component: Calendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Single: Story = {
  args: {
    mode: 'single',
    selected: new Date(),
    className: 'rounded-lg',
  },
}

export const Multiple: Story = {
  args: {
    mode: 'multiple',
    selected: [new Date(), subDays(new Date(), 4)],
    className: 'rounded-lg',
  },
}

export const Range: Story = {
  args: {
    mode: 'range',
    selected: { from: subDays(new Date(), 4), to: new Date() },
    className: 'rounded-lg',
  },
}
