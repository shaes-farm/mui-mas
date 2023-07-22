import type { Meta, StoryObj } from '@storybook/react';

import {Heading} from '../components/Title';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Heading> = {
  title: 'Mui-Mas/Heading',
  component: Heading,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Heading>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Default Heading',
  },
};

export const AHeading: Story = {
  args: {
    variant: 'h6',
    align: 'left',
    children: 'H6 Heading',
  },
};
