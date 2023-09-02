import React, {useState} from "react";
import {useParameter} from "@storybook/addons";
import type {Meta, StoryObj} from '@storybook/react';

import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AdjustIcon from '@mui/icons-material/Adjust';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import BlindIcon from '@mui/icons-material/Blind';

import {Dashboard} from '../components/App';
import type {NavRoute, NavRoutes} from '../components/Nav';
import {Profile, ProfileProvider} from "../providers";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Dashboard> = {
  title: 'Mui-Mas/Dashboard',
  component: Dashboard,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (Story, context) => {
      const initialState: Profile | undefined = useParameter('profile', {
          id: "0f2a75ad-b58b-4beb-8dce-d616099e65d4",
          firstName: 'Joe',
          lastName: 'Bean',
          bio: 'I am Joe Bean',
          avatarUrl: 'https://placehold.co/64',
          website: 'https://example.com',
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

type Story = StoryObj<typeof Dashboard>;

const toolbar: NavRoutes = {
  primary: [{
    slug: 'primary-toolbar-item-1',
    icon: <AdjustIcon />,
    label: 'Primary Toolbar Item 1',
    page: '/page-1',
  }],
  secondary: [{
    slug: 'secondary-toolbar-item-1',
    icon: <AccessibleForwardIcon />,
    label: 'Secondary Toolbar Item 1',
    page: '/page-2',
  }],
  tertiary: [{
    slug: 'tertiary-toolbar-item-1',
    icon: <BlindIcon />,
    label: 'Tertiary Toolbar Item 1',
    page: '/page-3',
  }],
};

const routes: NavRoutes = {
  primary: [{
    slug: 'primary-item-1',
    icon: <AccessibilityNewIcon />,
    label: 'Primary Item 1',
    page: '/page-1',
  }],
  secondary: [{
    slug: 'secondary-item-1',
    icon: <AccountBalanceIcon />,
    label: 'Secondary Item 1',
    page: '/page-2',
  }],
  tertiary: [{
    slug: 'tertiary-item-1',
    icon: <AllInclusiveIcon />,
    label: 'Tertiary Item 1',
    page: '/page-3',
  }],
};

const router = (route: NavRoute) => console.log({route});

const config = {
  app: {
    title: 'My Storybook App',
    description: 'An application shell rendered in Storybook.',
    icon: 'https://placehold.co/64',
    logo: {
      main: 'https://placehold.co/46',
      contrast: 'https://placehold.co/46',
    },
    copyright: {
      holder: 'Holder of the IP',
      year: 1995,
      url: 'https://example.com',
    },
    pages: {
      home: '/',
      signin: '/signin',
      signup: '/signup',
      recovery: '/recover',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Open: Story = {
  args: {
    toolbar,
    routes,
    router,
    config,
  }
};

export const Closed: Story = {
  args: {
    toolbar,
    routes,
    router,
    config,
    drawerOpen: false,
  }
};
