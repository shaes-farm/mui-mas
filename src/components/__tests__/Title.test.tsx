import React from 'react';
import {cleanup, render} from '@testing-library/react';

import {Title, SubTitle, Heading} from '../Title';

describe('Title component', () => {
  afterEach(cleanup);
  
  it('should render a Title', () => {
    const component = render(<Title />);

    expect(component).not.toBeNull();
  });
  
  it('should render a SubTitle', () => {
    const component = render(<SubTitle />);

    expect(component).not.toBeNull();
  });
  
  it('should render a Heading', () => {
    const component = render(<Heading />);

    expect(component).not.toBeNull();
  });
});
