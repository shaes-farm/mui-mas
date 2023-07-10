import React from 'react';
import {cleanup, render} from '@testing-library/react';

import Link from '../Link';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/bum',
    push: jest.fn()
  }),
}));  

describe('Link component', () => {
  afterEach(cleanup);
  
  it('should render an external Link', () => {
    const url = chance.url();

    const component = render(<Link href={url} />);

    expect(component).toBeDefined();
  });
  
  it('should render an external Link without styles', () => {
    const url = chance.url();

    const component = render(<Link href={url} noLinkStyle={true} />);

    expect(component).toBeDefined();
  });

  it('should render an internal Link', () => {
    const url = '/fruity';

    const component = render(<Link href={url} />);

    expect(component).toBeDefined();
  });

  it('should render an internal Link without styles', () => {
    const url = '/fruity';

    const component = render(<Link href={url} noLinkStyle={true} />);

    expect(component).toBeDefined();
  });

  it('should render a link with legacy behavior', () => {
    const url = chance.url();

    const component = render(<Link href={url} legacyBehavior={true} />);

    expect(component).toBeDefined();
  });

  it('should render a link without legacy behavior', () => {
    const url = chance.url();

    const component = render(<Link href={url} legacyBehavior={false} />);

    expect(component).toBeDefined();
  });

  it('should accept a UrlObject as an href', () => {
    const url = new URL(chance.url());

    const component = render(<Link href={url} />);

    expect(component).toBeDefined();
  });

  it('should render active pathname', () => {
    const component = render(<Link href="/bum" activeClassName="bar" />);

    expect(component).toBeDefined();
  });
});
