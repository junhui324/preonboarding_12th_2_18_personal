import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../../utils/token/Token';

const AuthRoute = () => {
	const isAuth = getToken();
	return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default AuthRoute;
