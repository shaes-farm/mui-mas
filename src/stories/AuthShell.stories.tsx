import React, {useState} from "react";
import {useParameter} from "@storybook/addons";
import type {Meta, StoryObj} from '@storybook/react';
import {faker} from '@faker-js/faker';

import {AuthShell} from '../components';
import type {Credentials, SignUpInfo, RecoverPasswordInfo} from '../components';
import {Profile, ProfileProvider} from "../providers";

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
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        bio: faker.person.bio(),
        avatarUrl: faker.image.url(),
        website: faker.internet.url(),
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
    title: faker.lorem.words(),
    description: faker.lorem.paragraph(),
    icon: faker.image.url({width: 48, height: 48}),
    logo: {
      main: faker.image.url({width: 48, height: 48}),
      contrast: faker.image.url({width: 48, height: 48}),
    },
    copyright: {
      holder: faker.person.fullName(),
      year: faker.date.past({years: 3}).getFullYear(),
      url: faker.internet.url(),
    },
    pages: {
      home: '/',
      signin: '/signin',
      signup: '/signup',
      recovery: '/recovery',
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
