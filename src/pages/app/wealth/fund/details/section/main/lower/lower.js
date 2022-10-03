import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import LeftSideFundsDetailsLowerSection from "./left/left";
import RightSideFundsDetailsLowerSection from "./right/right";

const StyledFundDetailsLowerSection = styled(Grid)(({ theme }) => ({
	marginBottom: "20px"
}));

const StyledFundDetailsLowerSectionItem = styled(Grid)(({ theme }) => ({

}));

const FundDetailsLowerSection = () => {
	return (
		<StyledFundDetailsLowerSection container spacing={2}>
			<StyledFundDetailsLowerSectionItem item xs={12} sm={12} md={12} lg={5} xl={5}>
				<LeftSideFundsDetailsLowerSection/>
			</StyledFundDetailsLowerSectionItem>
			<StyledFundDetailsLowerSectionItem item xs={12} sm={12} md={12} lg={7} xl={7}>
				<RightSideFundsDetailsLowerSection/>
			</StyledFundDetailsLowerSectionItem>
		</StyledFundDetailsLowerSection>
	)
}

export default FundDetailsLowerSection