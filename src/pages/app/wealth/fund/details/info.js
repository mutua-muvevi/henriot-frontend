import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { FaFilter, FaEye, FaShareAlt, FaPrint } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";

const iconStyles = {
	fontSize: "15px",
}

export const topRightIcons = [
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

const StyledRiskComponent = styled(Box)(({ theme }) => {

});

const RiskComponent = () => {
	return (
		<StyledRiskComponent>
			<Box>
				
			</Box>
		</StyledRiskComponent>
	)
}