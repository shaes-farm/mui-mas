import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function Spinner() {
  return (
    <Box sx={{
      display: 'flex',
      height: '100vh'
    }}>
      <CircularProgress />
    </Box>
  );
}

export default Spinner;