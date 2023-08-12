import React from 'react';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type {NavRoute, NavRouter} from '../Nav';
import NewItemsMenuButton from '../NewItemsMenuButton';
import { faker } from '@faker-js/faker';

const user = userEvent.setup();

describe('NewItemsMenuButton component', () => {
  let newItemsMenuButton: any,
      menu: Array<NavRoute>,
      router: NavRouter;

  beforeAll(() => {
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
    newItemsMenuButton = render(<NewItemsMenuButton router={router} routes={menu} />);
  });

  afterEach(cleanup);

  it('should render a NewItemsMenuButton', () => {
    expect(newItemsMenuButton).toBeDefined();
  });

  it('should open a menu when the "new items" button is clicked', async () => {
    expect(newItemsMenuButton).toBeDefined();

    const initialMenu = newItemsMenuButton.queryByRole('menu');
    expect(initialMenu).toBeNull();

    const button = newItemsMenuButton.getByLabelText(/new items/u);
    await user.click(button);

    const newItemsMenu = newItemsMenuButton.queryByRole('menu');
    expect(newItemsMenu).toBeDefined();
  });

  it('should navigate to a route and close the menu when an item is selected', async () => {
    expect(newItemsMenuButton).toBeDefined();

    const button = newItemsMenuButton.getByLabelText(/new items/u);
    await user.click(button);

    const newItemsMenu = newItemsMenuButton.queryByRole('menu');
    expect(newItemsMenu).not.toBeNull();

    const menuItem = await newItemsMenuButton.getByText(menu[0].label);
    await user.click(menuItem);

    expect(router).toHaveBeenCalledTimes(1);
    expect(router).toHaveBeenCalledWith(menu[0]);

    const finalMenu = newItemsMenuButton.queryByRole('menu');
    expect(finalMenu).toBeNull();
  });
});
