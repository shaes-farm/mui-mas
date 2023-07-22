import type { Meta, StoryObj } from '@storybook/react';

import {SubTitle} from '../components/Title';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SubTitle> = {
  title: 'Mui-Mas/SubTitle',
  component: SubTitle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SubTitle>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Default SubTitle',
  },
};

export const ASubTitle: Story = {
  args: {
    variant: 'h5',
    align: 'right',
    children: 'H5 SubTitle',
  },
};
