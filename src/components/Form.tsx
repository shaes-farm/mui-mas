import React from 'react';
import Box from '@mui/material/Box';

export function Form(props: any) {
  const { children, ...formProps } = props;

  return (
    <Box component="form" {...formProps}>
      {children}
    </Box>
  );
}

export default Form;
