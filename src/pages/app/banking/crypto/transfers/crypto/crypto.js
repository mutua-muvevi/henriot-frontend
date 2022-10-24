import { Box, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

import DatagridComponent from "src/components/datagrid/datagrid";
import { columns, rows } from "../info";

const StyledCryptoToTrading = styled(Box)(({ theme }) => ({
	marginTop: 30
}));

const StyledCard = styled(Card)(({ theme }) => ({
	marginTop: 30,
	minHeight: 200
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({

}));

const CryptoToTrading = () => {
	return (
		<StyledCryptoToTrading>
			<StyledCard>
				<StyledCardContent>
					<DatagridComponent
						title="Crypto to trading account transfers"
						rows={rows}
						columns={columns}
					/>
				</StyledCardContent>
			</StyledCard>
		</StyledCryptoToTrading>
	)
}

export default CryptoToTrading