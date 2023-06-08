import * as React from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

interface NotificationsProps {
  count: number
  onNotify: () => void
}

export function Notifications(props: NotificationsProps) {
  const { count, onNotify } = props;

  return (
    <Box sx={{ flexGrow: 0, ml: 2 }}>
      <Tooltip title="Notifications">
        <Badge badgeContent={count} color="error">
          <NotificationsNoneOutlinedIcon onClick={onNotify} />
        </Badge>
      </Tooltip>
    </Box>
  );
}

export default Notifications;