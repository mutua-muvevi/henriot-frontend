import { tabsInfo } from "../../info";
//mui
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import TabComponent from "src/components/Tabs";

const StyledChartSection = styled(Box)(({ theme }) => ({

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