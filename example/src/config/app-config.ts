import {faker} from '@faker-js/faker';
import type {AppConfig} from '@shaes-farm/mui-mas';

export interface Config {
  app: AppConfig;
}

export const defaultConfig: Config = {
  app: {
    title: 'Mui Mas!',
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
