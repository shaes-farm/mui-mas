import type { Meta, StoryObj } from '@storybook/react';

import { SnackBarAlert } from '../components/SnackBarAlert';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SnackBarAlert> = {
  title: 'Mui-Mas/SnackBarAlert',
  component: SnackBarAlert,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SnackBarAlert>;

// eslint-disable-next-line @typescript-eslint/no-empty-function
const clear = () => {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    message: 'Default SnackBarAlert',
    clear,
  },
};

export const Info: Story = {
  args: {
    severity: 'info',
    message: 'Info SnackBarAlert',
    clear,
  },
};

export const Success: Story = {
  args: {
    severity: 'success',
    message: 'Success SnackBarAlert',
    clear,
  },
};

export const Warning: Story = {
  args: {
    severity: 'warning',
    message: 'Warning SnackBarAlert',
    clear,
  },
};

export const Error: Story = {
  args: {
    severity: 'error',
    message: 'Error SnackBarAlert',
    clear,
  },
};
