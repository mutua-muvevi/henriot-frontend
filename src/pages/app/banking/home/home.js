import { Box, Grid, Grow } from "@mui/material";
import { styled } from "@mui/system";

import Page from '../../../../components/UI/Page';
import { topCards, mainCards } from "./info";
import BankingMainCard from "./sections/maincard";
import BankingNewsSection from "./sections/news";
import BankingTopCard from "./sections/topcard";

const StyledOverviewGrid = styled(Grid)(({ theme }) => ({

}))

const StyledOverviewGridItem = styled(Grid)(({ theme }) => ({

}))

const BankingDashboard = () => {
	return (
		<Page title="Home" id="dashboard homepage">
			<StyledOverviewGrid container spacing={2}>
				{
					topCards.map((el, i) => (
						<StyledOverviewGridItem key={i} item xs={6} sm={6} md={4} lg={2} xl={2}>
							<BankingTopCard data={el}/>
						</StyledOverviewGridItem>
					))
				}
				{
					mainCards.map((el, i) => (
						<StyledOverviewGridItem key={i} item xs={12} sm={12} md={6} lg={3} xl={3}>
							<BankingMainCard data={el}/>
						</StyledOverviewGridItem>
					))
				}

				<StyledOverviewGridItem item xs={12} sm={12} md={12} lg={12} xl={12}>
					<BankingNewsSection/>
				</StyledOverviewGridItem>
			</StyledOverviewGrid>
		</Page>
	)
}

export default BankingDashboard