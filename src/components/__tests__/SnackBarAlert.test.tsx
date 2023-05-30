import React from 'react';
import {cleanup, render} from '@testing-library/react';

import SnackBarAlert from '../SnackBarAlert';

describe('SnackBarAlert component', () => {
  afterEach(cleanup);
  
  it('should render a SnackBarAlert', () => {
    const component = render(
      <SnackBarAlert message="Foo" severity="error" clear={() => {return}} autoHide={1} />
    );

    expect(component).not.toBeNull();
  });
});
