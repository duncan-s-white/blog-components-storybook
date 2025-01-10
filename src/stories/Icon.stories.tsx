import type { Meta, StoryObj } from '@storybook/react';

import Icon from '../components/icons';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Copy: Story = {
  args: {
    kind: 'copy',
  },
};

export const Copied: Story = {
  args: {
    kind: 'copied',
  },
};

export const CopiedSmall: Story = {
  args: {
    kind: 'copied',
    size: 6,
  },
};

export const CopiedLarge: Story = {
  args: {
    kind: 'copied',
    size: 32,
  },
};

