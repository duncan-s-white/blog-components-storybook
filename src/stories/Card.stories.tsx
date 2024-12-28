import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import Card from '../components/Card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    imgSrc: { 
      options: ['/static/images/react_next.png', '/static/images/about_2.png'],
      control: { type: 'radio'} },
  }
  // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'My Interesting Card',
    description: 'A very interesting description of my card. A very interesting description of my card. ',
    imgSrc: '/static/images/react_next.png',
    mainHref: 'https://nextjs.org/',
    links: [{
      href: 'https://nextjs.org/',
      text: 'Next.js'
    }]
  },
};

export const MultipleLinks: Story = {
  args: {
    title: 'Multiple Links Card',
    description: 'This car has multiple links, and a very interesting description of my card',
    imgSrc: '/static/images/react_next.png',
    mainHref: 'https://nextjs.org/',
    links: [{
      href: 'https://nextjs.org/',
      text: 'Next.js'
    }, {
      href: 'https://google.co.uk/',
      text: 'Google'
    }, {
      href: 'https://bbc.co.uk/',
      text: 'BBC'
    }]
  },
};

export const WithoutLink: Story = {
  args: {
    title: 'No Links Card',
    description: 'This card has no links, inlcuding the main image and title, and a very interesting description of my card',
    imgSrc: '/static/images/react_next.png',
  },
};

