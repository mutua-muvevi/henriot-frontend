import { Box, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

import DatagridComponent from "src/components/datagrid/datagrid";
import { columns, rows } from "../info";

const StyledCryptoWithdraw = styled(Box)(({ theme }) => ({

}));

const StyledCard = styled(Card)(({ theme }) => ({
	marginTop: "30px",
	minHeight: 200
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({

}));

const CryptoWithdraw = () => {
	return (
		<StyledCryptoWithdraw>
			<StyledCard>
				<StyledCardContent>
					<DatagridComponent
						title="Crypto to trading account transfers"
						rows={rows}
						columns={columns}
					/>
				</StyledCardContent>
			</StyledCard>
		</StyledCryptoWithdraw>
	)
}

export default CryptoWithdraw