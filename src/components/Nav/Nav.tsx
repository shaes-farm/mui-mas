import React from 'react';
import type {ListProps} from '@mui/material/List';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';
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
      {routes.map((route: NavRoute) => (
        route.slug.match(/^divider-/u) ?
          <Divider key={route.slug} sx={{my: 1}} /> :
          route.slug.match(/^header-/u) ?
            <ListSubheader key={route.slug} component="div" inset>
              {route.label}
            </ListSubheader> :
            <ListItemButton key={route.slug} onClick={() => router(route)}>
              <ListItemIcon>
                {route.icon}
              </ListItemIcon>
              <ListItemText primary={route.label} />
          </ListItemButton>
      ))}
    </List>
  );
};

export default Nav;
