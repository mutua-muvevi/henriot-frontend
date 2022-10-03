import { Box, Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";

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
		</StyledFundDetailsMain>
	)
}

export default FundDetailsMain