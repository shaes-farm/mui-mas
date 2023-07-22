import React from 'react';
import type {ListProps} from '@mui/material/List';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import type {NavRoute, NavRoutes, NavRouter} from './_types';

export interface NavProps extends ListProps {
  /**
   * An array of routes rendered as a nav element.
   */
   routes: NavRoutes;
  /**
   * The router used to perform the navigation.
   */
  router: NavRouter;
}

/**
 * Renders a vertical nav element as primary, secondary, and tertiary lists separated by dividers.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav
 */
export const Nav: React.FC<NavProps> = ({routes, router, ...listProps}) => {
  return (
    <List component="nav" {...listProps}>
      {routes.primary.map((route: NavRoute) => (
        <ListItemButton key={route.slug} onClick={() => router(route)}>
          <ListItemIcon>
            {route.icon}
          </ListItemIcon>
          <ListItemText primary={route.label} />
        </ListItemButton>
        )
      )}
      {routes.secondary && <Divider sx={{ my: 1 }} />}
      {routes.secondary && routes.secondary.map((route) => (
          <ListItemButton key={route.slug} onClick={() => router(route)}>
            <ListItemIcon>
              {route.icon}
            </ListItemIcon>
            <ListItemText primary={route.label} />
          </ListItemButton>
        )
      )}
      {routes.tertiary && <Divider sx={{ my: 1 }} />}
      {routes.tertiary && routes.tertiary.map((route) => (
          <ListItemButton key={route.slug} onClick={() => router(route)}>
            <ListItemIcon>
              {route.icon}
            </ListItemIcon>
            <ListItemText primary={route.label} />
          </ListItemButton>
        )
      )}
    </List>
  );
};

export default Nav;
