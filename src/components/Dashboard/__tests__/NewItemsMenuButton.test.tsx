import React from 'react';
import {cleanup, render} from '@testing-library/react';

import type { NavRoute } from '../../Nav';
import NewItemsMenuButton from '../NewItemsMenuButton';

describe('NewItemsMenuButton component', () => {
  let menu: Array<NavRoute>,
      router: (route: NavRoute) => void;

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

    router = jest.fn((route: NavRoute) => {});
  });

  afterEach(cleanup);
  
  it('should render a NewItemsMenuButton', () => {
    const component = render(<NewItemsMenuButton router={router} menu={menu} />);

    expect(component).not.toBeNull();
  });
});
