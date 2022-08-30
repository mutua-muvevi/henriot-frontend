import { FaHome, FaFolder, FaRegMoneyBillAlt, FaMoneyCheckAlt, FaBook, } from 'react-icons/fa';
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
		path: "/dashboard/shipment",
		icon: <BsFillInfoCircleFill style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "HG Vault",
		path: "/dashboard/storage",
		icon: <BsShieldLockFill style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Research Center",
		path: "/dashboard/quotation",
		icon:  <BsFillBarChartLineFill style={sx}/>,
		nested: [
			{}
		],
	},
]
export const overviewLayer = [
	{
		label: "Overview",
		path: "/dashboard/resources",
		icon:  <BsHouseFill style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Positions",
		path: "/dashboard/users",
		icon:  <FaFolder style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Order",
		path: "/dashboard/users",
		icon:  <FaMoneyCheckAlt style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Account",
		path: "/dashboard/users",
		icon:  <FaRegMoneyBillAlt style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Banking",
		path: "/dashboard/users",
		icon:  <BsBank2 style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Crypto Transfers",
		path: "/dashboard/users",
		icon:  <BsCurrencyBitcoin style={sx}/>,
		nested: [
			{}
		],
	},
]
export const documentationLayer = [
	{
		label: "Documentation",
		path: "/dashboard/users",
		icon:  <FaBook style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Approach",
		path: "/dashboard/users",
		icon:  <BsBookmarksFill style={sx}/>,
		nested: [
			{}
		],
	},
]