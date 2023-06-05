import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useConfig } from '../providers/Config';
import { Auth } from './Auth';
import Copyright from './Copyright';
import type { Credentials } from './Auth/PasswordForm';
import type { RecoverPasswordInfo } from './Auth/RecoverForm';
import type { SignUpInfo } from './Auth/SignupForm';
import { SnackBarAlert } from './SnackBarAlert';

const IMAGES = [
  'derek-sutton-Txmj01eS14s-unsplash.jpg',
  'timothy-l-brock-zxiHg24rYmk-unsplash.jpg',
  'zoe-schaeffer-oAS_EIpoRkE-unsplash.jpg',
  'bannon-morrissy-KEKVOJt7lOY-unsplash.jpg',
  'markus-spiske-7OBJS-2CgHk-unsplash.jpg',
  'jen-theodore-OxhM8sJdTLI-unsplash.jpg',
  'adele-payman-2oYMwuFgnTg-unsplash.jpg',
  'markus-spiske-EK8QN9O0wRk-unsplash.jpg',
  'jonathan-kemper-oHCalaoeD0Q-unsplash.jpg',
  'jonathan-kemper-CbZh3kaPxrE-unsplash.jpg',
  'tim-mossholder-ZoiUrv5fi-k-unsplash.jpg',
  'markus-spiske-jHrW-l7NWfw-unsplash.jpg',
  'zeynep-sumer-PzGBcgfMgm4-unsplash.jpg',
  'jonathan-kemper-1HHrdIoLFpU-unsplash.jpg',
  'zoe-schaeffer-tbiV-yc903g-unsplash.jpg',
  'derek-sutton-xLZ6YiYMQK4-unsplash.jpg',
  'justus-menke-zRqRhIJqdnI-unsplash.jpg',
  'pelle-asplund-6zchIYzvYBg-unsplash.jpg',
  'megan-andrews-ueLV7WV4_60-unsplash.jpg',
  'mettfluencer-mett-lifestyle-tSo1XWkB5GU-unsplash.jpg',
  'nordwood-themes-wtevVfGYwnM-unsplash.jpg',
  'sandeep-gill-mBG8C8m55T8-unsplash.jpg',
  'jodie-morgan-B5eDYr-SELo-unsplash.jpg',
  'ivan-bandura-o7GsKbYBpPY-unsplash.jpg',
  'illiya-vjestica-q3BCmqUaQ7U-unsplash.jpg',
  'gabriel-jimenez-jin4W1HqgL4-unsplash.jpg',
  'jonas-nordberg-XP22kvQoPNk-unsplash.jpg',
  'pieter-van-noorden-6x5aQNGr4rc-unsplash.jpg',
  'markus-spiske-l1sz772sEFE-unsplash.jpg',
  'jonathan-kemper-eRRXwLrqWjg-unsplash.jpg',
  'josh-hild-HjxgkynaP_Y-unsplash.jpg',
  'markus-winkler-HeqXGxnsnX4-unsplash.jpg',
  'tim-foster-AmdhIXnQWMU-unsplash.jpg',
  'andreas-dress-wg9hUuor3yg-unsplash.jpg',
  'justus-menke-gkANpt2K2Hk-unsplash.jpg',
  'jonathan-kemper-VTXw4_5SsNA-unsplash.jpg',
];

interface AuthShellPage {
  view: string;
  title: string;
}

interface AuthShellProps {
  view?: string
}

export function AuthShell(props: AuthShellProps ) {
  const { view } = props;
  const [ errorMsg, setErrorMsg ] = React.useState('');
  const [ statusMsg, setStatusMsg ] = React.useState('');
  const router = useRouter();
  const config = useConfig();
  const supabase = useSupabaseClient();
  const index = React.useMemo<number>(() => Math.floor(Math.random() * IMAGES.length), []);
  const [image] = React.useState<string>(IMAGES[index]);

  const handleSignIn = (credentials: Credentials) => {
    setErrorMsg('');
    supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    }).then((value: { data: any; error: any; }) => {
      const { data, error } = value;
      if (error) {
        setErrorMsg(error.message);
      } else if (data) {
        router.push(config.app.pages.main);
      }
    }).catch((err: any) => {
      setErrorMsg(err.message);
    });
  };

  const handleSignUp = (info: SignUpInfo) => {
    setErrorMsg('');
    supabase.auth.signUp({
      email: info.email,
      password: info.password,
      options: {
        emailRedirectTo: `${config.app.url}${config.app.pages.signin}`,
        data: {
          first_name: info.firstName,
          last_name: info.lastName,
        }
      }
    }).then((value) => {
      const { data, error } = value;
      if (error) {
        setErrorMsg(error.message);
      } else if (data) {
        router.push(config.app.pages.main);
      }
    }).catch((err) => {
      setErrorMsg(err.data?.message ?? err.message);
    });
  };

  const handlePasswordRecovery = (info: RecoverPasswordInfo) => {
    setErrorMsg('');
    setStatusMsg('');
    supabase.auth.resetPasswordForEmail(
      info.email,
      { redirectTo: config.app.pages.main }
    ).then((value) => {
      const { data, error } = value;
      if (error) {
        setErrorMsg(error.message);
      } else if (data) {
        setStatusMsg(`Password reset sent to ${info.email}`);
      }
    }).catch((err) => {
      setErrorMsg(err.data?.message ?? err.message);
    });
  };

  let page: AuthShellPage = { // Password form is default
    view: 'password', title: 'Sign In'
  };

  switch (view) {
    case 'signin':  // Default view
    case 'password': break;
    case 'signup': page = {view: 'signup', title: 'Sign Up'}; break;
    case 'recover': page = {view: 'recover', title: 'Password Recovery'}; break;
  }

  return (
    <Grid
      container
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Head>
        <title>{page.title}{' :: '}{config.app.title}</title>
        <meta name="description" content={config.app.description} />
        <link rel="icon" href={config.app.icon} />
      </Head>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(/splash/${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Auth
          type={page.view}
          title={page.title}
          subTitle={`Welcome to ${config.app.title}`}
          signInUrl={config.app.pages.signin}
          signUpUrl={config.app.pages.signup}
          forgotPasswordUrl={config.app.pages.recovery}
          signIn={handleSignIn}
          signUp={handleSignUp}
          recoverPassword={handlePasswordRecovery}
        />
        <Copyright sx={{ mt: 5 }} />
      </Grid>
      <SnackBarAlert message={statusMsg} severity="info" clear={() => setStatusMsg('')} />
      <SnackBarAlert message={errorMsg} severity="error" clear={() => setErrorMsg('')} />
    </Grid>
  );
}

export default AuthShell;