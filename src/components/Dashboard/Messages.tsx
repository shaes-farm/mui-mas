import * as React from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

export function Messages() {
  return (
    <Box sx={{ flexGrow: 0, ml: 2 }}>
      <Tooltip title="Messages">
        <Badge badgeContent={17} color="error">
          <MailOutlinedIcon />
        </Badge>
      </Tooltip>
    </Box>
  );
}

export default Messages;