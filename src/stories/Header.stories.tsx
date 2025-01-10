import type { Meta, StoryObj } from '@storybook/react';
import { Primary as mobileNavStory } from './MobileNav.stories';

import Header from '../components/Header';
import SectionContainer from '../components/SectionContainer';

const meta = {
  title: 'Organisms/Header',
  component: Header,
  decorators: [
    (storyFn) => {
      return <SectionContainer>{storyFn()}</SectionContainer>
    }
  ]
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    headerNavLinks: mobileNavStory.args.headerNavLinks,
    headerTitle: 'Test Page',
    email: 'test@gmail.com'
  },
};

