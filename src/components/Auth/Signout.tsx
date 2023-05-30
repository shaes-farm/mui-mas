import * as React from 'react';
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useConfig } from '../../providers/Config';

interface SignOutProps {
  // TODO: Add your component props here...
}

export function SignOut(props: SignOutProps) {
  const { } = props;
  const config = useConfig();
  const router = useRouter();
  const supabase = useSupabaseClient();

  React.useEffect(() => {
    supabase.auth.signOut().then((error) => {
      if (error) console.error({error});
      router.push(config.app.pages.home);
    });
  })

  return <></>;
}

export default SignOut;