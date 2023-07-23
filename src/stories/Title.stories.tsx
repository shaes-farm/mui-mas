import type { Meta, StoryObj } from '@storybook/react';

import {Title} from '../components/Title';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Title> = {
  title: 'Mui-Mas/Title',
  component: Title,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Title>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Default Title',
  },
};

export const ATitle: Story = {
  args: {
    variant: 'h4',
    align: 'center',
    children: 'H4 Title',
  },
};
