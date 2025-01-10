import type { Meta, StoryObj } from '@storybook/react';

import SocialIcon from '../components/social-icons';

const meta = {
  title: 'Atoms/SocialIcon',
  component: SocialIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mail: Story = {
  args: {
    kind: 'mail',
    href: 'mailto:somewhere@mail.com'
  },
};

export const Github: Story = {
  args: {
    kind: 'github',
    href: 'https://github.com',
  },
};

export const GithubLarge: Story = {
  args: {
    kind: 'github',
    href: 'https://github.com',
    size: 32,
  },
};

export const Instagram: Story = {
  args: {
    kind: 'instagram',
    href: 'https://instagram.com',
  },
};

export const LinkedIn: Story = {
  args: {
    kind: 'linkedin',
    href: 'https://linkedin.com',
  },
};

