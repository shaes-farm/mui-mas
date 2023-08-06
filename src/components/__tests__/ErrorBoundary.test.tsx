import React from 'react';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Button} from '@mui/material';

import ErrorBoundary from '../ErrorBoundary';

const MockSnackBarAlert = () => {
  return <MockSnackBarAlert data-testid="mock-snackbar-alert" />;
};

jest.mock('../SnackBarAlert', () => MockSnackBarAlert);

const user = userEvent.setup();

const ErrorComponent = () => {
  return <Button data-testid='button' onClick={() => {throw new Error('Component error!')}} />
};

describe('ErrorBoundary component', () => {
  afterEach(cleanup);
  
  it('should render an ErrorBoundary', () => {
    const component = render(
      <ErrorBoundary key='error-boundary-unit-test'>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(component).toBeDefined();
  });

  // This is a harder problem than I originally expected it to be, see these:
  //   - https://github.com/testing-library/react-testing-library/issues/1068
  //   - https://github.com/testing-library/react-testing-library/issues/624
  //   - https://reactjs.org/docs/error-boundaries.html

  // it('should render a snackbar alert when a child component throws an exception', async () => {
  //   const component = render(
  //     <ErrorBoundary key='error-boundary-unit-test'>
  //       <ErrorComponent />
  //     </ErrorBoundary>
  //   );

  //   expect(component).toBeDefined();

  //   const button = component.getByTestId('button');

  //   expect(button).toBeDefined();

  //   try {
  //     await user.click(button);
  //   } catch (error: unknown) {
  //     // ignored...
  //   } finally {
  //     expect(MockSnackBarAlert).toBeCalledTimes(1);
  //   }
  // });

});
