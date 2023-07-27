import { tabsInfo } from "../../info";
//mui
import { Box, Card } from "@mui/material";
import { styled } from "@mui/system";
import TabComponent from "src/components/UI/Tabs";

const StyledChartSection = styled(Card)(({ theme }) => ({
	height: 350
}))

const ChartSection = () => {
	return (
		<StyledChartSection>
			<TabComponent
				tabsInfo={tabsInfo}
			/>
		</StyledChartSection>
	)
}

export default ChartSection