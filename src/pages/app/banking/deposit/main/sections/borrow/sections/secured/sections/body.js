import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import TermDepositBorrowSecuredBodyLeft from "./left";
import TermDepositBorrowSecuredBodyRight from "./right";

const StyledTermDepositBorrowSecuredBody = styled(Grid)(({ theme }) => ({
	marginTop: "20px"
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
	display: "flex",
	alignItems: "flex-start"
}));

const TermDepositBorrowSecuredBody = () => {
	return (
		<StyledTermDepositBorrowSecuredBody container spacing={2}>
			<StyledGridItem sx={{pr:"20px"}} item xs={12} sm={12} md={12} lg={5} xl={5}>
				<TermDepositBorrowSecuredBodyLeft/>
			</StyledGridItem>

			<StyledGridItem item xs={12} sm={12} md={12} lg={7} xl={7}>
				<TermDepositBorrowSecuredBodyRight/>
			</StyledGridItem>
		</StyledTermDepositBorrowSecuredBody>
	)
}

export default TermDepositBorrowSecuredBody