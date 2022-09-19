// component
import { FaHome, FaUserTie, FaCommentDollar,  FaDollarSign } from "react-icons/fa";
import { BsDiagram3Fill, BsLaptopFill, BsFillCartFill, BsTools } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { FaFolder, FaRegMoneyBillAlt, FaMoneyCheckAlt, FaBook, } from 'react-icons/fa';
import { BsFillInfoCircleFill, BsShieldLockFill, BsFillBarChartLineFill, BsHouseFill, BsBank2, BsCurrencyBitcoin, BsBookmarksFill } from 'react-icons/bs';

// ----------------------------------------------------------------------

const sx= {
	fontSize: "inherit"
}
const navConfig = [
	{
		title: "Overview",
		path: "/admin/dashboard",
		icon:  <BsHouseFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Positions",
		path: "/admin/positions",
		icon:  <FaFolder style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Order",
		path: "/admin/order",
		icon:  <FaMoneyCheckAlt style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Account",
		path: "/admin/account",
		icon:  <FaRegMoneyBillAlt style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Banking",
		path: "/admin/banking",
		icon:  <BsBank2 style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Crypto Transfers",
		path: "/admin/crypto-transfers",
		icon:  <BsCurrencyBitcoin style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Documentation",
		path: "/admin/documentation",
		icon:  <FaBook style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Approach",
		path: "/admin/approach",
		icon:  <BsBookmarksFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "About",
		path: "/admin/about",
		icon: <BsFillInfoCircleFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "HG Vault",
		path: "/admin/hg-vault",
		icon: <BsShieldLockFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Research Center",
		path: "/admin/research-center",
		icon:  <BsFillBarChartLineFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
]
export default navConfig;

export const bankingSection = [
	{
		title: "Dashboard",
		path: "/admin/banking/dashboard",
		icon: <BsShieldLockFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Current Account",
		path: "/admin/banking/current-account",
		icon: <BsShieldLockFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Team Deposit",
		path: "/admin/banking/team-deposit",
		icon: <BsShieldLockFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Crypto Account",
		path: "/admin/banking/crypto-account",
		icon: <BsShieldLockFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Debit Card",
		path: "/admin/banking/debit-card",
		icon: <BsShieldLockFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
]


export const TradingSection = [
	{
		title: "Trading Platform",
		path: "/admin/trading/trading-platform",
		icon: <BsShieldLockFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Investment Platform",
		path: "/admin/trading/investment-platform",
		icon: <BsShieldLockFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Quick Buy/Sell",
		path: "/admin/trading/quick-buy-sell",
		icon: <BsShieldLockFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
]


export const wealthManagementSection = [
	{
		title: "Funds",
		path: "/admin/wealth-management/fund",
		icon: <BsShieldLockFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Portfolio",
		path: "/admin/wealth-management/portfolio",
		icon: <BsShieldLockFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Research",
		path: "/admin/wealth-management/research",
		icon: <BsShieldLockFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
]


export const guideSection = [
	{
		title: "Funds",
		path: "/admin/guide/general-fee",
		icon: <BsShieldLockFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "User Guide",
		path: "/admin/guide/user-guide",
		icon: <BsShieldLockFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
	{
		title: "Contact Us",
		path: "/admin/guide/contact-us",
		icon: <BsShieldLockFill style={sx}/>,
		//children: [
		//	{}
		//],
	},
]

