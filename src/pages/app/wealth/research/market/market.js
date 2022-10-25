import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import ResearchMarketCard from "./card/card";

const StyledResearchMarket = styled(Grid)(({ theme }) => ({
	marginTop: "30px"
}));

const StyledResearchMarketItems = styled(Grid)(({ theme }) => ({

}));

const ResearchMarket = () => {
	return (
		<StyledResearchMarket container spacing={2}>
			{
				[1,2,3,4,5,6,7,8].map((_, el) => (
					<StyledResearchMarketItems key={el} item xs={12} sm={6} md={4} lg={3} xl={3}>
						<ResearchMarketCard/>
					</StyledResearchMarketItems>
				))
			}
		</StyledResearchMarket>
	)
}

export default ResearchMarket