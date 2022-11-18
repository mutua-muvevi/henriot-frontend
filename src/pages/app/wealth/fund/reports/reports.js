import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import FundsReportLeft from "./sections/left";
import FundsReportRight from "./sections/right";

const StyledFundsReport = styled(Grid)(({ theme }) => ({

}));

const StyledGridItems = styled(Grid)(({ theme }) => ({

}));

const FundsReport = () => {
	return (
		<StyledFundsReport container spacing={2}>
			<StyledGridItems item xs={12} sm={12} md={12} lg={7} xl={7}>
				<FundsReportLeft/>
			</StyledGridItems>

			<StyledGridItems item xs={12} sm={12} md={12} lg={5} xl={5}>
				<FundsReportRight/>
			</StyledGridItems>
		</StyledFundsReport>
	)
}

export default FundsReport