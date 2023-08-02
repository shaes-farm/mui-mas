import React from 'react';
import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import type {AppConfig} from '../App';
import Copyright from '../Copyright';
import {SnackBarAlert} from '../SnackBarAlert';

import {Auth} from '.';
import type {
  Credentials,
  RecoverPasswordInfo,
  SignUpInfo
} from '.';

export interface AuthShellProps {
  config: {
    app: AppConfig;
  }
  signIn: (credentials: Credentials) => Promise<void>;
  signUp: (info: SignUpInfo) => Promise<void>;
  recoverPassword: (info: RecoverPasswordInfo) => Promise<string>;
  view?: 'password' | 'signup' | 'recover';
}

export const AuthShell: React.FC<AuthShellProps> = ({config, signIn, signUp, recoverPassword, view = 'password'}) => {
  const [errorMsg, setErrorMsg] = React.useState('');
  const [statusMsg, setStatusMsg] = React.useState('');

  let title;

  switch (view) {
    case 'password': title = 'Sign In'; break;
    case 'signup': title = 'Sign Up'; break;
    case 'recover': title = 'Password Recovery'; break;
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
        <title>{title}{' :: '}{config.app.title}</title>
        <meta name="description" content={config.app.description} />
        <link rel="icon" href={config.app.icon} />
      </Head>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Auth
          type={view}
          title={title}
          subTitle={`Welcome to ${config.app.title}`}
          signInUrl={config.app.pages.signin}
          signUpUrl={config.app.pages.signup}
          recoverPasswordUrl={config.app.pages.recovery}
          signIn={signIn}
          signUp={signUp}
          recoverPassword={recoverPassword}
        />
        <Copyright holder={config.app.copyright.holder} url={config.app.copyright.url} year={config.app.copyright.year}  sx={{ mt: 5 }} />
      </Grid>
      <SnackBarAlert message={statusMsg} severity="info" clear={() => setStatusMsg('')} />
      <SnackBarAlert message={errorMsg} severity="error" clear={() => setErrorMsg('')} />
    </Grid>
  );
};

export default AuthShell;
