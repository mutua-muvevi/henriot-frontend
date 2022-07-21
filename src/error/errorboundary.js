import React, { Component } from 'react';
import CatchErrors from "../components/error/catcherrors";

class ErrorBoundary extends Component {

	constructor(props){
		super(props)

		this.state = { 
			error: null,
			errorInfo: null 
		};
	}

	componentDidCatch(error, errorInfo) {
		this.setState({
			error: error,
			errorInfo: errorInfo,
		});
	}

	// Log error info somewhere

	render() {
		if (this.state.errorInfo) {
			return <CatchErrors error={this.state.error} errorInfo={this.state.errorInfo}/>
		}
		
		return this.props.children;
	}
}

export default ErrorBoundary;