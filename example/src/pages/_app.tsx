import React from 'react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeOptions } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Roboto } from 'next/font/google';

export const font = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#324764',
    },
    secondary: {
      main: '#ba9b6b',
    },
    info: {
      main: '#143461',
    },
    success: {
      main: '#84B296',
    },
    warning: {
      main: '#F7EFC8',
    },
    error: {
      main: '#f44336'
    },
  },
  typography: {
    fontFamily: font.style.fontFamily,
  },
};

export default function App(props: AppProps) {
  const {Component, pageProps} = props;
  const InnerComponent = Component as any;

  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <CssBaseline />
      <InnerComponent {...pageProps} />
    </ThemeProvider>
  );
}
