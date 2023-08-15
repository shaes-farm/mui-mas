import React from 'react';
import {useRouter} from 'next/router';
import {faker} from '@faker-js/faker';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {
  AppConfig,
  AppShell,
  Copyright,
  NavRoute,
  NavRouter,
  Profile,
  ProfileProvider,
} from '@shaes-farm/mui-mas';

import Chart from '@/components/Chart';
import Deposits from '@/components/Deposits';
import Orders from '@/components/Orders';
import {mainRoutes, toolBarRoutes} from '@/utils/routes';

type Config = {
  app: AppConfig;
}

const defaultConfig: Config = {
  app: {
    title: 'Create Next App',
    description: 'An example of the MUI Mas package used in Next.js',
    icon: faker.image.url({height: 128, width: 128}),
    logo: {
      main: faker.image.url({height: 48, width: 48}),
      contrast: faker.image.url({height: 48, width: 48}),
    },
    copyright: {
      holder: faker.company.name(),
      year: faker.date.past({years: 10}).getFullYear(),
      url: faker.internet.url(),
    },
    pages: {
      home: '/dashboard',
      signin: '/signin',
      signup: '/signup',
      recovery: '/recover',
    },
  }
};

const defaultProfile: Profile = {
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  bio: faker.person.bio(),
  avatarUrl: faker.image.url({height: 48, width: 48}),
  website: faker.internet.url(),
  loading: false,
};

export default function Dashboard() {
  const [profile, setProfile] = React.useState<Profile>(defaultProfile);

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
      <AppShell
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
      </AppShell>
    </ProfileProvider>
  );
}
