import { Box } from "@mui/material";
import { styled } from "@mui/system";

import ResearchWatchlistBottom from "./sections/bottom";
import ResearchWatchlistMain from "./sections/main/main";
import ResearchWatchlistTop from "./sections/top";

const StyledResearchWatchlist = styled(Box)(({ theme }) => ({

}));

const ResearchWatchlist = () => {
	return (
		<StyledResearchWatchlist>
			<ResearchWatchlistTop/>
			<ResearchWatchlistMain/>
			<ResearchWatchlistBottom/>
		</StyledResearchWatchlist>
	)
}

export default ResearchWatchlist