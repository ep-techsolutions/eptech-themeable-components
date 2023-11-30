import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarFallback, AvatarImage } from '../src/components/Avatar'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Avatar',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const AvatarDemo = () => {
  return (
    <Avatar>
      <AvatarImage src='https://avatars.githubusercontent.com/u/3962601?v=4' />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  )
}
