import { Box, Card, Button, ButtonGroup, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { sentenceCase } from "change-case";
import { BsShareFill } from "react-icons/bs";
import { FaPrint } from "react-icons/fa";

const StyledFundSummaryCard = styled(Card)(({ theme }) => ({
	padding: "10px",
	minHeight: 400
}));

const StyledFundSummaryCardHeader = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	textAlign: "left"
}));

const styledIcons = {
	fontSize: "12px"
}

const FundSummaryCard = () => {
	return (
		<StyledFundSummaryCard>
			<StyledFundSummaryCardHeader>
				<Typography variant="h5" color="primary" gutterBottom>
					{sentenceCase("fund summary")}
				</Typography>
				<Box>
					<Button
						variant="text"
						color="primary"
						startIcon={<BsShareFill style={styledIcons}/>}
					>
						share
					</Button>
					<Button
						variant="text"
						color="primary"
						startIcon={<FaPrint style={styledIcons}/>}
					>
						print
					</Button>
				</Box>
			</StyledFundSummaryCardHeader>
		</StyledFundSummaryCard>
	)
}

export default FundSummaryCard