import React, {useState} from "react";
import {useParameter} from "@storybook/addons";
import type {Meta, StoryObj} from '@storybook/react';
import {faker} from '@faker-js/faker';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import BlindIcon from '@mui/icons-material/Blind';

import {Auth} from '../components';
import type {Credentials, SignUpInfo, RecoverPasswordInfo} from '../components';
import {Profile, ProfileProvider} from "../providers";

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

type Story = StoryObj<typeof Auth>;

const signIn = (credentials: Credentials) => new Promise<void>((resolve) => {console.log({credentials}); resolve();});
const signUp = (info: SignUpInfo) => new Promise<void>((resolve) => {console.log({info}); resolve()});
const recoverPassword = (info: RecoverPasswordInfo) => new Promise<string>((resolve) => {console.log({info}); resolve('foo');});

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SignIn: Story = {
  args: {
    type: 'password',
    icon: <AccountBalanceIcon />,
    title: faker.lorem.words(),
    subTitle: faker.lorem.words(),
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
    title: faker.lorem.words(),
    subTitle: faker.lorem.words(),
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
    title: faker.lorem.words(),
    subTitle: faker.lorem.words(),
    signInUrl: '/signin',
    signIn,
    signUpUrl: '/signup',
    signUp,
    recoverPasswordUrl: '/recover',
    recoverPassword,
  }
};
