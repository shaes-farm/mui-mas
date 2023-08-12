import React from 'react';
import {cleanup, render} from '@testing-library/react';

import type {Profile} from '../index';
import {ProfileProvider, useProfile} from '../index';

const TestComponent = () => {
  const profile = useProfile();
  return (
    <pre>
      {JSON.stringify(profile,null,2)}
    </pre>
  );
};

describe('Profile context provider', () => {
  let profile: Profile,
      setProfile: (profile: Profile) => void;

  beforeAll(() => {
    profile = {
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      bio: faker.person.bio(),
      avatarUrl: faker.image.url({width: 48, height: 48}),
      website: faker.internet.url(),
      loading: false,
    };

    setProfile = jest.fn();
  });

  afterEach(cleanup);

  it('should render components that use hook inside of ProfileProvider ', () => {
    const profileProvider = render(
      <ProfileProvider profile={profile} setProfile={setProfile}>
        <TestComponent />
      </ProfileProvider>
    );

    expect(profileProvider).not.toBeNull();
  });

  it('should throw an exception if hook used outside of ProfileProvider ', () => {
    console.error = jest.fn();
    console.log = jest.fn();
    console.debug = jest.fn();

    expect(() => render(<TestComponent />)).toThrow(Error);
    expect(console.error).toHaveBeenCalled();
  });
});
