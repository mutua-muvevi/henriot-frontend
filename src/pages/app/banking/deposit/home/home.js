import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";

import DepositTermHomeTopCards from "./sections/cards";
import DepositTermHomeTopChart from "./sections/chart";
import DepositTermHomeTopTable from "./sections/table";

const StyledDepositTermHome = styled(Box)(({ theme }) => ({
	width: "100%"
}));

const DepositTermHome = () => {
	return (
		<StyledDepositTermHome >
			<DepositTermHomeTopCards/>
			<DepositTermHomeTopTable/>
			<DepositTermHomeTopChart/>
		</StyledDepositTermHome>
	)
}

export default DepositTermHome