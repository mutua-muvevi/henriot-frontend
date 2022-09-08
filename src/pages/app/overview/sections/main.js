import { Box, Card, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system"

import SimpleCard from "../../../../components/card/simple";
import ChartSection from "./chart/chart";
import NotificationSection from "./notification";
import OrderHistorySection from "./orderhistory";
import PortfolioSection from "./portfolio/portfolio";
import TradeSection from "./trade/trade";
import WatchlistSection from "./watchlist";

const StyledOverviewMain = styled(Box)(({ theme }) => ({

}))

const StyledOverviewGridContainer = styled(Grid)(({ theme }) => ({

}))

const StyledOverviewGridItem = styled(Grid)(({ theme }) => ({

}));

const StyledCommponentSection = styled(Box)(({ theme }) => ({
	marginBottom: 15,
	width: "100%",
}))

const leftSections = [
	{component: <ChartSection/>},
	{component: <PortfolioSection/>},
	{component: <OrderHistorySection/>},
]

const rightSections = [
	{component: <NotificationSection/>},
	{component: <TradeSection/>},
	{component: <WatchlistSection/>},
]

const Main = () => {
	return (
		<StyledOverviewMain>
			<StyledOverviewGridContainer container spacing={2}>
				<StyledOverviewGridItem item  xs={12} sm={12} md={12} lg={8} xl={8}>
					{
						leftSections.map((el, i) => (
							<StyledCommponentSection key={i}>
								{el.component}
							</StyledCommponentSection>
						))
					}
				</StyledOverviewGridItem>
				<StyledOverviewGridItem item  xs={12} sm={12} md={12} lg={4} xl={4}>
					{
						rightSections.map((el, i) => (
							<StyledCommponentSection key={i}>
								{el.component}
							</StyledCommponentSection>
						))
					}
				</StyledOverviewGridItem>
			</StyledOverviewGridContainer>
		</StyledOverviewMain>
	)
}

export default Main