import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import Form from '../Form';
import Link from '../Link';
import { SubTitle, Heading } from '../Title';

export interface SignUpInfo {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface SignUpFormProps {
  icon?: React.ReactNode;
  title?: React.ReactNode | string;
  subTitle?: React.ReactNode | string;
  signUp: (info: SignUpInfo) => Promise<void>;
  signInUrl: string;
  formProps?: Array<any>;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({
  icon,
  title,
  subTitle,
  signUp,
  signInUrl,
  ...formProps
}) => {
  const handleSubmit = async function (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const info: SignUpInfo = {
      firstName: data.get('firstName')?.toString() ?? '',
      lastName: data.get('lastName')?.toString() ?? '',
      email: data.get('email')?.toString() ?? '',
      password: data.get('password')?.toString() ?? '',
    };
    await signUp(info);
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
        {icon ?? <PersonOutlineOutlinedIcon />}
      </Avatar>
      {title && <SubTitle variant="h4">{title}</SubTitle>}
      {subTitle && <Heading variant="h5">{subTitle}</Heading>}
      <Typography variant="body2">
        Sign up to create an account!
      </Typography>
      <Form
        autoComplete="on"
        sx={{ mt: 3 }}
        onSubmit={handleSubmit}
        {...formProps}
      >
        <Grid container maxWidth={450} minWidth={350} spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="firstName"
              id="firstName"
              label="First Name"
              autoComplete="given-name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="lastName"
              id="lastName"
              label="Last Name"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="email"
              id="email"
              label="Email Address"
              type="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              id="password"
              label="Password"
              type="password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href={signInUrl} variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Form>
    </Box>
  );
};

export default SignUpForm;
