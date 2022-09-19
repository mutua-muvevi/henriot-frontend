import { tabsInfo } from "../../info";
//mui
import { Box, Card } from "@mui/material";
import { styled } from "@mui/system";
import TabComponent from "src/components/Tabs";

const StyledChartSection = styled(Card)(({ theme }) => ({

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