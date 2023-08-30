import React from 'react';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import type {NavRouter, NavRoutes} from '../../Nav';
import type {Profile} from '../../../providers/Profile';
import {ProfileProvider} from '../../../providers/Profile';

import type {AppConfig} from '../_types';
import Dashboard from '../Dashboard';
import { faker } from '@faker-js/faker';

const user = userEvent.setup();

type Config = {
  app: AppConfig;
}

describe('Dashboard component', () => {
  let profile: Profile,
      setProfile: (profile: Profile) => void,
      toolbar: NavRoutes,
      routes: NavRoutes,
      router: NavRouter,
      config: Config;

  beforeEach(() => {
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

    toolbar = [{
      slug: faker.lorem.slug(),
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      hotkey: faker.string.alpha(1),
      page: <React.Fragment />,
    },{
      slug: faker.lorem.slug(),
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      page: <React.Fragment />,
    },{
      slug: faker.lorem.slug(),
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      hotkey: faker.string.alpha(1),
      page: <React.Fragment />,
    },{
      slug: faker.lorem.slug(),
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      page: <React.Fragment />,
    },{
      slug: faker.lorem.slug(),
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      hotkey: faker.string.alpha(1),
      page: <React.Fragment />,
    },{
      slug: faker.lorem.slug(),
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      page: <React.Fragment />,
    }];

    routes = [{
      slug: faker.lorem.slug(),
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      hotkey: faker.string.alpha(1),
      page: <React.Fragment />,
    },{
      slug: 'divider-primary',
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      page: <React.Fragment />,
    },{
      slug: faker.lorem.slug(),
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      page: <React.Fragment />,
    }];

    router = jest.fn();

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

  it('should render Dashboard', () => {
    const dashboard = render(
      <ProfileProvider profile={profile} setProfile={setProfile}>
        <Dashboard
          toolbar={toolbar}
          routes={routes}
          router={router}
          config={config}
        />
      </ProfileProvider>
    );

    expect(dashboard).toBeDefined();
  });

  it('should render the Dashboard with the drawer closed', async () => {
    const dashboard = render(
      <ProfileProvider profile={profile} setProfile={setProfile}>
        <Dashboard
          toolbar={toolbar}
          routes={routes}
          router={router}
          config={config}
          drawerOpen={false}
        />
      </ProfileProvider>
    );

    expect(dashboard).toBeDefined();
  });

  it('should toggle the Dashboard drawer open and closed', async () => {
    const dashboard = render(
      <ProfileProvider profile={profile} setProfile={setProfile}>
        <Dashboard
          toolbar={toolbar}
          routes={routes}
          router={router}
          config={config}
        />
      </ProfileProvider>
    );

    expect(dashboard).toBeDefined();

    const button = dashboard.getByLabelText(/open drawer/u);
    expect(button).toBeDefined();

    await user.click(button);

    const closeButton = dashboard.getByLabelText(/close drawer/u);
    expect(closeButton).toBeDefined();

    await user.click(closeButton);
  });

  it('should navigate to a route when a sidebar link is clicked', async () => {
    const dashboard = render(
      <ProfileProvider profile={profile} setProfile={setProfile}>
        <Dashboard
          toolbar={toolbar}
          routes={routes}
          router={router}
          config={config}
        />
      </ProfileProvider>
    );

    expect(dashboard).toBeDefined();

    const link = dashboard.getByText(routes[0].label as string);
    expect(link).toBeDefined();

    await user.click(link);

    expect(router).toBeCalledTimes(1);
    expect(router).toBeCalledWith(routes[0]);
  });

  it('should navigate to a toolbar route when an icon is clicked', async () => {
    const dashboard = render(
      <ProfileProvider profile={profile} setProfile={setProfile}>
        <Dashboard
          toolbar={toolbar}
          routes={routes}
          router={router}
          config={config}
        />
      </ProfileProvider>
    );

    expect(dashboard).toBeDefined();

    const icon = dashboard.getByTestId(`${toolbar[0].slug}-icon`);

    expect(icon).toBeDefined();

    await user.click(icon);

    expect(router).toBeCalledTimes(1);
    expect(router).toBeCalledWith(toolbar[0]);
  });

  it('should render Dashboard in dark mode', () => {
    const theme = createTheme({
      palette: {
        mode: 'dark',
      },
    });

    config.app.logo.contrast = faker.image.url({width: 48, height:48});

    const dashboard = render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProfileProvider profile={profile} setProfile={setProfile}>
          <Dashboard
            toolbar={toolbar}
            routes={routes}
            router={router}
            config={config}
          />
        </ProfileProvider>
      </ThemeProvider>
    );

    expect(dashboard).toBeDefined();
  });
});
