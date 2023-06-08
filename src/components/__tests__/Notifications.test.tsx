import React from 'react';
import {cleanup, render} from '@testing-library/react';

import Notifications from '../Notifications';

describe('Notifications component', () => {
  const onNotify = jest.fn();

  afterEach(cleanup);
  
  it('should render a Notifications', () => {
    const component = render(<Notifications count={4} onNotify={onNotify} />);

    expect(component).not.toBeNull();
  });
});
