import React from 'react';
import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import type {AppConfig} from '../App';
import Copyright from '../Copyright';

import {Auth} from './Auth';
import type {
  Credentials,
  RecoverPasswordInfo,
  SignUpInfo
} from './_types';

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
  const title = React.useMemo(() => {
    switch (view) {
      case 'password': return 'Sign In';
      case 'signup': return 'Sign Up';
      case 'recover': return 'Password Recovery';
    }
  }, [view]);

  return (
    <Grid
      container
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? theme.palette.grey[900]
            : theme.palette.grey[100],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Head>
        <title>{title}{' - '}{config.app.title}</title>
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
            t.palette.mode === 'dark' ? t.palette.grey[900] : t.palette.grey[50],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Auth
          type={view}
          title={title}
          subTitle={`Welcome to ${config.app.title}`}
          signIn={signIn}
          signInUrl={config.app.pages.signin}
          signUp={signUp}
          signUpUrl={config.app.pages.signup}
          recoverPassword={recoverPassword}
          recoverPasswordUrl={config.app.pages.recovery}
        />
        <Copyright
          holder={config.app.copyright.holder}
          url={config.app.copyright.url}
          year={config.app.copyright.year}
          sx={{ mt: 5 }}
        />
      </Grid>
    </Grid>
  );
};

export default AuthShell;
