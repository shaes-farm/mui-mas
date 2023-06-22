import React from 'react';
import {cleanup, render} from '@testing-library/react';

import Link from '../Link';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '',
    push: jest.fn()
  }),
}));  

describe('Link component', () => {
  afterEach(cleanup);
  
  it('should render an external Link', () => {
    const url = chance.url();

    const component = render(<Link href={url} />);

    expect(component).not.toBeNull();
  });
  
  it('should render an external Link without styles', () => {
    const url = chance.url();

    const component = render(<Link href={url} noLinkStyle={true} />);

    expect(component).not.toBeNull();
  });

  it('should render an internal Link', () => {
    const url = '/fruity';

    const component = render(<Link href={url} />);

    expect(component).not.toBeNull();
  });

  it('should render an internal Link without styles', () => {
    const url = '/fruity';

    const component = render(<Link href={url} noLinkStyle={true} />);

    expect(component).not.toBeNull();
  });
});
