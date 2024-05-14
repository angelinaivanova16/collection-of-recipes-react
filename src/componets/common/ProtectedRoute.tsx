import { Navigate } from 'react-router-dom';
import { getDataFromLS } from '../../utils/localStorage';
import { ReactElement } from "react"

type Props = {
	children: ReactElement;
};

const PrivateRoute = ({ children } : Props) => {
	const isAuth = getDataFromLS('isAuth', '""');

	if (!isAuth) {
		return <Navigate to="/loginPage" />;
	}

	return <div>{children}</div>;
};

export default PrivateRoute;