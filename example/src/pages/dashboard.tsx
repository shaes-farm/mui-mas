import React from 'react';
import {useRouter} from 'next/router';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {
  Dashboard,
  Copyright,
  NavRoute,
  NavRouter,
  Profile,
  ProfileProvider,
} from '@shaes-farm/mui-mas';

import Chart from '@/components/Chart';
import Deposits from '@/components/Deposits';
import Orders from '@/components/Orders';
import {mainRoutes, toolBarRoutes} from '@/config/routes';
import {defaultConfig} from '@/config/app-config';
import {userProfile} from '@/config/user-profile';

export default function Page() {
  const [profile, setProfile] = React.useState<Profile>(userProfile);
  const nextRouter = useRouter();
  const router: NavRouter = (route: NavRoute) => {
    if (typeof route.page === 'string') {
      nextRouter.push(route.page);
    }
    else {
      throw new Error('Unsupported route page type');
    }
  };

  return (
    <ProfileProvider profile={profile} setProfile={setProfile} >
      <Dashboard
        config={defaultConfig}
        router={router}
        routes={mainRoutes}
        toolbar={toolBarRoutes}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Copyright
            holder="Your Website"
            year={2023}
            url="https://example.com"
            sx={{ pt: 4 }}
          />
        </Container>
      </Dashboard>
    </ProfileProvider>
  );
}
