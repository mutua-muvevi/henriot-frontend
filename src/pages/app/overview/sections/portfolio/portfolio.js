import { Box, Card, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { portfolioTabs } from "../../info";
import TabComponent from "src/components/Tabs";

const ContainerWrapper = styled(Card)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	minHeight: 300
}))

const fontHeader = {
	paddingLeft: 1,
	paddingTop: 1,
	paddingBottom: 1,
}

const PortfolioSection = () => {
	return (
		<ContainerWrapper>
			<TabComponent
				tabsInfo={portfolioTabs}
				title="Portfolio"
			/>
		</ContainerWrapper>
	)
}

export default PortfolioSection