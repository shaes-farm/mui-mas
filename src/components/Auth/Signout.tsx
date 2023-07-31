import React from 'react';
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export interface SignOutProps {
  home: string
}

export const SignOut: React.FC<SignOutProps> = ({home}) {
  const router = useRouter();
  const supabase = useSupabaseClient();

  React.useEffect(() => {
    supabase.auth.signOut().then((error: any) => {
      if (error) console.error({error});
      router.push(home);
    });
  })

  return <></>;
}

export default SignOut;