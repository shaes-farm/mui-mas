/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Form from '../Form';
import Link from '../Link';
import { SubTitle, Heading } from '../Title';

import type {Credentials} from './_types';

export interface PasswordFormProps {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  signIn: (credentials: Credentials) => Promise<void>;
  signUpUrl: string;
  forgotPasswordUrl: string;
  formProps?: Array<unknown>
}

export const PasswordForm: React.FC<PasswordFormProps> = ({
  icon,
  title,
  subTitle,
  signIn,
  signUpUrl,
  forgotPasswordUrl,
  ...formProps
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const credentials: Credentials = {
      // @ts-ignore
      email: data.get('email')?.toString(),
      // @ts-ignore
      password: data.get('password')?.toString(),
      remember: data.get('remember') ? true : false,
    };
    signIn(credentials);
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        {icon ?? <LockOutlinedIcon />}
      </Avatar>
      {title && <SubTitle variant="h4">{title}</SubTitle>}
      {subTitle && <Heading variant="h5">{subTitle}</Heading>}
      <Typography variant="body2">Sign in to continue.</Typography>
      <Form
        sx={{ mt: 1 }}
        onSubmit={handleSubmit}
        {...formProps}
      >
        <Grid container maxWidth={450} minWidth={300} spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              id="email"
              placeholder="johndoe@email.com"
              autoComplete="email"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              placeholder="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="me" color="primary" />}
              name="remember"
              label="Remember me"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href={forgotPasswordUrl} variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href={signUpUrl} variant="body2">Don&apos;t have an account? Sign Up</Link>
          </Grid>
        </Grid>
      </Form>
    </Box>
  );
};

export default PasswordForm;
