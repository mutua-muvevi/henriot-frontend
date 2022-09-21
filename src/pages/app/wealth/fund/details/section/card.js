import PropTypes from "prop-types"

import { Box, Card } from "@mui/material";
import { styled } from "@mui/system";

const StyledFundDetailsCard = styled(Card)(({ theme }) => ({
	height: 100,
	padding: "5px",
	display: "flex",
	alignItems: "center"
}))

const FundDetailsCard = ({ component, config }) => {
	return (
		<StyledFundDetailsCard>
			{component}
		</StyledFundDetailsCard>
	)
}

FundDetailsCard.propTypes = {
	component : PropTypes.node,
	config : PropTypes.object
}

export default FundDetailsCard