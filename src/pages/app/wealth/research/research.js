import { Box } from "@mui/material";
import { styled } from "@mui/system";

import TabComponent from "src/components/UI/Tabs";
import { tabsInfo } from "./info";

const StyledWealthResearch = styled(Box)(({ theme }) => ({

}));

const WealthResearch = () => {
	return (
		<StyledWealthResearch>
			<TabComponent
				tabsInfo={tabsInfo}
				tabsWidth="400px"
				tabsBorder="0px"
			/>
		</StyledWealthResearch>
	)
}

export default WealthResearch