import { Box, Grid, Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";
import FundingHomeCard from "../../../home/card";

import FundDetailsLowerSection from "./lower/lower";
import FundDetailsMiddleSection from "./middle/middle";
import FundDetailsUpperSection from "./upper/upper";

const StyledFundDetailsMain = styled(Box)(({ theme }) => ({

}));

const FundDetailsMain = () => {
	return (
		<StyledFundDetailsMain>
			<FundDetailsUpperSection/>
			<FundDetailsMiddleSection/>
			<FundDetailsLowerSection/>
			<Grid container spacing={2}>
				{
					[1,2,3].map((el, i) => (
						<Grid key={i} item xs={12} sm={6} md={6} lg={4} xl={4}>
							<FundingHomeCard/>
						</Grid>
					))
				}
			</Grid>
		</StyledFundDetailsMain>
	)
}

export default FundDetailsMain