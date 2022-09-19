// component
import { FaHome, FaCoins, FaBookMedical, FaCommentDollar,  FaDollarSign, FaRegMoneyBillAlt,  } from "react-icons/fa";
import { BsDiagram3Fill, BsLaptopFill, BsFillCartFill, BsTools } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { FaFolder, FaMoneyCheckAlt, FaBook, } from 'react-icons/fa';
import { BsFillFileEarmarkBarGraphFill, BsFillChatRightQuoteFill, BsShieldLockFill, BsFillBarChartLineFill, BsFillCartCheckFill, BsFillCreditCard2FrontFill, BsHouseFill, BsBank2, BsCurrencyBitcoin, BsBookmarksFill } from 'react-icons/bs';

// ----------------------------------------------------------------------

const sx= {
	fontSize: "inherit"
}

export const bankingSection = [
	{
		title: "Dashboard",
		path: "/admin/banking/dashboard",
		icon: <FaHome style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Current Account",
		path: "/admin/banking/current-account",
		icon: <BsBank2 style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Team Deposit",
		path: "/admin/banking/team-deposit",
		icon: <FaRegMoneyBillAlt style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Crypto Account",
		path: "/admin/banking/crypto-account",
		icon: <BsCurrencyBitcoin style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Debit Card",
		path: "/admin/banking/debit-card",
		icon: <BsFillCreditCard2FrontFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
]


export const TradingSection = [
	{
		title: "Trading Platform",
		path: "/admin/trading/trading-platform",
		icon: <FaCommentDollar style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Investment Platform",
		path: "/admin/trading/investment-platform",
		icon: <FaDollarSign style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Quick Buy/Sell",
		path: "/admin/trading/quick-buy-sell",
		icon: <BsFillCartCheckFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
]


export const wealthManagementSection = [
	{
		title: "Funds",
		path: "/admin/wealth-management/fund",
		icon: <FaCoins style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Portfolio",
		path: "/admin/wealth-management/portfolio",
		icon: <BsFillFileEarmarkBarGraphFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Research",
		path: "/admin/wealth-management/research",
		icon: <FaBook style={sx}/>,
		//children: [
		//	{}
		//],
	},
]


export const guideSection = [
	{
		title: "Fee",
		path: "/admin/guide/general-fee",
		icon: <FaMoneyCheckAlt style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "User Guide",
		path: "/admin/guide/user-guide",
		icon: <FaBookMedical style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Contact Us",
		path: "/admin/guide/contact-us",
		icon: <BsFillChatRightQuoteFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
]

