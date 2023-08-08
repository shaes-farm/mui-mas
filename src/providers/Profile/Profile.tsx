import React from 'react';
import { Profile } from './_types';

interface ProfileContextProps {
  profile: Profile;
  setProfile: (profile: Profile) => void
}

const ProfileContext = React.createContext<ProfileContextProps|null>(null);

export function useProfile(): ProfileContextProps {
  const context = React.useContext<ProfileContextProps|null>(ProfileContext);

  if (!context) {
    throw new Error('useProfile must be called inside of ProfileProvider');
  }

  return context;
}

export interface ProfileProviderProps {
  profile: Profile;
  setProfile: (profile: Profile) => void
  children?: React.ReactNode;
}

export const ProfileProvider = (props: ProfileProviderProps) => {
  const { profile, setProfile, children } = props;

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;