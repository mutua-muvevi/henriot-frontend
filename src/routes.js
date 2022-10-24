import { useRoutes } from 'react-router-dom';

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
import Banking from "./pages/app/banking/banking";
import BankingDashboard from "./pages/app/banking/home/home";
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
import BankingHome from "./pages/app/banking/home/home";
import Trading from "./pages/app/trading/trading";
import WealthManagement from "./pages/app/wealth/wealth";
import Guide from "./pages/app/guide/guide";
import FundsReport from "./pages/app/wealth/fund/reports/reports";
import FundsDetails from "./pages/app/wealth/fund/details/details";
import FundsHome from "./pages/app/wealth/fund/home/home";


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
					{ path: 'home', element: <BankingHome /> },
				]
			},
			{
				path: 'trading',
				element: <Trading />,
				children: [
					{ path: 'trading-platform', element: <TradingPlatformPage /> },
					{ path: 'investment-platform', element: <TradingInvestmentPlatform /> },
					{ path: 'quick-buy-sell', element: <TradingBuySell /> },
				]
			},
			{
				path: 'wealth-management',
				element: <WealthManagement />,
				children: [
					{
						path: 'fund',
						element: <WealthFund />,
						children: [
							{ path: 'overview', element: <FundsHome /> },
							{ path: 'details', element: <FundsDetails /> },
							{ path: 'reports', element: <FundsReport /> },
						]
					},
					{ path: 'portfolio', element: <WealthPortfolio /> },
					{ path: 'research', element: <WealthResearch /> },
				]
			},
			{
				path: 'guide',
				element: <Guide />,
				children: [
					{ path: 'general-fee', element: <FeeGuide /> },
					{ path: 'user-guide', element: <UserGuide /> },
					{ path: 'contact-us', element: <ContactUs /> },
				]
			}
		],
	},
  ]);
}
