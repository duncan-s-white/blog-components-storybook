import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import Card from '../components/Card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecule/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   children: { control: 'text' },
  // }
  // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'My Card With a Loooong NAme',
    description: 'A very interesting description of my card',
    imgSrc: '/static/images/react_next.png',
    href: 'https://nextjs.org/',
    linkText: 'Next.js'
  },
};

export const WithoutLink: Story = {
  args: {
    title: 'My Card',
    description: 'A very interesting description of my card',
    imgSrc: '/static/images/react_next.png',
  },
};

