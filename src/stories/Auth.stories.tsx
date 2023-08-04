import React, {useState} from "react";
import {useParameter} from "@storybook/addons";
import type {Meta, StoryObj} from '@storybook/react';
import {Chance} from 'chance';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import BlindIcon from '@mui/icons-material/Blind';

import {Auth} from '../components';
import type {Credentials, SignUpInfo, RecoverPasswordInfo} from '../components';
import {Profile, ProfileProvider} from "../providers";

const chance = new Chance(new Chance().natural());

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Auth> = {
  title: 'Mui-Mas/Auth',
  component: Auth,
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

type Story = StoryObj<typeof Auth>;

const signIn = (credentials: Credentials) => new Promise<void>((resolve) => {console.log({credentials}); resolve();});
const signUp = (info: SignUpInfo) => new Promise<void>((resolve) => {console.log({info}); resolve()});
const recoverPassword = (info: RecoverPasswordInfo) => new Promise<string>((resolve) => {console.log({info}); resolve('foo');});

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SignIn: Story = {
  args: {
    type: 'password',
    icon: <AccountBalanceIcon />,
    title: chance.string(),
    subTitle: `${chance.capitalize(chance.word())} ${chance.capitalize(chance.word())}`,
    signInUrl: '/signin',
    signIn,
    signUpUrl: '/signup',
    signUp,
    recoverPasswordUrl: '/recover',
    recoverPassword,
  }
};

export const SignUp: Story = {
  args: {
    type: 'signup',
    icon: <AllInclusiveIcon />,
    title: chance.string(),
    subTitle: `${chance.capitalize(chance.word())} ${chance.capitalize(chance.word())}`,
    signInUrl: '/signin',
    signIn,
    signUpUrl: '/signup',
    signUp,
    recoverPasswordUrl: '/recover',
    recoverPassword,
  }
};

export const RecoverPassword: Story = {
  args: {
    type: 'recover',
    icon: <BlindIcon />,
    title: chance.string(),
    subTitle: `${chance.capitalize(chance.word())} ${chance.capitalize(chance.word())}`,
    signInUrl: '/signin',
    signIn,
    signUpUrl: '/signup',
    signUp,
    recoverPasswordUrl: '/recover',
    recoverPassword,
  }
};
