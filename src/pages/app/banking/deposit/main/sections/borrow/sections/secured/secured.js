import { Box } from "@mui/material";
import { styled } from "@mui/system";
import TermDepositBorrowDotted from "../../doted";

const StyledTermDepositBorrowSecured = styled(Box)(({ theme }) => ({

}));

const TermDepositBorrowSecured = () => {
	return (
		<StyledTermDepositBorrowSecured>
			<TermDepositBorrowDotted/>
		</StyledTermDepositBorrowSecured>
	)
}

export default TermDepositBorrowSecured