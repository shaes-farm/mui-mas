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

    routes = {
      primary: [{
        slug: chance.string(),
        icon: <React.Fragment />,
        label: chance.string(),
        page: <React.Fragment />,
      },{
        slug: chance.string(),
        icon: <React.Fragment />,
        label: chance.string(),
        page: <React.Fragment />,
      }],
      secondary: [{
        slug: chance.string(),
        icon: <React.Fragment />,
        label: chance.string(),
        page: <React.Fragment />,
      },{
        slug: chance.string(),
        icon: <React.Fragment />,
        label: chance.string(),
        page: <React.Fragment />,
      }],
      tertiary: [{
        slug: chance.string(),
        icon: <React.Fragment />,
        label: chance.string(),
        page: <React.Fragment />,
      }]
    };
  });

  afterEach(cleanup);
  
  it('should render a Nav', () => {
    const component = render(<Nav routes={routes} router={router} />);

    expect(component).not.toBeNull();
  });
  
  it('should navigate to a primary NavRoute', async () => {
    const component = render(<Nav routes={routes} router={router} />);

    expect(component).not.toBeNull();

    const link = component.getByText(routes.primary[0].label);

    await user.click(link);

    expect(router).toHaveBeenCalledTimes(1);
    expect(router).toHaveBeenCalledWith(routes.primary[0]);
  });
  
  it('should navigate to a secondary NavRoute', async () => {
    const component = render(<Nav routes={routes} router={router} />);

    expect(component).not.toBeNull();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const link = component.getByText(routes.secondary[0].label);

    await user.click(link);

    expect(router).toHaveBeenCalledTimes(1);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(router).toHaveBeenCalledWith(routes.secondary[0]);
  });
  
  it('should navigate to a tertiary NavRoute', async () => {
    const component = render(<Nav routes={routes} router={router} />);

    expect(component).not.toBeNull();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const link = component.getByText(routes.tertiary[0].label);

    await user.click(link);

    expect(router).toHaveBeenCalledTimes(1);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(router).toHaveBeenCalledWith(routes.tertiary[0]);
  });
});
