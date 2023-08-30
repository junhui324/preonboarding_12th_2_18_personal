import { Suspense, lazy } from 'react';
import { Global } from '@emotion/react';
import { globalStyles } from './utils/styles/GlobalStyles';
import { Routes, Route } from 'react-router-dom';

import ROUTES from './utils/constants/Routes';

//import Layout from './components/layout/Layout';
const MainPage = lazy(() => import('./pages/main/Main'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const IssueList = lazy(() => import('./pages/issueList'));
const IssueDetail = lazy(() => import('./pages/issueDetail'));

function App() {
	return (
		<>
			<Global styles={globalStyles} />

			<Suspense fallback="...Loading">
				<Routes>
					<Route path={ROUTES.MAIN} element={<MainPage />} />
					<Route path={ROUTES.ISSUELIST} element={<IssueList />} />
					<Route path={`${ROUTES.ISSUEDETAIL}:number`} element={<IssueDetail />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
