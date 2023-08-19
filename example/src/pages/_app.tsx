import React from 'react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {themeOptions} from '@/config/theme';

export default function App(props: AppProps) {
  const {Component, pageProps} = props;

  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
