import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from '../components/Drawer';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Drawer> = {
  title: 'Mui-Mas/Drawer',
  component: Drawer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Open: Story = {
  args: {
    variant: 'permanent',
    open: true,
    children: 'Drawer',
  },
};

export const Closed: Story = {
  args: {
    ...Open.args,
    open: false,
  }
};
