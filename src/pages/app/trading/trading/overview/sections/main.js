import { Box, Grid, Stack } from "@mui/material";
import { styled } from "@mui/system"

//import SimpleCard from "../../../../components/card/simple";
import ChartSection from "./chart/graph/chart";
import OrderHistorySection from "./orderhistory/orderhistory";
import BuyPowerSection from "./portfolio/portfolio";
import TradeSection from "./trade/trade";
import WatchlistSection from "./watchlist/watchlist";

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
	{component: <BuyPowerSection/>},
	{component: <OrderHistorySection/>},
]

const rightSections = [
	{component: <TradeSection/>},
	{component: <WatchlistSection/>},
]

const Main = () => {
	return (
		<StyledOverviewMain>
			<StyledOverviewGridContainer container spacing={3}>
				<StyledOverviewGridItem item  xs={12} sm={12} md={12} lg={8} xl={8}>
					<Stack direction="column" spacing={3}>
						{
							leftSections.map((el, i) => (
								<StyledCommponentSection key={i}>
									{el.component}
								</StyledCommponentSection>
							))
						}
					</Stack>
				</StyledOverviewGridItem>
				<StyledOverviewGridItem item  xs={12} sm={12} md={12} lg={4} xl={4}>
					<Stack direction="column" spacing={3}>
						{
							rightSections.map((el, i) => (
								<StyledCommponentSection key={i}>
									{el.component}
								</StyledCommponentSection>
							))
						}
\
					</Stack>
				</StyledOverviewGridItem>
			</StyledOverviewGridContainer>
		</StyledOverviewMain>
	)
}

export default Main