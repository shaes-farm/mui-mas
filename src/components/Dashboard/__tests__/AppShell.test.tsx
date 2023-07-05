import React from 'react';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import type {Profile} from '../../../providers/Profile';
import {ProfileProvider} from '../../../providers/Profile';
import type {NavRoute, NavRoutes} from '../../Nav';
import AppShell from '../AppShell';

const user = userEvent.setup();

describe('AppShell component', () => {
  let profile: Profile,
      setProfile: (profile: Profile) => void,
      toolbar: NavRoutes,
      routes: NavRoutes,
      defaultRoute: NavRoute,
      config: any;

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
      }]
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

    defaultRoute = routes.primary[2];

    config = {
      app: {
        title: chance.string(),
        description: chance.string(),
        icon: <React.Fragment />,
        logo: {
          main: 'https://placehold.co/46',
          contrast: 'https://placehold.co/46',
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
          defaultRoute={defaultRoute}
          config={config}
        />
      </ProfileProvider>
    );

    expect(appShell).not.toBeNull();
  });

  it('should toggle the AppShell drawer open and closed', async () => {
    const appShell = render(
      <ProfileProvider profile={profile} setProfile={setProfile}>
        <AppShell
          toolbar={toolbar}
          routes={routes}
          defaultRoute={defaultRoute}
          config={config}
        />
      </ProfileProvider>
    );

    expect(appShell).not.toBeNull();

    const button = appShell.getByLabelText(/open drawer/u);
    expect(button).toBeTruthy();

    await user.click(button);

    const closeButton = appShell.getByLabelText(/close drawer/u);
    expect(closeButton).toBeTruthy();

    await user.click(closeButton);
  });

  it('should navigate to a route', async () => {
    const appShell = render(
      <ProfileProvider profile={profile} setProfile={setProfile}>
        <AppShell
          toolbar={toolbar}
          routes={routes}
          defaultRoute={defaultRoute}
          config={config}
        />
      </ProfileProvider>
    );

    expect(appShell).not.toBeNull();
   
    const link = appShell.getByText(routes.primary[0].label);
    expect(link).toBeTruthy();

    await user.click(link);
  });

  it('should render AppShell in dark mode', () => {
    const theme = createTheme({
      palette: {
        mode: 'dark',
      },
    });

    delete config.app.logo.contrast;

    routes.tertiary = [{
      slug: chance.string(),
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
            defaultRoute={defaultRoute}
            config={config}
          />
        </ProfileProvider>
      </ThemeProvider>
    );

    expect(appShell).not.toBeNull();
  });
});
