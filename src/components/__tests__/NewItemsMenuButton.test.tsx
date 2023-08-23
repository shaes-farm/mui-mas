import React from 'react';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {faker} from '@faker-js/faker';

import type {NavRoutes, NavRouter} from '../Nav';
import NewItemsMenuButton from '../NewItemsMenuButton';

const user = userEvent.setup();

describe('NewItemsMenuButton component', () => {
  let menu: NavRoutes,
      router: NavRouter;

  beforeAll(() => {
    menu = [{
      slug: faker.lorem.slug(),
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      hotkey: faker.lorem.word({length: 1}),
      page: <React.Fragment />,
    },{
      slug: 'divider-mid-menu',
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

  afterEach(cleanup);

  it('should render a NewItemsMenuButton', () => {
    const newItemsMenuButton = render(<NewItemsMenuButton router={router} routes={menu} />);
    expect(newItemsMenuButton).toBeDefined();
  });

  it('should open a menu when the "new items" button is clicked', async () => {
    const newItemsMenuButton = render(<NewItemsMenuButton router={router} routes={menu} />);
    expect(newItemsMenuButton).toBeDefined();

    const initialMenu = newItemsMenuButton.queryByRole('menu');
    expect(initialMenu).toBeNull();

    const button = newItemsMenuButton.getByLabelText(/new items/u);
    await user.click(button);

    const newItemsMenu = newItemsMenuButton.queryByRole('menu');
    expect(newItemsMenu).toBeDefined();
  });

  it('should navigate to a route and close the menu when an item is selected', async () => {
    const newItemsMenuButton = render(<NewItemsMenuButton router={router} routes={menu} />);
    expect(newItemsMenuButton).toBeDefined();

    const button = newItemsMenuButton.getByLabelText(/new items/u);
    await user.click(button);

    const newItemsMenu = newItemsMenuButton.queryByRole('menu');
    expect(newItemsMenu).not.toBeNull();

    const menuItem = await newItemsMenuButton.getByText(menu[0].label as string);
    await user.click(menuItem);

    expect(router).toHaveBeenCalledTimes(1);
    expect(router).toHaveBeenCalledWith(menu[0]);

    const finalMenu = newItemsMenuButton.queryByRole('menu');
    expect(finalMenu).toBeNull();
  });
});
