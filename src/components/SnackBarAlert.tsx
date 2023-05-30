import React from 'react';
import { AlertColor } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import Alert from './Alert';

interface SnackBarAlertProps {
  message: string|JSX.Element
  severity?: AlertColor
  clear: () => void
  autoHide?: number
}

export function SnackBarAlert(props: SnackBarAlertProps) {
  const { message, severity = 'error', clear, autoHide = 6000 } = props;

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    clear();
  }

  return (
    <Snackbar
      open={message ? true : false}
      autoHideDuration={autoHide}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackBarAlert;