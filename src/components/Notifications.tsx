import React from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import {NavRoute, NavRouter} from './Nav';

export interface NotificationsProps {
  /**
   * Count of notifications received.
   */
  count: number;
  /**
   * Route to navigate to when icons is clicked.
   */
  route: NavRoute;
  /**
   * The router used to perform the navigation.
   */
  router: NavRouter;
}

/**
 * Notifications component that combines an icon with a tooltip and a badge showing a count of notifications.
 */
export const Notifications: React.FC<NotificationsProps> = ({count, route, router}) => (
  <Box sx={{ flexGrow: 0, ml: 2 }}>
    <Tooltip title={route.label}>
      <Badge badgeContent={count} color="error">
        <NotificationsNoneOutlinedIcon onClick={() => router(route)} />
      </Badge>
    </Tooltip>
  </Box>
);

export default Notifications;
