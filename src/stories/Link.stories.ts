import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '../components/Link';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Link> = {
  title: 'Mui-Mas/Link',
  component: Link,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Link>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    href: 'https://example.com/',
    children: 'Hyper-Link',
  },
};

export const NoUnderline: Story = {
  args: {
    href: 'https://example.com/',
    underline: 'none',
    children: 'No Underline Hyper-Link',
  },
};
