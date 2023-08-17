import {faker} from '@faker-js/faker';
import type {Profile} from '@shaes-farm/mui-mas';

export const userProfile: Profile = {
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  bio: faker.person.bio(),
  avatarUrl: faker.image.url({height: 48, width: 48}),
  website: faker.internet.url(),
  loading: false,
};
