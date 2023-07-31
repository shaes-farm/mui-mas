import React from 'react';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Theme, ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import type {Profile} from '../../../providers/Profile';
import {ProfileProvider} from '../../../providers/Profile';
import type {NavRouter, NavRoutes} from '../../Nav';

import type {AppConfig} from '../_types';
import AppShell from '../AppShell';

const user = userEvent.setup();

type Config = {
  app: AppConfig;
}

describe('AppShell component', () => {
  let profile: Profile,
      setProfile: (profile: Profile) => void,
      toolbar: NavRoutes,
      routes: NavRoutes,
      router: NavRouter,
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

    toolbar = {
      primary: [{
        slug: chance.string(),
        icon: <React.Fragment />,
        label: chance.string(),
        hotkey: chance.character(),
        page: <React.Fragment />,
      },{
        slug: chance.string(),
        icon: <React.Fragment />,
        label: chance.string(),
        page: <React.Fragment />,
      }],
      secondary: [{
        slug: chance.string(),
        icon: <React.Fragment />,
        label: chance.string(),
        hotkey: chance.character(),
        page: <React.Fragment />,
      },{
        slug: chance.string(),
        icon: <React.Fragment />,
        label: chance.string(),
        page: <React.Fragment />,
      }],
      tertiary: [{
        slug: chance.string(),
        icon: <React.Fragment />,
        label: chance.string(),
        hotkey: chance.character(),
        page: <React.Fragment />,
      },{
        slug: chance.string(),
        icon: <React.Fragment />,
        label: chance.string(),
        page: <React.Fragment />,
      }],
    };

    routes = {
      primary: [{
        slug: chance.string(),
        icon: <React.Fragment />,
        label: chance.string(),
        hotkey: chance.character(),
        page: <React.Fragment />,
      },{
        slug: 'div',
        icon: <React.Fragment />,
        label: chance.string(),
        page: <React.Fragment />,
      },{
        slug: chance.string(),
        icon: <React.Fragment />,
        label: chance.string(),
        page: <React.Fragment />,
      }]
    };

    router = jest.fn();

    config = {
      app: {
        title: chance.string(),
        description: chance.paragraph(),
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
  });

  afterEach(cleanup);

  it('should render AppShell', () => {
    const appShell = render(
      <ProfileProvider profile={profile} setProfile={setProfile}>
        <AppShell
          toolbar={toolbar}
          routes={routes}
          router={router}
          config={config}
        />
      </ProfileProvider>
    );

    expect(appShell).toBeDefined();
  });

  it('should render the AppShell with the drawer closed', async () => {
    const appShell = render(
      <ProfileProvider profile={profile} setProfile={setProfile}>
        <AppShell
          toolbar={toolbar}
          routes={routes}
          router={router}
          config={config}
          drawerOpen={false}
        />
      </ProfileProvider>
    );

    expect(appShell).toBeDefined();
  });

  it('should toggle the AppShell drawer open and closed', async () => {
    const appShell = render(
      <ProfileProvider profile={profile} setProfile={setProfile}>
        <AppShell
          toolbar={toolbar}
          routes={routes}
          router={router}
          config={config}
        />
      </ProfileProvider>
    );

    expect(appShell).toBeDefined();

    const button = appShell.getByLabelText(/open drawer/u);
    expect(button).toBeTruthy();

    await user.click(button);

    const closeButton = appShell.getByLabelText(/close drawer/u);
    expect(closeButton).toBeTruthy();

    await user.click(closeButton);
  });

  it('should navigate to a primary route when a sidebar link is clicked', async () => {
    const appShell = render(
      <ProfileProvider profile={profile} setProfile={setProfile}>
        <AppShell
          toolbar={toolbar}
          routes={routes}
          router={router}
          config={config}
        />
      </ProfileProvider>
    );

    expect(appShell).toBeDefined();

    const link = appShell.getByText(routes.primary[0].label as string);
    expect(link).toBeTruthy();

    await user.click(link);

    expect(router).toBeCalledTimes(1);
    expect(router).toBeCalledWith(routes.primary[0]);
  });

  it('should render AppShell in dark mode', () => {
    const theme = createTheme({
      palette: {
        mode: 'dark',
      },
    });

    delete config.app.logo.contrast;

    toolbar.tertiary = [{
      slug: 'search-input',
      icon: <React.Fragment />,
      label: chance.string(),
      page: <React.Fragment />,
    }];

    const appShell = render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProfileProvider profile={profile} setProfile={setProfile}>
          <AppShell
            toolbar={toolbar}
            routes={routes}
            router={router}
            config={config}
          />
        </ProfileProvider>
      </ThemeProvider>
    );

    expect(appShell).toBeDefined();
  });

  it('should render AppShell without a set of secondary and tertiary toolbar routes', () => {
    delete toolbar.secondary;
    delete toolbar.tertiary;

    const appShell = render(
      <ProfileProvider profile={profile} setProfile={setProfile}>
        <AppShell
          toolbar={toolbar}
          routes={routes}
          router={router}
          config={config}
        />
      </ProfileProvider>
    );

    expect(appShell).toBeDefined();
  });
});
