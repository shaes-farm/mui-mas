import { faker } from '@faker-js/faker';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.faker = faker;

afterAll(() => {
  jest.restoreAllMocks();
});
