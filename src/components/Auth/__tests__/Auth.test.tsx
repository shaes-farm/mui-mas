import React from 'react';
import {RouterContext} from 'next/dist/shared/lib/router-context';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import type {Profile} from '../../../providers/Profile';
import {ProfileProvider} from '../../../providers/Profile';
import {createMockNextRouter} from '../../../test-utils';

import Auth from '../Auth';
import type {Credentials, SignUpInfo, RecoverPasswordInfo} from '../_types';

const user = userEvent.setup();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

describe('Auth component', () => {
  const router = createMockNextRouter();
  let profile: Profile,
      setProfile: (profile: Profile) => void,
      signIn: (credentials: Credentials) => Promise<void>,
      signUp: (info: SignUpInfo) => Promise<void>,
      recoverPassword: (info: RecoverPasswordInfo) => Promise<string>;

  beforeAll(() => {
    profile = {
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      bio: faker.person.bio(),
      avatarUrl: faker.image.url({width: 48, height: 48}),
      website: faker.internet.url(),
      loading: false,
    };

    setProfile = jest.fn();

    signIn = jest.fn();
    signUp = jest.fn();
    recoverPassword = jest.fn();
  });

  afterEach(cleanup);

  it('should render a default Auth', () => {
    const auth = render(
      <RouterContext.Provider value={router}>
        <ProfileProvider profile={profile} setProfile={setProfile}>
          <Auth
            type="password"
            signInUrl="/signin"
            signIn={signIn}
            signUpUrl="/signup"
            signUp={signUp}
            recoverPasswordUrl="/recover"
            recoverPassword={recoverPassword}
          />
        </ProfileProvider>
      </RouterContext.Provider>
    );

    expect(auth).toBeDefined();
  });

  it('should render Auth sign-up page', () => {
    const auth = render(
      <RouterContext.Provider value={router}>
        <ProfileProvider profile={profile} setProfile={setProfile}>
          <Auth
            type="signup"
            signInUrl="/signin"
            signIn={signIn}
            signUpUrl="/signup"
            signUp={signUp}
            recoverPasswordUrl="/recover"
            recoverPassword={recoverPassword}
          />
        </ProfileProvider>
      </RouterContext.Provider>
    );

    expect(auth).toBeDefined();
  });

  it('should render Auth password recovery page', () => {
    const auth = render(
      <RouterContext.Provider value={router}>
        <ProfileProvider profile={profile} setProfile={setProfile}>
          <Auth
            type="recover"
            signInUrl="/signin"
            signIn={signIn}
            signUpUrl="/signup"
            signUp={signUp}
            recoverPasswordUrl="/recover"
            recoverPassword={recoverPassword}
          />
        </ProfileProvider>
      </RouterContext.Provider>
    );

    expect(auth).toBeDefined();
  });

  it('should render Auth in dark mode', () => {
    const auth = render(
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterContext.Provider value={router}>
          <ProfileProvider profile={profile} setProfile={setProfile}>
            <Auth
              type="password"
              signInUrl="/signin"
              signIn={signIn}
              signUpUrl="/signup"
              signUp={signUp}
              recoverPasswordUrl="/recover"
              recoverPassword={recoverPassword}
            />
          </ProfileProvider>
        </RouterContext.Provider>
      </ThemeProvider>        
    );

    expect(auth).toBeDefined();
  });
});
