import React from 'react';
import {useRouter} from 'next/router';
import {faker} from '@faker-js/faker';
import {
  AppConfig,
  AppShell,
  NavRoute,
  NavRouter,
  Profile,
  ProfileProvider,
} from '@shaes/mui-mas';

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
      />
    </ProfileProvider>
  );
}
