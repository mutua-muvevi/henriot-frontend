// component
import {
	FaHome,
	FaCoins,
	FaBookMedical,
	FaCommentDollar,
	FaDollarSign,
	FaRegMoneyBillAlt,
	FaMoneyCheckAlt,
	FaBook,
} from "react-icons/fa";

import {
	BsFillFileEarmarkBarGraphFill,
	BsFillChatRightQuoteFill,
	BsFillCartCheckFill,
	BsFillCreditCard2FrontFill,
	BsBank2,
	BsCurrencyBitcoin,
} from "react-icons/bs";

// ----------------------------------------------------------------------

const sx = {
	fontSize: "inherit",
}

export const bankingSection = {
	title: "Banking",
	list: [
		{
			title: "Dashboard",
			path: "/admin/banking/dashboard",
			icon: <FaHome style={sx} />,
			//children: [
			//	{}
			//],
		},
		{
			title: "Current Account",
			path: "/admin/banking/current-account",
			icon: <BsBank2 style={sx} />,
			//children: [
			//	{}
			//],
		},
		{
			title: "Team Deposit",
			path: "/admin/banking/team-deposit",
			icon: <FaRegMoneyBillAlt style={sx} />,
			//children: [
			//	{}
			//],
		},
		{
			title: "Crypto Account",
			path: "/admin/banking/crypto-account",
			icon: <BsCurrencyBitcoin style={sx} />,
			children: [
				{
					title: "history",
					path:"/admin/banking/crypto-account/history"
				},
				{
					title: "transfers",
					path:"/admin/banking/crypto-account/transfers"
				},
				{
					title: "portfolio",
					path:"/admin/banking/crypto-account/portfolio"
				},
			],
		},
		{
			title: "Debit Card",
			path: "/admin/banking/debit-card",
			icon: <BsFillCreditCard2FrontFill style={sx} />,
			children: [
				{
					title: "details",
					path:"/admin/banking/debit-card/details"
				},
				{
					title: "history",
					path:"/admin/banking/debit-card/history"
				},
			],
		},
	]
}

export const tradingSection = {
	title: "Trading",
	list: [			
		{
			title: "Trading Platform",
			path: "/admin/trading/trading-platform",
			icon: <FaCommentDollar style={sx} />,
			//children: [
			//	{}
			//],
		},
		{
			title: "Investment Platform",
			path: "/admin/trading/investment-platform",
			icon: <FaDollarSign style={sx} />,
			//children: [
			//	{}
			//],
		},
		{
			title: "Quick Buy/Sell",
			path: "/admin/trading/quick-buy-sell",
			icon: <BsFillCartCheckFill style={sx} />,
			//children: [
			//	{}
			//],
		},
	]
}

export const wealthManagementSection = {
	title: "Wealth Management",
	list: [			
		{
			title: "Funds",
			path: "/admin/wealth-management/fund",
			icon: <FaCoins style={sx} />,
			children: [
				{ title: "Overview", path: "/admin/wealth-management/fund/overview", icon: <FaCoins style={sx} /> },
				{ title: "Reports", path: "/admin/wealth-management/fund/reports", icon: <FaCoins style={sx} /> },
			],
		},
		{
			title: "Portfolio",
			path: "/admin/wealth-management/portfolio",
			icon: <BsFillFileEarmarkBarGraphFill style={sx} />,
			//children: [
			//	{}
			//],
		},
		{
			title: "Research",
			path: "/admin/wealth-management/research",
			icon: <FaBook style={sx} />,
			//children: [
			//	{}
			//],
		},
	]
}

export const guideSection = {
	title: "Guide",
	list: [			
		{
			title: "Fee",
			path: "/admin/guide/general-fee",
			icon: <FaMoneyCheckAlt style={sx} />,
			//children: [
			//	{}
			//],
		},
		{
			title: "User Guide",
			path: "/admin/guide/user-guide",
			icon: <FaBookMedical style={sx} />,
			//children: [
			//	{}
			//],
		},
		{
			title: "Contact Us",
			path: "/admin/guide/contact-us",
			icon: <BsFillChatRightQuoteFill style={sx} />,
			//children: [
			//	{}
			//],
		},
	]
}
