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
import SingleItem from "./pages/app/singleItem/singleitem";
import BankingDashboard from "./pages/app/banking/overview/overview";
import BankingCurrentAccount from "./pages/app/banking/account/account";
import BankingTeamDeposit from "./pages/app/banking/deposit/deposit";
import BankingCryptoAccount from "./pages/app/banking/crypto/crypto";
import BankingDebitCard from "./pages/app/banking/card/card";
import TradingPlatformPage from "./pages/app/trading/trading/trading";
import TradingInvestmentPlatform from "./pages/app/trading/investment/investment";
import TradingBuySell from "./pages/app/trading/buysell/buysell";
import WealthFund from "./pages/app/wealth/fund/fund";
import WealthPortfolio from "./pages/app/wealth/portfolio/portfolio";
import WealthResearch from "./pages/app/wealth/research/research";
import FeeGuide from "./pages/app/guide/fee/fee";
import UserGuide from "./pages/app/guide/user/user";
import ContactUs from "./pages/app/guide/contact/contact";


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
			{
				path: 'banking',
				element: <Banking />,
				children: [
					{ path: 'dashboard', element: <BankingDashboard /> },
					{ path: 'current-account', element: <BankingCurrentAccount /> },
					{ path: 'team-deposit', element: <BankingTeamDeposit /> },
					{ path: 'crypto-account', element: <BankingCryptoAccount /> },
					{ path: 'debit-card', element: <BankingDebitCard /> },
				]
			},
			{
				path: 'trading',
				element: <BankingDashboard />,
				children: [
					{ path: 'trading-platform', element: <TradingPlatformPage /> },
					{ path: 'investment-platform', element: <TradingInvestmentPlatform /> },
					{ path: 'quick-buy-sell', element: <TradingBuySell /> },
				]
			},
			{
				path: 'wealth-management',
				element: <SingleItem />,
				children: [
					{ path: 'fund', element: <WealthFund /> },
					{ path: 'portfolio', element: <WealthPortfolio /> },
					{ path: 'research', element: <WealthResearch /> },
				]
			},
			{
				path: 'guide',
				element: <Position />,
				children: [
					{ path: 'general-fee', element: <FeeGuide /> },
					{ path: 'user-guide', element: <UserGuide /> },
					{ path: 'contact-us', element: <ContactUs /> },
				]
			},
			{ path: 'singleitem', element: <SingleItem /> },
			{ path: 'about', element: <About /> },
			{ path: 'account', element: <Account /> },
			{ path: 'approach', element: <Approach /> },
			{ path: 'crypto-transfers', element: <CryptoTransfers /> },
			{ path: 'documentation', element: <Documentation /> },
			{ path: 'hg-vault', element: <HGVault /> },
			{ path: 'order', element: <Order /> },
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
