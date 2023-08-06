import React from 'react';

import {SnackBarAlert} from './SnackBarAlert';

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export interface ErrorBoundaryState {
  errorMsg: string;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    errorMsg: ''
  };

  constructor(props: never) {
    super(props);
  }

  componentDidCatch(error: Error) {
    this.setState({errorMsg: `${error.name}: ${error.message}`});
  }

  render() {
    const {errorMsg} = this.state;
    const {children} = this.props;

    if (errorMsg) {
      return (
        <>
          {children}
          <SnackBarAlert message={errorMsg} severity="error" clear={() => this.setState({errorMsg: ''})} />
        </>
      );
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
