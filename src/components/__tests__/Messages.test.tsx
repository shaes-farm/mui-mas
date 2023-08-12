import React from 'react';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Messages from '../Messages';
import {NavRoute, NavRouter} from '../Nav';
import { faker } from '@faker-js/faker';

const user = userEvent.setup();

describe('Messages component', () => {
  let router: NavRouter,
        route: NavRoute;

  beforeAll(() => {
    route = {
      slug: faker.lorem.slug(),
      icon: <React.Fragment />,
      label: faker.lorem.words(),
      page: <React.Fragment />,
    };

    router = jest.fn();
  });

  afterEach(cleanup);
  
  it('should render a Messages icon', () => {
    const component = render(<Messages count={4} router={router} route={route} />);

    expect(component).toBeDefined();
  });
  
  it('should render a Messages icon with "info" badge color', () => {
    const component = render(<Messages color="info" count={1} router={router} route={route} />);

    expect(component).toBeDefined();
  });
  
  it('should render a Messages icon with a count of zero when not provided', () => {
    const component = render(<Messages router={router} route={route} />);

    expect(component).toBeDefined();
  });
  
  it('should render a Messages icon with a default tooltip of not provided in the route', () => {
    delete route.label;

    const component = render(<Messages router={router} route={route} />);

    expect(component).toBeDefined();
  });
  
  it('should render a Messages icon and click on it', async () => {
    const component = render(<Messages count={4} router={router} route={route} />);

    expect(component).toBeDefined();

    const icon = component.getByTestId('messages-icon');

    await user.click(icon);

    expect(router).toHaveBeenCalledTimes(1);
    expect(router).toHaveBeenCalledWith(route);
  });
});
