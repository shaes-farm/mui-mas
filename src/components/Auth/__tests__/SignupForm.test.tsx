import * as React from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMockRouter} from '../../../test-utils';
import SignupForm from '../SignupForm';

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

describe('SignupForm', () => {
  const router = createMockRouter(),
        signUp = jest.fn(),
        signInUrl = '/sign-in';

  afterEach(cleanup);
  
  it('should render a SignupForm', () => {
    const component = render(
      <SignupForm
        signUp={signUp}
        signInUrl={signInUrl}
        icon={<React.Fragment />}
        title={chance.string()}
        subTitle={chance.string()}
      />
    );
    expect(component).toBeDefined();
  });

  it('should accept user information to sign up', async () => {
    const component = render(<SignupForm signUp={signUp} signInUrl={signInUrl} />);
    expect(component).toBeDefined();

    const firstNameInput = component.getByLabelText(/First Name/u);
    expect(firstNameInput).toBeDefined();

    const lastNameInput = component.getByLabelText(/Last Name/u);
    expect(lastNameInput).toBeDefined();

    const emailInput = component.getByLabelText(/Email Address/u);
    expect(emailInput).toBeDefined();

    const passwordInput = component.getByLabelText(/Password/u);
    expect(passwordInput).toBeDefined();

    const firstName = chance.first();
    const lastName = chance.last();
    const email = chance.email();
    const password = chance.word();

    await user.click(firstNameInput);
    await user.keyboard(firstName);

    await user.click(lastNameInput);
    await user.keyboard(lastName)

    await user.click(emailInput);
    await user.keyboard(email);

    await user.click(passwordInput);
    await user.keyboard(password);

    const button = component.getByText(/^Sign\s+Up$/i);
    expect(button).toBeDefined();

    await user.click(button);

    expect(signUp).toHaveBeenCalledTimes(1);
    expect(signUp).toHaveBeenCalledWith({
      firstName,
      lastName,
      email,
      password,
    })
  });

  it('should click sign-in link to navigate', async () => {
    const component = render(
      <RouterContext.Provider value={router}>
        <SignupForm signUp={signUp} signInUrl={signInUrl} />
      </RouterContext.Provider>
    );
    expect(component).toBeDefined();

    const signInLink = component.getByText(/Already have an account\? Sign in/u);
    expect(signInLink).toBeDefined();

    await user.click(signInLink);

    expect(router.push).toBeCalledTimes(1);
    expect(router.push).toBeCalledWith(
      signInUrl,
      signInUrl,
      {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      }
    );
  });
});
