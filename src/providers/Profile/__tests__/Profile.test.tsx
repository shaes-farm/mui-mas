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

describe('Profile component', () => {
  let profile: Profile,
      setProfile: (profile: Profile) => void;

  beforeAll(() => {
    profile = {
      id: chance.guid(),
      firstName: chance.first(),
      lastName: chance.last(),
      bio: chance.paragraph(),
      avatarUrl: 'https://via.placeholder.com/46',
      website: chance.url(),
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
    expect(() => render(<TestComponent />)).toThrow(Error);
  });
});
