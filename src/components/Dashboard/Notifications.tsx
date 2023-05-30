import * as React from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export function Notifications() {
  return (
    <Box sx={{ flexGrow: 0, ml: 2 }}>
      <Tooltip title="Notifications">
        <Badge badgeContent={4} color="error">
          <NotificationsNoneOutlinedIcon />
        </Badge>
      </Tooltip>
    </Box>
  );
}