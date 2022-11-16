import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import { Box, Button, ButtonGroup, Card, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { chartData, chartTopSorting } from "./info";

const StyledDepositTermHomeTopChart = styled(Box)(({ theme }) => ({
}));

const StyledStack = styled(Stack)(({ theme }) => ({
	marginBottom : "10px"
}));

const StyledChartfilters = styled(Box)(({ theme }) => ({
	display: "flex",
	justidyContent: "left",
	alignItems: "center",
	textAlign: "left",
	cursor: "pointer"
}));

const StyledChartWrapper = styled(Card)(({ theme }) => ({
	padding: "10px",
	height: 350
}));

const StyledPoint = styled(Box)(({ theme }) => ({
	width:"10px",
	height:"10px",
	borderRadius: "50%",
	marginRight: "10px"
}));

const DepositTermHomeTopChart = () => {
	return (
		<StyledDepositTermHomeTopChart>
			<StyledStack direction="row" spacing={3}>
				{chartTopSorting.map((el, i) => (
					<StyledChartfilters>
						<StyledPoint style={{backgroundColor:el.color}}>
						</StyledPoint>
						<Typography variant="caption" color="GrayText">
							{el.label}
						</Typography>
					</StyledChartfilters>
				))}
			</StyledStack>
			<StyledChartWrapper>
				<Chart type="line" data={chartData} height="100%"/>
			</StyledChartWrapper>
		</StyledDepositTermHomeTopChart>
	)
}

export default DepositTermHomeTopChart