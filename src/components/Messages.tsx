import React from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

import {NavRoute, NavRouter} from './Nav';

export interface MessagesProps {
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
 * Messages component that combines a Mail icon with a tooltip and a badge showing a count of messages. Calls the router with the route when clicked.
 */
 export const Messages: React.FC<MessagesProps> = ({color, count, route, router}) => (
  <Box sx={{ flexGrow: 0, ml: 2 }}>
    <Tooltip title={route.label ?? "Messages"}>
      <Badge badgeContent={count ?? 0} color={color ?? "error"}>
        <MailOutlinedIcon data-testid="messages-icon" onClick={() => router(route)} />
      </Badge>
    </Tooltip>
  </Box>
);

export default Messages;
