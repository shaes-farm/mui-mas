import * as React from 'react';
import {RouterContext} from 'next/dist/shared/lib/router-context';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMockNextRouter} from '../../../test-utils';
import PasswordForm from '../PasswordForm';

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

describe('PasswordForm', () => {
  const router = createMockNextRouter(),
        signIn = jest.fn(),
        signUpUrl = '/sign-in',
        recoverUrl = '/recover';

  afterEach(cleanup);

  it('should render a PasswordForm', () => {
    const component = render(
      <PasswordForm
        signIn={signIn}
        signUpUrl={signUpUrl}
        forgotPasswordUrl={recoverUrl}
        icon={<React.Fragment />}
        title={faker.lorem.words()}
        subTitle={faker.lorem.words()}
      />
    );
    expect(component).toBeDefined();
  });

  it('should accept user email and password to sign in', async () => {
    const component = render(<PasswordForm signIn={signIn} signUpUrl={signUpUrl} forgotPasswordUrl={recoverUrl} />);
    expect(component).toBeDefined();

    const emailInput = component.getByLabelText(/Email Address/u);
    expect(emailInput).toBeDefined();

    const passwordInput = component.getByLabelText(/Password/u);
    expect(passwordInput).toBeDefined();

    const email = faker.internet.email();
    const password = faker.lorem.word();

    await user.click(emailInput);
    await user.keyboard(email);

    await user.click(passwordInput);
    await user.keyboard(password);

    const button = component.getByText(/Sign In/u);
    expect(button).toBeDefined();

    await user.click(button);

    expect(signIn).toHaveBeenCalledTimes(1);
    expect(signIn).toHaveBeenCalledWith({
      email,
      password,
      remember: false
    })
  });

  it('should click sign-up link to navigate', async () => {
    const component = render(
      <RouterContext.Provider value={router}>
        <PasswordForm signIn={signIn} signUpUrl={signUpUrl} forgotPasswordUrl={recoverUrl} />
      </RouterContext.Provider>
    );
    expect(component).toBeDefined();

    const signUpLink = component.getByText(/Don't have an account\? Sign Up/u);
    expect(signUpLink).toBeDefined();

    await user.click(signUpLink);

    expect(router.push).toBeCalledTimes(1);
    expect(router.push).toBeCalledWith(
      signUpUrl,
      signUpUrl,
      {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      }
    );
  });
});
