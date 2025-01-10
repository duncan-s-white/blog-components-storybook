import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
// import { ThemeProvider } from "next-themes"

import ThemeSwitch from '../components/ThemeSwitch';

const meta = {
  title: 'Molecules/ThemeSwitch',
  component: ThemeSwitch,
  parameters: {
    layout: 'centered',
  },
  // globals: { theme: 'light' },
  // tags: ['autodocs'],
  // decorators: [
  //   (storyFn) => {
  //     return <ThemeProvider attribute="class" defaultTheme='light'>{storyFn()}</ThemeProvider>
  //   }
  // ]
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};

