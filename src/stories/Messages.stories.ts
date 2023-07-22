import type { Meta, StoryObj } from '@storybook/react';

import {Messages} from '../components/Messages';
import type {NavRoute, NavRouter} from '../components/Nav';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Messages> = {
  title: 'Mui-Mas/Messages',
  component: Messages,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Messages>;

const route: NavRoute = {
  slug: 'foo',
  icon: 'icon',
  label: 'New Messages Received',
  page: 'page',
};

const router: NavRouter = (route: NavRoute) => console.log({route});

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NewMessages: Story = {
  args: {
    count: 3,
    route,
    router,
  },
};

export const NoNewMessages: Story = {
  args: {
    count: 0,
    route,
    router,
  }
};