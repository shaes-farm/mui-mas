import React from 'react';
import {cleanup, render} from '@testing-library/react';

import {Title, SubTitle, Heading} from '../Title';

describe('Title component', () => {
  afterEach(cleanup);
  
  it('should render a Title', () => {
    const component = render(<Title />);

    expect(component).not.toBeNull();
  });
  
  it('should render a Title as a variant', () => {
    const component = render(<Title variant='h1'/>);

    expect(component).not.toBeNull();
  });
  
  it('should render a SubTitle', () => {
    const component = render(<SubTitle />);

    expect(component).not.toBeNull();
  });
  
  it('should render a SubTitle as a variant', () => {
    const component = render(<SubTitle variant='h2'/>);

    expect(component).not.toBeNull();
  });
  
  it('should render a Heading', () => {
    const component = render(<Heading />);

    expect(component).not.toBeNull();
  });
  
  it('should render a Heading as a variant', () => {
    const component = render(<Heading variant='h3'/>);

    expect(component).not.toBeNull();
  });
});
