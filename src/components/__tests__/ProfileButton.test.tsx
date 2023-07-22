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
      firstName: chance.first(),
      lastName: chance.last(),
      avatarUrl: chance.url(),
    };

    menu = [{
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
    }];

    router = jest.fn();
  });

  beforeEach(() => {
    profileButton = render(<ProfileButton profile={profile} router={router} routes={menu} />);
  });

  afterEach(cleanup);

  it('should render a ProfileButton', () => {
    expect(profileButton).not.toBeNull();
  });

  it('should open a menu when the "user profile" button is clicked', async () => {
    expect(profileButton).not.toBeNull();

    const initialMenu = profileButton.queryByRole('menu');
    expect(initialMenu).toBeNull();

    const button = profileButton.getByLabelText(/user profile/u);
    await user.click(button);

    const userProfileMenu = profileButton.queryByRole('menu');
    expect(userProfileMenu).not.toBeNull();
  });

  it('should navigate to a route and close the menu when an item is selected', async () => {
    expect(profileButton).not.toBeNull();

    const button = profileButton.getByLabelText(/user profile/u);
    await user.click(button);

    const userProfileMenu = profileButton.queryByRole('menu');
    expect(userProfileMenu).not.toBeNull();

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
    expect(profileButton).not.toBeNull();

    const button = profileButton.getByLabelText(/user profile/u);
    await user.click(button);

    const userProfileMenu = profileButton.queryByRole('menu');
    expect(userProfileMenu).not.toBeNull();

    const menuItem = await profileButton.findByText(menu[0].label);
    await user.click(menuItem);

    expect(router).toHaveBeenCalledTimes(1);
    expect(router).toHaveBeenCalledWith(menu[0]);

    const finalMenu = profileButton.queryByRole('menu');
    expect(finalMenu).toBeNull();
  });
});
