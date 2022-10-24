import { Box, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

import DatagridComponent from "src/components/datagrid/datagrid";
import { columns, rows } from "../info";

const StyledTradingToCrypto = styled(Box)(({ theme }) => ({
	marginTop: 30
}));

const StyledCard = styled(Card)(({ theme }) => ({
	marginTop: 30,
	minHeight: 200
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({

}));

const TradingToCrypto = () => {
	return (
		<StyledTradingToCrypto>
			<StyledCard>
				<StyledCardContent>
					<DatagridComponent
						title="Trading to crypto account transfers"
						rows={rows}
						columns={columns}
					/>
				</StyledCardContent>
			</StyledCard>
		</StyledTradingToCrypto>
	)
}

export default TradingToCrypto