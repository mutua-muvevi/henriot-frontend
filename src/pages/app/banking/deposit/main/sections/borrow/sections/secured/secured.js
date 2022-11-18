import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";

import TermDepositBorrowDotted from "../../doted";
import TermDepositBorrowSecuredBody from "./sections/body";

const StyledTermDepositBorrowSecured = styled(Stack)(({ theme }) => ({

}));

const TermDepositBorrowSecured = () => {
	return (
		<StyledTermDepositBorrowSecured direction="column" spacing={2}>
			<TermDepositBorrowSecuredBody/>
			<TermDepositBorrowDotted/>
		</StyledTermDepositBorrowSecured>
	)
}

export default TermDepositBorrowSecured