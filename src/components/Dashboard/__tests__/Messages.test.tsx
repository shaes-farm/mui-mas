import React from 'react';
import {cleanup, render} from '@testing-library/react';

import Messages from '../Messages';

describe('Messages component', () => {
  afterEach(cleanup);
  
  it('should render a Messages', () => {
    const component = render(<Messages />);

    expect(component).not.toBeNull();
  });
  
  it('should render a Messages with custom props', () => {
    const component = render(<Messages count={1} color="info" />);

    expect(component).not.toBeNull();
  });
});
