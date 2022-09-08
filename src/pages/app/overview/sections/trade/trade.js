import { Box, Card, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { tradeTabs } from "../../info";
import TabComponent from "src/components/Tabs";

const ContainerWrapper = styled(Card)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	minHeight: 300,
	padding: 0
}))


const TradeSection = () => {
	return (
		<ContainerWrapper>
			<TabComponent
				tabsInfo={tradeTabs}
			/>
		</ContainerWrapper>
	)
}

export default TradeSection