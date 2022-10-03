import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { sentenceCase } from "change-case";

const StyledCard = styled(Card)(({ theme }) => ({
	padding: "10px",
	minHeight: 200,
}));

const PrescribedAssetAllocation = () => {
	return (
		<StyledCard>
			<Typography variant="h5" color="primary" gutterBottom>
				{sentenceCase("prescribed asset allocation")}
			</Typography>
		</StyledCard>
	)
}

export default PrescribedAssetAllocation