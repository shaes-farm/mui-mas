import React from 'react';
import {cleanup, render} from '@testing-library/react';

import Notifications from '../Notifications';
import {NavRoute, NavRouter} from '../Nav';

describe('Notifications component', () => {
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

  it('should render Notifications', () => {
    const notifications = render(<Notifications count={4} router={router} route={route} />);
    expect(notifications).not.toBeNull();
  });
});
