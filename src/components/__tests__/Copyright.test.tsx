import React from 'react';
import {cleanup, render} from '@testing-library/react';

import Copyright from '../Copyright';

const year = new Date().getFullYear();

describe('Copyright component', () => {

  afterEach(cleanup);
  
  it('should render a Copyright', () => {
    const component = render(
      <Copyright
        holder="site owner"
        year={year}
        url="http://localhost"
      />
    );

    expect(component.getByText(`Copyright © ${year} by`)).not.toBeNull();
  });

  it('should render a Copyright with a year range', () => {
    const component = render(
      <Copyright
        holder="Protected Works Holder"
        year={year - 1}
        url="http://localhost"
      />
    );

    expect(component.getByText(`Copyright © ${year-1}-${year} by`)).not.toBeNull();
  });
});
