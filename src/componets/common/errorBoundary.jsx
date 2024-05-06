import { Component } from 'react';

import Error from './Error';

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <Error />;
		}
		return this.props.children;
	}
}