import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../../utils/token/Token';

const PublicRoute = () => {
	const isAuth = getToken();
	return !isAuth ? <Outlet /> : <Navigate to="/todo" />;
};

export default PublicRoute;
