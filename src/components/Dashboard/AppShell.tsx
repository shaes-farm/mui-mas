import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AppBar from '../AppBar';
import Drawer from '../Drawer';
import {Nav, NavRoute, NavRoutes} from '../Nav';
import {ProfileButton} from './ProfileButton';
import NewItemsMenuButton from './NewItemsMenuButton';
import SearchInput from '../SearchInput';
import {useProfile} from '../../providers/Profile';
import type {AppConfig} from './_types';

interface AppShellProps {
  toolbar: NavRoutes
  routes: NavRoutes
  defaultRoute: NavRoute
  config: {
    app: AppConfig
  }
}

export function AppShell(props: AppShellProps ) {
  const {toolbar, routes, defaultRoute, config} = props;
  const [open, setOpen] = React.useState<boolean>(true);
  const [route, setRoute] = React.useState<NavRoute>(defaultRoute);
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
          {toolbar.tertiary && toolbar.tertiary[0].slug === 'search-input' && <SearchInput route={toolbar.tertiary[0]} router={setRoute} />}
          <Box sx={{ flexGrow: 1 }} />
          {/* Toolbar Icons / Routes */}
          {toolbar.primary.map((route: NavRoute) =>
            <IconButton key={route.slug} color="inherit" onClick={() => setRoute(route)}>
              {route.icon}
            </IconButton>
          )}
          <NewItemsMenuButton menu={toolbar.tertiary} router={setRoute} />
          <ProfileButton menu={toolbar.secondary} router={setRoute} profile={profile} />
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
        <Nav routes={routes} onNavigate={(route) => {
          setRoute(route);
        }} />
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
        {route.page}
      </Box>
    </Box>
  );
}

export default AppShell;
