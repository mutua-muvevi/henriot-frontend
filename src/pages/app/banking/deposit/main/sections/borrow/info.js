import { BsFileEarmarkFill, BsArrowLeftRight, BsFillDiagram3Fill } from "react-icons/bs";

const iconStyles = {
	fontSize: "25px",
	marginBottom:"5px"
}

export const dottedSectionItems = [
	{
		icon: <BsFileEarmarkFill style={iconStyles}/>,
		text:"Create a loan request"
	},
	{
		icon: <BsArrowLeftRight style={iconStyles}/>,
		text:"Collateral ... some instructional content here"
	},
	{
		icon: <BsFillDiagram3Fill style={iconStyles}/>,
		text:"Repay at any time"
	},
	{
		icon: <BsArrowLeftRight style={iconStyles}/>,
		text:"Receive colateral in spot account"
	},
]

export const unsecuredBorrow = [
	{
		link: "/admin/banking/team-deposit/main/borrow/unsecured",
		text:"Unsecured"
	},
	{
		link: "/admin/banking/team-deposit/main/borrow/secured",
		text:"USC Secured Vs 100% Collateral"
	},
]