import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { rows, columns } from "../info";
import DatagridComponent from "src/components/datagrid/datagrid";

const StyledCryptoPortfolioTable = styled(Card)(({ theme }) => ({
	marginTop: 30
}));

const StyledCryptoPortfolioCardContent = styled(CardContent)(({ theme }) => ({

}));

const spanStyle = {
	fontWeight: "900",
}

const CryptoPortfolioTable = () => {
	return (
		<StyledCryptoPortfolioTable>
			<StyledCryptoPortfolioCardContent>
				<Typography variant="h6" color="text.secondary" gutterBottom>
					Total Estimated Value : <span style={spanStyle}>
						$55,000,286,606.45
					</span>
				</Typography>
				<Divider sx={{backgroundColor: "grey"}}/>
				<DatagridComponent
					title="Crypto portfolio table"
					rows={rows}
					columns={columns}
				/>
			</StyledCryptoPortfolioCardContent>
		</StyledCryptoPortfolioTable>
	)
}

export default CryptoPortfolioTable