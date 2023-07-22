import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from '../components/Alert';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Alert> = {
  title: 'Mui-Mas/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Default Alert',
  },
};

export const Info: Story = {
  args: {
    severity: 'info',
    children: 'Info Alert',
  },
};

export const Success: Story = {
  args: {
    severity: 'success',
    children: 'Success Alert',
  },
};

export const Warning: Story = {
  args: {
    severity: 'warning',
    children: 'Warning Alert',
  },
};

export const Error: Story = {
  args: {
    severity: 'error',
    children: 'Error Alert',
  },
};

export const Square: Story = {
  args: {
    square: true,
    children: 'Square Alert',
  },
};

export const Flat: Story = {
  args: {
    elevation: 0,
    children: 'Flat Alert',
  },
};
