import type { Meta, StoryObj } from '@storybook/react';

import Paragraph from '../components/Paragraph';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velit libero, vestibulum quis fermentum quis, scelerisque et leo. Aliquam at est ligula. Sed ultrices vel tellus eget luctus. Morbi eu molestie est, id consequat nisi. Nulla maximus fermentum dui vel mollis. '
  }
  };
