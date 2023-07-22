import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent } from '@storybook/testing-library';

import {SearchInput} from '../components/SearchInput';
import type {NavRoute, NavRouter} from '../components/Nav';

const meta: Meta<typeof SearchInput> = {
  title: 'Mui-Mas/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

const route: NavRoute = {
  slug: 'foo',
  icon: 'icon',
  label: 'Search for Things!',
  page: 'page',
};

const router: NavRouter = (route: NavRoute) => console.log({route});

export const Search: Story = {
  args: {
    route,
    router,
  }
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
/*
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
*/