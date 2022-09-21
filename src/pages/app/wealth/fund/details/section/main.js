import { Box, Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";

import FundDetailsLowerSection from "./lower";
import FundDetailsMiddleSection from "./middle";
import FundDetailsUpperSection from "./upper";

const StyledFundDetailsMain = styled(Box)(({ theme }) => ({

}));

const StyledFundDetailsMainStack = styled(Stack)(({ theme }) => ({

}));

const FundDetailsMain = () => {
	return (
		<StyledFundDetailsMain>
			<StyledFundDetailsMainStack
				direction="column"
				spacing={2}
			>
				<FundDetailsUpperSection/>
				<FundDetailsMiddleSection/>
				<FundDetailsLowerSection/>
			</StyledFundDetailsMainStack>
		</StyledFundDetailsMain>
	)
}

export default FundDetailsMain