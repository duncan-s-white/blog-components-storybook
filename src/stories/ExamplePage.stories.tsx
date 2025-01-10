import type { Meta, StoryObj } from '@storybook/react';

import ExamplePage from '../components/ExamplePage';

const meta = {
  title: 'Organisms/Page',
  component: ExamplePage,
} satisfies Meta<typeof ExamplePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};

