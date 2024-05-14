import React from 'react';
import { Navigate } from 'react-router-dom';
import { getDataFromLS } from '../../utils/localStorage';

type Props = {
  children?: React.ReactNode;
};

const PrivateRoute = ({ children } : Props) => {
	const isAuth = getDataFromLS('isAuth', '""');

	if (!isAuth) {
		return <Navigate to="/loginPage" />;
	}

	return <>children</>;
};

export default PrivateRoute;