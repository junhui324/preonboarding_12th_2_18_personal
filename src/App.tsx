import { Suspense, lazy } from 'react';
import { Global } from '@emotion/react';
import { globalStyles } from './utils/styles/GlobalStyles';
import { Routes, Route } from 'react-router-dom';

import ROUTES from './utils/constants/Routes';
import AuthRoute from './components/route/AuthRoute';
import PublicRoute from './components/route/PublicRoute';

import Layout from './components/layout/Layout';
const MainPage = lazy(() => import('./pages/main/Main'));
const SignUpPage = lazy(() => import('./pages/signUp/SignUp'));
const SignInPage = lazy(() => import('./pages/signIn/SignIn'));
const TodoPage = lazy(() => import('./pages/todo/Todo'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
	return (
		<>
			<Global styles={globalStyles} />
			<Layout>
				<Suspense fallback="...Loading">
					<Routes>
						<Route path={ROUTES.MAIN} element={<MainPage />} />
						<Route element={<PublicRoute />}>
							<Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
							<Route path={ROUTES.SIGNIN} element={<SignInPage />} />
						</Route>
						<Route element={<AuthRoute />}>
							<Route path={ROUTES.TODO} element={<TodoPage />} />
						</Route>
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Suspense>
			</Layout>
		</>
	);
}

export default App;
