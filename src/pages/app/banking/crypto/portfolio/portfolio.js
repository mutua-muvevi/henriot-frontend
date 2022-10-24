import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { tabsInfo } from "./info";
import TabComponent from "src/components/Tabs";

const StyledCryptoPortfolio = styled(Box)(({ theme }) => ({

}));

const headerStyles = {
	textTransform: "capitalize"
}

const CryptoPortfolio = () => {
	return (
		<StyledCryptoPortfolio>
			<Typography variant="h5" color="text.secondary" sx={headerStyles}>
				Crypto portfolio
			</Typography>
			<TabComponent
				tabsInfo={tabsInfo}
			/>
		</StyledCryptoPortfolio>
	)
}

export default CryptoPortfolio