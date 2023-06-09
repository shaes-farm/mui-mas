import React from 'react';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type {NavRoute, NavRoutes} from '../_types';
import Nav from '../Nav';

const user = userEvent.setup();

describe('Nav component', () => {
  let onNavigate: (route: NavRoute) => void,
      routes: NavRoutes;

  beforeEach(() => {
    onNavigate = jest.fn();

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
    const component = render(<Nav routes={routes} onNavigate={onNavigate} />);

    expect(component).not.toBeNull();
  });
  
  it('should navigate to a primary NavRoute', async () => {
    const component = render(<Nav routes={routes} onNavigate={onNavigate} />);

    expect(component).not.toBeNull();

    const link = component.getByText(routes.primary[0].label);

    await user.click(link);

    expect(onNavigate).toHaveBeenCalledTimes(1);
    expect(onNavigate).toHaveBeenCalledWith(routes.primary[0]);
  });
  
  it('should navigate to a secondary NavRoute', async () => {
    const component = render(<Nav routes={routes} onNavigate={onNavigate} />);

    expect(component).not.toBeNull();

    // @ts-ignore
    const link = component.getByText(routes.secondary[0].label);

    await user.click(link);

    expect(onNavigate).toHaveBeenCalledTimes(1);
    // @ts-ignore
    expect(onNavigate).toHaveBeenCalledWith(routes.secondary[0]);
  });
  
  it('should navigate to a tertiary NavRoute', async () => {
    const component = render(<Nav routes={routes} onNavigate={onNavigate} />);

    expect(component).not.toBeNull();

    // @ts-ignore
    const link = component.getByText(routes.tertiary[0].label);

    await user.click(link);

    expect(onNavigate).toHaveBeenCalledTimes(1);
    // @ts-ignore
    expect(onNavigate).toHaveBeenCalledWith(routes.tertiary[0]);
  });
});
