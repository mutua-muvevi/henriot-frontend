import { FaFilter, FaEye, FaShareAlt, FaPrint } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";

const iconStyles = {
	fontSize: "20px",
}

export const topLeftIcons = [
	{
		icon: <FaFilter style={iconStyles}/>,
		label: "filter"
	},
	{
		icon: <BsFillCartPlusFill style={iconStyles}/>,
		label: "invest online"
	},
	{
		icon: <FaEye style={iconStyles}/>,
		label: "view watchlist"
	},
	{
		icon: <FaShareAlt style={iconStyles}/>,
		label: "share"
	},
	{
		icon: <FaPrint style={iconStyles}/>,
		label: "print"
	},
]

export const buttonGroupItems = [
	{
		label:"all funds",
		action:""
	},
	{
		label:"equities",
		action:""
	},
	{
		label:"debt",
		action:""
	},
	{
		label:"hybrid",
		action:""
	},
	{
		label:"forex",
		action:""
	},
]

export const buttonGroupCardItems = [
	{
		label:"all funds",
		action:""
	},
	{
		label:"equities",
		action:""
	},
	{
		label:"debt",
		action:""
	},
	{
		label:"hybrid",
		action:""
	},
	{
		label:"forex",
		action:""
	},
]