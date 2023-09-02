import React from 'react';
import { useRouter } from 'next/router'

export interface SignOutProps {
  home: string
  signOut: () => void
}

export const SignOut: React.FC<SignOutProps> = ({home, signOut}) => {
  const router = useRouter();

  React.useEffect(() => {
    signOut();
    router.push(home);
  })

  return <></>;
};

export default SignOut;
