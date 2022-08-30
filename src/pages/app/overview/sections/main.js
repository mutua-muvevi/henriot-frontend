import { Box, Card, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system"

import BuySellSection from "./buysell";
import ChartSection from "./chart";
import OrderSection from "./order";
import PortfolioSection from "./portfolio";
import WatchlistSection from "./watchlist";
import SimpleCard from "../../../../components/card/simple";

const StyledOverviewMain = styled(Box)(({ theme }) => ({

}))

const StyledOverviewGridContainer = styled(Grid)(({ theme }) => ({

}))

const StyledOverviewGridItem = styled(Grid)(({ theme }) => ({

}))

const chartSectionStyles = {
	marginBottom: 2
}

const Main = () => {
	return (
		<StyledOverviewMain>
			<StyledOverviewGridContainer container spacing={2}>
				<StyledOverviewGridItem item xs={12} sm={12} md={12} lg={7} xl={7}>
					<Box sx={{mb: 2}}>
						<SimpleCard sx={chartSectionStyles}>
							<ChartSection/>
						</SimpleCard>
					</Box>

					<SimpleCard>
						<PortfolioSection/>
					</SimpleCard>

				</StyledOverviewGridItem>
				
				<StyledOverviewGridItem item xs={12} sm={12} md={12} lg={5} xl={5}>
					<SimpleCard>		
						<BuySellSection/>
					</SimpleCard>
				</StyledOverviewGridItem>
				<StyledOverviewGridItem item xs={12} sm={12} md={12} lg={7} xl={7}>
					<SimpleCard>
						<OrderSection/>
					</SimpleCard>
				</StyledOverviewGridItem>

				<StyledOverviewGridItem item xs={12} sm={12} md={12} lg={5} xl={5}>
					<SimpleCard>
						<WatchlistSection/>
					</SimpleCard>
				</StyledOverviewGridItem>

			</StyledOverviewGridContainer>
		</StyledOverviewMain>
	)
}

export default Main