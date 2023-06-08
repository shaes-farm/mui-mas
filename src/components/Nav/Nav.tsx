import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { NavRoutes, NavRoute } from './_types';

interface NavProps {
  routes: NavRoutes
  onNavigate: (route: NavRoute) => void
}

export function Nav(props: NavProps) {
  const { routes, onNavigate } = props;

  return (
    <List component="nav">
      {routes.primary.map((route: NavRoute) => (
        <ListItemButton key={route.slug} onClick={() => onNavigate(route)}>
          <ListItemIcon>
            {route.icon}
          </ListItemIcon>
          <ListItemText primary={route.label} />
        </ListItemButton>
        )
      )}
      {routes.secondary && <Divider sx={{ my: 1 }} />}
      {routes.secondary && routes.secondary.map((route) => (
          <ListItemButton key={route.slug} onClick={() => onNavigate(route)}>
            <ListItemIcon>
              {route.icon}
            </ListItemIcon>
            <ListItemText primary={route.label} />
          </ListItemButton>
        )
      )}
      {routes.tertiary && <Divider sx={{ my: 1 }} />}
      {routes.tertiary && routes.tertiary.map((route) => (
          <ListItemButton key={route.slug} onClick={() => onNavigate(route)}>
            <ListItemIcon>
              {route.icon}
            </ListItemIcon>
            <ListItemText primary={route.label} />
          </ListItemButton>
        )
      )}
    </List>
  );
}

export default Nav;
