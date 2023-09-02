import * as React from 'react';
import {RouterContext} from 'next/dist/shared/lib/router-context';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMockNextRouter} from '../../../test-utils';
import RecoverPasswordForm from '../RecoverForm';

const user = userEvent.setup();

jest.mock('next/router', () => ({
  useRouter: () => ({
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    back: jest.fn(),
    beforePopState: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(() => Promise.resolve()),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en',
    domainLocales: [],
    isPreview: false,
  }),
}));

describe('RecoverPasswordForm', () => {
  const router = createMockNextRouter(),
        recoverPassword = jest.fn(),
        signInUrl = '/sign-in';

  afterEach(cleanup);
  
  it('should render a RecoverPasswordForm', () => {
    const component = render(
      <RecoverPasswordForm
        recoverPassword={recoverPassword}
        signInUrl={signInUrl}
        icon={<React.Fragment />}
        title={faker.lorem.words()}
        subTitle={faker.lorem.words()}
      />
    );
    expect(component).toBeDefined();
  });

  it('should accept user information to sign up', async () => {
    const component = render(<RecoverPasswordForm recoverPassword={recoverPassword} signInUrl={signInUrl} />);
    expect(component).toBeDefined();

    const emailInput = component.getByLabelText(/Email Address/u);
    expect(emailInput).toBeDefined();

    const email = faker.internet.email();

    await user.click(emailInput);
    await user.keyboard(email);

    const button = component.getByText(/Send Email/u);
    expect(button).toBeDefined();

    await user.click(button);

    expect(recoverPassword).toHaveBeenCalledTimes(1);
    expect(recoverPassword).toHaveBeenCalledWith({
      email,
    })
  });

  it('should click sign-in link to navigate', async () => {
    const component = render(
      <RouterContext.Provider value={router}>
        <RecoverPasswordForm recoverPassword={recoverPassword} signInUrl={signInUrl} />
      </RouterContext.Provider>
    );
    expect(component).toBeDefined();

    const signInLink = component.getByText(/Remember your password\? Sign in/u);
    expect(signInLink).toBeDefined();

    await user.click(signInLink);

    expect(router.push).toBeCalledTimes(1);
    expect(router.push).toBeCalledWith(
      signInUrl,
      signInUrl,
      {
        locale: undefined,
        scroll: true,
        shallow: undefined,
      }
    );
  });
});
