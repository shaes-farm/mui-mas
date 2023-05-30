import React from 'react';
import {cleanup, render} from '@testing-library/react';

import Form from '../Form';

describe('Form component', () => {
  afterEach(cleanup);
  
  it('should render a Form', () => {
    const component = render(<Form />);

    expect(component).not.toBeNull();
  });
});
