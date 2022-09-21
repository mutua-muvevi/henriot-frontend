import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledFundDetailsLowerSection = styled(Grid)(({ theme }) => ({

}))

const FundDetailsLowerSection = () => {
	return (
		<StyledFundDetailsLowerSection>
			<Typography variant="h2" color="initial">
				Fund details lower section
			</Typography>
		</StyledFundDetailsLowerSection>
	)
}

export default FundDetailsLowerSection