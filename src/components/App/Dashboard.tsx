import React, {useState} from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

import type {AppConfig} from './_types';
import {AppBar} from '../AppBar';
import {Drawer} from '../Drawer';
import {Nav, NavRoute, NavRouter, NavRoutes} from '../Nav';

export interface DashboardProps {
  /**
   * Toolbar routes. The primary routes render as horizontal menu items, secondary
   * routes as user profile menu, and tertiary routes as an add items menu.
   */
  toolbar: NavRoutes;
  /**
   * Main navigation routes render in the sidebar as primary, secondary, and tertiary
   * menu items separated by dividers.
   */
  routes: NavRoutes;
  /**
   * The router used to perform the navigation.
   */
  router: NavRouter;
  /**
   * Application configuration.
   */
  config: {
    app: AppConfig;
  };
  /**
   * Determines if the drawer is open or closed by default.
   */
  drawerOpen?: boolean;
  /**
   * A React node (an element, a string, a number, a portal, an empty node like null, undefined and booleans, or an array of other React nodes). Specifies the content inside the component. When you use JSX, you will usually specify the children prop implicitly by nesting tags like <div><span /></div>.
   * @see https://react.dev/reference/react-dom/components/common#common-props
   */
  children?: React.ReactNode;
}

/**
 * The Dashboard component provides an AppBar containing a Toolbar across the
 * top of the window, and a collapsible drawer containing a navigation sidebar.
 */
export const Dashboard: React.FC<DashboardProps> = ({toolbar, routes, router, config, drawerOpen = true, children}) => {
  const [open, setOpen] = useState<boolean>(drawerOpen);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Head>
        <title>{config.app.title}</title>
        <meta name="description" content={config.app.description} />
        <link rel="icon" href={config.app.icon} />
      </Head>
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
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          { /* Toolbar Icons / Routes */
            toolbar.map((route: NavRoute) =>
              <IconButton data-testid={`${route.slug}-icon`} key={route.slug} color="inherit" onClick={() => router(route)}>
                {route.icon}
              </IconButton>
            )
          }
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
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Dashboard;
