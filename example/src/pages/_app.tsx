import React from 'react';
import type {AppProps} from 'next/app'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {themeOptions} from '@/config/theme';
import type { Database } from '@/models';

export default function App(props: AppProps<{
  initialSession: Session,
}>) {
  const {Component, pageProps} = props;
  const {initialSession} = pageProps;
  const [supabase] = React.useState(() => createPagesBrowserClient<Database>());

  return (
    <SessionContextProvider
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      supabaseClient={supabase}
      initialSession={initialSession}
    >
      <ThemeProvider theme={createTheme(themeOptions)}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionContextProvider>
  );
}
