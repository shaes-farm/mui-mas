import React from 'react';
import {styled} from '@mui/material/styles';

interface FormProps {
  accept?: string
  acceptCharset?: string
  autocapitalize?: "none" | "sentences" | "words" | "characters"
  autoComplete?: "off" | "on"
  name?: string
  rel?: string
  action?: string
  enctype?: string
  method?: "get" | "post" | "dialog"
  novalidate?: boolean
  target?: "_self" | "_blank" | "_parent" | "_top"
  children?: React.ReactNode
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

export const FormBase = (props: FormProps) => {
  const { children, ...formProps } = props;

  return (
    <form {...formProps}>
      {children}
    </form>
  );
}

export const Form = styled(FormBase)({});

export default Form;
