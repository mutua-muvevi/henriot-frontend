import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import { Box, Button, ButtonGroup, Card, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { chartData, buttonGroupItems } from "./info";

const StyledDepositTermHomeTopChart = styled(Box)(({ theme }) => ({
}));

const StyledStack = styled(Stack)(({ theme }) => ({
}));

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
	marginBottom: 20,
}));

const StyledChartWrapper = styled(Card)(({ theme }) => ({
	padding: "10px",
	height: 350
}))

const DepositTermHomeTopChart = () => {
	return (
		<StyledDepositTermHomeTopChart>
			<StyledStack direction="column" spacing={3}>
				<StyledButtonGroup variant="outlined" color="primary" aria-label="Fund filters">
					{buttonGroupItems.map((el, i) => (
						<Button key={i}>
							<Typography variant="body2" sx={{ color: "text.primary" }}>
								{el.label}
							</Typography>
						</Button>
					))}
				</StyledButtonGroup>
			</StyledStack>
			<StyledChartWrapper>
				<Chart type="line" data={chartData} height="100%"/>
			</StyledChartWrapper>
		</StyledDepositTermHomeTopChart>
	)
}

export default DepositTermHomeTopChart