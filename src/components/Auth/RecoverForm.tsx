import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

import Form from '../Form';
import Link from '../Link';
import { SubTitle, Heading } from '../Title';

export interface RecoverPasswordInfo {
  email: string
}

export interface RecoverPasswordFormProps {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  recoverPassword: (info: RecoverPasswordInfo) => Promise<string>
  signInUrl: string;
  formProps?: Array<any>
}

export const RecoverPasswordForm: React.FC<RecoverPasswordFormProps> = ({
  icon,
  title,
  subTitle,
  recoverPassword,
  signInUrl,
  ...formProps
}) => {
  const handleSubmit = async function (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const info: RecoverPasswordInfo = {
      email: data.get('email')?.toString() ?? '',
    };
    recoverPassword(info);
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        {icon ?? <VpnKeyOutlinedIcon />}
      </Avatar>
      {title && <SubTitle variant="h4" align="center">{title}</SubTitle>}
      {subTitle && <Heading variant="h5" align="center">{subTitle}</Heading>}
      <Typography variant="caption" align="center">
        We will send a magic link to the address below.
      </Typography>
      <Form
        sx={{ mt: 1 }}
        onSubmit={handleSubmit}
        {...formProps}
      >
        <Grid container maxWidth={450} minWidth={280} spacing={2}>
          <Grid item width="100%" xs={12}>
            <TextField
              required
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              id="email"
              autoComplete="email"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Send Email
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href={signInUrl} variant="body2">
              Remember your password? Sign in
            </Link>
          </Grid>
        </Grid>
      </Form>
    </Box>
  );
}

export default RecoverPasswordForm;
