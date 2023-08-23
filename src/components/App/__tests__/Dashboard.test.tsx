import React from 'react';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import type {NavRouter, NavRoutes} from '../../Nav';
import {NewItemsMenuButton} from '../../NewItemsMenuButton';
import type {Profile} from '../../../providers/Profile';
import {ProfileProvider} from '../../../providers/Profile';
import {ProfileButton} from '../../ProfileButton';

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
      newItemsMenu: NavRoutes,
      profileMenu: NavRoutes,
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

    newItemsMenu = [{
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
    }];

    profileMenu = [{
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
    }];

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
    },{
      slug: 'new-items-menu',
      icon: <NewItemsMenuButton routes={newItemsMenu} router={router} />,
      page: null,
    },{
      slug: 'profile-menu',
      icon: <ProfileButton routes={profileMenu} router={router} profile={profile} />,
      page: null,
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
    expect(button).toBeTruthy();

    await user.click(button);

    const closeButton = dashboard.getByLabelText(/close drawer/u);
    expect(closeButton).toBeTruthy();

    await user.click(closeButton);
  });

  it('should navigate to a primary route when a sidebar link is clicked', async () => {
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

    const link = dashboard.getByText(routes.primary[0].label as string);
    expect(link).toBeTruthy();

    await user.click(link);

    expect(router).toBeCalledTimes(1);
    expect(router).toBeCalledWith(routes.primary[0]);
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

    const icon = dashboard.getByTestId(`${toolbar.primary[0].slug}-icon`);
    expect(icon).toBeTruthy();

    await user.click(icon);

    expect(router).toBeCalledTimes(1);
    expect(router).toBeCalledWith(toolbar.primary[0]);
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

  it('should render Dashboard with a search input on the AppBar', () => {
    toolbar.tertiary = [{
      slug: 'search-input',
      icon: <React.Fragment />,
      label: 'Search',
      page: <React.Fragment />,
    }];

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

  it('should render Dashboard without a set of secondary and tertiary toolbar routes', () => {
    delete toolbar.secondary;
    delete toolbar.tertiary;

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
});
