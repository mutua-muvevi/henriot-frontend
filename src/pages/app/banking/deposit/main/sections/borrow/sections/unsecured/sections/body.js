import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import TermDepositBorrowUnSecuredBodyLeft from "./left";
import TermDepositBorrowUnSecuredBodyRight from "./right";

const StyledTermDepositBorrowUnSecuredBody = styled(Grid)(({ theme }) => ({
	marginTop: "20px"
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
	display: "flex",
	alignItems: "flex-start"
}));

const TermDepositBorrowUnSecuredBody = () => {
	return (
		<StyledTermDepositBorrowUnSecuredBody container spacing={2}>
			<StyledGridItem sx={{pr:"20px"}} item xs={12} sm={12} md={12} lg={5} xl={5}>
				<TermDepositBorrowUnSecuredBodyLeft/>
			</StyledGridItem>

			<StyledGridItem item xs={12} sm={12} md={12} lg={7} xl={7}>
				<TermDepositBorrowUnSecuredBodyRight/>
			</StyledGridItem>
		</StyledTermDepositBorrowUnSecuredBody>
	)
}

export default TermDepositBorrowUnSecuredBody