import React from 'react';
import {cleanup, render} from '@testing-library/react';

import Messages from '../Messages';
import {NavRoute, NavRouter} from '../Nav';

describe('Messages component', () => {
  let router: NavRouter,
        route: NavRoute;

  beforeAll(() => {
    route = {
      slug: chance.string(),
      icon: <React.Fragment />,
      label: chance.string(),
      page: <React.Fragment />,
    };

    router = jest.fn();
  });

  afterEach(cleanup);
  
  it('should render a Messages', () => {
    const component = render(<Messages count={4} router={router} route={route} />);

    expect(component).not.toBeNull();
  });
  
  it('should render a Messages with custom props', () => {
    const component = render(<Messages color="info" count={1} router={router} route={route} />);

    expect(component).not.toBeNull();
  });
});
