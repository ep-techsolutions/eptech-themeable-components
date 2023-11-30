import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../src/components/Card'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Card',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo = () => (
  <div style={{ width: '38rem' }}>
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eius, debitis delectus nulla tempore eaque amet
          sapiente sint ullam ab odio odit corrupti voluptate voluptas exercitationem! Totam magni nihil expedita!
        </p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  </div>
)
