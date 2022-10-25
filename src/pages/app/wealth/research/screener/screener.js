import { Box } from "@mui/material";
import { styled } from "@mui/system";

import ResearchScreenerBottom from "./sections/bottom";
import ResearchScreenerMain from "./sections/main/main";
import ResearchScreenerTop from "./sections/top.js";

const StyledResearchScreener = styled(Box)(({ theme }) => ({

}));

const ResearchScreener = () => {
	return (
		<StyledResearchScreener>
			<ResearchScreenerTop/>
			<ResearchScreenerMain/>
			<ResearchScreenerBottom/>
		</StyledResearchScreener>
	)
}

export default ResearchScreener