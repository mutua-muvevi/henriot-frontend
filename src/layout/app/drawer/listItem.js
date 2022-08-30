import { FaFolder, FaRegMoneyBillAlt, FaMoneyCheckAlt, FaBook, } from 'react-icons/fa';
import { BsFillInfoCircleFill, BsShieldLockFill, BsFillBarChartLineFill, BsHouseFill, BsBank2, BsCurrencyBitcoin, BsBookmarksFill } from 'react-icons/bs';


const sx= {
	minWidth: 0,
	justifyContent: 'center',
	fontSize: "inherit"
}


export const logoLayer = [

]

export const aboutLayer = [
	{
		label: "About",
		path: "/admin/about",
		icon: <BsFillInfoCircleFill style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "HG Vault",
		path: "/admin/hg-vault",
		icon: <BsShieldLockFill style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Research Center",
		path: "/admin/research-center",
		icon:  <BsFillBarChartLineFill style={sx}/>,
		nested: [
			{}
		],
	},
]
export const overviewLayer = [
	{
		label: "Overview",
		path: "/admin/dashboard",
		icon:  <BsHouseFill style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Positions",
		path: "/admin/positions",
		icon:  <FaFolder style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Order",
		path: "/admin/order",
		icon:  <FaMoneyCheckAlt style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Account",
		path: "/admin/account",
		icon:  <FaRegMoneyBillAlt style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Banking",
		path: "/admin/banking",
		icon:  <BsBank2 style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Crypto Transfers",
		path: "/admin/crypto-transfers",
		icon:  <BsCurrencyBitcoin style={sx}/>,
		nested: [
			{}
		],
	},
]
export const documentationLayer = [
	{
		label: "Documentation",
		path: "/admin/documentation",
		icon:  <FaBook style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Approach",
		path: "/admin/approach",
		icon:  <BsBookmarksFill style={sx}/>,
		nested: [
			{}
		],
	},
]