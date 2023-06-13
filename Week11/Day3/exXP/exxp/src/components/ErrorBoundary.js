import React from "react";
// import BuggyCounter from "./ErrorBoundary";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
        hasError: false,
        error: null,
        errorInfo: null,
    };
  }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

  componentDidCatch(error, errorInfo) {
    console.log("error=>", error);
    console.log("errorInfo=>", errorInfo);
    this.setState({hasError: true, error: error, errorInfo: errorInfo});
    // this.setState({ hasError: true });
    // errorService.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
            <h3>Something went wrong</h3>
            <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error && this.state.error.toString()}
            <br />
                {this.state.errorInfo.componentStack}
            </details>
          {/* <h4>{this.state.error.toString()}</h4> */}
          {/* <h4>{this.state.error.message}</h4> */}
          {/* <h4>{this.state.errorInfo}</h4> */}

          {/* <BuggyCounter /> */}
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
