import { Box } from "@mui/material";
import { styled } from "@mui/system";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { TotalsChartData } from "../../info";

const StyledTotalChartHome = styled(Box)(({ theme }) => ({
	
}))

const data = {
	labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
	datasets: [
		{
			//label: 'My First dataset',
			fill: false,
			lineTension: 0.1,
			backgroundColor: '#ed0f51',
			borderColor: '#ed0f51',
			borderCapStyle: 'round',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: '#ed0f51',
			pointBackgroundColor: '#ffffff',
			pointBorderWidth: 2,
			pointHoverRadius: 10,
			pointHoverBackgroundColor: '#ed0f51',
			pointHoverBorderColor: '#ed0f51',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [65012, 23459, 84230, 81423, 53426, 13455, 99840]
		}
	]
	};

const TotalChartHome = () => {
	return (
		<StyledTotalChartHome>
    		<Chart type='line' data={data} height="100%"/>
		</StyledTotalChartHome>
	)
}

export default TotalChartHome