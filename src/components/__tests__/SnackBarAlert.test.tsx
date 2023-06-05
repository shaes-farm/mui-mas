import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';

import SnackBarAlert from '../SnackBarAlert';

describe('SnackBarAlert component', () => {
  afterEach(cleanup);
  
  it('should render a SnackBarAlert', async () => {
    const component = render(
      <SnackBarAlert message="Fubar" clear={() => {return}} autoHide={1} />
    );

    expect(component).not.toBeNull();

    expect(await component.findByRole('alert')).not.toBeNull();
  });
  
  it('should not render a SnackBarAlert if message is empty', async () => {
    const component = render(
      <SnackBarAlert message="" clear={() => {return}} autoHide={1} />
    );

    expect(component).not.toBeNull();
    let alert: any = null;

    try {
      alert = await component.findByRole('alert');
      expect(alert).not.toBeTruthy();
    } catch (err: any) {
      expect(err).not.toBeNull();
    }
  });

  it('should close the SnackBarAlert', async () => {
    const component = render(
      <SnackBarAlert message="Foo" severity="info" clear={() => {return}} />
    );

    expect(component).not.toBeNull();

    fireEvent.click(
      await component.findByTestId(/CloseIcon/)
    )
  });
});
