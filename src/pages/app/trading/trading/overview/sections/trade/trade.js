import { Box, Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { tradeTabs } from "../../info";
import TabComponent from "src/components/UI/Tabs";

const StyledCard = styled(Card)(({ theme }) => ({
	minHeight: 300,
}))

const StyledCardContent = styled(CardContent)(({ theme }) => ({

}))


const TradeSection = () => {
	return (
		<StyledCard>
			<StyledCardContent>
				<Stack direction="column" spacing={3}>
					<Typography variant="h6">
						Quick Trade
					</Typography>
				</Stack>
				<TabComponent
					tabsInfo={tradeTabs}
				/>
			</StyledCardContent>
		</StyledCard>
	)
}

export default TradeSection