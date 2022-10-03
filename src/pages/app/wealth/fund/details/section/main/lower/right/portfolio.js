import { Box, Card, Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";

import { sentenceCase } from "change-case";
import PieChartComponent from "src/components/chart/pie";

const StyledCard = styled(Card)(({ theme }) => ({
	padding: "10px",
	minHeight: 200,
}));

const StyledChartArea = styled(Stack)(({ theme }) => ({
	position: "relative",
	height: 200,
	width: 200
}));

const chartData = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		label: 'My First Dataset',
		data: [300, 50, 100],
		backgroundColor: [
			'rgb(255, 99, 132)',
			'rgb(54, 162, 235)',
			'rgb(255, 205, 86)'
		],
		hoverOffset: 4,
		animation:{
			animateScale: true
		}
	}],
	options:{
		responsive: true
	}
}

const chartConfig = {
	datasetIdKey:"sdfsdfsnbvdf",
	data:chartData
}

const FundingDetailsPortfolio = () => {
	return (
		<StyledCard>
			<Typography variant="h5" color="primary" gutterBottom>
				{sentenceCase("portfolio")}
			</Typography>
			<StyledChartArea direction="row">
				{
					[1,2,3].map((el, i) => (
						<PieChartComponent key={i} chartConfig={chartConfig}/>
					))
				}
			</StyledChartArea>
		</StyledCard>
	)
}

export default FundingDetailsPortfolio