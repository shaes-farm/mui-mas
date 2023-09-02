import React from 'react';
import {RouterContext} from 'next/dist/shared/lib/router-context';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import type {Profile} from '../../../providers/Profile';
import {ProfileProvider} from '../../../providers/Profile';
import {createMockNextRouter} from '../../../test-utils';
import type {AppConfig} from '../../App';

import AuthShell from '../AuthShell';
import type {Credentials, SignUpInfo, RecoverPasswordInfo} from '../_types';
import { faker } from '@faker-js/faker/locale/zu_ZA';

const user = userEvent.setup();

type Config = {
  app: AppConfig;
}

describe('AuthShell component', () => {
  const router = createMockNextRouter();
  let profile: Profile,
      setProfile: (profile: Profile) => void,
      signIn: (credentials: Credentials) => Promise<void>,
      signUp: (info: SignUpInfo) => Promise<void>,
      recoverPassword: (info: RecoverPasswordInfo) => Promise<string>,
      view: 'password' | 'signup' | 'recover',
      config: Config;

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
    view = 'password';

    config = {
      app: {
        title: faker.lorem.words(),
        description: faker.lorem.sentence(),
        icon: faker.image.url({width: 48, height:48}),
        logo: {
          main: faker.image.url({width: 48, height:48}),
        },
        copyright: {
          holder: faker.person.fullName(),
          year: Number(faker.date.past({years: 5})),
          url: faker.internet.url(),
        },
        pages: {
          home: '/',
          signin: '/signin',
          signup: '/signup',
          recovery: '/recover',
        },
      },
    };
  });

  afterEach(cleanup);

  it('should render a default AuthShell', () => {
    const authShell = render(
      <RouterContext.Provider value={router}>
        <ProfileProvider profile={profile} setProfile={setProfile}>
          <AuthShell
            signIn={signIn}
            signUp={signUp}
            recoverPassword={recoverPassword}
            config={config}
          />
        </ProfileProvider>
      </RouterContext.Provider>
    );

    expect(authShell).toBeDefined();
  });

  it('should render AuthShell sign-up page', () => {
    const authShell = render(
      <RouterContext.Provider value={router}>
        <ProfileProvider profile={profile} setProfile={setProfile}>
          <AuthShell
            view="signup"
            signIn={signIn}
            signUp={signUp}
            recoverPassword={recoverPassword}
            config={config}
          />
        </ProfileProvider>
      </RouterContext.Provider>
    );

    expect(authShell).toBeDefined();
  });

  it('should render AuthShell password recovery page', () => {
    const authShell = render(
      <RouterContext.Provider value={router}>
        <ProfileProvider profile={profile} setProfile={setProfile}>
          <AuthShell
            view="recover"
            signIn={signIn}
            signUp={signUp}
            recoverPassword={recoverPassword}
            config={config}
          />
        </ProfileProvider>
      </RouterContext.Provider>
    );

    expect(authShell).toBeDefined();
  });

  it('should render AuthShell in dark mode', () => {
    const theme = createTheme({
      palette: {
        mode: 'dark',
      },
    });

    const authShell = render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterContext.Provider value={router}>
          <ProfileProvider profile={profile} setProfile={setProfile}>
            <AuthShell
              view={view}
              signIn={signIn}
              signUp={signUp}
              recoverPassword={recoverPassword}
              config={config}
            />
          </ProfileProvider>
        </RouterContext.Provider>
      </ThemeProvider>        
    );

    expect(authShell).toBeDefined();
  });
});
