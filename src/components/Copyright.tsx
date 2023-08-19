import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

export interface CopyrightProps {
  /**
   * The copyright holder.
   */
  holder: string
  /**
   * The URL of the copyright holder.
   */
   url: string
   /**
   * The year the copyright went into effect.
   */
  year: number
}

const CopyrightBase: React.FC<CopyrightProps> = ({holder, year, url, ...typoProps}) => {
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
};

/**
 * Display a copyright message formatted according to the standards of the United States.
 */
export const Copyright = styled(CopyrightBase)({});

export default Copyright;
