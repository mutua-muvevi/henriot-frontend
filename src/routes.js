import { Navigate, useRoutes } from 'react-router-dom';

//authentication pages
import AuthLayout from "./layout/auth/authlayout";
import Register from "./pages/auth/register/register";
import Login from "./pages/auth/login/login";
import ForgotPassword from "./pages/auth/forgotpassword/forgotpassword";
import ResetPassword from "./pages/auth/resetpassword/resetpassword";
import Setup from "./pages/auth/setup/setup"

//admin pages
import OtpLogin from "./pages/auth/otplogin/otplogin";
import Layout from "./layout/app/layout";
import Overview from "./pages/app/overview/overview";
import Account from "./pages/app/account/account";
import Approach from "./pages/app/approach/approach";
import Banking from "./pages/app/banking/banking";
import CryptoTransfers from "./pages/app/cryptotransfers/cryptotransfers";
import Documentation from "./pages/app/documentation/documentation";
import HGVault from "./pages/app/HGvault/hgvault";
import Order from "./pages/app/order/order";
import Position from "./pages/app/positions/positions";
import ResearchCenter from "./pages/app/researchcenter/researchcenter";
import About from "./pages/app/about/about";


export default function Router() {
  return useRoutes([
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{ path: 'register', element: <Register /> },
			{ path: 'setup', element: <Setup /> },
			{ path: 'login', element: <Login /> },
			{ path: 'login/otp', element: <OtpLogin /> },
			{ path: 'forgotpassword', element: <ForgotPassword /> },
			{ path: 'resetpassword/:resetToken', element: <ResetPassword /> },
		],
	},
	{
		path: '/admin',
		element: <Layout />,
		children: [
			{ path: 'dashboard', element: <Overview /> },
			{ path: 'about', element: <About /> },
			{ path: 'account', element: <Account /> },
			{ path: 'approach', element: <Approach /> },
			{ path: 'banking', element: <Banking /> },
			{ path: 'crypto-transfers', element: <CryptoTransfers /> },
			{ path: 'documentation', element: <Documentation /> },
			{ path: 'hg-vault', element: <HGVault /> },
			{ path: 'order', element: <Order /> },
			{ path: 'positions', element: <Position /> },
			{ path: 'research-center', element: <ResearchCenter /> },
		],
	},
	//{
	//  path: '/',
	//  element: <LogoOnlyLayout />,
	//  children: [
	//	{ path: '/', element: <Navigate to="/dashboard/app" /> },
	//	{ path: '404', element: <NotFound /> },
	//	{ path: '*', element: <Navigate to="/404" /> },
	//  ],
	//},
	//{
	//  path: '*',
	//  element: <Navigate to="/404" replace />,
	//},
  ]);
}
