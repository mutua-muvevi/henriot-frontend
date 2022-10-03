
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import ExpenseRatio from "./expense";

import HistoricalReturns from "./historical";
import FundingDetailsPortfolio from "./portfolio";



const StyledRightSideFundsDetailsLowerSection = styled(Box)(({ theme }) => ({

}))

const RightSideFundsDetailsLowerSection = () => {
	return (
		<StyledRightSideFundsDetailsLowerSection>
			<Stack direction="column" spacing={2}>
				<HistoricalReturns/>
				<FundingDetailsPortfolio/>
				<ExpenseRatio/>
			</Stack>
		</StyledRightSideFundsDetailsLowerSection>
	)
}

export default RightSideFundsDetailsLowerSection