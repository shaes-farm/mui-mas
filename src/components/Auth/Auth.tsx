import React from 'react';
import PasswordForm from './PasswordForm';
import SignUpForm from './SignupForm';
import RecoverPasswordForm from './RecoverForm';

export interface AuthProps {
  type: string
}

export function Auth(props: any) {
  const { type, ...authProps } = props;
  const {
    icon, title, subTitle, 
    signIn, signUp, recoverPassword,
    signUpUrl,signInUrl, forgotPasswordUrl,
    ...formProps
  } = authProps;

  switch (type) {
    case "password":
      return (
        <PasswordForm
          title={title}
          subTitle={subTitle}
          signIn={signIn}
          signUpUrl={signUpUrl}
          forgotPasswordUrl={forgotPasswordUrl}
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
          title={title}
          subTitle={subTitle}
          recoverPassword={recoverPassword}
          signInUrl={signInUrl}
          {...formProps}
        />
      );
  }

  throw new Error(`Unexpected Auth UI requested: '${type}'`);
}

export default Auth;
