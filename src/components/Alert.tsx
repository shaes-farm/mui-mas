import React from 'react';
import MuiAlert from '@mui/material/Alert';
import type {AlertProps} from '@mui/material/Alert';

/**
 * An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task. Pre-styled with an elevation of 6 and a filled variant.
 */
export const Alert: React.FC<AlertProps> = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

Alert.displayName = 'Alert';

export default Alert;
