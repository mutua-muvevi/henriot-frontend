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
			icon: "mingcute:settings-2-fill",
			//children: [
			//	{}
			//],
		},
		// {
		// 	title: "Current Account",
		// 	path: "/admin/banking/current-account",
		// 	icon: "mingcute:settings-2-fill",
		// 	children: [
		// 		{
		// 			title: "details",
		// 			path:"/admin/banking/current-account/details",
		// 			icon: "mingcute:settings-2-fill",
		// 		},
		// 		{
		// 			title: "beneficiaries",
		// 			path:"/admin/banking/current-account/beneficiaries",
		// 			icon: "mingcute:settings-2-fill",
		// 		},
		// 		{
		// 			title: "internal transfer",
		// 			path:"/admin/banking/current-account/internal-transfer",
		// 			icon: "mingcute:settings-2-fill",
		// 		},
		// 		{
		// 			title: "swift-transfer",
		// 			path:"/admin/banking/current-account/swift-transfer",
		// 			icon: "mingcute:settings-2-fill",
		// 		},
		// 		{
		// 			title: "withdraw history",
		// 			path:"/admin/banking/current-account/withdraw-history",
		// 			icon: "mingcute:settings-2-fill",
		// 		},
		// 	],
		// },
		{
			title: "Term Deposit",
			path: "/admin/banking/team-deposit",
			icon: "mingcute:settings-2-fill",
			children: [
				{
					title: "overview",
					path:"/admin/banking/term-deposit/overview",
					icon: "mingcute:settings-2-fill",
				},
				{
					title: "main",
					path:"/admin/banking/term-deposit/main/summary",
					icon: "mingcute:settings-2-fill",
				},
			],
		},
		{
			title: "Crypto Account",
			path: "/admin/banking/crypto-account",
			icon: "mingcute:settings-2-fill",
			children: [
				{
					title: "history",
					path:"/admin/banking/crypto-account/history",
					icon: "mingcute:settings-2-fill",
				},
				{
					title: "transfers",
					path:"/admin/banking/crypto-account/transfers",
					icon: "mingcute:settings-2-fill",
				},
				{
					title: "portfolio",
					path:"/admin/banking/crypto-account/portfolio",
					icon: "mingcute:settings-2-fill",
				},
			],
		},
		{
			title: "Debit Card",
			path: "/admin/banking/debit-card",
			icon: "mingcute:settings-2-fill",
			children: [
				{
					title: "details",
					path:"/admin/banking/debit-card/details",
					icon: "mingcute:settings-2-fill",
				},
				{
					title: "history",
					path:"/admin/banking/debit-card/history",
					icon: "mingcute:settings-2-fill",
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
			path: "/admin/trading/home",
			icon: "fluent-mdl2:market",
			//children: [
			//	{}
			//],
		},
		{
			title: "Accounts",
			path: "/admin/trading/trading-platform",
			icon: "fontisto:wallet",
			children: [
				{
					title: "Positions",
					path: "/admin/trading/positions",
					nestedIcon: "game-icons:pie-chart",
					//children: [
					//	{}
					//],
				},
				{
					title: "Orders",
					path: "/admin/trading/orders",
					nestedIcon: "material-symbols:order-approve",
					//children: [
					//	{}
					//],
				},
				{
					title: "Activities",
					path: "/admin/trading/activities",
					nestedIcon: "mdi:timeline-clock",
					//children: [
					//	{}
					//],
				},
				{
					title: "Balances",
					path: "/admin/trading/balances",
					nestedIcon: "fluent-mdl2:table-group",
					//children: [
					//	{}
					//],
				},
				{
					title: "Configure",
					path: "/admin/trading/configure",
					nestedIcon: "mingcute:settings-2-fill",
					//children: [
					//	{}
					//],
				},
			],
		},
	]
}

export const wealthManagementSection = {
	title: "Wealth Management",
	list: [			
		{
			title: "Funds",
			path: "/admin/wealth-management/fund",
			icon: "mingcute:settings-2-fill",
			children: [
				{ title: "Overview", path: "/admin/wealth-management/fund/overview", icon: "mingcute:settings-2-fill" },
				{ title: "Reports", path: "/admin/wealth-management/fund/reports", icon: "mingcute:settings-2-fill" },
			],
		},
		{
			title: "Portfolio",
			path: "/admin/wealth-management/portfolio",
			icon: "mingcute:settings-2-fill",
			//children: [
			//	{}
			//],
		},
		{
			title: "Research",
			path: "/admin/wealth-management/research",
			icon: "mingcute:settings-2-fill",
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
			icon: "mingcute:settings-2-fill",
			//children: [
			//	{}
			//],
		},
		{
			title: "User Guide",
			path: "/admin/guide/user-guide",
			icon: "mingcute:settings-2-fill",
			//children: [
			//	{}
			//],
		},
		{
			title: "Contact Us",
			path: "/admin/guide/contact-us",
			icon: "mingcute:settings-2-fill",
			//children: [
			//	{}
			//],
		},
	]
}


export const navAdmin = {
	title: "",
	list: [
		{
			title: "home",
			path: "/super-admin/home",
			icon: "mingcute:settings-2-fill",
			//children: [
			//	{}
			//],
		},
		{
			title: "Transfers",
			path: "/super-admin/transactions",
			icon: "mingcute:settings-2-fill",
			//children: [
			//	{}
			//],
		},
	]
}