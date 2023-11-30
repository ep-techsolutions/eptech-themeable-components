import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../src/components/AlertDialog'

const meta = {
  title: 'Alert Dialog',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Trigger</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>Dialog Header</AlertDialogHeader>
        <AlertDialogTitle>Dialog Title</AlertDialogTitle>
        <AlertDialogDescription>Dialog Description</AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Action</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
