import type { Meta, StoryObj } from '@storybook/react';

import { ProfileButton } from '../components/ProfileButton';
import type {NavRoute, NavRouter} from '../components/Nav';
import type {Profile} from '../providers/Profile';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProfileButton> = {
  title: 'Mui-Mas/ProfileButton',
  component: ProfileButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProfileButton>;

const profile: Profile = {
  id: '123',
  firstName: 'Bob',
  lastName: 'Smith',
  loading: false,
};

const routes: NavRoute[] = [{
  slug: 'item-1',
  icon: 'icon-1',
  label: 'Item 1',
  page: '/page-1',
},{
  slug: 'item-2',
  icon: 'icon-2',
  label: 'Item 2',
  page: '/page-2',
},{
  slug: 'item-3',
  icon: 'icon-3',
  label: 'Item 3',
  page: '/page-3',
}];

const router: NavRouter = (route: NavRoute) => console.log({route});

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    profile,
    routes,
    router,
  },
};

export const ImageButton: Story = {
  args: {
    profile: {
      ...profile,
      avatarUrl: 'https://i.pravatar.cc/32'
    },
    routes,
    router,
  }
};
