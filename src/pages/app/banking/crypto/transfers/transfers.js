import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { tabsInfo } from "./info";
import TabComponent from "src/components/Tabs";

const StyledCryptoTransfers = styled(Box)(({ theme }) => ({

}));

const headerStyles = {
	textTransform: "capitalize",
	marginBottom: "30px"
}

const CryptoTransfers = () => {
	return (
		<StyledCryptoTransfers>
			<Typography variant="h5" color="text.secondary" sx={headerStyles}>
				Crypto and Trading account transfers
			</Typography>
			<TabComponent
				tabsInfo={tabsInfo}
			/>
		</StyledCryptoTransfers>
	)
}

export default CryptoTransfers