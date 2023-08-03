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
      id: chance.guid(),
      firstName: chance.first(),
      lastName: chance.last(),
      bio: chance.paragraph(),
      avatarUrl: 'https://placehold.co/46',
      website: chance.url(),
      loading: false,
    };

    setProfile = jest.fn();

    signIn = jest.fn();
    signUp = jest.fn();
    recoverPassword = jest.fn();
    view = 'password';

    config = {
      app: {
        title: `${chance.capitalize(chance.word())} ${chance.capitalize(chance.word())}`,
        description: chance.paragraph(),
        icon: 'https://placehold.co/64',
        logo: {
          main: 'https://placehold.co/46',
          contrast: 'https://placehold.co/46',
        },
        copyright: {
          holder: chance.name(),
          year: Number(chance.year({min: 1995, max: new Date().getFullYear()})),
          url: chance.url(),
        },
        pages: {
          home: '/',
          signin: '/signin',
          signup: '/signup',
          recovery: '/recovery',
        },
      },
    };
  });

  afterEach(cleanup);

  it('should render a default AuthShell', () => {
    const appShell = render(
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

    expect(appShell).toBeDefined();
  });

  it('should render AuthShell sign-up page', () => {
    const appShell = render(
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

    expect(appShell).toBeDefined();
  });

  it('should render AuthShell password recovery page', () => {
    const appShell = render(
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

    expect(appShell).toBeDefined();
  });

  it('should render AuthShell in dark mode', () => {
    const theme = createTheme({
      palette: {
        mode: 'dark',
      },
    });

    const appShell = render(
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

    expect(appShell).toBeDefined();
  });
});
