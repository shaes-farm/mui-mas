import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface CopyrightProps {
  name: string;
  year: number;
  url: string;
};

export function Copyright(props: CopyrightProps) {
  const {name, year, url} = props;
  const currentYear = new Date().getFullYear();

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {year == currentYear ? year : `${year}-${currentYear}`}
      {' by '}
      <Link target='_blank' color="inherit" href={url}>
        {name}
      </Link>
    </Typography>
  );
}

export default Copyright;