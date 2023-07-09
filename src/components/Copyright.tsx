import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import type {SxProps, Theme} from '@mui/material';

interface CopyrightProps {
  holder: string
  year: number
  url: string
  sx?: SxProps<Theme>
}

export function Copyright(props: CopyrightProps) {
  const {holder, year, url, ...typoProps} = props;
  const currentYear = new Date().getFullYear();

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...typoProps}>
      {'Copyright © '}
      {year == currentYear ? year : `${year}-${currentYear}`}
      {' by '}
      <Link target='_blank' color="inherit" href={url}>
        {holder}
      </Link>
    </Typography>
  );
}

export default Copyright;