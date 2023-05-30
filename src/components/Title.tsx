import React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
  variant?: "h1"|"h2"|"h3"|"h4"|"h5"|"h6"
  align?: string
  children?: React.ReactNode
}

export function Title(props: TitleProps) {
  const { children, variant, ...rest } = props;
  return (
    /* @ts-ignore */
    <Typography component="h1" variant={variant ?? 'h4'} color="primary" gutterBottom {...rest}>
      {children}
    </Typography>
  );
}

export function SubTitle(props: TitleProps) {
  const { children, variant, ...rest } = props;
  return (
    /* @ts-ignore */
    <Typography component="h2" variant={variant ?? 'h5'} color="primary" gutterBottom {...rest}>
      {children}
    </Typography>
  );
}

export function Heading(props: TitleProps) {
  const { children, variant, ...rest } = props;
  return (
    /* @ts-ignore */
    <Typography component="h3" variant={variant ?? 'h6'} color="primary" gutterBottom {...rest}>
      {children}
    </Typography>
  );
}

export default Title;