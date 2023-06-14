import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            // error: null,
            // errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo){
        console.log('error=>', error);
        console.log('errorInfo=>', errorInfo);
        // this.setState({hasError: true, error:error, errorInfo:errorInfo})
        this.setState({hasError: true})
        // write them to a log file, send a msg to support team
    }

    render(){
        if(this.state.hasError){
            return (
                <div>
                    <h3>Oops. An error has occured.</h3>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary