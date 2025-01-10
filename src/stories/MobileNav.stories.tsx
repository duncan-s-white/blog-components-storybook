import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import MobileNav from '../components/MobileNav';

const meta = {
  title: 'Molecules/MobileNav',
  component: MobileNav,
  parameters: {
    // 👇 Override default viewport for this story
    viewport: { defaultViewport: 'mobile1' },
  },
  decorators: [
    (storyFn) => <div className="flex justify-end pt-7 pr-4">{storyFn()}</div>
  ]
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof MobileNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    headerNavLinks: [
      { href: '/', title: 'Home' },
      { href: '/blog', title: 'Blog' },
      // { href: '/tags', title: 'Tags' },
      { href: '/projects', title: 'Projects' },
      { href: '/react', title: 'React' },
      { href: '/about', title: 'About' },
    ]
  },
};

