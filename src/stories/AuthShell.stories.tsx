import React, {useState} from "react";
import {useParameter} from "@storybook/addons";
import type {Meta, StoryObj} from '@storybook/react';
import {Chance} from 'chance';

import {AuthShell} from '../components/Auth';
import type {Credentials, SignUpInfo, RecoverPasswordInfo} from '../components/Auth';
import {Profile, ProfileProvider} from "../providers";

const chance = new Chance(new Chance().natural());

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AuthShell> = {
  title: 'Mui-Mas/AuthShell',
  component: AuthShell,
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

type Story = StoryObj<typeof AuthShell>;

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

const signIn = (credentials: Credentials) => new Promise<void>((resolve) => {console.log({credentials}); resolve();});
const signUp = (info: SignUpInfo) => new Promise<void>((resolve) => {console.log({info}); resolve()});
const recoverPassword = (info: RecoverPasswordInfo) => new Promise<string>((resolve) => {console.log({info}); resolve('foo');});

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SignIn: Story = {
  args: {
    view: 'password',
    config,
    signIn,
    signUp,
    recoverPassword,
  }
};

export const SignUp: Story = {
  args: {
    view: 'signup',
    config,
    signIn,
    signUp,
    recoverPassword,
  }
};

export const RecoverPassword: Story = {
  args: {
    view: 'recover',
    config,
    signIn,
    signUp,
    recoverPassword,
  }
};
