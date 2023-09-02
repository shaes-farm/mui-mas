import * as React from 'react';
import { useRouter } from 'next/router'
import { useSession } from '@supabase/auth-helpers-react'
import {
  AuthShell,
  Credentials,
  RecoverPasswordInfo,
  SignUpInfo,
} from '@shaes-farm/mui-mas';
import {defaultConfig} from '@/config/app-config';
import Spinner from '@/components/Spinner';

function SignIn() {
  const [shell, setShell] = React.useState<JSX.Element>(<Spinner />);
  const session = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (session) {
      router.push(defaultConfig.app.pages.home);
    } else {
      setShell(
        <AuthShell
          view='password'
          config={defaultConfig}
          signIn={(credentials: Credentials) => new Promise((resolve) => resolve(console.log({credentials})))}
          signUp={(signUpInfo: SignUpInfo) => new Promise((resolve) => resolve(console.log({signUpInfo})))}
          recoverPassword={(recoverPasswordInfo: RecoverPasswordInfo) => new Promise((resolve) => {
            console.log({recoverPasswordInfo});
            resolve('foo');
          })}
        />
      );
    }
  }, [router, session]);

  return shell;
}

export default SignIn;
