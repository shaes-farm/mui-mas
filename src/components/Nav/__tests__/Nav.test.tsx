import React from 'react';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type {NavRoutes, NavRouter} from '../index';
import {Nav} from '../index';

const user = userEvent.setup();

describe('Nav component', () => {
  let router: NavRouter,
      routes: NavRoutes;

  beforeEach(() => {
    router = jest.fn();

    routes = [{
      slug: `header-${faker.lorem.slug()}`,
      page: null,
    },{
      slug: faker.lorem.slug(),
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      page: <React.Fragment />,
    },{
      slug: faker.lorem.slug(),
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      page: <React.Fragment />,
    },{
      slug: 'divider-primary',
      page: null,
    },{
      slug: `header-${faker.lorem.slug()}`,
      page: null,
    },{
      slug: faker.lorem.slug(),
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      page: <React.Fragment />,
    },{
      slug: faker.lorem.slug(),
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      page: <React.Fragment />,
    },{
      slug: 'divider-secondary',
      page: null,
    },{
      slug: `header-${faker.lorem.slug()}`,
      page: null,
    },{
      slug: faker.lorem.slug(),
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      page: <React.Fragment />,
    }];
  });

  afterEach(cleanup);
  
  it('should render a Nav', () => {
    const component = render(<Nav routes={routes} router={router} />);

    expect(component).not.toBeNull();
  });
  
  it('should navigate to a NavRoute', async () => {
    const component = render(<Nav routes={routes} router={router} />);

    expect(component).toBeDefined();

    const link = component.getByText(routes[1].label as string);

    await user.click(link);

    expect(router).toHaveBeenCalledTimes(1);
    expect(router).toHaveBeenCalledWith(routes[1]);
  });
 
});
