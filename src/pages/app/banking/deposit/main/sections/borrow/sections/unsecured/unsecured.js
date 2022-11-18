import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";

import TermDepositBorrowDotted from "../../doted";
import TermDepositBorrowUnSecuredBody from "./sections/body";

const StyledTermDepositBorrowUnSecured = styled(Box, Stack)(({ theme }) => ({

}));

const TermDepositBorrowUnSecured = () => {
	return (
		<StyledTermDepositBorrowUnSecured
			direction="column"
			spacing={2}
		>
			<TermDepositBorrowDotted/>
			<TermDepositBorrowUnSecuredBody/>
		</StyledTermDepositBorrowUnSecured>
	)
}

export default TermDepositBorrowUnSecured