import React from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import {NavRoute, NavRouter} from './Nav';

export interface NotificationsProps {
  /**
   * Badge color.
   */
   color?: "default" | "error" | "primary" | "secondary" | "info" | "success" | "warning" | undefined;
  /**
   * Count of notifications received.
   */
  count?: number;
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
 * Notifications component that combines a Bell icon with a tooltip and a badge showing a count of notifications.
 */
export const Notifications: React.FC<NotificationsProps> = ({color, count, route, router}) => (
  <Box sx={{ flexGrow: 0, ml: 2 }}>
    <Tooltip title={route.label ?? "Notifications"}>
      <Badge badgeContent={count ?? 0} color={color ?? "error"}>
        <NotificationsNoneOutlinedIcon data-testid="notifications-icon" onClick={() => router(route)} />
      </Badge>
    </Tooltip>
  </Box>
);

export default Notifications;
