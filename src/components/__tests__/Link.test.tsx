import React from 'react';
import {RouterContext} from 'next/dist/shared/lib/router-context';
import {cleanup, render} from '@testing-library/react';

import {createMockNextRouter} from '../../test-utils';

import Link from '../Link';

const router = createMockNextRouter();

describe('Link component', () => {
  afterEach(cleanup);
  
  it('should render an external Link', () => {
    const url = 'https://example.com';

    const component = render(
      <RouterContext.Provider value={router}>
        <Link href={url} />
      </RouterContext.Provider>
    );

    expect(component).toBeDefined();
  });
  
  it('should render an external Link without styles', () => {
    const url = 'mailto:user@examples.com';

    const component = render(
      <RouterContext.Provider value={router}>
        <Link href={url} noLinkStyle={true} />
      </RouterContext.Provider>
    );

    expect(component).toBeDefined();
  });

  it('should render an internal Link', () => {
    const url = '/';

    const component = render(
      <RouterContext.Provider value={router}>
        <Link href={url} />
      </RouterContext.Provider>
    );

    expect(component).toBeDefined();
  });

  it('should render an internal Link without styles', () => {
    const url = '/';

    const component = render(
      <RouterContext.Provider value={router}>
        <Link href={url} noLinkStyle={true} />
      </RouterContext.Provider>
    );

    expect(component).toBeDefined();
  });

  it('should render a link with legacy behavior', () => {
    const url = chance.url();

    const component = render(
      <RouterContext.Provider value={router}>
        <Link href={url} legacyBehavior={true} />
      </RouterContext.Provider>
    );

    expect(component).toBeDefined();
  });

  it('should render a link without legacy behavior', () => {
    const url = chance.url();

    const component = render(
      <RouterContext.Provider value={router}>
        <Link href={url} legacyBehavior={false} />
      </RouterContext.Provider>
    );

    expect(component).toBeDefined();
  });

  it('should accept a UrlObject as an href', () => {
    const url = new URL(chance.url());

    const component = render(
      <RouterContext.Provider value={router}>
        <Link href={url} />
      </RouterContext.Provider>
    );

    expect(component).toBeDefined();
  });

  it('should render active pathname', () => {
    const component = render(
      <RouterContext.Provider value={router}>
        <Link href="/" activeClassName="bar" />
      </RouterContext.Provider>
    );

    expect(component).toBeDefined();
  });

  it('should render link with next.js props', () => {
    const component = render(
      <RouterContext.Provider value={router}>
        <Link href="/" as="/foo" linkAs="/foo" className="active" />
      </RouterContext.Provider>
    );

    expect(component).toBeDefined();
  });
});
