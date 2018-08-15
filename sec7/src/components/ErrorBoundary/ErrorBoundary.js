import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

// Use error boundaries only where your app will fail during circumstances beyond your control
componentDidCatch = (error, info) => {
   this.setState({ hasError: true, errorMessage: error });
}
  render () {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
