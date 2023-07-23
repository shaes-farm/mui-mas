import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import type {AppConfig} from '.';
import AppBar from '../AppBar';
import Drawer from '../Drawer';
import {Nav, NavRoute, NavRouter, NavRoutes} from '../Nav';
import SearchInput from '../SearchInput';
import {useProfile} from '../../providers/Profile';

import {ProfileButton} from '../ProfileButton';
import NewItemsMenuButton from '../NewItemsMenuButton';

export interface AppShellProps {
  toolbar: NavRoutes;
  routes: NavRoutes;
  router: NavRouter;
  config: {
    app: AppConfig
  };
  children?: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({toolbar, router, routes, config, children}) => {
  const [open, setOpen] = React.useState<boolean>(true);
  const {profile} = useProfile();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              padding: 0,
              marginLeft: -3,
              marginRight: '2px',
              ...(open && { display: 'none' }),
            }}
          >
            <Image src={config.app.logo.contrast ?? config.app.logo.main} alt="Brand Logo" width={46} height={46} />
          </IconButton>
          {/* Search Input Form */}
          {toolbar.tertiary && toolbar.tertiary[0].slug === 'search-input' && <SearchInput route={toolbar.tertiary[0]} router={router} />}
          <Box sx={{ flexGrow: 1 }} />
          {/* Toolbar Icons / Routes */}
          {toolbar.primary.map((route: NavRoute) =>
            <IconButton key={route.slug} color="inherit" onClick={() => router(route)}>
              {route.icon}
            </IconButton>
          )}
          <NewItemsMenuButton routes={toolbar.tertiary ?? []} router={router} />
          <ProfileButton routes={toolbar.secondary ?? []} router={router} profile={profile} />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer}
            sx={{
              marginRight: '5px',
              ...(!open && { display: 'none' }),
            }}
          >
            <Image src={config.app.logo.main} alt="Brand Logo" width={46} height={46} />
          </IconButton>
          <IconButton aria-label="close drawer" onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <Nav routes={routes} router={router} />
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AppShell;
