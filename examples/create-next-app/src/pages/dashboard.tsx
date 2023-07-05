import React from 'react';
import {AppShell} from '../../../../src/components/Dashboard';
import {mainRoutes, toolBarRoutes} from '@/utils/routes';

const config = {
  app: {
    title: 'Create Next App',
    description: 'An example of the MUI Mas package in Next.js',
    icon: 'foo.gif',
    logo: {
      main: 'main-logo.png',
      contrast: 'contrast-logo.png',
    },
  }
}

export default function Dashboard() {
  return (
    <AppShell
      toolbar={toolBarRoutes}
      routes={mainRoutes}
      defaultRoute={mainRoutes.primary[0]}
      config={config}
    />
  );
}
