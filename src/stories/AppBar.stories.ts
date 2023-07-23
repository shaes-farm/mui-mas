import type { Meta, StoryObj } from '@storybook/react';

import {AppBar} from '../components/AppBar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AppBar> = {
  title: 'Mui-Mas/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AppBar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Closed: Story = {
  args: {
    position: 'sticky',
    children: 'App Bar',
    open: false,
  }
};

export const Open: Story = {
  args: {
    ...Closed.args,
    open: true,
  },
};
