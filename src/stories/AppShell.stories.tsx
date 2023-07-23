import React, {useState} from "react";
import {useParameter} from "@storybook/addons";
import type {Meta, StoryObj} from '@storybook/react';
import {Chance} from 'chance';

import {AppShell} from '../components/App';
import type {NavRoute, NavRoutes} from '../components/Nav';
import {Profile, ProfileProvider} from "../providers";

const chance = new Chance(new Chance().natural());

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AppShell> = {
  title: 'Mui-Mas/AppShell',
  component: AppShell,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (Story, context) => {
      const initialState: Profile | undefined = useParameter('profile', {
          id: chance.guid(),
          firstName: chance.first(),
          lastName: chance.last(),
          bio: chance.paragraph(),
          avatarUrl: chance.url(),
          website: chance.url(),
          loading: false,
        });
    
        const [state, setState] = useState<Partial<Profile>>({...initialState});
    
        return (!state ? <React.Fragment /> :
          <ProfileProvider profile={state as Profile} setProfile={setState}>
            <Story />
          </ProfileProvider>
        );
    }
  ],
};

export default meta;

type Story = StoryObj<typeof AppShell>;

const toolbar: NavRoutes = {
  primary: [{
    slug: 'primary-toolbar-item-1',
    icon: 'icon',
    label: 'Toolbar Item 1',
    page: '/page-1',
  }],
  secondary: [{
    slug: 'secondary-toolbar-item-1',
    icon: 'icon',
    label: 'Toolbar Item 1',
    page: '/page-2',
  }],
  tertiary: [{
    slug: 'tertiary-toolbar-item-1',
    icon: 'icon',
    label: 'Toolbar Item 1',
    page: '/page-3',
  }],
};

const routes: NavRoutes = {
  primary: [{
    slug: 'primary-item-1',
    icon: 'icon',
    label: 'Primary Item 1',
    page: '/page-1',
  }],
  secondary: [{
    slug: 'secondary-item-1',
    icon: 'icon',
    label: 'Secondary Item 1',
    page: '/page-2',
  }],
  tertiary: [{
    slug: 'tertiary-item-1',
    icon: 'icon',
    label: 'Tertiary Item 1',
    page: '/page-3',
  }],
};

const router = (route: NavRoute) => console.log({route});

const config = {
  app: {
    title: chance.string(),
    description: chance.string(),
    icon: 'https://placehold.co/64',
    logo: {
      main: 'https://placehold.co/46',
      contrast: 'https://placehold.co/46',
    },
    copyright: {
      holder: chance.name(),
      year: Number(chance.year()),
      url: chance.url(),
    },
    pages: {
      home: chance.url(),
      signin: chance.url(),
      signup: chance.url(),
      recovery: chance.url(),
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    toolbar,
    routes,
    router,
    config,
  }
};
