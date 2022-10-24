import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { tabsInfo } from "./info";
import TabComponent from "src/components/Tabs";

const StyledCryptoHistory = styled(Box)(({ theme }) => ({

}));

const headerStyles = {
	textTransform: "capitalize",
	marginBottom: "30px"
}

const CryptoHistory = () => {
	return (
		<StyledCryptoHistory>
			<Typography variant="h5" color="text.secondary" sx={headerStyles}>
				deposit and withdraw history
			</Typography>
			<TabComponent
				tabsInfo={tabsInfo}
			/>
		</StyledCryptoHistory>
	)
}

export default CryptoHistory