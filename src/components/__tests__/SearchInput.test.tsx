import React from 'react';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type {NavRoute, NavRouter} from '../Nav';
import SearchInput from '../SearchInput';

const user = userEvent.setup();

describe('SearchInput component', () => {
  let route: NavRoute,
      router: NavRouter;

  beforeEach(() => {
    route = {
      slug: 'search',
      icon: <React.Fragment />,
      label: 'Search',
      page: <React.Fragment />
    };

    router = jest.fn();
  });

  afterEach(cleanup);
  
  it('should render a SearchInput', () => {
    const component = render(<SearchInput route={route} router={router} />);
    expect(component).toBeDefined();
  });

  it('should click on the search button to submit the search', async () => {
    const component = render(<SearchInput route={route} router={router} />);
    expect(component).toBeDefined();

    const input = component.getByLabelText(/search keywords/u);

    await user.click(input);
    await user.keyboard('find this');

    const button = component.getByLabelText(/search button/u);

    await user.click(button);

    expect(router).toHaveBeenCalledTimes(1);
    expect(router).toHaveBeenCalledWith(route);
  });
});
