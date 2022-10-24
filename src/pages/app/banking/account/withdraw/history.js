import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { columns, rows } from "./info";
import DatagridComponent from "src/components/datagrid/datagrid";

const StyledBankingWithdrawHistory = styled(Box)(({ theme }) => ({
	
}));

const headerStyles = {
	textTransform: "capitalize"
};

const StyledCard = styled(Card)(({ theme }) => ({
	marginTop: 30,
	minHeight: 200
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({

}));

const BankingWithdrawHistory = () => {
  return (
	<StyledBankingWithdrawHistory>
		<Typography variant="h5" color="text.seconadry" sx={headerStyles}>
			withdraw history
		</Typography>
		
		<StyledCard>
			<StyledCardContent>
				<DatagridComponent
					title="Withdraw history"
					rows={rows}
					columns={columns}
				/>
			</StyledCardContent>
		</StyledCard>
	</StyledBankingWithdrawHistory>
  )
}

export default BankingWithdrawHistory