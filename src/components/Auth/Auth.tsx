import React from 'react';
import type {FormProps} from '../Form';
import type {Credentials, SignUpInfo, RecoverPasswordInfo} from './_types';
import PasswordForm from './PasswordForm';
import RecoverPasswordForm from './RecoverForm';
import SignUpForm from './SignupForm';

export interface AuthProps extends FormProps {
  type: 'password' | 'signup' | 'recover';
  icon?: React.ReactNode;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  signInUrl: string;
  signIn: (credentials: Credentials) => Promise<void>;
  signUpUrl: string;
  signUp: (info: SignUpInfo) => Promise<void>;
  recoverPasswordUrl: string;
  recoverPassword: (info: RecoverPasswordInfo) => Promise<string>;
}

/**
 * Authentication component that renders a sign-in, sign-up, or password recovery form.
 */
export const Auth = ({
  type,
  icon,
  title,
  subTitle, 
  signInUrl,
  signIn,
  signUpUrl,
  signUp,
  recoverPasswordUrl,
  recoverPassword,
  ...formProps
}: AuthProps) => {

  switch (type) {
    case "password":
      return (
        <PasswordForm
          icon={icon}
          title={title}
          subTitle={subTitle}
          signIn={signIn}
          signUpUrl={signUpUrl}
          forgotPasswordUrl={recoverPasswordUrl}
          {...formProps}
        />
      );
    case "signup":
      return (
        <SignUpForm
          icon={icon}
          title={title}
          subTitle={subTitle}
          signUp={signUp}
          signInUrl={signInUrl}
          {...formProps}
        />
      );
    case "recover":
      return (
        <RecoverPasswordForm
          icon={icon}
          title={title}
          subTitle={subTitle}
          recoverPassword={recoverPassword}
          signInUrl={signInUrl}
          {...formProps}
        />
      );
  }
  // throw new Error(`Unexpected Auth UI requested: '${type}'`);
};

export default Auth;
