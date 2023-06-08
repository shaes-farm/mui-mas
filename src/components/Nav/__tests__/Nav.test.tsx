import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Chance from 'chance';

import type {NavRoute, NavRoutes} from '../_types';
import Nav from '../Nav';

const chance = new Chance();

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
});
