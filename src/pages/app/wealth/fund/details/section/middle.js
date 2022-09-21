import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledFundDetailsMiddleSection = styled(Grid)(({ theme }) => ({

}))

const FundDetailsMiddleSection = () => {
	return (
		<StyledFundDetailsMiddleSection>
			<Typography variant="h2" color="initial">
				Fund details middle section
			</Typography>
		</StyledFundDetailsMiddleSection>
	)
}

export default FundDetailsMiddleSection