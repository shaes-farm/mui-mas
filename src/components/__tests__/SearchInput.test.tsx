import React from 'react';
import {cleanup, render} from '@testing-library/react';

import type { NavRoute } from '../Nav';
import SearchInput from '../SearchInput';

describe('SearchInput component', () => {
  let route: NavRoute,
      router: (route: NavRoute) => void;

  beforeEach(() => {
    route = {
      slug: 'foo-slug',
      icon: <React.Fragment />,
      label: 'Foo Label',
      page: <React.Fragment />
    };
    
    router = jest.fn();
  });

  afterEach(cleanup);
  
  it('should render a SearchInput', () => {
    const component = render(<SearchInput route={route} router={router} />);

    expect(component).not.toBeNull();
  });
});
