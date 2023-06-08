import { useRoutes } from "react-router-dom";

//authentication pages
import AuthLayout from "./layout/auth/authlayout";
import Register from "./pages/auth/register/register";
import Login from "./pages/auth/login/login";
import ForgotPassword from "./pages/auth/forgotpassword/forgotpassword";
import ResetPassword from "./pages/auth/resetpassword/resetpassword";
import Setup from "./pages/auth/setup/setup";

//admin pages
import OtpLogin from "./pages/auth/otplogin/otplogin";
import Layout from "./layout/app/layout";
import Banking from "./pages/app/banking/banking";
import BankingDashboard from "./pages/app/banking/home/home";
import BankingCurrentAccount from "./pages/app/banking/account/account";
import BankingTeamDeposit from "./pages/app/banking/deposit/deposit";
import BankingCryptoAccount from "./pages/app/banking/crypto/crypto";
import BankingDebitCard from "./pages/app/banking/debit/debit";
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
import BankingBeneficiaries from "./pages/app/banking/account/beneficiaries/beneficiaries";
import BankingInternalTransfer from "./pages/app/banking/account/internal/transfer";
import BankingSwiftTransfer from "./pages/app/banking/account/swift/transfer";
import BankingWithdrawHistory from "./pages/app/banking/account/withdraw/history";
import BankingCurrentAccountDetails from "./pages/app/banking/account/details/details";
import CryptoTransfers from "./pages/app/banking/crypto/transfers/transfers";
import CryptoPortfolio from "./pages/app/banking/crypto/portfolio/portfolio";
import CryptoHistory from "./pages/app/banking/crypto/history/history";
import DebitDetails from "./pages/app/banking/debit/details/details";
import DebitHistory from "./pages/app/banking/debit/history/history";
import DepositTermHome from "./pages/app/banking/deposit/home/home";
import DepositTermMain from "./pages/app/banking/deposit/main/main";
import TermDepositSummary from "./pages/app/banking/deposit/main/sections/summary/summary";
import TermDepositLend from "./pages/app/banking/deposit/main/sections/lend/lend";
import TermDepositBorrow from "./pages/app/banking/deposit/main/sections/borrow/borrow";
import TermDepositManual from "./pages/app/banking/deposit/main/sections/manual/manual";
import TermDepositTransaction from "./pages/app/banking/deposit/main/sections/transaction/transaction";
import Settings from "./pages/app/settings/settings";
import Profile from "./pages/app/profile/profile";
import TermDepositBorrowUnSecured from "./pages/app/banking/deposit/main/sections/borrow/sections/unsecured/unsecured";
import TermDepositBorrowSecured from "./pages/app/banking/deposit/main/sections/borrow/sections/secured/secured";
import AdminLayout from "./layout/app/admin";
import AdminHome from "./pages/admin/home/home";
import AdminTransaction from "./pages/admin/transactions/transactions";

export default function Router() {
	return useRoutes([
		{
			path: "/register",
			element: <Register />,
		},
		{
			path: "login",
			element: <Login />,
		},
		{
			path: "/auth",
			element: <AuthLayout />,
			children: [
				{ path: "forgotpassword", element: <ForgotPassword /> },
				{ path: "resetpassword/:resetToken", element: <ResetPassword /> },
			],
		},
		{
			path: "/admin",
			element: <Layout />,
			children: [
				{
					path: "banking",
					element: <Banking />,
					children: [
						{ path: "dashboard", element: <BankingDashboard /> },
						{
							path: "current-account",
							element: <BankingCurrentAccount />,
							children: [
								{ path: "beneficiaries", element: <BankingBeneficiaries /> },
								{ path: "details", element: <BankingCurrentAccountDetails /> },
								{ path: "internal-transfer", element: <BankingInternalTransfer /> },
								{ path: "swift-transfer", element: <BankingSwiftTransfer /> },
								{ path: "withdraw-history", element: <BankingWithdrawHistory /> },
							],
						},
						{
							path: "term-deposit",
							element: <BankingTeamDeposit />,
							children: [
								{ path: "overview", element: <DepositTermHome /> },
								{
									path: "main",
									element: <DepositTermMain />,
									children: [
										{ path: "summary", element: <TermDepositSummary /> },
										{ path: "lend", element: <TermDepositLend /> },
										{ path: "transaction", element: <TermDepositTransaction /> },
										{ path: "manual", element: <TermDepositManual /> },
										{
											path: "borrow",
											element: <TermDepositBorrow />,
											children: [
												{ path: "unsecured", element: <TermDepositBorrowUnSecured /> },
												{ path: "secured", element: <TermDepositBorrowSecured /> },
											],
										},
									],
								},
							],
						},
						{
							path: "crypto-account",
							element: <BankingCryptoAccount />,
							children: [
								{ path: "history", element: <CryptoHistory /> },
								{ path: "portfolio", element: <CryptoPortfolio /> },
								{ path: "transfers", element: <CryptoTransfers /> },
							],
						},
						{
							path: "debit-card",
							element: <BankingDebitCard />,
							children: [
								{ path: "details", element: <DebitDetails /> },
								{ path: "history", element: <DebitHistory /> },
							],
						},
						{ path: "home", element: <BankingHome /> },
					],
				},
				{
					path: "trading",
					element: <Trading />,
					children: [
						{ path: "trading-platform", element: <TradingPlatformPage /> },
						{ path: "investment-platform", element: <TradingInvestmentPlatform /> },
						{ path: "quick-buy-sell", element: <TradingBuySell /> },
					],
				},
				{
					path: "wealth-management",
					element: <WealthManagement />,
					children: [
						{
							path: "fund",
							element: <WealthFund />,
							children: [
								{ path: "overview", element: <FundsHome /> },
								{ path: "details", element: <FundsDetails /> },
								{ path: "reports", element: <FundsReport /> },
							],
						},
						{ path: "portfolio", element: <WealthPortfolio /> },
						{ path: "research", element: <WealthResearch /> },
					],
				},
				{
					path: "guide",
					element: <Guide />,
					children: [
						{ path: "general-fee", element: <FeeGuide /> },
						{ path: "user-guide", element: <UserGuide /> },
						{ path: "contact-us", element: <ContactUs /> },
					],
				},
				{
					path: "settings",
					element: <Settings />,
				},
				{
					path: "profile",
					element: <Profile />,
				},
			],
		},
		{
			path: "/super-admin",
			element: <AdminLayout />,
			children: [
				{ path: "home", element: <AdminHome /> },
				{ path: "transactions", element: <AdminTransaction /> },
			],
		},
	]);
}
