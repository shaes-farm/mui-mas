import React from 'react';
import {Typography} from '@mui/material';

export interface TitleProps {
  /**
   * The header variant to render.
   */
  variant?: "h1"|"h2"|"h3"|"h4"|"h5"|"h6"
  /**
   * Horizontal alignment of header, default is theme dependent.
   */
  align?: "left" | "right" | "center"
  children?: React.ReactNode
}

/**
 * A title component renders an H1 header.
 */
export const Title: React.FC<TitleProps> = (props: TitleProps) => {
  const { children, variant, ...rest } = props;
  return (
    <Typography component="h1" variant={variant ?? 'h4'} color="primary" gutterBottom {...rest}>
      {children}
    </Typography>
  );
};

/**
 * A sub-title component renders an H2 header.
 */
export const SubTitle: React.FC<TitleProps> = (props: TitleProps) => {
  const { children, variant, ...rest } = props;
  return (
    <Typography component="h2" variant={variant ?? 'h5'} color="primary" gutterBottom {...rest}>
      {children}
    </Typography>
  );
};

/**
 * A heading component renders an H3 header.
 */
export const Heading: React.FC<TitleProps> = (props: TitleProps) => {
  const { children, variant, ...rest } = props;
  return (
    <Typography component="h3" variant={variant ?? 'h6'} color="primary" gutterBottom {...rest}>
      {children}
    </Typography>
  );
};

export default Title;
