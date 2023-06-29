import React from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

interface MessagesProps {
  count?: number;
  color?: "default" | "error" | "primary" | "secondary" | "info" | "success" | "warning" | undefined;
}

export function Messages(props: MessagesProps) {
  const {count, color} = props;

  return (
    <Box sx={{ flexGrow: 0, ml: 2 }}>
      <Tooltip title="Messages">
        <Badge badgeContent={count ?? 0} color={color ?? "error"}>
          <MailOutlinedIcon />
        </Badge>
      </Tooltip>
    </Box>
  );
}

export default Messages;