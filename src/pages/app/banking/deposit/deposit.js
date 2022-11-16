import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledTermDeposit = styled(Box)(({ theme }) => ({

}));

const BankingTeamDeposit = () => {
	return (
		<StyledTermDeposit>
			<Outlet/>
		</StyledTermDeposit>
	)
}

export default BankingTeamDeposit