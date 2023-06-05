import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { NavRoute } from '../Nav';
import SearchInput from '../SearchInput';

const user = userEvent.setup();

describe('SearchInput component', () => {
  let route: NavRoute,
      router: (route: NavRoute) => void;

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
  
  it('should render a SearchInput', async () => {
    const component = render(<SearchInput route={route} router={router} />);

    expect(component).not.toBeNull();
  });

  /*
    console.debug('Clicking search button');

    const input = component.getByLabelText(/^search\s+keywords$/i);
    const button = component.getByLabelText(/^search\s+button$/i);

    console.debug({input});
    console.debug({button});

    await user.click(input);
    await user.keyboard('find it');
    await user.click(button);

    expect(router).toHaveBeenCalledTimes(1);
    expect(router).toHaveBeenCalledWith(route);
  });
  */
});
