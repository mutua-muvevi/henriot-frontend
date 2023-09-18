import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import Main from "./sections/main";
import TopSection from "./sections/top";
import Page from '../../../../../components/UI/Page';

const StyledOverviewWrapper = styled(Box)(({ theme }) => ({
	paddingTop: 10
}))

const TradingDashboard = () => {
	return (
		<Page title="Trading" id="trading homepage">
			<StyledOverviewWrapper>
				<Stack direction="column" spacing={3}>
					<TopSection/>
					<Main/>
				</Stack>
			</StyledOverviewWrapper>
		</Page>
	)
}

export default TradingDashboard