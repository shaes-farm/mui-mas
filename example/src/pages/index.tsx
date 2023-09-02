import React from 'react';
import {useRouter} from 'next/router';
import { useSession } from '@supabase/auth-helpers-react'
import {defaultConfig} from '@/config/app-config';
import Spinner from '@/components/Spinner';

export default function Home() {
  const session = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (session) {
      router.push(defaultConfig.app.pages.home);
    } else {
      router.push('/dashboard');
    }
  });

  return <Spinner />;
}
