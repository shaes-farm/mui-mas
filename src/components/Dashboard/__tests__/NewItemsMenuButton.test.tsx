import React from 'react';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type {NavRoute, NavRouter} from '../../Nav';
import NewItemsMenuButton from '../NewItemsMenuButton';

const user = userEvent.setup();

describe('NewItemsMenuButton component', () => {
  let newItemsMenuButton: any,
      menu: Array<NavRoute>,
      router: NavRouter;

  beforeAll(() => {
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
    newItemsMenuButton = render(<NewItemsMenuButton router={router} menu={menu} />);
  });

  afterEach(cleanup);

  it('should render a NewItemsMenuButton', () => {
    expect(newItemsMenuButton).not.toBeNull();
  });

  it('should open a menu when the "new items" button is clicked', async () => {
    expect(newItemsMenuButton).not.toBeNull();

    const initialMenu = newItemsMenuButton.queryByRole('menu');
    expect(initialMenu).toBeNull();

    const button = newItemsMenuButton.getByLabelText(/new items/u);
    await user.click(button);

    const newItemsMenu = newItemsMenuButton.queryByRole('menu');
    expect(newItemsMenu).not.toBeNull();
  });

  it('should navigate to a route and close the menu when an item is selected', async () => {
    expect(newItemsMenuButton).not.toBeNull();

    const button = newItemsMenuButton.getByLabelText(/new items/u);
    await user.click(button);

    const newItemsMenu = newItemsMenuButton.queryByRole('menu');
    expect(newItemsMenu).not.toBeNull();

    const menuItem = await newItemsMenuButton.findByText(menu[0].label);
    await user.click(menuItem);

    expect(router).toHaveBeenCalledTimes(1);
    expect(router).toHaveBeenCalledWith(menu[0]);

    const finalMenu = newItemsMenuButton.queryByRole('menu');
    expect(finalMenu).toBeNull();
  });
});
