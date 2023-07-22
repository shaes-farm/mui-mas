import type { Meta, StoryObj } from '@storybook/react';

import { Nav } from '../components/Nav';
import type {NavRoute, NavRoutes, NavRouter} from '../components/Nav';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Nav> = {
  title: 'Mui-Mas/Nav',
  component: Nav,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Nav>;

const routes: NavRoutes = {
  primary: [{
    slug: 'primary-item-1',
    icon: 'icon',
    label: 'Item 1',
    page: '/page-1',
  }],
  secondary: [{
    slug: 'secondary-item-1',
    icon: 'icon',
    label: 'Item 1',
    page: '/page-2',
  }],
  tertiary: [{
    slug: 'tertiary-item-1',
    icon: 'icon',
    label: 'Item 1',
    page: '/page-3',
  }],
};

const router: NavRouter = (route: NavRoute) => console.log({route});

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    routes,
    router,
  },
};

export const Dense: Story = {
  args: {
    routes,
    router,
    dense: true,
  },
};