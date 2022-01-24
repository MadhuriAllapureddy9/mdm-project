import {  useRoutes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MeterMaster from './pages/MeterMaster';
import LoginPage from './pages/LoginPage';

const Router = () => {
	return useRoutes([
		{
			path: '/home',
			element: <HomePage />
		
		},
		{
			path: '/',
			element: <LoginPage />
		},
		{
			path: '/mm',
			element: <MeterMaster />
		}
	]);
};

export default Router;
