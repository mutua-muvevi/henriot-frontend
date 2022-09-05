import { Box, Grid, Grow } from "@mui/material";
import { styled } from "@mui/system";
import Main from "./sections/main";
import TopSection from "./sections/top";
import Page from '../../../components/Page';

const StyledOverviewWrapper = styled(Box)(({ theme }) => ({
	paddingTop: 10
}))

const StyledOverviewGrid = styled(Grid)(({ theme }) => ({

}))

const StyledOverviewGridItem = styled(Grid)(({ theme }) => ({

}))

const Overview = () => {
	return (
		<Page title="Home">

			<StyledOverviewWrapper>
				<StyledOverviewGrid container spacing={2}>
					<StyledOverviewGridItem item xs={12} sm={12} md={12} lg={12} xl={12}>
						<TopSection/>
					</StyledOverviewGridItem>

					<StyledOverviewGridItem item xs={12} sm={12} md={12} lg={12} xl={12}>
						<Main/>
					</StyledOverviewGridItem>
				</StyledOverviewGrid>
			</StyledOverviewWrapper>
		</Page>
	)
}

export default Overview