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
