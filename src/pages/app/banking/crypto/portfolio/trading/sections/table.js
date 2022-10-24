import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { rows, columns } from "../info";
import DatagridComponent from "src/components/datagrid/datagrid";

const StyledTradingPortfolioTable = styled(Card)(({ theme }) => ({
	marginTop: 30
}));

const StyledTradingPortfolioCardContent = styled(CardContent)(({ theme }) => ({

}));

const spanStyle = {
	fontWeight: "900",
}

const TradingPortfolioTable = () => {
	return (
		<StyledTradingPortfolioTable>
			<StyledTradingPortfolioCardContent>
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
			</StyledTradingPortfolioCardContent>
		</StyledTradingPortfolioTable>
	)
}

export default TradingPortfolioTable