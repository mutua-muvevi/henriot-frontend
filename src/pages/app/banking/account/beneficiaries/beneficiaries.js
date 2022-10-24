import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { columns, rows } from "../beneficiaries/info";
import DatagridComponent from "src/components/datagrid/datagrid";

const StyledBankingBeneficiaries = styled(Box)(({ theme }) => ({
	
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

const BankingBeneficiaries = () => {
  return (
	<StyledBankingBeneficiaries>
		<Typography variant="h5" color="text.seconadry" sx={headerStyles}>
			beneficiaries
		</Typography>
		
		<StyledCard>
			<StyledCardContent>
				<DatagridComponent
					title="Beneficiaries"
					rows={rows}
					columns={columns}
				/>
			</StyledCardContent>
		</StyledCard>
	</StyledBankingBeneficiaries>
  )
}

export default BankingBeneficiaries