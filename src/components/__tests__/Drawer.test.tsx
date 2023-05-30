import React from 'react';
import {cleanup, render} from '@testing-library/react';

import Drawer from '../Drawer';

describe('Drawer component', () => {
  afterEach(cleanup);
  
  it('should render a Drawer', () => {
    const component = render(<Drawer />);

    expect(component).not.toBeNull();
  });
});
