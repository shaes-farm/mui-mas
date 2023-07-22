import React from 'react';
import { AlertColor } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import Alert from './Alert';

export interface SnackBarAlertProps {
  message: string
  severity?: AlertColor
  clear: () => void
  autoHide?: number
}

export const SnackBarAlert: React.FC<SnackBarAlertProps> = ({ message, severity = 'error', clear, autoHide = 6000 }) => {
  const handleClose = (/* event?: React.SyntheticEvent | Event, reason?: string */) => {
    clear();
  }

  return (
    <Snackbar
      open={message.length ? true : false}
      autoHideDuration={autoHide}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarAlert;