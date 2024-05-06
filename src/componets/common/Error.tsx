import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div>
			<p>Error</p>
			<Link to="/">
				Back to Main
			</Link>
		</div>
	);
};

export default Error;