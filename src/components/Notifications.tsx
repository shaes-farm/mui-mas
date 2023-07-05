import * as React from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {NavRoute, NavRouter} from './Nav';

interface NotificationsProps {
  count: number;
  route: NavRoute;
  router: NavRouter;
}

export function Notifications(props: NotificationsProps) {
  const { count, route, router } = props;

  return (
    <Box sx={{ flexGrow: 0, ml: 2 }}>
      <Tooltip title={route.label}>
        <Badge badgeContent={count} color="error">
          <NotificationsNoneOutlinedIcon onClick={() => router(route)} />
        </Badge>
      </Tooltip>
    </Box>
  );
}

export default Notifications;