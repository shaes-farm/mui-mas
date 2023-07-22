import type { Meta, StoryObj } from '@storybook/react';

import {Notifications} from '../components/Notifications';
import type {NavRoute, NavRouter} from '../components/Nav';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Notifications> = {
  title: 'Mui-Mas/Notifications',
  component: Notifications,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Notifications>;

const route: NavRoute = {
  slug: 'foo',
  icon: 'icon',
  label: 'New Notifications Received',
  page: 'page',
};

const router: NavRouter = (route: NavRoute) => console.log({route});

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NewItems: Story = {
  args: {
    count: 3,
    route,
    router,
  },
};

export const NoNewItems: Story = {
  args: {
    count: 0,
    route,
    router,
  }
};