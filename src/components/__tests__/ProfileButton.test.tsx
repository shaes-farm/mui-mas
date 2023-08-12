import React from 'react';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type {NavRoute, NavRouter} from '../Nav';
import ProfileButton from '../ProfileButton';

const user = userEvent.setup();

describe('ProfileButton component', () => {
  let profileButton: any,
      profile: any,
      menu: Array<NavRoute>,
      router: NavRouter;

  beforeAll(() => {
    profile = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      avatarUrl: faker.internet.url(),
    };

    menu = [{
      slug: faker.lorem.slug(),
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      hotkey: faker.lorem.word({length: 1}),
      page: <React.Fragment />,
    },{
      slug: 'div',
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
  });

  beforeEach(() => {
    profileButton = render(<ProfileButton profile={profile} router={router} routes={menu} />);
  });

  afterEach(cleanup);

  it('should render a ProfileButton', () => {
    expect(profileButton).toBeDefined();
  });

  it('should open a menu when the "user profile" button is clicked', async () => {
    expect(profileButton).toBeDefined();

    const initialMenu = profileButton.queryByRole('menu');
    expect(initialMenu).toBeNull();

    const button = profileButton.getByLabelText(/user profile/u);
    await user.click(button);

    const userProfileMenu = profileButton.queryByRole('menu');
    expect(userProfileMenu).toBeDefined();
  });

  it('should navigate to a route and close the menu when an item is selected', async () => {
    expect(profileButton).toBeDefined();

    const button = profileButton.getByLabelText(/user profile/u);
    await user.click(button);

    const userProfileMenu = profileButton.queryByRole('menu');
    expect(userProfileMenu).toBeDefined();

    const menuItem = await profileButton.findByText(menu[0].label);
    await user.click(menuItem);

    expect(router).toHaveBeenCalledTimes(1);
    expect(router).toHaveBeenCalledWith(menu[0]);

    const finalMenu = profileButton.queryByRole('menu');
    expect(finalMenu).toBeNull();
  });

  it('should render a generic avatar if the avatar URL is missing', async () => {
    profile.avatarUrl = undefined;
    router = jest.fn();

    profileButton.rerender(<ProfileButton profile={profile} router={router} routes={menu} />);
    expect(profileButton).toBeDefined();

    const button = profileButton.getByLabelText(/user profile/u);
    await user.click(button);

    const userProfileMenu = profileButton.queryByRole('menu');
    expect(userProfileMenu).toBeDefined();

    const menuItem = await profileButton.findByText(menu[0].label);
    await user.click(menuItem);

    expect(router).toHaveBeenCalledTimes(1);
    expect(router).toHaveBeenCalledWith(menu[0]);

    const finalMenu = profileButton.queryByRole('menu');
    expect(finalMenu).toBeNull();
  });
});
