import { Box, Card, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { portfolioTabs } from "../../info";
import TabComponent from "src/components/UI/Tabs";

const ContainerWrapper = styled(Card)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	minHeight: 300
}));


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